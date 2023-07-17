import { render } from '@testing-library/react';

import HomeFeature from './home-feature';

describe('HomeFeature', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<HomeFeature />);
    expect(baseElement).toBeTruthy();
  });
});
