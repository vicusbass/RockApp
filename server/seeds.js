/**
 * Created by vicus on 23/09/15.
 */
seedSongs = [
    {
        "artist": "U2",
        "name": "Where the streets have no name"
    },
    {
        "artist": "Metallica",
        "name": "King Nothing"
    },
    {
        "artist": "Vicus",
        "name": "Shut up, I kill you!"
    }
];

if (Songs.find().count() === 0) {
    _.each(seedSongs, function (song) {
        Songs.insert(song);
        console.log("Inserting " + song.artist + " - " + song.name);
    })
}
;

if (Meteor.users.find().count() === 0) {
    var id = Accounts.createUser({
        username: "vicus",
        email: "vasile.pop@gmail.com",
        password: "vasile",
        profile: {name: "Vasile Pop"},
        roles: []
    });

    Roles.addUsersToRoles(id, ["Administrator"]);

    Accounts.createUser({
        username: "john",
        email: "john.doe@gmail.com",
        password: "vasile",
        profile: {name: "John Doe"},
        roles: []
    });
}
