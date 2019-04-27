import React from 'react';
import { render } from 'react-dom';

import { App } from  '../deploy/app/app'

window.onload = init;

function init() {
    var gamesAbomination = document.getElementById('games-abomination');
    render(
        <App />,
        gamesAbomination
    )
}
