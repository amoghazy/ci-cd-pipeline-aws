
const express = require('express');
const app = express();
const port = 3000;

app.use(express.json());

app.get('/', (req, res) => {
  const facts = [
    'The Earth rotates at about 1,000 miles per hour.',
    'Honey never spoils.',
    'The human brain has about 86 billion neurons.',
    'A group of flamingos is called a flamboyance.',
    'Octopuses have three hearts.',
    'Bananas are berries, but strawberries are not.',
    'A day on Venus is longer than its year.',
    'The Great Wall of China is not visible from space with the naked eye.',
    'Cows have best friends and can feel stressed when separated.',
    'The shortest war in history lasted 38 minutes.',
  ];
  const randomFact = facts[Math.floor(Math.random() * facts.length)];
  const currentTime = new Date().toLocaleTimeString();
  res.send(`
    <html>
      <head>
        <style>
          body {
            font-family: Arial, sans-serif;
            display: flex;
            justify-content: center;
            align-items: center;
            height: 100vh;
            margin: 0;
            background-color: #f0f0f0;
          }
          .container {
            text-align: center;
            padding: 20px;
            background-color: white;
            border-radius: 10px;
            box-shadow: 0 0 10px rgba(0,0,0,0.1);
          }
          h1 {
            color: #333;
            font-size: 2.5em;
          }
          p {
            color: #666;
            font-size: 1.2em;
          }
        </style>
      </head>
      <body>
        <div class="container">
          <h1>Random Fact</h1>
          <p>${randomFact}</p>
          <p>Current time: ${currentTime}</p>
        </div>
      </body>
    </html>
  `);
});



app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
