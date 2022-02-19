import React, { ReactElement } from 'react';
import { useParams } from 'react-router-dom';
import './NotFound.css';

export default function NotFound(): ReactElement {
    const param = useParams();

    return (
        <div className='not-found'>
            <h2>Error: page Not Found:</h2>
            <h3>Path: "{param['*']}"</h3>
        </div>
    )
}