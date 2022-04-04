import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash, faPlus } from '@fortawesome/free-solid-svg-icons';
import './Design.css';

const Section = (props) => {
    const { content, add, remove } = props;

    return(
        <div id="added-section">
            <FontAwesomeIcon className="minus design-btn" icon={faTrash} onClick={() => remove()} />
            <span className="design-text">{content}</span>
            <FontAwesomeIcon className="plus design-btn" icon={faPlus} onClick={() => add("Subsection1")} />
        </div>
    );
}

export default Section;