import React from 'react'
import { useSelector } from 'react-redux';
import '../Css/ShowDetail.css';

export default function ShowDetail() {
    const name = useSelector(state => state.basic.fullName);
    const email = useSelector(state => state.basic.email);
    const phoneNumber = useSelector(state=>state.basic.phoneNumber)
    const buildingName = useSelector(state=>state.Add.buildingName)
    const flatNum = useSelector(state=>state.Add.flatNumber)
    const pincode = useSelector(state=>state.Add.pincode)
    const creditCardNum = useSelector(state=>state.payment.creditCardNum)
    const expiryDate = useSelector(state=>state.payment.expiryDate)
    const cvvNum = useSelector(state=>state.payment.cvvNumber)




    return (
        <div className="showDetails">
            <div className="showStyle showBasicDetail">
                <p>{name}</p>
                <p>{email}</p>
                <p>{phoneNumber}</p>
            </div>
                
            <div className="showStyle showAddressDetail">
                <p>{buildingName}</p>
                <p>{flatNum}</p>
                <p>{pincode}</p>
            </div>
                
            <div className="showStyle showPaymentDetail">
                <p>{creditCardNum}</p>
                <p>{expiryDate}</p>
                <p>{cvvNum}</p>
            </div>

        </div>
    )
}
 