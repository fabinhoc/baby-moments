<template>
  <q-layout view="lHh Lpr lFf">
    <q-header class="bg-white row items-center justify-center" :reveal="false">
      <q-toolbar dark>
        <q-toolbar-title class="text-center">
          <q-img
            class="img-logo cursor-pointer"
            src="/logo.png"
            @click="goToHome"
          ></q-img>
        </q-toolbar-title>
        <BtnConfig v-if="$route.meta.requiresAuth" />
        <BtnUser v-if="$route.meta.requiresAuth" />
      </q-toolbar>
    </q-header>

    <q-page-container class="q-mb-xl q-mt-lg">
      <router-view />
    </q-page-container>

    <!-- Rodapé -->
    <q-footer :reveal="true" class="bg-dark text-white q-mt-xl">
      <q-toolbar>
        <q-toolbar-title class="q-mt-md">
          <div class="row q-col-gutter-sm">
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
          </div>
        </q-toolbar-title>
      </q-toolbar>
    </q-footer>
  </q-layout>
</template>

<script setup lang="ts">
import BtnConfig from 'src/components/BtnConfig.vue';
import BtnUser from 'src/components/BtnUser.vue';
import { useRouter } from 'vue-router';

defineOptions({
  name: 'MainLayout',
});

const router = useRouter();

const goToHome = () => {
  router.push({ name: 'index' });
};
</script>

<style type="css" scoped>
.img-logo {
  max-width: 200px;
}
</style>
