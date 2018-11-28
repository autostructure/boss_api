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

describe("Check customFormFunctions: Nested Objects", function() {
    var alpha = {
        "b": "Bravo",
        "c": "Charlie",
        "d": {
            "d": "Delta",
            "e": "Echo",
            "f": {
                "g": "Golf",
                "h": "Hotel",
                "i": "Indigo",
                "j": {
                    "r": "Romeo",
                    "u": "Utah",
                }
            }
        }
    }
    var delta = alpha.d;
    var foxtrot = delta.f;
    var juliet = foxtrot.j;
    it ("Get Original Nested Objects", function() {
        expect(CustomFormFunctions.getNested(alpha, "d.f.g")).toBe("Golf");
        expect(CustomFormFunctions.getNested(foxtrot, "j.r")).toBe("Romeo");
        expect(CustomFormFunctions.getNested(alpha, "d.f")).toBe(foxtrot);
        expect(CustomFormFunctions.getNested(juliet, "r")).toBe("Romeo");
    });
    it ("Set More Nested Objects", function() {
        CustomFormFunctions.setNested(alpha, "k.p.d", "Delta");
        CustomFormFunctions.setNested(alpha, "d.f.t", "Tango");
        CustomFormFunctions.setNested(delta, "f.u", "Utah");
        CustomFormFunctions.setNested(juliet, "t", "Tango");
        expect(CustomFormFunctions.getNested(alpha, "k.p.d")).toBe("Delta");
        expect(CustomFormFunctions.getNested(delta, "f.t")).toBe("Tango");
        expect(CustomFormFunctions.getNested(alpha, "d.f.u")).toBe("Utah");
        expect(CustomFormFunctions.getNested(juliet, "t")).toBe("Tango");
    });
});

$.ajax({
    "url":"/boss/empProfile",
    "method":"GET",
    "success":function(data) {
        describe("Ajax Test Alpha", function() {
            console.log(data);
            it ("Just checking to see if something, anything, works", function() {
                expect(true).toBe(true);
            });
        });
    },
    "error":function(a) {
        describe("Ajax Test Alpha", function() {
            console.log(a.responseJSON);
            it ("Just checking to see if something, anything, works", function() {
                expect(true).toBe(true);
            });
        });
    }
});