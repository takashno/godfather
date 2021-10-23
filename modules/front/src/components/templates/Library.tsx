import React from 'react'
import { /*useState, useEffect,*/ useLayoutEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { registedWordsOperation } from '../../ducks/library/operations'
import { Godfahter, Pagination, RegistedWords } from '../../Types';
import Header from '../organisms/Header'

/**
 * 辞書機能コンポーネント.
 */
const Library = () => {

    const dispath = useDispatch();
    const selector: RegistedWords = useSelector(state => state.registedWords);

    useLayoutEffect(() => {
        // 画面遷移時に入力をクリアする
        dispath(registedWordsOperation(10, 1));
        return () => {
            console.log("Unmount....");
        }
    }, []);

    const tableHeaderStyle: React.CSSProperties = {
        textTransform: 'none'
    }

    const paginationEffect = (page: number, event: React.MouseEvent<HTMLElement>) => {
        console.log(event);
        event.preventDefault();
        // 画面遷移時に入力をクリアする
        dispath(registedWordsOperation(10, page));
    };

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

    const renderPaginationLi = () => {
        const items = [];
        // 最初のページへのリンク
        if (!selector.registedWords.results.pagination.firstPage) {
            items.push(<li><a href="#" onClick={(e) => paginationEffect(1, e)}>&lt;&lt;&nbsp;first</a></li>);
        }
        // 前のページへのリンク
        if (!selector.registedWords.results.pagination.firstPage) {
            items.push(<li><a href="#" onClick={(e) => paginationEffect(selector.registedWords.results.pagination.page - 1, e)}>&lt;&nbsp;previous</a></li>);
        }
        // 1ページ目が表示されていなければ出力
        if (selector.registedWords.results.pagination.page - 3 > 0) {
            items.push(<span>…</span>)
        }
        for (let i = 0; i < selector.registedWords.results.pagination.totalPage; i++) {
            if (selector.registedWords.results.pagination.page - 3 < (i+1) &&  (i+1 < selector.registedWords.results.pagination.page + 3)) {
                if ((i + 1) === selector.registedWords.results.pagination.page) {
                    items.push(<li className="uk-active"><a href="#" onClick={(e) => paginationEffect(i + 1, e)}>{i + 1}</a></li>)
                } else {
                    items.push(<li><a href="#" onClick={(e) => paginationEffect(i + 1, e)}>{i + 1}</a></li>)
                }
            }
        }
        // 最終ページの3ページ以内に現在ページが含まれないなら出力
        if (selector.registedWords.results.pagination.totalPage - selector.registedWords.results.pagination.page >= 3) {
            items.push(<span>…</span>)
        }
        // 次のページへのリンク
        if (!selector.registedWords.results.pagination.lastPage) {
            items.push(<li><a href="#" onClick={(e) => paginationEffect(selector.registedWords.results.pagination.page + 1, e)}>next&nbsp;&gt;</a></li>);
        }
        // 最後のページへのリンク
        if (!selector.registedWords.results.pagination.lastPage) {
            items.push(<li><a href="#" onClick={(e) => paginationEffect(selector.registedWords.results.pagination.totalPage, e)}>last&nbsp;&gt;&gt;</a></li>);
        }
        return items;
    }

    return (
        <React.Fragment>
            <Header />
            <div className="uk-container">
                <u><i><h2>Library</h2></i></u>
                <div className="uk-grid">
                    <div className="uk-with-1-1">
                        <div className="uk-with-1-1">
                            <button className="uk-button uk-button-secondary uk-button-small uk-margin-small-right">新規登録</button>
                            <button className="uk-button uk-button-primary uk-button-small uk-margin-small-right">Download</button>
                            <button className="uk-button uk-button-danger uk-button-small">Upload</button>
                        </div>
                    </div>
                </div>
                <div className="uk-grid">
                    <div className="uk-width-1-1">
                        <h4>
                            <strong>Registed&nbsp;Words&nbsp;<span uk-icon="question" uk-tooltip="辞書として登録されているワードの一覧です."></span></strong>
                        </h4>
                        <div className="uk-overflow-auto">
                            <table className="uk-table uk-table-small uk-table-hover uk-table-divider">
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
                        <ul className="uk-pagination uk-flex-center" uk-margin>
                            {renderPaginationLi()}
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