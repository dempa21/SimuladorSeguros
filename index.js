const formularioUsuario = document.getElementById('formulario')
const titulo = document.getElementById('titulo')
const nombreUsuario = document.getElementById('nombre')
const apellidoUsuario = document.getElementById('apellido')

// obj para guardar info del usuario
const infoUsuario = {}

// evento submit
formularioUsuario.onsubmit = (e) =>{
    e.preventDefault()
    infoUsuario.nombre = nombreUsuario.value
    infoUsuario.apellido = apellidoUsuario.value
    //console.log(infoUsuario)
    localStorage.setItem('infoUsuario',JSON.stringify(infoUsuario))
}

// formularioUsuario.onsubmit = (e) =>{
//     e.preventDefault()
//     localStorage.setItem('nombreUsuario',nombreUsuario.value)
//     localStorage.setItem('apellidoUsuario',apellidoUsuario.value)
// }

const infoUsuarioStorage = JSON.parse(localStorage.getItem('infoUsuario'))
console.log(infoUsuarioStorage)
if(infoUsuarioStorage.nombre !== "" || infoUsuarioStorage.apellido !== ""){
    titulo.innerText = `Hola ${infoUsuarioStorage.nombre} ${infoUsuarioStorage.apellido}, bienvenido de vuelta`
}



const botonIngresar = document.getElementById('ingresar')
const divInicial = document.getElementById('divInicial')


document.body.appendChild(formularioUsuario);
// arreglo de marcas
const marcas = [
  {
    tipo: 'renault',
    tasa: 0.5,
  },
  {
    tipo: 'chevrolet',
    tasa: 0.8,
  },
  {
    tipo: 'ford',
    tasa: 1.5,
  },
]

const modelos = [
  {
    tipo: 'kangoo',
    tasa: 0.5,
  },
  {
    tipo: 'corsa',
    tasa: 0.8,
  },
  {
    tipo: 'ka',
    tasa: 1.5,
  },
]

// escuchar eventos
//botonIngresar.addEventListener('click',)
botonIngresar.onclick = () => {
    
      // eliminando un div del DOM
      formularioUsuario.remove()
      divInicial.remove()
      crearDiv()

      const buttonC = document.createElement('button')
      buttonC.onclick = () => {
        const tasaModeloEscogido = modelos.find(
          (modelo) => modelo.tipo === modeloEscogido
        ).tasa
        console.log(tasaModeloEscogido)
        }
    }

const Calculator = document.getElementById('calculator')

function crearDiv() {
  // arreglo de marcas
const modelos = [
  {
    tipo: 'kangoo',
    tasa: 0.5,
  },
  {
    tipo: 'corsa',
    tasa: 0.8,
  },
  {
    tipo: 'ka',
    tasa: 1.5,
  },
]
Calculator.setAttribute('class','calculator')
const h1C = document.createElement('h1')
const pC = document.createElement('p')
const inputC = document.createElement('input')
const pKms = document.createElement('p')
const inputKms = document.createElement('input')
const h2C = document.createElement('h2')
const buttonC = document.createElement('button')
const pM = document.createElement('p')
const pMo = document.createElement('p')


h1C.innerText = 'Calculadora seguro auto'
pC.innerText = 'Ingresá el año del modelo:'
pC.append(inputC)
pKms.innerText = 'Ingresá los kms. recorridos:'
pKms.append(inputKms)
inputC.setAttribute('id','modelo')
inputC.setAttribute('type','number')
// inputC.setAttribute('onchange','Calculate()')

inputKms.setAttribute('id','cantidadKms')
inputKms.setAttribute('type','number')
// inputKms.setAttribute('onchange','Calculate()')

buttonC.setAttribute('type','button')
buttonC.setAttribute('id','boton')
buttonC.innerText = 'CALCULAR'

h2C.setAttribute('id','total')

pM.innerText = 'Marca: '

// creat select con marcas
const select = document.createElement('select')
select.setAttribute('id', 'selectMarca')
// crear opciones de riesgos de forma dinamica
marcas.forEach((marca) => {
  const optionMarca = document.createElement('option')
  optionMarca.innerText = `${marca.tipo}`
  select.append(optionMarca)
})

pMo.innerText = 'Modelo: '


// creat select con modelos
const selectM = document.createElement('select')
selectM.setAttribute('id', 'selectModelo')
// crear opciones de riesgos de forma dinamica
modelos.forEach((modelo) => {
  const optionModelo = document.createElement('option')
  optionModelo.innerText = `${modelo.tipo}`
  selectM.append(optionModelo)
})

pMo.append(selectM)

buttonC.onclick = () => {
  const modeloEscogido = document.getElementById('selectModelo').value
  const tasaModeloEscogido = modelos.find(
    (modelo) => modelo.tipo === modeloEscogido
  ).tasa
  // console.log(tasaMarcaEscogido)
  Calculate();
  }
  function Calculate() {
  
    const buttonC = document.createElement('button')
    const marcaEscogido = document.getElementById('selectMarca').value
    const modeloEscogido = document.getElementById('selectModelo').value
    const tasaModeloEscogido = modelos.find(
      (modelo) => modelo.tipo === modeloEscogido
    ).tasa
    // Extracting value in the amount 
    // section in the variable
    const modeloInput = document.querySelector("#modelo").value;
  
    // Extracting value in the interest
    // rate section in the variable
    const cantidadKms = document.querySelector("#cantidadKms").value;
  
    // Calculando precio según kms recorridos por mes
    const interest = 2500-((2022-modeloInput)*140);
    const interestkms = cantidadKms*0.01;

    if(modeloInput < 2005) {
        interest = 50;
    }

    buttonC.onclick = () => {
      const marcaEscogido = document.getElementById('selectMarca').value
      const modeloEscogido = document.getElementById('selectModelo').value
      const tasaModeloEscogido = modelos.find(
        (modelo) => modelo.tipo === modeloEscogido
      ).tasa
      console.log(tasaModeloEscogido)
      }
    
    if ((marcaEscogido === 'renault') && (modeloEscogido === 'kangoo')) {
      modelos[0].tasa = 0.5
    }

    if ((marcaEscogido === 'chevrolet') && (modeloEscogido === 'corsa')) {
      modelos[1].tasa = 0.8
    }

    if ((marcaEscogido === 'ford') && (modeloEscogido === 'ka')) {
      modelos[2].tasa = 1.5
    }
    // Calculating total payment
    const total = ((interest+interestkms)*tasaModeloEscogido).toFixed(2);
  
    document.querySelector("#total")
        .innerHTML = "EMI : $" + total;
}  


Calculator.append(h1C,pC,pKms,pM,select,pMo,buttonC,h2C)

}












