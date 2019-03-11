import '../jest.config.js'
import fixtures from './helpers/fixtures';
import { mount } from 'enzyme';
import { expect } from 'chai';

const HtmlDiffer = require('html-differ').HtmlDiffer

describe('Graphical tests from fixtures.js', function() {
    const diff = new HtmlDiffer({compareAttributesAsJSON:['style']})
    for (let key of Object.keys(fixtures)) {
        describe(`${key}`, function() {
            it('should render as specified', function() {
                const wrapper = mount(fixtures[key].jsx);
                expect(diff.isEqual(wrapper.html(), fixtures[key].svg)).to.be.true
            });
        });
    }
});
