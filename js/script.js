//TODO Milestone 1 Partendo dalla seguente struttura dati , mostriamo in pagina tutte le icone disponibili come da layout. 
const icons = [
    {
        name: 'cat',
        prefix: 'fa-',
        type: 'animal',
        family: 'fas',
    },
    {
        name: 'crow',
        prefix: 'fa-',
        type: 'animal',
        family: 'fas',
    },
    {
        name: 'dog',
        prefix: 'fa-',
        type: 'animal',
        family: 'fas',
    },
    {
        name: 'dove',
        prefix: 'fa-',
        type: 'animal',
        family: 'fas',
    },
    {
        name: 'dragon',
        prefix: 'fa-',
        type: 'animal',
        family: 'fas',
    },
    {
        name: 'horse',
        prefix: 'fa-',
        type: 'animal',
        family: 'fas',
    },
    {
        name: 'hippo',
        prefix: 'fa-',
        type: 'animal',
        family: 'fas',
    },
    {
        name: 'fish',
        prefix: 'fa-',
        type: 'animal',
        family: 'fas',
    },
    {
        name: 'carrot',
        prefix: 'fa-',
        type: 'vegetable',
        family: 'fas',
    },
    {
        name: 'apple-alt',
        prefix: 'fa-',
        type: 'vegetable',
        family: 'fas',
    },
    {
        name: 'lemon',
        prefix: 'fa-',
        type: 'vegetable',
        family: 'fas',
    },
    {
        name: 'pepper-hot',
        prefix: 'fa-',
        type: 'vegetable',
        family: 'fas',
    },
    {
        name: 'user-astronaut',
        prefix: 'fa-',
        type: 'user',
        family: 'fas',
    },
    {
        name: 'user-graduate',
        prefix: 'fa-',
        type: 'user',
        family: 'fas',
    },
    {
        name: 'user-ninja',
        prefix: 'fa-',
        type: 'user',
        family: 'fas',
    },
    {
        name: 'user-secret',
        prefix: 'fa-',
        type: 'user',
        family: 'fas',
    },
];


//* inizializzo il filtro degli elementi all'inizio del ciclo
const filterType = document.getElementById("filter-select");
filterType.value = 'all';

//* stampo tutte le icone all'interno dell'HTML
//! Tutto questo viene sovrascritto dalle icone colorate stampate successivamente per cui ho fatto la funzione per resettare l'html. Il forEach successivo può anche essere eliminato
icons.forEach((element,index) => {
    const {name, prefix, family} = element;

    document.getElementById('icons').innerHTML += 
    `<div id="icon-${index}">
        <i class="${family} ${prefix}${name}"></i>
        <div class="uppercase">${name}</div>
    </div>`
});



//TODO Milestone 2 Coloriamo le icone per tipo
//* aggiungo i colori all'interno dell'oggetto come proprietà
const colorIcon = icons.map((element) => {
    let color;
    switch (element.type) {
        case 'animal':
            color = 'red';
            break;
        case 'vegetable':
            color = 'green';
            break;
        case 'user':
            color = 'purple';
            break;
    }
    return {...element,color}
});
// console.log(colorIcon);

//* creo una funzione per sbiancare la pagina prima di andare a scrivere nuovamente le icone questa volta colorate
const resetHtml = () => {document.getElementById('icons').innerHTML = ''};
resetHtml();

//* creo la funzione per stampare le icone colorate che mi può tornare utile dopo con il filter HTML
const printColorIcon = (array) => {
    array.forEach((element,index) => {
        const {name, prefix, family, color} = element;
    
        document.getElementById('icons').innerHTML += 
        `<div id="icon-${index}">
            <i class="${family} ${prefix}${name}" style="color:${color};"></i>
            <div class="uppercase">${name}</div>
        </div>`
    });
};

printColorIcon(colorIcon);



//TODO Milestone 3 Creiamo una select con i tipi di icone e usiamola per filtrare le icone
//* filtro gli elementi da visualizzare nella pagina HTML a seconda di cosa imposta l'utente nel filtro a tendina
let typeIcons = [];
colorIcon.forEach((element) => {
    if(!typeIcons.includes(element.type)){
        typeIcons.push(element.type);
        document.getElementById('filter-select').innerHTML += 
        `<option value=${element.type}>${element.type}</option>`;
    }
});

console.log(typeIcons);


filterType.addEventListener("change", function() {
    let iconsShow;

    //* prima soluzione
    // switch(filterType.value) {
    //     case 'animal':
    //         iconsShow = colorIcon.filter((element) => element.type == 'animal');
    //         break;
    //     case 'vegetable':
    //         iconsShow = colorIcon.filter((element) => element.type == 'vegetable');
    //         break;
    //     case 'user':
    //         iconsShow = colorIcon.filter((element) => element.type == 'user');
    //         break;
    //     default:
    //         iconsShow = colorIcon;
    // }
    
    //* soluzione alternativa - più corta
    iconsShow = colorIcon;
    if(this.value != 'all'){
        iconsShow = colorIcon.filter((element) => element.type == this.value);
    }

    resetHtml();
    printColorIcon(iconsShow);
});