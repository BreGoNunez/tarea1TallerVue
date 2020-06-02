class persona {
  obtener() {
    var usu = document.getElementById("Usuarios").value; //obtengo valor del usuario del txtfield

    var contra = document.getElementById("Contrasenas").value; //obtengo valor de la contrasena del txtfield

    this.f(usu, contra); //llamo a la funcion sin nombre que verifica si la informacion es correcta\
    this.getPokemon("pikachu"); //llamo a la funcion asincrona y le mando pikachu de parametro para que reciba el json de Pikachu
  }

  f = function (usua, contrase) {
    function verificar() {
      if (usua == "brego" && contrase == "123") {
        alert("Bienvenido " + usua);
      } else alert("Usuario no valido");
    }
    verificar();
  };

  async getPokemon(nombrePokemon) {
    const response = await axios.get(
      "https://pokeapi.co/api/v2/pokemon/" + nombrePokemon
    );
    console.log(response); //imprime en consola el json con toda la info del pokemon en el parametro

    alert(nombrePokemon);
  }
}

function sayItOutLoud(id) {
  const message = document.getElementById(id).value;

  var speech = new SpeechSynthesisUtterance();
  speech.lang = "es-US";

  speech.text = message;
  speech.volume = 1;
  speech.rate = 1;
  speech.pitch = 1;
  window.speechSynthesis.speak(speech);
}

var bolas = anime({
  targets: "div.box",

  translateX: [
    { value: 960, duration: 1000 },
    { value: 450, duration: 1000 },
  ],
  delay: anime.stagger(1000),

  loop: true,
});

bolas.restart;
var nuevo = new persona();
