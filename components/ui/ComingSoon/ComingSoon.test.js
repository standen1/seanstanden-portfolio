import { render, screen } from '@testing-library/react'; 
import '@testing-library/jest-dom'; 
import ComingSoon from './ComingSoon';

describe('ComingSoon Component', () => {
    test('Renders an h1 that says Coming Soon.', () => {
        const {asFragment, getByText} = render(<ComingSoon />);
        expect(getByText('Coming Soon')).toBeInTheDocument();
        expect(asFragment()).toMatchInlineSnapshot(`
<DocumentFragment>
  <div
    class="sc-b850c227-0 izVre"
  >
    <h1>
      Coming Soon
    </h1>
  </div>
</DocumentFragment>
`);
    });
});