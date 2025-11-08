(function() {
  'use strict';
  const form = document.querySelector('.contact-form');
  const sucessMessage = document.querySelector(".contact-form-section .form-success-message");
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const showMoreBtn = document.querySelector(".contact-message-container .show-more-btn");
  const contactContent = document.querySelector(".contact-message-container .contact-message-content");

  function validate(el, isValid) {
    el.classList.toggle('is-invalid', !isValid);
    el.classList.toggle('is-valid', isValid);
    return isValid;
  }

  function validateField(field) {
    let isValid = true;
    if (field.id === 'email') {
      isValid = field.value.trim() && emailPattern.test(field.value);
    } else if (field.id === 'hear') {
      isValid = field.value && field.value !== 'Select an option';
    } else {
      isValid = field.value.trim() !== '';
    }
    return validate(field, isValid);
  }

  function validateCheckboxGroup(group) {
    const checkboxes = group.querySelectorAll('input[type="checkbox"]');
    const feedback = group.querySelector('.invalid-feedback');
    const checked = Array.from(checkboxes).some(cb => cb.checked);

    if (!checked) {
      checkboxes.forEach(cb => {
        cb.classList.add('is-invalid');
        cb.classList.remove('is-valid');
      });
    } else {
      checkboxes.forEach(cb => {
        cb.classList.remove('is-invalid', 'is-valid');
        if (cb.checked) cb.classList.add('is-valid');
      });
    }

    if (feedback) feedback.style.visibility = checked ? 'hidden' : 'visible';

    const last = group.querySelector('input[value="not_sure"], input[value="other"]');
    if (last) {
      if (last.checked) {
        checkboxes.forEach(cb => { if (cb !== last) cb.disabled = true; });
      } else {
        const anyOtherChecked = Array.from(checkboxes).some(cb => cb.checked && cb !== last);
        last.disabled = anyOtherChecked;
        checkboxes.forEach(cb => { if (cb !== last) cb.disabled = false; });
      }
    }

    return checked;
  }

  form.querySelectorAll('.checkbox-group').forEach(group => {
    group.querySelectorAll('input[type="checkbox"]').forEach(cb => {
      cb.addEventListener('change', () => validateCheckboxGroup(group));
    });
  });

  document.querySelectorAll('.checkbox-group.readiness-group').forEach(group => {
    const checkboxes = group.querySelectorAll('input[type="checkbox"]');
    checkboxes.forEach(cb => {
      cb.addEventListener('change', () => {
        if (cb.checked) {
          checkboxes.forEach(other => { if (other !== cb) other.disabled = true; });
        } else {
          checkboxes.forEach(other => other.disabled = false);
        }
      });
    });
  });

  form.addEventListener('submit', function(e) {
    e.preventDefault();
    let isValid = true;

    ['first-name', 'last-name', 'email', 'about', 'location', 'hear', 'timing'].forEach(id => {
      if (!validateField(document.getElementById(id))) isValid = false;
    });

    form.querySelectorAll('.checkbox-group').forEach(group => {
      if (!validateCheckboxGroup(group)) isValid = false;
    });

    form.classList.add('was-validated');
    if (isValid) {
      const formData = new FormData(form);

      fetch("https://formsubmit.co/info@thequietclimb.co.uk", {
        method: "POST",
        body: formData,
      })
      .then(response => {
        if (response.ok) {
          form.reset();
          form.classList.remove('was-validated');
          form.querySelectorAll('.is-valid, .is-invalid').forEach(el => el.classList.remove('is-valid', 'is-invalid'));
          form.querySelectorAll('input[type="checkbox"]').forEach(cb => cb.disabled = false);

          sucessMessage.innerHTML = `<img src="./assets/images/tick.png" alt="Success tick icon" /> Thank you! Your form has been submitted successfully. We’ll reach you soon.`;
          sucessMessage.classList.remove("error");
          sucessMessage.classList.add("success");
          sucessMessage.classList.add("show");
        } else {
          sucessMessage.innerHTML = "Something went wrong. Please try again later.";
          sucessMessage.classList.remove("success");
          sucessMessage.classList.add("error");
          sucessMessage.classList.add("show");
        }
        setTimeout(() => sucessMessage.classList.remove("show"), 5000);
      })
      .catch(() => {
        sucessMessage.textContent = "Error sending message. Please check your internet connection.";
        sucessMessage.classList.remove("success");
          sucessMessage.classList.add("error");
        sucessMessage.classList.add("show");
        setTimeout(() => sucessMessage.classList.remove("show"), 5000);
      });
    }

  });

  ['first-name', 'last-name', 'email', 'about', 'location','hear', 'timing'].forEach(id => {
    document.getElementById(id)?.addEventListener('input', e => validateField(e.target));
  });

  document.getElementById('hear')?.addEventListener('change', e => validateField(e.target));

  showMoreBtn.addEventListener('click', () => {
    showMoreBtn.classList.toggle("active");
    showMoreBtn.textContent = showMoreBtn.classList.contains("active") ? "Show Less" : "Show More";
    contactContent.classList.toggle("active");
  });
})();


const formCheckInputs = document.querySelectorAll(".your-needs-group .form-check-input");
let storedNeeds = JSON.parse(sessionStorage.getItem("needs")) || [];

const notSureInput = document.querySelector('.form-check-input[value="not_sure"]');

formCheckInputs.forEach(input => {
  input.checked = storedNeeds.includes(input.value);
});

function updateState(changedInput) {
  if (changedInput.value === "not_sure" && changedInput.checked) {
    formCheckInputs.forEach(inp => {
      if (inp.value !== "not_sure") {
        inp.checked = false;
        inp.disabled = true;
      }
    });
    storedNeeds = ["not_sure"];
  } else if (changedInput.value === "not_sure" && !changedInput.checked) {
    formCheckInputs.forEach(inp => inp.disabled = false);
    storedNeeds = [];
  } else {
    const anyOtherChecked = Array.from(formCheckInputs).some(inp => inp.value !== "not_sure" && inp.checked);

    if (anyOtherChecked) {
      notSureInput.checked = false;
      notSureInput.disabled = true;
      storedNeeds = Array.from(formCheckInputs)
        .filter(inp => inp.checked && inp.value !== "not_sure")
        .map(inp => inp.value);
    } else {
      notSureInput.disabled = false;
      storedNeeds = [];
    }
  }

  sessionStorage.setItem("needs", JSON.stringify(storedNeeds));
}


formCheckInputs.forEach(input => {
  input.addEventListener("change", () => updateState(input));
});


if (storedNeeds.includes("not_sure")) {
  notSureInput.checked = true;
  formCheckInputs.forEach(inp => {
    if (inp.value !== "not_sure") inp.disabled = true;
  });
} else if (storedNeeds.length > 0) {
  notSureInput.disabled = true;
}
