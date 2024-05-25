/* Estimados Tutores y Profesor quisiera aclarar que mi idea para proyecto final es intentar realizar el Juego de Naipes "Truco". En el caso de esta pre-entrega, debido a las pocas
herramientas que se nos permite utilizar, no la vincule a la mencionada idea de proyecto final ya que no podría uilizar objetos y/o array que me serviría para el proyecto.
Por otro lado, esta pre-entrega no es el código mas limpio que se podría hacer, pero la hice priorizando que sea funcional y que utilice todas las herramientas mencionadas en clase.

Saludos, gracias por leer. */

const rata = 1900
const buey = 1901
const tigre = 1902
const conejo = 1903
const dragon = 1904
const serpiente = 1905
const caballo = 1906
const cabra = 1907
const mono = 1908
const gallo = 1909
const perro = 1910
const cerdo = 1911

const acuario = 'Acuario: \n\Nunca te contestarán a un WhatsApp. Acuario representa la libertad y la rebeldía, por lo que la última cosa que harán será estar pendientes de los mensajes que les llegan. No es que no quieran comprometerse, pero prefieren no tener ataduras. El rasgo principal de la personalidad de los Acuario es que no suelen concentrarse en un solo camino.'
const piscis = 'Piscis: \n\Es el signo más creativo del horóscopo. Esto les permite ser los más originales, pero también se hacen unas películas en la cabeza que se acaban creyendo. Viven más en las nubes que en el presente, lo que les hace también estar bastante fuera de sí. La empatía es su fuerte.'
const aries = 'Aries: \n\La iniciativa es el punto fuerte de la personalidad de Aries. Son los que siempre van un paso por delante, animan al resto a hacer lo mismo y de los signos en los que más puedes confiar. Eso sí, sacarán lo peor de ellos -impulsividad, impaciencia y egoísmo -si no estás a la altura de su energía. No son fáciles de llevar.'
const tauro = 'Tauro: \n\Tauro es uno de los signos más centrados del horóscopo, porque su lealtad es difícil de conseguir. Pero una vez la tengas, será para siempre. Pocas veces pierden la paciencia o hacen papelitos en público. Solo cuando les empiezan a discutir algo en lo que saben que tienen razón. Si no la tienen, también la lucharán.'
const geminis = 'Géminis: \n\Cambiantes como los gemelos que representan su imagen. Uno de los rasgos de la personalidad de Géminis es que suele tener miedo al compromiso, ya que sus decisiones duran poco tiempo estables y cambian de opinión muy rápido. Son excelentes oradores. Cualquier cosa que salga por su boca te la creerás.'
const cancer = 'Cáncer: \n\Son los más sensibles del zodiaco. Son conocidos por dramáticos bajo cualquier circunstancia, pero lo que quizá no sepas es que estas enormes emociones que experimentan les hace ser los más empáticos del horóscopo. Son personas muy especiales, y ojito cuando se enojan.'
const leo = 'Leo: \n\Cuando un Leo entra en un lugar, se nota. Su presencia y luz llenan el sitio... y a estos les encantan que suceda. Son bastante egocéntricos, valoran muchísimo el físico de los demás y siempre sacarán lo mejor de ti. Seres superiores gobernados por el Sol.'
const virgo = 'Virgo: \n\Analíticos y ordenados. No hay detalle que se le escape, aunque el gran problema de la personalidad de los Virgo está en lo poco que fluyen. Necesitan saber cuándo y a qué hora para poder hacerlo. Siempre están pensando en lo que pasará después y muchas veces no viven el presente como deberían.'
const libra = 'Libra: \n\Los Libra son los más románticos del horóscopo, aunque también los más dudosos. Mala combinación si tenemos en cuenta que sopesan cada decisión que toman una media de mil veces. También se les reconoce por su elegancia y por no perder nunca los estribos (aunque lo estén deseando). Su misión está en echarse por la borda sin reflexionar tanto.'
const escorpio = 'Escorpio: \n\Intensidad. No hay palabra que mejor defina la personalidad de Escorpio. Para todo, además: el amor, trabajo, discusiones, sexo, trabajo... Sin embargo, cuando salen heridos tratan de darlo todo, se cierran en banda y debes tener cuidado porque poseen bastante mal carácter. Sí, son los típicos que siempre te contestan mal.'
const sagitario = 'Sagitario: \n\La buena suerte la poseen ellos, gracias a que Júpiter es su planeta regente. Los Sagitario son los que siempre encuentran estacionamiento a la primera, los que consiguen las mejores ofertas... Le sale todo tan bien, que se enojan muchísimo cuando algo no sale bien. Al igual, les encanta expandir todos sus conocimientos.'
const capricornio = 'Capricornio: \n\Cuerpo a tierra si tu intención es discutir con un Capricornio. Cuando algo se les mete entre ceja y ceja, es mejor quitarles la cabeza que la idea. El principal rasgo de la personalidad de los Capricornio es que son muy, muy testarudos, y pocas veces reconocen su error. Su sentido de la responsabilidad asciende a niveles extremos y suelen ser bastante workaholics'

function calculoHoroscopo(año, inicio) {
    let valor = false
    for (i = 0; i <= 12; i++) {
        let compara = inicio + (i * 12)
        //console.log(compara)
        if (año == compara) {
            valor = true
        }
    }

    return valor
}

