// component/search/search.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    placeholde: String,
  },

  /**
   * 组件的初始数据
   */
  data: {
    value: '',
    isHideCancel: true,
  },

  /**
   * 组件的方法列表
   */
  methods: {
    onFocus(event) {
      this.setData({
        isHideCancel: false,
      });
    },

    onInput(event) {
      this.setData({
        value: event.detail.value
      });
    },

    onConFirm(event) {
      let query = event.detail.value;
      this.triggerEvent('search', { query })
    },

    onBlur() {
      this.setData({
        isHideCancel: true,
      });
    },

    cancel() {
      this.setData({
        value: '',
        isHideCancel: true,
      });
    },
  }
})
