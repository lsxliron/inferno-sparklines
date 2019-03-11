const Enzyme = require('enzyme')
//import { configure } from 'enzyme'
// import InfernoEnzymeAdapter from 'enzyme-adapter-inferno'
const Adapder = require('enzyme-adapter-inferno')
Enzyme.configure({ adapter: new Adapder() })