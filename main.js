const apiConsulta = document.getElementById("atrapalos");
let nombre,
  exp = 0,
  imagen,
  experiencia = 0,
  llamadas = 0;

const pokeRandom = () => {
  if (llamadas > 4) { 
    if(llamadas==4)
    expTotal(sumaExp())
    else
    return 
  }
  
  let poketemporal = Math.floor(Math.random() * (151 - 1 + 1) + 1);

  añadeColeccion(poketemporal);
  sumaExp(poketemporal);

  llamadas += 1;
  console.log("van: " + llamadas);
};

function añadeColeccion(poketemporal) {
  document.getElementById(
    "foto"
  ).src = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${poketemporal}.png`;
  document.querySelector(".coleccion");
  const imagen = document.createElement("img");
  imagen.src = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${poketemporal}.png`;
  imagen.class = "initColec";
  coleccion.appendChild(imagen);
}

function sumaExp(poketemporal) {
  fetch(`https://pokeapi.co/api/v2/pokemon/${poketemporal}`)
    .then((response) => response.json())
    .then((data) => {
      exp += data.base_experience;
      document.querySelector("#puntaje").innerHTML =
        "Tu experiencia inicial es:" + exp;
    });
    console.log(exp)
   // expTotal(exp)
    return (exp)
}

function expTotal(suma){
  console.log("very total" +suma)

}

apiConsulta.addEventListener("click", pokeRandom);
