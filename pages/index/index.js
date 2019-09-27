//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    current: 'index',
    active: 1,
    sex: '1',
    marriage:'1',
    sickness:'1',
  },

  sexonChange(event) {
    this.setData({
      sex: event.detail
    });
  },
  marriageonChange(event) {
    this.setData({
      marriage: event.detail
    });
  },
  sicknessonChange(event) {
    this.setData({
      sickness: event.detail
    });
  },
  saveBase:function(){
    var that=this
    console.log("保存信息")
    var active = that.data.active
      that.setData({
        active:1
    })
   
  }
})
