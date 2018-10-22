var fs = require('fs')

var files = fs.readdirSync('./json/', ()=>{})
var filename = /\.json/
var otherfiles = 0;
var data = '[\n'

for (x in files) {
    if (filename.test(files[x])) {
        var file = 'json/' + files[x];
        var myObj = JSON.parse(fs.readFileSync(file, 'utf-8'))
        if (x != files.length - otherfiles - 1)
            data += '\t{\n\t\"id\": \"'+ myObj._id + '\",\n\t\"titulo\": \"' + myObj.titulo + '\" \n\t},\n'
                
        else 
             data +=  '\t{ \"titulo\": \"' + myObj.titulo + '\" }\n'
    } else {
        otherfiles++
    }
}

data += ']'

var sorted_data = JSON.parse(data).sort((a, b)=>{
    return a.titulo.localeCompare(b.titulo)
});

fs.writeFileSync('json/index.json', JSON.stringify(sorted_data))