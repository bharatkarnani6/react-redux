import react from 'react';
import { buyBook } from '../Redux/index';
import { useSelector, useDispatch } from 'react-redux';

export default function HookBookComponent() {
    const numberOfBooks = useSelector(state => state.numberOfBooks);
    const dispatch = useDispatch(buyBook());
    return (
        <div>
            <h1>Hook Container</h1>
            <h2>Number Of Books: {numberOfBooks} </h2>
            <button onClick={() => dispatch(buyBook())} >Buy Book</button>
        </div>
    );
}