import styled  from "./StartScreen.module.css"
import CoshImage from "../UI-components/CoshImage/CoshImage"
import Images from "../../resources/image"

const StartScreenHeader= (props) => {
    const {socialBarData} = props
    return(
        <header id="header" className={styled.startScreenHeader}>
            <CoshImage
                src={Images.logoImg.src}
                alt={Images.logoImg.alt}
                imgWrapperClass={styled.logoWrapper}
                imgClass={styled.logoImg}
            />
        </header>
    )
}

export default StartScreenHeader