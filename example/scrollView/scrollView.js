const app = getApp()

Page({
  data: {
    refreshing: false, // 将refreshing设为true，可支持自动触发下拉刷新的场景。同样会触发refresh事件
    refreshed: false, // 将本属性设置为true，收起下拉刷新，可多次设置为true（即便原来已经是true了）
  },
  onLoad() {
    this.setData({
      refreshing: true,
    })
  },
  refresh() {
    // 这是做网络请求的时机
    const that = this
    wx.showToast({
      title: 'refresh回调触发，做一些网络请求...',
      icon: 'none',
      complete() {
        // 成功或者失败之后，将refreshed设为true，收起下拉刷新组件
        setTimeout(() => {
          that.setData({
            refreshed: true,
          })
        }, 2000)
      }
    });
  },
})