function horoscopoChino() {
    let año = Number(prompt('Comencemos. Ingresa tu AÑO de nacimiento'))

    while (true) {
        if (isNaN(año)) {
            año = Number(prompt('Por favor ingresa un número para indicar tu AÑO de nacimiento'))
        } else if (año < 1900 || año > 2024) {
            año = Number(prompt('Por favor ingresa un valor entre 1900 y 2024'))
        } else {
            break
        }
    }

    if (calculoHoroscopo(año, rata)) {
        alert('Tu eres Rata, y sus características son: ingenios@s, hábiles, versátiles, amables, inteligentes y encantador@s')
    }
    if (calculoHoroscopo(año, buey)) {
        alert('Tu eres Buey, y sus características son: trabajador@s, duros en el fondo, inteligentes, confiables y nunca exigen elogios')
    }
    if (calculoHoroscopo(año, tigre)) {
        alert('Tu eres Tigre, y sus características son: valientes y activos que adoran un buen desafío o una aventura')
    }
    if (calculoHoroscopo(año, conejo)) {
        alert('Tu eres Conejo, y sus características son: sinceros con todo lo que hacen y solo piden que otros los traten de la misma manera')
    }
    if (calculoHoroscopo(año, dragon)) {
        alert('Tu eres Dragon, y sus características son: fuertes e independientes, pero solo quieren apoyo y amor')
    }
    if (calculoHoroscopo(año, serpiente)) {
        alert('Tu eres Serpiente, y sus características son: tienen una mente compleja pero, si dan el paso, es para siempre')
    }
    if (calculoHoroscopo(año, caballo)) {
        alert('Tu eres Caballo, y sus características son: espíritus libres que necesitan espacio para ser ellos mismos')
    }
    if (calculoHoroscopo(año, cabra)) {
        alert('Tu eres Cabra, y sus características son: amoros@s y desinteresad@s, que siempre piensan en los demás, incluso encima de sus propios intereses')
    }
    if (calculoHoroscopo(año, mono)) {
        alert('Tu eres Mono, y sus características son: bromistas y alegres con la capacidad de lograr todos sus sueños')
    }
    if (calculoHoroscopo(año, gallo)) {
        alert('Tu eres Gallo, y sus características son: personas complejas que parecen fuertes, pero necesitan la validación de sus seres queridos')
    }
    if (calculoHoroscopo(año, perro)) {
        alert('Tu eres Perro, y sus características son: leales, honest@s, amables, afables, cautelos@s y prudentes')
    }
    if (calculoHoroscopo(año, cerdo)) {
        alert('Tu eres Cerdo, y sus características son: muy realistas, con una personalidad muy buena y una suerte enorme')
    }
}

function horoscopoZodiacal() {
    let dia;
    let mes = Number(prompt('Por favor ingrese número MES de nacimiento'));
    while (true) {
        if (isNaN(mes)) {
            mes = Number(prompt('Por favor ingrese valor numérico para indicar MES'))
        } else if (mes < 1 || mes > 12) {
            mes = Number(prompt('Por favor ingrese un valor entre 1 y 12 para indicar MES'))
        } else {
            dia = Number(prompt('Por favor ingrese un valor del DÍA de nacimiento'))
            while (true) {
                if (isNaN(dia)) {
                    dia = Number(prompt('Por favor ingrese valor numérico para indicar DÍA'))
                } else if (dia < 1 || dia > 31) {
                    dia = Number(prompt('Por favor ingrese un valor entre 1 y 31'))
                } else if ((mes == 2 || mes == 4 || mes == 6 || mes == 9 || mes == 11) && dia == 31) {
                    dia = Number(prompt('El mes seleccionado no tiene 31 días. Ingrese nuevamente valor del DÍA'))
                } else if (mes == 2 && dia == 30) {
                    dia = Number(prompt('Febrero no tiene 30 días. Ingrese nuevamente valor del DÍA'))
                } else {
                    break
                }
            }
            break
        }
    }
    if((mes == 1 && dia > 19 ) || (mes == 2 && dia < 19)){
        alert(acuario)
    }
    if((mes == 2 && dia > 18 ) || (mes == 3 && dia < 21)){
        alert(piscis)
    }
    if((mes == 3 && dia > 20 ) || (mes == 4 && dia < 20)){
        alert(aries)
    }
    if((mes == 4 && dia > 19 ) || (mes == 5 && dia < 21)){
        alert(tauro)
    }
    if((mes == 5 && dia > 20 ) || (mes == 6 && dia < 21)){
        alert(geminis)
    }
    if((mes == 6 && dia > 20 ) || (mes == 7 && dia < 23)){
        alert(cancer)
    }
    if((mes == 7 && dia > 22 ) || (mes == 8 && dia < 23)){
        alert(leo)
    }
    if((mes == 8 && dia > 22 ) || (mes == 9 && dia < 23)){
        alert(virgo)
    }
    if((mes == 9 && dia > 22 ) || (mes == 10 && dia < 23)){
        alert(libra)
    }
    if((mes == 10 && dia > 22 ) || (mes == 11 && dia < 22)){
        alert(escorpio)
    }
    if((mes == 11 && dia > 21 ) || (mes == 12 && dia < 22)){
        alert(sagitario)
    }
    if((mes == 12 && dia > 21 ) || (mes == 1 && dia < 20)){
        alert(capricornio)
    }
    

}

if (confirm('¡Bienvenido a "Conoce tu Horoscopo" ¿Comenzamos?')) {
    let horoscopo
    let verifica = true
    do {
        horoscopo = Number(prompt('Qué horoscopo te interesa conocer? (Indica el número de tu elección): \n\ 1- Horoscopo Chino \n\ 2- Horóscopo Zodiacal'))
        switch (horoscopo) {
            case 1:
                horoscopoChino()
                verifica = false
                break;
            case 2:
                horoscopoZodiacal()
                verifica = false
                break;
            default:
                horoscopo = alert('Recuerde que debe ingresar un número válido: \n\ 1- Horoscopo Chino \n\ 2- Horóscopo Zodiacal')
        }

    } while (verifica)
    
    alert('Gracias por utilizar "Conoce tu Horoscopo"')
}