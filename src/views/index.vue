<template>
  <div class="home">
    <div class="title">{{ $t("menu.home") }}</div>
    <img alt="Vue logo" src="../assets/logo.png" />
    <HelloWorld msg="Welcome to Your Vue.js App" />
    <div>
      <a-button type="primary" @click="tabEn"> 英文 </a-button>
      <a-button type="dashed" @click="tabCn"> 中文 </a-button>
      <a-button>Default</a-button>
      <a-button type="danger"> Danger </a-button>
      <a-config-provider :auto-insert-space-in-button="false">
        <a-button type="primary"> 按钮 </a-button>
      </a-config-provider>
      <a-button type="primary"> 按钮 </a-button>
      <a-button type="link"> Link </a-button>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from "@/components/HelloWorld.vue";

export default {
  name: "Home",
  components: {
    HelloWorld,
  },
  methods: {
    tabEn () {
      this.$i18n.locale = "EN";
    },
    tabCn () {
      this.$i18n.locale = "CN";
    },
  },
};
</script>
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>

