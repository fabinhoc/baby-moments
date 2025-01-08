<script setup lang="tsx">
import PlanCard from 'src/components/PlanCard.vue';
import useNotify from 'src/composables/useNotify';
import usePlanService from 'src/services/plan.service';
import { PlanType } from 'src/types/Plan.type';
import { ref, Ref } from 'vue';

const notify = useNotify();
const service = usePlanService();
const plans: Ref<PlanType[]> = ref([]);

const getPlans = async () => {
  try {
    const { data } = await service.all();
    plans.value = data;
  } catch (error: any) {
    console.log(error);
    const message = error?.response?.data?.message ?? error;
    notify.error(message);
  }
};

getPlans();
</script>

<template>
  <q-page padding>
    <p class="text-h4 text-center text-negative">
      Selecione um plano para continuar
    </p>
    <div class="row items-center justify-center q-col-gutter-x-md q-pt-md">
      <div v-for="plan in plans" :key="plan.id">
        <PlanCard :plan="plan" />
      </div>
    </div>
  </q-page>
</template>
