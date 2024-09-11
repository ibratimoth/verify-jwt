const verifyTokenController = async (req, res) => {
    try{
        res.json({
            message : 'Token is valid',
            user : req.user
        })
    }catch(error){
        console.log(error)
    }
}

module.exports = {verifyTokenController}