import react from 'react';
import { connect } from 'react-redux';
import { buyBook } from '../Redux/index';
function BookComponent(props) {
    return (
        <div>
            <h1>Number of Books: {props.numberOfBooks}</h1>
            <button onClick={props.buyBook}>Buy Book</button>
        </div>
    );
}

const mapStatetoProps = (state) => {
    return {
        numberOfBooks: state.numberOfBooks
    }
}

const mapDispatchtoProps = (dispatch) => {
    return {
        buyBook: function () {
            dispatch(buyBook());
        }
    }
}
export default connect(mapStatetoProps, mapDispatchtoProps)(BookComponent);