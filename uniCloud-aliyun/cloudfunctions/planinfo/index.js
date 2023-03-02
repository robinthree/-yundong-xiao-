'use strict';
const {verifyToken}=require("wx-common")

exports.main = async (event, context) => {
	//event为客户端上传的参数
	console.log('event : ', event)
	const {token,leixing}= event;
	const db =uniCloud.database();
	const dbCmd=db.command;
	const payload=verifyToken(token);
	
	// const action=event.action;
	 let dbRes;
	
	 
	
		 dbRes = await db.collection("planinfo").where({
		 	leixing:leixing
		 }).get()
	 
	
	
	// if(action=="create")
	 delete dbRes["openid"];
	//返回数据给客户端
	return dbRes.data
};
