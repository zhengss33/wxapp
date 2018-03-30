// pages/movies/movies-more/movies-more.js
const app = getApp();
const request = require('../../../js/request.js');
const config = require('../../../js/config.js');
const boxs = 3;
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
    fillBoxs: [],
    start: 0,
    count: 20,
    total: 0,
    requestUrl: '',
    isEmpty: false,
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    let category = options.category;

    wx.setNavigationBarTitle({
      title: category,
    });

    wx.showLoading({
      title: '正在加载...',
    });

    this.setData({ category });
    this.setRequestUrl();
    this.getMoviesData();
  },

  onReachBottom: function() {
    if (!this.data.isEmpty) {
      setTimeout(() => {
        this.getMoviesData();
      }, 1000);
    }
  },

  getMoviesData() {
    let { requestUrl, start, count } = this.data;

    request.getMoviesData({
      url: requestUrl,
      start,
      count,
    }).then((res) => {
      let moviesSouce = this.data.subjects ? this.data.subjects.movies : [];
      if (moviesSouce.length > 0) {
        let movies = res.movies;
        res.movies = moviesSouce.concat(movies);
      }

      this.setData({
        subjects: res,
        start: start + count,
        total: res.total || 0,
      });

      this.checkIsEmpty();
      this.getFillBoxs();
      wx.hideLoading();
    });
  },

  checkIsEmpty() {
    let { start, total } = this.data;
    this.setData({
      isEmpty: start >= total,
    });
  },

  setRequestUrl() {
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
    this.setData({
      requestUrl: url,
    });
  },

  getFillBoxs() {
    let len = this.data.subjects.movies.length;
    let fillBoxs = [];
    if (len % boxs > 0) {
      let fillCount = boxs - (len % boxs);
      fillBoxs = Array(fillCount).fill({});
    }
    this.setData({
      fillBoxs,
    });
  },
})