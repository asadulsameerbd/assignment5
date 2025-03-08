let color = ["#e55039", "#f6b93b", "#1e3799", "#78e08f", "#82ccdd", "#0a3d62", "#38ada9"]
let indexnum = 0;
const btnTop = document.querySelector('.btn-top').addEventListener('click', function () {
    let body = document.getElementById('body');
    body.style.backgroundColor = color[indexnum];
    indexnum = (indexnum + 1) % color.length;
})


// Switch Page 

let swich = document.getElementById('discover').addEventListener('click', function () {
    window.location.href = 'prac1.html';
})

// Realtime 
function time (){
    let now = new Date();
    let Hour = now.getHours().toString().padStart(2,'0');
    let Minutes = now.getMinutes().toString().padStart(2,'0');
    let Second = now.getSeconds().toString().padStart(2,'0');
    let ampm = Hour>= 12 ? "Pm" : "Am";
    document.getElementById('Today').innerText = `${Hour}: ${Minutes}: ${Second} ${ampm}`;
}
setInterval(time)

//  task completed 

let cards = document.querySelectorAll('.cards');
allbtnclicked = [];
for (let card of cards) {
    let btnCompleted = card.querySelector('.btncompleted');
    btnCompleted.addEventListener('click', function (event) {
        event.target.classList.add("btn-disabled");
        event.target = alert('Board update successful');

        // task decrement 

        let taskcount = document.getElementById('task-assigned');
        let remainingtask = parseInt(taskcount.innerText);
        taskcount.innerText = remainingtask - 1;

        // top increment 
        let countNumber = document.getElementById('countnumber');
        let remainingNumber = parseInt(countNumber.innerText);
        countNumber.innerText = remainingNumber + 1;

        // Runtime 
        let now = new Date();
        let Hours = now.getHours();
        let Minutes = now.getMinutes();
        let Second = now.getSeconds();
        let ampm = Hours >= 12 ? "PM" : "AM";
        Hours = Hours % 12 || 12;
        Minutes = Minutes < 10 ? "0" + Minutes : Minutes;
        Second = Second < 10 ? "0" + Second : Second;
        let totalTime = `${Hours} : ${Minutes} : ${Second} ${ampm}`;

        // add message

        let titles = card.querySelector('.title');
        let titled = titles.innerText;
        let activityMessage = document.querySelector('.message');
        let div = document.createElement('div');
        div.classList.add("text-sm", "bg-[#4B6584]", "p-3", "m-4", "rounded-lg");
        div.innerHTML = `<P>You Completed the task of ${titled} at ${totalTime}</p>`
        activityMessage.appendChild(div);

        allbtnclicked.push(event.target);
        if (allbtnclicked.length === 6) {
            alert("Congratulations Mr/Mrs , You Completed all the Task")
        }

        // Clear 

        let clear = document.querySelector('.clearhistory').addEventListener('click', function(){
            activityMessage.removeChild(div);
        })
    })
}