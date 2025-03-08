const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors());
app.use(express.json());
app.use('/uploads', express.static('uploads'));

const port = 5000;
app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});

const uploadRouter = require('./routes/upload');
app.use('/api', uploadRouter);
