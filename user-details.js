let id = JSON.parse(localStorage.getItem('id'));

let users = JSON.parse(localStorage.getItem('users'));

let postUrl = new URL(`https://jsonplaceholder.typicode.com/users/` + id + `/posts`);

let buttonPostDetail = document.getElementById('postButton');

let homeButton = document.getElementById('homeButton');

let postBlock1 = document.getElementById('postBlock1');
let postBlock2 = document.getElementById('postBlock2');

for (const user of users) {
    if (id === user.id){
        let id = document.getElementById('id');
        let name = document.getElementById('name');
        let username = document.getElementById('username');
        let phone = document.getElementById('phone');
        let email = document.getElementById('email');
        let website = document.getElementById('website');
        let address = document.getElementById('address');
        let company = document.getElementById('company');

        id.innerText = `Id: ${user.id}`;
        name.innerText = `Name: ${user.name}`;
        username.innerText = `Username: ${user.username}`;
        phone.innerText = `Phone: ${user.phone}`;
        email.innerText = `Email: ${user.email}`;
        website.innerText = `Website: ${user.website}`;
        address.innerText =
            `City: ${user.address.city};
            Street: ${user.address.street};
            Suite: ${user.address.suite};
            Zipcode: ${user.address.zipcode};
            GEO: 
            (Lat: ${user.address.geo.lat})
            (Lng: ${user.address.geo.lng})`;
        company.innerText =
            `Name: ${user.company.name}
            Catch Phrase: ${user.company.catchPhrase}
            BS: ${user.company.bs}`;
    }

}
fetch(postUrl)
    .then(posts => posts.json())
    .then(posts => {
        function postCreator(iter, element) {
            const post = posts[iter];
            let div = document.createElement('div');
            div.classList.add('postsBlocks')
            div.innerText = post.title
            let button = document.createElement('button');
            button.innerText = 'Read More!'
            button.classList.add('postButton');
            button.onclick = function () {
                localStorage.removeItem('postId')
                window.location.href = `post-details.html`;
                localStorage.setItem('postId', JSON.stringify(post.id));
                console.log(post.id)
            }
            div.append(button);
            element.append(div);
        }
        buttonPostDetail.onclick = function () {
            for (let i = 0; i < posts.length / 2; i++) {
                postCreator(i, postBlock1);
            }
            for (let i = posts.length / 2; i < posts.length; i++) {
                postCreator(i, postBlock2);
            }
        }
    })

homeButton.onclick = function () {
    window.location.href = `users.html`;
}
