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
    boxs: 3,
    start: 0,
    count: 20,
    total: 0,
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    let category = options.category;
    this.setData({ category });
    this.getMoviesData();
  },

  onReachBottom: function() {

  },

  getMoviesData() {
    let { category, start, count } = this.data;
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
    
    request.getMoviesData({
      url,
      category: 'subjects',
      start,
      count,
    }).then((res) => {
      let movies = res.subjects.movies;
      let moviesSouce = this.data.subjects ? this.data.subjects.movies : [];

      if (moviesSouce.length > 0) {
        movies = movies.contact(moviesSouce);
      }

      let count = movies.length;
      let boxs = this.data.boxs;
      let fillCount = boxs - (count % boxs);
      let fillBox = Array.from({length: fillCount});

      movies.push(...fillBox);

      if (!this.data.total) {
        this.setData({
          total: res.subjects.total,
        });
      }
      this.setData(res);
    });
  }
})