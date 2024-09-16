<script setup lang="ts">
interface Props {
  title: string;
}

withDefaults(defineProps<Props>(), {
  title: '',
});
</script>

<template>
  <h1 class="text-h4 text-weight-bold text-primary">{{ title }}</h1>
</template>
