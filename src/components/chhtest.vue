<template>
    <div id="chhtest">
        <div class="main">
            <div>
                <p>播放器功能_封面</p>
                <div id="player-con"></div>
            </div>
            <div>
                <p>播放器功能_延迟播放</p>
                <div id="player-con2"></div>
            </div>
        </div>
        <div class="main">
            <div>
                <p>播放器功能_截图</p>
                <div id="player-con3"></div>
            </div>
            <div>
                <p>播放器功能_循坏播放</p>
                <div id="player-con4"></div>
            </div>
        </div>
        <div class="main">
            <div>
                <p>播放器功能_4k视频</p>
                <div id="player-con5"></div>
            </div>
            <div>
                <p>播放器功能_图片广告</p>
                <div id="player-con6"></div>
            </div>
        </div>
        <div class="main">
          <div>
            <p>播放器功能_跑马灯</p>
            <div id="player-con7"></div>
          </div>
          <div>
            <p>播放器功能_视频列表</p>
            <div id="player-con8"></div>
          </div>
        </div>
        <div class="main">
          <div>
            <p>播放器功能_视频打点</p>
            <div id="player-con12"></div>
          </div>
          <div>
            <p>播放器功能_视频广告</p>
            <div id="player-con10"></div>
          </div>
        </div>
        <div class="main">
          <!-- <div>
            <p>播放器功能_弹幕</p>
            <div id="player-con11"></div>
          </div> -->
          <div style="width: 50%">
            <p>播放器功能_旋转镜像</p>
            <div id="player-con9"></div>
          </div>
        </div>
    </div>
</template>
    
