<script lang="ts" setup>
import PageTitle from 'src/components/PageTitle.vue';
import { onBeforeUnmount, onMounted, ref } from 'vue';

defineOptions({
  name: 'TimelinePage',
});

onMounted(() => {
  window.addEventListener('scroll', handleScroll);
  handleScroll(); // Verifica se algum item já está visível no carregamento
});

onBeforeUnmount(() => {
  window.removeEventListener('scroll', handleScroll);
});

const timeline: any = ref({
  title: 'Timeline da Elis',
  description: '',
  moments: [
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
  ],
});

const dynamicBorderStyle = (color: string) => ({
  '--border-color': color,
});

const handleScroll = () => {
  const timelineEntries = document.querySelectorAll('.q-timeline__entry');
  timelineEntries.forEach((entry, index) => {
    const rect = entry.getBoundingClientRect();
    if (rect.top < window.innerHeight && rect.bottom > 0) {
      timeline.value.moments[index].isVisible = true;
    }
  });
};
</script>

<template>
  <q-page
    class="column items-center justify-start"
    padding
    @scroll="handleScroll"
    ref="page"
  >
    <PageTitle :title="timeline.title" />
    <q-timeline :layout="'loose'" color="secondary" style="margin-top: -50px">
      <q-timeline-entry
        class="custom-avatar"
        :class="{ 'is-visible': moment.isVisible }"
        v-for="(moment, index) in timeline.moments"
        :key="index"
        :avatar="moment.avatar"
        :side="index % 2 === 0 ? 'left' : 'right'"
        :style="dynamicBorderStyle(moment.color)"
      >
        <template v-slot:title>
          <div
            class="text-primary poppins-semibold all-pointer-events cursor-pointer text-underline"
          >
            {{ moment.title }}
          </div>
        </template>
        <template v-slot:subtitle>
          <div class="text-primary poppins-semibold">February 22</div>
        </template>
        <div class="description poppins-semibold text-grey text-body1">
          {{ moment.description }}
        </div>
      </q-timeline-entry>
    </q-timeline>
  </q-page>
</template>

<style type="css" lang="css">
.custom-avatar {
  min-height: 100px;
  opacity: 0;
  transform: translateY(30px);
  transition: opacity 0.6s ease, transform 0.6s ease;
}

.custom-avatar.is-visible {
  opacity: 1;
  transform: translateY(0);
}

.custom-avatar .q-timeline__dot {
  width: 80px !important;
}

.text-underline {
  text-decoration: underline;
}

.custom-avatar .q-timeline__dot::before {
  width: 80px !important;
  height: 80px !important;
  left: -25px;
}
.custom-avatar .q-timeline__dot-img {
  width: 80px !important;
  height: 80px !important;
  left: -25px;
  border: 4px solid var(--border-color) !important;
}
.custom-avatar .q-timeline__title {
  margin: 10px 20px 10px 19px;
}
.custom-avatar .q-timeline__subtitle {
  margin: 25px -21px 0px -21px;
}
.custom-avatar .description {
  margin: 0px 20px 0px 19px;
}
.custom-avatar,
.q-timeline__entry {
  padding-bottom: 100px !important;
}
.custom-avatar,
.q-timeline__entry--icon .q-timeline__dot:after {
  top: 87px !important;
}
</style>
