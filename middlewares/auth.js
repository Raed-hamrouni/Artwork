const jwt = require("jsonwebtoken");
const userModel = require("../models/user");

const MiddlewareAuth = async(request, response, next) => {
    let token = request.headers.authorization;
    console.log(token)
    await jwt.verify(token, "secret", async (err, payload) => {
        if (err) {
            console.log(err);
            return response.status(401).json({ error: "invalid JWT " })
        }
        else {
            try {
                console.log("payload : ", payload)
                let user = await userModel.findById(payload.id)
                console.log("the user : ", user)
                request.user=user
                next();
            } catch (error) {
                return response.status(401).json({ error: "invalid Payload " })
            }
        }
    })

}
module.exports = MiddlewareAuth 