angular.module('Game', [])
.service('GameManager', function() {
  this.grid = [['','',''],['','',''],['','','']]
  this.player = 'X'
  this.update = function($row, $col) {
  	this.grid[$row][$col]= this.swap_player()
  }
  this.swap_player = function(){
  	if (this.player == 'X')
  	  this.player = 'O'
  	else
      this.player = 'X'
    return this.player
  }
})