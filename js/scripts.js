$(document).ready(function(){
  $("form#word-form").submit(function(event){
    event.preventDefault();
    var sentence = $("#userInput").val();
    var vowel = 'aeiou';
    // var sentenceArray = sentence.split("");
    for (var i = 0; i < vowel.length; i++) {
      // debugger;
      for (var j = 0; j < sentence.length; j++) {
        if (vowel.charAt(i) === sentence.charAt(j)) {
          sentence = sentence.replace(sentence.charAt(j), "-");
        }
      }
    }


    // for(var vowelI=0; vowelI<vowelI.length; vowelI+=1);
    //   // var vowelCheck = vowel[i];
    //   for(var i=0; i<sentence.length; i+=1);
    //     if(sentence.charAt(i) === vowel.charAt(vowelI)){
    //       alert(sentence);
          // var split = sentenceArray.replace("-");
          // sentenceArray[i] = sentenceArray[i].replace(sentenceArray[i], "-");
        // console.log(sentenceArray.length);
        // var sentOutput = sentenceArray.replace("-");
        // debugger;
        // console.log(sentOutput);
      $(".userOutput").text(sentence);
  });
});
// var sentence = $("#userInput").val();
// console.log(sentence);
// function removeVowel(sentence){
//   return sentence.replace(/[a,e,i,o,u]/gi, "-");
//
// }
// $(".userOutput").text(removeVowel(sentence));
