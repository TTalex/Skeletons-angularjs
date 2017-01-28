// Testing filters
describe("Filters tests", function(){
    beforeEach(module('SkeletonApp'));

    describe("unquote filter", function(){
        var $filter, unquote;
        beforeEach(inject(function(_$filter_){
            $filter = _$filter_;
            unquote = $filter("unquote");
        }));
        it("should properly unquotes", function(){
            expect(unquote("'Coty'")).toEqual("Coty");
        });
        it("should not try to unquote numbers", function(){
            expect(unquote(3)).toEqual(3);
        });
    });
});
