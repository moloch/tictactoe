describe('Game module', function() {
  describe('GameManager', function() {
    beforeEach(module('Game'))
	var gameManager
	beforeEach(inject(function(GameManager) {
    	gameManager = GameManager
 	}))
  })
})