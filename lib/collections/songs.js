Songs = new Mongo.Collection("songs");

//helper for getting all songs in the current queue
Songs.currentQueue = function () {
    return Songs.find({}, {fields: {"artist": true, "name": true}});
};
