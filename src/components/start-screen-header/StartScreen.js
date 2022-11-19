import "./index.css"
import CoshImage from "../UI-components/CoshImage/CoshImage"
import Images from "../../resources/image"

const StartScreenHeader= (props) => {
    const {socialBarData} = props
    return(
        <header id="header" className="start-screen__header">
            <CoshImage
                src={Images.logoImg.src}
                alt={Images.logoImg.alt}
                imgWrapperClass="logo-wrapper"
                imgClass="logo-img"
            />
        </header>
    )
}

export default StartScreenHeader