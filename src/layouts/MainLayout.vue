<template>
  <q-layout view="lHh Lpr lFf">
    <q-header class="bg-white row items-center justify-center" :reveal="false">
      <q-img class="img-logo" src="logo.png"></q-img>
    </q-header>

    <q-page-container class="q-mb-xl">
      <router-view />
    </q-page-container>

    <!-- Rodapé -->
    <q-footer :reveal="true" class="bg-dark text-white q-mt-xl">
      <q-container>
        <q-row class="q-col-gutter-sm">
          <div class="col">
            <div class="column justify-center items-center q-gutter-sm">
              <span class="poppins-light text-caption"
                >Feito por Fabio dev.</span
              >
              <div>
                <q-btn icon="lab la-linkedin-in" size="xs" flat round></q-btn>
                <q-btn icon="lab la-instagram" size="xs" flat round></q-btn>
              </div>
            </div>
          </div>
        </q-row>
      </q-container>
    </q-footer>
  </q-layout>
</template>

<script setup lang="ts">
defineOptions({
  name: 'MainLayout',
});
</script>

<style type="css" scoped>
.img-logo {
  max-width: 200px;
}
</style>
