// component/dialog/dialog.js
Component({
  options: {
    multipleSlots: true,
  },
  externalClasses: ['custom-class'],
  /**
   * 组件的属性列表
   */
  properties: {
    visible: {
      type: Boolean,
      value: true,
      observer: function(newVal, oldVal) {
      },
    },
    width: {
      type: String,
      value: '50%',
    },
    fullscreen: {
      type: Boolean,
      value: false,
    },
    modal: {
      type: Boolean,
      value: true,
    },
    closeOnClickModel: {
      type: Boolean,
      value: true,
    },
    showClose: {
      type: Boolean,
      value: true,
    },
    center: {
      type: Boolean,
      value: true,
    },
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
    onModalTap() {
      if (this.properties.closeOnClickModel) {
        this.closeModal();
      }
    },
    closeModal() {
      this.setData({
        visible: false,
      });
    },
  }
})
