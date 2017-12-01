import React from 'react';
import {render} from 'react-dom';
import Container from './components/Container';
import './styles/index.scss';

const App = () => (
    <div>
        <header>
            <h1>Playlist challenge</h1>
        </header>
        <Container />
    </div>
);

render(<App />, document.getElementById('app'));