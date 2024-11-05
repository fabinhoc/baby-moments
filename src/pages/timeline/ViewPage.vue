<script lang="ts" setup>
import useNotify from 'src/composables/useNotify';
import useTimelineService from 'src/services/timeline.service';
import { MomentType } from 'src/types/Moment.type';
import { TimelineType } from 'src/types/Timeline.type';
import { nextTick, onBeforeUnmount, onMounted, Ref, ref } from 'vue';
import { useRoute } from 'vue-router';
import PageTitle from 'src/components/PageTitle.vue';

defineOptions({
  name: 'TimelinePage',
});

onMounted(async () => {
  await getTimeline();
  window.addEventListener('scroll', handleScroll);
  await handleScroll(); // Verifica se algum item já está visível no carregamento
});

onBeforeUnmount(() => {
  window.removeEventListener('scroll', handleScroll);
});

const service = useTimelineService();
const route = useRoute();
const uuid = route.params.uuid as string;
const timeline: Ref<TimelineType | null> = ref(null);
const moments: Ref<MomentType[] | null> = ref(null);
const notify = useNotify();

const getTimeline = async () => {
  try {
    if (uuid) {
      const response = await service.findById(uuid);
      timeline.value = response;
      moments.value = response.moments.data.map((moment: any) => {
        return {
          ...moment,
          avatar: moment.avatar
            ? `${process.env.STORAGE_URL}${moment.avatar}`
            : null, // Adiciona a URL
        };
      });
    }
  } catch (error: any) {
    console.log(error);
    const message = error?.response?.data?.message ?? error;
    notify.error(message);
  }
};

const dynamicBorderStyle = (color: string | null) => ({
  '--border-color': color,
});

const handleScroll = async () => {
  await nextTick(); // Aguarda o DOM renderizar
  const timelineEntries = document.querySelectorAll('.q-timeline__entry');
  timelineEntries.forEach((entry, index) => {
    const rect = entry.getBoundingClientRect();
    if (rect.top < window.innerHeight && rect.bottom > 0) {
      if (moments.value) {
        moments.value[index].isVisible = true;
      }
    }
  });
};
</script>

<template>
  <q-page padding @scroll="handleScroll" ref="page">
    <PageTitle
      :title="timeline?.title as string"
      class="text-center"
    ></PageTitle>

    <div class="column items-center justify-start q-mb-xl">
      <q-timeline :layout="'loose'" color="secondary">
        <q-timeline-entry
          class="custom-avatar"
          :class="{ 'is-visible': moment.isVisible }"
          v-for="(moment, index) in moments"
          :key="index"
          :avatar="moment.avatar ?? ''"
          :side="index % 2 === 0 ? 'left' : 'right'"
          :style="dynamicBorderStyle(moment.theme)"
        >
          <template v-slot:title>
            <router-link
              class="text-primary poppins-semibold all-pointer-events cursor-pointer text-underline"
              :to="{
                name: 'view-album',
                params: {
                  id: moment.album.id,
                },
              }"
            >
              {{ moment.title }}
            </router-link>
          </template>
          <template v-slot:subtitle>
            <div class="text-primary poppins-semibold">February 22</div>
          </template>
          <div class="description poppins-semibold text-grey text-body1">
            {{ moment.description }}
          </div>
        </q-timeline-entry>
      </q-timeline>
    </div>
  </q-page>
</template>

<style type="css" lang="css">
.custom-avatar {
  min-height: 100px;
  opacity: 0;
  transform: translateY(30px);
  transition: opacity 0.6s ease, transform 0.6s ease;
}

.custom-avatar.is-visible {
  opacity: 1;
  transform: translateY(0);
}

.custom-avatar .q-timeline__dot {
  width: 80px !important;
}

.text-underline {
  text-decoration: underline;
}

.custom-avatar .q-timeline__dot::before {
  width: 80px !important;
  height: 80px !important;
  left: -25px;
}
.custom-avatar .q-timeline__dot-img {
  width: 80px !important;
  height: 80px !important;
  left: -25px;
  border: 4px solid var(--border-color) !important;
}
.custom-avatar .q-timeline__title {
  margin: 10px 20px 10px 19px;
}
.custom-avatar .q-timeline__subtitle {
  margin: 25px -21px 0px -21px;
}
.custom-avatar .description {
  margin: 0px 20px 0px 19px;
}
.custom-avatar,
.q-timeline__entry {
  padding-bottom: 100px !important;
}
</style>
