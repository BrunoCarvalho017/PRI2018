var http = require ('http')
var fs = require ('fs')
var url = require ('url')

http.createServer ((req,res)=>{
	var purl = url.parse(req.url,true)
	console.log(purl)
	var pathname = purl.pathname
	var id = purl.query.id
	if(pathname=="/" || pathname=="/index.html"){
		fs.readFile('./website/index.html',(erro,data)=>{
			res.writeHead(200,{'Contet-Type':'text/html'})
			if(!erro){
				res.write(data)
				res.end()
			}else{
				res.write(erro)
				res.end()
			}
		})
	}else if (pathname=="/obras"){
		fs.readFile('./website/html/obra'+id+'.html',(erro,data)=>{
			res.writeHead(200,{'Contet-Type':'text/html'})
			console.log('./website/html/obra'+id+'.html')
			if(!erro){
				res.write(data)
				res.end()
			}else{
				res.write(erro)
				res.end()
			}
		})
	}
	
}).listen(4003,()=>{
	console.log('Servidor à escuta na porta 4003....')
})