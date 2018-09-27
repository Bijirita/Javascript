var unorgList = document.querySelector('ul');
var addItem = document.querySelector('#item');
var addButton = document.querySelector('button');
// var deleteButton = document.querySelector(':li > Button');
addButton.onclick = listitem;
var deleteButton = document.querySelectorAll('li');
console.log(deleteButton);
deleteButton.textContent = 'delete';
// span.textContent = item;
// function ooboo (take, takea, takeathing) {
//     console.log(take + takea + takeathing);
// }

function listitem (b){
    var item = addItem.value;
    console.log(item);
   addItem.value = ''; 
    var li = document.createElement('li');
    var span = document.createElement('span');
    var deleteButton = document.createElement('Button');
    li.appendChild(span);
    li.appendChild(deleteButton);
    deleteButton.textContent = 'delete';
    span.textContent = item;
    unorgList.appendChild(li);
    // deleteButton.onclick = deleteItem;
    
    deleteShitWhenIClick(deleteButton);
    // deleteShitWhenIClick(addButton)
    




    
    // // var item = document.createElement('p');
    // item.textContent = addItem.value;
    // item.appendChild(span, deleteButton);
    // deleteButton.style.marginLeft = "100px";
    // return unorgList.appendChild(item);
    
}


function deleteShitWhenIClick(thisButton) {
    
    thisButton.onclick =deleteItem;
}


function deleteItem (e){
         var li = document.querySelector('li');
         console.log(li);
         unorgList.removeChild(li); 
     }

// ooboo("hey there", ", how", " you doin?");

