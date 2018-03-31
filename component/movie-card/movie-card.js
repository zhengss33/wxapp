Component({
  externalClasses: ['card-class'],

  properties: {
    image: String,
    title: {
      type: String,
      value: '',
    },
    mid: String,
    average: String,
    stars: Array,
    isRating: {
      type: Boolean,
      value: true,
    }
  },

  data: {
    ellipsisTitle: '',
  },

  ready() {
    this.cutTitle();
  },
  
  methods: {
    cutTitle() {
      let title = this.properties.title;
      if (title) {
        let ellipsis = title.length > 6 ? title.substr(0, 6) + '...' : title;
        this.setData({
          ellipsisTitle: ellipsis,
        });
      }
    },
    
    onTap(event) {
      let id = event.currentTarget.dataset.mid;

      this.triggerEvent('MovieTap', { mid: id});
    },
  }
})