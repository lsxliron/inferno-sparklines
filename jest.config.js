const Enzyme = require('enzyme')
const Adapder = require('enzyme-adapter-inferno')
Enzyme.configure({ adapter: new Adapder() })