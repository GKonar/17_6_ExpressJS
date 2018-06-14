var express = require('express');
var app = express();

app.set('view engine', 'pug'); //Pierwsza linia mówi o tym, że będziemy używać Puga jako kreatora widoków
app.set('views','./views'); // Druga linia zaznacza, że widoki będziemy trzymać w katalogu /views
app.use(function(req, res, next){
    console.log('Hej, jestem pośrednikiem przy żądaniu');
    next();
});

app.get('/', function(req, res){
    res.render('index', {
    	name: "Aplikacja logowania do GOOGLE",
    	url: "/google"
    });
});

app.get('/google', function(req, res) {
	res.render('google')
});

app.listen(3000);

app.use(function (req, res, next) {
    res.status(404).send('Wybacz, nie mogliśmy odnaleźć tego, czego żądasz!')
});