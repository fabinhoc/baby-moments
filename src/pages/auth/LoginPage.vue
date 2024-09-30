<script setup lang="ts">
import FormLogin from 'src/components/auth/FormLogin.vue';

defineOptions({
  name: 'LoginPage',
});
</script>

<template>
  <q-page class="row items-center justify-evenly" align="center">
    <div class="col-md-3 col-sm-6 col-xs-10">
      <q-card class="q-pa-lg">
        <q-card-section>
          <FormLogin />
          <div class="q-mt-lg">
            <q-btn to="/auth/forgot-password" color="accent" flat>{{
              $t('app.pages.login.forgotPassword')
            }}</q-btn>
            <q-btn to="/auth/register" color="negative" flat>{{
              $t('app.pages.login.createAccount')
            }}</q-btn>
          </div>
        </q-card-section>
      </q-card>
    </div>
  </q-page>
</template>
