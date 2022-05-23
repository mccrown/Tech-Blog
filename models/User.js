const { Model, DataTypes } = require('sequelize')
const bcrypt = require('bcrypt')
const sequelize = require('../config/connection')

//create user model

class User extends Model {
    checkPassword(loginPW) {
        return bcrypt.compareSync(loginPW, this.password)
    }
}

User.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },

        username: {
            type: DataTypes.STRING,
            allowNull: false
        },
        password: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                //password must be at least 4 characters long
                len: [4]
            }
        }

    },
    {
     hooks: {
        async beforeCreate(newUserData) {
            newUserData.password = await bcrypt.hash(newUserData.password, 10)
            return newUserData
        },
        async beforeUpdate(updatedUserData) {
            updatedUserData.password = await bcrypt.hash(updatedUserData.password, 10)
            return updatedUserData
        }
     },
    sequelize,
    //check if you need only created_at
    timestamps: true,
    freezeTableName: true,
    underscored: true,
    modelName: 'user'
    }
    )

    module.exports = User;