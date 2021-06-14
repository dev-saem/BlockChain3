module.exports = function(app)
{
    app.get('/',function(req,res){ //localhost:3000 = '/'
        res.render('index.html');
    });

    app.get('/about',function(req,res){
        res.render('about.html');
    });
	
	

}