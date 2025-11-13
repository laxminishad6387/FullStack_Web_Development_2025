 let form = document.getElementById('myForm');

  form.addEventListener('submit', function(event) {
    event.preventDefault(); // ❌ Form submit hone se roka
    alert('Form submission stopped!');
  });