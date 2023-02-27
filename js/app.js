const elements = [
    {
        userimage: "./images/users/john.jpeg",
        altuserimage: "John",
        username: "John Doe",
        useraddress: "Szczecin, Polska",
        postimage: "./images/photos/gielda.jpeg",
        altpostimage: "Rekordowe wzrosty na gieldzie",
        likescount: 2,
        commenter: "Will Smith:",
        commenttext: " Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem sint veritatis omnis, quos magni ducimus enim officia praesentium itaque soluta ipsam delectus, voluptate quod culpa, temporibus a minus dicta necessitatibus!"
    },
    {
        userimage: "./images/users/lisa.jpeg",
        altuserimage: "Lisa",
        username: "Lisa",
        useraddress: "Kraków, Polska",
        postimage: "./images/photos/stoisko.jpeg",
        altpostimage: "Targi e-commerce",
        likescount: 5,
        commenter: "Will Smith:",
        commenttext: " Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem sint veritatis omnis, quos magni ducimus enim officia praesentium itaque soluta ipsam delectus, voluptate quod culpa, temporibus a minus dicta necessitatibus!"
    },
    {
        userimage: "./images/users/cristiano.jpeg",
        altuserimage: "Cristiano",
        username: "Cristiano",
        useraddress: "Radom, Polska",
        postimage: "./images/photos/presentation.jpeg",
        altpostimage: "Targi e-commerce",
        likescount: 3,
        commenter: "Will Smith:",
        commenttext: " Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem sint veritatis omnis, quos magni ducimus enim officia praesentium itaque soluta ipsam delectus, voluptate quod culpa, temporibus a minus dicta necessitatibus!"
    },
]
const post_container = document.querySelector("#post_container");

elements.map(function(element, index) {
    const article = document.createElement("article");
    article.classList.add("post");
    const post_header = document.createElement("div");
    post_header.setAttribute("class", "post__header");
    const user_details = document.createElement("div");
    user_details.setAttribute("class", "user-details");
    const user_details__img = document.createElement("div");
    user_details__img.setAttribute("class", "user-details__img");
    const user_details__img_active = document.createElement("div");
    user_details__img_active.setAttribute("class", "image-square image-square--small is-active");
    const user_details__content = document.createElement("div");
    user_details__content.setAttribute("class", "user-details__content");
    const a = document.createElement("a"); 
    a.setAttribute("href", "#");
    const menu = document.createElement("img"); 
    menu.setAttribute("src", "./images/icons/menu.svg");
    const post__content = document.createElement("div");
    post__content.setAttribute("class", "post__content");
    const post__img = document.createElement("div");
    post__img.setAttribute("class", "post__img");
    const post__details = document.createElement("div");
    post__details.setAttribute("class", "post__details");
    const post__actions = document.createElement("div");
    post__actions.setAttribute("class", "post__actions");
    const post__actions_item1 = document.createElement("a"); 
    post__actions_item1.setAttribute("href", "#");
    post__actions_item1.setAttribute("class", "post__actions-item");
    const post__actions_item2 = document.createElement("a"); 
    post__actions_item2.setAttribute("href", "#");
    post__actions_item2.setAttribute("class", "post__actions-item");
    const post__actions_item3 = document.createElement("a"); 
    post__actions_item3.setAttribute("href", "#");
    post__actions_item3.setAttribute("class", "post__actions-item");
    const like = document.createElement("img"); 
    like.setAttribute("src", "./images/icons/heart.svg");
    like.setAttribute("alt", "Like");
    const comment = document.createElement("img"); 
    comment.setAttribute("src", "./images/icons/comment.svg");
    comment.setAttribute("alt", "Comment");
    const share = document.createElement("img"); 
    share.setAttribute("src", "./images/icons/send.svg");
    share.setAttribute("alt", "Share");
    const post__comments = document.createElement("div");
    post__comments.setAttribute("class", "post__comments");
    const likescount = document.createElement("p"); 
    likescount.innerText = ("Liczba polubień: ");  
    const post__comments_comment = document.createElement("p");
    post__comments_comment.setAttribute("class", "post__comments-comment");
    const post__footer = document.createElement("div");
    post__footer.setAttribute("class", "post__footer");
    const add_comment = document.createElement("img"); 
    add_comment.setAttribute("src", "./images/icons/smile.svg");
    add_comment.setAttribute("alt", "Add comment");
    const input_text = document.createElement("input"); 
    input_text.setAttribute("type", "text");
    input_text.setAttribute("placeholder", "Dodaj komentarz...");

    const user_image = document.createElement("img"); 
    user_image.setAttribute("src", elements[index].userimage);
    user_image.setAttribute("alt", elements[index].altuserimage);
    const h3 = document.createElement("h3"); 
    h3.innerText = elements[index].username;
    const p_useraddress = document.createElement("p"); 
    p_useraddress.innerText = elements[index].useraddress;
    const post_image = document.createElement("img"); 
    post_image.setAttribute("src", elements[index].postimage);
    post_image.setAttribute("alt", elements[index].altpostimage);
    const p_likescount = document.createElement("strong"); 
    p_likescount.innerText = elements[index].likescount;
    const strong_commenter = document.createElement("strong"); 
    strong_commenter.innerText = elements[index].commenter;
    const comment_text = document.createElement("text"); 
    comment_text.innerText = elements[index].commenttext;
    
    user_details__img_active.appendChild(user_image);
    user_details__img.appendChild(user_details__img_active);
    user_details.appendChild(user_details__img);
    user_details__content.appendChild(h3);
    user_details__content.appendChild(p_useraddress);
    user_details.appendChild(user_details__content);
    post_header.appendChild(user_details);
    a.appendChild(menu);
    post_header.appendChild(a);
    article.appendChild(post_header);
    post__img.appendChild(post_image);
    post__content.appendChild(post__img);
    post__actions_item3.appendChild(like);
    post__actions.appendChild(post__actions_item3);
    post__actions_item2.appendChild(comment);
    post__actions.appendChild(post__actions_item2);
    post__actions_item1.appendChild(share);
    post__actions.appendChild(post__actions_item1);
    post__details.appendChild(post__actions);
    likescount.appendChild(p_likescount);
    post__comments_comment.appendChild(strong_commenter);
    post__comments_comment.appendChild(comment_text);
    post__comments.appendChild(likescount);
    post__comments.appendChild(post__comments_comment);
    post__details.appendChild(post__comments);
    post__content.appendChild(post__details);
    article.appendChild(post__content);
    post__footer.appendChild(add_comment);
    post__footer.appendChild(input_text);
    article.appendChild(post__footer);
    post_container.appendChild(article);
});