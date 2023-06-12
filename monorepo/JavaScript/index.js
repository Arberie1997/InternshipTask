function shuffleValues() {
  
  const checkboxes = Array.from(document.querySelectorAll('.form-check'));

  checkboxes.sort(() => Math.random() - 0.7);
  
  const parentContainer = checkboxes[0].parentNode;
  checkboxes.forEach((box) => {
      parentContainer.appendChild(box);
  });
}



function changeValues() {

  const checkboxes = document.querySelectorAll('input[type="checkbox"]');

  checkboxes.forEach((checkbox, index) => {
      checkbox.value = `Changed value ${index + 1}`;
  });
}


function showSelectedValues() {

  const checkboxes = document.querySelectorAll('input[type="checkbox"]:checked');
  const displayDiv = document.getElementById('selected-value');

  const selectedValues = Array.from(checkboxes).map(function(checkbox) {
      return checkbox.value;
  });

  displayDiv.textContent = selectedValues.join(', ');
}