//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    current: 'index',
    active: 0,
    sex: '1',
    marriage:'1'
  },

  sexonChange(event) {
    console.log(event)
    this.setData({
      sex: event.detail
    });
  },
  marriageonChange(event) {
    console.log(event)
    this.setData({
      marriage: event.detail
    });
  }
})
