'use strict';

/**
 * Interest.js controller
 *
 * @description: A set of functions called "actions" for managing `Interest`.
 */

module.exports = {

  /**
   * Retrieve interest records.
   *
   * @return {Object|Array}
   */

  find: async (ctx, next, { populate } = {}) => {
    if (ctx.query._q) {
      return strapi.services.interest.search(ctx.query);
    } else {
      return strapi.services.interest.fetchAll(ctx.query, populate);
    }
  },

  /**
   * Retrieve a interest record.
   *
   * @return {Object}
   */

  findOne: async (ctx) => {
    return strapi.services.interest.fetch(ctx.params);
  },

  /**
   * Count interest records.
   *
   * @return {Number}
   */

  count: async (ctx, next, { populate } = {}) => {
    return strapi.services.interest.count(ctx.query, populate);
  },

  /**
   * Create a/an interest record.
   *
   * @return {Object}
   */

  create: async (ctx) => {
    return strapi.services.interest.add(ctx.request.body);
  },

  /**
   * Update a/an interest record.
   *
   * @return {Object}
   */

  update: async (ctx, next) => {
    return strapi.services.interest.edit(ctx.params, ctx.request.body) ;
  },

  /**
   * Destroy a/an interest record.
   *
   * @return {Object}
   */

  destroy: async (ctx, next) => {
    return strapi.services.interest.remove(ctx.params);
  }
};
