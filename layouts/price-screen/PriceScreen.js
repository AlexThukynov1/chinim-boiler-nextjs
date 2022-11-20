import styled from './PriceScreen.module.css'
import PriceList from '../../components/price-list/PriceList'
import Buttons from '../../components/buttons/Buttons'
import Title from '../../components/title/Title'
import Texts from '../../resources/text'
import CoshText from '../../components/UI-components/CoshText/CoshText'


const PriceScreen = (props) => {
    const {priceListData,formVisible} = props
    return (
        <div id="price" className={styled.priceScreen}>
            <Title
                title={Texts.ua.priceTitle}
            />
            <PriceList
                priceListData= {priceListData}
            />
            <CoshText
                text={Texts.ua.note1}
                classes={styled.psTextNotes}
            />
            <CoshText
                text={Texts.ua.note2}
                classes={styled.psTextNotes}
            />
            <CoshText
                text={Texts.ua.note3}
                classes={styled.psText}
            />
            <Title
                title={Texts.ua.priceName}
                titleClass={styled.titleCustom}
            />
            <CoshText
                text={Texts.ua.priceDescription}
                classes={styled.psText}
            />
            <CoshText
                text={Texts.ua.note4}
                classes={styled.psTextNotes}
            />
            <Buttons
                formVisible={formVisible}
            />
        </div>
    )
}

export default PriceScreen