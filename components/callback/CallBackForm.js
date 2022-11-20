import styled from './CallBackForm.module.css'

const CallBackForm = (props) => {
    return (
        <div className={styled.formWrapper}>
            <form className={styled.callbackForm}>
                <input className='name' type="text" placeholder='Name'/>
                <input className='phone' type="tel" placeholder='+380XX-XXX-XX-XX' maxLength={16}/>
                <button className='submit-btn' type="submit">Go</button>
            </form>
        </div>
    )
}

export default CallBackForm