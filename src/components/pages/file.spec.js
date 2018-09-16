describe('firest test', function() {
    beforeEach(function(){
        module('bookstore');
    });

    it(':1+1 should be 2', function (done) {
        expect(1+1).toBe(2);
        done();
    });
});