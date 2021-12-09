// Import stylesheets
import './style.css';

// Write Javascript code!
const appDiv = document.getElementById('app');
appDiv.innerHTML = `<h1>JS Starter</h1>`;
add();
function add(){
  let arr1 = [2, 7, 5, 3, 9]
  let addSum = 9;
  let res =[]
  for (let i = 0; i < arr1.length; i++) {
    let diff = addSum - arr1[i];
    if (diff > arr1[i] && arr1.includes(diff)) {
      appDiv.innerHTML=('Arr pair has value ' + arr1[i]+ ': ' + diff);
    //res.push(arr1[i]);
    }
    }
 // appDiv.innerHTML=res;
}

