<script setup lang="ts">
import { MomentType } from 'src/types/Moment.type';
import { useI18n } from 'vue-i18n';

defineOptions({
  name: 'TableMoments',
});

defineProps({
  data: {
    required: true,
    type: Array<MomentType>,
  },
});

const { t } = useI18n();

const columns: any = [
  {
    name: 'avatar',
    required: true,
    label: '#',
    align: 'left',
    field: (row: MomentType) => row.avatar,
    sortable: false,
  },
  {
    name: 'title',
    required: true,
    label: t('app.components.tableMoments.title'),
    align: 'left',
    field: (row: MomentType) => row.title,
    sortable: false,
  },
  {
    name: 'description',
    required: true,
    label: t('app.components.tableMoments.description'),
    align: 'left',
    field: (row: MomentType) => row.description,
    sortable: false,
  },
  {
    name: 'color',
    required: true,
    label: t('app.components.tableMoments.theme'),
    align: 'left',
    field: (row: MomentType) => row.color,
    sortable: false,
  },
  {
    name: 'actions',
    required: true,
    label: t('app.components.tableMoments.actions'),
    align: 'right',
    sortable: false,
  },
];
</script>

<template>
  <q-table
    flat
    :grid="$q.screen.xs"
    :columns="columns"
    :rows="data"
    row-key="title"
  >
    <template v-slot:body-cell-avatar="props">
      <q-td :props="props">
        <q-avatar>
          <img
            :src="props.value"
            :style="{ border: '4px solid' + props.row.color }"
          />
        </q-avatar>
      </q-td>
    </template>
    <template v-slot:body-cell-color="props">
      <q-td :props="props">
        <q-card
          flat
          :style="{
            backgroundColor: props.value,
            width: '20px',
            height: '20px',
          }"
        ></q-card>
      </q-td>
    </template>
    <template v-slot:body-cell-actions="props">
      <q-td :props="props" class="q-gutter-sm">
        <q-btn
          color="secondary"
          icon="las la-image"
          no-caps
          :to="{ name: 'album-save' }"
        >
          {{
            $t('app.components.tableMoments.photo', 0) +
            '/' +
            $t('app.components.tableMoments.video', 0)
          }}</q-btn
        >
        <q-btn
          color="info"
          icon="las la-pencil-alt"
          :to="{ name: 'moment-edit' }"
          outline
        ></q-btn>
        <q-btn color="negative" icon="las la-trash" outline></q-btn>
      </q-td>
    </template>
    <template v-slot:item="props">
      <div
        class="q-pa-xs col-xs-12 col-sm-6 col-md-4 col-lg-3 grid-style-transition"
      >
        <q-card class="q-py-sm" flat bordered>
          <q-list dense>
            <q-item v-for="col in props.cols" :key="col.name">
              <q-item-section v-if="col.name !== 'avatar'">
                <q-item-label>
                  {{ col.label }}
                </q-item-label>
              </q-item-section>
              <q-item-section v-if="col.name === 'avatar'">
                <q-item-label>
                  <q-avatar>
                    <img
                      :src="col.value"
                      :alt="col.value"
                      :style="{ border: '4px solid' + props.row.color }"
                    />
                  </q-avatar>
                </q-item-label>
              </q-item-section>
              <q-item-section v-else-if="col.name === 'color'" side>
                <q-item-label>
                  <q-card
                    flat
                    :style="{
                      backgroundColor: col.value,
                      width: '20px',
                      height: '20px',
                    }"
                  ></q-card>
                </q-item-label>
              </q-item-section>
              <q-item-section v-else-if="col.name === 'actions'" side>
                <q-item-label class="q-py-sm">
                  <q-btn
                    color="secondary"
                    icon="las la-image"
                    no-caps
                    :to="{ name: 'album-save' }"
                  >
                    {{
                      $t('app.components.tableMoments.photo', 0) +
                      '/' +
                      $t('app.components.tableMoments.video', 0)
                    }}</q-btn
                  >
                </q-item-label>
                <q-item-label>
                  <q-btn
                    class="q-mr-sm"
                    color="info"
                    outline
                    :to="{ name: 'moment-edit' }"
                    >{{ $t('app.components.tableMoments.edit') }}</q-btn
                  >
                  <q-btn color="negative" outline>{{
                    $t('app.components.tableMoments.remove')
                  }}</q-btn>
                </q-item-label>
              </q-item-section>
              <q-item-section v-else side>
                <q-item-label caption>
                  <span class="text-h6 text-caption">
                    {{ col.value }}
                  </span>
                </q-item-label>
              </q-item-section>
            </q-item>
          </q-list>
        </q-card>
      </div>
    </template>
  </q-table>
</template>
