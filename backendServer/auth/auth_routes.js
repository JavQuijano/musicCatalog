const Users = require('./auth_controller');
module.exports = (router)=> {
    router.post('/register', Users.createUser);
    router.post('/login', Users.loginUser);
}