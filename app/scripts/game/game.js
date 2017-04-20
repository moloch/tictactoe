angular.module('Game', [])
.service('GameManager', function() {
  this.grid = [['X','O','X'],['X','O','X'],['X','O','X']]
  this.newGame = function() {}
})