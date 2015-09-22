/**
 * Created by vicus on 23/09/15.
 */
isAdmin = function () {
    var loggedUser = Meteor.user();
    result = false;
    if (loggedUser) {
        if (Roles.userIsInRole(loggedUser, ["Administrator"])) {
            result = true
        }
    }
    return result;
}