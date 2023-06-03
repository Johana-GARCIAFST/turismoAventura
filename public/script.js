const hamburger = document.querySelector(".hamburger");
const navLinks = document.querySelector(".navbarLinks");
const links = document.querySelectorAll(".navbarLinks li");

hamburger.addEventListener('click', ()=>{
   //Animate Links
    navLinks.classList.toggle("abrir");
    links.forEach(link => {
        link.classList.toggle("cerrar");
    });

    //Hamburger Animation
    hamburger.classList.toggle("palanca");
});
//se llama a la Api en firestore
function infoTurismo() {

    const viajes = firebase.firestore().collection("turismoAventura", "hospedajes"); 
    
    let dataApi=[]
  viajes.get()
    .then((results) => {
    
      const data = results.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      dataApi.push(...data)
      arrayProductosApi = dataApi
    
    console.log(arrayProductosApi);
  arrayProductosApi.forEach(dato =>{
   if(dato.categoria==="aire"){
    aire.push(dato)
   }else if(dato.categoria==="agua"){
    agua.push(dato)
   }else if(dato.categoria==="tierra"){
    tierra.push(dato)
   }else{
    oferta.push(dato)
   }
    
  })
  });
    }
    infoTurismo()

var titulos = document.querySelectorAll('.titulo');
let arrayProductosApi
var aire=[]
var tierra=[]
var agua=[]
var oferta=[]
console.log(aire);
console.log(tierra);
console.log(agua);
console.log(oferta);

titulos.forEach(function(titulo) {
  titulo.addEventListener('mousedown', function() {
    titulo.classList.add('active');
  });


  titulo.addEventListener('touchstart', function() {
    titulo.classList.add('active');
  });

  titulo.addEventListener('mouseup', function() {
    titulo.classList.remove('active');
  });

  titulo.addEventListener('touchend', function() {
    titulo.classList.remove('active');
  });
});

var inicio= document.getElementById("inicio")
var searchContainer=document.getElementById("buscador")
var botonesNav = document.getElementsByClassName("titulo")
var tarjetas=document.getElementById("tarjetas")
var contenedorVistas=document.getElementById("contenedorVistas")
var nosotrosVista=document.getElementById("nosotrosVista")
var botonNosotros=document.getElementById("nosotros")
var botonExcursiones=document.getElementById("excursiones")
var botonHospedaje=document.getElementById("hospedajes")
var botonContactos=document.getElementById("contactos")
var tarjetasVista=document.getElementById("tarjetasVista")
var botonNavInicio=document.getElementById("navInicio")
var botonNavNosotros=document.getElementById("navNosotros")
var botonNavExcursiones=document.getElementById("navExcursiones")
for (var i = 0; i < botonesNav.length; i++) {
    const elementos = botonesNav[i]
    elementos.addEventListener("click", function (e) {
        imprimir(e.target.id)
    })
}

botonNavInicio.addEventListener("click", function(){
 
  inicio.style.display="flex"
  botonNosotros.style.display="flex"
  botonExcursiones.style.display="flex"
  botonHospedaje.style.display="flex"
  botonContactos.style.display="flex" 
contenedorVistas.style.display="none"

imprimir("inicio")

})
botonNavNosotros.addEventListener("click", function(){
 
  inicio.style.display="flex"
  botonNosotros.style.display="flex"
  botonExcursiones.style.display="flex"
  botonHospedaje.style.display="flex"
  botonContactos.style.display="flex" 
  nosotrosVista.style.display="flex"
contenedorVistas.style.display="none"

})
botonNavExcursiones.addEventListener("click", function(){

  inicio.style.display="flex"
  botonNosotros.style.display="flex"
  botonExcursiones.style.display="flex"
  botonHospedaje.style.display="flex"
  botonContactos.style.display="flex" 
  nosotrosVista.style.display="flex"
contenedorVistas.style.display="none"


})




