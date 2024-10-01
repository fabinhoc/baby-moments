<script setup lang="ts">
import FormUser from 'src/components/FormUser.vue';
import ProfileSectionTitle from 'src/components/ProfileSectionTitle.vue';
import UpdatePasswordForm from 'src/components/UpdatePasswordForm.vue';
import { computed, ComputedRef, ref, Ref } from 'vue';

defineOptions({
  name: 'ProfilePage',
});

const spacingPlan: Ref<number> = ref(50);

const spacingPlanLabel: ComputedRef<string> = computed(
  () => `${spacingPlan.value} GB`
);
</script>

<template>
  <q-page padding>
    <div class="row justify-evenly items-center">
      <q-card class="col-md-6 col-lg-6 col-sm-12 col-xs-12">
        <q-card-section class="column items-center justify-center">
          <q-avatar icon="las la-user" size="100px"></q-avatar>
        </q-card-section>
        <q-card-section>
          <q-btn
            :to="{ name: 'timeline-list' }"
            icon="las la-undo"
            flat
            rounded
            color="primary"
            >{{ $t('app.pages.timeline.new.goBack') }}</q-btn
          >
        </q-card-section>
        <q-card-section>
          <ProfileSectionTitle :title="$t('app.pages.user.profile.infoTitle')" :icon="'las la-user'" />
          <FormUser />
        </q-card-section>
        <q-card-section class="column q-col-gutter-md">
          <div>
            <ProfileSectionTitle :title="$t('app.pages.user.profile.updatePasswordTitle')" :icon="'las la-lock'" />
          </div>
          <div>
            <UpdatePasswordForm />
          </div>
        </q-card-section>
        <q-card-section class="column q-col-gutter-md" id="signature">
          <div>
            <ProfileSectionTitle :title="$t('app.pages.user.profile.sigature')" :icon="'las la-signature'" />
          </div>
          <div>
            <div class="text-body2 text-dark" v-html="$t('app.pages.user.profile.signatureInfo', { signature: '100 GB'})"></div>
            <p class="text-body2 text-dark">
              <ul class="text-body2 text-dark text-weight-light">
                <li>100 GB</li>
                <li>Timelines ilimitadas</li>
                <li>Albuns ilimitados</li>
              </ul>
            </p>
            <div class="q-pa-lg">
              <q-icon
                size="xs"
                name="las la-list"
                style="margin-top: -5px"
              ></q-icon>
              <span class="text-caption text-grey text-uppercase">{{ $t('app.pages.user.profile.history') }}</span>
              <q-list bordered separator>
                <q-item>
                  <q-item-section>
                    <q-item-label class="text-grey" size="sm" caption>
                      Dia 12 de fevereiro 2024
                    </q-item-label>
                    <q-item-section class="text-dark q-mt-sm">
                      <div v-html="$t('app.pages.user.profile.adquiredSignature', { signature: 'Básica', size: '100 GB', price: 'R$ 19,99'})">
                      </div>
                    </q-item-section>
                  </q-item-section>
                </q-item>
                <q-item>
                  <q-item-section>
                    <q-item-label class="text-grey" size="sm" caption>
                      Dia 30 de março 2024
                    </q-item-label>
                    <q-item-section class="text-dark q-mt-sm">
                      <div v-html="$t('app.pages.user.profile.adquiredSignature', { signature: 'Premium', size: '250 GB', price: 'R$ 39,99'})">
                      </div>
                    </q-item-section>
                  </q-item-section>
                </q-item>
                <q-item>
                  <q-item-section>
                    <q-item-label class="text-grey" size="sm" caption>
                      Dia 4 de julho 2024
                    </q-item-label>
                    <q-item-section class="text-dark q-mt-sm">
                      <span>
                        <div v-html="$t('app.pages.user.profile.adquiredSignature', { signature: 'Básica', size: '100 GB', price: 'R$ 19,99'})">
                        </div>
                      </span>
                    </q-item-section>
                  </q-item-section>
                </q-item>
              </q-list>

              <q-list>
                <q-item>
                  <q-item-section>
                    <div>{{ $t('app.pages.user.profile.labelSlider') }}</div>
                  </q-item-section>
                </q-item>
                <q-item class="" v-close-popup>
                  <q-item-section side> 0 GB </q-item-section>
                  <q-item-section>
                    <template #default>
                      <q-slider
                        :min="0"
                        :max="100"
                        v-model="spacingPlan"
                        readonly
                        color="positive"
                        label-always
                        switch-label-side
                        :label-value="spacingPlanLabel"
                      >
                      </q-slider>
                    </template>
                  </q-item-section>
                  <q-item-section side> 100 GB </q-item-section>
                </q-item>
              </q-list>
            </div>
          </div>
        </q-card-section>
        <q-card-section>
          <div class="row q-gutter-md">
            <q-btn color="primary" icon="las la-cloud-upload-alt">{{ $t('app.pages.user.profile.upgrade') }}</q-btn>
            <q-btn color="negative" icon="las la-frown">{{ $t('app.pages.user.profile.cancelSignature') }}</q-btn>
          </div>
        </q-card-section>
        <q-card-section class="column q-col-gutter-md">
          <div>
            <ProfileSectionTitle :title="$t('app.pages.user.profile.accountTitle')" :icon="'las la-cog'" />
          </div>
          <div>
            <p class="text-body2 text-negative" v-html="$t('app.pages.user.profile.deleteAccountInfo')" />
            <q-btn color="negative" icon="las la-frown" no-caps>{{ $t('app.pages.user.profile.btnDelete') }}</q-btn>
          </div>
        </q-card-section>
      </q-card>
    </div>
  </q-page>
</template>
