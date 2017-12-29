//LOCAL STORAGE only stores key value pairs as string so we need to use JSON.stringify and JSON.parse at every step

if(localStorage.getItem('topics')==null){
//myStorage = window.localStorage;
localStorage.setItem('topics',JSON.stringify([]))
//myStorage.topics = JSON.stringify([])
}


if(localStorage.getItem('url')==null){
localStorage.setItem('url',JSON.stringify([{'url':'url','topics':['shit','seconShit']}]))
/*myStorage.url=JSON.stringify([{'url':'url','topics':['shit','seconShit']}])*/
}