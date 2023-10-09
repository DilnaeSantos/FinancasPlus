import { StylesBannerComeceAgora } from './styles'

const BannerComeceAgora = () => {
  return (
    <StylesBannerComeceAgora>
        <div className={'textos'}>
            <h1 className={'Titulo'}>Transforme sua relação com o dinheiro</h1>
            <p className={'paragrafo1'}>Cadastre-se no Finanças+ agora mesmo e comece sua jornada rumo a uma vida financeira mais próspera e realizada</p>
        </div>
        <form action="" className={'forms'}>
            <input type="email" placeholder='Seu Email' className={'inputEmail'}/>
            <button className={'btnComeceAgora'}>Comece Agora</button>
        </form>
    </StylesBannerComeceAgora>  
  )
};
export default BannerComeceAgora;