const express = require('express');
const app = express();
const PORT = process.env.PORT || 3001;
const cors = require('cors');

app.use(cors());
app.options('*', cors());
app.use(express.json());

app.get('/api', (req, res) => {
    res.json({ message: "Hello from the server!" });
});

app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}`);
});