import gitHubCard from './GitHubCard.js';
import renderer from 'react-test-renderer';

test('renders a snapshot', () => {
    const tree = renderer.create(<gitHubCard />).toJSON()
    expect(tree).toMatchSnapshot()
});