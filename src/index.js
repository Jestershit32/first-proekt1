import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { Header } from './blocks/header';
import { FirstBlock } from './blocks/first-block';
import { PhotoshopBlock } from "./blocks/photoshop-block"


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <div className='body2'>
    <Header />
    <FirstBlock />
    <PhotoshopBlock />
  </div>
);

