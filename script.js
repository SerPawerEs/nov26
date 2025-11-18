// ID
const btn = document.getElementById('btn')
const card = document.getElementById('card')
const retourn = document.getElementById('retourn')
const contador = document.getElementById('contador')
const intro = document.getElementById('intro')
const timer = document.getElementById('timer')
// Elements
const audio = new Audio('WannaBeYours.mp3');
const version = '1.2'
//MSG
const text = "Que es lo que no entienes sobre lo mucho que te quiero y te necesito? si confias en mi nunca estarás sola en la vida, no es neceasario que te lastimes ni pienses en nadie más que pueda lastimarte, confia en mi, siempre estaré contigo, nunca te haré daño, solo quiero estar contigo porque te amo, tus abrazos son lo mejor que puedo tener en el mundo. Y mi niña como sabes que realmente luego llegará algo mejor? no odies este mundo, mas bien aseguremos un futuro juntos, solo nosotros sin personas que nos juzguen o nos critiquen, y ya perdi la cuenta de cuantas veces te lo he dicho pero igual te lo recuerdo para que no lo olvides:<br><strong>♥️TE AMO♥️</strong>"
const txt1 = "<strong>💖¡¡FELIZ CUMPLEAÑOS!!💖</strong><br>Amor, te amo muchooo con toda mi alma, mi vida con todo mi ser, de verdad que te necesito conmigo y sin ti no se que hacer"
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
    window.location.href = '/nov26'
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
