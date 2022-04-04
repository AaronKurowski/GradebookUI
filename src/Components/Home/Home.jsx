import React from 'react';
import './Home.css';
import { Link } from 'react-router-dom';

const Home = () => {
    return(
        <div id="home">
            <header>
                <h2>
                    Academy Home
                </h2>
            </header>

            <div id="home-body">
                <Link className="nav-anchor" to="/classes">
                    <div id="to-classes">
                            Classes
                    </div>
                </Link>

                <Link className="nav-anchor" to="/design">
                    <div id="to-design">
                            Design
                    </div>
                </Link>
            </div>
        </div>
    );
}

export default Home;