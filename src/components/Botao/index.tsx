import React from 'react';

interface Props {
  type?: 'button' | 'submit' | 'reset' | undefined,
  onClick?: () => void,
  children?: React.ReactNode
}
//className={style.botao}

function Botao ({type, onClick, children }: Props){
    return (
      <button onClick={onClick} type={type}>{children}</button>
    )
  
}

export default Botao;