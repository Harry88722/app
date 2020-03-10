import React, { Component } from 'react';
import './App.css';
import xyz from './xyz.js';

class EpicMenu extends Component {
    constructor() {
        super();

        this.state = {
            showForm: false
        };
    }

    showForm() {
        this.setState({
            showForm: !this.state.showForm
        });
    }

    render() {
        let searchForm = this.state.showForm ? (
            <form className="menu__search-form" method="POST">
                <input className="menu__search-input" placeholder="Type and hit enter" />
            </form>
        ) : '';


        return (
            <nav className="menu">

                <div className="menu__right">
                    <ul className="menu__list">
                        
                    </ul>

                    <button onClick={this.showForm.bind(this)} className="menu__search-button"></button>

                    {searchForm}
                </div>
            </nav>
        );
    }
}

export default EpicMenu;