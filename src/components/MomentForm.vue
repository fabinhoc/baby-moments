<script setup lang="ts">
import { MomentDto } from 'src/types/dto/Moment.dto';
import { Ref, ref } from 'vue';
import { required } from '@vuelidate/validators';
import useVuelidate from '@vuelidate/core';
import { Cropper } from 'vue-advanced-cropper';
import 'vue-advanced-cropper/dist/style.css';

defineOptions({
  name: 'momentForm',
  components: { Cropper },
});

const formMoment = ref();
const form: Ref<MomentDto> = ref({
  title: null,
  description: null,
  avatar: null,
  color: '#eeeeee',
  position: null,
});
const rules = {
  title: { required },
  description: {},
  avatar: {},
  color: {},
  position: { required },
};

const v$ = useVuelidate(rules, form);

const handleSubmit = () => {};

const clear = () => {
  form.value = {
    title: null,
    description: null,
    avatar: null,
    color: '#eeeeee',
    position: null,
  };
  formMoment.value.reset();
};

const change = ({ coordinates, canvas }: any) => {
  console.log(coordinates, canvas);
};
</script>

<template>
  <q-form ref="formMoment" @submit.prevent="handleSubmit">
    <cropper
      class="cropper"
      src="https://images.unsplash.com/photo-1600984575359-310ae7b6bdf2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=700&q=80"
      :stencil-props="{
        aspectRatio: 10 / 12,
      }"
      @change="change"
    />
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
          v-model="v$.color.$model"
          :rules="['anyColor']"
          class="my-input"
          :label="$t('app.components.momentForm.theme')"
        >
          <template v-slot:append>
            <q-icon name="colorize" class="cursor-pointer">
              <q-popup-proxy
                cover
                transition-show="scale"
                transition-hide="scale"
              >
                <q-color v-model="v$.color.$model" />
              </q-popup-proxy>
            </q-icon>
          </template>
        </q-input>
        <q-badge :style="{ backgroundColor: form.color }" class="q-mb-sm">
          <span class="text-dark">{{ form.color }}</span>
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
      <div class="col-sm-12 col-md-12 col-lg-12 col-xs-12">
        <q-file
          v-model="v$.avatar.$model"
          counter
          autogrow
          outlined
          use-chips
          :label="$t('app.components.momentForm.avatar')"
        >
        </q-file>
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
