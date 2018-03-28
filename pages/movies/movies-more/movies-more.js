// pages/movies/movies-more/movies-more.js
const app = getApp();
const request = require('../../../js/request.js');
const config = require('../../../js/config.js');
const { 
  IN_THEATERS, 
  IN_THEATERS_URL,
  COMING,
  COMING_URL,
  TOP250,
  TOP250_URL,
  WEEKLY,
  WEEKLY_URL,
  NEW_MOVIE,
  NEW_MOVIE_URL,
} = config;

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
    let category = options.category;
    this.getMoviesData(category);
  },

  getMoviesData(category) {
    let url = '';

    switch (category) {
      case IN_THEATERS:
        url = IN_THEATERS_URL;
        break;
      
      case COMING:
        url = COMING_URL;
        break;

      case TOP250:
        url = TOP250_URL;
        break;

      case WEEKLY:
        url = WEEKLY_URL;
        break;

      case NEW_MOVIE:
        url = NEW_MOVIE_URL;
        break;
      
    }
    
    wx.setNavigationBarTitle({
      title: category,
    });
    
    request.getMoviesData(url, 'data').then((res) => {
      this.setData(res);
    });
  }
})