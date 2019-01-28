require("dotenv").config();

export const AUTH_CONFIG = {
    clientId: process.env.AUTH_CLIENTID,
    domain: process.env.AUTH_DOMAIN,
    callbackURL: process.env.AUTH_CALLBACKURL
};

console.log(AUTH_CONFIG);