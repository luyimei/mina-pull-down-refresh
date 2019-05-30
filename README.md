### 示例
<img src="./example.gif" width="300" height="510" />

### 关于
本组件仅支持在微信小程序中使用，其它小程序平台未验证。是当微信小程序的下拉刷新功能不符合场景、或者不适用时候的替代方案。提供了类似手机端chrome浏览器的下拉刷新效果（当然没有那么酷炫）。

### 支持场景
1. scroll-view
2. swiper中嵌套使用scroll-view
3. 使用了自定义顶导navigationStyle: custom
4. 页面自身的滚动等

### 不支持场景
被包裹的内容必须从页面头部开始（即不能是从页面中部才开始的scroll-view之类的）。原因参考组件代码，这个限制是可以避免的，可参考本组件的实现自行定制。

### 组件原理
通过intersectionObserver判断是否可以触发下拉刷新了。通过WXS响应事件实现动画效果。由于使用了WXS响应事件避免了双线程通信，性能是可以的。具体参考组件代码。

### 版本要求
要求小程序版本 >= 2.4.4（WXS响应事件最低要求）。

### 使用方法
将src目录中的自定义组件拷贝到你的项目中，用起来就行。需禁用小程序自身的enablePullDownRefresh功能。使用方法参考example目录中的小程序示例。

### 快速预览
https://developers.weixin.qq.com/s/mOJubKmR7m8I
