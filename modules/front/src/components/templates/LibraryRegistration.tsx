import React from 'react'
import { useLayoutEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { registedWordsOperation } from '../../ducks/library/operations'
import { Godfahter, Pagination, RegistedWords } from '../../Types';
import Header from '../organisms/Header'

/**
 * 辞書機能登録コンポーネント.
 */
const LibraryRegistration = () => {

    const dispath = useDispatch();
    const selector = useSelector((state: Godfahter) => state);

    useLayoutEffect(() => {
    }, []);

    return (
        <React.Fragment>
            <Header />
            <div className="uk-container">
                <u><i><h2>Library&nbsp;Registration</h2></i></u>
                <div className="uk-grid">
                    <div className="uk-with-1-1">
                        <p>辞書にワードを登録します.</p>
                    </div>
                </div>
                <div className="uk-grid">
                    <div className="uk-width-1-1 uk-margin-bottom">
                        <h4>
                            <strong>Word&nbsp;<span uk-icon="question" uk-tooltip="対象のワードを記載します"></span></strong>
                        </h4>
                        <input id="target" className="uk-form-width-large"/>
                        <h4>
                            <strong>Converted&nbsp;<span uk-icon="question" uk-tooltip="変換後のワードを記載します."></span></strong>
                        </h4>
                        <input id="target" className="uk-form-width-large"/>
                    </div>
                </div>
            </div>
        </React.Fragment>
    );
};

export default LibraryRegistration;