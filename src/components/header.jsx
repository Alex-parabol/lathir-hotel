import React from 'react';
import { css } from '@emotion/react';
import Nav from './nav';

export default function Header() {
    return (
        <header
            css={css`
                background-color: #333;
                padding: 1rem;
            `}
            >
            <div
                css={css`
                    max-width: 70vw;
                    margin: 0 auto;

                    @media(min-width: 768px){
                        display: flex;
                        align-items: center;
                        justify-content: space-between;
                    }
                `}
            >
                <h1
                    css={css`
                        color: #fff;
                        text-align: center;
                    `}
                >
                    Hotel Lathir
                    </h1>
                    <Nav>Nav</Nav>
            </div>
        </header>
    )
}
