import React from 'react'
import { useLayoutEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { registedWordsOperation } from '../../ducks/library/operations'
import { libraryUploadInitAction } from '../../ducks/libraryUpload/actions';
import { libraryUploadOperation } from '../../ducks/libraryUpload/operations';
import initialState from '../../ducks/store/initialState';
import { backendHost } from '../../ducks/utils/envUtils';
import { Godfahter, Pagination, RegistedWords } from '../../Types';
import Header from '../organisms/Header'

/**
 * 辞書機能コンポーネント.
 */
const Library = () => {

    const dispatch = useDispatch();
    const selector: Godfahter = useSelector((state: Godfahter) => state);
    const fileInput: React.RefObject<HTMLInputElement> = React.createRef()

    useLayoutEffect(() => {
        // 画面遷移時にアップロードのStateの初期化する
        dispatch(libraryUploadInitAction(initialState.libraryUpload.result));
        // 画面遷移時に入力をクリアする
        dispatch(registedWordsOperation(10, 1));
        return () => {
            // Nothing...
        }
    }, []);

    const tableHeaderStyle: React.CSSProperties = {
        textTransform: 'none'
    }

    /**
     * 辞書ダウンロードURLを取得.
     * @returns 
     */
    const libraryDownloadUrl = (): string => {
        return backendHost() + "/library/download";
    }

    /**
     * 辞書アップロード処理
     * @param event 
     */
    const handleChange = async (event: React.ChangeEvent<HTMLInputElement>) => {
        event.preventDefault()
        await dispatch(libraryUploadOperation(fileInput));
        // 最新の辞書の1ページ目を表示する
        await dispatch(registedWordsOperation(10, 1));
    };

    const paginationEffect = (page: number, event: React.MouseEvent<HTMLElement>) => {
        event.preventDefault();
        // アップロードの次点アクションがページネーションによる遷移の場合があるのでStateを初期化する
        dispatch(libraryUploadInitAction(initialState.libraryUpload.result));
        dispatch(registedWordsOperation(10, page));
    };

    // Upload結果メッセージ
    const uploadMessage = () => {
        if (selector.libraryUpload.result.status) {
            if (selector.libraryUpload.result.status === 'success') {
                return (
                    <React.Fragment>
                        <div className="uk-margin">
                            <h5 className="uk-text-success">辞書アップロードを正常に完了しました.</h5>
                        </div>
                    </React.Fragment>
                )
            } else {
                return (
                    <React.Fragment>
                        <div className="uk-margin">
                            <h5 className="uk-text-danger">辞書アップロードに失敗しました。</h5>
                        </div>
                    </React.Fragment>
                )
            }
        } else {
            return null;
        }
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
            if (selector.registedWords.results.pagination.page - 3 < (i + 1) && (i + 1 < selector.registedWords.results.pagination.page + 3)) {
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
                            <Link to={`/library/registration`}><button className="uk-button uk-button-secondary uk-button-small uk-margin-small-right" uk-tooltip="title: 新規登録を行います。">New&nbsp;Word</button></Link>
                            <a href={libraryDownloadUrl()}><button className="uk-button uk-button-primary uk-button-small uk-margin-small-right" uk-tooltip="title: 辞書ツールで現在保持しているワードの一覧をYAMLファイルでダウンロードします。">Library&nbsp;Download</button></a>
                            <div className="js-upload uk-form-custom" uk-form-custom>
                                <input type="file" ref={fileInput} accept=".yaml,.yml" onChange={(e) => handleChange(e)} uk-tooltip="pos: right;title: 登録を行うワードの一覧を記したYAMLファイルをアップロードする機能です。※辞書は全置き換えとなります。" />
                                <button className="uk-button uk-button-danger uk-button-small" type="button">Library&nbsp;Upload</button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="uk-grid">
                    <div className="uk-width-1-1">
                        {uploadMessage()}
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
                        <ul className="uk-pagination uk-flex-center">
                            {renderPaginationLi()}
                        </ul>
                    </div>
                </div>
            </div>
        </React.Fragment>
    );
};

export default Library;