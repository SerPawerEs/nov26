// ID
const btn = document.getElementById('btn')
const card = document.getElementById('card')
const retourn = document.getElementById('retourn')
const contador = document.getElementById('contador')
const intro = document.getElementById('intro')
const timer = document.getElementById('timer')
// Elements
const audio = new Audio('WannaBeYours.mp3');

const nombre = 'nov26'
const version = '1.6'
//MSG
const text = "<strong>Feliz cumpleaños mi niña 🌸</strong><br><br>¿Qué es lo que no entiendes sobre lo mucho que te quiero?<br><br>Si confías en mí, no vas a estar sola. No necesitas lastimarte, ni aguantar a quien te haga daño, ni dudar de tu valor. Aquí estoy yo contigo.<br><br>Nunca te haré daño. Solo quiero estar a tu lado, porque eres muy buena compañia, y tus abrazos son muy lindos y tiernos.<br><br>Y dime… ¿cómo sabes que algo mejor no va a llegar? No odies este mundo. Mejor disfrutale que en algun momento encontrarás a esa peronsa que te valore y que tu puedas amar, sin juicios, sin críticas, solo ustedes.<br><br>Y recuerda siempre que <br><br><strong>♥️ TE QUIERO MUCHO ♥️</strong><br><br>No por decirlo como costumbre<br>sino porque eres muy importante, y mi vida es mejor contigo en ella.<br><br>Feliz cumpleaños, mi querida mejor amiga."
const txt1 = "<strong>💖¡¡FELIZ CUMPLEAÑOS!!💖</strong><br>Luna, te quiero muchooo, eres muy imporatnte para mi y sin ti mi vida no seria igual"
const txt2 = "♥️ Lo que falta para <strong>tu cumple</strong> ♥️"

/* Pagina 1 */

document.addEventListener('DOMContentLoaded', function(){
  function TimeUpdate() {
    //Variables de tiempo
    const hoy = new Date()
    const dia = hoy.getDate()
    const mes = hoy.getMonth()
    const esperado_d = 26
    const esperado_m = 10

    const seg = hoy.getSeconds()
    const min = hoy.getMinutes()
    const hora = hoy.getHours()
    const seg_f = 60-seg
    const min_f = 60-min
    const hora_f = 24-hora
    const dia_f = esperado_d - dia
    const tiempo_faltante = `<br>${dia_f-1} dia(s)<br>${hora_f-1} hora(s)<br>${min_f-1} minutos<br>${seg_f-1} segundos`

    if (dia == esperado_d && mes == esperado_m){
      contador.innerHTML = `ES HOY!!`
      intro.innerHTML = txt1
      btn.innerHTML = 'Te tengo un mensajito 📩'
    }else{
      intro.innerHTML = txt2
      if (mes == esperado_m){
        if (dia_f > 0) {
          contador.innerHTML = `Esperando: <strong>${tiempo_faltante}</strong>`
        }else{
          contador.innerHTML = `Ya pasó disfruta tu mes`
        }
      }else{
        if (esperado_m-mes > 0){
          contador.innerHTML = `Meses: ${esperado_m - mes}`
        }else{
          contador.innerHTML = `Espera al otro año...`
        }
      }
    }

    btn.addEventListener('click', () => {
      if (dia == esperado_d && mes == esperado_m){
        window.location.href = 'carta.html'
      }else{
        btn.innerHTML = '🚫 Todavia no es el momento 🚫'
      }
    })
  }

  TimeUpdate()
  setInterval(TimeUpdate, 1000)
})


/* Pagina 2 */

document.addEventListener('DOMContentLoaded', function(){
  retourn.addEventListener('click', () => {
    window.location.href = `/${nombre}`
  })

  card.addEventListener('click', () => {

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

/* General */

document.addEventListener('DOMContentLoaded', function(){
  console.log(`Update: ${version}`)

})

