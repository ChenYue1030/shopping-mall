// index.js
// const app = getApp()

Page({
  /**
   * 页面的初始数据
   */
  data: {
    swiperList: [],
    classification: []
  },

  /**
   * 生命周期函数 - 页面初始化
   */
  onLoad: function (options) {
    this.getSwiperList();
    this.getClassification();
  },

  /**
   * 获取轮播图数据
   */
  getSwiperList () {
    let that = this;
    wx.cloud.database().collection('swiper').get({
      success: function(res) {
        that.setData({
          swiperList: res.data
        })
      },
      fail: function(err) {}
    })
  },

  /**
   * 获取分类数据
   */
   getClassification () {
    let that = this;
    wx.cloud.database().collection('classification').get({
      success: function(res) {
        that.setData({
          classification: res.data
        })
      },
      fail: function(err) {}
    })
  }
});
