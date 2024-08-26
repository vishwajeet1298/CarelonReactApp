import { fireEvent, render } from '@testing-library/react-native';
import React from 'react';
import ProviderSearch from '../src/screens/ProviderSearch'; // Adjust the import path accordingly

describe('ProviderSearch', () => {
  it('renders correctly', () => {
    const { getByText } = render(<ProviderSearch />);
    expect(getByText('Home')).toBeTruthy();
    expect(getByText('Services')).toBeTruthy();
    expect(getByText('Providers')).toBeTruthy();
    expect(getByText('Resources')).toBeTruthy();
    expect(getByText('Menu')).toBeTruthy();
  });

  it('opens SidePanel when Menu tab is pressed', () => {
    const { getByText, queryByTestId } = render(<ProviderSearch />);
    expect(queryByTestId('side-panel')).toBeNull(); // SidePanel should not be visible initially

    fireEvent.press(getByText('Menu'));
    expect(queryByTestId('side-panel')).toBeTruthy(); // SidePanel should be visible after pressing Menu
  });

  it('closes SidePanel when onClose is called', () => {
    const { getByText, queryByTestId } = render(<ProviderSearch />);
    fireEvent.press(getByText('Menu'));
    expect(queryByTestId('side-panel')).toBeTruthy(); // SidePanel should be visible

    fireEvent.press(queryByTestId('close-button')); // Assuming there's a button with testID 'close-button' to close the panel
    expect(queryByTestId('side-panel')).toBeNull(); // SidePanel should be closed
  });
});
