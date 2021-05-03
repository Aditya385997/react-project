import React, { useState } from 'react'
import '../Css/PaymentDetail.css'
import Input from './utils/Input';
import Button from './utils/Button';
import { useHistory } from 'react-router';
import { useDispatch } from 'react-redux';
import { setBasicCreditCardNum, setBasicCvvNumber, setBasicExpiryDate, SET_BASIC_EXPIRY_DATE } from '../redux/PaymentDetail/PaymentDetailAction';

const PaymentDetail = () => {
    const history = useHistory();
    const dispatch = useDispatch();
    const[cardNum,setCardNum]=useState("")
    const[date,setDate]=useState("")
    const[cvv,setCvv]=useState("")
    
    const submitPaymentForm = () =>{
        //submit to the next page
        dispatch(setBasicCreditCardNum(cardNum))
        dispatch(setBasicExpiryDate(date))
        dispatch(setBasicCvvNumber(cvv))
        history.push("/showdetail")
    }

    return (
        <div className="paymentDetail">
            <Input value={cardNum} onChange={e=>setCardNum(e.target.value)} type="number" placeholder="Credit Card Number"/>
            <Input value={date} onChange={e=>setDate(e.target.value)} type="date" placeholder="expiry date"/>
            <Input value={cvv} onChange={e=>setCvv(e.target.value)} type="number" placeholder="CVV number"/>
            <button onClick={submitPaymentForm}>Submit</button>
        </div>
    )
}
export default PaymentDetail;