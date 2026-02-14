let score = 0;
let shown50 = false;
let shown100 = false;

function createHeart(){
    const heart = document.createElement("div");
    heart.classList.add("heart");
    heart.innerHTML = "💗";

    heart.style.left = Math.random()*90 + "%";
    heart.style.animationDuration = (3 + Math.random()*2) + "s";

    heart.onclick = function(){
        score++;
        document.getElementById("score").innerText = score;
        heart.remove();

        if(score >= 50 && !shown50){
            showMessage50();
            shown50 = true;
        }

        if(score >= 100 && !shown100){
            showMessage100();
            shown100 = true;
        }
    };

    document.getElementById("gameArea").appendChild(heart);

    setTimeout(()=>{heart.remove();},5000);
}

setInterval(createHeart,700);

function showMessage50(){
    const msg = document.getElementById("message");
    msg.style.display = "block";
    msg.innerHTML =
    "🤍 If you reached 50… maybe you already know you matter more than you think.";
    launchConfetti();
}

function showMessage100(){
    const msg = document.getElementById("message");
    msg.innerHTML +=
    "<br><br>💌 Secret unlocked: If I ever choose someone, I hope it's you.";
    launchConfetti();
}

function launchConfetti(){
    for(let i=0;i<80;i++){
        const conf = document.createElement("div");
        conf.classList.add("confetti");
        conf.style.left = Math.random()*100 + "%";
        conf.style.background =
        "hsl(" + Math.random()*360 + ",100%,70%)";
        conf.style.animationDuration =
        (2 + Math.random()*2) + "s";

        document.body.appendChild(conf);

        setTimeout(()=>{conf.remove();},3000);
    }
}