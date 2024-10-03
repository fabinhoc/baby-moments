<script setup lang="ts">
import PageTitle from 'src/components/PageTitle.vue';
import useDialog from 'src/composables/useDialog';
import useTimelineService from 'src/services/timeline.service';
import { TimelineType } from 'src/types/Timeline.type';
import { onMounted, ref, Ref } from 'vue';
import { useI18n } from 'vue-i18n';

defineOptions({
  name: 'IndexPage',
});

const service = useTimelineService();
const timelines: Ref<TimelineType[] | null> = ref(null);
const dialogConfirmation = useDialog();
const { t } = useI18n();

onMounted(() => {
  getTimelines();
});

const getTimelines = async () => {
  try {
    const { data } = await service.all();
    timelines.value = data;
  } catch (error: any) {
    console.log(error);
  }
};

const remove = async (uuid: string) => {
  try {
    dialogConfirmation
      .confirm(
        t('confirm.title'),
        t('app.pages.timeline.list.deleteConfirmation')
      )
      .onOk(async () => {
        const { data } = await service.remove(uuid);
        timelines.value = data;
        getTimelines();
      });
  } catch (error: any) {
    console.log(error);
  }
};
</script>

<template>
  <q-page padding ref="page">
    <div class="column items-center justify-start q-gutter-y-md">
      <PageTitle :title="$t('app.pages.timeline.list.title')" />
      <q-card
        class="col q-pa-md cursor-pointer hover-card full-width"
        v-for="(timeline, index) in timelines"
        :key="index"
      >
        <q-card-section>
          <div>
            <router-link
              to="/timeline"
              class="poppins-regular text-primary text-h6 title"
              target="_blank"
            >
              {{ timeline.title }}
            </router-link>
            <q-icon
              name="las la-link"
              color="primary"
              style="margin-top: -10px"
              size="sm"
            ></q-icon>
          </div>
          <div class="poppins-regular text-body1 text-secondary">
            {{ timeline.description }}
          </div>
        </q-card-section>
        <q-card-section class="row q-gutter-sm">
          <q-btn
            color="info"
            outline
            size="sm"
            icon="las la-pencil-alt"
            rounded
            :to="{ name: 'timeline-edit', params: { uuid: timeline.uuid } }"
            >{{ $t('app.pages.timeline.list.edit') }}</q-btn
          >
          <q-btn
            color="negative"
            outline
            icon="las la-trash-alt"
            rounded
            size="sm"
            @click="remove(timeline.uuid)"
            >{{ $t('app.pages.timeline.list.remove') }}</q-btn
          >
        </q-card-section>
      </q-card>
      <q-btn
        :to="{ name: 'timeline-new' }"
        color="positive"
        outline
        rounded
        icon="las la-plus"
        >{{ $t('app.pages.timeline.list.add') }}</q-btn
      >
    </div>
  </q-page>
</template>

<style type="css" lang="css" scoped>
.hover-card {
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.hover-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
}
.hover-card .title:hover {
  text-decoration: underline;
}
</style>
