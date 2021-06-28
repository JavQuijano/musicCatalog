const Users = require('./auth_controller');
const Favorites = require('../favorite/favorite_controller')
module.exports = (router)=> {
    router.post('/register', Users.createUser);
    router.post('/login', Users.loginUser);
    router.post('/favorite', Favorites.addFavorite)
    router.post('/user_favorite', Favorites.userFavorite)
    router.post('/remove_favorite', Favorites.removeFavorite)
    router.post('/all_favorites', Favorites.allFavorites)
}