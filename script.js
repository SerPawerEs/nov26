const btn = document.getElementById('btn')
const card = document.getElementById('card')
const retourn = document.getElementById('retourn')
const contador = document.getElementById('contador')

const audio = new Audio('WannaBeYours.mp3');
const hoy = new Date()
const dia = hoy.getDate()
const mes = hoy.getMonth()
const esperado_d = 26
const esperado_m = 10
const faltan = esperado_d - dia

function wait(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

document.addEventListener('DOMContentLoaded', function(){
  btn.addEventListener('click', () => {
    if (dia == esperado_d && mes == esperado_m){
      window.location.href = 'carta.html'
    }else{
      btn.textContent = "🚫 Todavia no es el momento 🚫"
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

    const text = "Que es lo que no entienes sobre lo mucho que te quiero y te necesito? si confias en mi nunca estarás sola en la vida, no es neceasario que te lastimes ni pienses en nadie más que pueda lastimarte, confia en mi, siempre estaré contigo, nunca te haré daño, solo quiero estar contigo porque te amo, tus abrazos son lo mejor que puedo tener en el mundo. Y mi niña como sabes que realmente luego llegará algo mejor? no odies este mundo, mas bien aseguremos un futuro juntos, solo nosotros sin personas que nos juzguen o nos critiquen, y ya perdi la cuenta de cuantas veces te lo he dicho pero igual te lo recuerdo para que no lo olvides:<br><strong>♥️TE AMO♥️</strong>"

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

document.addEventListener('DOMContentLoaded', function(){
  if (mes == esperado_m){
    if (faltan != 0) {
      if (faltan != 1) {
        contador.innerHTML = `Faltan <strong>${faltan}</strong> días`
      }else{
        contador.innerHTML = `Falta <strong>${faltan}</strong> día`
      }
    }else{
      contador.innerHTML = `¡ES HOY!`
    }
  }
})