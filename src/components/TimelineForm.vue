<script setup lang="ts">
import { TimelineDto } from 'src/types/dto/Timeline.dto';
import { Ref, ref } from 'vue';
import { required } from '@vuelidate/validators';
import useVuelidate from '@vuelidate/core';

defineOptions({
  name: 'TimelineForm',
});

const timelineForm = ref();
const form: Ref<TimelineDto> = ref({
  title: null,
  description: null,
});
const rules = {
  title: { required },
  description: {},
};
const v$ = useVuelidate(rules, form);

const handleSubmit = () => {};

const clear = () => {
  form.value = {
    title: null,
    description: null,
  };
  timelineForm.value.reset();
};
</script>

<template>
  <q-form ref="timelineForm" @submit.prevent="handleSubmit">
    <div class="row q-col-gutter-md">
      <div class="col-sm-12 col-md-12 col-lg-12">
        <q-input
          v-model="v$.title.$model"
          :label="$t('app.components.timelineForm.title')"
          lazy-rules
          outlined
          :rules="[
            () => !v$.title.required.$invalid || $t('validations.required'),
          ]"
        >
        </q-input>
      </div>
      <div class="col-sm-12 col-md-12 col-lg-12">
        <q-input
          v-model="v$.description.$model"
          counter
          maxlength="255"
          autogrow
          outlined
          :label="$t('app.components.timelineForm.description')"
        >
        </q-input>
      </div>
      <div class="col-sm-12 col-md-12 col-lg-12 q-gutter-sm">
        <q-btn type="submit" color="primary" outline :disable="v$.$invalid">{{
          $t('app.components.timelineForm.save')
        }}</q-btn>
        <q-btn @click="clear" type="button" color="negative" outline>{{
          $t('app.components.timelineForm.cancel')
        }}</q-btn>
      </div>
    </div>
  </q-form>
</template>
