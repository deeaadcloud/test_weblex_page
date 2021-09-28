import React from 'react';
import './App.css';
import Pagination from './components/getData';





// let data = []; // Загруженные данные
// const Wblxtable = document.getElementById("Weblex_table");
// const tBody = document.createElement("tbody");



// const pagesList = {
//   page: 1,
//   min: 1,
//   max: 2,
//   setMax(max) {
//     this.max = max;
//   },
//   previousPage() {
//     if (this.page != this.min)
//       this.page--;
//   },
//   nextPage() {
//     if (this.page != this.max)
//       this.page++;
//   },
//   setPage(num) {
//     if (num < this.min)
//       this.page = this.min;
//     else if (num > this.max)
//       this.page = this.max;
//     else
//       this.page = num;
//   },
// }

// const slicePage = arrayPage(data);




// slicePage.forEach((data) => {
  
//   const row = document.createElement("tr")
//   for (let i = 0; i < 1; i++) {
//     data.id = data[i].id;
//     row.getAttribute('id', data.id);
//     row.className = 'wblx_table_page';
//     row.innerHTML = `
//                   <td class='data_inner' data-type='text'>${data[i].Дата}</td>
//                   <td class='name_inner' data-type='text'>${data[i].Название}</td>
//                   <td class='number_inner' data-type='text'>${data[i].Количество}</td>
//                   <td class='distance_inner' data-type='text'>${data[i].Расстояние}</td>
//               `;
//     tBody.append(row);
//     Wblxtable.appendChild(tBody);
//   }

// });

// function arrayPage(data, pageSize = 5) {
//   const subslice = [],
//         pageAmount = Math.ceil(data.length / pageSize);
//     for (let j = 0; j < pageAmount; j++) {
//         subslice[j] = data.slice((j * pageSize), (j * pageSize) + pageSize);
//     }
//     return subslice;
// } 


// function redrawTable() {
//   renderTable(table.data, pagesList);
// }




  // document.querySelector("tbody").innerHTML = "";
  // const startEl = 10*(page - 1);
  // const endEl = 10*(page);
  //Выборка элементов из массива (в зависимости от текущей страницы)
  // table.slice(startEl, endEl).forEach(element=>{
  //     const person = {id: element.id, firstName: element.name.firstName, lastName: element.name.lastName,
  //         about: element.about, eyeColor: element.eyeColor};
  //     addLineInTable(person);
  // })

// Проводим файл getData и подключаем его на основную страницу
function App() {
  return (
    <div className="wrapper">
      <header className="wrapper-content">
      <Pagination />
      </header>
    </div>
  );
}


export default App;
