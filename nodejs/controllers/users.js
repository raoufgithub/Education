const {users, validate} = require('../Models/users');
const bcrypt = require('bcrypt');

const createUser = async (req, res) => {

    
    try{
        
        const { error } = validate(req.body);
        
        if (error) res.status(400).send({message:req.details[0].message})
        
        const user = await users.findOne({email : req.body.email})
        
        if (user) res.status(407).send({message:'User name already exist'})
        
        const salt = await bcrypt.genSalt(Number(process.env.SALT));
    
        const hashPassword = await bcrypt.hash(req.body.password,salt)
        
        const newUser = new users({...req.body, password : hashPassword});
        
        await newUser.save();
        res.status(201).json(newUser);

        
        
        
    }
    catch (error){
        
        res.status(408).json({message : error.message});
    }
}

const authUser = async (req, res) => {

    
    try{
        
        const user = await users.findOne({email : req.body.email})
        
        if (!user) res.status(407).send({message:'User name or password incorrect ' + req.body.email})
        
        const salt = await bcrypt.genSalt(Number(process.env.SALT));
    
        const hashPassword = await bcrypt.hash(req.body.password,salt)
        const validPassword = await bcrypt.compare(
            req.body.password, user.password
        )
        
        
        console.log('After compare hashage')
        if (!validPassword)res.status(401).send('Username or password incorrect')
        
        const token = user.generateAuthToken();
        res.status(200).send({token : token, message : 'user has been logged successfuly'})
    }
    catch (error){
        
        res.status(408).json({message : error.message});
    }
}

module.exports = {
    createUser,
    authUser,
    
}