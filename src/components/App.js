import React, { Component } from 'react'
import {BrowserRouter, Route} from 'react-router-dom'
import Header from './Header';
import StreamShow from './streams/StreamCreate';
import StreamDelete from './streams/StreamDelete';
import StreamEdit from './streams/StreamEdit';
import StreamList from './streams/StreamList';
import StreamCreate from './streams/StreamCreate';


class App extends Component {
    render() {
        return (
            <div className="ui container">
                <BrowserRouter>
                    <div>
                        <Header/>
                        <Route path="/" exact component={StreamList}/>
                        <Route path="/streams/show" exact component={StreamShow}/>
                        <Route path="/Streams/new" exact component={StreamCreate}/>
                        <Route path="/Streams/edit" exact component={StreamEdit}/>
                        <Route path="/Stream/delete" exact component={StreamDelete}/>
                    </div>
                </BrowserRouter>
            </div>
        )
    }
}

export default App;