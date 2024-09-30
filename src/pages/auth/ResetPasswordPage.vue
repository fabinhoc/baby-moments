<script setup lang="ts">
import FormResetPassword from 'src/components/auth/FormResetPassword.vue';
defineOptions({
  name: 'ResetPassword',
});
</script>
<template>
  <q-page class="row items-center justify-evenly" align="center">
    <div class="col-md-3 col-sm-6 col-xs-10">
      <q-card
        class="text-center"
        flat
        :square="false"
        style="background-color: transparent"
      >
        <q-card-section>
          <p class="text-h5 text-weight-medium">
            {{ $t('app.pages.resetPassword.title') }}
          </p>
        </q-card-section>
        <q-card-section>
          <p class="">
            {{ $t('app.pages.resetPassword.message') }}
          </p>
        </q-card-section>
        <q-card-section>
          <FormResetPassword />
        </q-card-section>
        <q-card-section>
          <p class="">
            {{ $t('app.pages.resetPassword.remember') }}
            <q-btn
              flat
              color="accent"
              @click="$router.push({ name: 'login' })"
              >{{ $t('app.pages.resetPassword.signin') }}</q-btn
            >
          </p>
        </q-card-section>
      </q-card>
    </div>
  </q-page>
</template>
