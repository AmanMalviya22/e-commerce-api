// const jwt = require("jsonwebtoken")

// const isTokenValid = (tk) =>  jwt.verify(tk,process.env.JWT_SECRET);

// const createJwt = ({payload})=>{
//      return jwt.sign(payload,process.env.JWT_SECRET,{
//         expiresIn: process.env.JWT_LIFETIME,
//       });
// }

// // this is for setup the cookies for web , with cookies ,
// const attachCookiesToResponse = ({ res, user }) => {
//     const token = createJwt({ payload: user });
  
//     const oneDay = 1000 * 60 * 60 * 24;
  
//     res.cookie('token', token, {
//       httpOnly: true,
//       expires: new Date(Date.now() + oneDay),
//       secure: process.env.NODE_ENV === 'production',
//       signed: true,
//     });
//   };
  
// module.exports = {
//     isTokenValid,
//     createJwt,
//     attachCookiesToResponse
// }







const jwt = require("jsonwebtoken");

const isTokenValid = (tk) => jwt.verify(tk, process.env.JWT_SECRET);

const createJwt = (user) => {
  const { _id, name, email, role } = user; // Extract required properties from the user object

  const payload = {
    _id,
    name,
    email,
    role,
  };

  const token = jwt.sign(payload, process.env.JWT_SECRET, {
    expiresIn: process.env.JWT_LIFETIME,
  });
  return token;
};

// Rest of the code remains the same
const attachCookiesToResponse = ({ res, user }) => {
  const token = createJwt(user);

  const oneDay = 1000 * 60 * 60 * 24;

  res.cookie('token', token, {
    httpOnly: true,
    expires: new Date(Date.now() + oneDay),
    secure: process.env.NODE_ENV === 'production',
    signed: true,
  });
};

module.exports = {
  isTokenValid,
  createJwt,
  attachCookiesToResponse,
};
