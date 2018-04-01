// component/card-list/card-list.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    subjects: {
      type: Array,
      value: [],
    },
    isRating: Boolean,
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
    onMovieTap(event){
      let mid = event.detail.mid;
      this.triggerEvent('CardTap', { mid });
    }
  }
})
