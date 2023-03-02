const appId="wx7cec851794cddfcb";
const appSecret="6df8123bef3cd45510b138f9496b5055";

const jwt =require("jsonwebtoken");

function getToken(openid){
	return jwt.sign({openid:openid},appSecret,{expiresIn:60*60*30});
}
function verifyToken(token){
	return jwt.verify(token,appSecret);
}


module.exports =  {
	appId:appId,
	appSecret:appSecret,
	getToken:getToken,
	verifyToken:verifyToken
}
