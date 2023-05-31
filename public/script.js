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
function infoVinoteca() {

    const viajes = firebase.firestore().collection("turismoAventura"); 
    
    let dataApi=[]
  viajes.get()
    .then((results) => {
    
      const data = results.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      dataApi.push(...data)
      arrayProductosApi = dataApi
    
    console.log(dataApi);
  });
    }
    infoVinoteca()

var titulos = document.querySelectorAll('.titulo');

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

var botonesNav = document.getElementsByClassName("titulo")
var contenedorVistas=document.getElementById("contenedorVistas")
var botonNosotros=document.getElementById("nosotros")
var botonExcursiones=document.getElementById("excursiones")
var botonHospedaje=document.getElementById("hospedajes")
var botonContactos=document.getElementById("contactos")
for (var i = 0; i < botonesNav.length; i++) {
    const elementos = botonesNav[i]
    elementos.addEventListener("click", function (e) {
        imprimir(e.target.id)
    })
}

function imprimir(id) {
  console.log(id);
  switch (id) {
    case "nosotrosP": 
    inicio.style.display="none"
    contenedorVistas.style.display="flex"
    botonNosotros.style.display="none"
    botonExcursiones.style.display="none"
    botonHospedaje.style.display="none"
    botonContactos.style.display="none"
    break;
    case "excursionesP": 
    contenedorVistas.style.display="flex"
    console.log("hello excursionesP");
    break;
    case "hospedajesP": 
    console.log("soy hopedajes");
    break;
    case "contactosP": 
    console.log("soy contactos");
    break;
    case "contactosP": 
    console.log("soy contactos");
    break;
    case "contactosP": 
    console.log("soy contactos");
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
      <div class="carousel-item active">
       <img src="https://firebasestorage.googleapis.com/v0/b/challenge-5ac03.appspot.com/o/climbing-gc2f6480a2_1280.jpg?alt=media&token=641f7aa7-bda2-46c8-80c7-3d8ac9895dfb" class="d-block w-100 dimension" alt="subiendo la montaña">
          <h1 class="tituloOferta">Conquistá el Aconcagua</h1>
          <h2 class="duracion">8 dias y 6 noches <span>Oferta especial! </span></h2>
       <button  type="button" class="btn btn-outline-light botonDetalles" id="detalles1">Más detalles</button>
      </div>
      <div class="carousel-item">
        <img src="https://firebasestorage.googleapis.com/v0/b/challenge-5ac03.appspot.com/o/roya-ann-miller-ojG9qrU_blw-unsplash.jpg?alt=media&token=f337f3a7-549a-4fd8-99fa-ad56d16fceef&_gl=1*1xs5nxr*_ga*ODYwODk4ODUyLjE2NzY3NDc0MTM.*_ga_CW55HF8NVT*MTY4NTQ5MDQwMC4yMi4xLjE2ODU0OTA0MTMuMC4wLjA." class="d-block w-100 dimension" alt="...">
        <h1 class="tituloOferta">Kayak en el delta</h1>
        <h2 class="duracion">4 dias y 3 noches <span>Oferta especial! </span></h2>
        <button type="button" class="btn btn-outline-light botonDetalles" id="detalles2" >Más detalles</button>
      </div>
      <div class="carousel-item">
        <img src="https://firebasestorage.googleapis.com/v0/b/challenge-5ac03.appspot.com/o/kamil-pietrzak-ht1xt4FfmFs-unsplash.jpg?alt=media&token=ed36a84f-9a8a-4e38-8a08-cb37be22aa3d&_gl=1*dxhbtx*_ga*ODYwODk4ODUyLjE2NzY3NDc0MTM.*_ga_CW55HF8NVT*MTY4NTQ5MDQwMC4yMi4xLjE2ODU0OTA1MTMuMC4wLjA." class="d-block w-100 dimension" alt="...">
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
