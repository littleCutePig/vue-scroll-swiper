<template>
  <div id="app">
    <keep-alive>
      <router-view v-if="$route.meta.keepAlive"></router-view>
    </keep-alive>
    <router-view v-if="!$route.meta.keepAlive"></router-view>
  </div>
</template>

<script>
export default {
  name: 'App',
  data () {
    return {

    }
  },
  methods: {

  }
}
</script>

<style lang="less">
*{
  margin:0;
  padding:0;
  list-style: none;
  box-sizing: border-box;
}
html,body,#app{
  width:100%;
  height: 100%;
}
.swiper-pagination-current{
  color: skyblue
}
</style>