<script>
export default {
  name: "component_name",
  data() {
    return {};
  },
  mounted() {
    //   封面
    var player = new Aliplayer(
      {
        id: "player-con",
        source: "https://player.alicdn.com/video/guanggao.mp4",
        width: "100%",
        height: "75%",
        cover:
          "https://img.alicdn.com/tps/TB1EXIhOFXXXXcIaXXXXXXXXXXX-760-340.jpg",
        /* To set an album art, you must set 'autoplay' and 'preload' to 'false' */
        autoplay: false,
        preload: false,
        isLive: false //是否为直播
      },
      function(player) {
        console.log("The player is created");
      }
    );

    // // 延迟播放
    var player = new Aliplayer(
      {
        id: "player-con2",
        source: "https://player.alicdn.com/video/guanggao.mp4",
        width: "100%",
        height: "75%",
        autoplay: true,
        isLive: false,
        autoPlayDelay: 2,
        autoPlayDelayDisplayText: "请等待"
      },
      function(player) {
        console.log("The player is created");
      }
    );

    // 截屏
    var player = new Aliplayer({
      id: "player-con3",
      source: "https://player.alicdn.com/video/guanggao.mp4",
      width: "100%",
      height: "75%",
      autoplay: true,
      isLive: false,
      "extraInfo": {
        "crossOrigin": "anonymous"
      },
      "skinLayout": [
        { "name": "bigPlayButton", "align": "blabs", "x": 30, "y": 80 },
        { "name": "H5Loading", "align": "cc" },
        { "name": "errorDisplay", "align": "tlabs", "x": 0, "y": 0 },
        { "name": "infoDisplay" },
        { "name": "tooltip", "align": "blabs", "x": 0, "y": 56 },
        { "name": "thumbnail" },
        {
          "name": "controlBar", "align": "blabs", "x": 0, "y": 0,
          "children": [
            { "name": "progress", "align": "blabs", "x": 0, "y": 44 },
            { "name": "playButton", "align": "tl", "x": 15, "y": 12 },
            { "name": "timeDisplay", "align": "tl", "x": 10, "y": 7 },
            { "name": "fullScreenButton", "align": "tr", "x": 10, "y": 12 },
            { "name": "subtitle", "align": "tr", "x": 15, "y": 12 },
            { "name": "setting", "align": "tr", "x": 15, "y": 12 },
            { "name": "volume", "align": "tr", "x": 5, "y": 10 },
            { "name": "snapshot", "align": "tr", "x": 10, "y": 12 }
          ]
        }
      ]
    }, function (player) {
      console.log("The player is created");
    })
    // 点击截屏图标
    player.on('snapshoted', function (data) {
      var pictureData = data.paramData.base64
      var downloadElement = document.createElement('a')
      downloadElement.setAttribute('href', pictureData)
      var fileName = 'Aliplayer' + Date.now() + '.png'
      downloadElement.setAttribute('download', fileName)
      downloadElement.click()
      pictureData = null
    })
    // 循坏播放
    var player = new Aliplayer({
      id: "player-con4",
      source: "https://player.alicdn.com/video/guanggao.mp4",
      width: "100%",
      height: "75%",
      autoplay: true,
      isLive: false,
      "rePlay": true /* Loop */
    }, function (player) {
      console.log(player)
    })
    // 4k视频
    var player = new Aliplayer({
      id: "player-con5",
      source: "https://player.alicdn.com/video/guanggao.mp4",
      width: "100%",
      height: "75%",
      autoplay: true,
      isLive: false,
      components: [{
        name: 'VideoADComponent',
        type: AliPlayerComponent.VideoADComponent,
        args: ['https://player.alicdn.com/video/guanggao.mp4', 'https://www.aliyun.com/product/live']
      }]
    }, function (player) {
      console.log(player)
    })
    // 图片广告
    var player = new Aliplayer({
      id: "player-con6",
      source: "https://player.alicdn.com/video/guanggao.mp4",
      width: "100%",
      height: "75%",
      autoplay: true,
      isLive: false,
      components: [{
        name: 'StartADComponent',
        type: AliPlayerComponent.StartADComponent,
        args: ['https://img.alicdn.com/tfs/TB1byi8afDH8KJjy1XcXXcpdXXa-1920-514.jpg', 'https://promotion.aliyun.com/ntms/act/videoai.html', 3]
      }, {
        name: 'PauseADComponent',
        type: AliPlayerComponent.PauseADComponent,
        args: ['https://img.alicdn.com/tfs/TB1byi8afDH8KJjy1XcXXcpdXXa-1920-514.jpg', 'https://promotion.aliyun.com/ntms/act/videoai.html']
      }]
    }, function (player) {
      console.log(player)
    })
    // 跑马灯
    var player = new Aliplayer({
      id: "player-con7",
      source: "https://player.alicdn.com/video/guanggao.mp4",
      width: "100%",
      height: "75%",
      autoplay: true,
      isLive: false,
      components: [{
        name: 'BulletScreenComponent',
        type: AliPlayerComponent.BulletScreenComponent,
        /** Descriptions of the scrolling text component parameters: text, style, bulletPosition 
         * text: The scrolling text
         * style: The style of the scrolling text
         * bulletPosition: The position of the scrolling text. Valid values: 'top', 'bottom', and 'random'. The default is 'random'.
         */
        args: ['欢迎使用阿里播放器', { fontSize: '16px', color: '#00c1de' }, 'random']
      }]
    })
    // 视频列表
    var player = new Aliplayer({
      id: "player-con8",
      source: "https://player.alicdn.com/video/guanggao.mp4",
      width: "100%",
      height: "75%",
      autoplay: true,
      isLive: false,
      components: [{
        name: 'PlaylistComponent',
        type: AliPlayerComponent.PlaylistComponent,
        args: [[{
          name: '趣拍演示视频',
          source: '//player.alicdn.com/resource/player/qupai.mp4'
        }, {
          name: '云栖大会',
          source: 'http://player.pier39.cn/video/yunxi.mp4'
        }, {
          name: '4K 阿里视频云介绍',
          source: 'https://player.alicdn.com/video/apsaravideo4k.mp4'
        }]]
      }]
    })
    // 旋转镜像
    var player = new Aliplayer({
      id: "player-con9",
      source: "https://player.alicdn.com/video/guanggao.mp4",
      width: "100%",
      height: "75%",
      autoplay: true,
      isLive: false,
      videoHeight: '60%',
      components: [{
        name: 'RotateMirrorComponent',
        type: AliPlayerComponent.RotateMirrorComponent
      }]
    }, function (player) {
      console.log(player)
    })
    // 视频广告
    var videoAdClose = function (videoAd) {
      /* Register the pause event to pause the ad. */
      videoAd.pauseVideoAd()
      var result = confirm('确定开通会员关闭广告吗？')
      if (result) {
        /* Register the skip event to skip the ad. */
        videoAd.closeVideoAd()
      } else {
        /* Register the play event to play the ad. */
        videoAd.playVideoAd()
      }
    }
    var player = new Aliplayer({
      id: "player-con10",
      source: "https://player.alicdn.com/video/guanggao.mp4",
      width: "100%",
      height: "75%",
      autoplay: true,
      isLive: false,
      components: [{
        name: 'VideoADComponent',
        type: AliPlayerComponent.VideoADComponent,
        /* The video ad component has these parameters: adVideoSource, adLink, adCloseFunction, and closeText
         * adVideoSource {@String Required. The URL of the video ad. }
         * adLink {@String Required. The link of the ad page.}
         * adCloseFunction {@Function Optional. The click event handler for skipping the ad. The default action is skip ad.}
         * closeText {@String Optional. The text of the skip ad button. The default is 'Skip Ad'.}
         */
        args: ['https://player.alicdn.com/video/guanggao.mp4', 'https://et.aliyun.com/brain/city', videoAdClose, 'VIP关闭广告']
      }]
    }, function (player) {
      console.log(player)
    })
    // 弹幕
    // var player = new Aliplayer({
    //   id: "player-con11",
    //   source: "https://player.alicdn.com/video/guanggao.mp4",
    //   width: "100%",
    //   height: "75%",
    //   autoplay: true,
    //   isLive: false,
    //   components: [{
    //     name: 'AliplayerDanmuComponent',
    //     type: AliPlayerComponent.AliplayerDanmuComponent,
    //     args: [danmukuList]
    //   }]
    // }, function (player) {
    //   console.log(player)
    // })

    // 视频打点
    var player = new Aliplayer({
      id: "player-con12",
      source: "https://player.alicdn.com/video/guanggao.mp4",
      width: "100%",
      height: "75%",
      autoplay: true,
      isLive: false,
      progressMarkers: [{
        offset: 30,
        isCustomized: true,
        coverUrl: 'https://alivc-demo-vod.aliyuncs.com/image/cover/9A3F562E595E4764AD1DD546FA52C6E5-6-2.png',
        title: 'test title',
        describe: 'test string',
      }, {
        offset: 50,
        isCustomized: true,
        coverUrl: 'https://alivc-demo-vod.aliyuncs.com/image/cover/1E7F402241CD4C0F94AD2BBB5CCC3EC7-6-2.png',
        title: 'test title',
        describe: 'test string',
      }, {
        offset: 60,
        isCustomized: true,
        coverUrl: 'https://alivc-demo-vod.aliyuncs.com/image/cover/553AEA01161342C8A2B1756E83B69B5B-6-2.png',
        title: 'test title',
        describe: 'test string',
      }, {
        offset: 120,
        isCustomized: true,
        coverUrl: 'https://alivc-demo-vod.aliyuncs.com/image/cover/553AEA01161342C8A2B1756E83B69B5B-6-2.png',
        title: 'test title',
        describe: 'test string',
      }],
      components: [{
        name: 'ProgressComponent',
        type: AliPlayerComponent.ProgressComponent
      }]
    }, function (player) {
      console.log(player)
    })

  }
};
</script>
    
<style lang="css" scoped>
  .main {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .main div {
    width: 48%;
    height: 3.4375rem;
  }
  p {
    font-size: 0.3125rem;
  }
</style>
