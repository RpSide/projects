var url_string = window.location.href
var url = new URL(url_string);
var currenturl = url.searchParams.get("site")
var endofurl = url.searchParams.get("int")

function getfile(url){
  let CONTENT
fetch(url).then((r)=>{r.text().then((d)=>{CONTENT = d})})
  return CONTENT
}

let indexCode = getfile(currenturl+"/index.RpDTA")
let index = indexCode.replace("#","<").replace("!#",">")

document.write(index)
