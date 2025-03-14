//  add discover something new
const discoverToGo = document.getElementById('discover')
    .addEventListener('click', function () {
        window.location.href = 'blog.html';
    })

//  Add toggle button 
let color = ['#ff7675', '#e84393', '#ffeaa7','#ff9f43', '#5f27cd','#2e86de'];
let indexnum = 0
let themeBtn = document.querySelector(".themebtn")
    .addEventListener('click', function () {
        const body = document.getElementById('body');
        body.style.backgroundColor = color[indexnum];
        indexnum = (indexnum + 1) % color.length;
    })


// Task Assign Section 

const cards = document.querySelectorAll('.cards');
let allbtnclicked = [];
for (let card of cards) {
    let completedbtn = card.querySelector('.btncompleted');
    completedbtn.addEventListener('click', function (event) {
        event.target.classList.add("btn-disabled");
        event.target = alert("Board Update Sucessfully")

        // Assign task decrement 

        let taskcount = document.querySelector("#task-assigned");
        let remainingtask = parseInt(taskcount.innerText);
        taskcount.innerText = remainingtask - 1;

        // Assign task increment 

        let countNumber = document.querySelector('#countnumber');
        let remainingcountNumber = parseInt(countNumber.innerText);
        countNumber.innerText = remainingcountNumber + 1;

        // Real time 

        let now = new Date();
        let hours = now.getHours();
        let minutes = now.getMinutes();
        let seconds = now.getSeconds();
        let ampm = hours >=12 ? "PM" : "AM";
        hours = hours % 12 || 12;
        minutes = minutes<10 ? "0"+minutes : minutes;
        seconds = seconds <10 ? "0" + seconds : seconds;
        let currentime = `${hours}:${minutes}:${seconds} ${ampm}`;
        const realtime =currentime;

        //    Activity Message Added 
        let titles = card.querySelector('.title');
        let titled = titles.innerText;
        let message = document.querySelector('.message');
        let div = document.createElement('div');
        div.classList.add('bg-[#F4F7FF]', 'p-4', 'mb-2');
        div.innerHTML = `
        <p class="text-sm">You have Completed Task ${titled} at <span class="realTime">${realtime}</span></p>
        `;
        message.appendChild(div);

        // Clear History

        let clearHistory = document.querySelector('.clearhistory');
        clearHistory.addEventListener('click', function () {
            message.removeChild(div);
        });

        // After All button clicked 

        allbtnclicked.push(event.target);
        if (allbtnclicked.length === 6) {
            alert("Congratulation You Have Completed All The Current Task")
        }

    })
}


// To Change The Date of the current date section 

let today = new Date();
let date = today.toDateString();
// let month = today.getMonth() + 1;
// let Year = today.getFullYear();
document.querySelector('.Today').innerText = ` ${date}`;
