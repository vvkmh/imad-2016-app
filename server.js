var express = require('express');
var morgan = require('morgan');
var path = require('path');

var app = express();
app.use(morgan('combined'));

var articles={
    one: {
    title: 'Speech By Ratan Tata',
    heading: 'Speech By Ratan Tata',
    date: '30 Sept 2016',
    content: `
                <img src="http://i.forbesimg.com/media/lists/people/ratan-tata_416x416.jpg"class="img-frame" />
                
                Don't just have career or academic goals. Set goals to give you a balanced, successful life. Balanced means ensuring your
                health, relationships, mental peace are all in good order. There is no point of getting a promotion on the day of your
                breakup. There is no fun in driving a car if your back hurts. Shopping is not enjoyable if your mind is full of tensions.
                Don't take life seriously. Life is not meant to be taken seriously, as we are really temporary here. We are like a
                prepaid card with limited validity. If we are lucky, we may last another 50 years. And 50 years is just 2,500 weekends.
                Do we really need to get so worked up?It's OK, Bunk few classes, score low in couple of papers, take leave from work,
                fall in love, fight a little with ur spouse... It's ok... We are people, not programmed devices..! "Don't be serious,
                enjoy Life as it comes"
           `
},
    two: {
    title: 'Narendra Modi',
    heading: 'Narendra Modi',
    date: '02 Oct 2016',
    content: `
                <img src="http://4.bp.blogspot.com/-iUWT-UOY9Sg/VUmWMcVojxI/AAAAAAAADnA/7i63gjuAhMM/s1600/Narendra%2BModi.jpg"class="img-frame" />
        
                Full name of 'Narendra Modi' is Narendra Damodardas Modi. He was born on 17 September 1950 in Vadnagar, Mehsana district, Bombay State (present day Gujarat). His father's name was Damodardas Mool Chand Modi and mother's name was Hiraben. He was born into a middle class family. At the age of 13, he was engaged with jasoda Ben Chaman Lal and when they were married, he was just 17.
                <br>
                At the age of eight Modi discovered the RSS, and began attending its local shakhas (training sessions). He made his focus on the social and cultural development organizations, national volunteer organization. He served flood victims in Gujarat in 1967. Narendra Modi played important roles on several occasions during his work with RSS.
                 <br>
                In 1987, Narendra Modi entered into the main political stream by joining the Bharatiya Janata Party (BJP). Within a year he was appointed as General Secretary of the party's Gujarat unit. He truly pioneered the challenging task of enabling the party workers, because of which the party started gaining political mileage. In October 2001, Narendra Modi was appointed as Chief Minister of Gujarat. In the 2007 elections the BJP led by Modi once again got a massive majority. In the 2012 elections, the BJP led by Modi once again gained a large majority. Modi sworn in as fourth consecutive Gujarat Chief Minister.
                 <br>
                Due to his fame and style, Modi was declared as candidate for Prime Minister by Bhartiya Janata Party in 2014 general elections. After being declared candidate for Prime Minister, he visited the whole India. Under his leadership, the BJP gained phenomenal success in the 2014 elections. On May 26, 2014, Narendra Modi was sworn in as India's 15th prime minister.
                 <br>
                Image of Narendra Modi is considered of a stern administrator and protective strict discipline. He has keen interest in science and technology. He is realistic as well as idealistic. He is full of optimism. He is best known for rising from humble beginnings to become prime minister of India. He will be always remembered as a successful politician and poet. 
           `    
    }
};
function articletemplate (data){
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
            <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.6.3/css/font-awesome.min.css"/>
            <link href="/ui/style.css" rel="stylesheet" />
            <meta name="viewport" content="width=device-width, initial-scale=1"/>
            </head>
            <body class="body-article">
                <h1>
                    ${heading}
                </h1>
                <div>
                <h2>
                    ${date}
                </h2>    
                </div>
                <br>
                <div class="article">
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
  res.send(articletemplate(articles[Name]));
});

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});

var counter=0;
app.get('/counter', function(){
    counter = counter = 1;
    res.send(counter.toString()); 
});

app.get('/ui/main.js', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'main.js'));
});
app.get('/ui/style.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'style.css'));
});

app.get('/ui/vvk_phto.jpg', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'vvk_phto.jpg'));
});


var port = 8080; // Use 8080 for local development because you might already have apache running on 80
app.listen(8080, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});
