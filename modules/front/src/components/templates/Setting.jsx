import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { settingOperation } from '../../ducks/setting/operations';
import Header from '../organisms/Header'

/**
 * ネーミング機能コンポーネント.
 */
const Setting = (props) => {

    const dispath = useDispatch();
    const selector = useSelector(state => state);
    const caseSettingSelector = selector.setting.caseSetting;

    const handleChange = () => {
        var lowerCamelCase = document.querySelector('#lowerCamelCase').checked;
        var lowerSnakeCase = document.querySelector('#lowerSnakeCase').checked;
        var upperCamelCase = document.querySelector('#upperCamelCase').checked;
        var upperSnakeCase = document.querySelector('#upperSnakeCase').checked;
        const caseSetting = {
            lowerCamelCase: lowerCamelCase,
            lowerSnakeCase: lowerSnakeCase,
            upperCamelCase: upperCamelCase,
            upperSnakeCase: upperSnakeCase
        }
        dispath(settingOperation(caseSetting));
    }

    return (
        <React.Fragment>
            <Header />
            <div class="uk-container">
                <u><i><h2>Setting</h2></i></u>
                <div class="uk-grid">
                    <div class="uk-with-1-1">
                        <p>
                            ツールの設定を行います.
                        </p>
                    </div>
                </div>
                <div class="uk-grid">
                    <div class="uk-width-1-1 ">
                        <h4>
                            <strong>Case&nbsp;Setting</strong>
                        </h4>
                        <p>
                            Namingにて変換するケースの指定を行います.<br />
                            デフォルト状態では全てのケースが対象となるようにチェックが<code>ON</code>の状態です.<br />
                            全てのケースは不要でありNaming結果表から削りたい場合などはチェックを<code>OFF</code>にしてください.
                        </p>
                        <form class="uk-form-horizontal uk-margin-small">
                            <div class="uk-margin-small">
                                <div class="uk-form-label">LowerCamelCase</div>
                                <div class="uk-form-controls uk-form-controls-text">
                                    <input class="uk-checkbox" type="checkbox" id="lowerCamelCase" onChange={handleChange} checked={caseSettingSelector.lowerCamelCase} />
                                </div>
                            </div>
                            <div class="uk-margin-small">
                                <div class="uk-form-label">LowerSnakeCase</div>
                                <div class="uk-form-controls uk-form-controls-text">
                                    <input class="uk-checkbox" type="checkbox" id="lowerSnakeCase" onChange={handleChange} checked={caseSettingSelector.lowerSnakeCase} />
                                </div>
                            </div>
                            <div class="uk-margin-small">
                                <div class="uk-form-label">UpperCamelCase</div>
                                <div class="uk-form-controls uk-form-controls-text">
                                    <input class="uk-checkbox" type="checkbox" id="upperCamelCase" onChange={handleChange} checked={caseSettingSelector.upperCamelCase} />
                                </div>
                            </div>
                            <div class="uk-margin-small">
                                <div class="uk-form-label">UpperSnakeCase</div>
                                <div class="uk-form-controls uk-form-controls-text">
                                    <input class="uk-checkbox" type="checkbox" id="upperSnakeCase" onChange={handleChange} checked={caseSettingSelector.upperSnakeCase} />
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