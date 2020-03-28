'use strict';

/**
 * Incentive.js controller
 *
 * @description: A set of functions called "actions" for managing `Incentive`.
 */

module.exports = {

  /**
   * Retrieve incentive records.
   *
   * @return {Object|Array}
   */

  find: async (ctx, next, { populate } = {}) => {
    if (ctx.query._q) {
      return strapi.services.incentive.search(ctx.query);
    } else {
      return strapi.services.incentive.fetchAll(ctx.query, populate);
    }
  },

  /**
   * Retrieve a incentive record.
   *
   * @return {Object}
   */

  findOne: async (ctx) => {
    return strapi.services.incentive.fetch(ctx.params);
  },

  /**
   * Count incentive records.
   *
   * @return {Number}
   */

  count: async (ctx, next, { populate } = {}) => {
    return strapi.services.incentive.count(ctx.query, populate);
  },

  /**
   * Create a/an incentive record.
   *
   * @return {Object}
   */

  create: async (ctx) => {
    return strapi.services.incentive.add(ctx.request.body);
  },

  /**
   * Update a/an incentive record.
   *
   * @return {Object}
   */

  update: async (ctx, next) => {
    return strapi.services.incentive.edit(ctx.params, ctx.request.body) ;
  },

  /**
   * Destroy a/an incentive record.
   *
   * @return {Object}
   */

  destroy: async (ctx, next) => {
    return strapi.services.incentive.remove(ctx.params);
  }
};
