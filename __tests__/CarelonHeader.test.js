import { fireEvent, render } from '@testing-library/react-native';
import React from 'react';
import CarelonHeader from '../src/components/CarelonHeader';

describe('CarelonHeader', () => {
    it('renders correctly, including logo and buttons', () => {
        const { getByTestId, getByText } = render(<CarelonHeader />);
        
        expect(getByTestId('logo')).toBeTruthy();
        expect(getByText('Log In')).toBeTruthy();
        expect(getByText('Get Immediate Assistance')).toBeTruthy();
    });

    it('toggles modal visibility when assistance button is pressed', () => {
        const { getByText, queryByText } = render(<CarelonHeader />);
        
        const assistanceButton = getByText('Get Immediate Assistance');
        fireEvent.press(assistanceButton);
        
        expect(getByText('Get Immediate Assistance Content')).toBeTruthy();
        
        fireEvent.press(assistanceButton);
        expect(queryByText('Get Immediate Assistance Content')).toBeNull();
    });

    it('renders modal menu items correctly', () => {
        const { getByText } = render(<CarelonHeader />);
        
        fireEvent.press(getByText('Get Immediate Assistance'));
        
        expect(getByText('2 miles')).toBeTruthy();
        expect(getByText('5 miles')).toBeTruthy();
        expect(getByText('10 miles')).toBeTruthy();
        expect(getByText('25 miles')).toBeTruthy();
        expect(getByText('50 miles')).toBeTruthy();
    });

    it('renders show results button in modal', () => {
        const { getByText } = render(<CarelonHeader />);
        
        fireEvent.press(getByText('Get Immediate Assistance'));
        
        expect(getByText('Show Results')).toBeTruthy();
    });
});
