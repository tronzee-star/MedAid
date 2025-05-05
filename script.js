document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('medicineForm');
  const message = document.getElementById('message');
  const suggestionList = document.getElementById('suggestionList');

  if (form) {
    form.addEventListener('submit', function (e) {
      e.preventDefault();
      const disease = document.getElementById('disease').value.trim();
      const medicine = document.getElementById('medicine').value.trim();

      if (!disease || !medicine) {
        message.textContent = "Both fields are required.";
        return;
      }

      let data = JSON.parse(localStorage.getItem('medData')) || [];
      const id = Date.now(); // Unique ID
      data.push({ id, disease, medicine });
      localStorage.setItem('medData', JSON.stringify(data));

      message.textContent = "Suggestion saved successfully!";
      form.reset();
    });
  }

  if (suggestionList) {
    renderSuggestions();
  }

  function renderSuggestions() {
    let data = JSON.parse(localStorage.getItem('medData')) || [];
    if (data.length === 0) {
      suggestionList.innerHTML = "<li>No data found.</li>";
      return;
    }

    suggestionList.innerHTML = '';
    data.forEach((item) => {
      const li = document.createElement('li');
      li.innerHTML = `<strong>${item.disease}</strong>: ${item.medicine} 
        <button data-id="${item.id}" class="delete-btn">Delete</button>`;
      suggestionList.appendChild(li);
    });

    document.querySelectorAll('.delete-btn').forEach(button => {
      button.addEventListener('click', function () {
        const idToDelete = parseInt(this.getAttribute('data-id'));
        let newData = data.filter(item => item.id !== idToDelete);
        localStorage.setItem('medData', JSON.stringify(newData));
        renderSuggestions(); // Re-render list
      });
    });
  }
});
function renderSuggestions() {
  const defaultData = JSON.parse(localStorage.getItem("defaultMedData")) || [];
  const userData = JSON.parse(localStorage.getItem("medData")) || [];
  const allData = [...defaultData, ...userData];

  suggestionList.innerHTML = '';
  allData.forEach((item, index) => {
    const li = document.createElement('li');

    const isDefault = index < defaultData.length;
    li.innerHTML = `
      <strong>${item.disease}</strong>: ${item.medicine} 
      ${isDefault ? '<span class="standard-label">(Standard)</span>' : ''}
      ${!isDefault ? `<button data-index="${index}" class="delete-btn">Delete</button>` : ''}
    `;

    suggestionList.appendChild(li);
  });

  document.querySelectorAll('.delete-btn').forEach(btn => {
    btn.addEventListener('click', function () {
      const indexToDelete = parseInt(this.getAttribute('data-index')) - defaultData.length;
      userData.splice(indexToDelete, 1);
      localStorage.setItem("medData", JSON.stringify(userData));
      renderSuggestions();
    });
  });
}

