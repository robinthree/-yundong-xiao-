'use strict';
// const cloud = require('wx-server-sdk')
// // 给定 DYNAMIC_CURRENT_ENV 常量：接下来的 API 调用都将请求到与该云函数当前所在环境相同的环境
// // 请安装 wx-server-sdk v1.1.0 或以上以使用该常量
// cloud.init({
//   env: cloud.DYNAMIC_CURRENT_ENV
// })
const {appId,appSecret,getToken}=require("wx-common");
exports.main = async (event, context) => {
	//event为客户端上传的参数
	console.log('event : ', event)
	
	//jscode2session
	const db =uniCloud.database();
	
	const {code}=event;
	
	const res = await uniCloud.httpclient.request(
	"https://api.weixin.qq.com/sns/jscode2session?appid="+appId+"&secret="+appSecret+"&js_code="+code+"&grant_type=authorization_code",
		
	{
		dataType:"json"
	}
	)
	
	const openid=res.data.openid;
	//查询有没有这个用户的数据
	let dbRes=await db.collection("users").where({
		openid:openid
	}).get()
	
	//查询有的话
	const token =getToken(openid);
	let userData;
	if(dbRes.affectedDocs<=0){
		console.log(res);
		let userData={
			openid:openid,
			nickName:'微信用户',
			avatarUrl:''
			
		}
		
		//mysql sql
		await db.collection("users").add(userData)
	}else{
		userData=dbRes.data[0];
	}
	// delete userData.openid;
	
	userData["token"]=token;
	console.log(userData);
	//返回数据给客户端
	return userData
	
};
