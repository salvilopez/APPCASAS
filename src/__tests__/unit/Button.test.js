import React from 'react';
import {fireEvent, render} from '@testing-library/react';
import Button from 'components/units/Button/Button';
import renderer from 'react-test-renderer';

describe('Button component', () => {
	it('renders correctly', () => {
		const {getByText} = render(<Button text="Hola" />);
		expect(getByText('Hola')).toBeInTheDocument();
	});

	it('has proper snapshot', () => {
		const ButtonComponent = renderer.create(<Button text="Hola" />);
		let tree = ButtonComponent.toJSON();
		expect(tree).toMatchSnapshot();
	});

	it('handles Click event', () => {
		const handleClick = jest.fn();
		const {getByText} = render(<Button text="Clicked" onClick={handleClick} />);
		fireEvent.click(getByText(/Clicked/i));
		expect(handleClick).toHaveBeenCalledTimes(1);
	});
});
