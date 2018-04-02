// pages/books/books.js
const { SEARCH_BOOK_URL } = require('../../js/config.js');
const request = require('../../js/request.js');

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
    this.getBooksData();
  },

  getBooksData() {
    // 中国文学
    request.getBooksData({
      url: SEARCH_BOOK_URL,
      tag: '中国文学',
      count: 10,
    }).then((res) => {
      let books = this.formatBooksData(res.data.books);
      this.setData({
        chinese: {
          tag: '中国文学',
          books,
        }
      });
    });

    // 外国文学
    request.getBooksData({
      url: SEARCH_BOOK_URL,
      tag: '外国文学',
      count: 10,
    }).then((res) => {
      let books = this.formatBooksData(res.data.books);
      this.setData({
        foreign: {
          tag: '外国文学',
          books,
        },
      });
    });

    // 科技
    request.getBooksData({
      url: SEARCH_BOOK_URL,
      tag: '科技',
      count: 10,
    }).then((res) => {
      let books = this.formatBooksData(res.data.books);
      this.setData({
        science: {
          tag: '科技',
          books,
        },
      });
    });

    // top250
    request.getBooksData({
      url: SEARCH_BOOK_URL,
      tag: 'top250',
      count: 10,
    }).then((res) => {
      let books = this.formatBooksData(res.data.books);
      this.setData({
        top: {
          tag: 'top250',
          books,
        },
      });
    });
  },

  formatBooksData(books) {
    let bookList = [];
    let obj = {};
    books.forEach((item) => {
      let { id, title, image, rating: { average }} = item ;
      bookList.push({ id, title, image, average });
    });
    return bookList;
  },

  onBookTap(event) {
    wx.navigateTo({
      url: `/pages/books/detail/detail?id=${event.detail.mid}`,
    });
  },

  searchBooks(event) {
    wx.navigateTo({
      url: `/pages/books/more/more?query=${event.detail.query}`,
    });
  }
})