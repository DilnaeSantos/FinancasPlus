// import React from 'react'
import { StylesHeader } from './styles'

const Header = () => {
  return (
    <StylesHeader>
        <a href="" className={'titulo'}>Finanças +</a>
        <nav className={'navegacao'}>
          <a href="" className={'linkNavegaçao'}>Home</a>
          <a href="" className={'linkNavegaçao'}>Quem somos</a>
          <a href="" className={'linkNavegaçao'}>Entrar</a>
          <a href="" className={`${'linkNavegaçao'} ${'ultimoLink'}`}>Criar conta</a>
        </nav>
    </StylesHeader>
  )
};
export default Header;