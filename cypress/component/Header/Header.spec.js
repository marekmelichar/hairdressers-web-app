/* eslint-disable no-undef */
/// <reference types="cypress" />
import React from 'react';
import { IntlProvider } from 'react-intl-hooks';
import { BrowserRouter } from 'react-router-dom';
import { mount } from 'cypress-react-unit-test';
import Header from '../../../src/app/components/Header/Header';
import { locales } from '../../../src/app/i18n';

const currentLocale = 'cs';

describe('TableOfPosts', () => {
  it('TableOfPosts is visible', () => {
    mount(
      <BrowserRouter>
        <IntlProvider locale={currentLocale} messages={locales[currentLocale]} defaultLocale="cs">
          <Header />
        </IntlProvider>
      </BrowserRouter>
    );

    cy.get('[data-cy=header]').should('be.visible');
  });
});
