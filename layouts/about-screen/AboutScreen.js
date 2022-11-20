import styled from './AboutScreen.module.css'
import Title from '../../components/title/Title'
import CoshText from '../../components/UI-components/CoshText/CoshText'
import CoshImage from '../../components/UI-components/CoshImage/CoshImage'
import Buttons from '../../components/buttons/Buttons'
import Texts from '../../resources/text'
import UniversalList from '../../components/UI-components/UniversalList/UniversalList'
import Images from '../../resources/image'

const AboutScreen = (props) => {
    const {aboutListData,formVisible} = props;
    return (
        <div className={styled.aboutScreen}>
            <Title
                title={Texts.ua.aboutUsTitle}
            />
            <div className={styled.contentWrapper}>
            {
                aboutListData.map((item,index)=> {
                    return(
                        <UniversalList
                        iconClass={styled.abuListIcon}
                        iconSrc={item.icon}
                        textClass={styled.abuListText}
                        text={item.text}
                        ListWrapperClass={styled.abuListWrapper}
                        iconWrapper={styled.iconWrapper}
                        key={index}
                    />
                    )
                })
            }
            <CoshImage
                imgWrapperClass={styled.boylerImgWrapper}
                imgClass={styled.boylerImg}
                src={Images.boyler.src}
                alt={Images.boyler.alt}
            />
            <CoshText
                text={Texts.ua.aboutUsText1}
                classes={styled.abuText}
            />
            <Buttons
            formVisible={formVisible}
            />
            </div>
        </div>
    )
}

export default AboutScreen