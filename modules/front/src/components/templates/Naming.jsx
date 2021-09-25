import React from 'react'
import { connect } from 'react-redux';
import { namingOperation } from '../../ducks/naming/operations';
import Header from '../organisms/Header'

/**
 * ネーミング機能コンポーネント.
 */
const Naming = (props) => {

    const COPY_TOOLTIP = 'コピーします.';

    /**
     * 入力ハンドラ.
     */
    const handleChange = (event) => {
        console.log(event.target.value);
        console.log('lowerCamelCase : ' + document.querySelector('#lowerCamelCase').value);
        console.log('lowerSnakeCase : ' + document.querySelector('#lowerSnakeCase').value);
        console.log('upperCamelCase : ' + document.querySelector('#upperCamelCase').value);
        console.log('upperSnakeCase : ' + document.querySelector('#upperSnakeCase').value);
        props.namingOperation(
            event.target.value,
            document.querySelector('#lowerCamelCase').value,
            document.querySelector('#lowerSnakeCase').value,
            document.querySelector('#upperCamelCase').value,
            document.querySelector('#upperSnakeCase').value);
    }

    const copyText = (target) => {
        navigator.clipboard.writeText(document.querySelector('#' + target).innerText);
    }

    const tableHeaderStyle = {
        textTransform: 'none'
    }

    // 結果セル用
    const renderTableTd = (value, index, idPrefix) => {
        const tableTd = (
            <React.Fragment>
                <span id={idPrefix + index}>{value}</span>
                &nbsp;
                <span uk-icon="copy" uk-tooltip={COPY_TOOLTIP} onClick={() => copyText(idPrefix + index)}></span>
            </React.Fragment>
        );
        if (value) {
            return (
                tableTd
            )
        } else {
            return (
                '-'
            )
        }
    }


    /**
     * 結果の行生成.
     * @returns 行
     */
    const renderTableRow = () => {
        const tableRow = props.naming.results.map((result, index) =>
            <tr>
                <td>
                    {result.target}
                </td>
                <td>
                    {renderTableTd(result.lowerCamelCase, index, 'lowerCamelCase_')}
                </td>
                <td>
                    {renderTableTd(result.lowerSnakeCase, index, 'lowerSnakeCase_')}
                </td>
                <td>
                    {renderTableTd(result.upperCamelCase, index, 'upperCamelCase_')}
                </td>
                <td>
                    {renderTableTd(result.upperSnakeCase, index, 'upperSnakeCase_')}
                </td>
            </tr>
        );

        return (
            tableRow
        )
    }

    return (
        <React.Fragment>
            <Header />
            <div class="uk-container">
                <u><i><h2>Naming</h2></i></u>
                <div class="uk-grid">
                    <div class="uk-with-1-1">
                        <p>
                            命名対象のワードを&nbsp;<strong>Target</strong>&nbsp;へ入力すると、辞書に登録されている情報に基づいて変換した結果を&nbsp;<strong>Naming&nbsp;Result</strong>&nbsp;へ表示します.
                        </p>
                    </div>
                </div>
                <div class="uk-grid">
                    <div class="uk-with-1-1">
                        <h4>
                            <strong>Options&nbsp;<span uk-icon="question" uk-tooltip="どの形式の出力を行うかのオプションです."></span></strong>
                        </h4>
                        <div class="uk-margin uk-grid-small uk-child-width-auto uk-grid">
                            <label><input id="lowerCamelCase" class="uk-checkbox" type="checkbox" />&nbsp;LowerCamelCase</label>
                            <label><input id="lowerSnakeCase" class="uk-checkbox" type="checkbox" />&nbsp;LowerSnakeCase</label>
                            <label><input id="upperCamelCase" class="uk-checkbox" type="checkbox" />&nbsp;UpperCamelCase</label>
                            <label><input id="upperSnakeCase" class="uk-checkbox" type="checkbox" />&nbsp;UpperSnakeCase</label>
                        </div>
                    </div>
                </div>
                <div class="uk-grid">
                    <div class="uk-width-1-1 uk-margin-bottom">
                        <h4>
                            <strong>Target&nbsp;<span uk-icon="question" uk-tooltip="対象のワードを記載します.<br/>改行して複数指定可能です.<br/>その場合、１行毎を別の対象と捉えます."></span></strong>
                        </h4>
                        <textarea id="target" class="uk-textarea uk-form-width-large" rows="5" onChange={handleChange} />
                    </div>
                    <div class="uk-width-1-1 ">
                        <h4>
                            <strong>Naming&nbsp;Result&nbsp;<span uk-icon="question" uk-tooltip="ネーミング結果を表で表します."></span></strong>
                        </h4>
                        <div class="uk-overflow-auto">
                            <table class="uk-table uk-table-small uk-table-hover">
                                <thead>
                                    <tr>
                                        <th style={tableHeaderStyle}>Target Word</th>
                                        <th style={tableHeaderStyle}>LowerCamelCase</th>
                                        <th style={tableHeaderStyle}>LowerSnakeCase</th>
                                        <th style={tableHeaderStyle}>UpperCamelCase</th>
                                        <th style={tableHeaderStyle}>UpperSnakeCase</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {renderTableRow()}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </React.Fragment>
    );
};

const mapStateToProps = state => {
    return {
        naming: state.naming
    };
};

const mapDispatchToProps = dispatch => {
    return {
        namingOperation: (target, lowerCamelCase, lowerSnakeCase, upperCamelCase, upperSnakeCase) =>
            dispatch(namingOperation(target, lowerCamelCase, lowerSnakeCase, upperCamelCase, upperSnakeCase)),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Naming);