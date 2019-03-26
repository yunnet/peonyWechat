// pages/operation/equipment/equipmentmetertypedesc/index.js
var api = require('../../../../config/api.js');
var util = require('../../../../utils/util.js');

Page({

  /**
   * 页面的初始数据
   */
  data: {
    id: 0,
    item: {}  
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.setData({
      id: parseInt(options.id)
      // id: 1
    });

    this.getItemInfo();  
  },

  getItemInfo: function () {
    let that = this;
    var url = api.EquipmentMeterTypeUrl + "/" + that.data.id;
    util.request(url, {}).then(function (res) {
      if (res.code === 0) {
        that.setData({
          item: res.data
        });
        that.setData({
          ["item.Tag"]: res.data.Tag == 0 ? "true" : "false",
          ["item.Createdate"]: util.formatDatetime(res.data.Createdate),
          ["item.Changedate"]: util.formatDatetime(res.data.Changedate)
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