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

icons.forEach((element,index) => {
    const {name, prefix, family} = element;

    document.getElementById('icons').innerHTML += 
    `<div id="icon-${index}">
        <i class="${family} ${prefix}${name}"></i>
        <div class="uppercase">${name}</div>
    </div>`
});



//TODO Milestone 2 Coloriamo le icone per tipo
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
            color = 'grey';
            break;
    }
    return {...element,color}
});
// console.log(colorIcon);

const resetHtml = () => {document.getElementById('icons').innerHTML = ''};
resetHtml();

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
const filterType = document.getElementById("filter-select");
filterType.addEventListener("change", function() {
    let iconsShow;
    switch(filterType.value) {
        case 'animal':
            iconsShow = colorIcon.filter((element) => element.type == 'animal');
            console.log(iconsShow);
            break;
        case 'vegetable':
            iconsShow = colorIcon.filter((element) => element.type == 'vegetable');
            console.log(iconsShow);
            break;
        case 'user':
            iconsShow = colorIcon.filter((element) => element.type == 'user');
            console.log(iconsShow);
            break;
        default:
            iconsShow = colorIcon;
    }

    resetHtml();
    printColorIcon(iconsShow);
});