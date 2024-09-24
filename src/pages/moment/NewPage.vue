<script setup lang="ts">
import MomentForm from 'src/components/MomentForm.vue';
import PageTitle from 'src/components/PageTitle.vue';

defineOptions({
  name: 'NewMomentPage',
});
</script>

<template>
  <q-page padding>
    <div class="column q-gutter-y-sm">
      <q-card>
        <PageTitle
          :title="$t('app.pages.moment.new.title')"
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
            >{{ $t('app.pages.moment.new.goBack') }}</q-btn
          >
        </q-card-section>
        <q-card-section>
          <MomentForm />
        </q-card-section>
      </q-card>
    </div>
  </q-page>
</template>
