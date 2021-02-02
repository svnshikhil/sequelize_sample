'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.sequelize.query(`CREATE OR REPLACE VIEW VIEW_STUDENTS AS SELECT id,name from STUDENTS`);
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.sequelize.query('DROP VIEW VIEW_STUDENTS');
  }
};
