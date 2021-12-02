
import React from 'react'
import Header from '../organisms/Header'

/**
 * エラーページコンポーネント.
 */
const ErrorPage = () => {
    return (
        <React.Fragment>
            <Header />
            <div className="uk-container">
                <u><i><h2>Error&nbsp;Occurred...</h2></i></u>
                <div className="uk-grid">
                    <div className="uk-with-1-1">
                        <p>ツール内でエラーが発生しました.</p>
                    </div>
                </div>
            </div>
        </React.Fragment>
    );
};

export default ErrorPage;