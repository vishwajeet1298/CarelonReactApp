import { fireEvent, render } from '@testing-library/react-native';
import React from 'react';
import SidePanel from '../src/components/SidePanel';

test('renders SidePanel component correctly when visible', () => {
  const { getByText, getByTestId } = render(<SidePanel isVisible={true} onClose={() => {}} />);
  expect(getByText('Sign In')).toBeTruthy();
  expect(getByText('Create an account')).toBeTruthy();
  expect(getByText('Find a Provider')).toBeTruthy();
  expect(getByText('Services')).toBeTruthy();
  expect(getByText('Care')).toBeTruthy();
  expect(getByText('Wellbeing Content')).toBeTruthy();
  expect(getByText('Forms and Documents')).toBeTruthy();
  expect(getByText('Contact Us')).toBeTruthy();
  expect(getByTestId('avatar')).toBeTruthy();
  expect(getByTestId('close-button')).toBeTruthy();
});

test('does not render SidePanel component when not visible', () => {
  const { queryByText } = render(<SidePanel isVisible={false} onClose={() => {}} />);
  expect(queryByText('Sign In')).toBeNull();
});

test('calls onClose when close button is pressed', () => {
  const onCloseMock = jest.fn();
  const { getByTestId } = render(<SidePanel isVisible={true} onClose={onCloseMock} />);
  fireEvent.press(getByTestId('close-button'));
  expect(onCloseMock).toHaveBeenCalled();
});
