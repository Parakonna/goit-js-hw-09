const formData = {
    email: "",
    message: ""
}

const feedbackFormEl = document.querySelector('.feedback-form');

const onFormFieldChange = event => {
    const fieldValue = event.target.value.trim();
    const fieldName = event.target.name;

    formData[fieldName] = fieldValue;

    localStorage.setItem('feedback-form-state', JSON.stringify(formData));
}

 const fillFormFields = () => {
        const formDataFromLS = JSON.parse(localStorage.getItem('feedback-form-state'));

        if (formDataFromLS === null) {
            return;
     }
     
     
        for (const key in formDataFromLS) {
            if (formDataFromLS.hasOwnProperty(key)) {
                feedbackFormEl.elements[key].value = formDataFromLS[key];
                formData[key] = formDataFromLS[key];
            }
        }
    }

fillFormFields();
    
const onFeedbackFormSubmit = event => {
    event.preventDefault();

    const { email, message } = event.currentTarget.elements;
    const trimedEmail = email.value.trim();
    const trimedMessage = message.value.trim();
    
    if (trimedEmail === "" || trimedMessage === "") {
        return alert ("Fill please all field")
    }
console.log(formData);
    event.currentTarget.reset();
    localStorage.removeItem('feedback-form-state');
    formData.email = "";
    formData.message = "";
}

feedbackFormEl.addEventListener('input', onFormFieldChange);
feedbackFormEl.addEventListener('submit', onFeedbackFormSubmit);