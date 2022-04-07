function gVideo(){
let e=document.createElement('webview')
let aw=`https://rpside.github.io/projects/rpweb/RPDTA/?site=rpside://rpside.github.io/projects/yt/w/&ytv=${prompt('Enter YT Video URL')}`
e.setAttribute("src", aw)
e.setAttribute("style", "width: 100%; height: 100%;")
}
