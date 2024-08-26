import { fireEvent, render } from '@testing-library/react-native';
import React from 'react';
import Carelon from '../src/screens/Carelon';

it('renders correctly', () => {
    const { getByText, getByPlaceholderText } = render(<Carelon />);
    expect(getByText('Wellbeing resources you can trust.')).toBeTruthy();
    expect(getByText('Sign up')).toBeTruthy();
    expect(getByPlaceholderText('Username/email')).toBeTruthy();
    expect(getByPlaceholderText('Password')).toBeTruthy();
});

it('toggles password visibility', () => {
    const { getByText, getByPlaceholderText } = render(<Carelon />);
    const passwordInput = getByPlaceholderText('Password');
    const toggleButton = getByText('Show');
    expect(passwordInput.props.secureTextEntry).toBe(true);
    fireEvent.press(toggleButton);

    expect(passwordInput.props.secureTextEntry).toBe(false);
    fireEvent.press(toggleButton);


    expect(passwordInput.props.secureTextEntry).toBe(true);
});

it('handles forgot username and password links', () => {
    const { getByText } = render(<Carelon />);

    const forgotUsernameLink = getByText('Forgot username');
    const forgotPasswordLink = getByText('Forgot password');


    fireEvent.press(forgotUsernameLink);


    fireEvent.press(forgotPasswordLink);


});