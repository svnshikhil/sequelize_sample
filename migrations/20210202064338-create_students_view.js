'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.sequelize.query(`CREATE OR REPLACE VIEW STUDENTS_VIEW AS SELECT id,name from STUDENTS`);
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.sequelize.query('DROP VIEW STUDENTS_VIEW');
  }
};
