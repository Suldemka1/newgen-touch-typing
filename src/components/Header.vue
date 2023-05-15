<template>
  <header>
    <div class="wrap header__content">
      <div class="user">
        <h1>{{ getNickname }}</h1>
      </div>
      <statistics></statistics>
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
.header__content {
  display: flex;
  align-items: center;
}

.user {
  width: 100%;
  letter-spacing: 2px;
  font-weight: 900;
  color: white;
  white-space: nowrap;
}
</style>
