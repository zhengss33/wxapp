// pages/books/detail/detail.js
const { BOOK_URL } = require('../../../js/config.js');

Page({

  /**
   * 页面的初始数据
   */
  data: {
    visibleDialog: false,
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.setData({
      id: options.id,
    });
    this.getBookData();
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
  
  },

  getBookData() {
    wx.request({
      url: BOOK_URL + this.data.id,
      header: {
        'Content-Type': 'json',
      },
      success: (res) => {
        this.setData({
          subject: res.data,
        });
        wx.setNavigationBarTitle({
          title: res.data.title,
        })
      },
      fail: (err) => {
        console.log(err);
      }
    });
  },

  showDialog() {
    this.setData({
      visibleDialog: true,
    });
  }
})