import React from 'react';
import {render} from 'react-dom';
import Playlist from './components/Playlist';
import './styles/index.scss';

const App = () => (
    <div>
        <header>
            <h1>Playlist challenge</h1>
        </header>
        <Playlist />
    </div>
);

render(<App />, document.getElementById('app'));