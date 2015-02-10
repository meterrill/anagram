describe("anagram", function() {
  it("checks to see if inputted word exists in a list of words", function() {
    expect(anagram("cat", "cat")).to.eql(["cat"]);
  });

  it("checks to see if the letters from iputted word match a list of words", function() {
    expect(anagram("cat", "cat tac art patch")).to.eql(["cat", "tac"]);
  });
});
