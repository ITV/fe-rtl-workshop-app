const express = require('express');
const fs = require('fs');
const router = express.Router();

const animalsData = JSON.parse(fs.readFileSync('server/api/animals/metadata/animals.json'));

router.get('/random-animal', (req, res) => {
    const randomIndices = [];
    const numRandomAnimals = 1;

    while (randomIndices.length < numRandomAnimals) {
      const randomIndex = Math.floor(Math.random() * animalsData.length);
      if (!randomIndices.includes(randomIndex)) {
        randomIndices.push(randomIndex);
      }
    }

    const randomAnimals = randomIndices.map(index => animalsData[index]);

    res.json(randomAnimals);
});

module.exports = router;
