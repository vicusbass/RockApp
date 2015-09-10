/**
 * Created by vicus on 10/09/15.
 */
Template.homeIndex.helpers({
    currentQueue: function () {
        return Songs.currentQueue();
    }
});