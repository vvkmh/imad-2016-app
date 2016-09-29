var express = require('express');
var morgan = require('morgan');
var path = require('path');

var app = express();
app.use(morgan('combined'));

var articles={
    One: {
    title: 'Speech By Ratan Tata',
    heading: 'Speech By Ratan Tata',
    date: '30 Sept 2016',
    content: `
          <p>
                Don't just have career or academic goals. Set goals to give you a balanced, successful life. Balanced means ensuring your
                health, relationships, mental peace are all in good order. There is no point of getting a promotion on the day of your
                breakup. There is no fun in driving a car if your back hurts. Shopping is not enjoyable if your mind is full of tensions.
                Don't take life seriously. Life is not meant to be taken seriously, as we are really temporary here. We are like a
                prepaid card with limited validity. If we are lucky, we may last another 50 years. And 50 years is just 2,500 weekends.
                Do we really need to get so worked up?It's OK, Bunk few classes, score low in couple of papers, take leave from work,
                fall in love, fight a little with ur spouse... It's ok... We are people, not programmed devices..! "Don't be serious,
                enjoy Life as it comes"
           </p> `
},
};
function createtemplate (data){
        var title = data.title;
        var heading = data.heading;
        var date = data.date;
        var content = data.content;
        var htmltemplate=`
        <html>
            <head>  
                <title>
                    ${title}
                </title>
            <link href="/ui/style.css" rel="stylesheet" />
            <meta name="viewport" content="width=device-width, initial-scale=1"/>
            </head>
            <body>
                <div>
                <a href="/">Home</a>
                </div>
                <hr>
                <h1>
                    ${heading}
                </h1>
                <div>
                    ${date}
                </div>
                <div>
                    ${content}
                </div>
                </div>
            </body>
        </html>    
`;
            return htmltemplate;
}
                    
app.get('/:Name', function (req , res) {
  var Name = req.params.Name;
  res.send(createtemplate(articles[Name]));
});

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});

app.get('/ui/style.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'style.css'));
});

app.get('/ui/vvk-photo.jpg', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'vvk-photo.jpg'));
});


var port = 8080; // Use 8080 for local development because you might already have apache running on 80
app.listen(8080, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});
