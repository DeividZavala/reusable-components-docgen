module.exports = /* eslint-disable */ [{"name":"HelloWorld","description":"","props":{"messaga":{"type":{"name":"string"},"required":false,"description":""}},"code":"import React from 'react';\nimport PropTypes from 'prop-types';\n\nconst HelloWorld = ({message}) => (\n    <div>\n       Hello {message}\n    </div>\n);\n\nHelloWorld.propTypes = {\n    messaga: PropTypes.string\n};\n\nexport default HelloWorld;\n","examples":[]}]