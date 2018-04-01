// component/summary/summary.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    title: String,
    content: String,
  },

  /**
   * 组件的初始数据
   */
  data: {
    isSpread: false,
    clipContent: '',
    clipLength: 150,
  },

  ready() {
    this.clipText();
  },

  /**
   * 组件的方法列表
   */
  methods: {
    clipText() {
      let content = this.properties.content;
      let len = this.data.clipLength;

      if (content) {
        if (content.length < len) {
          this.setData({
            isSpread: true,
          });
        } else {
          let text = content.substring(0, len) + '...';
          this.setData({
            clipContent: text,
          });
        }
      }
    },

    onSpread() {
      this.setData({
        isSpread: true,
      });
    }
  }
})
