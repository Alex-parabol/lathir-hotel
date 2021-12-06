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
          font-size: 62.5%M
        }
          body{
            font-size: 16px;
            font-size: 1.6rem;
          }
        `}
      />
      <Helmet>
        <title>Lathir Hotel</title>
        <link href="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/normalize/8.0.1/normalize.min.css" />
        <link href="https://fonts.googleapis.com/css2?family=PT+Sans:wght@400;700&family=Roboto:ital,wght@0,400;0,700;1,300&display=swap" rel="stylesheet"/>
      </Helmet>
      <Header/>
    {props.children}
    </Fragment>
  )
}

export default Layout;
