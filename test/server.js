/**
 * @description jest server
 * @author yaods
 */

const request = require('supertest')
const server = require('../src/app').callback()

module.exports = request(server)