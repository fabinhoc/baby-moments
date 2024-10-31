import useApi from 'src/composables/useApi';

export default function useMomentService() {
  const { get, all, remove, findById } = useApi('moments');

  const post = async (payload: any) => {
    try {
      const { api } = useApi('moments');
      const { data } = await api.post('moments', payload, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
      return data;
    } catch (error: unknown) {
      throw error;
    }
  };

  const put = async (id: number, payload: any) => {
    try {
      const { api } = useApi('moments');
      const { data } = await api.post(`moments/${id}`, payload, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
      return data;
    } catch (error: unknown) {
      throw error;
    }
  };

  return {
    get,
    post,
    put,
    all,
    remove,
    findById,
  };
}
