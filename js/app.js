const boton = document.querySelector('#button');
const contenedorCards = document.querySelector('.contenedor__cards');
const modal = document.querySelector('#modal')
const modalTitulo = document.querySelector('#modal__titulo');
const modalDescripcion = document.querySelector('#modal__descripcion');
const modalCerrar = document.querySelector('.modal__cerrar');


//Objeto con los diferentes diseños de autos y descripciones
const autos = [
    {
        auto1: 'BMW',
        descripcion: 'Ya sea para viajes cortos o largos, con una autonomía de hasta 460 km* y un consumo eléctrico a partir de 18,5 kWh/100 km*'
    },
    {
        auto2: 'Porsche',
        descripcion2: 'Porsche Aktiengesellschaft, normalmente abreviado como Porsche AG,​ es un fabricante de automóviles alemán especializado en automóviles deportivos de lujo de alta gama.'
    },
    {
        auto3: 'Audi',
        descripcion3: 'Como punta de lanza de la marca está el superdeportivo de motor central y altas prestaciones Audi R8, con potentes motores V8 y V10 capaces de superar holgadamente la barrera de los 300 km/h.'    
    },
    {
        auto4: 'Mustang',
        descripcion4: 'El Ford Mustang es un automóvil deportivo muscle car de dos puertas, producido por el fabricante estadounidense Ford Motor Company desde 1964, como modelo 1964½.1​'
    },
    
    
]


// Evento de delegacion
contenedorCards.addEventListener('click', (e) => {
    if(e.target.classList.contains('auto1')){
        console.log('click auto 1')
        modal.style.display = 'flex';        
        modalTitulo.innerHTML = `${autos[0].auto1}`
        modalDescripcion.innerHTML = `${autos[0].descripcion}`
    } 

    if(e.target.classList.contains('auto2')){
        console.log('click auto 2')
        modal.style.display = 'flex';
        modalTitulo.innerHTML = `${autos[1].auto2}`
        modalDescripcion.innerHTML = `${autos[1].descripcion2}`
    }

    if(e.target.classList.contains('auto3')){
        console.log('click auto 3')
        modal.style.display = 'flex';
        modalTitulo.innerHTML = `${autos[2].auto3}`
        modalDescripcion.innerHTML = `${autos[2].descripcion3}`

    }

    if(e.target.classList.contains('auto4')){
        console.log('click auto 4')
        modal.style.display = 'flex';
        modalTitulo.innerHTML = `${autos[3].auto4}`
        modalDescripcion.innerHTML = `${autos[3].descripcion4}`

    }
})

modalCerrar.addEventListener('click', () => {
    modal.style.display = 'none';
})



