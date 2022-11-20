import styled from './ContactScreen.module.css'
import Texts from '../../resources/text'
import CoshText from '../../components/UI-components/CoshText/CoshText'

const ContactScreen = (props) => {
    return (
        <div id="contacts" className={styled.contactScreen}>
            <CoshText
                text={Texts.ua.contactTitle}
                classes={styled.contactTitle}
            />
            <hr className='line'></hr>
             <CoshText
                text={Texts.ua.contactText1a}
                classes={styled.contactSubTitle}
            />
            <CoshText
                text={Texts.ua.contactText1}
                classes={styled.contactText}
            />
            <CoshText
                text={Texts.ua.contactText2a}
                classes={styled.contactSubTitle}
            />
            <CoshText
                text={Texts.ua.contactText2}
                classes={styled.contactText}
            />
            <CoshText
                text={Texts.ua.contactText3a}
                classes={styled.contactSubTitle}
            />
            <CoshText
                text={Texts.ua.contactText3}
                classes={styled.contactText}
            />
        </div>
    )
}

export default ContactScreen