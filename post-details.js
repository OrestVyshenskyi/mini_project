let idPost = JSON.parse(localStorage.getItem('postId'));

let homeButton = document.getElementById('homeButton');
let backButton = document.getElementById('backButton');

let commentUrl = new URL(`https://jsonplaceholder.typicode.com/posts/` + idPost + `/comments`);
let postUrl = new URL(`https://jsonplaceholder.typicode.com/posts/` + idPost);

let postTitle = document.getElementById('postTitle');
let postBody = document.getElementById('postBody');
let postId = document.getElementById('postId');
let userId = document.getElementById('userId');

fetch(postUrl)
    .then(posts => posts.json())
    .then(posts => {
        console.log(posts)
        postTitle.innerText = `Title: ${posts.title}`;
        postBody.innerText = `Body: ${posts.body}`;
        postId.innerText = `Id: ${posts.id}`;
        userId.innerText = `UserId: ${posts.userId}`;

    })
fetch(commentUrl)
    .then(posts => posts.json())
    .then(posts => {
        console.log(posts)
        for (let i = 0; i < posts.length; i++) {
            const item = posts[i];
            let div = document.createElement('div');
            let commentName = document.createElement('div');
            let commentBody = document.createElement('div')
            let userInfo = document.createElement('div');
            let id = document.createElement('div');
            let email = document.createElement('div')
            div.classList.add(`page`, 'info');
            commentName.classList.add('post');
            commentBody.classList.add('post');
            userInfo.classList.add('idAndUserId', 'post');

            commentName.innerText = `Name: ${item.name}`;
            commentBody.innerText = `Body: ${item.body}`;
            id.innerText = `UserId ${item.id}`;
            email.innerText = `Email: ${item.email}`;

            userInfo.append(id, email);
            div.append(commentName, commentBody, userInfo);
            document.body.append(div)

        }
    })

backButton.onclick = function () {
    window.location.href = `user-details.html`;
}
homeButton.onclick = function () {
    window.location.href = `users.html`;
}
//     На странице post-details.html:
// 7 Вивести всю, без виключення, інформацію про об'єкт post на який клікнули .
// 8 Нижчє інформаці про пост, вивести всі коментарі поточного поста (ендпоінт  - https://jsonplaceholder.typicode.com/posts/POST_ID/comments)
//
// Стилизація проєкта -
// users.html - всі блоки з user - по 2 в рядок. кнопки/аосилвння розташувати під інформацією про user.
//     user-details.html - блок з інфою про user зверху сторінки. Кнопка нижчє, на 90% ширини сторінки, по центру.
//     блоки з короткою іфною про post - в ряд по 5 .
//     post-details.html - блок з інфою про пост зверху. Коментарі - по 4 в ряд.
//     Всі елементи котрі характеризують users, posts, comments візуалізувати, так, щоб було видно що це блоки (дати фон. марджини і тд)
