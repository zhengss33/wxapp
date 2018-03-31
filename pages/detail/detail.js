// pages/movies/detail/detail.js
const request = require('../../js/request.js');
const { SUBJECT_URL } = require('../../js/config.js');

Page({

  /**
   * 页面的初始数据
   */
  data: {
    isSpread: false,
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
        this.clipText(res.data.summary, 150);

        this.setData({
          subject: res.data,
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

  onCatsTap(event) {
    let mid = event.detail.mid;

    wx.navigateTo({
      url: `/pages/celebrity/celebrity?id=${mid}`,
    });
  },

  onPhotosTap(event) {
    console.log(event.detail.mid);
  },

  clipText(text, count) {
    if (text.length < count) {
      this.setData({
        isSpread: true,
      });
    } else {
      let clipText = text.substring(0, count) + '...';
      this.setData({
        clipSummary: clipText,
      });
    }
  },

  onSpread() {
    this.setData({
      isSpread: true,
    });
  }
});
