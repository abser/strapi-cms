'use strict';

/**
 * Hadith.js controller
 *
 * @description: A set of functions called "actions" for managing `Hadith`.
 */

module.exports = {

  /**
   * Retrieve hadith records.
   *
   * @return {Object|Array}
   */

  find: async (ctx, next, { populate } = {}) => {
    if (ctx.query._q) {
      return strapi.services.hadith.search(ctx.query);
    } else {
      return strapi.services.hadith.fetchAll(ctx.query, populate);
    }
  },

  /**
   * Retrieve a hadith record.
   *
   * @return {Object}
   */

  findOne: async (ctx) => {
    return strapi.services.hadith.fetch(ctx.params);
  },

  /**
   * Count hadith records.
   *
   * @return {Number}
   */

  count: async (ctx, next, { populate } = {}) => {
    return strapi.services.hadith.count(ctx.query, populate);
  },

  /**
   * Create a/an hadith record.
   *
   * @return {Object}
   */

  create: async (ctx) => {
    return strapi.services.hadith.add(ctx.request.body);
  },

  /**
   * Update a/an hadith record.
   *
   * @return {Object}
   */

  update: async (ctx, next) => {
    return strapi.services.hadith.edit(ctx.params, ctx.request.body) ;
  },

  /**
   * Destroy a/an hadith record.
   *
   * @return {Object}
   */

  destroy: async (ctx, next) => {
    return strapi.services.hadith.remove(ctx.params);
  }
};
