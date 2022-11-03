// index.js
// const app = getApp()

Page({
  /**
   * 页面的初始数据
   */
  data: {},

  /**
   * 生命周期函数 - 页面初始化
   */
  onLoad: function (options) {
    this.getSwiperList();
  },

  getSwiperList () {
    let that = this;
    wx.cloud.database().collection('swiper').get({
      success: function(res) {
        console.log(res)
        that.setData({
          swiperList: res.data
        })
      },
      fail: function(err) {}
    })
  }
});
