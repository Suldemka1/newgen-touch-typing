<template>
    <input
      :value="nickname"
      @input="(event) => setNickname(event.target.value)"
      maxlength="20"
      class="nickname"
      placeholder="никнейм"
    />
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

<style>

.nickname {
  height: 50px;
  font-size: 21px;

  border: 2px rgb(6, 94, 48) solid;
  border-radius: 5px;

  padding: 6px 12px;
  outline: none;
}
</style>
