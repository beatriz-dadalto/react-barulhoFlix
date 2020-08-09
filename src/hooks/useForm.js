import { useState } from 'react';

function useForm(valoresIniciais) {
  const [formValues, setFormValues] = useState(valoresIniciais);
  function setFormValue(chave, valor) {
    setFormValues({
      ...formValues,
      [chave]: valor, // nome: 'valor
    });
  }

  const handleSetFormValues = (eventInfo) => {
    setFormValues(eventInfo.target.value);
    setFormValue(eventInfo.target.getAttribute('name'), eventInfo.target.value);
  };

  function clearForm() {
    setFormValues(valoresIniciais);
  }

  return {
    formValues,
    handleSetFormValues,
    clearForm,
  };
}

export default useForm;
