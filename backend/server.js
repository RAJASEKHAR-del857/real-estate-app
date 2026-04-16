
const express = require('express');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());

let properties = [
  { id: 1, title: "2BHK Apartment", price: 50000 },
  { id: 2, title: "Villa", price: 150000 }
];

app.get('/api/properties', (req, res) => {
  res.json(properties);
});

app.post('/api/login', (req, res) => {
  const { username } = req.body;
  res.json({ token: "dummy-token", user: username });
});

app.listen(5000, () => console.log("Backend running on port 5000"));
