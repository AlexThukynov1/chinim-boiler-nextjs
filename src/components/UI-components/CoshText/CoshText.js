import "./index.css";

const CoshText = (props) => {
    const {text, classes} = props;

    return (
        <div className={`cosh-text ${classes}`}>
            <span>{text || "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eos, dolorem?"}</span>
        </div>
    )
}

export default CoshText