const BASE_URL = 'https://douban.uieee.com';

const IN_THEATERS_URL = `${BASE_URL}/v2/movie/in_theaters`;
const IN_THEATERS = '正在热映';

const COMING_URL = `${BASE_URL}/v2/movie/coming_soon`;
const COMING = '即将上映';

const TOP250_URL = `${BASE_URL}/v2/movie/top250`;
const TOP250 = '电影Top250';

const WEEKLY_URL = `${BASE_URL}/v2/movie/weekly`;
const WEEKLY = '电影本周口碑榜';

const NEW_MOVIE_URL = `${BASE_URL}/v2/movie/new_movies`;
const NEW_MOVIE = '电影新片榜';

const SEARCH_MOVIE_URL = `${BASE_URL}/v2/movie/search`;

const MOVIE_URL = `${BASE_URL}/v2/movie/subject/`;

const SEARCH_BOOK_URL = `${BASE_URL}/v2/book/search`;

const BOOK_URL = `${BASE_URL}/v2/book/`;

const CELEBRITY_URL = `${BASE_URL}/v2/movie/celebrity/`;

module.exports = {
  BASE_URL,
  IN_THEATERS_URL,
  IN_THEATERS,
  COMING_URL,
  COMING,
  TOP250_URL,
  TOP250,
  WEEKLY_URL,
  WEEKLY,
  NEW_MOVIE_URL,
  NEW_MOVIE,
  SEARCH_MOVIE_URL,
  MOVIE_URL,
  SEARCH_BOOK_URL,
  BOOK_URL,
  CELEBRITY_URL,
};
