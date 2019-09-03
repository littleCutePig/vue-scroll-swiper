<template>
    <div id="home" @click="getChhtest">
        OlympicChannel(点击跳demo)
    </div>
</template>

<script>
export default {
  name: 'home',
  data () {
    return {

    }
  },
  methods: {
    getChhtest () {
      this.$router.push({
        path: 'bscroll'
      })
    }
  }
}
</script>

<style lang="less" scoped>

</style>
