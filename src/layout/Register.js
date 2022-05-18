import { useState } from 'react';
import './App.css';

function Register() {

  const [submitting, setSubmitting] = useState(false);

  const handleChange = (event) => {}
  
  //function expression - só existe a partir dessa linha. Ela não sofre: hoisting.
  const handleSubmit = (event) => {
    event.preventDefault();

    setSubmitting(true); //mudou o valor de useState para true

    setTimeout(() => {
      setSubmitting(false);
    }, 3000);
  }

  return (
    <div className="App">
      <h1>Formulário de Cadastro</h1>

      {submitting && (
        <div>
          <p>Carregando...</p>
        </div>
      )}

      <form onSubmit={handleSubmit}>
        <fieldset>
          <label>
            <p>CPF:</p>
            <input type="text" name="cpf" id="cpf" required onChange={handleChange}/>
          </label>
        </fieldset>
        <button type="submit">Enviar</button>
      </form>
    </div>
  );
}

export default Register;
