describe("Alpha Suite", function() {
    // it("Bad Spec", function() {
    //     //expect(false).toBe(true);
    //     expect(false).toBe(true);
    // });
    it("Good Spec", function() {
        expect(true).toBe(true);
    });
});

describe("Check the Checker", function() {
    it ("toBe and toEqual for primative values", function() {
        expect("Hello World").toBe("Hello World");
        expect(2).toBe(2);
        expect(null).toBe(null);
        expect(new Date().getTime()).toBe(new Date().getTime());
        expect("Hello World").toEqual("Hello World");
        expect(2).toEqual(2);
        expect(null).toEqual(null);
        expect(new Date().getTime()).toEqual(new Date().getTime());
    });
    it ("not toBe and not toEqual for primative values", function() {
        expect("Hello World").not.toBe("Hello World!");
        expect(2).not.toBe("2");
        expect(null).not.toBe("");
        expect(new Date().getTime()).not.toBe(new Date().getTime() + 1);
        expect("Hello World").not.toEqual("Hello World!");
        expect(2).not.toEqual("2");
        expect(null).not.toEqual("");
        expect(new Date().getTime()).not.toEqual(new Date(21564531321).getTime());
    });
    var a = { bar: 'baz' };
    var b = { foo: a };
    var c = { foo: a };
    it ("toBe for objects", function() {
        expect(b.foo.bar).toBe(c.foo.bar);
        expect(b.foo.bar).toBe(a.bar);
        expect(c.foo).toBe(b.foo);
    });
    it ("not toBe for objects", function() {
        expect(b).not.toBe(c);
    });
    it ("toEqual for objects", function() {
        expect(new Date()).toEqual(new Date());
        expect(b.foo.bar).toEqual(c.foo.bar);
        expect(b.foo.bar).toEqual(a.bar);
        expect(c.foo).toEqual(b.foo);
        expect(b).toEqual(c);
    });
    it ("not toEqual for objects", function() {
        expect(a).not.toEqual(c);
    });

});

describe("Check Seed Records", function() {
    
});

