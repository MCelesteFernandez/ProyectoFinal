
let formaciones=[
    {
        id:'1',
        titulo:"Bachiller en Ciencias Naturales",
        estado:"Finalizado",
        institucion:"Escuela Normal Tte. Gral. Julio A. Roca",
        lugar:"Monteros, Tucumán, Argentina"
    },
    {   
        id:'2',
        titulo:"Profesorado de Lengua y Literatura",
        estado:"En Curso",
        institucion:"CEDSa",
        lugar:"Monteros, Tucumán, Argentina"
    },
    {   
        id:'3',
        titulo:"Farmacia",
        estado:"En Curso",
        institucion:"FBQF - UNT",
        lugar:"San Miguel de Tucumán, Tucumán, Argentina"
    }
]

let experiencias=[
    {   
        id:'1',
        titulo:"Auxiliar Docente Cátedra Matemática 2",
        empresa:"FBQF - UNT",
        inicio:2022,
        fin:"En Curso"
    },
    {   
        id:'2',
        titulo:"Atención al cliente",
        empresa:"Vivero San Antonio",
        inicio:2015,
        fin:2022
    },
    {   
        id:'3',
        titulo:"Venta de Artículos Electrónicos",
        empresa:"Emprendimiento propio",
        inicio:2018,
        fin:2020
    }
]
function renderFormacion(){
    let articuloContenedor=document.getElementById('formacion');

    for (let item of formaciones){
        let itemFormacion=document.createElement('div');
        itemFormacion.setAttribute('name',item.id);
        itemFormacion.innerHTML='<h3>'+item.titulo+'</h3>'+'<button onclick=openClose(this) name="'+item.titulo+'">Ver más</button>';
        
        let detalles=document.createElement('p');
            detalles.setAttribute('id', item.titulo);
            detalles.style.display='none';
            detalles.innerHTML=     '<p class="subP">'+item.estado+'</p>'+
                                '<p class="subP">'+item.institucion+'</p>'+
                                '<p class="subP">'+item.lugar+'</p>';
        itemFormacion.appendChild(detalles)
        articuloContenedor.appendChild(itemFormacion);
    }
}

function openClose(e){

    let elementos=document.getElementById(e.name);
    if(elementos.style.display!='none'){
        elementos.style.display='none'
        e.innerHTML='Ver más'
        
    }else{
        elementos.style.display='block'
        e.innerHTML='Cerrar'
    }

}

function renderExperiencia(){

    let articuloContenedor=document.getElementById('experiencia');

    for (let item of experiencias){
        let itemExperiencia=document.createElement('div');
        itemExperiencia.setAttribute('name',item.id);
        itemExperiencia.innerHTML='<h3>'+item.titulo+'</h3>'+'<button onclick=openClose(this) name="'+item.titulo+'">Ver más</button>';
        
        let detalles=document.createElement('p');
            detalles.style.display='none';
            detalles.setAttribute('id', item.titulo);
            detalles.innerHTML=     '<p class="subP">'+item.empresa+'</p>'+
                                '<p class="subP">'+item.inicio+' - '+item.fin+'</p>';
        
        itemExperiencia.appendChild(detalles)
        articuloContenedor.appendChild(itemExperiencia);
    }
}

function ingresarDatos(){

    let nombre=prompt('Ingrese su nombre: ')
    let asunto

}
