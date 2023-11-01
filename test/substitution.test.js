// Write your tests here!

const { expect } = require("chai");
const { substitution } = require("../src/substitution");

describe("substitution", () => {
    it("should encode the message according to the substitution alpha provided", () => {
      const actual = substitution("thinkful", "xoyqmcgrukswaflnthdjpzibev");;
      const expected = "jrufscpw";
      expect(actual).to.equal(expected);
    });
    it("should ignore capital letters", () => {
        const actual = substitution("thinK ful", "xoyqmcgrukswaflnthdjpzibev");;
        const expected = "jrufs cpw";
        expect(actual).to.equal(expected);
      });    
    it("should retain spaces when encoding", () => {
        const actual = substitution("think ful", "xoyqmcgrukswaflnthdjpzibev");;
        const expected = "jrufs cpw";
        expect(actual).to.equal(expected);
      });
    it("should decode the message according to the substitution alpha provided", () => {
        const actual = substitution("jrufscpw", "xoyqmcgrukswaflnthdjpzibev" ,false);;
        const expected = "thinkful";
        expect(actual).to.equal(expected);
      });    
      it("should retain spaces when decoding", () => {
        const actual = substitution("jrufs cpw", "xoyqmcgrukswaflnthdjpzibev" ,false);;
        const expected = "think ful";
        expect(actual).to.equal(expected);
      }); 
      it("should return false if alphabet is missing", () => {
        const actual = substitution("jrufs cpw");;
        expect(actual).to.equal(false);
    });      
      it("when encoding, should return false if alphabet provided is not 26 chars", () => {
        const actual = substitution("test", "xoyqmcgrukswzibev12345678@#$%^&*()");;
        expect(actual).to.equal(false);
     });      
      it("when decoding, should return false if alphabet provided is not 26 chars", () => {
        const actual = substitution("jrufs cpw", "xoyqmcgrukswzibev", false);;
        expect(actual).to.equal(false);
    });
      it("when decoding, should return false if alphabet provided is not unique", () => {
        const actual = substitution("jrufs cpw", "xoyqmcgrukswzibev", false);;
        expect(actual).to.equal(false);
    });         
    it("when encoding, should return false if alphabet provided is not unique", () => {
        const actual = substitution("test", "zzzzzzz");;
        expect(actual).to.equal(false);
    });       
  });
  