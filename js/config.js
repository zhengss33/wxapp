const MOVIES_BASE_URL = 'https://douban.uieee.com';

const IN_THEATERS_URL = `${MOVIES_BASE_URL}/v2/movie/in_theaters`;
const IN_THEATERS = '正在热映';

const COMING_URL = `${MOVIES_BASE_URL}/v2/movie/coming_soon`;
const COMING = '即将上映';

const TOP250_URL = `${MOVIES_BASE_URL}/v2/movie/top250`;
const TOP250 = '电影Top250';

const WEEKLY_URL = `${MOVIES_BASE_URL}/v2/movie/weekly`;
const WEEKLY = '电影本周口碑榜';

const NEW_MOVIE_URL = `${MOVIES_BASE_URL}/v2/movie/new_movies`;
const NEW_MOVIE = '电影新片榜';

const SEARCH_URL = `${MOVIES_BASE_URL}/v2/movie/search`;

const SUBJECT_URL = `${MOVIES_BASE_URL}/v2/movie/subject/`;

module.exports = {
  MOVIES_BASE_URL,
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
  SEARCH_URL,
  SUBJECT_URL,
};
