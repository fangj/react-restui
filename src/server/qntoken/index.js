var qiniu = require("qiniu");




function qntoken(app,ACCESS_KEY,SECRET_KEY,bucket){

	//需要填写你的 Access Key 和 Secret Key
	qiniu.conf.ACCESS_KEY = ACCESS_KEY;
	qiniu.conf.SECRET_KEY = SECRET_KEY;

	var putPolicy = new qiniu.rs.PutPolicy(bucket);
	
	app.get('/qntoken',function(req,res){
		var uptoken=putPolicy.token();
		res.json({uptoken:uptoken});
	})
}

module.exports=qntoken;
