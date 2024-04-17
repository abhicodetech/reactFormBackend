import User from "../../models/user.mjs";
import argon2 from 'argon2';

export const signup = async (req,res) => {

    try {
        console.log('This is Req.Body',req.req.body);
        let body = req.req.body;
        const hashedPassword = await argon2.hash(body.password);

        const newUser = await User.create({
            fullName: body.fullName,
            Mobile: body.contact,
            email: body.email,
            birthDate: body.birthDate,
            password: hashedPassword
        });
    }
    catch {
        return null;
        // res.status(404).send('Error');
    }
    return newUser;
}