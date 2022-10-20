import React from 'react';
import Header from '../../ui/Header/Header';

export default function Layout(props: any): JSX.Element {
  return (
    <>
        <Header />
        { props.children } 
    </>
  )
};
