
const User = require('../models/User');

exports.createUser =  (req, res) => {
    try{
        const name = req.body.name;
        const email = req.body.email;
        const phone = req.body.phone;

        const data = User.create( {
                name: name,
                email: email,
                phonenumber: phone
        }); 

        res.status(201).json({newUserDetail: data });
        } catch(err) {
        res.status(500).json({error:err})
    }
};

exports.getAllUsers = async (req, res) => {
    try{
    const users = await User.findAll();
    res.status(200).json({allUsers: users});
    } catch(err) {
    res.status(500).json({error:err})
    }
};

exports.deleteUser = async (req, res) => {
    try{
    const userId = req.params.id;
    
    await User.destroy({ where: { id: userId } })
    res.sendStatus(200);
    }catch(err) {
    res.status(500).json({error:err})
    }
};
