<script setup lang="ts">
import useNotify from 'src/composables/useNotify';
import useAuthService from 'src/services/auth.service';
import { onMounted, Ref, ref } from 'vue';
import { useI18n } from 'vue-i18n';
import { useRoute } from 'vue-router';

defineOptions({
  name: 'VerifyPage',
});

const service = useAuthService();
const notify = useNotify();
const route = useRoute();
const response: Ref<string> = ref('');
const { t } = useI18n();

onMounted(() => {
  verifyEmail();
});

const verifyEmail = async () => {
  try {
    const url = `${route.query.url}&signature=${route.query.signature}`;
    await service.verifyEmail(url);
    const { logout } = useAuthService();
    logout();
    response.value = t('app.pages.verify.responseOk');
  } catch (error: any) {
    console.log(error);
    const message = error?.response?.message ?? error.message;
    notify.error(message);
    response.value = message;
  }
};
</script>

<template>
  <q-page class="row items-center justify-evenly" align="center">
    <div class="col-md-4 col-sm-6 col-xs-10">
      <q-card
        class="text-center"
        flat
        :square="false"
        style="background-color: transparent"
      >
        <q-card-section>
          <q-avatar
            size="80px"
            font-size="32px"
            color="grey-3"
            text-color="primary"
            icon="email"
          />
        </q-card-section>
        <q-card-section>
          <p class="text-h5 text-weight-medium">
            {{ response }}
          </p>
        </q-card-section>
        <q-card-section>
          <p>
            <q-btn
              flat
              color="primary"
              @click="$router.push({ name: 'login' })"
            >
              {{ $t('app.pages.verify.backToLogin') }}
            </q-btn>
          </p>
        </q-card-section>
      </q-card>
    </div>
  </q-page>
</template>
