<template>
  <div class="postItem">
    <input
      type="checkbox"
      class="post__check"
      name="check"
      :id="post.id"
      v-model="checkedComp"
      @change="changeStatus(post.id)"
    />
    <label :for="post.id" class="check-label"></label>
    <p class="post__description">{{ post.description }}</p>
    <p
      class="post__status"
      :class="{
        blueLetters: post.status === 'Выполнено',
        yellowLetters: post.status === 'В работе',
      }"
    >
      {{ post.status }}
    </p>
    <p class="post__date">{{ post.date }}</p>
  </div>
</template>

<script>
export default {
  name: "postItem",
  props: {
    post: Array,
  },
  data(){
    return{
        checked: false,
    }
  },
  computed:{
    checkedComp(){
        if (this.$store.getters.getCurrentPost(this.post.id).status === 'В работе'){
            return false
        }
        else if (this.$store.getters.getCurrentPost(this.post.id).status === 'Выполнено'){
            return true
        }
    }
  },
  methods:{
    changeStatus(id){
        this.$store.commit('changeStatus', id)
        if (this.checked === true){

        }
        else{

        }
    }
  }
};
</script>

<style lang="scss">
.postItem {
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid #eeebe9;
  height: 58px;
  padding-left: 40px;

  input[type="checkbox"] {
    display: none;
    transition: 0.2s;
    border-radius: 50%;
  }
  input[type="checkbox"]:checked + label::before {
    content: "";
    background-repeat: no-repeat;
    background-size: 70%;
    background-position-y: 40%;
    background-position-x: 30%;
    background-image: url("../assets/check.svg");
    border: 1px #134ec1 solid;
    box-shadow: 0 4px #134ec126;
  }
  label::before {
    content: "";
    display: inline-block;
    width: 20px;
    height: 20px;
    border-radius: 50%;
    border: 1px black solid;
    vertical-align: middle;
  }
}
.postItem:hover {
  background-color: #f6f9ff;
}
.post__check {
  flex: 1;
}
.check-label {
  flex: 0;
}
.post__description {
  flex: 12;
  text-align: left;
  padding-left: 40px;
}
.post__status {
  flex: 1.9;
  text-align: left;
}
.post__date {
  flex: 1.4;
  text-align: left;
}

.blueLetters {
  color: #134ec1;
}
.yellowLetters {
  color: #f89b11;
}
</style>
