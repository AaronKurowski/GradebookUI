import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash, faPlus } from '@fortawesome/free-solid-svg-icons';
import './Design.css';

const Subsection = (props) => {
    const { content, add, remove, key } = props;

    return(
        <div className="added-subsection">
            <FontAwesomeIcon className="minus design-btn" icon={faTrash} onClick={() => remove(key)} />
            <span className="design-text">{content}</span>
            <FontAwesomeIcon className="plus design-btn" icon={faPlus} onClick={() => add('crit')}  />
        </div>
    );
}

export default Subsection;