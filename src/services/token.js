import { Jwt } from "jsonwebtoken";
// const jwt = require("jsonwebtoken");
const secret =
  "33RJ0g5mNeMCwC/c5yLv04XGlVrxD8vfDL2LGdzcZV8XkJJnly5LjtlXcHcIiCMdV+BjYEH4iQhjw/J4O8mPiA==";
const payload = {
  //   sub: 'user_uuid',
  //   name: 'John Doe',
  iat: Math.floor(Date.now() / 1000),
  exp: Math.floor(Date.now() / 1000) + 60 * 60 * 24 * 7,
};

console.log(`Generated token: ${token}`);
export const token = Jwt.sign(payload, secret, { algorithm: "HS256" });
