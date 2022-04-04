import React, { Component } from 'react';
import './Design.css';
import Section from './Section.jsx';
import Subsection from './Subsection.jsx';
import Criteria from './Criteria.jsx';

class Design extends Component {
    constructor() {
        super();

        //OLD STATE
        this.state = {
            section: {
                title: null
            },
            subsections: [],
            criteria: []
        }

        //NEW STATE
        // this.state = {
        //     section: {
        //         title: null,
        //         startDate: null,
        //         endDate: null,
        //         classType: null
        //     },
        //     subsections: [
        //         {
        //             key: null,
        //             title: null,
        //             startTime: null,
        //             endTime: null,
        //             criteria: [
        //                 {
        //                     key: null,
        //                     prompt: null,

        //                 }
        //             ]
        //         }
        //     ]
        // }
    }

    displaySection = () => {
        const { section } = this.state;
        
        return(
            <Section content={section.title} add={this.addSubsection} remove={this.removeSection} />
        );
    }

    removeSection = () => {
        this.setState({
            section: {
                title: null
            }
        });
    }

    displaySubsections = () => {
        const { subsections } = this.state;
        const subsectionComponents = [];

        for(let i = 0; i < subsections.length; i++) {
            subsectionComponents.push(<Subsection key={i} content={subsections[i].title} add={this.addCriteria} remove={this.removeSubsection} />)
        }

        return(
            <>
                {subsectionComponents.map(subsection => (
                    subsection
                ))}
            </>
        );
    }

    addSubsection = title => {
        let testSubsections = [{key: 1, title: title}, {key: 2, title: title}];

        this.setState({
            subsections: testSubsections
        });
    }

    removeSubsection = key => {
        let currentSubsections = [...this.state.subsections];

        let removeIndex = currentSubsections.map(item => item.key).indexOf(key);

        currentSubsections.splice(removeIndex, 1);

        this.setState({
            subsections: currentSubsections,
            criteria: []
        });
    }

    displayCriteria = () => {
        const { criteria } = this.state;
        const criteriaComponents = [];

        for(let i = 0; i < criteria.length; i++) {
            criteriaComponents.push(<Criteria key={i} content={criteria[i].title} remove={this.removeCriteria} />)
        }

        return(
            <>
                {criteriaComponents.map(criterion => (
                    criterion
                ))}
            </>
        );

    }

    addCriteria = title => {
        let testCriteria = [{key: 1, title: title}, {key: 2, title: title}];

        this.setState({
            criteria: testCriteria
        })
    }

    removeCriteria = key => {
        let currentCriteria = [...this.state.criteria];

        let removeIndex = currentCriteria.map(item => item.key).indexOf(key);

        currentCriteria.splice(removeIndex, 1);

        this.setState({
            criteria: currentCriteria
        });
    }

    render() {
        const { section, subsections, criteria } = this.state;

        return(
            <div id="design-wrapper">
                <h2>Section Design</h2> 

                <div className="add-section" onClick={() => this.setState({section: {id: 1, count: 1, title: "First"}})}>
                    Click here to add section +
                </div>

                <div id="design-space">
                    <div id="section-space">
                        {/* Probably need to restructure how this is being placed out so criteria falls under the right subsection */}
                        {section.title !== null &&
                            this.displaySection()
                        }

                        <div className="subsection-space">
                            {subsections.length > 0 &&
                                this.displaySubsections()
                            }

                            <div id="criteria-space">
                                {criteria.length > 0 &&
                                    this.displayCriteria()
                                }
                            </div>
                        </div>

                        <div className="subsection-space">
                            subsection space 2
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Design;