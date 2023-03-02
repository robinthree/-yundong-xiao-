'use strict';
exports.main = async (event, context) => {
	//event为客户端上传的参数
	console.log('event : ', event)
	
	const {token}= event;
	const db =uniCloud.database();
	// const dbCmd=db.command;
	// const payload=verifyToken(token);
	
	// const action=event.action;
	 let dbRes;
	
	
		 
		 dbRes =await db.collection("daka").orderBy('Day','desc').get({
			
			 
		 })
	
	 delete dbRes.data[0].openid;
	
	
	//返回数据给客户端
	return dbRes.data
};