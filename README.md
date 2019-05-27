### 支持场景
scroll-view、swiper中嵌套使用scroll-view、navigationStyle: custom、页面自身滚动等等。需禁用小程序自身的enablePullDownRefresh功能。

### 不支持场景
被包裹的内容必须从页面头部开始（即不能是从页面中部才开始的scroll-view之类的）。原因参考组件代码，这个限制是可以避免的，可参考本组件的实现自行定制。

### 组件原理
通过intersectionObserver判断是否可以触发下拉刷新了。通过WXS响应事件避免双线程通信，提高性能。具体参考组件代码。

### 版本要求
小程序版本要求2.4.4以上（含）。

### 快速预览
https://developers.weixin.qq.com/s/SUYjnFm1788a
