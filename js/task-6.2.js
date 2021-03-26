//2. Допишите функцию countOnline

let users = [
    {
        age: 27,
        online: false
    },
    {
        age: 32,
        online: true
    },
    {
        age: 48,
        online: false
    },
    {
        age: 19,
        online: true
    }
];

function countOnline(arr) {
    var co = 0
    for (var i = 0; i<arr.length; i++){
        if (arr[i].online == true) {
            co ++
        }
    }
    return co
}
console.log(countOnline(users));