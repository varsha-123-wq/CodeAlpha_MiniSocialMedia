let followBtn = document.getElementById("followBtn");
followBtn.addEventListener("click",
    function(){
        if(followBtn.innerText === "Follow")
        {
            followBtn.innerText = "Following";

        }else{
            followBtn.innerText = "Follow";
        }
    });
function addPost(){
    let input = document.getElementById("postInput");
    let posts = 
    document.getElementById("posts");
    if(input.ariaValueMax.trim()===""){
        alert("Write Something!");
        return;
    }
    let post = 
    document.createElement("div");
    post.classList.add("post");

    post.innerHTML = `
    <p>${input.value}</p>
    <button onclick="likePost(this)">
    ❤️Like</button>
    <span>0 Likes</span>`;
    posts.prepend(post);
    input.value ="";
}

function likePost(btn){
    let span = btn.nextElementSibling;
    let count =
    parseInt(span.innerText);
    count++;
    span.innerText = count + "Likes";
}