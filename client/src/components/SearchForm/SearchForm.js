import React from 'react';

import './search-form.css';

class SearchForm extends React.Component {
        constructor() {
                super();
                this.state = {
                        extended: false,
                        term: '',
                        title: '',
                        author: '',
                        publisher: '',
                        category: '',
                        classificationType: '',
                        classificationCode: ''
                };
        };

        resetState = () => {
                this.setState({
                        term: '',
                        title: '',
                        author: '',
                        publisher: '',
                        category: '',
                        classificationType: '',
                        classificationCode: ''
                });
        }
        handleSubmit = e => {
                e.preventDefault();
                let queryValues = {};
                if (this.state.extended ) {
                        queryValues = {...this.state};
                        delete queryValues.extended;
                        delete queryValues.query;
                } else {
                        queryValues.term = this.state.term;
                }

                this.props.submitQuery(queryValues);
                this.resetState();
        };

        handleChange = e => {
                this.setState({
                        [e.target.id]:e.target.value
                });
        };

        switchRadio = e => {
                this.resetState();
                this.setState({
                        extended: e.target.id === 'extended'
                });

        };

        render() {
        const { extended, term, title, author, publisher, category, 
                classificationType, classificationCode } = this.state;
        return (
                <div className='main-container'>
                        <div className="switch-container" >
                                <div className="radio-field">
                                <input 
                                        type="radio" 
                                        name="search-type" 
                                        id="generic" 
                                        onChange={this.switchRadio}
                                        checked={!extended}
                                />
                                <label htmlFor="generic">Generic search</label>
                                </div>
                                <div className="radio-field">
                                <input  
                                        type="radio" 
                                        name="search-type" 
                                        id="extended" 
                                        onChange={this.switchRadio}
                                        checked={extended}
                                />
                                <label htmlFor="extended">Extended search</label>
                                </div>
                        </div>
                        <form onSubmit={this.handleSubmit} className="form-container">
                                <div className="form-field">
                                        <label htmlFor="title">* Search terms: </label>
                                                <input 
                                                        type="text" 
                                                        name="term" 
                                                        id="term" 
                                                        onChange={this.handleChange}
                                                        value={term}
                                                />
                                        </div>
                                {extended &&                                         
                                <>
                                        <div className="form-field">
                                                <label htmlFor="title">Title: </label>
                                                        <input  
                                                                type="text"
                                                                name="title" 
                                                                id="title"
                                                                onChange={this.handleChange}
                                                                value={title}
                                                        />
                                        </div>
                                        <div className="form-field">
                                                <label htmlFor="author">Author: </label>
                                                        <input  
                                                                type="text" 
                                                                name="author" 
                                                                id="author" 
                                                                onChange={this.handleChange}
                                                                value={author}
                                                        />
                                        </div>
                                        <div className="form-field">
                                                <label htmlFor="publisher">Publisher: </label>
                                                        <input  
                                                                type="text" 
                                                                name="publisher" 
                                                                id="publisher" 
                                                                onChange={this.handleChange}
                                                                value={publisher}
                                                        />
                                        </div>
                                        <div className="form-field">
                                                <label htmlFor="category">Category: </label>
                                                        <input  
                                                                type="text" 
                                                                name="category" 
                                                                id="category" 
                                                                onChange={this.handleChange}
                                                                value={category}
                                                        />
                                        </div>
                                        <div className="form-field select-multifield">
                                                <select name="classificationType" 
                                                        id="classificationType"
                                                        onChange={this.handleChange}
                                                        value={classificationType}
                                                >
                                                        <option value="isbn">Isbn</option>
                                                        <option value="lccn">Lccn</option>
                                                        <option value="oclc">Oclc</option>
                                                </select>
                                                        <input  
                                                                type="text" 
                                                                name="classificationCode" 
                                                                id="classificationCode" 
                                                                placeholder="Insert the code"
                                                                onChange={this.handleChange}
                                                                value={classificationCode}
                                                        />
                                        </div>
                                </>
                        }
                        <input 
                                type="submit" 
                                value="submit" 
                                disabled={term === ''}
                                className="button success fullwidth"
                        />
                        </form>
                </div>
                );
        };
};

export default SearchForm;