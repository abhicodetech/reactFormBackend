import  Sequelize  from 'sequelize';

const sequelize = new Sequelize('postgres', process.env.DATABASE_USER, process.env.DATABASE_PASSWORD, {
  host: process.env.DATABASE_HOST,
  dialect: 'postgres',
});

export default sequelize;