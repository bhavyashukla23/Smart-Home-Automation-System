const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const authRoutes = require('./routes/auth');
const deviceController = require('./routes/deviceController');
const automationController = require('./routes/automationController');
const { sequelize } = require('./models'); // Sequelize instance for MySQL

const app = express();

// Middleware
app.use(bodyParser.json());
app.use(cors());

// Routes
app.use('/auth', authRoutes);
app.use('/devices', deviceController);
app.use('/automation', automationController);

// Start the server
const PORT = process.env.PORT || 5000;

// Sync MySQL database and start the server
sequelize.sync({ force: false }).then(() => {
  app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
  });
});
