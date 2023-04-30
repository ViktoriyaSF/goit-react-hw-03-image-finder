import React, { Component } from 'react';
import { Layout } from './Layout/Layout';
import { GlobalStyle } from './BasicStyles/GlobalStyle';
import { Section } from './Section/Section';

export class App extends Component {
  state = {};
  render() {
    return (
      <Layout>
        <Section>React homework templatedddddd</Section>
        <GlobalStyle />
      </Layout>
    );
  }
}
