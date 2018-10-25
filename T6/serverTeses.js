var http = require ('http')
var fs = require ('fs')
var pug = require ('pug')
var url = require ('url')
var {parse} = require('querystring')
var jsonfile = require ('jsonfile')

var myBD="dataTeses.json"



var myServer = http.createServer((req,res)=>{
    var purl= url.parse(req.url,true)
    var query= purl.query

    if(req.method == "GET"){
        if(purl.pathname == "/registo"){
            res.writeHead(200,{'Content-type':'text/html'})
            res.write(pug.renderFile('form-teses.pug'))
            res.end()
        }
        else if(purl.pathname == "/w3.css"){
            res.writeHead(200,{'Content-Type' : 'text/css'})
            fs.readFile('style/w3.css',(erro,dados)=>{
                if(!erro){
                    res.write(dados)
                }
                else{
                    res.write(pug.renderFile('erro.pug',{e: erro}))
                }
                res.end()
            })
        }
        else if(purl.pathname =="/"){
            res.writeHead(200,{'Content-type':'text/html'})
            res.write(pug.renderFile('index.pug'))
            res.end()
        }
        else if(purl.pathname == "/lista"){
            jsonfile.readFile(myBD, (erro,teses)=>{
                res.writeHead(200,{'Content-Type' : 'text/html'})
                if(!erro){
                    res.write(pug.renderFile('lista-teses.pug',{lista: teses}))
                }
                else{
                    res.write(pug.renderFile('erro.pug',{e: erro}))
                }
                res.end()
            })
        }
        else if(purl.pathname=="/img/registop.png"){
            res.writeHead(200,{'Content-Type' : 'image/png'})
            fs.readFile('./img/registo.png',function(erro3,data){
                if(erro3) throw eroo3;
                res.write(data)
                res.end()
            })

        }
        else if(purl.pathname=="/img/lup.png"){
            res.writeHead(200,{'Content-Type' : 'image/png'})
            fs.readFile('./img/lup.png',function(erro4,data){
                if(erro4) throw eroo4;
                res.write(data)
                res.end()
            })
        }
        else{
            res.writeHead(501,{'Content-Type' : 'text/html'})
            res.end('Erro: '+ purl.pathname + 'nao esta implementado...')
        }
    }
    else if(req.method == "POST"){
        if(purl.pathname == "/processaForm"){
            recuperaInfo(req,resultado =>{
                jsonfile.readFile(myBD,(erro,teses)=>{
                    if(!erro){
                        teses.push(resultado)
                        console.dir(teses)
                        jsonfile.writeFile(myBD, teses, erro2=>{
                            if(!erro2){
                                console.log("Registo gravado com sucesso")
                            }else{
                                console.log("Erro: "+ erro2)
                            }
                        })
                    }
                    else{
                        console.log("Erro: "+ erro)
                    }
                })
                res.end(pug.renderFile('form-teses.pug'))
            })
        }
        else{
            res.writeHead(501,{'Content-Type' : 'text/html'})
            res.end('Erro: '+ purl.pathname + 'nao esta implementado...')
        }
    }

})

myServer.listen(5006,()=>{
    console.log("Servidor à escuta na porta 5006......")
})

function recuperaInfo(request, callback){
    //multipartformdata->para ficheiros
    const FORM_URLENCODED = 'application/x-www-form-urlencoded'
    if(request.headers['content-type'] === FORM_URLENCODED ){
        let body = ''
        request.on('data',chunk =>{
            body += chunk.toString()
        })
        request.on('end',()=>{
            callback(parse(body))
        })
    }
    else{
        callback(null)
    }

}