function imprimir(id) {
  console.log(id);
  switch (id) {
    case "nosotrosP": 
    inicio.style.display="none"
    contenedorVistas.style.display="flex"
    botonNosotros.style.display="none"
    botonExcursiones.style.display="none"
    botonHospedaje.style.display="none"
    botonContactos.style.display= "none"
    tarjetasVista.style.display="none"
    searchContainer.style.display="none"
    nosotrosVista.innerHTML=`
    <div>
    <h2>¡Bienvenidos a Turismo Aventura!</h2>
    <p>
        En Turismo Aventura, llevamos más de 20 años creando experiencias inolvidables para los amantes de la aventura y los viajes emocionantes. Somos una empresa apasionada que se ha consolidado como líder en el mercado del turismo de aventura en Argentina.
        Desde nuestros inicios, nos hemos dedicado a ofrecer paquetes turísticos únicos que combinan actividades extremas con la comodidad de un servicio todo incluido. Ya sea que estés buscando adrenalina en las alturas, desafiarte en terrenos agrestes o sumergirte en la naturaleza salvaje, tenemos el plan perfecto para ti.
        Nos enorgullece contar con un equipo de guías expertos, apasionados y certificados, quienes te acompañarán en cada paso de tu aventura, asegurando tu seguridad y brindándote la mejor experiencia posible. Nuestro objetivo es que disfrutes al máximo cada momento, superando tus límites y creando recuerdos que perdurarán toda la vida.
        Además de nuestros emocionantes paquetes turísticos, también ofrecemos una selección de hoteles exclusivos en los destinos más impresionantes de Argentina. Ya sea que prefieras una cabaña acogedora en las montañas o un lujoso alojamiento cerca de la playa, tenemos la opción perfecta para complementar tu experiencia de viaje.
        En Turismo Aventura, valoramos la satisfacción de nuestros clientes por encima de todo. Nos esforzamos por brindarte un servicio personalizado, atención de calidad y momentos memorables que superen tus expectativas. Queremos que cada paso que des con nosotros sea una aventura inolvidable y un motivo para regresar una y otra vez.
        Gracias por elegirnos como tu compañero de viaje. ¡Prepárate para vivir una experiencia extraordinaria!
        Equipo Turismo Aventura.</p>
</div>
`
window.scrollTo({ top: 0, behavior: 'smooth' });
    break;
    case "excursionesP":
      inicio.style.display="none"
      botonNosotros.style.display="none"
      botonExcursiones.style.display="none"
      botonHospedaje.style.display="none"
      botonContactos.style.display="none" 
    nosotrosVista.style.display="none"
    contenedorVistas.style.display="flex"
    tarjetasVista.style.display="flex"
    searchContainer.style.display="flex"
    display(arrayProductosApi)
    console.log("hello excursionesP");
    window.scrollTo({ top: 0, behavior: 'smooth' });
    break;
    case "hospedajesP": 
    console.log("soy hopedajes");
    break;
    case "contactosP": 
    console.log("soy contactos");
    break; 
    default:
      contenedorVistas.style.display="none"
    inicio.innerHTML=`
    
    
    <div id="carouselExampleAutoplaying" class="carousel slide" data-bs-ride="carousel">
    <div class="escalar">
        <img src="./img/turismoAventuraLogo.svg" alt="logo">
    </div>
    <div class="carousel-inner">
      <div class="carousel-item active carrusel">
       <img src="https://firebasestorage.googleapis.com/v0/b/challenge-5ac03.appspot.com/o/climbing-gc2f6480a2_1280.jpg?alt=media&token=641f7aa7-bda2-46c8-80c7-3d8ac9895dfb" class="d-block" alt="subiendo la montaña">
          <h1 class="tituloOferta">Conquistá el Aconcagua</h1>
          <h2 class="duracion">8 dias y 6 noches <span>Oferta especial! </span></h2>
       <button  type="button" class="btn btn-outline-light botonDetalles" id="detalles1">Más detalles</button>
      </div>
      <div class="carousel-item carrusel">
        <img src="https://firebasestorage.googleapis.com/v0/b/challenge-5ac03.appspot.com/o/roya-ann-miller-ojG9qrU_blw-unsplash.jpg?alt=media&token=f337f3a7-549a-4fd8-99fa-ad56d16fceef&_gl=1*1xs5nxr*_ga*ODYwODk4ODUyLjE2NzY3NDc0MTM.*_ga_CW55HF8NVT*MTY4NTQ5MDQwMC4yMi4xLjE2ODU0OTA0MTMuMC4wLjA." class="d-block  dimension" alt="...">
        <h1 class="tituloOferta">Kayak en el delta</h1>
        <h2 class="duracion">4 dias y 3 noches <span>Oferta especial! </span></h2>
        <button type="button" class="btn btn-outline-light botonDetalles" id="detalles2" >Más detalles</button>
      </div>
      <div class="carousel-item carrusel">
        <img src="https://firebasestorage.googleapis.com/v0/b/challenge-5ac03.appspot.com/o/kamil-pietrzak-ht1xt4FfmFs-unsplash.jpg?alt=media&token=ed36a84f-9a8a-4e38-8a08-cb37be22aa3d&_gl=1*dxhbtx*_ga*ODYwODk4ODUyLjE2NzY3NDc0MTM.*_ga_CW55HF8NVT*MTY4NTQ5MDQwMC4yMi4xLjE2ODU0OTA1MTMuMC4wLjA." class="d-block  dimension" alt="...">
        <h1 class="tituloOferta">Paracaidismo en Mendoza</h1>
        <h2 class="duracion">2 dias y 1 noche <span>Oferta especial! </span></h2>
        <button type="button" class="btn btn-outline-light botonDetalles" id="detalles3">Más detalles</button>
      </div>
    </div>
    <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="prev">
      <span class="carousel-control-prev-icon" aria-hidden="true"></span>
      <span class="visually-hidden">Previous</span>
    </button>
    <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="next">
      <span class="carousel-control-next-icon" aria-hidden="true"></span>
      <span class="visually-hidden">Next</span>
    </button>
  </div>
    
    
    
    `
  
  }
}
imprimir()



function display(array) {
  let tarjetasHTML = "";
  for ( i = 0; i < array.length; i++) {
      tarjetasHTML += `
      <div class="tarjeta"> 
      <img src="${array[i].imagen}" alt="">
      <div class="fondo">
          <h2>
              ${array[i].titulo}
          </h2>
          <div>
              <p><i class="fa-solid fa-location-dot" style="color: #ffffff;"></i>${array[i].lugar}</p>
              <p><i class="fa-solid fa-calendar-days" style="color: #ffffff;"></i> ${array[i].fecha}</p>
              <p>Aventura en ${array[i].categoria}</p>
          </div>
          <div>
             
              <button type="button" class="btn btn-outline-light botonDetalles" id="${array[i].id}" >Más detalles</button>
          </div>
      </div> 
      </div>
      `
  }
  tarjetasVista.innerHTML = tarjetasHTML
}
