// Write your tests here!
const { expect } = require("chai");
const { caesar } = require("../src/caesar");

describe("caesar", () => {
    it("should encode the message by shifting letters the number of times indicated in input", () => {
      const origMessage = "abcdefg";
      const actual = caesar(origMessage, 1);
      const expected = "bcdefgh";
      expect(actual).to.equal(expected);
    });
    it("should decode the message by shifting back letters the number of times indicated in input", () => {
        const origMessage = "bcdefgh";
        const actual = caesar(origMessage, 1, false);
        const expected = "abcdefg";
        expect(actual).to.equal(expected);
      });    
    it("should ignore capital letters when encoding", () => {
        const origMessage = "abcdEFg";
        const actual = caesar(origMessage, 1);
        const expected = "bcdefgh";
        expect(actual).to.equal(expected);
      });         
      it("should handle shifts around alphabet when encoding", () => {
        const origMessage = "zzzz";
        const actual = caesar(origMessage, 1);
        const expected = "aaaa";
        expect(actual).to.equal(expected);
      });     
      it("should handle shifts around alphabet when decoding", () => {
        const origMessage = "aaaa";
        const actual = caesar(origMessage, 1, false);
        const expected = "zzzz";
        expect(actual).to.equal(expected);
      }); 
      it("should maintain spaces and non alpha characters when decoding", () => {
        const origMessage = "aa aa 9";
        const actual = caesar(origMessage, 1, false);
        const expected = "zz zz 9";
        expect(actual).to.equal(expected);
      }); 
      it("should maintain spaces and non alpha characters when encoding", () => {
        const origMessage = "a  bc # d";
        const actual = caesar(origMessage, 1);
        const expected = "b  cd # e";
        expect(actual).to.equal(expected);
      });                            
    it("should return false if shift value is null", () => {
        const origMessage = "abcdef";
        const actual = caesar(origMessage, null);
        expect(actual).to.equal(false);
    });
    it("should return false if shift value is <-25", () => {
        const origMessage = "abcdef";
        const actual = caesar(origMessage, -26);
        expect(actual).to.equal(false);
    });    
    it("should return false if shift value is >25", () => {
        const origMessage = "abcdef";
        const actual = caesar(origMessage, 26);
        expect(actual).to.equal(false);
    });    
    it("should return false if shift value not provided", () => {
        const origMessage = "abcdef";
        const actual = caesar(origMessage);
        expect(actual).to.equal(false);
    });                 
  });
  