<script setup lang="ts">
import MomentForm from 'src/components/MomentForm.vue';
import PageTitle from 'src/components/PageTitle.vue';

defineOptions({
  name: 'EditMomentPage',
});
</script>

<template>
  <q-page padding>
    <div class="column q-gutter-y-sm">
      <q-card flat>
        <PageTitle
          :title="$t('app.pages.moment.edit.title')"
          class="text-center"
        >
        </PageTitle>
        <q-card-section>
          <q-btn
            :to="{ name: 'timeline-edit' }"
            icon="las la-undo"
            flat
            rounded
            color="primary"
            >{{ $t('app.pages.moment.edit.goBack') }}</q-btn
          >
        </q-card-section>
        <q-card-section>
          <MomentForm />
        </q-card-section>
      </q-card>
    </div>
  </q-page>
</template>
