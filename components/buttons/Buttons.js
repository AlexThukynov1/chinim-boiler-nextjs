import styled from "./Buttons.module.css"
import Texts from "../../resources/text";
import Images from "../../resources/image";
import Image from "next/image";


const Buttons = (props) => {
    const {formVisible} = props;
    return (
        <div className={styled.buttonsWrapper}>
            <a className={styled.btnLink} href="tel:+38(095)-367-47-03">
                <button className={styled.callBtn}>
                    <Image src={Images.callImg.src} alt="Button 1 icon" className={styled.iconImg}/>
                    <span className="">{Texts.ua.button1}</span>
                </button>
            </a>
            <a className={styled.btnLink} href="#">
            <button onClick={formVisible} className={styled.callbackBtn}>
                <Image src={Images.emailImg.src} alt="Button 2 icon" className={styled.icon2}/>
                <span className="">{Texts.ua.button2}</span>
            </button>
            </a>
        </div>
    )
}

export default Buttons