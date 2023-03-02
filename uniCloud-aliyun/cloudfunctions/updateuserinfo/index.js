'use strict';
const {verifyToken}=require("wx-common")

exports.main = async (event, context) => {
	//event为客户端上传的参数
	console.log('event : ', event)
	
	const {userInfo,token}= event;
	
	const db =uniCloud.database();
	const dbCmd =db.command;
	
	const payload=verifyToken(token);
	
	
	// console.log(payload);
	
	const dbRes = await db.collection("users").where({
		openid:dbCmd.eq(payload.openid) 
	}).update({
		nickName:userInfo.nickName,
		avatarUrl:userInfo.avatarUrl,
		high:userInfo.high,
		weight:userInfo.weight,
		yaowei:userInfo.yaowei,
		tunwei:userInfo.tunwei,
		yaotun:userInfo.yaotun,
		tizhi:userInfo.tizhi,
		sex:userInfo.sex
	})
	
	//返回数据给客户端
	return dbRes.data
};
