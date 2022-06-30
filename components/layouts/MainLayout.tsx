import React, {PropsWithChildren} from 'react';
import Head from "next/head";
import styles from "./MainLayout.module.css";
import {Navbar} from "../Navbar";
import { ScriptProps } from '../../node_modules/next/script';



export const MainLayout:React.FC<PropsWithChildren<ScriptProps>> = ({children}) =>{
  return (


    <div className= {styles.container}>
      <Head>
        <title> Home-Ernesto </title>
        <meta name="description" content= "Home Page"/>
        <link rel= "icon" href ="/favicon.ico"/>

      </Head>
      <Navbar/>

      <main className={styles.main}>
        {children}
      </main>
    </div >
  )
};


