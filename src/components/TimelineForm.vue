<script setup lang="ts">
import { TimelineDto } from 'src/types/dto/Timeline.dto';
import { onMounted, Ref, ref } from 'vue';
import { required } from '@vuelidate/validators';
import useVuelidate from '@vuelidate/core';
import useTimelineService from 'src/services/timeline.service';
import useNotify from 'src/composables/useNotify';
import { useI18n } from 'vue-i18n';
import { useRoute, useRouter } from 'vue-router';
import 'emoji-picker-element';

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
const activeField: Ref<keyof TimelineDto | null> = ref(null);
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

const setActiveField = (field: keyof TimelineDto) => {
  activeField.value = field;
};

const addEmoji = (event: any) => {
  if (activeField.value) {
    const fieldValue = form.value[activeField.value];
    form.value[activeField.value] = fieldValue
      ? fieldValue + event.detail.unicode
      : event.detail.unicode;
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
          @focus="setActiveField('title')"
        >
          <template v-slot:append>
            <q-btn icon="las la-smile" round flat>
              <q-popup-proxy :touch-position="true">
                <emoji-picker
                  @emoji-click="addEmoji"
                  class="light"
                ></emoji-picker>
              </q-popup-proxy>
            </q-btn>
          </template>
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
          @focus="setActiveField('description')"
        >
          <template v-slot:append>
            <q-btn icon="las la-smile" round flat>
              <q-popup-proxy :touch-position="true">
                <emoji-picker
                  @emoji-click="addEmoji"
                  class="light"
                ></emoji-picker>
              </q-popup-proxy>
            </q-btn>
          </template>
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
