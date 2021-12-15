
var nameInput = document.getElementById('fname');
var nameInput1 = document.getElementById('mname');
var nameInput2 = document.getElementById('lname');
var nameInput3 = document.getElementById('email');
document.querySelector('form.one').addEventListener('submit', function (e) {

    e.preventDefault();
   
    console.log(nameInput.value);    
    console.log(nameInput1.value);    
    console.log(nameInput2.value);    
    console.log(nameInput3.value);    

});


