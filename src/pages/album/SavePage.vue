<script setup lang="ts">
import AlbumFileCard from 'src/components/AlbumFileCard.vue';
import FileDataUpload from 'src/components/FileDataUpload.vue';
import PageTitle from 'src/components/PageTitle.vue';
import useDialog from 'src/composables/useDialog';
import useNotify from 'src/composables/useNotify';
import useAlbumFileService from 'src/services/abumFile.service';
import useAlbumService from 'src/services/album.service';
import { AlbumFileType } from 'src/types/AbumFile.type';
import { AlbumType } from 'src/types/Album.type';
import { onMounted, provide, ref, Ref } from 'vue';
import { useRoute } from 'vue-router';

defineOptions({
  name: 'SaveAlbumPage',
});

onMounted(() => {
  getAlbum();
});

const route = useRoute();
const id = route.params.id as string;
const service = useAlbumService();
const albumFileService = useAlbumFileService();
const notify = useNotify();
const album: Ref<AlbumType | null> = ref(null);
const albumFiles: Ref<AlbumFileType[]> = ref([]);
const theme: Ref<string> = ref('#eee');
const dialogConfirmation = useDialog();

const getAlbum = async () => {
  try {
    if (id) {
      const response = await service.findById(id);
      album.value = response;
      albumFiles.value = response.album_files.data.map((file: any) => {
        return {
          ...file,
          file_path: `${process.env.STORAGE_URL}${file.file_path}`, // Adiciona a URL
        };
      });
      theme.value = response.moment.theme;
    }
  } catch (error: any) {
    console.log(error);
    const message = error?.response?.data?.message ?? error;
    notify.error(message);
  }
};

const removeAlbumFile = async (id: number) => {
  dialogConfirmation.confirm().onOk(async () => {
    if (id) {
      await albumFileService.remove(id);
      getAlbum();
    }
  });
};

const updateAlbumFile = async (id: number, title: string) => {
  try {
    if (id) {
      await albumFileService.put(id, { title: title });
      getAlbum();
    }
  } catch (error: any) {
    console.log(error);
    const message = error?.response?.data?.message ?? error;
    notify.error(message);
  }
};

provide('removeAlbumFile', removeAlbumFile);
provide('updateAlbumFile', updateAlbumFile);
</script>

<template>
  <q-page padding>
    <q-card class="q-py-xs">
      <PageTitle
        :title="$t('app.pages.album.save.title')"
        class="text-center"
      ></PageTitle>
      <q-card-section>
        <q-btn
          :to="{
            name: 'timeline-edit',
            params: { uuid: album?.moment.timeline.uuid },
          }"
          icon="las la-undo"
          flat
          rounded
          color="primary"
          >{{ $t('app.pages.album.save.goBack') }}</q-btn
        >
      </q-card-section>
      <q-card-section>
        <FileDataUpload @uploaded="getAlbum" />
      </q-card-section>
      <q-card-section>
        <div class="column q-gutter-y-md">
          <div class="row q-col-gutter-md q-mt-sm">
            <div
              class="col-lg-2 col-md-2 col-sm-12 col-xs-12"
              v-for="(albumFile, index) in albumFiles"
              :key="index"
            >
              <AlbumFileCard :album-file="albumFile" :theme="theme" />
            </div>
          </div>
        </div>
      </q-card-section>
    </q-card>
  </q-page>
</template>
