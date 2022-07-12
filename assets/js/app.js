let cl = console.log;
let firstApiTable = document.getElementById('firstApiTable')
/* fetch('https://jsonplaceholder.typicode.com/todos/')
  .then(response => response.json())
  .then(data => console.log(data))
  .catch(err => cl(err));
 */

// get, post, patch, put, delete

//XMLHttpRequest
// it is a constructor method
// constructor method == it is a blueprint for creating objects

let apiUrl = 'https://jsonplaceholder.typicode.com/todos/';

// steps to call API
// 1 create instance /object of xmlHttprequest()
let xhr = new XMLHttpRequest();

// 2 open method call 
xhr.open('get',apiUrl,true)

// 3 onload
xhr.onload = function(){
    cl(xhr.response);
    let data = JSON.parse(xhr.response);
    templeting(data)
}
// 4 send
xhr.send();

function templeting(arr){
    let result ='';
    arr.forEach(element =>{
        result +=`<tr>
                    <td>${element.id}</td>
                    <td>${element.userId}</td>
                    <td>${element.title}</td>
                    <td>${element.completed}</td>
                </tr>`
    });
    firstApiTable.innerHTML = result;
}