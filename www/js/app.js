// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
angular.module('diceware', ['ionic', 'firebase'])

.factory('Items',['$firebaseArray', function($firebaseArray){
  var itemsRef = new Firebase('https://diceware-pwd-gen.firebaseio.com/items');
  return $firebaseArray(itemsRef);
}])

.controller('DiceCtrl', function($scope, $ionicListDelegate, $ionicPopup, Items){
    $scope.items = Items;
    //Range is quantity of words that will be created
    $scope.addItem = function(range){
      var letters=[];
      for(var i=0;i++;i<range){

      }
      if(letters.length()>0) {
        $scope.items.$add({
          'dice': 'teste'
        });
      }
    };
    $scope.removeItem = function(item){
      $ionicPopup.confirm({
        title: 'Remove TODO Item',
        cssClass: 'ionicModal',
        template: 'Are you sure about this?'
      }).then(function(res){
        if(res) {
          $scope.items.$remove(item);
        }
      });
    };
    $scope.setResultDice = function(result){
      $ionicPopup.alert({
        title: 'Dice Result',
        cssClass: 'ionicModal',
        template: 'Dices: '+result.toString()+' Word selected: '+diceValues[result]
      });
    }
})

function getDice(result){
  var scope = angular.element(document.getElementById("DiceCtrl")).scope();
  scope.$apply(function () {
    scope.setResultDice(getIndividualDices());
  });
}
function getIndividualDices(){
  var dices = '';
  $('.diceGroup').children('img').each(function(){
    var str = this.src.split("-",1);
    var newS = this.src.replace(str,'').replace('.gif','').replace('-','');
    dices += newS;
  });
  return dices;
}
