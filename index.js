const form = document.querySelector('form');
const Name = document.querySelector('#name');
const cost = document.querySelector('#cost');
const error = document.querySelector('#error');

form.addEventListener('submit', (e) => {

  e.preventDefault();

  if (Name.value && cost.value) {

    const item = { 
      name: Name.value, 
      cost: parseInt(cost.value) 
    };

    db.collection('expenses').add(item).then(res => {
      error.textContent = '';
      Name.value = '';
      cost.value = '';
    });

  } else {
    error.textContent = 'Please enter values before submitting';
  }
  
});