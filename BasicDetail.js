import React,{useState} from 'react';
import '../Css/BasicDetail.css'
import Button from './utils/Button';
import Input from './utils/Input'
import { useHistory }from "react-router"
import { useDispatch } from 'react-redux';
import { setFullname, setPhoneNumber , setBasicEmail} from '../redux/BasicDetail/BasicDetailAction';
const BasicDetail = () => {
    const dispatch=useDispatch();

    const[name,setName]=useState("");
    const [email,setEmail]=useState("");
    const [phnnumber,setphnnumber]=useState("")
    const history=useHistory()
    const submitBasicForm=()=>{
        dispatch(setFullname(name))
        dispatch(setBasicEmail(email))
        dispatch(setPhoneNumber(phnnumber))

        history.push("/address")
    }

    return (
        <div className="basicDetail">
            <Input onChange={e=>setName(e.target.value)} value={name} type="text" placeholder="Enter Full Name"/>
            <Input onChange={e=>setEmail(e.target.value)} value={email} type="text" placeholder="Enter the email address"/>
            <Input onChange={e=>setphnnumber(e.target.value)} value={phnnumber} type="number" placeholder="Enter the number"/>
            <button onClick={submitBasicForm}>Submit Basic Detail</button>
        </div>
    )
}
export default BasicDetail;