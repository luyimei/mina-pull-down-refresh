### 示例
![](example.gif)

### 关于
本组件仅支持在微信小程序中使用。是当微信小程序的下拉刷新功能不符合场景、或者不适用时候的替代方案。提供了类似手机端chrome浏览器的下拉刷新效果（当然没有那么酷炫）。

### 支持场景
1. scroll-view
2. swiper中嵌套使用scroll-view
3. 使用了自定义顶导navigationStyle: custom
4. 页面自身的滚动
注意：需禁用小程序自身的enablePullDownRefresh功能。

### 不支持场景
被包裹的内容必须从页面头部开始（即不能是从页面中部才开始的scroll-view之类的）。原因参考组件代码，这个限制是可以避免的，可参考本组件的实现自行定制。

### 组件原理
通过intersectionObserver判断是否可以触发下拉刷新了。通过WXS响应事件避免双线程通信，提高性能。具体参考组件代码。

### 版本要求
小程序版本要求2.4.4以上（含）。

### 使用方法
将src中的自定义组件拷贝到你的项目中即可。使用方法参考example目录中的小程序示例。

### 快速预览
https://developers.weixin.qq.com/s/SUYjnFm1788a
