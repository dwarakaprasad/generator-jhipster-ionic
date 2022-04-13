import { Page } from './app.po';

export class LoginPage extends Page {
  getHeader() {
    return cy.get('ion-title');
  }

  setUserName(username) {
    cy.get('input[name="username"]').type(username);
  }

  getUserName() {
    return cy.get('input[name="username"]');
  }

  clearUserName() {
    cy.get('input[name="username"]').clear();
  }

  setPassword(password) {
    cy.get('input[name="password"]').type(password);
  }

  getPassword() {
    return cy.get('input[name="password"]');
  }

  clearPassword() {
    cy.get('input[name="password"]').clear();
  }

  login(username: string, password: string) {
    cy.get('#signIn').click();
    this.setUserName(username);
    this.setPassword(password);
    cy.get('input[type=submit]').click();
  }

  logout() {
    cy.get('#logout').click();
  }
}
