
## Layout 栅格布局组件

> **组件名 o-row、o-col**
> 代码块： `oRow`、`oCol`

流式栅格系统，随着屏幕或视口分为 24 份，可以迅速简便地创建布局。

## 特性

- 最常用的页面栅格布局组件，大大提高前端开发效率
- 支持设置圆角
- 支持class、style两种模式背景设置
- 支持设置justify、align排列
- 支持平分列模式
- 在不同间距时页面两端边距也能保持一致，效果如图
- 兼容性 在APP、H5、微信小程序下正常


> **注意事项**
> 为了避免错误使用，给大家带来不好的开发体验，请在使用组件前仔细阅读下面的注意事项，可以帮你避免一些错误。
> - 组件需要依赖 `scss` 插件 ，请自行手动安装
> - 如使用过程中有任何问题或者对组件有一些好的建议，欢迎加入QQ交流群：1136131487
> 



## 在 template 中使用组件 

```html
<template>
	<view>

		<view class="pt-2">默认水平垂直排列+间隔10+bgStyle 效果</view>
		<view class="bg-gray container">
			<o-row gutter="10" bg="#f90">
				<o-col span="8" @click="goTo('','back')">返回上一页</o-col>
				<o-col span="10" @click="goTo('test')">链接普通页面</o-col>
				<o-col span="17" @click="goTo('tabbar','tabbar')">链接Tabbar页</o-col>
				<o-col span="7" @click="goTo('test')">普通页面</o-col>
				<o-col span="8" @click="goTo('test')">普通页面</o-col>
				<o-col span="9" @click="goTo('test')">普通页面</o-col>
				<o-col span="8" @click="goTo('test')">普通页面</o-col>
				<o-col span="6" @click="goTo('test')">普通页面</o-col>
			</o-row>
			<o-row>
				<o-col span="8">span8</o-col>
				<o-col span="12">span12</o-col>
			</o-row>
		</view>
		<view class="pt-2">垂直默认 水平排列+圆角 效果</view>
		<view class="bg-gray px-1 py-2">
			<view>默认 左对齐</view>
			<o-row bg="bg-blue" radius="10" gutter="1">
				<o-col span="5">span5</o-col>
				<o-col span="8">span8</o-col>
				<o-col span="6">span6</o-col>
			</o-row>
			<view>居中</view>
			<o-row bg="bg-blue" radius="10" gutter="1" justify="center">
				<o-col span="4">span4</o-col>
				<o-col span="12">span12</o-col>
				<o-col span="6">span6</o-col>
			</o-row>
			<view>右对齐</view>
			<o-row bg="bg-blue" radius="10" gutter="1" justify="end">
				<o-col span="5">span5</o-col>
				<o-col span="4">span4</o-col>
				<o-col span="6">span6</o-col>
			</o-row>
			<view>两端分散对齐</view>
			<o-row bg="bg-blue" radius="10" gutter="1" justify="between">
				<o-col span="5">span5</o-col>
				<o-col span="6">span6</o-col>
				<o-col span="8">span8</o-col>
			</o-row>
			<view>页面两端含平分空间的分散对齐</view>
			<o-row bg="bg-blue" radius="10" justify="around">
				<o-col span="5">span5</o-col>
				<o-col span="8">span8</o-col>
				<o-col span="6">span6</o-col>
			</o-row>
		</view>
		
		<view class="pt-2">水平居中 垂直排列 效果</view>
		<view class="bg-gray px-1 py-2">
			<view class="py-2">默认 垂直排列留空等高效果</view>
			<o-row bg="bg-red" gutter="1" justify="center" align="">
				<o-col span="5">span5</o-col>
				<o-col span="4" class="h150">span4</o-col>
				<o-col span="10">span10<br>垂直排列所有</o-col>
			</o-row>
			<view class="py-2">垂直上对齐</view>
			<o-row bg="bg-red" gutter="1" justify="center" align="top">
				<o-col span="5">span5</o-col>
				<o-col span="4" class="h150">span4</o-col>
				<o-col span="10">span10<br>垂直排列所有</o-col>
			</o-row>
			<view class="py-2">垂直居中对齐+间隔10</view>
			<o-row bg="#f93" gutter="10" justify="center" align="center">
				<o-col span="5" class="h150">span5</o-col>
				<o-col span="8">span8<br>垂直排列所有</o-col>
				<o-col span="6">span6</o-col>
			</o-row>
			<view class="py-2">垂直下对齐+水平两头对齐</view>
			<o-row bg="bg-green" gutter="1" justify="between" align="bottom">
				<o-col span="9">span9<br>垂直排列所有</o-col>
				<o-col span="6" class="h150">span6</o-col>
				<o-col span="5">span5</o-col>
			</o-row>
		</view>
		
		<view class="pt-2">右偏移 效果</view>
		<view class="bg-gray px-1 py-2">
			<o-row bg="bg-blue" gutter="6">
				<o-col span="4">span4</o-col>
				<o-col span="7" offset="4">span7 偏移4</o-col>
				<o-col offset="1">偏移1</o-col>
			</o-row>
		</view>
		
		<view class="pt-2">平分模式 可设1~5 平分优先于span参数</view>
		<view class="bg-gray py-2 px-1">
			<o-row cols="4" gutter="5" bg="rgb(100,150,200)">
				<o-col>1</o-col>
				<o-col>2</o-col>
				<o-col span="3">3</o-col>
				<o-col span="8">4</o-col>
				<o-col>5</o-col>
				<o-col>6</o-col>
				<o-col span="3">7</o-col>
				<o-col>8</o-col>
				<o-col span="3">9</o-col>
			</o-row>
			
		</view>

	</view>
</template>

<script>
	export default {
		data() {
			return {
				title: 'OveUI Layout组件示例'
			}
		},
		onLoad() {

		},
		methods: {
			goTo(url,type){
				switch (type) {
					case 'tabbar':{ //跳转到tabbar页
						uni.switchTab({ url:url })
						break;
					}
					case 'back':{ //返回上一页，只有当前为非tabbar页起作用
						uni.navigateBack({ delta:1 });
						break;
					}
					default:{ //非tabbar页跳转
						if (!url) { console.log('没填写路径!') }
						else {
							uni.navigateTo({ url:url});
							console.log('点了')
						}
					}
				}
			}
		}
	}
</script>
```

## API
### oRow Props

| 属性名  | 类型           | 默认值 | 可选值                          | 说明                                 |
| ------- | -------------- | ------ | ------------------------------- | ------------------------------------ |
| gutter  | String, Number | 0      |                                 | col左右间距 单位rpx                  |
| justify | String         | start  | start,end,center,around,between | 水平排列方式                         |
| align   | String         | top    | top,center,bottom               | 垂直排列方式                         |
| bg      | String         | -      | 支持#、rgba()和class类          | 设置row下的col背景，不支持设置背景图 |
| radius  | String, Number | 0      | 数字                            | 设置row组的col全局圆角值 单位rpx     |
| cols    | String, Number | -      | 1~5                             | 平分列 会覆盖span参数                |



### oCol Props

| 属性名 | 类型          | 默认值 | 可选值                  | 说明                        |
| ------ | ------------- | ------ | ----------------------- | --------------------------- |
| span   | Number,String | -      | 1~24                    | 栅格数,留空则按内容长度伸缩 |
| offset | Number,String | 0      | 1~23                    | 向右偏移格数 值与span相同   |
| @click   | -       | -      |                         | 点击事件，调用自定义方法        |

