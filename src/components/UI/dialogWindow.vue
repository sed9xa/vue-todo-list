<template>
  <div class="dialog" v-if="$store.state.show">
    <div class="dialog__content">
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: "dialogWindow",
};
</script>

<style lang="scss">
.dialog {
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  position: fixed;
  backdrop-filter: blur(2px);
  display: flex;
}
.dialog__content {
  padding: 40px 40px 50px 40px;
  width: 400px;
  min-height: 281px;
  border-radius: 6px;
  box-shadow: 0px 25px 50px -12px rgba(0, 0, 0, 0.25);
  border: 1px solid rgba(221, 226, 228, 1);
  background-color: #fff;
  margin: auto;
}
</style>
