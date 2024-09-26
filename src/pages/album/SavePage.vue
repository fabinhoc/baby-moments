<script setup lang="ts">
import PageTitle from 'src/components/PageTitle.vue';

defineOptions({
  name: 'SaveAlbumPage',
});

const theme = '#EF8F71';
const albums: any = [
  {
    title: 'Meu bebezinho fofinho!',
    file_path:
      'https://conteudo.imguol.com.br/c/entretenimento/d7/2020/12/24/bebe-sorrindo-1608810066579_v2_450x450.jpg',
    size: '20KB',
  },
  {
    title: 'Bom diaaaa!',
    file_path:
      'https://img.freepik.com/fotos-gratis/feche-o-bebe-engatinhando-e-aprendendo-a-andar_23-2149294555.jpg',
    size: '18KB',
  },
  {
    title: 'Ebaaa! Vamos brincar!!',
    file_path:
      'https://img.freepik.com/fotos-gratis/bebe-com-bicho-de-pelucia_52683-124509.jpg',
    size: '16KB',
  },
  {
    title: 'Ebaaa! Vamos brincar!!',
    file_path:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT4rW3QFK44c651tosv3o0hMwIV5Z3CMx5qCw&s',
    size: '7KB',
  },
  {
    title: 'Soninho da tarde',
    file_path:
      'https://www.cpaps.com.br/blog/wp-content/uploads/2022/01/como-vestir-o-bebe-para-dormir-no-verao-1000x608.jpg',
    size: '25KB',
  },
  {
    title: '',
    file_path:
      'https://cdn.dooca.store/1707/products/mg-7665-1.jpg?v=1637058135',
    size: '8KB',
  },
  {
    title: 'Passeando com a família',
    media_type: 'video',
    file_path: 'https://www.youtube.com/embed/k3_tw44QsZQ?rel=0',
    size: '8GB',
  },
];
</script>

<template>
  <q-page padding>
    <div class="column q-gutter-sm">
      <q-card>
        <PageTitle
          :title="$t('app.pages.album.save.title')"
          class="text-center"
        ></PageTitle>
        <q-card-section>
          <q-btn
            :to="{ name: 'timeline-edit' }"
            icon="las la-undo"
            flat
            rounded
            color="primary"
            >{{ $t('app.pages.album.save.goBack') }}</q-btn
          >
        </q-card-section>
        <q-card-section>
          <div class="column q-gutter-y-md">
            <q-uploader
              url="http://localhost:4444/upload"
              label="Upload de Imagens e fotos"
              multiple
              batch
              style="width: 100%"
              flat
              bordered
            >
              <template v-slot:list="scope">
                <q-list separator>
                  <q-item v-for="file in scope.files" :key="file.__key">
                    <q-item-section>
                      <q-item-label class="full-width ellipsis">
                        {{ file.name }}
                      </q-item-label>

                      <q-item-label caption>
                        Status: {{ file.__status }}
                      </q-item-label>

                      <q-item-label caption>
                        {{ file.__sizeLabel }} / {{ file.__progressLabel }}
                      </q-item-label>
                    </q-item-section>

                    <q-item-section v-if="file.__img" thumbnail class="gt-xs">
                      <img :src="file.__img.src" />
                    </q-item-section>

                    <q-item-section top side>
                      <q-btn
                        class="gt-xs"
                        size="12px"
                        flat
                        dense
                        round
                        icon="las la-trash"
                        @click="scope.removeFile(file)"
                      />
                    </q-item-section>
                  </q-item>
                </q-list>
              </template>
            </q-uploader>
            <div class="row q-col-gutter-md q-mt-sm">
              <div
                class="col-lg-2 col-md-2 col-sm-12 col-xs-12"
                v-for="(album, index) in albums"
                :key="index"
              >
                <q-card
                  :style="{
                    backgroundColor: theme,
                    border: '10px solid' + theme,
                  }"
                  dark
                >
                  <q-video
                    v-if="album.media_type === 'video'"
                    src="https://www.youtube.com/embed/k3_tw44QsZQ?rel=0"
                  />
                  <q-img v-else :src="album.file_path" style="height: 200px" />
                  <q-btn
                    flat
                    round
                    :style="{ backgroundColor: theme }"
                    :icon="
                      album.media_type === 'video'
                        ? 'las la-video'
                        : 'las la-image'
                    "
                    class="absolute"
                    style="top: 13px; right: -5px; transform: translateY(-50%)"
                  />
                  <q-card-section>
                    <div class="text-h6">
                      {{ album.title ? album.title : '&nbsp;' }}
                    </div>
                  </q-card-section>
                  <q-card-actions>
                    <div class="text-body2 text-right">
                      <q-chip
                        color="warning"
                        text-color="black"
                        icon="las la-cloud-upload-alt"
                      >
                        {{ album.size }}
                      </q-chip>
                    </div>
                    <q-btn icon="las la-trash" color="black" flat></q-btn>
                  </q-card-actions>
                </q-card>
              </div>
            </div>
          </div>
        </q-card-section>
      </q-card>
    </div>
  </q-page>
</template>
