
var url=[{'url':'url','topics':['shit','seconShit']}]



var loadUrl =function(){
    var topicsToBeAdded = []
    var addUrl = function(){
        console.log(topicsToBeAdded)
        var ne = JSON.parse(localStorage.getItem('url'))
        ne.push({'url':document.getElementById('inputUrl').value,'topics':topicsToBeAdded})
        localStorage.setItem('url',JSON.stringify(ne))
        topicsToBeAdded = []
    }
    var clearSubmit1 = function(){
        document.getElementById('inputUrl').value=''
    }
    var showTopicList = function(){
        var ne = JSON.parse(localStorage.getItem('topics'))
        document.getElementById('showTopicList').innerHTML= ne
        .map((topic)=>(`<button value=${topic} id=ne[${ne.indexOf(topic)}]>${topic}</button>`))
        .join('')
        // JSON.parse(myStorage.topics).map((topic)=>(document.getElementById('showTopicList')
        //.innerHTML='<div>'+topic+'</div>'))
    }
    var addTopicToUrl = function(e){
        topicsToBeAdded.push(e.target.value)
    }
    document.getElementById('showTopicList').addEventListener('click',addTopicToUrl)
    document.getElementById('inputUrlButton').addEventListener('click',addUrl)
    document.getElementById('inputUrlButton').addEventListener('click',clearSubmit1)
    document.getElementById('showTopicButton').addEventListener('click',showTopicList)
}

window.addEventListener('load', loadUrl)