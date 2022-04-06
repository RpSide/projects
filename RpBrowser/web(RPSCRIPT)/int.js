var url_string = window.location.href
var url = new URL(url_string);
var currenturl = url.searchParams.get("site")
var endofurl = url.searchParams.get("int")
let CONTENT
let index

let RPSCRIPT_RPDTA
// As with JSON, use the Fetch API & ES6
fetch("https://"+document.domain+"/RPSCRIPT/RPSCRIPT_RPDTA.js")
  .then(response => response.text())
  .then(data => {
  	// Do something with your data
  	RPSCRIPT_RPDTA = data || "NO_DATA"
  });

let RPSCRIPT_NOTIFY
// As with JSON, use the Fetch API & ES6
fetch("https://"+document.domain+"/RPSCRIPT/RPSCRIPT_NOTIFY.JS")
  .then(response => response.text())
  .then(data => {
  	// Do something with your data
  	RPSCRIPT_NOTIFY = data || "NO_DATA"
  });

let RPSCRIPT_RDOC
// As with JSON, use the Fetch API & ES6
fetch("https://"+document.domain+"/RPSCRIPT/RPSCRIPT_RDOC.JS")
  .then(response => response.text())
  .then(data => {
  	// Do something with your data
  	RPSCRIPT_RDOC = data || "NO_DATA"
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
