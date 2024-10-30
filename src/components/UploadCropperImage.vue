<script lang="ts" setup>
import { Ref, ref } from 'vue';
import { CircleStencil, Cropper } from 'vue-advanced-cropper';
import 'vue-advanced-cropper/dist/style.css';

defineOptions({
  name: 'UploadCropperImage',
  components: {
    Cropper,
    CircleStencil,
  },
});

const emit = defineEmits(['croppedImage', 'thumbUrl']);

const file: Ref<HTMLInputElement | null> = ref(null);
const image: Ref<{ src: string | null; type: string | null }> = ref({
  src: null,
  type: null,
});
const cropper: any = ref();

const handleFileChange = (event: any) => {
  const { files } = event.target;
  if (files && files[0]) {
    if (image.value.src) {
      URL.revokeObjectURL(image.value.src);
    }
    const blob = URL.createObjectURL(files[0]);
    const reader = new FileReader();
    reader.onload = (e) => {
      image.value = {
        src: blob,
        type: getMimeType(e?.target?.result, files[0].type),
      };
    };
    reader.readAsArrayBuffer(files[0]);
  }
};

const getMimeType = (file: any, fallback = null) => {
  const byteArray = new Uint8Array(file).subarray(0, 4);
  let header = '';
  for (let i = 0; i < byteArray.length; i++) {
    header += byteArray[i].toString(16);
  }
  switch (header) {
    case '89504e47':
      return 'image/png';
    case '47494638':
      return 'image/gif';
    case 'ffd8ffe0':
    case 'ffd8ffe1':
    case 'ffd8ffe2':
    case 'ffd8ffe3':
    case 'ffd8ffe8':
      return 'image/jpeg';
    default:
      return fallback;
  }
};

const uploadImage = () => {
  const { canvas } = cropper.value.getResult();
  if (canvas) {
    emit('thumbUrl', canvas.toDataURL());
    canvas.toBlob(async (blob: any) => {
      emit('croppedImage', await blob);
    }, 'image/jpeg');
  }
};
</script>

<template>
  <q-dialog full-width full-height>
    <q-card class="q-pa-md">
      <input
        type="file"
        ref="file"
        @change="handleFileChange($event)"
        accept="image/*"
        style="display: none"
      />
      <q-card-actions class="row items-center justify-center">
        <q-btn
          icon="las la-sync-alt"
          unelevated
          color="primary"
          @click="file?.click()"
          >change image</q-btn
        >
        <q-btn
          icon="las la-save"
          unelevated
          color="primary"
          @click="uploadImage"
          >upload image</q-btn
        >
        <q-space></q-space>
        <q-btn icon="las la-times" flat round dense v-close-popup />
      </q-card-actions>
      <q-card-section
        style="height: 90%"
        class="column items-center justify-center"
      >
        <Cropper
          ref="cropper"
          class="cropper"
          :src="image.src"
          :stencil-component="CircleStencil"
          :canvas="{
            width: 80,
            height: 80,
          }"
          :stencil-props="{
            handlers: {},
            movable: false,
            resizable: false,
            backgroundClass: '#eee',
          }"
          :stencil-size="{
            width: 80,
            height: 80,
          }"
          image-restriction="stencil"
        />
      </q-card-section>
    </q-card>
  </q-dialog>
</template>

<style scoped lang="css">
.cropper {
  height: 250px;
  width: 250px;
  background: #ddd;
}
</style>
