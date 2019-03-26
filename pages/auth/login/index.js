// pages/auth/login/login.js

var app = getApp();
var api = require('../../../config/api.js');
var util = require('../../../utils/util.js');

Page({
  
  /**
   * 页面的初始数据
   */
  data: {
    username: '',
    password: '',    
    route: "",
    loginErrorCount: 0
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
    
    wx.setNavigationBarTitle({
      title: wx.getStorageSync('siteApp')
    })   
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
  
  },

  onLogin: function(){

  },

  bindUsernameInput: function(e){
    this.setData({
      username: e.detail.value
    })
  },

  bindPasswordInput:function(e){
    this.setData({
      password: e.detail.value
    })
  },

  bindCodeInput: function(e){
    this.setData({
      code: e.detail.value
    })
  },

  login: function(){
    let that = this;
    if (that.data.username.length < 1 || that.data.password.length < 1){
      util.showModel('登录错误', '请输入用户名和密码');      
    }else{
      util.request(
        api.LoginUrl, 
        { username: that.data.username, password: that.data.password}
        ).then(function(res){
        if(res.code === 0){          
          var obj = JSON.parse(res.data); 
          wx.setStorageSync("username", that.data.username);

          util.showSuccess('登录成功');
          
          wx.setStorage({
            key: "token",
            data: obj.token,
            success: function(){
              wx.navigateBack({
                url: that.data.route
              });
            }
          });
          
        }else{
          util.showModel('登录错误', res.msg)          
        }
      });
    }
  }
})