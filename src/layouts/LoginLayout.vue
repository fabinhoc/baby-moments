<script setup lang="ts">
defineOptions({
  name: 'LoginLayout',
});
</script>

<template>
  <q-layout view="lHh Lpr lFf" style="background-color: #f5f6f8">
    <q-header elevated>
      <q-toolbar class="bg-white text-grey-7 q-pa-md" dark>
        <q-toolbar-title>
          <span class="text-uppercase text-subtitle2"> Baby Moments </span>
        </q-toolbar-title>
      </q-toolbar>
    </q-header>
    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>
