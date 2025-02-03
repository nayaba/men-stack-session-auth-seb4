const bcrypt = require('bcrypt')
const User = require('../models/user')

const signUp = (req, res) => {
    res.render('auth/sign-up.ejs', 
        {title: 'Sign up', msg: ''} )
}

const addUser = async (req, res) => {
    console.log('request body: ', req.body)
    const userInDatabase = await User.findOne({ username: req.body.username})
    if (userInDatabase) {
        return res.render('auth/sign-up.ejs',{
            title: 'Sign up', 
            msg: 'Username already taken.'
        })
    }
    if (req.body.password !== req.body.confirmPassword) {
        return res.render('auth/sign-up.ejs', {
            title: 'Sign up',
            msg: 'Password and Confirm Password must match.'
        })
    }
    const hashedPassword = bcrypt.hashSync(req.body.password, 10)
    req.body.password = hashedPassword

    const user = await User.create(req.body)
    console.log('new user: ', user)
    return res.send(`Thanks for signing up ${user.username}`)
}

module.exports = {
    signUp,
    addUser,
}