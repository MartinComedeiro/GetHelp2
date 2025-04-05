import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import { Petition } from './models/petition.js';

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

mongoose.connect(process.env.MONGODB_URI || 'mongodb://mongodb:27017/gethelp', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// Get all petitions
app.get('/api/petitions', async (req, res) => {
  try {
    const petitions = await Petition.find();
    res.json(petitions);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Create new petition
app.post('/api/petitions', async (req, res) => {
  try {
    const { title, description, imageUrl, location } = req.body;
    
    // Validar que todos los campos requeridos estén presentes
    if (!title || !description || !imageUrl || !location) {
      return res.status(400).json({
        error: 'Todos los campos son requeridos: title, description, imageUrl, location'
      });
    }

    const petition = new Petition({
      title,
      description,
      imageUrl,
      location
    });

    const newPetition = await petition.save();
    res.status(201).json(newPetition);
  } catch (error) {
    console.error('Error al crear la petición:', error);
    res.status(500).json({
      error: 'Error al guardar la petición. Por favor, intenta de nuevo.'
    });
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});