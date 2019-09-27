//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    current: 'index',
    active: 0
  },

  onChange(event) {
    wx.showToast({
      title: `切换到标签 ${event.detail.index + 1}`,
      icon: 'none'
    });
  }
})
