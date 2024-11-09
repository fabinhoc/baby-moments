<template>
  <q-page class="row items-center justify-evenly" align="center">
    <q-card class="q-pa-lg">
      <q-card-section>
        <q-icon name="las la-frown" size="180px" color="primary"></q-icon>
        <h1 class="text-h2 text-weight-thin text-secondary">
          {{ $t('app.pages.removeAccount.sentence1') }}
        </h1>
        <p class="text-h5 text-secondary">
          {{ $t('app.pages.removeAccount.sentence2') }}
        </p>
        <p class="text-body1 text-negative">
          {{ $t('app.pages.removeAccount.sentence2') }}
        </p>
        <q-btn color="secondary" outline rounded :to="{ name: 'index' }">
          {{ $t('app.pages.removeAccount.btnBack') }}</q-btn
        >
      </q-card-section>
    </q-card>
  </q-page>
</template>
