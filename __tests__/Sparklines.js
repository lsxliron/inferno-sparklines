import '../jest.config.js'
import { mount } from 'enzyme';
import { expect } from 'chai';
import { Sparklines } from '../src/Sparklines';

describe('Sparklines', () => {
    it('does not throw without any parameters', () => {
        expect(() => <Sparklines />).to.not.throw;
    });

    it('renders nothing when passed no data', () => {
        const wrapper = mount(<Sparklines />);
        expect(wrapper.find('svg')).to.have.length(0);
    });

    it('is rendered as svg', () => {
        const wrapper = mount(<Sparklines data={[1]} />);
        expect(wrapper.find('svg')).to.have.length(1);
    });
});
