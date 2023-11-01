
const { expect } = require("chai");
const { polybius } = require("../src/polybius");

describe("polybius", () => {
    it("should encode the message according to the polybius grid", () => {
      const origMessage = "hello";
      const actual = polybius(origMessage);
      const expected = "3251131343";
      expect(actual).to.equal(expected);
    });
    it("ignores capital letters when encoding", () => {
        const origMessage = "hel lo";
        const actual = polybius(origMessage);
        const expected = "325113 1343";
        expect(actual).to.equal(expected);
      });    
    it("should retain spaces when encoding", () => {
        const origMessage = "hel lo";
        const actual = polybius(origMessage);
        const expected = "325113 1343";
        expect(actual).to.equal(expected);
      });
      it("should retain spaces when decoding", () => {
        const origMessage = "325113 1343";
        const actual = polybius(origMessage, false);
        const expected = "hel lo";
        expect(actual).to.equal(expected);
      });  
      it("should decode i and j together", () => {
        const origMessage = "4432423352125413";
        const actual = polybius(origMessage, false);
        const expected = "th(i/j)nkful";
        expect(actual).to.equal(expected);
      });           
    it("should return false if odd number of digits is provided to decode", () => {
        const origMessage = "443";
        const actual = polybius(origMessage, false);
        expect(actual).to.equal(false);
    });
    it("should decode the message according to the polybius grid", () => {
        const origMessage = "3251131343";
        const actual = polybius(origMessage, false);
        const expected = "hello";
        expect(actual).to.equal(expected);
    });           
  });
  