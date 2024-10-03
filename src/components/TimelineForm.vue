<script setup lang="ts">
import { TimelineDto } from 'src/types/dto/Timeline.dto';
import { onMounted, Ref, ref } from 'vue';
import { required } from '@vuelidate/validators';
import useVuelidate from '@vuelidate/core';
import useTimelineService from 'src/services/timeline.service';
import useNotify from 'src/composables/useNotify';
import { useI18n } from 'vue-i18n';
import { useRoute, useRouter } from 'vue-router';

defineOptions({
  name: 'TimelineForm',
});

const service = useTimelineService();
const notify = useNotify();
const { t } = useI18n();
const timelineForm = ref();
const router = useRouter();
const route = useRoute();
const uuid = route.params.uuid as string;
const form: Ref<TimelineDto> = ref({
  title: null,
  description: null,
});
const rules = {
  title: { required },
  description: {},
};
const v$ = useVuelidate(rules, form);

onMounted(() => {
  getTimeline();
});

const handleSubmit = async () => {
  try {
    if (uuid) {
      await service.put(uuid, form.value);
      notify.success(t('success'));
    } else {
      await service.post(form.value);
      notify.success(t('success'));
      clear();
      router.push({ name: 'timeline-list' });
    }
  } catch (error: any) {
    console.log(error);
    const message = error?.response?.data?.message ?? error;
    notify.error(message);
  }
};

const clear = () => {
  if (uuid) {
    getTimeline();
  } else {
    form.value = {
      title: null,
      description: null,
    };
  }
  timelineForm.value.reset();
};

const getTimeline = async () => {
  try {
    if (uuid) {
      const data = await service.findById(uuid);
      form.value = data;
    }
  } catch (error: any) {
    console.log(error);
    const message = error?.response?.data?.message ?? error;
    notify.error(message);
  }
};
</script>

<template>
  <q-form ref="timelineForm" @submit.prevent="handleSubmit">
    <div class="row q-col-gutter-md">
      <div class="col-sm-12 col-md-12 col-lg-12 col-xs-12">
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
      <div class="col-sm-12 col-md-12 col-lg-12 col-xs-12">
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
      <div class="col-sm-12 col-md-12 col-lg-12 col-xs-12 q-gutter-sm">
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
