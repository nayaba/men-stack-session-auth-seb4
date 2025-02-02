const signUp = (req, res) => {
    res.render('auth/sign-up.ejs', {title: 'Sign up'} )
}

module.exports = {
    signUp,
}