'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('tb_monay', {
      id: {
        type: Sequelize.UUID,
        defaultValue: Sequelize.UUIDV4,
        allowNull: false,
        primaryKey: true
      },
      id_user: {
        type: Sequelize.UUID,
        allowNull: false,
        references: {
          model: 'tb_users',
          key: 'id'
        },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE'
      }
      account_name: {
        type: Sequelize.STRING,
        allowNull: false
      },
      balance: {
        type: Sequelize.INTEGER,
        allowNull: false
      },
      account_type: {
        type: Sequelize.ENUM('tabungan', 'giro'),
        allowNull: false
      }
      created_at: {
        type: Sequelize.DATE,
        allowNull: false
      },
      updated_at: {
        type: Sequelize.DATE,
        allowNull: false
      }
    })
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('tb_monay')
  }
};
