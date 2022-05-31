import './Card.css';
import Content from './Content';
import Header from './Header';

function Card () {
  const user = {
    nome: 'Bruno',
    email: 'brazera@dh.com',
    telefone: '(12) 99929-1234',
  };

  return (
    <section className="card">
      <Header />
      <Content />
    </section>
  );
};

export default Card;

// Para importar este componente:
// import Card from 'Card.js';