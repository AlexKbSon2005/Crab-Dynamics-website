const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const path = require('path');

const app = express();
const PORT = 3000;

mongoose.connect('mongodb://localhost:27017/crabdynamics', { useNewUrlParser: true, useUnifiedTopology: true });

const contactSchema = new mongoose.Schema({
    name: String,
    email: String,
    message: String
});

const Contact = mongoose.model('Contact', contactSchema);

app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, 'public')));

app.post('/contact', (req, res) => {
    const newContact = new Contact(req.body);
    
    newContact.save((err) => {
        if (err) {
            res.status(500).json({ message: 'Error saving message' });
        } else {
            res.status(200).json({ message: 'Message sent successfully' });
        }
    });
});

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

app.get('/pages/services.html', (req, res) => {
    res.sendFile(path.join(__dirname, 'pages', 'services.html'));
});

app.get('/pages/about.html', (req, res) => {
    res.sendFile(path.join(__dirname, 'pages', 'about.html'));
});

app.get('/pages/contact.html', (req, res) => {
    res.sendFile(path.join(__dirname, 'pages', 'contact.html'));
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
