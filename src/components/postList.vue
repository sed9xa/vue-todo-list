<template>
  <div class="list__header">
    <div class="list__header-description">Описание</div>
    <div class="list__header-status">Статус</div>
    <div class="list__header-data">Дата</div>
  </div>

  <div class="list__items">
    <transition-group name="listAnimation">
      <post-item
        v-for="item in searchQueryPosts"
        :key="item.id"
        :post="item"
      ></post-item>
    </transition-group>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import postItem from "../components/postItem.vue";
export default {
  name: "postList",
  components: {
    postItem,
  },
  computed: {
    ...mapGetters(["searchQueryPosts"]),
  },
};
</script>

<style>
.list__header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 32px;
  padding-left: 80px;
  margin-bottom: 16px;
}
.list__header-description {
  border-left: 1px solid #c4c4c4;
  padding-left: 20px;
  height: 100%;
  flex: 6;
  display: flex;
  align-items: center;
}
.list__header-status {
  border-left: 1px solid #c4c4c4;
  padding-left: 20px;
  height: 100%;
  flex: 0.85;
  display: flex;
  align-items: center;
}
.list__header-data {
  border-left: 1px solid #c4c4c4;
  padding-left: 20px;
  height: 100%;
  flex: 0.7;
  display: flex;
  align-items: center;
}
.list__items:first-child {
  border-top: 1px solid #eeebe9;
}
.listAnimation-enter-from,
.listAnimation-leave-to {
  opacity: 0;
  transform: translateX(150px);
}

.listAnimation-leave-active {
  transition: 0.5s;
}
.listAnimation-enter-active {
  transition: 0.5s;
}
.listAnimation-move {
  transition: 0.8s;
}
</style>
