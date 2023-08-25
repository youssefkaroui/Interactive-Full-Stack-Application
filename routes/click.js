const express = require('express');
const router = express.Router();
const LinkClick = require('../models/Book');

router.get('/:linkName', async (req, res) => {
  const linkName = req.params.linkName;

  try {
    const [link, created] = await LinkClick.findOrCreate({
      where: { linkName },
      defaults: { clickCount: 0 },
    });

    if (!created) {
      await link.increment('clickCount');
    }

    return res.status(200).json({ message: 'Click recorded successfully.' });
  } catch (error) {
    console.error('Error recording click:', error);
    return res.status(500).json({ message: 'An error occurred.' });
  }
});

module.exports = router;
