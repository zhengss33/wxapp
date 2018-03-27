// pages/movies/movies.js
const app = getApp();
const utils = require('../../js/utils.js');

Page({

  /**
   * 页面的初始数据
   */
  data: {
    arr: [1,2,3],
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    let baseUrl = app.globalData.baseUrl;
    let in_theatersUrl = `${baseUrl}/v2/movie/in_theaters`;
    let comingUrl = `${baseUrl}/v2/movie/coming_soon`;
    let topUrl = `${baseUrl}/v2/movie/top250`;
    let weeklyUrl = `${baseUrl}/v2/movie/weekly`;
    let newMoviesUrl = `${baseUrl}/v2/movie/new_movies`;

    this.getMoviesData(in_theatersUrl, 'inTheaters', 10);
    this.getMoviesData(comingUrl, 'comingSoon', 10);
    this.getMoviesData(topUrl, 'top', 5);
    this.getMoviesData(weeklyUrl, 'weekly', 5);
    this.getMoviesData(newMoviesUrl, 'newMovies', 5);
  },

  getMoviesData(url, category, count) {
    wx.request({
      url: url,
      header: {
        "Content-Type": "json",
      },
      success: (res) => {
        console.log(res);
        this.formatMovieData(res.data, category, count);
      },
      fail: (err) => {
        console.log(err);
      }
    });
  },

  formatMovieData(data, category, count) {
    let subjects = data.subjects.slice(0, count);
    let movies = [];
    let movieData = {};
    subjects.forEach((v, i) => {
      let movie = category === 'weekly' ? v.subject : v;
      movies.push({
        id: movie.id,
        image: movie.images.small,
        title: movie.title,
        average: movie.rating.average,
        stars: utils.convertToStarsArr(movie.rating.stars),
      });
    });
    movieData[category] = {
      category: data.title.substr(2),
      movies: movies,
    };
    this.setData(movieData);
  },
})