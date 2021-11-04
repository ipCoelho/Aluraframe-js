// Importing the html's elements to a array.
let fields = [
 document.querySelector('#data'),
 document.querySelector('#quantidade'),
 document.querySelector('#valor')
];

const tbody = document.querySelector('table tbody');
const tr = document.createElement('tr');

document.querySelector('.form').addEventListener('submit', function(event) {
    
    event.preventDefault(); 
    
    fields.forEach(function(campo){  
        let td = document.createElement('td');
        td.textContent = campo.value;
        tr.appendChild(td);
    }); 
    
    let tdVolume = document.createElement('td');
    tdVolume.textContent = fields[1].value * fields[2].value;

    tr.appendChild(tdVolume);
    tbody.appendChild(tr);

    fields[0].value = '';
    fields[1].value = 1;
    fields[2].value = 0;

    fields[0].focus();
});