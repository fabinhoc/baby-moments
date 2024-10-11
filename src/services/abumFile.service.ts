import useApi from 'src/composables/useApi';

export default function useAlbumFileService() {
  const { get, post, put, all, remove, findById } = useApi('album-files');

  const uploadChunks = async (payload: any) => {
    try {
      const { api } = useApi('album-files');
      const { data } = await api.post('album-files/upload-chunks', payload, {
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
    uploadChunks,
  };
}
