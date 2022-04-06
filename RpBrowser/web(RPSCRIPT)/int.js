var url_string = window.location.href
var url = new URL(url_string);
var currenturl = url.searchParams.get("site")
var endofurl = url.searchParams.get("int")
let CONTENT
let index

let RSCRIPT_RPDTA
// As with JSON, use the Fetch API & ES6
fetch(document.domain+"/RPSCRIPT/RPSCRIPT_RPDTA.js")
  .then(response => response.text())
  .then(data => {
  	// Do something with your data
  	RSCRIPT_RPDTA = data || "NO_DATA"
  });

let RSCRIPT_NOTIFY
// As with JSON, use the Fetch API & ES6
fetch(document.domain+"/RPSCRIPT/RPSCRIPT_NOTIFY.JS")
  .then(response => response.text())
  .then(data => {
  	// Do something with your data
  	RSCRIPT_NOTIFY = data || "NO_DATA"
  });

let RSCRIPT_RDOC
// As with JSON, use the Fetch API & ES6
fetch(document.domain+"/RPSCRIPT/RPSCRIPT_RDOC.JS")
  .then(response => response.text())
  .then(data => {
  	// Do something with your data
  	RSCRIPT_RDOC = data || "NO_DATA"
  });


fetch(currenturl+"index.RPSCRIPT").then((r)=>{r.text().then((d)=>{

CONTENT = d

index = CONTENT.replaceAll("*", "let").replaceAll("%INSERT @RPSCRIPT_RDOC",RPSCRIPT_RDOC).replaceAll("%INSERT @RPSCRIPT_NOTIFY",RPSCRIPT_NOTIFY).replaceAll("%INSERT @RSCRIPT_RPDTA",RPSCRIPT_RPDTA)

document.write(`
<script>

${index}

</script>
`)
})})
