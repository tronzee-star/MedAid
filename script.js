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
        data.push({ disease, medicine });
        localStorage.setItem('medData', JSON.stringify(data));
  
        message.textContent = "Suggestion saved successfully!";
        form.reset();
      });
    }
  
    if (suggestionList) {
      let data = JSON.parse(localStorage.getItem('medData')) || [];
      suggestionList.innerHTML = data.length
        ? data.map(item => `<li><strong>${item.disease}</strong>: ${item.medicine}</li>`).join('')
        : "<li>No data found.</li>";
    }
  });
  