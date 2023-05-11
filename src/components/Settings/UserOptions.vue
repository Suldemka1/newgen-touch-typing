<template>
  <div>
    <input
      :value="nickname"
      @input="(event) => setNickname(event.target.value)"
      class="nickname"
      placeholder="Никнейм"
    />
  </div>
</template>

<script>
import { mapMutations, mapState } from "vuex";
export default {
  computed: {
    ...mapState({
      nickname: (state) => state.user.nickname,
    }),
  },
  methods: {
    ...mapMutations({
      setNickname: "setNickname",
    }),
  },
};
</script>

<style></style>
