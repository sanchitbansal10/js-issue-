

var loadTopics =function(){

    var addTopic = function(){
        var ne = JSON.parse(localStorage.getItem('topics'));
        ne.push(document.getElementById('inputTopic').value)
        //push return no. of elements in the array and make changes to the original array
        localStorage.setItem('topics',JSON.stringify(ne))
    }
    var clearSubmit = function(){
        document.getElementById('inputTopic').value=''
    }
    var searchTopic = function(e){
            if(!e.target.value==''){
            var topicsFiltered = JSON.parse(localStorage.getItem('topics'))
                                    .filter((topic)=>{
                                        const regex = new RegExp(e.target.value,'gi')
                                        return topic.match(regex)
                                    })
            document.getElementById('topicList').innerHTML = topicsFiltered.map((topic)=>`<button value=${topic}>${topic}</button>`)
    }
    }
    var displayUrl = function(e){
        var elementsHavingTopic = JSON.parse(localStorage.getItem('url'))
        .filter((element)=>{return element.topics.includes(e.target.value)})
        document.getElementById('urlList').innerHTML = elementsHavingTopic.map((element)=>`<div>${element.url}</div>`)
    }
    document.getElementById('inputTopicButton').addEventListener('click',addTopic)
    document.getElementById('inputTopicButton').addEventListener('click',clearSubmit)
    document.getElementById('topicSearch').addEventListener('input',searchTopic)
    document.getElementById('topicList').addEventListener('click',displayUrl)
}

window.addEventListener('load', loadTopics)