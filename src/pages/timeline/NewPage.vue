<script setup lang="ts">
import PageTitle from 'src/components/PageTitle.vue';
import TimelineForm from 'src/components/TimelineForm.vue';

defineOptions({
  name: 'NewPage',
});
</script>

<template>
  <q-page padding>
    <div class="column q-gutter-y-sm">
      <q-card>
        <PageTitle
          :title="$t('app.pages.timeline.new.title')"
          class="text-center"
        >
        </PageTitle>
        <q-btn
          :to="{ name: 'timeline-list' }"
          icon="las la-undo"
          flat
          rounded
          color="primary"
          >{{ $t('app.pages.timeline.new.goBack') }}</q-btn
        >
        <q-card-section>
          <TimelineForm />
        </q-card-section>
      </q-card>
    </div>
  </q-page>
</template>
