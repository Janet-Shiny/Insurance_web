import React from 'react';
import { Element } from 'react-scroll';
import Home from './Home';
import Accom from './Accom';
import Services from './Services';
import Industry from './Industry';
import Process from './Process';
import Message from './Message';

const ScrollablePage = () => {
  return (
    <div>
      {/* Scrollable Sections */}
      <Element name="home">
        <Home />
      </Element>

      <Element name="accom">
        <Accom />
      </Element>

      <Element name="services">
        <Services />
      </Element>

      <Element name="industry">
        <Industry />
      </Element>

      <Element name="process">
        <Process />
      </Element>

      <Element name="message">
        <Message />
      </Element>
    </div>
  );
};

export default ScrollablePage;
