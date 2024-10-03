import useApi from 'src/composables/useApi';

export default function useTimelineService() {
  const { get, post, put, all, remove, findById } = useApi('timelines');

  return {
    get,
    post,
    put,
    all,
    remove,
    findById,
  };
}
