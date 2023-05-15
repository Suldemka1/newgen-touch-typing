<template>
  <div class="card">
    <div>{{ nickname }}</div>

    <div class="card__results">
      <span>
        <div>время: {{ time }}</div>
        <div>ошибок: {{ mistakes }}</div>
      </span>
      <span>
        <div>скорость: {{ speed }}</div>
        <div>точность: {{ accuracity }}</div>
      </span>
    </div>
  </div>
</template>

<script>
export default {
  props: ["nickname", "time", "mistakes", "speed", "accuracity"],
};
</script>

<style scoped>
.card {
  width: 100%;
  min-height: 100px;

  display: flex;
  flex-direction: column;
  gap: 10px;
  border: green solid 2px;
  border-radius: 10px;

  padding: 10px;
  overflow: hidden;
}

.card__results {
  display: flex;
  justify-content: space-between;
}
</style>
