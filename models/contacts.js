module.exports = (sequelize, DataTypes) => {
    const Contacts = sequelize.define("Contacts", {
        phone:{
            type:DataTypes.STRING,
            allowNull:false,
            required:true,
            validate:{
                len:[10]
            }
        },
        email:{
            type:DataTypes.STRING,
            allowNull: false,
            required:true,
        },
        location:{
            type:DataTypes.STRING,
            allowNull: false,
            required:true,
        },
        industry:{
            type:DataTypes.STRING,
            allowNull: false,
            required:true,
        }
    },
    {
        freezeTableName:true,
        timestamps:false
    },
    )
    Contacts.associate=(model)=>{
        Contacts.belongsTo(model.User, {
            foreignkey:{
                allowNull:false
            }
        })
    }
    return Contacts;
}