import { fireEvent, render } from '@testing-library/react-native';
import React from 'react';
import SearchCarelon from '../src/components/SearchCarelon';



test('renders correctly', () => {
    const { getByPlaceholderText } = render(<SearchCarelon />);
    expect(getByPlaceholderText('Search')).toBeTruthy();
});

test('updates input value', () => {
    const { getByPlaceholderText } = render(<SearchCarelon />);
    const input = getByPlaceholderText('Search');
    fireEvent.changeText(input, 'Dept');
    expect(input.props.value).toBe('Dept');

    fireEvent.changeText(input, 'Home');
    expect(input.props.value).toBe('Home');
    
    fireEvent.changeText(input, 'Security');
    expect(input.props.value).toBe('Security');
});

test('filters list based on input', () => {
    const { getByPlaceholderText, getByText } = render(<SearchCarelon />);
    const input = getByPlaceholderText('Search');
    fireEvent.changeText(input, 'Dept');
    expect(queryByText('Dept. of Homeland Security')).toBeTruthy();
    expect(queryByText('Dept. of Health and Human Services')).toBeTruthy();
    expect(queryByText('Home')).toBeNull();
    fireEvent.changeText(input, 'Security');
    expect(queryByText('Security Provision')).toBeTruthy();
    expect(queryByText('Dept. of Homeland Security')).toBeNull();
    expect(queryByText('Home')).toBeNull();
});
