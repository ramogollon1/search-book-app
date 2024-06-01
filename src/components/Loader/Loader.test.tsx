import React from 'react';
import { render } from '@testing-library/react-native';
import Loader from './Loader';

describe('Loader component', () => {
  test('renders activity indicator with correct props', () => {
    const { getByTestId } = render(<Loader />);
    const activityIndicator = getByTestId('loader-activity-indicator');
    expect(activityIndicator.props.size).toBe('large');
    expect(activityIndicator.props.color).toBe('#0000ff');
  });
});
