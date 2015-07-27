var fs=require("fs");
var glob=require("glob");
var fileprefix={
	"K05n0016_xuanzang.tsv":"x"
	,"T08n0235_kumarajiva.tsv":"k"
	,"T08n0236a_bodhiruci.tsv":"b"
	,"T08n0237_paramartha.tsv":"p"
	,"T08n0238_gupta.tsv":"g"
	,"T08n0239_yijing.tsv":"y"
	,"ds_m_romanized(re).tsv":"s"
	,"ds_m_tibetan(re).tsv":"t"

}
var out={};

var dofile=function(fn) {
	var lines=fs.readFileSync(fn,"utf8").split(/\r?\n/);
	var prefix= fileprefix[fn.substr(7)];
	lines.forEach(function(L){
		var fields=L.split("\t");
		if (fields.length<2) return;
		var key=fields[0];
		var m=key.match(/(\d+)\.(\d+)/);
		if (!m || m[1]+"."+m[2]!=key) {
			console.log("invalid key format",key,"of",fn);
		}
		out[prefix+key]=fields[1];
	});
}
glob("rawtsv/*.tsv",function(err,files){
	files.map(dofile);
	var targetfn="src/diamond.json";
	console.log("write to",targetfn)
	fs.writeFileSync(targetfn,JSON.stringify(out,""," "),"utf8");
});