<script setup lang="ts">
defineOptions({
  name: 'BtnUser',
});
</script>

<template>
  <q-btn-dropdown
    flat
    rounded
    icon="las la-user"
    label="Fabio Cruz"
    color="black"
    no-caps
    dropdown-icon="las la-angle-down"
    class="btn-user"
  >
    <q-list>
      <q-item clickable v-close-popup>
        <q-item-section avatar>
          <q-avatar icon="las la-pen" text-color="black" flat round />
        </q-item-section>
        <q-item-section>
          <q-item-label>Editar</q-item-label>
        </q-item-section>
      </q-item>
      <q-item clickable v-close-popup>
        <q-item-section avatar>
          <q-avatar icon="las la-signature" text-color="primary" flat round />
        </q-item-section>
        <q-item-section>
          <q-item-label>Minha assinatura</q-item-label>
        </q-item-section>
      </q-item>
      <q-item clickable v-close-popup>
        <q-item-section avatar>
          <q-avatar
            icon="las la-sign-out-alt"
            text-color="negative"
            flat
            round
          />
        </q-item-section>
        <q-item-section>
          <q-item-label>Logout</q-item-label>
        </q-item-section>
      </q-item>
    </q-list>
  </q-btn-dropdown>
</template>

<style type="css">
.btn-user .q-btn-dropdown__arrow {
  font-size: 12px !important;
}
</style>
