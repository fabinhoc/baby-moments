<script setup lang="ts">
import PageTitle from 'src/components/PageTitle.vue';
import TimelineForm from 'src/components/TimelineForm.vue';

defineOptions({
  name: 'EditPage',
});
</script>

<template>
  <q-page padding>
    <div class="column q-gutter-y-sm">
      <q-card>
        <PageTitle
          :title="$t('app.pages.timeline.edit.title')"
          class="text-center"
        ></PageTitle>
        <q-btn
          :to="{ name: 'timeline-list' }"
          icon="las la-undo"
          flat
          rounded
          color="primary"
          >{{ $t('app.pages.timeline.edit.goBack') }}</q-btn
        >
        <q-card-section>
          <TimelineForm />
        </q-card-section>
      </q-card>
    </div>
  </q-page>
</template>
