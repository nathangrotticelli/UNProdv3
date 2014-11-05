angular.module('sociogram.services', [])
.factory('PetService', function() {
  var events = {};
  var single = {};
  var userItem = {};
  var school = "";
  var unFriends = [];
  var userProfId = "";
  var newUser = "no";

  // var unFriends = [];
  // var notifications = {};

  return {
    getCache: function () {
                return profileCache;
            },
   				getEvents: function () {
                return events;
            },
            getSingle: function () {
                return single;
            },
            setSingle: function(event) {
                single = event;
            },
            setEvents: function(value) {
                events = value;
            },
            setSchool: function(schoolName) {
                school = schoolName;
            },
            getSchool: function () {
                return school;
            },
            flipWatched: function(event){
              events[event.name].watched=!events[event.name].watched;
            },
             getWatched: function(event){
              return events[event.name].watched;
            },
              setUserId: function(userId) {
                // alert('setting id');
                // alert(userProfId);
                userProfId = userId;
            },
            getUserId: function () {
                return userProfId;
            },
             setUNFriends: function(friends) {
                // alert('setting id');
                // alert(userProfId);
                unFriends = friends;

            },
            getUNFriends: function () {
                return unFriends;
            },
             setUser: function(uI) {
                // alert('setting id');
                // alert(userProfId);
                userItem = uI;

            },
            getUser: function () {
                return userItem;
            },
            setNewUser: function(userIs){
              newUser = userIs;

            },
            getNew: function () {
                return newUser;
            },
             refreshEvents: function(value) {

               for(var key in value){
                    // alert('hi');
                    if(value[key].banned=="banned"){
                      // alert('hi');
                      delete events[key];
                    }
                    else{
                       events[key] = value[key];
                    }

                        // alert('hi');
                  }

          }
        }
});

