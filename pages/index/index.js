//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    list: [
      {
        id: 'customer',
        name: '客户管理',
        open: true,
        color: 'green',
        iconfont: 'icon-kehuguanli',
        pages: []
      },
      {
        id: 'equipment',
        name: '设备管理',
        open: true,
        color: 'yellow',
        iconfont: 'icon-07',
        pages: []
      },
      {
        id: 'datamanage',
        name: '数据管理',
        open: true,
        color: 'bule',
        iconfont: 'icon-gaishu',
        pages: []
      }    
    ],

    motto: 'Hello World',
    siteApp: wx.getStorageSync('siteApp'),
    userInfo: {},
    hasUserInfo: false,
    canIUse: wx.canIUse('button.open-type.getUserInfo'),

    imageWidth: wx.getSystemInfoSync().windowWidth,//图片宽度
    imgUrls:[
      {image: "../../static/images/swiper/banner1.png"},
      {image: "../../static/images/swiper/banner2.png" },
      {image: "../../static/images/swiper/banner3.png" },
    ],
    indicatorDots: true,  //是否显示圆点 
    autoplay: true,       //自动播放 
    interval: 2000,       //间隔时间 
    duration: 1000        //监听滚动和点击事件
  },

  // bindImageLoad:function(e){
  //   var $width = e.detail.width,
  //       $height = e.detail.height,
  //       ratio = $width / $height;
  //   var viewWidth = 718,
  //       viewHeight = 718/ratio;
  //   var image = this.data.images;

  //   image[e.traget.dataset.index]={
  //     width: viewWidth,
  //     height: viewHeight
  //   }
  //   this.setData()    
  // },

  //事件处理函数
  bindViewTap: function() {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },

  onLoad: function() {
    if (app.globalData.userInfo) {
      this.setData({
        userInfo: app.globalData.userInfo,
        hasUserInfo: true
      })
    } else if (this.data.canIUse) {
      // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
      // 所以此处加入 callback 以防止这种情况
      app.userInfoReadyCallback = res => {
        this.setData({
          userInfo: res.userInfo,
          hasUserInfo: true
        })
      }
    } else {
      // 在没有 open-type=getUserInfo 版本的兼容处理
      wx.getUserInfo({
        success: res => {
          app.globalData.userInfo = res.userInfo
          this.setData({
            userInfo: res.userInfo,
            hasUserInfo: true
          })
        }
      });
    }
  },
  getUserInfo: function(e) {
    console.log(e)
    app.globalData.userInfo = e.detail.userInfo
    this.setData({
      userInfo: e.detail.userInfo,
      hasUserInfo: true
    })
  }
})