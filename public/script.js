document.getElementById("inputform").addEventListener('submit',function(event){
  event.preventDefault();
  const Input= document.getElementById("input");
  const text= Input.value.trim();
  document.getElementById('input')
    if(text !==''){
      addTodoItem(text);
      Input.value = '';
    }
});
function addTodoItem(text) {
  const li= document.createElement('li');
li.textContent=text;
const removeButton = document.createElement('button');
  removeButton.textContent = "Remove";
  removeButton.addEventListener("click",function() {
    li.remove();
});
li.appendChild(removeButton);
document.getElementById('mylist').appendChild(li);
}

