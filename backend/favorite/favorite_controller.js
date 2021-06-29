const Favorite = require('./favorite dao');

exports.addFavorite = (req, res, next) => {
  const favorite = {
    user_id: req.body.user_id,
    song_id: req.body.song_id,
    platform: req.body.platform
  }

  Favorite.create(favorite, (err, favorite) => {
    if (err) return res.status(500).send('Server error');
    const dataFavorite = {
      user_id: favorite.user_id,
      song_id: favorite.song_id,
      platform: favorite.platform
    }

    res.send({ dataFavorite });
  });
}

exports.userFavorite = (req, res, next) => {
  const userData = {
    "user_id": req.body.user_id,
    "song_id": req.body.song_id,
    "platform": req.body.platform
  }
  Favorite.findOne(userData, (err, favorite) => {
    if (err) return res.status(500).send('Server error!');

    if (!favorite) {
      res.status(409).send({ message: 'Something is wrong' });
    } else {
      const dataFavorite = {
        id: favorite.id,
      }
      res.send({ dataFavorite });
    }
  });
}

exports.removeFavorite = (req, res, next) => {
  const userData = {
    "user_id": req.body.user_id,
    "song_id": req.body.song_id,
    "platform": req.body.platform
  }
  Favorite.findOneAndRemove(userData, (err, favorite) => {
    if (err) return res.status(500).send('Server error!');

    if (!favorite) {
      res.status(409).send({ status: 'fail' });
    } else {
      const status = {
        status: 'ok',
      }
      res.send({ status });
    }
  });
}

exports.allFavorites = (req, res, next) => {
  const userData = {
    "user_id": req.body.user_id
  }
  Favorite.find(userData, (err, favorites) => {
    if (err) return res.status(500).send('Server error!');

    if (!favorites) {
      res.status(409).send({ message: 'Something is wrong' });
    } else {
      res.send({ 'favorites': favorites });
    }
  });
}