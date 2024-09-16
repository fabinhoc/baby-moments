<template>
  <q-page class="column items-center justify-start" padding ref="page">
    <PageTitle :title="'Index'" />
  </q-page>
</template>

<script setup lang="ts">
import PageTitle from 'src/components/PageTitle.vue';

defineOptions({
  name: 'IndexPage',
});
</script>

<style type="css" lang="css"></style>
