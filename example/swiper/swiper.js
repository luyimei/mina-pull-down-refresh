// 下拉刷新是通过一个隐藏起来的元素判断是否可以触发动作的
// 所以swiper中有几个scroll-view，就得有几组refreshing、refreshed
const app = getApp()

Page({
  data: {
    refreshing: [false, false],
    refreshed: [false, false],
  },
  onLoad() {
    this.setData({
      "refreshing[0]": true,
    })
  },
  change(e) {
    const current = e.detail.current

    const setDataObj = {}
    for(let i = 0; i < this.data.refreshing.length; i++) {
      if (i === current) {
        setDataObj[`refreshing[${i}]`] = true
      } else {
        setDataObj[`refreshing[${i}]`] = false
      }
    }
    for (let j = 0; j < this.data.refreshed.length; j++) {
      if (j !== current) {
        setDataObj[`refreshed[${j}]`] = true
      }
    }

    this.setData(setDataObj)
  },
  refresh(e) {
    const index = e.currentTarget.dataset.index
    // 这是做网络请求的时机
    const that = this
    wx.showToast({
      title: `当前index：${index}。refresh回调触发，做一些网络请求...`,
      icon: 'none',
      complete() {
        // 成功或者失败之后，将refreshed设为true，收起下拉刷新组件
        setTimeout(() => {
          that.setData({
            [`refreshed[${index}]`]: true,
          })
        }, 2000)
      }
    });
  },
})
