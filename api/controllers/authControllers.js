import { signup } from '../services/authServices.js';

export const handleSignup = async (req,res)=>{
    let response = await signup(req,res);
    res.send(response);
}