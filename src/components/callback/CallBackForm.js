import './index.css'

const CallBackForm = (props) => {
    return (
        <div className='form-wrapper'>
            <form className='callback-form'>
                <input className='name' type="text" placeholder='Name'/>
                <input className='phone' type="tel" placeholder='+380XX-XXX-XX-XX' maxLength={16}/>
                <button className='submit-btn' type="submit">Go</button>
            </form>
        </div>
    )
}

export default CallBackForm