// node 환경에서 테스트하고 소스만 붙임
// 원하는 변수 형성 방식을 모르겠어서 paramId에 따라 동적 변수로 생성함.
var paramId = 1;

fetch("https://jsonplaceholder.typicode.com/posts", {
    method: "GET"
})
.then(res => res.json())
.then(function(response) {
    let list = response;
    window['user' + paramId] = {};
    list.filter(function(el) {
        return el.userId === paramId;
    }).map(function(el) {
        return el.title;
    }).forEach(function(val, inx) {
        user1['title' + (inx + 1)] = val;
    });

    console.log(user1);
})
.catch(function(error) {
    console.log(error);
});