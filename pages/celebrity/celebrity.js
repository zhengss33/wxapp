// pages/celebrity/celebrity.js
const { CELEBRITY_URL } = require('../../js/config.js');

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
    wx.request({
      url: CELEBRITY_URL + options.id,
      header: {
        'Content-Type': 'json',
      },
      success: (res) => {
        this.setData(res.data);

        let works = res.data.works;
        let workList = [];
        works.forEach((work) => {
          let { id, images: { small: image }, title, rating: {average} } = work.subject;
          workList.push({ id, image, title, average});
        });

        wx.setNavigationBarTitle({
          title: res.data.name,
        })
        this.setData({
          workList,
        });
      },
    });
  },

  onMovieTap(event) {

    wx.navigateTo({
      url: `/pages/movies/detail/detail?id=${event.detail.mid}`,
    })
  }
})