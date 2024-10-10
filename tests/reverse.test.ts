import { expect } from "chai";
import { describe } from "mocha";
import { reverseSentence } from "../src/reverse";

describe("reverseSentence", () => {
  it("should do nothing when passed false false", () => {
    const sentence = "this is a sentence";
    const reverseWords = false;
    const reverseLetters = false;

    expect(reverseSentence(sentence, reverseWords, reverseLetters)).to.equal(
      "this is a sentence"
    );
  });

  it("should reverse a single letter to itself", () => {
    const sentence = "a";
    const reverseWords = true;
    const reverseLetters = true;

    expect(reverseSentence(sentence, reverseWords, reverseLetters)).to.equal(
      "a"
    );
  });

  it("should reverse sentences by words", () => {
    const sentence = "this is a sentence";
    const reverseWords = true;
    const reverseLetters = false;

    expect(reverseSentence(sentence, reverseWords, reverseLetters)).to.equal(
      "sentence a is this"
    );
  });

  it("reverse sentence", () => {
    const sentence = "race a car";
    const reverseWords = true;
    const reverseLetters = false;

    expect(reverseSentence(sentence, reverseWords, reverseLetters)).to.equal(
      "car a race"
    );
  });


  it("should reverse sentences by letters", () => {
    const sentence = "the letters";
    const reverseWords = false;
    const reverseLetters = true;

    expect(reverseSentence(sentence, reverseWords, reverseLetters)).to.equal(
      "eht srettel"
    );
  });

  it("should reverse words only in a sentence", () => {
    const sentence = "A man a plan a canal";
    const reverseWords = true;
    const reverseLetters = false;

    const result = reverseSentence(sentence, reverseWords, reverseLetters);
    expect(result).to.equal("canal a plan a man A");
  });

  it("should reverse both", () => {
    const sentence = "this is a sentence";
    
    const reverseWords = true;
    const reverseLetters = true;

    expect(reverseSentence(sentence, reverseWords, reverseLetters)).to.equal(
      "ecnetnes a si siht"
    );

    it("should throw an error for non-string input", () => {
      const sentence = 12345; // Non-string input
      const reverseWords = true;
      const reverseLetters = true;
  
      expect(() => reverseSentence(sentence as any, reverseWords, reverseLetters)).to.throw(Error,
        "Invalid input, Sentence should be a non-empty string."
      );
    });
  });
});
