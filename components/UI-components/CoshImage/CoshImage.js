import "./CoshImage.module.css";
import placeholder_img from "./media/placeholder.jpg"
import Image from "next/image";

const CoshImage = (props) => {
    const {imgClass, imgWrapperClass} = props;
    const Img = {
        src: props.src
      }
    return (
        <div className={`cosh-image ${imgWrapperClass}`}>
               <a href={props.link || '#'} className={"cursor-default"}> 
                    <Image 
                        className={`default-class-img ${imgClass}`} 
                        src={Img.src || placeholder_img} 
                        alt={props.alt || 'Images'}
                        height={`100%`}
                    />
                </a>
            </div>
    )
}
export default CoshImage