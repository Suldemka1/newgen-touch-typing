<template>
  <button @click="onClick">{{ title }}</button>
</template>
<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  props: ["title", "onClick"],
})
</script>

<style scoped></style>