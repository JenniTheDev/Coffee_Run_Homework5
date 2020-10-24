// coffeerun-2bf64

(function (window) {
    'use strict';
    var App = window.App || {};
    var $ = window.jQuery;

    // initalize firebase
    firebase.initializeApp(firebaseConfig);
    firebase.analytics();
    var firestore = firebase.firestore();
    const docRef = firestore.collection("coffee");
   
    var coffeeOrder = docRef.where('emailAddress' , '==', key);

    function RemoteDataStore(url) {
        if (!url) {
            throw new Error('No remote URL supplied.');
        }

        this.serverUrl = url;
    }

    coffeeOrder.get().then(function(querySnapshot){
        console.log(querySnapshot)
        if (querySnapshot.empty){
            console.log("not found");
            docRef.add(val).then(function(docRef){

            })
        }
    })



   RemoteDataStore.prototype.add = function (key, val) {
      $.post(this.serverUrl, val, function (serverResponse) {
            console.log(serverResponse);
        });
   };

   

     RemoteDataStore.prototype.getAll = function (cb) {
        $.get(this.serverUrl, function (serverResponse) {
            console.log(serverResponse);
            cb(serverResponse);
        });
    };

    RemoteDataStore.prototype.get = function (key, cb) {
        $.get(this.serverUrl + '/' + key, function (serverResponse) {
            console.log(serverResponse);
            cb(serverResponse);
        });
    };

        // if problems remove ajax calls
    RemoteDataStore.prototype.remove = function (key) {
        $.ajax(this.serverUrl + '/' + key, {
            type: 'DELETE'
        });
    };

    App.RemoteDataStore = RemoteDataStore;
    window.App = App;

})(window);