<script setup lang="ts">
import FileDataUpload from 'src/components/FileDataUpload.vue';
import PageTitle from 'src/components/PageTitle.vue';
import useNotify from 'src/composables/useNotify';
import useAlbumFileService from 'src/services/abumFile.service';
import useAlbumService from 'src/services/album.service';
import { AlbumFileType } from 'src/types/AbumFile.type';
import { AlbumType } from 'src/types/Album.type';
import { AlbumFileFileTypeEnum } from 'src/types/enums/AlbumFileFileType.enum';
import { onMounted, ref, Ref } from 'vue';
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
  try {
    if (id) {
      await albumFileService.remove(id);
      getAlbum();
    }
  } catch (error: any) {
    console.log(error);
    const message = error?.response?.data?.message ?? error;
    notify.error(message);
  }
};
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
        <FileDataUpload />
      </q-card-section>
      <q-card-section>
        <div class="column q-gutter-y-md">
          <div class="row q-col-gutter-md q-mt-sm">
            <div
              class="col-lg-2 col-md-2 col-sm-12 col-xs-12"
              v-for="(albumFile, index) in albumFiles"
              :key="index"
            >
              <q-card
                :style="{
                  backgroundColor: theme,
                  border: '10px solid' + theme,
                }"
                dark
              >
                <video
                  class="full-width"
                  v-if="albumFile.file_type === AlbumFileFileTypeEnum.VIDEO"
                  :src="albumFile.file_path"
                  :autoplay="false"
                  style="height: 200px"
                  controls
                />
                <q-img
                  v-else
                  :src="`${albumFile.file_path}`"
                  style="height: 200px"
                />
                <q-btn
                  flat
                  round
                  :style="{ backgroundColor: theme }"
                  :icon="
                    albumFile.file_type === AlbumFileFileTypeEnum.VIDEO
                      ? 'las la-video'
                      : 'las la-image'
                  "
                  class="absolute"
                  style="top: 13px; right: -5px; transform: translateY(-50%)"
                />
                <q-card-section>
                  <div class="text-h6">
                    {{ albumFile.title ? albumFile.title : '&nbsp;' }}
                  </div>
                </q-card-section>
                <q-card-actions>
                  <div class="text-body2 text-right">
                    <q-chip
                      color="warning"
                      text-color="black"
                      icon="las la-cloud-upload-alt"
                    >
                      {{ albumFile.memory_usage }}
                    </q-chip>
                  </div>
                  <q-btn
                    @click="removeAlbumFile(albumFile.id)"
                    icon="las la-trash"
                    color="black"
                    flat
                  ></q-btn>
                </q-card-actions>
              </q-card>
            </div>
          </div>
        </div>
      </q-card-section>
    </q-card>
  </q-page>
</template>
