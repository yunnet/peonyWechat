// pages/auth/user/index.js
var app = getApp();

Page({

  /**
   * 页面的初始数据
   */
  data: {
    userInfo: {},
    hasUserInfo: false,
    route: "",
    username:"",
    hasLogin: false,
    cacheSize: 0,
    item: [
      {
        icon: "icon-fuwu-02",
        iconcolor: "bule",
        text: "个人设置",
        path: "../usersetting/index"
      },
      {
        icon: "icon-xiugai",
        iconcolor: "yellow",
        text: "意见反馈",
        path: "../feedback/index"
      },
      {
        icon: "icon-lianxi",
        iconcolor: "green",
        text: "联系我们",
        path: "../contact/index"
      },
      {
        icon: "icon-guanyu01",
        iconcolor: "red",
        text: "关于我们",
        path: "../about/index"
      }
    ]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    // 页面初始化 options为页面跳转所带来的参数
    let routee = getCurrentPages()
    console.log(routee[0].route);

    this.setData({
      route: routee[0].route
    })
    console.log(app.globalData);  

    if (app.globalData.userInfo) {
      this.setData({
        userInfo: app.globalData.userInfo,
        hasUserInfo: true
      })
    }

    this.getStorageSize()
  },

  getStorageSize: function(){
    var that = this;
    wx.getStorageInfo({
      success: function(res){
        console.log(res.keys);
        console.log(res.currentSize);
        console.log(res.limitSize);

        that.setData({
          cacheSize: res.currentSize
        });
      }
    });     
  },

  openConfirm: function(){
    wx.showModal({
      title: '清除缓存',
      content: '确定需要清除吗？',
      confirmText: "确定",
      cancelText: "取消",
      success: function (res) {        
        if (res.confirm) {
          wx.clearStorageSync();
        } 
      }
    });
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
  
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
  
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {
  
  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {
  
  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {
  
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
  
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
  
  }
})