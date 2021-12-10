import React, { Fragment } from 'react'
import Header from './header';
import {Global, css} from '@emotion/react'
import { Helmet } from 'react-helmet';

const Layout = (props)=> {
  return (
    <Fragment>
      <Global
        styles={css`
        html{
          font-size: 62.5%;
        }
          body{
            font-size: 16px;
            font-size: 1.6rem;
            line-height: 1.5;
          }
        h1,h2,h3 {
          margin: 0;
          line-height: 1.5;
        }
        h1,h2 {
          font-family: 'Roboto'
        }

        h3 {
          font-family: 'PT sans'
        }

        ul {
          list-style: none;
          margin: 0;
          padding: 0;
        }
        `}
      />
      <Helmet>
        <title>Lathir Hotel</title>
        <link href="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/normalize/8.0.1/normalize.min.css" rel="stylesheet"/>
        <link href="https://fonts.googleapis.com/css2?family=PT+Sans:wght@400;700&family=Roboto:ital,wght@0,400;0,700;1,300&display=swap" rel="stylesheet"/>
      </Helmet>
      <Header/>
    {props.children}
    </Fragment>
  )
}

export default Layout;
