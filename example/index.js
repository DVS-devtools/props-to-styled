import React from 'react';
import ReactDOM from 'react-dom';
import styled from 'styled-components';

import {
    ellipsis,
    fixed,
    float,
    linearGradient,
    shape,
    swipe,
    uppercase
} from '../src/index.js';

const CustomComponent = styled.div`
    margin-top: 10px;
    margin-bottom: 10px;

    ${ellipsis};
    ${fixed};
    ${float};
    ${linearGradient};
    ${shape};
    ${swipe};
    ${uppercase};
`;

const App = () => {
    return (
        <div>
            <CustomComponent fixed='top'>
                FIXED TOP
            </CustomComponent>

            <br/>

            <CustomComponent ellipsis={true}>
                ELLIPSIS : Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate 
                felis id tortor porta, nec facilisis nunc vehicula. Vivamus ac ante 
                a nulla viverra rhoncus vel ut sapien.
            </CustomComponent>

            <CustomComponent shape='circle' style={{border: '1px solid black', width: '100px', height: '100px'}}>
                SHAPE CIRCLE
            </CustomComponent>

            <CustomComponent shape='square' style={{border: '1px solid black', width: '100px', height: '100px'}}>
                SHAPE SQUARE
            </CustomComponent>

            <CustomComponent swipe={true}>
                SWIPE
                <img src='https://placekitten.com/g/100/100' />
                <img src='https://placekitten.com/g/100/100' />
                <img src='https://placekitten.com/g/100/100' />
                <img src='https://placekitten.com/g/100/100' />
                <img src='https://placekitten.com/g/100/100' />
                <img src='https://placekitten.com/g/100/100' />
            </CustomComponent>

            <CustomComponent uppercase={true}>
                uppercase
            </CustomComponent>

            <CustomComponent linearGradient={['#F00', '#0F0']} style={{ height: '500px' }}>
                LINEAR GRADIENT
            </CustomComponent>

            <CustomComponent float='left'>
                FLOAT LEFT
            </CustomComponent>

            <CustomComponent float='right'>
                FLOAT RIGHT
            </CustomComponent>

            <br/><br/><br/><br/>

            <CustomComponent fixed='bottom'>
                FIXED BOTTOM
            </CustomComponent>
        </div>
    )
};

ReactDOM.render((<App />), document.getElementById('root'));