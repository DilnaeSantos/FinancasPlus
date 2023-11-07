import { StylesBannerDepoimentos } from './style'
import lpBanner3 from '/LP-banner31.svg'

const BannerDepoimentos = () => {
    return (
        <StylesBannerDepoimentos>
            <img className={'img1'} src={lpBanner3} alt="um homem com nootebok com um grafico"/>
            <div>
                <h1>Transformações Financeiras Reais</h1>
                <p>Descubra como nossos usuários alcançaram suas metas, controlaram suas finanças e conquistaram sonhos que pareciam distantes.</p>
            </div>
            <div>
                <img src="../../../public/Ellipse 3.svg" alt="foto de uma mulher" />
            </div>
        </StylesBannerDepoimentos>
    )
}
export default BannerDepoimentos;
