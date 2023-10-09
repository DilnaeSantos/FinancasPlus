// import React from 'react'
import { StylesBannerBemVindo } from '../BannerBemVindo/styles'

const BannerBemVindo = () => {
  return (
    <StylesBannerBemVindo>
      <div className={'textos'}>
        <h1 className={'Titulo'}>Bem-vindo ao Finanças+</h1>
        <p className={'paragrafo1'}>O seu aliado para uma gestão financeira bem-sucedida e a realização dos seus objetivos financeiros.</p>
        <p className={'paragrafo2'}>Nosso aplicativo foi projetado para proporcionar a você o controle total sobre suas finanças pessoais, tornando o processo de gerenciar suas receitas, despesas e metas financeiras uma tarefa simples e prazerosa.</p>
      </div>
        <img className={'img1'} src="../../../public/LP-banner1 1.svg" alt="mulher em cima de moedas"/> 
     </StylesBannerBemVindo>  
  )
};
export default BannerBemVindo;