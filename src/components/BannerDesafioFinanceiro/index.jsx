import { StylesBannerDesafioFinanceiro } from './styles'

const BannerDesafioFinanceiro = () => {
  return (
    <StylesBannerDesafioFinanceiro>
      <img className={'img2'} src="../../../public/LP-banner2 3.svg" alt="mulher em cima de moedas"/>
      <div className={'textos'}>
        <h1 className={'Titulo'}>O desafio Financeiro</h1>
        <p className={'paragrafo1'}>Sabemos que lidar com finanças pode ser um desafio para muitas pessoas.</p>
        <p className={'paragrafo2'}>A falta de organização, o desconhecimento das despesas e o medo de não conseguir atingir suas metas financeiras são obstáculos comuns enfrentados por todos nós.</p>
        <p className={'paragrafo2'}>É por isso que desenvolvemos o Finanças+ - para ajudá-lo a superar esses desafios e alcançar a liberdade financeira que você tanto deseja.</p>
      </div>
    </StylesBannerDesafioFinanceiro>
  )
};
export default BannerDesafioFinanceiro;