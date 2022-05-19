import { useReducer, useState } from 'react';
import styled from 'styled-components';
import bannerBG from '../assets/images/bannerBG.png';

const Container = styled.div`
display: flex;
fieldset {
  width: 60%;
  border: none;
}
`

const Banner = styled.div`
width: 50%;
height: 100vh;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
background: ${ 
  (props) => (props.background ? "url(" + props.background + ") #e5e5e5 " : "" 
  )} 
  20% 90% no-repeat;

@media (max-width: 1280px) {
  background-size: 60%;
}

`

const formReducer = (state, event) => {
  return {
    ...state,
    [event.name]: event.value,
  }
}

function Register() {
  const [formData, setFormData] = useReducer(formReducer, {});

  const [submitting, setSubmitting] = useState(false);

  const handleChange = (event) => {
    setFormData({
      name: event.target.name,
      value: event.target.value,
    })
  }
  
  //function expression - só existe a partir dessa linha. Ela não sofre: hoisting.
  const handleSubmit = (event) => {
    event.preventDefault();

    setSubmitting(true); //mudou o valor de useState para true

    setTimeout(() => {
      setSubmitting(false);
    }, 3000);
  }

  return (
    <Container>
      <Banner background={bannerBG}>
        <h1> Complete os campos ao lado para pedir sua Conta e Cartão de Crédito</h1>

      </Banner>

      <Banner>
      {submitting && (
        <div>
          <p>Carregando...</p>
          <ul>
            {Object.entries(formData).map(([name, value]) => (
              <li key={name}>
                <strong>{name}</strong>: {value.toString()}
              </li>
            ))}
          </ul>
        </div>
      )}

      <form onSubmit={handleSubmit}>
        <fieldset>
          <label>
            CPF:
            <input type="text" name="cpf" id="cpf" required onChange={handleChange}/>
          </label>
        </fieldset>

        <fieldset>
          <label>
            Nome Completo:
            <input type="text" name="nome" id="nome" required onChange={handleChange}/>
          </label>
        </fieldset>

        <fieldset>
          <label>
            Celular:
            <input type="tel" name="celular" id="celular" onChange={handleChange}/>
          </label>
        </fieldset>

        <fieldset>
          <label>
            E-mail:
            <input type="email" name="email" id="email" required onChange={handleChange}/>
          </label>
        </fieldset>

        <fieldset>
          <label>
            Confirmação de e-mail:
            <input type="email" name="confirma_email" id="confirma_email" required onChange={handleChange}/>
          </label>
        </fieldset>

        <fieldset>
          <label>
            <input type="checkbox" name="aceito_comunicacao" id="aceito_comunicacao"/>
          </label>
          Aceito receber comunicações do Nubank pelo WhatsApp.
        </fieldset>

        <fieldset>
          <label>
            <input type="checkbox" name="aceito_contrato" id="aceito_contrato"/>
          </label>
          Eu li, estou ciente das condições de tratamento dos meus dados pessoais e dou meu consentimento, quando aplicável, conforme descrito nesta Política de Privacidade.
        </fieldset>

        <button type="submit">Enviar</button>
      </form>
     </Banner>
    </Container>
  );
}

export default Register;
