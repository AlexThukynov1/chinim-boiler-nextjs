import "./index.css"

const UniversalButton = (props) => {
    const {btnClassWrapper, btnStyle, btnText, link} = props
    return (
        <div className={btnClassWrapper || 'defaultBtnWrapper'}>
            <a href={link || '#'}>
                <button className={btnStyle || 'defaultBtn'}>{btnText || 'Button'}</button>
            </a>
        </div>
    )
}
export default UniversalButton