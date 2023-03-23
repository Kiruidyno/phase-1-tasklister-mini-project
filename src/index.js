document.addEventListener("DOMContentLoaded", () => {
  const form=document.querySelector('form');
  form.addEventListener('submit', function(event){
    event.preventDefault();
  });
});


const deleteButtons = document.querySelectorAll('.delete-button');

deleteButtons.forEach(button => {
  button.addEventListener('click', function() {
    const listItem = button.parentNode;
    listItem.remove();
  });
});
