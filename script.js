const diseaseDatabase = {
    malaria: {
      description: "Malaria is a mosquito-borne infectious disease caused by Plasmodium parasites.",
      symptoms: "Fever, chills, sweating, headache, vomiting.",
      causes: "Bitten by infected Anopheles mosquitoes.",
      prevention: "Use mosquito nets, repellents, and antimalarial medication.",
      medication: "Artemether-Lumefantrine, Chloroquine."
    },
    typhoid: {
      description: "Typhoid is a bacterial infection caused by Salmonella Typhi.",
      symptoms: "High fever, weakness, stomach pain, rash.",
      causes: "Contaminated food or water.",
      prevention: "Good sanitation, vaccination.",
      medication: "Ciprofloxacin, Azithromycin."
    },
    flu: {
      description: "Influenza (flu) is a viral infection that attacks your respiratory system.",
      symptoms: "Fever, cough, sore throat, muscle aches.",
      causes: "Influenza viruses spread through droplets.",
      prevention: "Vaccination, hygiene, avoiding contact with infected people.",
      medication: "Oseltamivir, rest, fluids."
    },
    asthma: {
      description: "Asthma is a condition in which your airways narrow and swell and produce extra mucus.",
      symptoms: "Shortness of breath, chest tightness, wheezing.",
      causes: "Allergens, exercise, cold air, smoke.",
      prevention: "Avoid triggers, use inhalers.",
      medication: "Salbutamol Inhaler, corticosteroids."
    }
    // Add more diseases here as needed
  };
  
  const diseaseInput = document.getElementById("diseaseInput");
  const diseaseDetails = document.getElementById("diseaseDetails");
  
  diseaseInput.addEventListener("keydown", function (e) {
    if (e.key === "Enter") {
      const input = diseaseInput.value.trim().toLowerCase();
      if (diseaseDatabase[input]) {
        const info = diseaseDatabase[input];
        diseaseDetails.innerHTML = `
          <h3>${capitalize(input)}</h3>
          <p><strong>Description:</strong> ${info.description}</p>
          <p><strong>Symptoms:</strong> ${info.symptoms}</p>
          <p><strong>Causes:</strong> ${info.causes}</p>
          <p><strong>Prevention:</strong> ${info.prevention}</p>
          <p><strong>Medication:</strong> ${info.medication}</p>
        `;
      } else {
        diseaseDetails.innerHTML = `<p style="color:red;"><strong>No data found</strong> for "${input}". Try another disease.</p>`;
      }
    }
  });
  
  function capitalize(word) {
    return word.charAt(0).toUpperCase() + word.slice(1);
  }
  
