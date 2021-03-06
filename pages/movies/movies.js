// pages/movies/movies.js
const app = getApp();
const request = require('../../js/request.js');
const config = require('../../js/config.js');
const { IN_THEATERS_URL, COMING_URL, NEW_MOVIE_URL, TOP250_URL, WEEKLY_URL } = config;

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
    this.getMoviesData();
  },

  getMoviesData() {
    // 正在热映
    request.getMoviesData({
      url:IN_THEATERS_URL, 
      category: 'in_theaters',
      count: 10,
    }).then((res) => {
      this.setData({
        in_theaters: res,
      });
    });
    
    // 即将上映
    request.getMoviesData({
      url: COMING_URL,
      category: 'coming_soon',
      count: 10,
    }).then((res) => {
      this.setData({
        coming_soon: res,
      });
    });

    // 新片榜
    request.getMoviesData({
      url: NEW_MOVIE_URL,
      category: 'new_movies',
    }).then((res) => {
      this.setData({
        new_movies: res,
      });
    });

    // top250
    request.getMoviesData({
      url: TOP250_URL,
      category: 'top250',
      count: 5,
      }).then((res) => {
      this.setData({
        top250: res,
      });
    });

    // 周榜
    request.getMoviesData({
      url: WEEKLY_URL,
      category: 'weekly',
      count: 5,
    }).then((res) => {
      this.setData({
        weekly: res,
      });
    });
  },

  onMovieTap(event) {
    wx.navigateTo({
      url: `/pages/movies/detail/detail?id=${event.detail.mid}`,
    });
  },

  searchMovies(event) {
    let query = event.detail.query;
    
    wx.navigateTo({
      url: `/pages/movies/more/more?q=${query}`,
    });
  }
});
