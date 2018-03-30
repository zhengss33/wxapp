const utils = require('./utils.js');

const formatMoviesData = function(data, category) {
  let subjects = data.subjects;
  let movies = [];
  let movieData = {};
  subjects.forEach((v, i) => {
    let movie = v.subject ? v.subject : v;
    
    movies.push({
      id: movie.id,
      image: movie.images && movie.images.small ,
      title: movie.title,
      average: movie.rating.average,
      stars: utils.convertToStarsArr(movie.rating.stars),
    });
  });
  movieData = {
    category,
    title: data.title.substr(2),
    total: data.total,
    start: data.start,
    count: data.count,
    movies: movies,
  };
  return movieData;
};

const getMoviesData = function({url, start=0, count=20, category}) {
  return new Promise((resolve, reject) => {
    wx.request({
      url: url,
      data: {
        start,
        count,
      },
      header: {
        "Content-Type": "json",
      },
      success: (res) => {
        let data = formatMoviesData(res.data, category);
        resolve(data);
      },
      fail: (err) => {
        reject(err);
      }
    });
  });
}

module.exports = {
  getMoviesData,
  formatMoviesData,
};