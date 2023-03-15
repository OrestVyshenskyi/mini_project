
let userUrl = new URL(`https://jsonplaceholder.typicode.com/users`);

fetch(userUrl)
    .then(users => users.json())
    .then(users => {
        let json = JSON.stringify(users)
        localStorage.setItem('users', json)
    })


let users = JSON.parse(localStorage.getItem('users'));

let main1 = document.getElementById('page1');
let main2 = document.getElementById('page2');


function createElements(iter, element){
    const user = users[iter];
    let div = document.createElement('div');
    let button = document.createElement('button');
    button.onclick = function () {
        localStorage.removeItem('id')
        window.location.href = `user-details.html`;
        localStorage.setItem('id', JSON.stringify(user.id));
    }
    button.classList.add('buttons')
    button.innerText = 'USER INFO'
    div.classList.add('users');
    div.innerText = `${user.id} ${user.name} `

    element.append(div, button)
}
for (let i = 0; i < users.length / 2; i++) {
    createElements(i, main1);

}
for (let i = users.length / 2; i < users.length ; i++) {
    createElements(i, main2);
}


