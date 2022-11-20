import styled from './Banner.module.css'
import CoshImage from '../UI-components/CoshImage/CoshImage'
import CoshText from '../UI-components/CoshText/CoshText'
import Buttons from '../buttons/Buttons'
import UniversalList from '../UI-components/UniversalList/UniversalList'
import Texts from '../../resources/text'
import Title from '../title/Title'
import SocialBar from '../social-bar/SocialBar'


const Banner = (props) => {
    const {textListData,formVisible,socialBarData} = props;
    return (
    <div className={styled.bannerWrapper} >
        <h1 className={styled.title}>{Texts.ua.title}</h1>
        <CoshText
            text={Texts.ua.subTitle1}
            classes={styled.msText1} 
        />
        <Buttons
        formVisible={formVisible}
        />
        <SocialBar
            socialBarData={socialBarData}
        />
        <Title
            title={Texts.ua.msText2}
        />
            <div className={styled.generalListWrapper}>
            {
                textListData.map((item,index) => {
                    return (
                        <UniversalList
                            iconClass={styled.imgList}
                            iconSrc={item.src}
                            textClass={styled.listText}
                            text={item.text}
                            ListWrapperClass={styled.listWrapper}
                            iconWrapper={styled.iconWrapper}
                            key={index}
                        />
                    )
                })
            }
            </div>
    </div>
    )
}

export default Banner