// component/movie-item/movie-item.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    movie: {
      type: Object,
      value: {},
    },
    order: Number,
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
    onTap(event) {
      let mid = event.currentTarget.dataset.mid;
      this.triggerEvent('MovieTap', { mid }, { bubbles: true });
    }
  }
})
