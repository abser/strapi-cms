'use strict';

/**
 * Hadithbook.js controller
 *
 * @description: A set of functions called "actions" for managing `Hadithbook`.
 */

module.exports = {

  /**
   * Retrieve hadithbook records.
   *
   * @return {Object|Array}
   */

  find: async (ctx, next, { populate } = {}) => {
    if (ctx.query._q) {
      return strapi.services.hadithbook.search(ctx.query);
    } else {
      return strapi.services.hadithbook.fetchAll(ctx.query, populate);
    }
  },

  /**
   * Retrieve a hadithbook record.
   *
   * @return {Object}
   */

  findOne: async (ctx) => {
    return strapi.services.hadithbook.fetch(ctx.params);
  },

  /**
   * Count hadithbook records.
   *
   * @return {Number}
   */

  count: async (ctx, next, { populate } = {}) => {
    return strapi.services.hadithbook.count(ctx.query, populate);
  },

  /**
   * Create a/an hadithbook record.
   *
   * @return {Object}
   */

  create: async (ctx) => {
    return strapi.services.hadithbook.add(ctx.request.body);
  },

  /**
   * Update a/an hadithbook record.
   *
   * @return {Object}
   */

  update: async (ctx, next) => {
    return strapi.services.hadithbook.edit(ctx.params, ctx.request.body) ;
  },

  /**
   * Destroy a/an hadithbook record.
   *
   * @return {Object}
   */

  destroy: async (ctx, next) => {
    return strapi.services.hadithbook.remove(ctx.params);
  }
};
