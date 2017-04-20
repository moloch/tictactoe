angular
.module('ticTacToeApp', ['Game'])
.controller('GameController', function(GameManager){
  this.game = GameManager
})