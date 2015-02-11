var anagram = function(word, list) {
  var listArray = list.split(" ");
  var wordArray = word.split(" ");
  var matchingArray = []

  listArray.forEach(function(listItem) {
    var letterSort = listItem.split("").sort();
    var wordSort = word.split("").sort();
    var match = true

    for (var i = 0; i < wordSort.length; i++) {
      if (letterSort[i] === wordSort[i]) {
        match;
      } else {
        match = false;
      }
    };
    if (match === true) {
      matchingArray.push(listItem);
    }
  });
  return matchingArray;
};

$(function() {
  $("form").submit(function(event) {
    var wordInput = $("input#word").val();
    var listInput = $("input#list").val();
    var anagramList = anagram(wordInput, listInput);
    $("#list-results").text(anagramList);

    event.preventDefault();
  });
});
