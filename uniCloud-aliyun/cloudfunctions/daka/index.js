'use strict';
const {verifyToken}=require("wx-common")

exports.main = async (event, context) => {
	//event为客户端上传的参数
	console.log('event : ', event)
	const {token,localDate,Day}= event;
	const db =uniCloud.database();
	const dbCmd=db.command;
	const payload=verifyToken(token);
	
	const action=event.action;
	 let dbRes;
	let dcRes;
	
	 if(action=="getinfo"){
		 dbRes = await db.collection("daka").where({
		 	openid:dbCmd.eq(payload.openid) 
		 }).get()
		 dcRes = await db.collection("users").where({
		 	openid:dbCmd.eq(payload.openid) 
		 }).get()
		 // console.log(dcRes.data[0].nickName)
		 let userData;
		 if(dbRes.affectedDocs<=0){
		 	// console.log(dcRes.data[0].nickName)
		 	let userData={
		 		openid:payload.openid,
		 		Day:0,
				localDate:'',
				name:dcRes.data[0].nickName,
				avatarUrl:dcRes.data[0].avatarUrl,
		 		
		 	}
			await db.collection("daka").add(userData)
	 }
	 }
	
	if(action=="updateinfo"){
		dbRes = await db.collection("daka").where({
			openid:dbCmd.eq(payload.openid) 
		}).update({
			localDate:localDate,
			Day:Day,
			openid:payload.openid,
			// name:dcRes.data[0].nickName,
			// avatarUrl:dcRes.data[0].avatarUrl
		})
		
	}
	 
	
	
	// if(action=="create")
	 // delete dbRes["openid"];
	//返回数据给客户端
	return dbRes.data
};
