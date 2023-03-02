<template>
	<view>
		//back 返回符号
		<cmd-nav-bar title="个人中心"></cmd-nav-bar>
		<cmd-page-body type="top">
			<cmd-transition name="fade-up">


				<cmd-cel-item @click="updateUserProfile" title="头像" slot-right>
					<cmd-avatar :src="userInfo.avatarUrl"></cmd-avatar>
				</cmd-cel-item>
				<!-- <cmd-cel-item title="积分" addon="566" arrow></cmd-cel-item> -->
				<cmd-cel-item title="昵称" :addon="userInfo.nickName">

				</cmd-cel-item>

				<cmd-cel-item title="性别" :addon="userInfo.sex">
				</cmd-cel-item>
				<!-- <cmd-cel-item title="姓名" addon="Lich" arrow></cmd-cel-item> -->
				<view>

					<cmd-cel-item title="身高" :addon="userInfo.high">

					</cmd-cel-item>
					<cmd-cel-item title="体重" :addon="userInfo.weight"></cmd-cel-item>
					<cmd-cel-item title="腰围" :addon="userInfo.yaowei"> </cmd-cel-item>
					<cmd-cel-item title="臀围" :addon="userInfo.tunwei"></cmd-cel-item>


					<cmd-cel-item title="腰臀比" :addon="userInfo.yaotun"></cmd-cel-item>
					<cmd-cel-item title="体脂率" :addon="userInfo.tizhi"></cmd-cel-item>
				</view>
				<!-- <cmd-cel-item title="修改密码" @click="fnClick" arrow></cmd-cel-item> -->
				<button class="btn-logout" @click="fnClick()">修改资料</button>

			</cmd-transition>
		</cmd-page-body>
	</view>
</template>

<script>
	import cmdNavBar from "@/components/cmd-nav-bar/cmd-nav-bar.vue"
	import cmdPageBody from "@/components/cmd-page-body/cmd-page-body.vue"
	import cmdTransition from "@/components/cmd-transition/cmd-transition.vue"
	import cmdCelItem from "@/components/cmd-cell-item/cmd-cell-item.vue"
	import cmdAvatar from "@/components/cmd-avatar/cmd-avatar.vue"
	// import cloud from "../../common/cloudApi.js"
	import cloudApi from "../../common/cloudApi.js"
	export default {
		components: {
			cmdNavBar,
			cmdPageBody,
			cmdTransition,
			cmdCelItem,
			cmdAvatar
		},

		data() {
			return {
				userInfo:null


			};
		},
		async onLoad(options) {
		  	this.login()



		},
		mounted() {

		},
		created() {

		},
		onShow() {
			// let that =this;
			// that.onLoad()
			// this.shuaxin()
		},

		methods: {
			shuaxin() {
				this.login()


			},


login2(){
	
},
			login() {
				uni.login({
					provider: 'weixin',
					success: (res) => {
						
					let	code = res.code;
// console.log(res.code)
						cloudApi.call({
							name: "login",
							data: {
								code: code
							},
							success: (res) => {
								console.log(res.result);
								this.userInfo = res.result;
							},
							fail: (err) => {
								console.log(err)
								
							}
						}).then((res)=>{
							console.log(res);
							// this.userInfo = res.result;
						}).catch((err)=>{
							console.log(err)
						});

					},
					fail: (err) => {
						console.log(err)
					}
				})
			},
			updateUserProfile() {


				uni.getUserProfile({
					desc: "你快用",
					success: (res) => {

						this.userInfo = Object.assign(this.userInfo, res.userInfo)
						cloudApi.call({
							name: "updateuserinfo",
							data: {
								userInfo: this.userInfo
							},
						}).then((res)=>{
							console.log(res);
							
						}).catch((err)=>{
							console.log(err)
						});
						
					},
					fail: (res) => {
						console.log(res)
					}
				})
				this.shuaxin()
			},


			// @param {Object} type 
			/**
			 * 点击触发
			 *  跳转页面名或者类型方式
			 */
			fnClick() {

				uni.navigateTo({
					url: "/pages/modify/modify"
				})

			}
		}
	}
</script>

<style>
	.btn-logout {
		margin-top: 100upx;
		width: 80%;
		border-radius: 50upx;
		font-size: 16px;
		color: #fff;
		background: linear-gradient(to right, #365fff, #36bbff);
	}

	.btn-logout-hover {
		background: linear-gradient(to right, #365fdd, #36bbfa);
	}
</style>
