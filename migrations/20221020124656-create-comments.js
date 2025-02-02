'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('comments', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      user_id: Sequelize.INTEGER,
      reply_user_id: Sequelize.INTEGER,
      video_id: {
        type: Sequelize.INTEGER
      },
      post_id: {
        type: Sequelize.INTEGER
      },
      is_reply: {
        type: Sequelize.INTEGER
      },
      comment: {
        type: Sequelize.TEXT
      },
      parent_comment: {
        type: Sequelize.INTEGER
      },
      likes_count: {
        type: Sequelize.INTEGER
      },
      dislikes_count: {
        type: Sequelize.INTEGER
      },
      files: {
        type: Sequelize.JSON
      },
      reply_count: {
        type: Sequelize.INTEGER
      },
      likes: {
        type: Sequelize.JSON
      },
      dislikes: {
        type: Sequelize.JSON
      },
      created_at: {
        type: Sequelize.DATE
      },
      updated_at: {
        type: Sequelize.DATE
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('comments');
  }
};