/// <reference types="cypress" />
import React from 'react';
import { mount } from 'cypress-react-unit-test';
import AppLogo from '../../../src/app/components/AppLogo/index';

describe('AppLogo', () => {
  it('AppLogo is visible', () => {
    mount(<AppLogo />);
    cy.get('img').should('be.visible');
  });
});
