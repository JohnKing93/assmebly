'use strict';

/**
 * Idea.js controller
 *
 * @description: A set of functions called "actions" for managing `Idea`.
 */

module.exports = {

  /**
   * Retrieve idea records.
   *
   * @return {Object|Array}
   */

  find: async (ctx, next, { populate } = {}) => {
    if (ctx.query._q) {
      return strapi.services.idea.search(ctx.query);
    } else {
      return strapi.services.idea.fetchAll(ctx.query, populate);
    }
  },

  /**
   * Retrieve a idea record.
   *
   * @return {Object}
   */

  findOne: async (ctx) => {
    return strapi.services.idea.fetch(ctx.params);
  },

  /**
   * Count idea records.
   *
   * @return {Number}
   */

  count: async (ctx, next, { populate } = {}) => {
    return strapi.services.idea.count(ctx.query, populate);
  },

  /**
   * Create a/an idea record.
   *
   * @return {Object}
   */

  create: async (ctx) => {
    return strapi.services.idea.add(ctx.request.body);
  },

  /**
   * Update a/an idea record.
   *
   * @return {Object}
   */

  update: async (ctx, next) => {
    return strapi.services.idea.edit(ctx.params, ctx.request.body) ;
  },

  /**
   * Destroy a/an idea record.
   *
   * @return {Object}
   */

  destroy: async (ctx, next) => {
    return strapi.services.idea.remove(ctx.params);
  }
};
