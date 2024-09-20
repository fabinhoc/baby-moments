<script setup lang="ts">
import { computed, type Ref, ComputedRef, ref } from 'vue';

defineOptions({
  name: 'BtnConfig',
});

const spacingPlan: Ref<number> = ref(5);

const spacingPlanLabel: ComputedRef<string> = computed(
  () => `${spacingPlan.value} GB`
);
</script>

<template>
  <q-btn
    flat
    rounded
    icon="las la-cog"
    color="black"
    no-caps
    class="btn-config"
  >
    <q-menu
      :anchor="$q.platform.is.mobile ? 'bottom right' : 'bottom left'"
      :class="$q.platform.is.mobile ? 'mobile-menu' : 'desktop-menu'"
    >
      <div>
        <q-list>
          <q-item>
            <q-item-section>
              <div>Espaço Disponível</div>
            </q-item-section>
          </q-item>
          <q-item class="" v-close-popup>
            <q-item-section side> 0 GB </q-item-section>
            <q-item-section>
              <template #default>
                <q-slider
                  :min="0"
                  :max="10"
                  v-model="spacingPlan"
                  readonly
                  color="positive"
                  label-always
                  switch-label-side
                  :label-value="spacingPlanLabel"
                >
                </q-slider>
              </template>
            </q-item-section>
            <q-item-section side> 10 GB </q-item-section>
          </q-item>
          <q-item clickable v-close-popup>
            <q-item-section class="text-primary">
              <q-item-label>Fazer upgrade! </q-item-label>
            </q-item-section>
          </q-item>
        </q-list>
      </div>
    </q-menu>
  </q-btn>
</template>

<style type="css">
.btn-config .q-btn-dropdown__arrow {
  font-size: 12px !important;
}
.mobile-menu {
  width: 96% !important;
  max-width: 96% !important;
  left: 2% !important;
}

.desktop-menu {
  width: 480px !important;
}
</style>
