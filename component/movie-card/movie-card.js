Component({
  properties: {
    movie: {
      type: Object,
      value: {},
    },
    rating: {
      type: Boolean,
      value: true,
    },
  },
  data: {
    ellipsisTitle: '',
  },
  ready() {
    this.cutTitle();
  },
  methods: {
    cutTitle() {
      let title = this.properties.movie.title;
      let ellipsis = title.length > 6 ? this.properties.movie.title.substr(0, 6) + '...' : title;
      this.setData({
        ellipsisTitle: ellipsis,
      });
    }
  }
})