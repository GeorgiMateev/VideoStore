﻿var StoreViewModel = function (store) {
    /*Private variables*/
    var self = this;

    /*Private methods*/
    var getStoreInfoCallback = function (responseData) {
        self.storeInfo(ko.mapping.fromJS(responseData));
    };

    /*Public variables*/
    self.template = "storeInfoView";
    self.storeInfo = ko.observable();

    /*Public methods*/
    self.showMovieInfo = function (movie) {
        var movieViewModel = new MovieViewModel(movie);
        app.appViewModel.navigateTo(movieViewModel);
    };   

    /*Initilize*/
    StoresProvider.getStoreInfo(store.id, getStoreInfoCallback);    
};