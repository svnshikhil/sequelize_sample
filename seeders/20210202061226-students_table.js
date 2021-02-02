'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('students', [{
      name: 'John Doe',
      age: 10,
    },
    {
      name: 'Ray Clark',
      age: 20,
    }, {
      name: 'Steve Kozak',
      age: 30,
    }], {});
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('students', null, {});
  }
};