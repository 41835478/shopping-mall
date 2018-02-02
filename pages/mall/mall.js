// pages/mall/mall.js
const { extend, Tab } = require('../../zanui/index');

Page(extend({}, Tab,{

  /**
   * 页面的初始数据
   */
  data: {
    list: [{
      id: '0',
      title: '苹果'
    }, {
      id: '1',
      title: 'OPPO'
    }, {
      id: '2',
      title: 'vivo'
    }, {
      id: '3',
      title: '华为'
    }, {
      id: '4',
      title: '中兴'
    }, {
      id: '5',
      title: '联想'
    }, {
      id: '6',
      title: '三星'
    }, {
      id: '7',
      title: '金立'
    }, {
      id: '8',
      title: '荣耀'
    }],
    selectedId: "2",
    scroll:false
  
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

  getPhoneType:function() {
    console.log(this)
  },
  // 路由
  toOrderDetail() {
    wx.navigateTo({
      url: '/pages/order-detail/order-detail',
    })
  },
  handleZanTabChange(e) {
    var componentId = e.componentId;
    var selectedId = e.selectedId;

    this.setData({
      selectedId: selectedId
    });
    console.log('请求的产品编号为：' + selectedId)
  }
}))