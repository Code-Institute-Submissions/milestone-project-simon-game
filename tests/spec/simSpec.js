describe("playButton", function() {
    describe("startGame", function() {

        it("should start game", function() {
            expect(play()).toBe("Playing");
        });
    });


    describe("lightUpTiles", function() {

        it("should select red", function() {
            expect(lightUpColor('redbox')).toBe('red');
        });
    });


    describe("dullTiles", function() {

        it("should select darkred", function() {
            expect(clearColor('redbox')).toBe('darkred');
        });
    });
});
