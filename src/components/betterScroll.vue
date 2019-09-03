<template>
    <div class="wrapper" ref="bscroll">
      <div class="wrappermain">
        <Banner></Banner>
        <!-- 顶部提示信息 -->
        <div class="top-tip">
          <span class="refresh-hook">{{xlsx}}</span>
        </div>
        <div v-for="(item, index) in firstClassify" :key="index" class="content">
          <div class="top">
            <p>{{item.name}}</p>
            <p>{{item.moreName}}</p>
          </div>
          <div class="down" v-for="(it,index) in item.recommnedList" :key="index">
            <dl>
              <dt>
                <img :src="it.imageURL" alt="">
              </dt>
              <dd>{{it.name}}</dd>
            </dl>
          </div>
        </div>
       <div class="bottom-tip">
        <span class="loading-hook">{{sljz}}</span>
       </div>
      </div>
      <div class="alert alert-hook" v-show="msg">{{sxcg}}</div>
    </div>
</template>
  
<script>
import Banner from './Banner'
import BScroll from "better-scroll";
export default {
  name: "component_name",
  components: {
    Banner
  },
  data() {
    return {
      firstClassify: [],
      nextPageUrl: "", // 下页地址
      sljz: "",
      xlsx: "下拉刷新",
      sxcg: '刷新成功',
      msg: false
    };
  },
  methods: {
    firstList() {
      this.axios
        .get(
          "http://m.cctv4g.com/cntv/resource/cltv3/home.jsp?nodeId=845&wdClientType=3&wdAppId=3"
        )
        .then(res => {
          this.firstClassify = res.data.classifyList;
          this.nextPageUrl = res.data.nextPageURL;
        });
    },
    pullUp () {
      setTimeout (() => {
        this.axios.get(this.nextPage).then(res => {
            if(this.nextPage === '') {
              return
            } else {
              this.nextPage = res.data.nextPageURL
              for(let props in res.data.classifyList) {
                this.firstDataList = this.firstDataList.concat(res.data.classifyList[props])
              }
            }
        })
        this.bscroll.finishPullUp() // 通知better-scroll事件完成
      },1000);
    },
    // 刷新成功的提示方法
    refreshAlert(text){
        text = text || '操作成功'
        this.sxcg = text,
        this.msg = true,
        setTimeout(() => {
           this.msg = false
        }, 2000)
    }
  },
  created() {
    setTimeout(() => {
      this.firstList();
    },500)
  },
  mounted() {
    this.$nextTick(() => {
      setTimeout(() => {
        this.myScroll = new BScroll(this.$refs.bscroll, {
          click: true,
          scrollX: false,
          scrollY: true,
          bounce: true,
          probeType: 2,
          pullUpLoad: {
            threshold: -30 // 当上拉距离超过30px时触发 pullingUp 事件
          }
        });
        // 滑动中
        this.myScroll.on('scroll', pos => {
          if (pos.y > 50) {
            this.xlsx = '释放立即刷新'
          }
        })
        // 下拉刷新
        this.myScroll.on("touchEnd", pos => {
          if (pos.y > 50) {
            setTimeout(() => {
              this.firstList();
              this.xlsx = '下拉刷新',
              this.refreshAlert('刷新成功');
              this.myScroll.refresh();
            }, 1000)
          } else {
            if (this.nextPageUrl == "") {
              this.sljz = "暂无更多数据";
            } else {
                this.sljz = "加载中...",
                setTimeout(() => {
                  this.sljz = "";
                }, 1000);
            }
          }
        });
        // 上拉加载
        this.myScroll.on("pullingUp", () => {
          if (this.nextPageUrl == "") {
            this.sljz = "暂无更多数据";
          } else {
            this.axios.get(this.nextPageUrl).then(res => {
              this.nextPageUrl = res.data.nextPageURL;
              for (let prop in res.data.classifyList) {
                this.firstClassify = this.firstClassify.concat(
                  res.data.classifyList[prop]
                );
              }
            });
            this.myScroll.finishPullUp(); // 事情做完，需要调用此方法告诉 better-scroll 数据已加载，否则上拉事件只会执行一次
            setTimeout(() => {
              this.myScroll.refresh();
            }, 1000);
          }
        });
      }, 1000);
    });
  }
}
</script>
  
<style lang="css" scoped>
.wrapper{
  width:100%;
  height: 100%;
  overflow: hidden;
  font-size: .1rem;
}
.wrappermain {
  min-height: 100%;
}
.content{
  padding:0 .1rem;
}
.top{
  width:100%;
  height: .5rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.top p{
  font-size: .24rem;
}
.top p:nth-of-type(2){
  font-size: .2rem;
  color:#ccc
}
.bottom-tip {
  width: 100%;
  text-align: center;
  color: #777;
  font-size: 5px;
}
/* 下拉、上拉提示信息 */
.top-tip{
    position: absolute;  
    top: -40px;  
    left: 0;
    z-index: 1;  
    width: 100%;  
    text-align:center;
    color: #555;
    font-size: 5px;
}
/* 全局提示信息 */
.alert{
    position: fixed;
    top: 0px;
    left: 0;
    z-index: 2;
    width: 100%;
    height: 35px;
    line-height: 35px;
    text-align: center;
    color: #fff;
    font-size: 12px;
    background: rgba(7, 17, 27, 0.7);
}
.top{
  width:100%;
  height: .5rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.top span{
  font-size: .24rem;
}
.top span:nth-of-type(2){
  font-size: .2rem;
  color:#ccc
}
.down dl{
  width: 100%;
  height: 1rem;
  display: flex;
}
.down dl dt{
  width: .5rem;
  height: .5rem;
}
.down dl dt img{
  width: .5rem;
  height: .5rem;
}
</style>
