<script setup lang="ts">
import { UpdatePasswordDto } from 'src/types/dto/UpdatedPassword.dto';
import { computed, Ref, ref } from 'vue';
import { useVuelidate } from '@vuelidate/core';
import { required, sameAs } from '@vuelidate/validators';

defineOptions({
  name: 'UpdatePasswordForm',
});

const formUpdatePassword = ref();
const form: Ref<UpdatePasswordDto> = ref({
  current_password: null,
  password: null,
  password_confirmation: null,
});

const isPwd: Ref<boolean> = ref(true);
const isPwdCurrentPassword: Ref<boolean> = ref(true);
const isPwdConfirm: Ref<boolean> = ref(true);
const rules = computed(() => {
  return {
    current_password: { required },
    password: { required },
    password_confirmation: {
      sameAs: sameAs(form.value.password),
    },
  };
});
const v$ = useVuelidate(rules, form);

const handlePwd = () => {
  isPwd.value = !isPwd.value;
};

const handlePwdCurrentPassword = () => {
  isPwdCurrentPassword.value = !isPwdCurrentPassword.value;
};

const handlePwdConfirm = () => {
  isPwdConfirm.value = !isPwdConfirm.value;
};

const handleSubmit = () => {};

const clear = () => {
  form.value = {
    current_password: null,
    password: null,
    password_confirmation: null,
  };
  formUpdatePassword.value.reset();
};
</script>

<template>
  <q-form
    ref="formUpdatePassword"
    class="q-gutter-y-lg"
    @submit.prevent="handleSubmit"
  >
    <div class="row q-col-gutter-md">
      <div class="col-sm-12 col-md-12 col-lg-12 col-xs-12">
        <q-input
          v-model="v$.current_password.$model"
          :type="isPwdCurrentPassword ? 'password' : 'text'"
          :label="$t('app.components.updatePasswordForm.currentPassword')"
          lazy-rules
          outlined
          :rules="[
            () =>
              !v$.current_password.required.$invalid ||
              $t('validations.required'),
          ]"
        >
          <template v-slot:append>
            <q-icon
              :name="isPwdCurrentPassword ? 'visibility_off' : 'visibility'"
              class="cursor-pointer"
              @click="handlePwdCurrentPassword"
            />
          </template>
        </q-input>
      </div>
      <div class="col-sm-12 col-md-12 col-lg-12 col-xs-12">
        <q-input
          v-model="v$.password.$model"
          :type="isPwd ? 'password' : 'text'"
          :label="$t('app.components.updatePasswordForm.newPassword')"
          lazy-rules
          outlined
          :rules="[
            () => !v$.password.required.$invalid || $t('validations.required'),
          ]"
        >
          <template v-slot:append>
            <q-icon
              :name="isPwd ? 'visibility_off' : 'visibility'"
              class="cursor-pointer"
              @click="handlePwd"
            />
          </template>
        </q-input>
      </div>
      <div class="col-sm-12 col-md-12 col-lg-12 col-xs-12">
        <q-input
          v-model="v$.password_confirmation.$model"
          :type="isPwdConfirm ? 'password' : 'text'"
          :label="$t('app.components.updatePasswordForm.passwordConfirmation')"
          lazy-rules
          outlined
          :rules="[
            () =>
              !v$.password_confirmation.sameAs.$invalid ||
              !v$.password_confirmation.required.$invalid ||
              $t('validations.required'),
          ]"
        >
          <template v-slot:append>
            <q-icon
              :name="isPwdConfirm ? 'visibility_off' : 'visibility'"
              class="cursor-pointer"
              @click="handlePwdConfirm"
            />
          </template>
        </q-input>
      </div>
      <div class="col-sm-12 col-md-12 col-lg-12 col-xs-12 q-gutter-sm">
        <q-btn type="submit" color="primary" outline :disable="v$.$invalid">{{
          $t('app.components.updatePasswordForm.save')
        }}</q-btn>
        <q-btn @click="clear" type="button" color="negative" outline>{{
          $t('app.components.updatePasswordForm.clear')
        }}</q-btn>
      </div>
    </div>
  </q-form>
</template>
