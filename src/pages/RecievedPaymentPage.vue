<script setup lang="ts">
import useAuthService from 'src/services/auth.service';
import { useAuthStore } from 'src/stores/auth.store';
import { UserType } from 'src/types/User.type';
import { onMounted } from 'vue';
import { useRouter } from 'vue-router';

const service = useAuthService();
const { user, setUser } = useAuthStore();
const router = useRouter();

const handleUser = async () => {
  const data: UserType = await service.getUser(user.uuid);
  setUser(data);
  router.push({ name: 'timeline-list' });
};

onMounted(() => {
  handleUser();
});
</script>

<template>
  <q-page></q-page>
</template>
