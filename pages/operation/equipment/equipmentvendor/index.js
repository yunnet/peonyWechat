// pages/operation/equipment/equipmentvendor/index.js
var app = getApp();
var api = require('../../../../config/api.js');
var util = require('../../../../utils/util.js');

var pageNum = 0;
var pageTotal = 0;
var pageLimit = 15;
var url = api.EquipmentVendorUrl;

var loadData = function (that) {
  that.setData({
    hidden: false
  });

  if (pageNum != 0) {
    if (pageTotal <= pageNum) {
      that.setData({
        hidden: true
      });
      return;
    }
  }

  util.request(url,
    {
      limit: pageLimit,
      offset: pageNum,
      paging: "true"
    }
  ).then(function (res) {
    if (res.code === 0) {
      if (res.data === null) {
        that.setData({
          hidden: true
        });
        return;
      }
      pageTotal = res.data.paging.total;

      var l = that.data.list;
      var len = res.data.item.length;
      for (var i = 0; i < len; i++) {
        l.push(res.data.item[i]);
        pageNum++;
      }

      that.setData({
        list: l
      });

      that.setData({
        hidden: true
      });

      console.log('affected rows:' + pageNum);
    }
  });

};

Page({

  /**
   * 页面的初始数据
   */
  data: {
    list: [],
    hidden: true,
    scrollTop: 0,
    scrollHeight: 0  
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that = this;
    wx.getSystemInfo({
      success: function (res) {
        that.setData({
          scrollHeight: res.windowHeight
        });
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
    pageNum = 0;
    var that = this;

    that.setData({
      list: [],
      scrollTop: 0
    });
    loadData(that);  
  },

  //该方法绑定了页面滑动到底部的事件
  bindDownLoad: function () {
    var that = this;
    loadData(that);
  },

  //该方法绑定了页面滚动时的事件，我这里记录了当前的position.y的值,为了请求数据之后把页面定位到这里来。
  scroll: function () {
    this.setData({
      scrollTop: function () {
        if (event != null) {
          return event.detail.scrollTop;
        }
      }
    });
  },

  //该方法绑定了页面滑动到顶部的事件，然后做上拉刷新
  refresh: function (event) {
    // pageNum = 1;
    // this.setData({
    //   list: [],
    //   scrollTop: 0
    // });
    // loadData(this);  
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
    var that = this;
    loadData(that);    
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
  
  }
})