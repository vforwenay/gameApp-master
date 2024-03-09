describe("Game", function() {
  const game =  new Game();

  describe("If you choose rock and system chooses paper", function(){
    const yourChoice = 'rock'
    const systemChoice = 'paper'
    
    it("should return you lose", function() {
      const result = game.winAnalysis(yourChoice, systemChoice);
      expect(result).toEqual("You lose!");
    });
  })

  describe("If you choose paper and system chooses rock", function(){
    const yourChoice = 'paper'
    const systemChoice = 'rock'
    
    it("should return you win", function() {
      const result = game.winAnalysis(yourChoice, systemChoice);
      expect(result).toEqual("You win!");
    });
  })

  describe("If you choose paper and system chooses scissors", function(){
    const yourChoice = 'paper'
    const systemChoice = 'scissors'
    
    it("should return you lose", function() {
      const result = game.winAnalysis(yourChoice, systemChoice);
      expect(result).toEqual("You lose!");
    });
  })

  describe("If you choose scissors and system chooses paper", function(){
    const yourChoice = 'scissors'
    const systemChoice = 'paper'
    
    it("should return you win", function() {
      const result = game.winAnalysis(yourChoice, systemChoice);
      expect(result).toEqual("You win!");
    });
  })

  describe("If you choose rock and system chooses scissors", function(){
    const yourChoice = 'rock'
    const systemChoice = 'scissors'
    
    it("should return you lose", function() {
      const result = game.winAnalysis(yourChoice, systemChoice);
      expect(result).toEqual("You win!");
    });
  })

  describe("If you choose scissors and system chooses rock", function(){
    const yourChoice = 'scissors'
    const systemChoice = 'rock'
    
    it("should return you win", function() {
      const result = game.winAnalysis(yourChoice, systemChoice);
      expect(result).toEqual("You lose!");
    });
  })
});
