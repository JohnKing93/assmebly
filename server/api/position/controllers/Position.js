'use strict';

/**
 * Position.js controller
 *
 * @description: A set of functions called "actions" for managing `Position`.
 */

module.exports = {

  /**
   * Retrieve position records.
   *
   * @return {Object|Array}
   */

  find: async (ctx, next, { populate } = {}) => {
    if (ctx.query._q) {
      return strapi.services.position.search(ctx.query);
    } else {
      return strapi.services.position.fetchAll(ctx.query, populate);
    }
  },

  /**
   * Retrieve a position record.
   *
   * @return {Object}
   */

  findOne: async (ctx) => {
    return strapi.services.position.fetch(ctx.params);
  },

  /**
   * Count position records.
   *
   * @return {Number}
   */

  count: async (ctx, next, { populate } = {}) => {
    return strapi.services.position.count(ctx.query, populate);
  },

  /**
   * Create a/an position record.
   *
   * @return {Object}
   */

  create: async (ctx) => {
    return strapi.services.position.add(ctx.request.body);
  },

  /**
   * Update a/an position record.
   *
   * @return {Object}
   */

  update: async (ctx, next) => {
    return strapi.services.position.edit(ctx.params, ctx.request.body) ;
  },

  /**
   * Destroy a/an position record.
   *
   * @return {Object}
   */

  destroy: async (ctx, next) => {
    return strapi.services.position.remove(ctx.params);
  }
};
