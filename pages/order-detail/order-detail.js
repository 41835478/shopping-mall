// pages/order-detail/order-detail.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    items: [
      { name: 'post', value: '邮寄' },
      { name: 'self', value: '自提', checked: 'true' },
    ],
    pay: [
      { name: "score"},
      { name: "wexin", checked: 'true' }
    ],
    number: 1,
    showBottomPopup:false,     // 底部弹框显示与否
    typeList: [],
    choseType:{
      title: "34",
      color: "选择机型配色",
      memory: "选择机型内存",
      release: "选择机型版本",
      screen: ""
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
  bindTextAreaBlur: function (e) {
    console.log(e.detail.value)
  },

  /**
   * 增减产品数量
   */
  subtrct: function () {
    if (this.data.number === 1) {
        return;
    } else {
      this.setData({
        number: --this.data.number
      });
    }
  },
  add: function () {
    this.setData({
      number: ++this.data.number
    });
  },
/**
 * 表单提交
 */
  formSubmit: function (e) {
    console.log('form发生了submit事件，携带数据为：', e.detail.value)
  },
   /**
   * 点击时候触发事件 拿到产品信息  取出数组 赋值list 判断type 赋值
   * 数据渲染在页面
   * {{title}} 标题
   * {{list}}  内容 ： 数组  选择之后参数替换（如配色）
   */
  toggleBottomPopup (e) {
    const type = e.currentTarget.dataset.type
    switch (type) {
      case "color":
        console.log('color');
        this.setData({
          typeList: ["红褐色", "黄色", "卡其色", "天蓝色"],
          ['choseType.title']: "机型配色"
        });
        break;
      case "memory":
        console.log('memory');
        this.setData({
          typeList: ["4M", "8M", "16G", "32G"],
          ['choseType.title']: "内存选择",
        });
        break;
      case "release":
        console.log('release');
        this.setData({
          typeList: ["旗舰版", "标准版", "普通版", "定制版", "迷你版", "超神版", "天花乱坠版"],
          ['choseType.title']: "版本选择",
        });
        break;
      case "screen":
        console.log('screen');
        this.setData({
          typeList: ["5.8 英寸", "5.5 英寸", "4.7 英寸"],
          ['choseType.title']: "屏幕问题选择",
        });
        break;
    }
    this.setData({
      showBottomPopup: !this.data.showBottomPopup
    });
  },

  /**
   * 路由
   */
  toLocation: function () {
    wx.navigateTo({
      url: '/pages/location/location',
    })
  },
})