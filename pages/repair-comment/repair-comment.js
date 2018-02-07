// pages/repair-comment/repair-comment.js
const { Field, extend } = require('../../zanui/index');
Page(extend({}, Field, {

  /**
   * 页面的初始数据
   */
  data: {
    rate1: 4,
    rate2: 4,
    rate3: 4,

    imgSrc:[]
  },
  handleChange: function (e) {
    console.log(e.detail.value)
    switch (e.currentTarget.dataset.rate) {
      case '1':
        this.setData({
          rate1: e.detail.value
        });
        break;
      case '2':
        this.setData({
          rate2: e.detail.value
        })
        break;
      case '3':
        this.setData({
          rate3: e.detail.value
        })
        break;
    }
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

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
  /**
   * 选择图片
   */
  getImg() {
    var _this = this;
    wx.chooseImage({
      count: 4,
      sizeType: ['original', 'compressed'], 
      sourceType: ['album', 'camera'], 
      success: function (res) {
        var tempFilePaths = res.tempFilePaths
        _this.setData({
          imgSrc: res.tempFilePaths
        })
      }
    })
  },
  /**
   * 预览图片
   */
  previewImg() {
    var _this = this;
    wx.previewImage({
      urls:  _this.data.imgSrc 
    })
  }
}))