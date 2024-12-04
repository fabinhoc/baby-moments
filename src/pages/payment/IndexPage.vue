<script setup lang="ts">
import { loadMercadoPago } from '@mercadopago/sdk-js';
import { nextTick, onMounted, ref, Ref, watchEffect } from 'vue';
import PageTitle from 'src/components/PageTitle.vue';
import { PaymentDto } from 'src/types/dto/Payment.dto';
import { required } from '@vuelidate/validators';
import useVuelidate from '@vuelidate/core';

defineOptions({
  name: 'indexPage',
});

onMounted(() => {
  cardFormCheckout();

  nextTick(() => {});
});

const form: Ref<PaymentDto> = ref({
  card_number: null,
  expiration_date: null,
  security_code: null,
  cardholder_name: null,
  issuer: null,
  installments: null,
  identification_type: null,
  identification_number: null,
  cardholder_email: null,
});
const rules = {
  card_number: { required },
  expiration_date: { required },
  security_code: { required },
  cardholder_name: { required },
  issuer: {},
  installments: { required },
  identification_type: { required },
  identification_number: { required },
  cardholder_email: { required },
};
const v$ = useVuelidate(rules, form);

const cardFormCheckout = async () => {
  await loadMercadoPago();
  const mp = new window.MercadoPago(
    'TEST-6d2da646-3d64-48f3-ae68-2d758036a70e'
  );

  watchEffect(() => {
    const cardForm = mp.cardForm({
      amount: '100.5',
      iframe: true,
      form: {
        id: 'form-checkout',
        cardNumber: {
          id: 'form-checkout__cardNumber',
          placeholder: 'Número do cartão',
        },
        expirationDate: {
          id: 'form-checkout__expirationDate',
          placeholder: 'MM/YY',
        },
        securityCode: {
          id: 'form-checkout__securityCode',
          placeholder: 'Código de segurança',
        },
        cardholderName: {
          id: 'form-checkout__cardholderName',
          placeholder: 'Titular do cartão',
        },
        issuer: {
          id: 'form-checkout__issuer',
          placeholder: 'Banco emissor',
        },
        installments: {
          id: 'form-checkout__installments',
          placeholder: 'Parcelas',
        },
        identificationType: {
          id: 'form-checkout__identificationType',
          placeholder: 'Tipo de documento',
        },
        identificationNumber: {
          id: 'form-checkout__identificationNumber',
          placeholder: 'Número do documento',
        },
        cardholderEmail: {
          id: 'form-checkout__cardholderEmail',
          placeholder: 'E-mail',
        },
      },
      callbacks: {
        onFormMounted: (error: any) => {
          if (error)
            return console.warn('Form Mounted handling error: ', error);
          console.log('Form mounted');
        },
        onSubmit: (event: any) => {
          event.preventDefault();

          const {
            paymentMethodId: payment_method_id,
            issuerId: issuer_id,
            cardholderEmail: email,
            amount,
            token,
            installments,
            identificationNumber,
            identificationType,
          } = cardForm.getCardFormData();

          console.log(
            payment_method_id,
            issuer_id,
            email,
            amount,
            token,
            installments,
            identificationNumber,
            identificationType
          );

          // fetch('/process_payment', {
          //   method: 'POST',
          //   headers: {
          //     'Content-Type': 'application/json',
          //   },
          //   body: JSON.stringify({
          //     token,
          //     issuer_id,
          //     payment_method_id,
          //     transaction_amount: Number(amount),
          //     installments: Number(installments),
          //     description: 'Plano assinatura TESTE 1',
          //     payer: {
          //       email,
          //       identification: {
          //         type: identificationType,
          //         number: identificationNumber,
          //       },
          //     },
          //   }),
          // });
        },
        onFetching: (resource: any) => {
          console.log('Fetching resource: ', resource);
        },
      },
    });
  });
};
</script>

