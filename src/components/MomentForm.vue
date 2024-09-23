<script setup lang="ts">
import { MomentDto } from 'src/types/dto/Moment.dto';
import { Ref, ref } from 'vue';
import { required } from '@vuelidate/validators';
import useVuelidate from '@vuelidate/core';

defineOptions({
  name: 'momentForm',
});

const formMoment = ref();
const form: Ref<MomentDto> = ref({
  title: null,
  description: null,
  avatar: null,
});
const rules = {
  title: { required },
  description: {},
  avatar: {},
};

const v$ = useVuelidate(rules, form);

const handleSubmit = () => {};

const clear = () => {
  form.value = {
    title: null,
    description: null,
    avatar: null,
  };
  formMoment.value.reset();
};
</script>

<template>
  <q-form ref="momentForm" @submit.prevent="handleSubmit">
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
