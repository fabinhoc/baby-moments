import useApi from 'src/composables/useApi';
import { PlanType } from 'src/types/Plan.type';

export default function usePlanService() {
  const { get, post, put, all, remove, findById } = useApi('plans');

  const subscribe = async (plan: PlanType) => {
    try {
      const { api } = useApi('plans');
      const { data } = await api.post(`plans/subscribe/${plan.id}`);
      return data;
    } catch (error: unknown) {
      throw error;
    }
  };

  return {
    all,
    get,
    post,
    put,
    remove,
    findById,
    subscribe,
  };
}
