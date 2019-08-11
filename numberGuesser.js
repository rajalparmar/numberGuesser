<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/skeleton/2.0.4/skeleton.css"/>
    <title>Guess A Number</title>
</head>
<body>
    <div class="container">
        <h1>Number Guesser</h1>
        <div id="game">
           <p>Guess a number between 
               <span class="min-num"></span>
               and
               <span class="max-num"></span>
           </p>
           <input type="number" name="" id="guess-input" placeholder="Enter your Guess...">
           <input type="submit" value="Submit" id="guess-btn">
           <p class="message"></p>
        </div>
    </div>
    <script src="numberGuesser.js"></script>
</body>
</html>