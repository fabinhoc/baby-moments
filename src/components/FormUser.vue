<script setup lang="ts">
import useVuelidate from '@vuelidate/core';
import { required, email } from '@vuelidate/validators';
import { useAuthStore } from 'src/stores/auth.store';
import { UserDto } from 'src/types/dto/User.dto';
import { Ref, ref } from 'vue';

defineOptions({
  name: 'FormUser',
});

const formUser = ref();
const { user } = useAuthStore();
const form: Ref<UserDto> = ref({
  name: user.name,
  email: user.email,
});
const rules = {
  name: { required },
  email: { email, required },
};
const v$ = useVuelidate(rules, form);

const handleSubmit = () => {};

const clear = () => {
  form.value = {
    name: user.name,
    email: user.email,
  };
  formUser.value.reset();
};
</script>

<template>
  <q-form ref="formUser" class="q-gutter-y-lg" @submit.prevent="handleSubmit">
    <div class="row q-col-gutter-md">
      <div class="col-sm-12 col-md-12 col-lg-12 col-xs-12">
        <q-input
          v-model="v$.name.$model"
          :label="$t('app.components.formUser.name')"
          lazy-rules
          outlined
          :rules="[
            () => !v$.email.required.$invalid || $t('validations.required'),
          ]"
        />
      </div>
      <div class="col-sm-12 col-md-12 col-lg-12 col-xs-12">
        <q-input
          v-model="v$.email.$model"
          :label="$t('app.components.formUser.email')"
          lazy-rules
          outlined
          :rules="[
            () => !v$.email.required.$invalid || $t('validations.required'),
            () => !v$.email.email.$invalid || $t('validations.email'),
          ]"
        />
      </div>
      <div class="col-sm-12 col-md-12 col-lg-12 col-xs-12 q-gutter-sm">
        <q-btn type="submit" color="primary" outline :disable="v$.$invalid">{{
          $t('app.components.formUser.save')
        }}</q-btn>
        <q-btn @click="clear" type="button" color="negative" outline>{{
          $t('app.components.formUser.clear')
        }}</q-btn>
      </div>
    </div>
  </q-form>
</template>
