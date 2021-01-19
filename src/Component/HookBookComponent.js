import react, { useState } from 'react';
import { buyBook } from '../Redux/index';
import { useSelector, useDispatch } from 'react-redux';

export default function HookBookComponent() {
    const [number, setNumber] = useState(1);
    const numberOfBooks = useSelector(state => state.numberOfBooks);
    const dispatch = useDispatch();
    return (
        <div>
            <h1>Hook Container</h1>
            <h2>Number Of Books: {numberOfBooks} </h2>
            <input type="text" value={number} onChange={e => setNumber(e.target.value)} />
            <button onClick={() => dispatch(buyBook(number))} >Buy {number} Book</button>
        </div>
    );
}