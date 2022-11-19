import "./index.css";
import placeholder_img from "./media/placeholder.jpg"

const CoshImage = (props) => {
    const {imgClass, imgWrapperClass} = props;
    const Img = {
        src: props.src
      }
    return (
        <div className={`cosh-image ${imgWrapperClass}`}>
               <a href={props.link || '#'} className={"cursor-default"}> 
                    <img 
                        className={`default-class-img ${imgClass}`} 
                        src={Img.src || placeholder_img} 
                        alt={props.alt || 'Images'}
                    />
                </a>
            </div>
    )
}
export default CoshImage