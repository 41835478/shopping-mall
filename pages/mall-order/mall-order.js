// pages/mall-order/mall-order.js
const {
  extend,
  Tab
} = require('../../zanui/index');
Page(extend({}, Tab, {
  /**
   * 页面的初始数据
   */
  data: {
    list: [{
      id: 'all',
      title: '全部'
    }, {
      id: 'topay',
      title: '待付款'
    }, {
      id: 'tosend',
      title: '待发货'
    }, {
      id: 'send',
      title: '待收货'
    }, {
      id: 'sign',
      title: '已完成'
    }],
    selectedId: 'all'
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    // this.selectedId = options.id;
    this.setData({
      selectedId: options.id
    });
    this.getOrderByOenId();
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
   * 切换tab 获取id 
   * 调用请求数据
   */
  handleZanTabChange(e) {
    var componentId = e.componentId;
    var selectedId = e.selectedId;
    this.setData({
      selectedId: selectedId,
    });
    this.getOrderByOenId();
  },
  /**
   * 请求数据
   * 渲染页面
   */
  getOrderByOenId() {
    console.log("现在请求数据是：" + this.data.selectedId)
  }
}));