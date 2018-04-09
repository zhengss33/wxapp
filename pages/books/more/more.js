// pages/books/more/more.js
const { SEARCH_BOOK_URL } = require('../../../js/config.js');
const request = require('../../../js/request.js');

Page({

  /**
   * 页面的初始数据
   */
  data: {
    books: [],
    count: 20,
    tag: '',
    query: '',
    start: 0,
    isEmpty: false,
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    let tag = options.tag || '';
    let query = options.query || '';

    this.setData({
      tag,
      query,
    });

    wx.setNavigationBarTitle({
      title: tag || '搜索结果',
    });

    wx.showLoading({
      title: '加载中',
    });

    this.getBooksData().then(() => {
      console.log('hiden');
      wx.hideLoading();
    });
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
    if (!this.data.isEmpty) {
      this.getBooksData();
    }
  },

  getBooksData() {
    const { tag, count, start, query } = this.data;

    return request.getBooksData({
      url: SEARCH_BOOK_URL,
      tag: tag,
      q: query,
      start: start,
      count: count,
    }).then((res) => {
      res.data.books = this.data.books.concat(res.data.books);
      this.setData(res.data);
      this.checkIsEmpty();
    });
  },

  checkIsEmpty() {
    const { start, count, total } = this.data;
    let num = start + count;

    this.setData({
      start: num,
    });

    if (num + count >= total) {
      this.setData({
        isEmpty: true,
      });
    }
  },

  onBookTap(event) {
    wx.navigateTo({
      url: `/pages/books/detail/detail?id=${event.currentTarget.dataset.mid}`,
    });
  }
})