<template>
  <q-page padding>
    <div class="column q-gutter-y-sm">
      <q-card>
        <PageTitle :title="'Forma de pagamento'" class="text-center">
        </PageTitle>
        <q-card-section class="row items-center justify-evenly">
          <div class="col-md-4 col-sm-4 col-xs-10">
            <q-form
              id="form-checkout"
              class="row q-col-gutter-y-sm q-col-gutter-x-sm"
            >
              <div class="col-md-12 col-sm-12 col-xs-12">
                <!-- Campo Número do Cartão -->
                <q-input
                  outlined
                  label="Número do Cartão"
                  v-model="v$.card_number.$model"
                  :rules="[
                    () =>
                      !v$.card_number.required.$invalid ||
                      $t('validations.required'),
                  ]"
                >
                  <template v-slot:append>
                    <div id="form-checkout__cardNumber" class="hidden"></div>
                  </template>
                </q-input>
              </div>

              <div class="col-md-6 col-sm-6 col-xs-6">
                <q-input
                  outlined
                  label="Data de Validade (MM/AA)"
                  v-model="v$.expiration_date.$model"
                  id="form-checkout__expirationDate"
                  :rules="[
                    () =>
                      !v$.expiration_date.required.$invalid ||
                      $t('validations.required'),
                  ]"
                >
                  <template v-slot:append>
                    <div id="form-checkout__expirationDate"></div>
                  </template>
                </q-input>
              </div>

              <div class="col-md-6 col-sm-6 col-xs-6">
                <!-- Campo Código de Segurança (CVV) -->
                <q-input
                  outlined
                  label="Código de Segurança"
                  v-model="v$.security_code.$model"
                  id="form-checkout__securityCode"
                  :rules="[
                    () =>
                      !v$.security_code.required.$invalid ||
                      $t('validations.required'),
                  ]"
                >
                  <template v-slot:append>
                    <div id="form-checkout__securityCode"></div>
                  </template>
                </q-input>
              </div>

              <div class="col-md-12 col-sm-12 col-xs-12">
                <!-- Campo Nome do Titular -->
                <q-input
                  outlined
                  label="Nome do Titular"
                  v-model="v$.cardholder_name.$model"
                  :rules="[
                    () =>
                      !v$.cardholder_name.required.$invalid ||
                      $t('validations.required'),
                  ]"
                >
                  <template v-slot:append>
                    <input
                      v-model="v$.cardholder_name.required.$model"
                      id="form-checkout__cardholderName"
                      class="hidden"
                    />
                  </template>
                </q-input>
              </div>

              <div class="col-md-12 col-sm-12 col-xs-12">
                <!-- Selecionar Emissor -->
                <q-select
                  outlined
                  label="Emissor"
                  v-model="v$.issuer.$model"
                  :options="[]"
                  class="hidden"
                >
                  <template v-slot:append>
                    <select
                      id="form-checkout__issuer"
                      v-model="v$.issuer.$model"
                      style="display: none"
                    ></select>
                  </template>
                </q-select>
              </div>

              <div class="col-md-12 col-sm-12 col-xs-12">
                <!-- Selecionar Parcelas -->
                <q-select
                  outlined
                  label="Parcelas"
                  v-model="v$.installments.$model"
                  :options="[]"
                  class="hidden"
                >
                  <template v-slot:append>
                    <select
                      id="form-checkout__installments"
                      v-model="v$.installments.$model"
                      style="display: none"
                    ></select>
                  </template>
                </q-select>
              </div>

              <div class="col-md-4 col-sm-4 col-xs-4">
                <!-- Selecionar Tipo de Identificação -->
                <q-select
                  outlined
                  label="Tipo de Identificação"
                  v-model="v$.identification_type.$model"
                  :options="[
                    { label: 'CPF', value: 'CPF' },
                    { label: 'CNPJ', value: 'CNPJ' },
                  ]"
                  :rules="[
                    () =>
                      !v$.identification_type.required.$invalid ||
                      $t('validations.required'),
                  ]"
                >
                  <template v-slot:append>
                    <select
                      id="form-checkout__identificationType"
                      v-model="v$.identification_type.$model"
                      style="display: none"
                    ></select>
                  </template>
                </q-select>
              </div>
              <div class="col-md-8 col-sm-8 col-xs-8">
                <!-- Campo Número de Identificação -->
                <q-input
                  outlined
                  label="Número de Identificação"
                  v-model="v$.identification_number.$model"
                  :rules="[
                    () =>
                      !v$.identification_number.required.$invalid ||
                      $t('validations.required'),
                  ]"
                >
                  <template v-slot:append>
                    <input
                      id="form-checkout__identificationNumber"
                      v-model="v$.identification_number.$model"
                      style="display: none"
                    />
                  </template>
                </q-input>
              </div>

              <div class="col-md-12 col-sm-12 col-xs-12">
                <!-- Campo Email do Titular -->
                <q-input
                  outlined
                  label="Email do Titular"
                  v-model="v$.cardholder_email.$model"
                  id="form-checkout__cardholderEmail"
                  :rules="[
                    () =>
                      !v$.cardholder_email.required.$invalid ||
                      $t('validations.required'),
                  ]"
                >
                  <template v-slot:append>
                    <input
                      id="form-checkout__cardholderEmail"
                      v-model="v$.cardholder_email.$model"
                      style="display: none"
                    />
                  </template>
                </q-input>
              </div>

              <div class="col-md-12 col-sm-12 col-xs-12">
                <!-- Botão de Enviar -->
                <q-btn
                  class="full-width"
                  label="Pagar"
                  color="primary"
                  type="submit"
                  id="form-checkout__submit"
                />
              </div>
            </q-form>
          </div>
        </q-card-section>
      </q-card>
    </div>
  </q-page>
</template>

<style scoped lang="css">
.container {
  height: 18px;
  display: inline-block;
  border: 1px solid rgb(118, 118, 118);
  border-radius: 2px;
  padding: 1px 2px;
}
</style>
