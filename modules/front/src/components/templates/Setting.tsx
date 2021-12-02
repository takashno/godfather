import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { settingOperation } from '../../ducks/setting/operations';
import { Godfahter } from '../../Types';
import Header from '../organisms/Header'

/**
 * 設定コンポーネント.
 */
const Setting = () => {

    const dispath = useDispatch();
    const selector = useSelector((state: Godfahter) => state);
    const caseSettingSelector = selector.setting.caseSetting;

    const handleChange = () => {
        var lowerCamelCaseElement: HTMLInputElement = document.querySelector('#lowerCamelCase')!;
        var lowerSnakeCaseElement: HTMLInputElement = document.querySelector('#lowerSnakeCase')!;
        var upperCamelCaseElement: HTMLInputElement = document.querySelector('#upperCamelCase')!;
        var upperSnakeCaseElement: HTMLInputElement = document.querySelector('#upperSnakeCase')!;
        const caseSetting = {
            lowerCamelCase: lowerCamelCaseElement.checked,
            lowerSnakeCase: lowerSnakeCaseElement.checked,
            upperCamelCase: upperCamelCaseElement.checked,
            upperSnakeCase: upperSnakeCaseElement.checked
        }
        dispath(settingOperation(caseSetting));
    }

    return (
        <React.Fragment>
            <Header />
            <div className="uk-container">
                <u><i><h2>Setting</h2></i></u>
                <div className="uk-grid">
                    <div className="uk-with-1-1">
                        <p>
                            ツールの設定を行います.
                        </p>
                    </div>
                </div>
                <div className="uk-grid">
                    <div className="uk-width-1-1 ">
                        <h4>
                            <strong>Case&nbsp;Setting</strong>
                        </h4>
                        <p>
                            Namingにて変換するケースの指定を行います.<br />
                            デフォルト状態では全てのケースが対象となるようにチェックが<code>ON</code>の状態です.<br />
                            全てのケースは不要でありNaming結果表から削りたい場合などはチェックを<code>OFF</code>にしてください.
                        </p>
                        <form className="uk-form-horizontal uk-margin-small">
                            <div className="uk-margin-small">
                                <div className="uk-form-label">LowerCamelCase</div>
                                <div className="uk-form-controls uk-form-controls-text">
                                    <input className="uk-checkbox" type="checkbox" id="lowerCamelCase" onChange={handleChange} checked={caseSettingSelector.lowerCamelCase} />
                                </div>
                            </div>
                            <div className="uk-margin-small">
                                <div className="uk-form-label">LowerSnakeCase</div>
                                <div className="uk-form-controls uk-form-controls-text">
                                    <input className="uk-checkbox" type="checkbox" id="lowerSnakeCase" onChange={handleChange} checked={caseSettingSelector.lowerSnakeCase} />
                                </div>
                            </div>
                            <div className="uk-margin-small">
                                <div className="uk-form-label">UpperCamelCase</div>
                                <div className="uk-form-controls uk-form-controls-text">
                                    <input className="uk-checkbox" type="checkbox" id="upperCamelCase" onChange={handleChange} checked={caseSettingSelector.upperCamelCase} />
                                </div>
                            </div>
                            <div className="uk-margin-small">
                                <div className="uk-form-label">UpperSnakeCase</div>
                                <div className="uk-form-controls uk-form-controls-text">
                                    <input className="uk-checkbox" type="checkbox" id="upperSnakeCase" onChange={handleChange} checked={caseSettingSelector.upperSnakeCase} />
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </React.Fragment>
    );
};

export default Setting;