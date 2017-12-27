

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
    document.getElementById('inputTopicButton').addEventListener('click',addTopic)
    document.getElementById('inputTopicButton').addEventListener('click',clearSubmit)
}

window.addEventListener('load', loadTopics)