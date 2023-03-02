<template>
	<view class="">
		<uni-card :is-shadow="false" is-full>

		</uni-card>

		<uni-section title="食物热量" type="line">
			<uni-search-bar @confirm="getInfo" :focus="true" v-model="searchValue" >
			</uni-search-bar>
		</uni-section>
		<!-- title="1" subTitle="通过基础的 1/24 分栏任意扩展组合形成较为复杂的混合布局" -->
		<uni-section title="查询结果" type="line">
			<view class="example-body">
				<uni-row class="demo-uni-row" :gutter="gutter" :width="nvueWidth">
					<uni-col offset="1" :span="6">
						<view class="demo-uni-col dark">食物</view>
					</uni-col>
					<uni-col :span="8">
						<view class="demo-uni-col light">100克的热量/大卡</view>
					</uni-col>

					<uni-col :span="4">
						<view class="demo-uni-col light">健康等级</view>
					</uni-col>
					<uni-col :span="4">
						<view class="demo-uni-col light">慢跑/分钟</view>
					</uni-col>
				</uni-row>
				<view  v-for="(item,index) in value" :key="index">
					<uni-row class="demo-uni-row" :gutter="gutter" :width="nvueWidth">
						<uni-col offset="1" :span="7">
							<view  class="demo-uni-col dark">{{item.name}}</view>
						</uni-col>
						<uni-col :span="7">
							<view class="demo-uni-col light">{{item.calory}}</view>
						</uni-col>
					
						<uni-col offset="1" :span="3">
							<view  class="demo-uni-col light">{{item.healthLevel}}</view>
						</uni-col>
						<uni-col :span="4" >
							<view class="demo-uni-col light">{{parseInt(item.calory/10)}}</view>
						</uni-col>
					</uni-row>
				</view>
				


			</view>
			<view style="border-radius: 10px;padding: 12px; margin: 30px 10px 0 10px; background-color: aquamarine;"
				class="example-body">
				<uni-row>
					<uni-col>慢跑：每半小时消耗热量三百大卡。 跑的路程越长，消耗的热量越大；</uni-col>
					<uni-col>自行车：每半小时消耗热量三百三十大卡。对心肺、腿十分有利；</uni-col>
					<uni-col>篮球：每半小时消耗热量二百五十大卡。它可增强灵活性，加强心肺功能；</uni-col>
					<uni-col>散步：每半小时消耗热量七十五大卡。对心肺功能的增强有益，它能改善血液循环，活动关节和有助于减肥。</uni-col>
					<uni-col>1000卡=1千卡=1大卡。而1000KJ=约300卡。
						跑步机上显示的是千卡，人一天从事轻体力劳动的情况下总共会消耗2500千卡左右的能量。就算只是睡觉8小时也会消耗大概500千卡的能量。
						所以综上所述，你每天只需要摄入热量控制在2000千卡以下就可以瘦身。</uni-col>
				</uni-row>
			</view>
		</uni-section>
	</view>

</template>

<script>
	import cloudApi from '../../common/cloudApi'
	export default {
		data() {
			return {
				searchValue: '',
				img: '',
				value: null
			}
		},
		methods: {
			getInfo(){
				uni.request({
					url:`${this.$baseUrl}/food_heat/food/search?app_id=pjpnqhrelimdzexd&app_secret=bjErWDNyd25GMTJickR1VmQ0ODVGdz09&keyword=${this.searchValue}`,
				method:'Get',
					success:(res)=> {
						console.log(res.data.data.list)
						this.value=res.data.data.list
						// this.value.run=parseInt(res.data.data.list.calory /10) 
					},
					fail:(err) =>{
						
					}
				})
			},
			
			
			
			// search(res) {
			// 	cloudApi.call({
			// 		name: "food",
			// 		data: {
			// 			name: this.searchValue

			// 		},
			// 		success: (res) => {
			// 			this.value = res.result[0]
			// 			this.value.run=parseInt(res.result[0].nl/10) 
			// 			console.log(this.value)
			// 		}

			// 	})

			// 	uni.showToast({
			// 		title: '搜索：' + res.value,
			// 		icon: 'none'
			// 	})
			// },
			// input(res) {
			// 	console.log('----input:', res)
			// },
			// clear(res) {
			// 	uni.showToast({
			// 		title: 'clear事件，清除值为：' + res.value,
			// 		icon: 'none'
			// 	})
			// },
			// blur(res) {
			// 	uni.showToast({
			// 		title: 'blur事件，输入值为：' + res.value,
			// 		icon: 'none'
			// 	})
			// },
			// focus(e) {
			// 	uni.showToast({
			// 		title: 'focus事件，输出值为：' + e.value,
			// 		icon: 'none'
			// 	})
			// },
			// cancel(res) {
			// 	uni.showToast({
			// 		title: '点击取消，输入值为：' + res.value,
			// 		icon: 'none'
			// 	})
			// }
		}
	}
</script>

<style lang="scss">
	.search-result {
		padding-top: 10px;
		padding-bottom: 20px;
		text-align: center;
	}

	.search-result-text {
		text-align: center;
		font-size: 14px;
		color: #666;
	}

	.example-body {
		/* #ifndef APP-NVUE */
		display: block;
		/* #endif */
		padding: 0px;
	}

	.uni-mt-10 {
		margin-top: 10px;
	}
</style>
