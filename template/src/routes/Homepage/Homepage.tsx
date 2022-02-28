import { FC } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { counterSelector, decrementCounter, incrementCounter } from '@store/slices/common.slice';
import { Button } from '@mui/material';

export const Homepage: FC = () => {
	const dispatch = useDispatch();
	const counter = useSelector(counterSelector);

	return (
		<>
			<h2>Home</h2>
			<p>Counter is: {counter}</p>
			<Button onClick={() => dispatch(decrementCounter(1))}>Decrement</Button>
			<Button onClick={() => dispatch(incrementCounter(1))}>Increment</Button>
		</>
	);
};
