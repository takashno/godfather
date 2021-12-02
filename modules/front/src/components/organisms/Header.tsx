import React from 'react'
import { Link } from 'react-router-dom';

/**
 * 共通ヘッダコンポーネント.
 */
const Header = () => {

    return (
        <React.Fragment>
            <nav className="uk-navbar-container uk-navbar uk-margin">
                <div className="uk-navbar-left">
                    <a className="uk-navbar-item uk-logo" href="/"><strong>Godfather</strong></a>
                    <ul className="uk-navbar-nav">
                        <li >
                            <Link to={`/`}>Naming</Link>
                        </li>
                        <li>
                            <Link to={`/library`}>Library</Link>
                        </li>
                    </ul>
                </div>
                <div className="uk-navbar-right">
                    <ul className="uk-navbar-nav">
                        <li>
                            <Link to={`/setting`}>
                                <span className="uk-icon uk-margin-small-right" uk-icon="icon: settings"></span>
                                Settings
                            </Link>
                        </li>
                    </ul>
                </div>
            </nav>
        </React.Fragment>
    );

};

export default Header;