import React from 'react'
import { useLayoutEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { libraryRegistrationInitAction } from '../../ducks/libraryRegistration/actions';
import { libraryRegistrationOperation } from '../../ducks/libraryRegistration/operations';
import initialState from '../../ducks/store/initialState';

import { Godfahter, Pagination, RegistedWords } from '../../Types';
import Header from '../organisms/Header'

/**
 * 辞書機能登録コンポーネント.
 */
const LibraryRegistration = () => {

    const dispatch = useDispatch();
    const selector = useSelector((state: Godfahter) => state);

    useLayoutEffect(() => {
        // Stateの初期化
        dispatch(libraryRegistrationInitAction(
            initialState.libraryRegistration.target,
            initialState.libraryRegistration.results));
        return () => {
            console.log("Unmount....");
        }
    }, []);

    // 理解できていなかったが、サーバーサイドの処理を待ちたい場合は、ここからasyncが必要
    const handleClick = async (event: React.MouseEvent<HTMLElement>) => {
        // HTMLの入力チェックを利用するため
        event.preventDefault();

        const button: HTMLButtonElement = document.querySelector('#registration')!;
        const word: HTMLInputElement = document.querySelector('#regist-target-word')!;
        const converted: HTMLInputElement = document.querySelector('#regist-target-converted')!;

        // 型が安全で両方入力されている場合
        if (typeof word.value === 'string'
            && typeof converted.value === 'string'
            && word.value !== ''
            && converted.value !== '') {

            // 入力チェックエラーのスタイルを外す（たとえエラーでなくても外す処理はする）
            word.classList.remove('uk-form-danger');
            converted.classList.remove('uk-form-danger');

            button.textContent = "Wait..."
            button.disabled = true;

            // サーバーサイドの処理を待つ
            await dispatch(libraryRegistrationOperation(
                word.value,
                converted.value));

            // 再度登録可能とする
            button.textContent = "Registration"
            button.disabled = false;

        } else {
            // それぞれ入力がなければ、フォームを赤くする
            if (word.value === '') {
                word.classList.add('uk-form-danger');
            }
            if (converted.value === '') {
                converted.classList.add('uk-form-danger');
            }
        }
    };

    // 結果メッセージ
    const resultMessage = () => {
        console.log(selector.libraryRegistration.results);
        if (selector.libraryRegistration.results.length > 0) {
            if (selector.libraryRegistration.results[0].status === 'success') {
                return (
                    <React.Fragment>
                        <div className="uk-margin">
                            <h5 className="uk-text-success">ワード登録完了しました.</h5>
                        </div>
                    </React.Fragment>
                )
            } else {
                if (selector.libraryRegistration.results[0].failureReason === 'duplicate') {
                    return (
                        <React.Fragment>
                            <div className="uk-margin">
                                <h5 className="uk-text-danger">ワード登録に失敗しました.<br/>ワードは既に登録されています.</h5>
                            </div>
                        </React.Fragment>
                    )
                } else {
                    return (
                        <React.Fragment>
                            <div className="uk-margin">
                                <h5 className="uk-text-danger">ワード登録に失敗しました.</h5>
                            </div>
                        </React.Fragment>
                    )
                }
            }
        } else {
            return null;
        }
    }

    return (
        <React.Fragment>
            <Header />
            <div className="uk-container">
                <u><i><h2>Library&nbsp;Registration</h2></i></u>
                <div className="uk-grid">
                    <div className="uk-with-1-1">
                        <p>
                            辞書に新規ワードを登録します.<br />
                            既に登録されているワードや予約語と競合する場合は、登録できません.
                        </p>
                    </div>
                </div>
                <div className="uk-grid">
                    <div className="uk-width-1-1 uk-margin-bottom">
                        <form className="uk-form-horizontal uk-margin-large">
                            {resultMessage()}
                            <div className="uk-margin">
                                <label className="uk-form-label" htmlFor="regist-target-word">登録ワード&nbsp;<span style={{ color: "red" }}>*</span></label>
                                <div className="uk-form-controls">
                                    <input className="uk-input uk-form-width-large" id="regist-target-word" type="text" placeholder="変換前" required />
                                </div>
                            </div>
                            <div className="uk-margin">
                                <label className="uk-form-label" htmlFor="regist-target-converted">変換ワード&nbsp;<span style={{ color: "red" }}>*</span></label>
                                <div className="uk-form-controls">
                                    <input className="uk-input uk-form-width-large" id="regist-target-converted" type="text" placeholder="変換後" required />
                                </div>
                            </div>
                            <button id="registration" type="submit" className="uk-button uk-button-secondary" onClick={(e) => { handleClick(e) }}>Registration</button>
                        </form>
                    </div>
                </div>
            </div>
        </React.Fragment>
    );
};

export default LibraryRegistration;