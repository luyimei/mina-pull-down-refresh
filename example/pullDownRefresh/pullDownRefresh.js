// 使用的时候，用本组件包裹可以触发下拉刷新的内容。enablePullDownRefresh需要设置为false。
Component({
  properties: {
    refreshed: { // 必选，通知本组件收起
      type: Boolean,
      value: false,
    },
    refreshing: { // 可选，通知本组件直接进入refreshing状态
      type: Boolean,
      value: false,
    },
    distMax: { // 可选，可以下拉的最大高度，回弹的高度为最大高度的75%
      type: Number,
      value: 160,
    },
    color: { // 可选，圆弧颜色
      type: String,
      value: "#000",
    },
    backgroundColor: { // 可选，背景颜色
      type: String,
      value: "#fff",
    },
  },
  data: {
    reachTop: false,
  },
  methods: {
    initObserver() {
      this.observer = this.createIntersectionObserver()
      this.observer.relativeToViewport().observe(".intersection-dot", (res) => {
        if (res.intersectionRatio > 0) {
          this.setData({
            reachTop: true,
          })
        } else {
          this.setData({
            reachTop: false,
          })
        }
      })
    },
    clearObserver() {
      if (this.observer) {
        this.observer.disconnect()
        this.observer = null
      }
    },
  },
  ready() {
    this.initObserver()
  },
  detached() {
    this.clearObserver()
  },
})
