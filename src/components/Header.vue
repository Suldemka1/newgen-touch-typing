<template>
  <header>
    <div class="wrap header__content">
      <div class="user">
        <h1>{{ this.getNickname }}</h1>
      </div>

      <statistics></statistics>

      <h1>{{ $store.state.settings.currentLetterColor }}</h1>
      <h1>{{ $store.state.settings.errorColor }}</h1>
    </div>
  </header>
</template>

<script lang="ts">
import { mapGetters } from "vuex";
import Statistics from "./Statistics.vue";
export default {
  components: { Statistics },
  name: "app-header",
  computed: {
    ...mapGetters({
      getNickname: "getNickname",
    }),
  },
};
</script>

<style>
header {
  background: green;
}

.header__content {
  display: flex;
  align-items: center;
}

.user {
  width: 100%;
}
</style>
