import React from 'react'
import { useState, useEffect, useLayoutEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { registedWordsOperation } from '../../ducks/library/operations'
import Header from '../organisms/Header'

/**
 * ネーミング機能コンポーネント.
 */
const Library = (props) => {

    const dispath = useDispatch();
    const selector = useSelector(state => state);

    useLayoutEffect(() => {
        // 画面遷移時に入力をクリアする
        dispath(registedWordsOperation(10, 1));
        return () => {
            console.log("Unmount....");
        }
    }, []);

    const tableHeaderStyle = {
        textTransform: 'none'
    }

    /**
     * 結果の行生成.
     * @returns 行
     */
    const renderTableRow = () => {
        const tableRow = selector.registedWords.results.words.map((words, index) =>
            <tr>
                <td>
                    {words.word}
                </td>
                <td>
                    {words.converted}
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
                <u><i><h2>Library</h2></i></u>
                <div class="uk-grid">
                    <div class="uk-with-1-1">
                        <p>
                            ライブラリに登録されている各種ワードの一覧を確認する機能です.<br />
                        </p>
                    </div>
                </div>
                <div class="uk-grid">
                    <div class="uk-width-1-1">
                        <h4>
                            <strong>Registed&nbsp;Words&nbsp;<span uk-icon="question" uk-tooltip="辞書として登録されているワードの一覧です."></span></strong>
                        </h4>
                        <div class="uk-overflow-auto">
                            <table class="uk-table uk-table-small uk-table-hover">
                                <thead>
                                    <tr>
                                        <th style={tableHeaderStyle}>Target Word</th>
                                        <th style={tableHeaderStyle}>Converted Word</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {renderTableRow()}
                                </tbody>
                            </table>
                        </div>
                        <ul class="uk-pagination" uk-margin>
                            <li><a href="#"><span uk-pagination-previous></span></a></li>
                            <li><a href="#">1</a></li>
                            <li class="uk-disabled"><span>...</span></li>
                            <li><a href="#">4</a></li>
                            <li><a href="#">5</a></li>
                            <li><a href="#">6</a></li>
                            <li class="uk-active"><span>7</span></li>
                            <li><a href="#">8</a></li>
                            <li><a href="#">9</a></li>
                            <li><a href="#">10</a></li>
                            <li class="uk-disabled"><span>...</span></li>
                            <li><a href="#">20</a></li>
                            <li><a href="#"><span uk-pagination-next></span></a></li>
                        </ul>
                    </div>
                </div>
                { /*
                <div class="uk-grid">
                    <div class="uk-width-1-1">
                        <h4>
                            <strong>Reserved&nbsp;Words&nbsp;<span uk-icon="question" uk-tooltip="予約語として登録されているワードの一覧です."></span></strong>
                        </h4>
                        <div class="uk-overflow-auto">
                            <table class="uk-table uk-table-small uk-table-hover">
                                <thead>
                                    <tr>
                                        <th style={tableHeaderStyle}>Reserved Word</th>
                                        <th style={tableHeaderStyle}>Description</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {renderTableRow()}
                                </tbody>
                            </table>
                        </div>
                        <ul class="uk-pagination" uk-margin>
                            <li><a href="#"><span uk-pagination-previous></span></a></li>
                            <li><a href="#">1</a></li>
                            <li class="uk-disabled"><span>...</span></li>
                            <li><a href="#">4</a></li>
                            <li><a href="#">5</a></li>
                            <li><a href="#">6</a></li>
                            <li class="uk-active"><span>7</span></li>
                            <li><a href="#">8</a></li>
                            <li><a href="#">9</a></li>
                            <li><a href="#">10</a></li>
                            <li class="uk-disabled"><span>...</span></li>
                            <li><a href="#">20</a></li>
                            <li><a href="#"><span uk-pagination-next></span></a></li>
                        </ul>
                    </div>
                </div>
                */}
            </div>
        </React.Fragment>
    );
};

export default Library;