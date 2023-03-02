<template>
	<view class="container">
		<uni-forms ref="form" :modelValue="formData" :rules="rules">
			<uni-forms-item label="性别" required>
				<uni-data-checkbox v-model="formData.sex" :localdata="sexs" />
			</uni-forms-item>
			<uni-forms-item label="身高" name="name">
				<uni-easyinput type="text" v-model="formData.high" placeholder="请输入身高 /cm" />
			</uni-forms-item>
			<uni-forms-item label="体重" name="name1">
				<uni-easyinput type="text" v-model="formData.weight" placeholder="请输入体重 /kg" />
			</uni-forms-item>
			<uni-forms-item label="腰围" name="name2">
				<uni-easyinput type="text" v-model="formData.yaowei" placeholder="请输入腰围 /cm" />
			</uni-forms-item>
			<uni-forms-item label="臀围" name="name3">
				<uni-easyinput type="text" v-model="formData.tunwei" placeholder="请输入臀围 /cm" />
			</uni-forms-item>
		</uni-forms>
		<button @click="submit" type="primary">提交修改</button>
	</view>
</template>

<script>
	import cloudApi from "../../common/cloudApi.js"
	export default {
		data() {
			return {
				// 表单数据
				formData: {
					high: '',
					weight: '',
					yaowei: '',
					tunwei: '',
					yaotun: '',
					tizhi: '',
					sex: ''
				},
				sexs: [{
					text: '男',
					value: 1
				}, {
					text: '女',
					value: 2
				}, ],
				rules: {
					// 对name字段进行必填验证
					name: {
						rules: [{
								// format:'string',
								// required: true,
								errorMessage: '不能为空',
							},
							{
								minLength: 2,
								maxLength: 3,
								errorMessage: '长度在 2到3',
							},
							{
								format: 'number',
								errorMessage: '需要是数字',
							},
						]
					},

				}
			}
		},
		methods: {
			updateUserProfile() {


				uni.getUserProfile({
					desc: "你快用",
					success: (res) => {
						// this.userInfo=res.userInfo
						// console.log(res.userInfo);
						this.formData.yaotun = this.formData.yaowei / this.formData.tunwei
						if (this.formData.sex == 1) {
							this.formData.tizhi = (this.formData.yaowei * 0.74 - (this.formData.weight *
								0.082 + 44.74)) / this.formData.weight * 100;
							this.formData.sex = '男';

						} else {
							this.formData.tizhi = (this.formData.yaowei * 0.74 - (this.formData.weight *
								0.082 + 34.89)) / this.formData.weight * 100;
							this.formData.sex = '女';
						}



						this.formData = Object.assign(this.formData, res.userInfo)
						cloudApi.call({
							name: "updateuserinfo",
							data: {
								userInfo: this.formData
							},
							success: (res) => {
								console.log(res.result);
								
							},
							fail: (err) => {
								console.log(err)
								
							}
						}).then((res)=>{
							console.log(res)
						}).catch((err)=>{
							console.log(err)
						})
						uni.showToast({
							title: '修改成功',
							icon: "success"
						}),
						uni.navigateBack({
							
						})
					},
					fail: (res) => {
						console.log(res)
						uni.showToast({
							title: '修改失败',
							icon: "error"
						})
					}
				})
			},
			// @param {String} value @param {String} name
			/**
			 * 复写 binddata 方法，如果只是为了校验，无复杂自定义操作，可忽略此方法
			 *  字段名称
			 *  表单域的值
			 */
			// binddata(name,value){
			// 通过 input 事件设置表单指定 name 的值
			//   this.$refs.form.setValue(name, value)
			// },
			// 触发提交表单
			// if(!errorMessage){
			// 	console.log('success')
			// 	uni.showToast({
			// 		title:'修改信息成功',
			// 		icon:'success'
			// 	})
			// 	return
			submit(form) {

				this.$refs.form.validate().then(res => {
					console.log('表单数据信息：', res);
					console.log(this.formData)
					this.updateUserProfile();


				}).catch(err => {
					console.log('表单错误信息：', err);
				})
			}
		}
	}
</script>

<style>
	.container {
		padding: 20px;
		font-size: 14px;
		line-height: 24px;
	}
</style>
