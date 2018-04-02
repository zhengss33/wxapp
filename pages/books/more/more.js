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
    start: 0,
    isEmpty: false,
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.setData({
      tag: options.tag,
    });

    wx.setNavigationBarTitle({
      title: options.tag,
    });

    wx.showLoading({
      title: '加载中',
    });

    this.getBooksData().then(() => {
      wx.hideLoading();
    });
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
    console.log('bottom');
    if (!this.data.isEmpty) {
      console.log('get');
      this.getBooksData();
    }
  },

  getBooksData() {
    const { tag, count, start } = this.data;

    return request.getBooksData({
      url: SEARCH_BOOK_URL,
      tag: tag,
      start: start,
      count: count,
    }).then((res) => {
      res.data.books = this.data.books.concat(res.data.books);
      this.setData(res.data);
      this.checkIsEmpty();
      Promise.resolve();
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