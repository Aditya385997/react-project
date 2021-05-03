import React,{useState} from 'react';
import '../Css/AddressDetil.css';
import Input from './utils/Input'
import Button from './utils/Button'
import {useHistory}from "react-router-dom"
import {useDispatch} from 'react-redux'
import { setAddressBuildingName, setAddressFlatNumber, setAddressPincode } from '../redux/AddressDetail/AddressAction';


const AddressDetail = () => {

    const dispatch=useDispatch();
    const[buildingName,setBuildingName]=useState("")
    const[flatNum,setFlatNum]=useState("")
    const[pincode,setPincode]=useState("")
    const history=useHistory();
    const submitAddress = () =>{

        dispatch(setAddressBuildingName(buildingName))
        dispatch(setAddressFlatNumber(flatNum))
        dispatch(setAddressPincode(pincode))
        history.push("/payment")
        //pust to payment page
    }



    return (
        <div className="addressDetail">
            <Input value={buildingName} onChange={e=>setBuildingName(e.target.value)} type="text" placeholder="building name"/>
            <Input value={flatNum} onChange={e=>setFlatNum(e.target.value)} type="text" placeholder="flat number"/>
            <Input value={pincode} onChange={e=>setPincode(e.target.value)} type="number" placeholder="pincode"/>
            <button onClick={submitAddress}>Submit Address Detail</button>            
            
        </div>
    )
}
export default AddressDetail;
