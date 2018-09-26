var unorgList = document.querySelector('ul');
var addItem = document.querySelector('#item');
var addButton = document.querySelector('button');
addButton.onclick = listitem;

// function ooboo (take, takea, takeathing) {
//     console.log(take + takea + takeathing);
// }

function listitem (b){
    var item = document.createElement('p');
    item.textContent = addItem.value;
    var btn = document.createElement('Button');
    item.appendChild(btn);
    btn.textContent = 'delete';
    return unorgList.appendChild(item);
}

// ooboo("hey there", ", how", " you doin?");

