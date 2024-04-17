import { signup } from '../services/authServices.mjs';

export const handleSignup = async (req,res)=>{
    let response = await signup(req.res);
    if(!response) {
        res.status(404).send('Error');
    }
    else {
        res.send(response);
    }
    
}