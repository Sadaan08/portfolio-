// var about = document.querySelector("ul")
// about.addEventListener("click",function(){
//     alert("your in sadaan's portfolio")
// });

var download = document.querySelector("#down")
download.addEventListener("click",function(){
    alert("Resume is downloading")
});

var github = document.querySelector("#git")
github.addEventListener("click",function(){
    alert("User do not have github")
});

// function showsidebar(){
//     const right = document.querySelector(".right")
//     .right.style.display = "flex";
// }

const sidbar = document.querySelector('.sidebar')
const sibar = document.querySelector('.right')

sibar.addEventListener("click",function()
{
    sidbar.style.display = 'flex';
});

sidbar.addEventListener("click",function()
{
    sibar.style.display = 'none'

});

