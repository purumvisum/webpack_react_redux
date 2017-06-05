import React from 'react';
import { Provider } from 'react-redux';
import configureStore from '../configureStore';
import logo from '../../public/svg/logo.svg';

export const store = configureStore();


const Root = () => (
    <Provider store={store}>
        <div>
            <svg>
                <use xlinkHref="#logo"></use>
            </svg>
            <p> Create your app </p>
        </div>
    </Provider>
);
export default Root;
