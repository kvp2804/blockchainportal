var config = require('../config');
var java = require("../node_modules/java");
var path = require('path');

java.classpath.push(path.resolve(__dirname, "../java/myclass.jar"));
//java.classpath.push(path.resolve(__dirname, "../java/lucene-analyzers-common-7.4.0.jar"));
//java.classpath.push(path.resolve(__dirname, "../java/lucene-queryparser-7.4.0.jar"));



module.exports = function( app, express ){

	var apiPortal = express.Router();

	
	apiPortal.post('/portal', function(req, res){

		res.json({message: 'In portal post!'});
	});


	apiPortal.get('/portal', function(req, res){

		//console.log( java.classpath );

		var MyClass = java.import("com.nearinfinity.nodeJava.MyClass");
		var result = MyClass.addNumbersSync(1, 2);
		//console.log(result);

		//var idx = java.newInstanceSync("org.apache.lucene.store.RAMDirectory");
		//var analyzer = java.newInstanceSync("org.apache.lucene.analysis.standard.StandardAnalyzer");
		res.json( "Add 1 and 2 = " + result );

	});

	return apiPortal;
}
