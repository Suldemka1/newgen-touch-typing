<template>
  <div class="settings__button" @click="$store.commit('setIsOpen')">
    <div class="" v-if="$store.state.settings.isOpen">
      <h2>Настройки</h2>
      <img src="/close.png" width="40" />
    </div>
    <div v-else>
      <img src="/options.png" width="40" />
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style>
.settings__button div {
  position: absolute;
  top: 0;

  display: flex;
  align-items: center;
  justify-content: end;
  gap: 10px;

  margin-top: 20px;
  margin-left: 40px;
  margin-right: 40px;

  z-index: 4;

  width: 320px;
  height: 40px;

  cursor: pointer;
}

.settings__button div h2 {
  width: 100%;
}
</style>
