'use strict';

/**
 * governing-body service.
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::governing-body.governing-body');
