import express from 'express';
import routes from './api/routes.mjs';
import cors from 'cors';
// import sequelize from './sequelize.mjs';

const app = express();
const PORT = process.env.PORT || 3001;

// (async () => {
//     try {
//       await sequelize.sync({ force: true });
//       console.log('Connected to the database and synchronized models');
//     } catch (error) {
//       console.error('Unable to connect to the database:', error);
//     }
// })();

app.use(express.json());
app.use(cors());

app.use('/api',routes);

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});