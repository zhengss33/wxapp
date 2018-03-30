// component/ranking-list/ranking-list.js
const app = getApp();
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    rankingList: {
      type: Array,
      value: [],
    },
  },

  /**
   * 组件的初始数据
   */
  data: {
    current: 0,
    count: 5,
  },
  /**
   * 组件的方法列表
   */
  methods: {
    swiperHandler(event) {
      let index = event.detail.current;
      this.setData({
        current: index,
      });
    },

    onMoreTap(event) {
      let title = event.target.dataset.title;
      wx.navigateTo({
        url: `/pages/movies/more/more?category=${title}`,
     });
    },
  }
})

