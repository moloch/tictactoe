angular.module('Game', [])
.service('GameManager', function() {

  this.grid = [['','',''],['','',''],['','','']]
  this.player = 'X'
  this.winner = ''

  this.update = function(row, col) {
    if (this.grid[row][col] == ''){
      this.grid[row][col] = this.player
      this.check_winning_positions(row,col)
      this.swap_player()
    }
  }

  this.swap_player = function(){
    if (this.player == 'X')
      this.player = 'O'
    else
      this.player = 'X'
  }

  this.check_winning_positions = function(row, col){
    this.check_row_win(row)
    this.check_column_win(col)
    this.check_main_diagonal_win()
    this.check_secondary_diagonal_win()
  }

  this.check_row_win = function(x){
    for(y=0;y<=2;y++){
      if (this.grid[x][y] != this.player)
        return
    }
    this.winner = this.player
  }

  this.check_column_win = function(y){
    for(x=0;x<=2;x++){
      if (this.grid[x][y] != this.player)
        return
    }
    this.winner = this.player
  }

  this.check_main_diagonal_win = function(){
    for(x=0;x<=2;x++){
      if (this.grid[x][x] != this.player)
        return
    }
    this.winner = this.player
  }

  this.check_secondary_diagonal_win = function(){
    if ((this.player == this.grid[0][2]) &&
        (this.player == this.grid[1][1]) &&
        (this.player == this.grid[2][0]))
      this.winner = this.player
  }

})
