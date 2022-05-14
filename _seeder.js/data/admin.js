const bcrypt = require("bcryptjs")
const admin =[
    {
        name:"admin",
        email:"admin@gmail.com",
        password:bcrypt.hashSync("123456",10),
        isAdmin:true
    }
  
]
module.exports =admin