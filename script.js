const loginBtn = document.getElementById("loginBtn");

loginBtn.addEventListener("click", checkPassword);

function checkPassword(){

  const pass = document.getElementById("password").value;

  if(pass === "elifim"){

    document.getElementById("loginScreen").classList.add("hidden");
    document.getElementById("site").classList.remove("hidden");

    startApp();

  } else {
    alert("Yanlış şifre 😢");
  }
}

/* 🚀 ANA SİSTEM */
function startApp(){

  const heart = document.getElementById("heart");
  const startScreen = document.getElementById("startScreen");
  const loveScreen = document.getElementById("loveScreen");

  heart.addEventListener("click",(e)=>{

    startScreen.classList.add("hidden");
    loveScreen.classList.remove("hidden");

    createParticles(e.clientX,e.clientY);
  });

  updateDays();
  startCatsRain();
  startStars();
}

/* 💥 PARÇACIK */
function createParticles(x, y){

screenFX();function screenFX(){

  // 📱 ekran sars
  document.body.classList.add("shake");

  setTimeout(()=>{
    document.body.classList.remove("shake");
  },300);

  // 💡 flash
  const flash = document.createElement("div");
  flash.classList.add("flash");
  document.body.appendChild(flash);

  setTimeout(()=>{
    flash.remove();
  },300);

  // 🔊 ses
  const audio = new Audio("pop.mp3");
  audio.volume = 0.5;
  audio.play();
}

  const emojis = ["❤️","💖","💘","💕","💞","💗"];

  for(let i=0;i<35;i++){

    const p = document.createElement("div");
    p.classList.add("particle");
    p.innerText = emojis[Math.floor(Math.random()*emojis.length)];

    const angle = Math.random() * 2 * Math.PI;
    const distance = Math.random() * 200;

    const xMove = Math.cos(angle) * distance + "px";
    const yMove = Math.sin(angle) * distance + "px";

    p.style.left = x + "px";
    p.style.top = y + "px";

    p.style.setProperty("--x", xMove);
    p.style.setProperty("--y", yMove);

    document.body.appendChild(p);

    setTimeout(()=>p.remove(),800);
  }
}
/* 📅 SAYAC */
function updateDays(){

  const startDate = new Date("2025-03-03");

  setInterval(()=>{

    const now = new Date();

    const diff = now - startDate;

    const days = Math.floor(diff / (1000*60*60*24));

    const hours = Math.floor(
      (diff / (1000*60*60)) % 24
    );

    const minutes = Math.floor(
      (diff / (1000*60)) % 60
    );

    const seconds = Math.floor(
      (diff / 1000) % 60
    );

    document.getElementById("days").innerText =
      `${days} gün ${hours} saat ${minutes} dakika ${seconds} saniyedir beraberiz 💖`;

  },1000);
}
/* 🐱 KEDİ */
function startCatsRain(){

  const cats=["🐱","🐈","😺","😻"];

  setInterval(()=>{

    const c=document.createElement("div");
    c.classList.add("cat");
    c.innerText=cats[Math.floor(Math.random()*cats.length)];

    c.style.left=Math.random()*window.innerWidth+"px";

    document.body.appendChild(c);

    setTimeout(()=>c.remove(),4000);

  },500);
}

/* 🌌 YILDIZ */
function startStars(){

  for(let i=0;i<80;i++){

    const s=document.createElement("div");
    s.classList.add("star");

    s.style.left=Math.random()*100+"vw";
    s.style.top=Math.random()*100+"vh";

    document.body.appendChild(s);
  }
}

function screenFX(){

  // 📱 sarsma
  document.body.classList.add("shake");

  setTimeout(()=>{
    document.body.classList.remove("shake");
  },300);

  // 💡 flash
  const flash = document.createElement("div");
  flash.classList.add("flash");
  document.body.appendChild(flash);

  setTimeout(()=>{
    flash.remove();
  },300);

  // 🔊 ses
  const audio = new Audio("pop.mp3");
  audio.volume = 0.5;
  audio.play();
}