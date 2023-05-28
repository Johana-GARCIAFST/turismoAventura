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
