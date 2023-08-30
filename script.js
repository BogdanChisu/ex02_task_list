var idCounter = 0;

const addTask = () => {
    const div = document.createElement('div');
    const h2 = document.createElement('h2');
    const p = document.createElement('p');
    const button = document.createElement('button');

    div.id = 'id-' + idCounter;
    

    //luam valori din inputuri
    const tname = document.createTextNode(document.getElementById('tname').value);
    const tdescription = document.createTextNode(document.getElementById('tdescription').value);
    const btnText = document.createTextNode('DELETE');
    //asamblam task

    button.appendChild(btnText);

    button.addEventListener('click', () => document.getElementById(div.id).remove());
    idCounter += 1;

    h2.appendChild(tname);
    p.appendChild(tdescription);
    div.appendChild(h2);
    div.appendChild(p);
    div.appendChild(button);

    document.getElementById('tasks').appendChild(div);
}

document.getElementById('addTask').addEventListener('click', () => addTask());