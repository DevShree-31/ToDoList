const { verify } = require("jsonwebtoken");
const { ServerConfig } = require("../config");
const { errorResponse } = require("../utils");

const authenticate=(req,res,next)=>{
    const token=req.header("Authorization");
    if(!token){
        errorResponse.error="Token not found"
        return res.status(401).send(errorResponse);
    }

    const parsedToken=token.split(' ')[1];
    try {
        const decoded=verify(parsedToken,ServerConfig.JWTSECRET)
        req.userId=decoded.sub
    next()
    } catch (error) {
        errorResponse.error="Invalid token"
        return res.status(401).send(errorResponse);
    }
}

module.exports=authenticate