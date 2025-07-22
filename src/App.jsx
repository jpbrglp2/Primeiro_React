import { useState } from 'react';
import './App.css'

function App() {
  const [nome, setNome] = useState('')
  const [email, setEmail] = useState('')
  const infors = (event) => {
    if(nome.trim() === '' || email.trim() === ''){
      alert("Preencha todos os dados!")
      return
    }
    event.preventDefault();
    alert(`Nome: ${nome} \nEmail: ${email}`);
  
  }
  return (
      <div>
        <h1>Olá estou aprendendo React!</h1>
        <h2>Formulário de teste</h2>
        <form className='form'>
           <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1200px-React-icon.svg.png" alt="Imagem do React" className='react' />
          <input type="text" required placeholder='Nome'className='input' value={nome} onChange={(e) => setNome(e.target.value)}/>
          <input type="email" required placeholder='Email' className='input' value={email} onChange={(e) => setEmail(e.target.value)}/>
          <button className='Submeter' type='submit' onClick={infors}>Enviar</button>
        </form>
      </div>
  );
}

export default App
