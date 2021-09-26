import React from 'react'
import { connect } from 'react-redux';
import { namingAction } from '../../ducks/naming/actions';
import Header from '../organisms/Header'

/**
 * ネーミング機能コンポーネント.
 */
const Library = (props) => {

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
                    {result.converted}
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
                            ライブラリに登録されている各種ワードの一覧を確認する機能です.<br/>
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

export default connect(mapStateToProps, mapDispatchToProps)(Library);