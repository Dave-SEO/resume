// pages/resume/resume.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    baseinfo: [
      {"key1": "姓名","value1": "张宁","key2": "电话","value2": "18435144072"},
      {"key1": "性别","value1": "男","key2": "年龄","value2": "30"},
      {"key1": "邮箱","value1": "1244533983@qq.com"},
      {"key1": "工作年限","value1": "6","key2": "求职意向","value2": "web前端开发"}
    ],
    progressinfo: [
      {"title": "HTML/CSS/JavaScript", "progress": 80},
      {"title": "Vue/小程序云开发", "progress": 60},
      {"title": "React17", "progress": 10},
      {"title": "WebPack", "progress": 70},
      {"title": "Nodejs/Express/Koa", "progress": 30},
      {"title": "Linux", "progress": 10}
    ]
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
  onShareAppMessage: function (event) {
    return {
      title: '张宁的个人简历'
    }
  },
  qrcode(){
    wx.showLoading({
      title: '正在生成中'
    })
    wx.cloud.callFunction({
      name: 'qrcode',
      success: res => {
        wx.hideLoading()
        wx.previewImage({
          urls: [res.result],
          current: res.result
        })
      }
    })
  },
  copy(){
    wx.setClipboardData({
      data: 'https://myzhangning.top/blog',
      success (res) {
        wx.getClipboardData({
          success (res) {
            console.log(res.data) // data
          }
        })
      }
    })
  },
  copy2(){
    wx.setClipboardData({
      data: 'https://dave-seo-gitee.gitee.io/blog',
      success (res) {
        wx.getClipboardData({
          success (res) {
            console.log(res.data) // data
          }
        })
      }
    })
  },
  priview(){
    wx.previewImage({
      urls: ['cloud://test-3g5bmq3f53552b0e.7465-test-3g5bmq3f53552b0e-1304852877/erweima/erweima.png'],
      current: 'cloud://test-3g5bmq3f53552b0e.7465-test-3g5bmq3f53552b0e-1304852877/erweima/erweima.png'
    })
  }
})