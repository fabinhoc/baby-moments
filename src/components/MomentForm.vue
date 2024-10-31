<script setup lang="ts">
import { MomentDto } from 'src/types/dto/Moment.dto';
import { onMounted, Ref, ref } from 'vue';
import { required } from '@vuelidate/validators';
import useVuelidate from '@vuelidate/core';
import UploadCropperImage from 'src/components/UploadCropperImage.vue';
import useMomentService from 'src/services/moment.service';
import { useI18n } from 'vue-i18n';
import useNotify from 'src/composables/useNotify';
import { useRoute, useRouter } from 'vue-router';

defineOptions({
  name: 'momentForm',
});

onMounted(() => {
  getMoment();
});

const openDialog: Ref<boolean> = ref(false);
const formMoment = ref();
const service = useMomentService();
const { t } = useI18n();
const notify = useNotify();
const selectedImage: Ref<File | Blob | null> = ref(null);
const thumbImage: Ref<string | null> = ref(null);
const route = useRoute();
const router = useRouter();
const id = route.params.id as string;
const form: Ref<MomentDto> = ref({
  title: null,
  description: null,
  theme: '#eeeeee',
  position: null,
  avatar: null,
});
const rules = {
  title: { required },
  description: {},
  theme: { required },
  position: { required },
};

const v$ = useVuelidate(rules, form);

const handleSubmit = async () => {
  try {
    const formData = new FormData();
    if (selectedImage.value) {
      console.log('aquiiiii');
      formData.append('avatar', selectedImage.value);
    }
    formData.append('title', form.value.title as string);
    formData.append('description', form.value.description as string);
    formData.append('position', form.value.position?.toString() as string);
    formData.append('timeline_id', route.params.timelineUuid.toString());
    formData.append('theme', form.value.theme as string);

    if (id) {
      await service.put(parseInt(id), formData);
    } else {
      await service.post(formData);
    }

    notify.success(t('success'));
    clear();
    router.push({
      name: 'timeline-edit',
      params: { uuid: route.params.timelineUuid },
    });
  } catch (error: any) {
    console.log(error);
    const message = error?.response?.data?.message ?? error;
    notify.error(message);
  }
};

const clear = () => {
  form.value = {
    title: null,
    description: null,
    theme: '#eeeeee',
    position: null,
    avatar: null,
  };
  thumbImage.value = null;
  selectedImage.value = null;
  formMoment.value.reset();
};

const setImage = (fileImage: Blob) => {
  selectedImage.value = fileImage;
  openDialog.value = false;
};

const createThumb = (url: string) => {
  thumbImage.value = url;
};

const getMoment = async () => {
  try {
    if (id) {
      const data = await service.findById(id);
      form.value = data;
      form.value.avatar = data.avatar
        ? process.env.STORAGE_URL + data.avatar
        : null;

      if (form.value.avatar) {
        thumbImage.value = form.value.avatar;
      }
    }
  } catch (error: any) {
    console.log(error);
    const message = error?.response?.data?.message ?? error;
    notify.error(message);
  }
};
</script>

<template>
  <div class="column justify-center items-center q-pa-md">
    <UploadCropperImage
      v-model="openDialog"
      @cropped-image="setImage"
      @thumb-url="createThumb"
    />
    <div style="position: relative; display: inline-block">
      <q-avatar
        size="80px"
        clickable
        class="cursor-pointer"
        @click="openDialog = true"
        color="grey-2"
      >
        <div v-if="thumbImage">
          <img :src="thumbImage" />
        </div>
        <div v-else>
          <q-icon name="las la-image"></q-icon>
        </div>
      </q-avatar>
      <q-btn
        round
        icon="las la-pencil-alt"
        color="grey-2"
        size="xs"
        text-color="dark"
        style="position: absolute; top: 0; right: -8px"
        @click="openDialog = true"
      />
    </div>
  </div>
  <q-form ref="formMoment" @submit.prevent="handleSubmit">
    <div class="row q-col-gutter-md">
      <div class="col-sm-12 col-md-12 col-lg-12 col-xs-12">
        <q-input
          v-model="v$.title.$model"
          :label="$t('app.components.momentForm.title')"
          lazy-rules
          outlined
          :rules="[
            () => !v$.title.required.$invalid || $t('validations.required'),
          ]"
        >
        </q-input>
      </div>
      <div class="col-sm-12 col-md-12 col-lg-12 col-xs-12">
        <q-input
          v-model="v$.position.$model"
          :label="$t('app.components.momentForm.position')"
          type="number"
          lazy-rules
          outlined
          :rules="[
            () => !v$.position.required.$invalid || $t('validations.required'),
          ]"
          :hint="$t('app.components.momentForm.positionHint')"
        >
        </q-input>
      </div>
      <div class="col col-sm-12 col-md-12 col-lg-12 col-xs-12">
        <q-input
          outlined
          v-model="v$.theme.$model"
          class="my-input"
          :label="$t('app.components.momentForm.theme')"
          :rules="[
            () => !v$.theme.required.$invalid || $t('validations.required'),
          ]"
        >
          <template v-slot:append>
            <q-icon name="colorize" class="cursor-pointer">
              <q-popup-proxy
                cover
                transition-show="scale"
                transition-hide="scale"
              >
                <q-color v-model="v$.theme.$model" />
              </q-popup-proxy>
            </q-icon>
          </template>
        </q-input>
        <q-badge :style="{ backgroundColor: form.theme }" class="q-mb-sm">
          <span class="text-dark">{{ form.theme }}</span>
        </q-badge>
      </div>
      <div class="col col-sm-12 col-md-12 col-lg-12 col-xs-12">
        <q-input
          v-model="v$.description.$model"
          counter
          maxlength="255"
          autogrow
          outlined
          :label="$t('app.components.momentForm.description')"
        >
        </q-input>
      </div>
      <div class="col-sm-12 col-md-12 col-lg-12 q-gutter-sm">
        <q-btn type="submit" color="primary" outline :disable="v$.$invalid">{{
          $t('app.components.momentForm.save')
        }}</q-btn>
        <q-btn @click="clear" type="button" color="negative" outline>{{
          $t('app.components.momentForm.cancel')
        }}</q-btn>
      </div>
    </div>
  </q-form>
</template>
