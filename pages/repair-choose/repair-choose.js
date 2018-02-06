// pages/repair-choose/repair-choose.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    items: [
      { id: '1', value: '屏幕问题' },
      { id: '2', value: '旧屏回收' },
      { id: '3', value: '内存问题' },
      { id: '4', value: '显卡问题' },
      { id: '5', value: '死机关机' },
      { id: '6', value: '无法启动' },
    ]
  },
  checkItem(e) {
    console.log(e.currentTarget.dataset.id)
    var aimItem = this.data.items.filter(function (item) {
      if (item.id == e.currentTarget.dataset.id){
        item.checked = item.checked == 'true' ? 'false': 'true';
      }
      return item;
    })
    this.setData({
      items: aimItem
    });
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

  // 路由
  toBack() {
    wx.navigateBack({
      delta: 1
    })
  },
  radioChange: function (e) {
    console.log('radio发生change事件，携带value值为：', e.detail.value)
  },

})