document.getElementById('submitButton').addEventListener('click', function() {
    var question = document.getElementById('questionInput').value.trim();
    if (question === '') {
      alert('Please enter a question!');
      return;
    }
  
    var answers = [
      "Yes",
      "No",
      "Maybe",
      "Try again later",
      "Cannot predict now",
      "Ask again later",
      "Outlook not so good",
      "Better not tell you now"
    ];
  
    var randomIndex = Math.floor(Math.random() * answers.length);
    var answer = answers[randomIndex];
  
    document.getElementById('answer').innerText = "Answer: " + answer;
  });
  
  document.getElementById('clearButton').addEventListener('click', function() {
    document.getElementById('questionInput').value = '';
    document.getElementById('answer').innerText = '';
  });
  