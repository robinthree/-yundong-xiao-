<template>
	 <view style="padding: 20upx 0;">
	        <zetank-rank :rankData="rankData"></zetank-rank>
	    </view>
</template>

<script>
	import cloudApi from "../../common/cloudApi.js"
	
	export default {
		data() {
			return {
				da:null,
				  rankData:[]
			}
		},
		onShow() {
			this.getInfo()
		},
		methods: {
			getInfo(){
				cloudApi.call({
					name: "getalluserinfo",
					data: {
						
					},
					success: (res) => {
						
						this.rankData = res.result;
						console.log(this.rankData);
					}
				});
			}
		}
	}
</script>

<style>

</style>
