const username = document.getElementById('username');
const phone = document.getElementById('phone');
//const lastName = document.getElementById('lastName');
//const age = document.getElementById('age');
const addBtn = document.getElementById('addBtn');
//const updateBtn = document.getElementById('updateBtn');
//const removeBtn = document.getElementById('removeBtn'); 

const database = firebase.database();
const usersRef = database.ref('/users');
addBtn.addEventListener('click', e => {
  e.preventDefault();
  const autoId = usersRef.push().key
  usersRef.child(autoId).set({
    first_name: firstName.value,
    last_name: lastName.value,
    age: age.value
  });
});