import React from 'react'
import { Link } from 'react-router-dom';

/**
 * 機能リンクなし共通ヘッダコンポーネント.
 */
const LinklessHeader = () => {

    return (
        <React.Fragment>
            <nav className="uk-navbar-container uk-navbar uk-margin">
                <div className="uk-navbar-left">
                    <a className="uk-navbar-item uk-logo" href="/"><strong>Godfather</strong></a>
                </div>
            </nav>
        </React.Fragment>
    );

};

export default LinklessHeader;