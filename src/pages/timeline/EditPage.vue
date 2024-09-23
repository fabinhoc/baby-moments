<script setup lang="ts">
import PageTitle from 'src/components/PageTitle.vue';
import TableMoments from 'src/components/TableMoments.vue';
import TimelineForm from 'src/components/TimelineForm.vue';
import { MomentType } from 'src/types/Moment.type';

defineOptions({
  name: 'EditPage',
});

const data: MomentType[] = [
  {
    title: 'RN',
    description: 'Mamãe cheguei!!!',
    avatar:
      'https://www.maeserena.com/cdn/shop/files/ninho-de-bebe-comfytm-verde-rn-a-12meses-mae-serena-16.jpg?v=1714388243',
    color: '#b47fde',
  },
  {
    title: '1° MÊS',
    description: 'Que soninho!! Zzzz',
    avatar:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQq7P3dCkv5hW5odwoNRVGgkvHXwl3wteSjeg&s',
    color: '#4CACE2',
  },
  {
    title: '2° MÊS',
    description: 'Te amo mamãe!!!',
    avatar:
      'https://bebemamae.com/wp-content/uploads/2020/08/bebe-2-meses-710x400-1-1200x900.jpg',
    color: '#FFCB12',
  },
  {
    title: '3° MÊS',
    description: 'Continuo crescendo!!',
    avatar:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQwi_NlWbvdAqNH_222dIFjufPzxTfv5YT5eg&s',
    color: '#EF8F71',
  },
  {
    title: '4° MÊS',
    description: 'Meus dentinhos começaram a nascer',
    avatar:
      'https://images.ctfassets.net/nhtsjibbyili/7lPt50OFIbTzlWKrWTWvNy/0792b9eedcaa8ea4ebd11788bef50505/A64.jpeg',
    color: '#23B000',
  },
  {
    title: '5° MÊS',
    description: 'Não quero dormir mamãe',
    avatar:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSEftdhslmSHrGt7r33VI7dTO2AFM_-4iEU8Q&s',
    color: '#FF5E5E',
  },
  {
    title: '6° MÊS',
    description: 'Já consigo sentar!! :)',
    avatar:
      'https://cdn.alboompro.com/5eea1bb84207f40001dca4b1_6375359339bbd70001224495/large/ensaio-de-bebe-com-6-meses.jpg?v=1',
    color: '#4B3860',
  },
  {
    title: '7° MÊS',
    description: 'Eba! Papinhaa!!',
    avatar:
      'https://www.doutora-cegonha.com/wp-content/uploads/2020/04/7-meses-img03.jpg',
    color: '#75E064',
  },
  {
    title: '8° MÊS',
    description: 'Olha o que eu sei fazer!!',
    avatar:
      'https://bebedorminhoco.com.br/wp-content/uploads/2019/08/O-beb%C3%AA-de-8-meses.jpg',
    color: '#7280B0',
  },
  {
    title: '9° MÊS',
    description: 'Amo chocolate! :)',
    avatar:
      'https://blog.educapais.com/wp-content/uploads/2022/07/Educa-Pais-Desenvolvimento-do-bebe-com-10-meses-5.png',
    color: '#8C2E77',
  },
  {
    title: '10° MÊS',
    description: 'Uhuull!',
    avatar:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTX0ltRmDDLwtVJA9AhQGOBjXlhrZCMAiW74Q&s',
    color: '#DA5151',
  },
  {
    title: '11° MÊS',
    description: 'Quero comêeeeee!!!',
    avatar:
      'https://blog.educapais.com/wp-content/uploads/2022/07/Educa-Pais-Desenvolvimento-do-bebe-com-11-meses-2.png',
    color: '#38ADA6',
  },
  {
    title: '1° Aninho!!',
    description: 'Mamãe não sou mais bebê!',
    avatar:
      'https://storage.alboom.ninja/sites/6326/albuns/631664/_mg_5435.jpg?t=1586352675',
    color: '#DEB936',
  },
];
</script>

<template>
  <q-page padding>
    <div class="column q-gutter-y-sm">
      <q-card>
        <PageTitle
          :title="$t('app.pages.timeline.edit.title')"
          class="text-center"
        ></PageTitle>
        <q-btn
          :to="{ name: 'timeline-list' }"
          icon="las la-undo"
          flat
          rounded
          color="primary"
          >{{ $t('app.pages.timeline.edit.goBack') }}</q-btn
        >
        <q-card-section>
          <TimelineForm />
        </q-card-section>
        <q-card-section class="column q-gutter-md">
          <q-separator></q-separator>
          <div class="text-h6 text-secondary">Moments</div>
          <div>
            <q-btn
              color="positive"
              icon="las la-plus"
              outline
              :to="{ name: 'moment-new' }"
              >{{ $t('app.pages.timeline.list.addMoment') }}</q-btn
            >
          </div>
          <TableMoments :data="data" />
        </q-card-section>
      </q-card>
    </div>
  </q-page>
</template>
