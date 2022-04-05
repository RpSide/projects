var url_string = window.location.href
var url = new URL(url_string);
var currenturl = url.searchParams.get("site")
var endofurl = url.searchParams.get("int")
let CONTENT
let index

function getvals(furl){
    return fetch(furl',
    {
    	method: "GET",
    })
    .then((response) => response.json())
    .then((responseData) => {
      console.log(responseData);
      return responseData;
    })
    .catch(error => console.warn(error));
  }
  
  getvals().then(response => console.log(response));

fetch(currenturl+"index.RPDTA").then((r)=>{r.text().then((d)=>{

CONTENT = d

index = CONTENT.replaceAll("!#",">").replaceAll("#","<")

document.write(index)

})})
