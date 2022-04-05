var url_string = window.location.href
var url = new URL(url_string);
var currenturl = url.searchParams.get("site")
var endofurl = url.searchParams.get("int")
let CONTENT
let index

let data12
// As with JSON, use the Fetch API & ES6
fetch(document.domain+"/RPSCRIPT/RPSCRIPT_RPDTA")
  .then(response => response.text())
  .then(data => {
  	// Do something with your data
  	data12 = data
  });

let data12
// As with JSON, use the Fetch API & ES6
fetch(document.domain+"/RPSCRIPT/RPSCRIPT_NOTIFY.JS")
  .then(response => response.text())
  .then(data => {
  	// Do something with your data
  	data12 = data
  });

let data12
// As with JSON, use the Fetch API & ES6
fetch(document.domain+"/RPSCRIPT/RPSCRIPT_RDOC.JS")
  .then(response => response.text())
  .then(data => {
  	// Do something with your data
  	data12 = data
  });


function getdata(urlData) {
let data = fetch(urlData)).text()
return data || "No Data"
}

fetch(currenturl+"index.RPSCRIPT").then((r)=>{r.text().then((d)=>{

CONTENT = d

index = CONTENT.replaceAll("*", "let").replaceAll("%INSERT @RPSCRIPT_RDOC",getdata(document.domain + "/side-projects/RPSCRIPT_RDOC.JS")).replaceAll("%INSERT @RPSCRIPT_NOTIFY",getdata(document.domain + "/side-projects/RPSCRIPT_NOTIFY.JS")).replaceAll("%INSERT @RSCRIPT_RPDTA",getdata(document.domain + "/side-projects/RPSCRIPT_RPDATA.JS"))

document.write(`
<script>

${index}

</script>
`)
})})
