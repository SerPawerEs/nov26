const btn = document.getElementById('btn')
const card = document.getElementById('card')
const audio = new Audio('WannaBeYours.mp3');
const retourn = document.getElementById('retourn')
const today = false

function wait(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

document.addEventListener('DOMContentLoaded', function(){
  btn.addEventListener('click', () => {
    if (today == true){
      window.location.href = 'carta.html'
    }else{
      btn.textContent = "Todavia no es el momento"
    }
  })
})

document.addEventListener('DOMContentLoaded', function(){
  retourn.addEventListener('click', () => {
    window.location.href = '/nov26'
  })
})

document.addEventListener('DOMContentLoaded', function(){
  card.addEventListener('click', () => {

    const text = "Que es lo que no entienes sobre lo mucho que te quiero y te necesito? si confias en mi nunca estarás sola en la vida, no es neceasario que te lastimes ni pienses en nadie más que pueda lastimarte, confia en mi, siempre estaré contigo, nunca te haré daño, solo quiero estar contigo porque te amo, tus abrazos son lo mejor que puedo tener en el mundo. Y mi niña como sabes que realmente luego llegará algo mejor? no odies este mundo, mas bien aseguremos un futuro juntos, solo nosotros sin personas que nos juzguen o nos critiquen, y ya perdi la cuenta de cuantas veces te lo he dicho pero igual te lo recuerdo para que no lo olvides:<br>♥️TE AMO♥️"

    card.innerHTML = text
    card.className = 'txt'

    if (audio.paused){
      audio.volume = 0.4
      audio.play()
      audio.loop = true
    }else{
      audio.pause()
    }
  })
})



document.addEventListener('DOMContentLoaded', () => {
  const contenedor1 = document.getElementById('cont1');
  if (contenedor1) {
    const randomLeft = 5 + Math.random() * 90;
    contenedor1.style.left = randomLeft + '%';
  }
});

document.addEventListener('DOMContentLoaded', () => {
  const contenedor2 = document.getElementById('cont2');
  if (contenedor2) {
    const randomLeft = 5 + Math.random() * 90;
    contenedor2.style.left = randomLeft + '%';
  }
});

document.addEventListener('DOMContentLoaded', () => {
  const contenedor3 = document.getElementById('cont3');
  if (contenedor3) {
    const randomLeft = 5 + Math.random() * 90;
    contenedor3.style.left = randomLeft + '%';
  }
});

document.addEventListener('DOMContentLoaded', () => {
  const contenedor4 = document.getElementById('cont4');
  if (contenedor4) {
    const randomLeft = 5 + Math.random() * 90;
    contenedor4.style.left = randomLeft + '%';
  }
});

document.addEventListener('DOMContentLoaded', () => {
  const contenedor5 = document.getElementById('cont5');
  if (contenedor5) {
    const randomLeft = 5 + Math.random() * 90;
    contenedor5.style.left = randomLeft + '%';
  }
});

document.addEventListener('DOMContentLoaded', () => {
  const contenedor6 = document.getElementById('cont6');
  if (contenedor6) {
    const randomLeft = 5 + Math.random() * 90;
    contenedor6.style.left = randomLeft + '%';
  }

});

