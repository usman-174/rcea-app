const mongoose = require('mongoose');
const School = require('../models/school');

const seedDatabase = async () => {
  try {
    const data = await School.find();

    if (data.length > 0) {
      console.log('Database already seeded. Skipping...');
      return;
    }

    await School.deleteMany();

    const schools = [
      { name: 'Antoinette Prudence Sainte Famille RCA School', address: 'US', contact: '555-555-1234' },
      { name: 'Father Ronald Gandy RCA School', address: 'US', contact: '555-555-1234' },
      { name: 'Notre Dame de Lourdes RCA School', address: 'US', contact: '555-555-1234' },
      { name: 'Saint Esprit RCA School', address: 'US', contact: '555-555-1234' },
      { name: 'Sainte Thérèse de L’ Enfant Jesus RCA School', address: 'US', contact: '555-555-1234' },
    ];

    await School.insertMany(schools);

    console.log('Database seeded successfully');
  } catch (err) {
    console.error('Error seeding database:', err.message);
    throw err;
  }
}; 
  
const connectToDatabase = async () => {
  try { 
     mongoose.connect(process.env.CONNECTION_URL  || "mongodb+srv://test:test@nodejs.sfhyc.mongodb.net/RCEA");

    console.log('Connected to the database');
    // await seedDatabase();
  } catch (err) {
    console.error('Error connecting to the database:', err.message);
    throw err;
  }
};

// Start the database connection
connectToDatabase();
