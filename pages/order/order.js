// pages/order/order.js
const { extend, Tab } = require('../../zanui/index');

Page(extend({}, Tab, {

  /**
   * 页面的初始数据
   */
  data: {
    list: [{
      id: 'Apple',
      title: '苹果'
    }, {
      id: 'Ipad',
      title: 'iPad'
    }, {
        id: 'Samsung',
      title: '三星'
    }, {
        id: 'Huawei',
      title: '华为'
    }, {
      id: 'Oppo',
      title: 'oppo'
    }, {
      id: 'Other',
      title: '其他'
    }],
    selectedId: 'Apple',
    scroll: true,
    height:40,
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
  handleZanTabChange(e) {
    var componentId = e.componentId;
    var selectedId = e.selectedId;

    this.setData({
      selectedId: selectedId
    });
  },

  // 路由
  toRepairChoose() {
    wx.navigateTo({
      url: '/pages/repair-choose/repair-choose',
    })
  }
}))