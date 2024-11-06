const UserModel = require("../model/user")
const Share = async (req, res) => {
    
    const { code, data } = req.body
    try {
        const obj = {
            code,
            data
        }
        const Sharefile = await UserModel(obj)
        Sharefile.save()
        return res.status(200).json({
            message: "daata shared is good",
            success: true
        })
    } catch (error) {
        return res.status(400).json({
            message: error.message || error,
            success: false
        })
    }
}

module.exports = Share