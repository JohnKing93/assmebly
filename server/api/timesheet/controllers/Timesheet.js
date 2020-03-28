'use strict';

/**
 * Timesheet.js controller
 *
 * @description: A set of functions called "actions" for managing `Timesheet`.
 */

module.exports = {

  /**
   * Retrieve timesheet records.
   *
   * @return {Object|Array}
   */

  find: async (ctx, next, { populate } = {}) => {
    if (ctx.query._q) {
      return strapi.services.timesheet.search(ctx.query);
    } else {
      return strapi.services.timesheet.fetchAll(ctx.query, populate);
    }
  },

  /**
   * Retrieve a timesheet record.
   *
   * @return {Object}
   */

  findOne: async (ctx) => {
    return strapi.services.timesheet.fetch(ctx.params);
  },

  /**
   * Count timesheet records.
   *
   * @return {Number}
   */

  count: async (ctx, next, { populate } = {}) => {
    return strapi.services.timesheet.count(ctx.query, populate);
  },

  /**
   * Create a/an timesheet record.
   *
   * @return {Object}
   */

  create: async (ctx) => {
    return strapi.services.timesheet.add(ctx.request.body);
  },

  /**
   * Update a/an timesheet record.
   *
   * @return {Object}
   */

  update: async (ctx, next) => {
    return strapi.services.timesheet.edit(ctx.params, ctx.request.body) ;
  },

  /**
   * Destroy a/an timesheet record.
   *
   * @return {Object}
   */

  destroy: async (ctx, next) => {
    return strapi.services.timesheet.remove(ctx.params);
  }
};
