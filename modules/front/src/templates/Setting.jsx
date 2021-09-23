import React from 'react'
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { naming as namingAction } from '../ducks/naming/actions';

/**
 * ネーミング機能コンポーネント.
 */
const Setting = (props) => {

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
        props.namingAction(
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
                    <span id={'lowerCamelCase_' + index}>{result.lowerCamelCase}</span>
                    &nbsp;
                    <span uk-icon="copy" uk-tooltip={COPY_TOOLTIP} onClick={() => copyText('lowerCamelCase_' + index)}></span>
                </td>
                <td>
                    <span id={'lowerSnakeCase_' + index}>{result.lowerSnakeCase}</span>
                    &nbsp;
                    <span uk-icon="copy" uk-tooltip={COPY_TOOLTIP} onClick={() => copyText('lowerSnakeCase_' + index)}></span>
                </td>
                <td>
                    <span id={'upperCamelCase_' + index}>{result.upperCamelCase}</span>
                    &nbsp;
                    <span uk-icon="copy" uk-tooltip={COPY_TOOLTIP} onClick={() => copyText('upperCamelCase_' + index)}></span>
                </td>
                <td>
                    <span id={'upperSnakeCase_' + index}>{result.upperSnakeCase}</span>
                    &nbsp;
                    <span uk-icon="copy" uk-tooltip={COPY_TOOLTIP} onClick={() => copyText('upperSnakeCase_' + index)}></span>
                </td>
            </tr>
        );

        return (
            tableRow
        )
    }

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
                        <li class="uk-active">
                            <a href="#">
                                <span class="uk-icon uk-margin-small-right" uk-icon="icon: settings"></span>
                                Settings
                            </a>
                        </li>
                    </ul>
                </div>
            </nav>
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
                            <strong>Case&nbsp;Setting&nbsp;<span uk-icon="question" uk-tooltip="ネーミング結果を表で表します."></span></strong>
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
        namingAction: (target, lowerCamelCase, lowerSnakeCase, upperCamelCase, upperSnakeCase) =>
            dispatch(namingAction(target, lowerCamelCase, lowerSnakeCase, upperCamelCase, upperSnakeCase)),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Setting);