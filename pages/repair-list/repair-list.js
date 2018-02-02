// pages/repair-list/repair-list.js
const { extend, Tab } = require('../../zanui/index');

Page(extend({}, Tab, {

  /**
   * 页面的初始数据
   */
  data: {
    list: [{
      id: "all",
      title: "全部"
    }, {
      id: "willRepair",
      title: "待维修"
      }, {
        id: "repaired",
        title: "已维修"
      },],
    selectedId: "all"
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
      selectedId: selectedId,
    });
    switch (selectedId) {
      case 'all':
        console.log(" 加载全部 ")
        break;
      case 'willRepair':
        console.log(" 加载待维修 ")
        break;
      case 'repaired':
        console.log(" 加载已维修 ")
        break;
    }
  }
}))