console.log('js');

var app = angular.module('PetHotelApp', []);

app.controller('PetHotelController', ['$http', function($http){
    console.log('Pet controller has been loaded');
    var self = this;
    self.petNames= [];
    self.getPets = function() {
        $http({
            method: 'GET',
            url: '/pet'
    }).then(function(response){
            console.log(response);
            console.log(response.data);
            self.petNames = response.data;
            
    }); //end of http
    }; // end of getPets

self.getPets();





    self.newPet ={};

    self.addPet = function() {
        console.log('add button clicked');
        console.log('self.newPet', self.newPet)
        console.log('name', self.newPet.name);
        $http({
          method: 'POST',
          url: '/pet',
          data: self.newPet
        }).then(function(response){
          console.log(response);
          self.newPet ={};
          //self.getPets();

        })
      }



}]);