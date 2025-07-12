let arr = [
    {dp:"https://images.unsplash.com/photo-1721909795454-1cf6ee50f8cf?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzR8fG1lbiUyMG1vZGVsfGVufDB8fDB8fHww",img:"https://images.unsplash.com/photo-1723854297399-1bd729aca4b9?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzJ8fG1lbiUyMG1vZGVsfGVufDB8fDB8fHww"},
    {dp:"https://images.unsplash.com/photo-1665753535123-e4293988be62?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mzh8fG1lbiUyMG1vZGVsfGVufDB8fDB8fHww",img:"https://images.unsplash.com/photo-1728257679663-24eec7b8c203?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mzl8fG1lbiUyMG1vZGVsfGVufDB8fDB8fHww"},
    {dp:"https://images.unsplash.com/photo-1728257679663-24eec7b8c203?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mzl8fG1lbiUyMG1vZGVsfGVufDB8fDB8fHww",img:"https://plus.unsplash.com/premium_photo-1664874603053-e7c0b908ee6e?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mjl8fG1lbiUyMG1vZGVsfGVufDB8fDB8fHww"},
    {dp:"https://images.unsplash.com/photo-1721909795454-1cf6ee50f8cf?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzR8fG1lbiUyMG1vZGVsfGVufDB8fDB8fHww",img:"https://images.unsplash.com/photo-1723854297399-1bd729aca4b9?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzJ8fG1lbiUyMG1vZGVsfGVufDB8fDB8fHww"},
];
let storiyan = document.querySelector("#storiyan");
let app = "";
let page = document.querySelector("#page");
let progress = document.querySelector("#progress");
storiyan.innerHTML = arr.map(function(ele,i){
    app += `<div id="story">
                    <img id="${i}" src="${ele.dp}" alt="">
                </div>`
});
let count = 0;
storiyan.innerHTML = app;
storiyan.addEventListener("click",function(dets){
    page.style.display = "block";
    page.style.backgroundImage = `url(${arr[dets.target.id].img})`;
    setTimeout(function(){
        
        page.style.display = "none";
    },3000);
    if(count<100){
        setInterval(function(){
            progress.style.width = `${count}%`
        count++;
        },30)
    }
    else{
        count = 0;
    }
});
