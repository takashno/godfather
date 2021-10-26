import React from 'react'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { namingOperation } from '../../ducks/naming/operations';
import initialState from '../../ducks/store/initialState';
import Header from '../organisms/Header'
import { Godfahter } from '../../Types';

/**
 * ネーミング機能コンポーネント.
 */
const Naming = () => {

    const dispath = useDispatch();
    const selector = useSelector((state: Godfahter) => state);
    const settingSelector = selector.setting;
    const caseSettingSelector = settingSelector.caseSetting;
    const COPY_TOOLTIP = 'コピーします.';

    useEffect(() => {
        // 画面遷移時に入力をクリアする
        selector.naming = initialState.naming;
    });

    /**
     * 入力ハンドラ.
     */
    const handleChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
        dispath(namingOperation(
            event.target.value,
            caseSettingSelector.lowerCamelCase,
            caseSettingSelector.lowerSnakeCase,
            caseSettingSelector.upperCamelCase,
            caseSettingSelector.upperSnakeCase));
    }

    const copyText = (target: string) => {
        const element: HTMLElement = document.querySelector('#' + target)!;
        navigator.clipboard.writeText(element.innerText);
    }

    const tableHeaderStyle: React.CSSProperties = {
        textTransform: 'none'
    }

    const missingsStyle: React.CSSProperties = {
        color: 'red'
    }

    // 結果セル用
    const renderTableTd = (value: string, index: number, idPrefix: string) => {
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

    const missingTableTd = (missings: string[]) => {
        let missingStr = "";
        // undefinedとnullを除外
        if (missings != null) {
            missings.forEach((x: string) => {
                if (missingStr === "") {
                    missingStr = x;
                } else {
                    missingStr = missingStr + ", " + x;
                }
            })
        }
        return (missingStr);
    }

    /**
     * 結果の行生成.
     * @returns 行
     */
    const renderTableRow = () => {
        const tableRow = selector.naming.results.filter(x => x.target).map((result, index) =>
            <tr>
                <td>
                    {result.target}
                </td>
                <td>
                    {result.convertTarget}
                </td>
                <td style={missingsStyle}>
                    {missingTableTd(result.missings)}
                </td>
                {caseSettingSelector.lowerCamelCase ? <td>{renderTableTd(result.lowerCamelCase, index, 'lowerCamelCase_')}</td> : null}
                {caseSettingSelector.lowerSnakeCase ? <td>{renderTableTd(result.lowerSnakeCase, index, 'lowerSnakeCase_')}</td> : null}
                {caseSettingSelector.upperCamelCase ? <td>{renderTableTd(result.upperCamelCase, index, 'upperCamelCase_')}</td> : null}
                {caseSettingSelector.upperSnakeCase ? <td>{renderTableTd(result.upperSnakeCase, index, 'upperSnakeCase_')}</td> : null}
            </tr>
        );

        return (
            tableRow
        )
    }

    /**
     * 結果テーブル生成.
     * @returns Table
     */
    const renderTable = () => {
        const table =
            <table className="uk-table uk-table-small uk-table-hover">
                <thead>
                    <tr>
                        <th style={tableHeaderStyle}>Target Word</th>
                        <th style={tableHeaderStyle}>Convert Target</th>
                        <th style={tableHeaderStyle}>Missing</th>
                        {caseSettingSelector.lowerCamelCase ? <th style={tableHeaderStyle}>LowerCamelCase</th> : null}
                        {caseSettingSelector.lowerSnakeCase ? <th style={tableHeaderStyle}>LowerSnakeCase</th> : null}
                        {caseSettingSelector.upperCamelCase ? <th style={tableHeaderStyle}>UpperCamelCase</th> : null}
                        {caseSettingSelector.upperSnakeCase ? <th style={tableHeaderStyle}>UpperSnakeCase</th> : null}
                    </tr>
                </thead>
                <tbody>
                    {renderTableRow()}
                </tbody>
            </table>

        return (
            table
        )
    }

    return (
        <React.Fragment>
            <Header />
            <div className="uk-container">
                <u><i><h2>Naming</h2></i></u>
                <div className="uk-grid">
                    <div className="uk-with-1-1">
                        <p>
                            命名対象のワードを&nbsp;<strong>Target</strong>&nbsp;へ入力すると、辞書に登録されている情報に基づいて変換した結果を&nbsp;<strong>Naming&nbsp;Result</strong>&nbsp;へ表示します.<br />
                            変換はまず入力された文字列から名詞と考えられる言葉のみを抽出し、変換対象文字列として構築します.<br />
                            その後に名詞ごとに登録辞書に対して検索をかけて変換を行います.<br />
                            辞書変換に失敗した文字列は、&nbsp;<strong>Missing</strong>&nbsp;に表示されます. 不足している単語は&nbsp;<strong>Library</strong>&nbsp;機能から登録してください。<br />
                            <u>※&nbsp;この画面への入力は別ページに移動すると消えます. 残したい場合は、コピーしておいてください.</u><br />
                        </p>
                    </div>
                </div>
                <div className="uk-grid">
                    <div className="uk-width-1-1 uk-margin-bottom">
                        <h4>
                            <strong>Target&nbsp;<span uk-icon="question" uk-tooltip="対象のワードを記載します.<br/>改行して複数指定可能です.<br/>その場合、１行毎を別の対象と捉えます."></span></strong>
                        </h4>
                        <textarea id="target" className="uk-textarea uk-form-width-large" rows={5} onChange={(e) => handleChange(e)} />
                    </div>
                    <div className="uk-width-1-1 ">
                        <h4>
                            <strong>Naming&nbsp;Result&nbsp;<span uk-icon="question" uk-tooltip="ネーミング結果を表で表します."></span></strong>
                        </h4>
                        <div className="uk-overflow-auto">
                            {renderTable()}
                        </div>
                    </div>
                </div>
            </div>
        </React.Fragment>
    );
};

export default Naming;