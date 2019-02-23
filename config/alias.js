const path = require('path');
module.exports = {
  'react-pages': path.join(__dirname, '../src/pages'),
  'react-ui': path.join(__dirname, '../src/Components'),
  'common': path.join(__dirname, '../src/common'),
  'utils': path.join(__dirname, '../src/common/js/utils'),
  'ajax': path.join(__dirname, '../src/common/js/ajax'),
  'style': path.join(__dirname, '../src/common/style'),
  'actions': path.join(__dirname, '../src/redux/actions')
}