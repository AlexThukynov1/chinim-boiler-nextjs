import styled from'./OrderForm.module.css'

const OrderForm = (props) => {
    const {orderId,onCloseOrder} = props;
    return (
        <div className={styled.orderFormWrapper}>
            <div className={styled.id}>
                <div className={styled.orderForm}>
                    <span className={styled.orderText}>Ваша заявка №{orderId} прийнята,наш менеджер зв'яжеться з Вами найближчим часом</span>
                    <div className={styled.orderBtn} onClick={onCloseOrder}><span>OK</span></div>
                </div>
            </div>
        </div>
    )
}

export default OrderForm