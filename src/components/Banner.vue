<template>
    <div>
        <div class="swiper-container" ref="swipercainter">
            <div class="swiper-wrapper" v-if="bannerList.length>0">
              <div class="swiper-slide" v-for="(item,index) in bannerList" :key="index">
                <dl>
                  <dt>
                    <img :src="item.imageURL" alt="">
                  </dt>
                  <dd>{{item.name}}</dd>
                </dl>
              </div>
            </div>
            <div class="swiper-pagination"></div>
          </div>
    </div>
</template>
<script>
import Swiper from "swiper";
export default {
  data () {
    return {
      bannerList: []
    };
  },
  computed: {},
  methods: {
    banner () {
      this.axios.get('http://m.cctv4g.com/cntv/resource/cltv3/home.jsp?nodeId=845&wdClientType=3&wdAppId=3').then(res => {
          this.bannerList = res.data.posterList
          this.$nextTick(() => {
            if (this.swiper != null) return;
            this.swiper = new Swiper(this.$refs.swipercainter, {
              loop: true,
              autoplay: {
                delay: 1000,
                stopOnLastSlide: false,
                disableOnInteraction: false
              },
              observer: true, // 修改swiper自己或子元素时，自动初始化swiper
              observeParents: true, // 修改swiper的父元素时，自动初始化swiper
              pagination: {
                el: '.swiper-pagination',
                type: 'fraction'
              }
            })
          })
      })
    }
  },
  created() {
    this.banner();
  },
  mounted () { 

  }
}
</script>
<style scoped lang="">
.swiper-slide {
  width: 100%;
  height: 150px;
}
dl {
  position: relative;
}
dl > dt > img {
  width: 100%;
  height: 150px;
}
dl > dd {
  position: absolute;
  left: 5px;
  bottom: 5px;
  color: #fff;
  font-size: 14px;
}
.swiper-container-horizontal > .swiper-pagination-bullets,
.swiper-pagination-custom,
.swiper-pagination-fraction {
  bottom: 0px;
  width: 100%;
  text-align: right;
  padding-right: 5px;
  font-size: 14px;
  color: #fff;
}
.swiper-pagination-fraction > .swiper-pagination-current {
  color: red;
}
</style>
