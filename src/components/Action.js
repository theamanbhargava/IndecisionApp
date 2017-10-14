/**
 * Created by root on 10/13/17.
 */
import React from 'react';

const Action = (props) => (
        <div>
            <button
                onClick={props.handlePick}
                disabled={!props.hasOptions}
            >
                What should I do?
            </button>
        </div>
);

export default Action;