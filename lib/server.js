// TODO: This file was created by bulk-decaffeinate.
// Sanity-check the conversion and remove this comment.
const path = require('path')
const FOAAS = require(path.resolve(__dirname, 'foaas'))

const foaas = new FOAAS({
  renderersPath: path.resolve(__dirname, 'renderers'),
  filtersPath: path.resolve(__dirname, 'filters'),
  operationsPath: path.resolve(__dirname, 'operations')
})

const port = process.env.PORT || 3030

foaas.start(port)
