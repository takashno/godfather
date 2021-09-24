import React from 'react'
import { Link } from 'react-router-dom';

const Header = (props) => {

    return (
        <React.Fragment>
            <nav class="uk-navbar-container uk-navbar uk-margin">
                <div class="uk-navbar-left">
                    <a class="uk-navbar-item uk-logo" href="/"><strong>Godfather</strong></a>
                    <ul class="uk-navbar-nav">
                        <li >
                            <Link to={`/`}>Naming</Link>
                        </li>
                        <li>
                            <Link to={`/library`}>Library</Link>
                        </li>
                    </ul>
                </div>
                <div class="uk-navbar-right">
                    <ul class="uk-navbar-nav">
                        <li>
                            <a href="#">
                                <span class="uk-icon uk-margin-small-right" uk-icon="icon: settings"></span>
                                Settings
                            </a>
                        </li>
                    </ul>
                </div>
            </nav>
        </React.Fragment>
    );

};

export default Header;