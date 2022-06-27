/* eslint-disable linebreak-style */
/* eslint-disable no-trailing-spaces */

/* eslint-disable semi */
/* eslint-disable linebreak-style */
import { useState } from 'react';

const useList = (initialValue = []) => {
    const [value, setValue] = useState(initialValue);

    // Push new value to list
    const push = (element) => {
        setValue((oldValue) => [...oldValue, element]);
    };

    const clean = () => {
        setValue((oldValue) => oldValue.splice(0, oldValue.length));
    };

    const sort = () => {
        setValue((oldValue) => oldValue.sort(oldValue));
    };

    const reverse = () => {
        setValue((oldValue) => oldValue.reverse(oldValue));
    };

    // Remove value from list
    const remove = (index) => {
        setValue((oldValue) => oldValue.filter((_, i) => i !== index));
    };

    // List is Empty ? true / false
    const isEmpty = () => value.length === 0;

    // TODO:Develop more functions for lists

    return {
            value, setValue, push, remove, isEmpty, clean, sort, reverse,
        };
};

export default useList;
