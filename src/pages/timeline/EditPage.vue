<script setup lang="ts">
import PageTitle from 'src/components/PageTitle.vue';
import TableMoments from 'src/components/TableMoments.vue';
import TimelineForm from 'src/components/TimelineForm.vue';
import useNotify from 'src/composables/useNotify';
import useTimelineService from 'src/services/timeline.service';
import { MomentType } from 'src/types/Moment.type';
import { TimelineType } from 'src/types/Timeline.type';
import { onMounted, Ref, ref } from 'vue';
import { useRoute } from 'vue-router';

defineOptions({
  name: 'EditPage',
});

onMounted(() => {
  getTimeline();
});

const service = useTimelineService();
const route = useRoute();
const uuid = route.params.uuid as string;
const timeline: Ref<TimelineType | null> = ref(null);
const notify = useNotify();
const moments: Ref<MomentType[] | null> = ref(null);

const getTimeline = async () => {
  try {
    if (uuid) {
      const response = await service.findById(uuid);
      timeline.value = response;
      moments.value = response.moments.data;
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
    <div class="column q-gutter-y-sm">
      <q-card>
        <PageTitle
          :title="$t('app.pages.timeline.edit.title')"
          class="text-center"
        ></PageTitle>
        <q-card-section>
          <q-btn
            :to="{ name: 'timeline-list' }"
            icon="las la-undo"
            flat
            rounded
            color="primary"
            >{{ $t('app.pages.timeline.edit.goBack') }}</q-btn
          >
        </q-card-section>
        <q-card-section>
          <TimelineForm />
        </q-card-section>
        <q-card-section class="column q-gutter-md">
          <q-separator></q-separator>
          <div class="text-h6 text-secondary">
            {{ $t('app.pages.timeline.edit.moment', 0) }}
          </div>
          <div>
            <q-btn
              color="positive"
              icon="las la-plus"
              outline
              :to="{ name: 'moment-new' }"
              >{{ $t('app.pages.timeline.list.addMoment') }}</q-btn
            >
          </div>
          <div v-if="moments?.length">
            <TableMoments :data="moments" />
          </div>
        </q-card-section>
      </q-card>
    </div>
  </q-page>
</template>
