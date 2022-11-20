import CoshImage from "../CoshImage/CoshImage";
import CoshText from "../CoshText/CoshText";

const UniversalList = (props) => {
    const {iconClass,iconSrc,iconAlt,textClass,text,ListWrapperClass,iconWrapper} = props;
    return (
        <div className={ListWrapperClass}>
            <CoshImage
                imgClass={iconClass}
                src={iconSrc}
                alt={iconAlt}
                imgWrapperClass={iconWrapper}
            />
            <CoshText
                text={text}
                classes={textClass}
            />
        </div>
    )
}

export default UniversalList