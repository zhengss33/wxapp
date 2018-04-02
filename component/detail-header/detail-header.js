// component/detail-header/detail-header.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    image: String,
    title: String,
    average: String,
    ratings_count: Number,
  },

  /**
   * 组件的初始数据
   */
  data: {

  },

  /**
   * 组件的方法列表
   */
  methods: {
    previewImage(event) {
      let src = event.currentTarget.dataset.src;

      wx.previewImage({
        urls: [src],
      });
    },
  }
})
