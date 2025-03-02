//  add discover something new
const discoverToGo = document.getElementById('discover')
    .addEventListener('click', function () {
        window.location.href = 'blog.html';
    })

//  Add toggle button 
let color = ['#ff7675', '#e84393', '#ffeaa7'];
let indexnum = 0
let themeBtn = document.querySelector(".themebtn")
.addEventListener('click', function () {
    const body = document.getElementById('body');
    body.style.backgroundColor = color[indexnum];
    indexnum = (indexnum + 1) % color.length;
})
