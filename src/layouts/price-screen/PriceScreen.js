import './index.css'
import PriceList from '../../components/price-list/PriceList'
import Buttons from '../../components/buttons/Buttons'
import Title from '../../components/title/Title'
import Texts from '../../resources/text'
import CoshText from '../../components/UI-components/CoshText/CoshText'


const PriceScreen = (props) => {
    const {priceListData,formVisible} = props
    return (
        <div id="price" className='price-screen'>
            <Title
                title={Texts.ua.priceTitle}
            />
            <PriceList
                priceListData= {priceListData}
            />
            <CoshText
                text={Texts.ua.note1}
                classes={'ps-text-notes'}
            />
            <CoshText
                text={Texts.ua.note2}
                classes={'ps-text-notes'}
            />
            <CoshText
                text={Texts.ua.note3}
                classes={'ps-text'}
            />
            <Title
                title={Texts.ua.priceName}
                titleClass={'title-custom'}
            />
            <CoshText
                text={Texts.ua.priceDescription}
                classes={'ps-text'}
            />
            <CoshText
                text={Texts.ua.note4}
                classes={'ps-text-notes'}
            />
            <Buttons
                formVisible={formVisible}
            />
        </div>
    )
}

export default PriceScreen