const UserModel = require("../model/user")

const getcode = async (req, res) => {
    const { code } = req.body

    const getdata = await UserModel.findOne({ code })
    if (getdata) {
        return res.status(200).json({
            message: "code exists",
            success: true,
            data: getdata
        })
    }
    return res.status(400).json({
        message: "code not exists",
        success: false
    })


}

module.exports = getcode