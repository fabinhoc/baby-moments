<template>
  <q-page padding ref="page">
    <div class="column items-center justify-start q-gutter-y-md">
      <PageTitle :title="'Minhas timelines'" />
      <q-card
        class="col q-pa-md cursor-pointer hover-card full-width"
        v-for="(timeline, index) in timelines"
        :key="index"
      >
        <q-card-section>
          <div>
            <router-link
              to="/timeline"
              class="poppins-regular text-primary text-h4 title"
              target="_blank"
            >
              {{ timeline.title }}
            </router-link>
            <q-icon
              name="las la-link"
              color="primary"
              style="margin-top: -10px"
              size="sm"
            ></q-icon>
          </div>
          <div class="poppins-regular text-body1 text-secondary">
            {{ timeline.description }}
          </div>
        </q-card-section>
        <q-card-section class="row q-gutter-sm">
          <q-btn color="info" outline size="xs" icon="las la-pencil-alt" rounded
            >Editar</q-btn
          >
          <q-btn
            color="negative"
            outline
            icon="las la-trash-alt"
            rounded
            size="xs"
            >Remover</q-btn
          >
        </q-card-section>
      </q-card>
      <q-btn color="positive" outline rounded icon="las la-plus"
        >Adicionar novo</q-btn
      >
    </div>
  </q-page>
</template>

<script setup lang="ts">
import PageTitle from 'src/components/PageTitle.vue';

defineOptions({
  name: 'IndexPage',
});

const timelines: any = [
  {
    title: 'Timeline da Elis',
    description: 'Minha princesinha até completar 1 aninho',
  },
  {
    title: 'Timeline do Thiaguinho',
    description: 'Meu bebê está crescendo!!!',
  },
  {
    title: 'Melhores momentos',
    description: 'A família!',
  },
];
</script>

<style type="css" lang="css" scoped>
.hover-card {
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.hover-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
}
.hover-card .title:hover {
  text-decoration: underline;
}
</style>
