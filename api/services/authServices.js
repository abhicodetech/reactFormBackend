import User from "../../models/user.js";
import argon2 from 'argon2';

export const signup = async (req,res) => {

    try {
        console.log('This is Req.Body',req.body);
        let body = req.body;
        const hashedPassword = await argon2.hash(body.password);

        const newUser = await User.create({
            fullName: body.fullName,
            Mobile: body.contact,
            email: body.email,
            birthDate: body.birthDate,
            password: hashedPassword
        });
        return newUser;
    }
    catch (error) {
        console.log(error);
        res.status(404).send('Error');
    }
}