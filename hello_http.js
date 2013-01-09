var AWS=require('aws-sdk');

AWS.config.loadFromPath('../credentials/credentials.json');
AWS.config.update({region:'us-east-1'});

var DynDB=new AWS.DynamoDB();
DynDB.client.putItem({TableName:'Traffic',
Item:{
UNCode:{S:"USA"},
Year:{N:"2010"},
Data:{S:JSON.stringify({departures:"9000000"})}
}
},function(err,data){
//console.log("Here");
});
var https=require('https');
var http=require('http');
var fs=require('fs');
var resp={
"name":"marco",
"value":"39"};
var options={
key:fs.readFileSync('../SSL/privatekey.pem'),
cert:fs.readFileSync('../SSL/certificate.pem')
};
//console.log(options);
var server=https.createServer(options,function(req,res){
console.log("---HTTPS request received---");
console.log(req.headers);
res.writeHead(200,{
//'Content-Type':'text/plain',
'Access-Control-Allow-Origin':'*'
});
res.end(JSON.stringify(resp));
});
server.listen(443);

var server2=http.createServer(function(req,res){
console.log(req.headers);
res.writeHead(200,{
//'Content-Type':'text/plain',
'Access-Control-Allow-Origin':'https://portal3.icao.int'
});
res.end('test http OK');
});
server2.listen(80);
