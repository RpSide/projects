var url_string = window.location.href
var url = new URL(url_string);
var currenturl = url.searchParams.get("site")
var endofurl = url.searchParams.get("int")

  let CONTENT
fetch(currenturl+"/index.RPDTA").then((r)=>{r.text().then((d)=>{CONTENT = d})})


let indexCode = CONTENT
let index = indexCode.replace("#","<").replace("!#",">")

document.write(index)
