import { useEffect } from 'react';

const MensagemAoAbrir = () => {
  useEffect(() => {
    console.log('Componente carregou!');
    alert('Bem-vindo(a) ao meu primeiro useEffect!');
  }, []);

  return <h1>Página carregada com sucesso!</h1>;
}

export default MensagemAoAbrir;