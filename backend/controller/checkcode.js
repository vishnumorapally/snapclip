const UserModel = require("../model/user")
const checkcode = async (req,res)=>{
    try {
        const {code} = req.body

        const codecheck = await UserModel.findOne({code})

        if(codecheck){
            return res.status(400).json({
                message : "code already exists",
                success : false,
                data : codecheck
            })
        }
        
    return res.status(200).json({
        message : "code not exists",
        success : true,
        data : codecheck
    })
    } catch (error) {
        res.status(400).json({
            message : error.message || error,
            success : false
        })
    }
}

module.exports = checkcode