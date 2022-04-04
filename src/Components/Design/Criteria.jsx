import React from 'react';
import './Design.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash, faPlus } from '@fortawesome/free-solid-svg-icons';

const Criteria = (props) => {
    const { content, remove, key } = props;

    return(
        <div className="added-criteria">
            <FontAwesomeIcon className="minus design-btn" icon={faTrash} onClick={() => remove(key)} />
            <span className="design-text">{content}</span>
            <FontAwesomeIcon className="plus design-btn" icon={faPlus} />
        </div>
    );
}

export default Criteria;