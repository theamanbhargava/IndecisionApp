/**
 * Created by root on 10/13/17.
 */
import React from 'react';

const Option = (props) => (
    <div>
        {props.optionText}
        <button
            onClick={(e) => {
                props.handleDeleteOption(props.optionText);
            }}
        >
            remove
        </button>
    </div>
);


export default Option;