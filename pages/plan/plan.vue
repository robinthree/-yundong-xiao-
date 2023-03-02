<template>
	<view>
		<view class="pt-2"
			style="display: flex; justify-content: center;font-weight: 800;font-size: 20px;margin-top: 0;background-color:rgb(100,150,200);margin-bottom: 5px;height: 35px;align-items: center;border-radius: 20rpx;">
			体脂率{{tz}}%训练计划
		</view>
		<view  class="bg-gray py-2 px-1">
			
				<o-row  radius="10" align="center"  cols="5" gutter="10"  bg="rgb(100,150,200)">
					<o-col offset="3" >周一 胸/背</o-col>
					
						<o-col   v-for="(item,index) in xl.zhouyi"  :key="item.index" >{{item}}</o-col>
				<o-col offset="7" >周二 臀腿/核心</o-col>
				<o-col  v-for="(item,index) in xl.zhouer" :key="item.index">{{item}}</o-col>
				
				<o-col offset="7">周四 胸肩</o-col>
				<o-col  v-for="(item,index) in xl.zhousi"  :key="item.index">{{item}}</o-col>
				
				<o-col offset="7">周五 手臂/核心</o-col>
				<o-col  v-for="(item,index) in xl.zhouwu"  :key="item.index">{{item}}</o-col>
				
				<o-col offset="7">周六 臀腿/核心</o-col>
				<o-col  v-for="(item,index) in xl.zhouliu"  :key="item.index">{{item}}</o-col>
				
				</o-row>
				<o-row  radius="15" bg="#ffd900">
					<o-col offset="2">周三以及周日为休息日</o-col>
					<o-col offset="2" >有氧运动选择椭圆机，单车，快走等。不建议跑步</o-col>
					<o-col offset="2">尽量选择自己承受范围内的最大重量</o-col>
					<o-col offset="2">有氧运动最低心率要求为110,最高为150</o-col>
				</o-row>
				
				
				
				
				
				
			
			<view style="display: flex;justify-content: center;margin-top: 30rpx;">
				<view
					style="display: flex;height: 100rpx;width: 200rpx;justify-content: center;align-items: center;border-radius: 30rpx;background-color: #ffd700;box-shadow: 3px 3px black, -1em 0 .4em olive;">
					<o-row>
						<o-col @click="daka()" >打卡</o-col>
					</o-row>
				</view>
			</view>


		</view>
		
		
	</view>
</template>

<script>
import cloudApi from '../../common/cloudApi'
	export default {
		data() {
			return {
				tz:'',
				leixing:'',
				// zhouyi:null,
				xl:'',
				
			}
		},
		created() {
			
		},
		onShow() {
			
				this.searchTZ()
			
				
			
			
			
		},
		mounted() {
			
		},
		onLoad() {
			
		},
		methods: {
			daka(){
				uni.navigateTo({
					url:"/pages/daka/daka"
				})
			},
			searchTZ(){
				cloudApi.call({
					name:"plan",
					data:{
						
						
					},
					success:(res)=>{
						this.tz=parseInt(res.result[0].tizhi)
						console.log(this.tz)
						this.searchXL()
					}
					
				})
			},
			searchXL(){
				if(this.tz<20){
					this.leixing='1'
					console.log(this.leixing)
				}
				if(this.tz>=20&&this.tz<=30){
					this.leixing='2'
					console.log(this.leixing)
				}
				if(this.tz>30){
					this.leixing='3'
					console.log(this.leixing)
				}
				cloudApi.call({
					name:"planinfo",
					data:{
						
						leixing:this.leixing
					},
					success:(res)=>{
						this.xl=res.result[0]
						// console.log(res)
						console.log(this.xl)
					}
					
				})
			},
		}
	}
</script>

<style>

</style>
