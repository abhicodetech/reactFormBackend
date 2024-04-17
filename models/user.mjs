import { DataTypes, Model } from 'sequelize';
import sequelize from '../sequelize.mjs';

class User extends Model {}

const userSchema = {
  fullName: {
    type: DataTypes.STRING,
    allowNull: false
  },
  Mobile: {
    type: DataTypes.STRING,
    allowNull: false
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
    validate: {
      isEmail: true
    }
  },
  birthDate: {
    type: DataTypes.DATEONLY,
    allowNull: true
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false
  }
};

User.init(userSchema, {
  sequelize,
  modelName: 'User'
});


export default User;