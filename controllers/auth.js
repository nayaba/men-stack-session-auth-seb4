const signUp = (req, res) => {
    res.render('auth/sign-up.ejs', {title: 'Sign up'} )
}

const addUser = (req, res) => {
    console.log('request body: ', req.body)
}

module.exports = {
    signUp,
    addUser,
}