/*
// Theory

const array = [1, 2, 5, 15, 32, 55];
const arrayStrings = ['a', 'b', 'c', null, 12];
//const array = new Array(1, 2, 3, 5, 23, 44);

console.log(array);
console.log(array.length);
console.log(array[array.length]); // undefined (так как подставляет значение длинны равное 6. А индекса 6 в данном случае нет)
console.log(array[0]);
console.log(array[array.length - 1]);
// console.log(array[10]);
// console.log(array.length - 1);
array[0] = 'hello';
// arrayStrings[0] = 'hello, miss';
// console.log(array);

console.log(array);
console.log(arrayStrings);
*/

const inputElement = document.getElementById('title');
const createBtn = document.getElementById('create');
const listElement = document.getElementById('list');

// console.log(inputElement.value)
// const notes = ['записать блок про массивы', 'рассказать теорию объектов', 42, 'Ра']

// function render() {
//     for (let i = 0; i < notes.length; i++) {
//         listElement.insertAdjacentHTML('beforeend', getNoteTemplate(notes[i]));
//     }
//
//     for (let note of notes) {
//         listElement.insertAdjacentHTML('beforeend', getNoteTemplate(note));
//     }
//     // listElement.insertAdjacentHTML('beforeend', getNoteTemplate(notes[0]));
//     // listElement.insertAdjacentHTML('beforeend', getNoteTemplate(notes[1]));
//
// }

// render();

// createBtn.onclick = function () {
//     if (inputElement.value.length === 0) {
//         return
//     }
//     // listElement.innerHTML =
//     listElement.insertAdjacentHTML('beforeend', getNoteTemplate(inputElement.value));
//     inputElement.value = '';
// }

// function getNoteTemplate(title) {
//     return `
//             <li class="list-group-item d-flex justify-content-between align-items-center">
//                 <span>${title}</span>
//                 <span>
//                     <span class="btn btn-small btn-success">&check;</span>
//                     <span class="btn btn-small btn-danger">&times;</span>
//                 </span>
//             </li>
//         `
// }

/*
********* Object Theory ****************
 */
/*
const person = {
    firstName: 'Aleksandr',
    lastName: 'Gudyma',
    year: '1981',
    hasChild: true,
    hasCar: true,
    languages: ['ru', 'en', 'de'],
    getFullName: function () {
        console.log(person.firstName + ' ' + person.lastName)
    },
}

console.log(person.year);
console.log(person['languages']);
const key = 'hasChild';
console.log(person[key]);
person.hasCar = false;
console.log(person[key]);
*/

const notes = [
    {
        title: 'записать блок про массивы',
        completed: false,
    },
    {
        title: 'рассказать теорию объектов',
        completed: true,
    },
]

function render() {
    // for (let i = 0; i < notes.length; i++) {
    //     listElement.insertAdjacentHTML('beforeend', getNoteTemplate(notes[i]));
    // }
    listElement.innerHTML = ''
    for (let i = 0; i < notes.length; i++) {
        listElement.insertAdjacentHTML('beforeend', getNoteTemplate(note));
    }
}

render();

createBtn.onclick = function () {
    if (inputElement.value.length === 0) {
        return
    }
    const newNote = {
        title: inputElement.value,
        completed: false,
    }
    notes.push(newNote);
    render();
    inputElement.value = '';
}

function getNoteTemplate(note, index) {
    return `
            <li class="list-group-item d-flex justify-content-between align-items-center">
                <span class="${note.completed ? 'text-decoration-line-through' : ''}">${note.title}</span>
                <span>
                    <span class="btn btn-small btn-${
        note.completed ? 'warning' : 'success'
    }" data-index="${index}">&check;</span>
                    <span class="btn btn-small btn-danger">&times;</span>
                </span> 
            </li>
        `
}