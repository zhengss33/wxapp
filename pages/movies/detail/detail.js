// pages/movies/detail/detail.js
const request = require('../../../js/request.js');
const { SUBJECT_URL } = require('../../../js/config.js');

Page({

  /**
   * 页面的初始数据
   */
  data: {
  
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.setData({
      id: options.id,
    });
    this.getMovieDetail();
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
  
  },

  getMovieDetail() {
    wx.request({
      url: SUBJECT_URL + this.data.id,
      header: { 'Content-Type': 'json' },
      success: (res) => {
        this.setData({
          data: res.data,
        });
        
        wx.setNavigationBarTitle({
          title: res.data.title,
        });
      },
      fail: (err) => {
        console.log(err);
      }
    });
  },
});
