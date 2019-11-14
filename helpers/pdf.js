var fs = require('fs');
var pdf = require('html-pdf');
var html = fs.readFileSync('./courseandprice.html', 'utf8');
var handlebars = require('handlebars')

let options = {
    format:'A4',
    orientation:'landscape',
    border:{
        top:'0.5in',
        left:'0.15in',
        right:'0.15in',
        bottom:'0.25in'
    }
}

let replacements={
    //username:req.query.username,
    date:new Date().toLocaleDateString(),
    data:['Satu','Dua','Tiga']
}

let pdfcreate=(html,replacements,options,cb)=>{
    fs.readFile(html,{encoding:'utf-8'},(err,readHTML)=>{
        console.log(html);
        
        if(err){            
            console.log(err);
            return false
        }else{
            var template = handlebars.compile(readHTML)
            var  HTMLtoPDF = template(replacements)

            pdf.create(HTMLtoPDF,options).toFile('./Schedule&Price.pdf', function(err, res) {
                if (err) return console.log(err);
                console.log(res); // { filename: '/app/businesscard.pdf' }
              })
        }
    })
}

//pdfcreate(html,replacements,options)
 
pdf.create(html, options).toFile('./Schedule&Price.pdf', function(err, res) {
  if (err) return console.log(err);
  console.log(res); // { filename: '/app/businesscard.pdf' }
});

// pdf.create(html).toStream(function(err, stream){
//     stream.pipe(fs.createWriteStream('./foo.pdf'));
//   });

// pdf.create(html).toBuffer(function(err, buffer){
//     console.log('This is a buffer:', Buffer.isBuffer(buffer));
//     console.log(buffer);
//   });
