import React from 'react';
import Header from '../../ui/Header/Header';
import Footer from '../../ui/Footer/Footer';

export default function Layout(props: any): JSX.Element {
  return (
    <>
        <Header />
        { props.children } 
        <Footer />
    </>
  )
};
