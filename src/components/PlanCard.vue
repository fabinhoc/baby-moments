<script setup lang="ts">
import useDialog from 'src/composables/useDialog';
import useNotify from 'src/composables/useNotify';
import usePlanService from 'src/services/plan.service';
import { useAuthStore } from 'src/stores/auth.store';
import { PlanType } from 'src/types/Plan.type';
import { ref, Ref } from 'vue';
import { useRouter } from 'vue-router';

defineOptions({
  name: 'PlanCard',
});

defineProps<{
  plan: PlanType;
}>();

const service = usePlanService();
const notify = useNotify();
const loading: Ref<boolean> = ref(false);
const router = useRouter();
const { isSubscribed } = useAuthStore();
const dialog = useDialog();

const handleSubscription = async (plan: PlanType) => {
  if (!isSubscribed) {
    return await subscribe(plan);
  }

  dialog
    .confirm(
      'Alterar plano!',
      'Deseja realmente fazer a alteração do seu plano?'
    )
    .onOk(async () => {
      await subscribe(plan);
    });
};

const subscribe = async (plan: PlanType) => {
  try {
    loading.value = true;
    const response = await service.subscribe(plan);
    loading.value = false;
    notify.success(response.message);
    if (response.url) {
      window.location.href = response.url;
      return;
    }

    router.push({ name: 'timeline-list' });
  } catch (error: any) {
    console.log(error);
    loading.value = false;
    const message = error?.response?.data?.message ?? error;
    notify.error(message);
  }
};
</script>

<template>
  <q-card class="q-pa-md">
    <q-card-section class="text-center">
      <h2 class="text-h4 text-bold text-primary">
        {{ plan.name }}
      </h2>
      <span class="text-body1">
        {{ plan.description }}
      </span>
    </q-card-section>
    <q-card-section class="row justify-center">
      <div class="text-center" style="max-width: 234px">
        <h2 class="text-h2 q-mb-none">
          {{ $n(parseFloat(plan.price), 'currency') }}
        </h2>
        <p class="text-overline text-right">por mês</p>
      </div>
    </q-card-section>
    <q-card-section class="">
      <q-list>
        <q-item
          v-for="(option, index) in plan.options"
          :key="index"
          class="q-my-none"
        >
          <q-item-section avatar v-if="option.check">
            <q-icon color="positive" name="las la-check-double" />
          </q-item-section>
          <q-item-section>
            {{ option.title }}
          </q-item-section>
        </q-item>
      </q-list>
    </q-card-section>
    <q-card-actions>
      <q-btn
        color="primary"
        class="full-width"
        @click="handleSubscription(plan)"
        :loading="loading"
        >Eu quero!</q-btn
      >
    </q-card-actions>
  </q-card>
</template>
