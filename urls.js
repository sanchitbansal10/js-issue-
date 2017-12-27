
var url=[{'url':'url','topics':['shit','seconShit']}]



var loadUrl =function(){

    var addUrl = function(){
        var ne = JSON.parse(localStorage.getItem('url'))
        ne.push({'url':document.getElementById('inputUrl').value})
        localStorage.setItem('url',JSON.stringify(ne))
    }
    var clearSubmit1 = function(){
        document.getElementById('inputUrl').value=''
    }
    var showTopicList = function(){
        document.getElementById('showTopicList')
        .innerHTML=JSON.parse(localStorage.getItem('topics')).map((topic)=>('<div>'+topic+'</div>')).join('')
        // JSON.parse(myStorage.topics).map((topic)=>(document.getElementById('showTopicList')
        //.innerHTML='<div>'+topic+'</div>'))
    }
    document.getElementById('inputUrlButton').addEventListener('click',addUrl)
    document.getElementById('inputUrlButton').addEventListener('click',clearSubmit1)
    document.getElementById('inputUrlButton').addEventListener('click',showTopicList)
}

window.addEventListener('load', loadUrl)