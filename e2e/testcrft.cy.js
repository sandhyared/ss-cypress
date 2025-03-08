// landingPage.js (Page Object Model)
class LandingPage {
    get emailInput() {
        return cy.get('input#mat-input-0');
    }

    typeEmail(email) {
        this.emailInput.clear().type(email);
    }

    assertEmailInputPlaceholder(expectedPlaceholder) {
        this.emailInput.should('have.attr', 'data-placeholder', expectedPlaceholder);
    }

    assertEmailInputIsVisible() {
        this.emailInput.should('be.visible');
    }

    assertEmailInputIsEnabled() {
        this.emailInput.should('be.enabled');
    }

    assertEmailInputIsEmpty() {
        this.emailInput.should('have.value', '');
    }
}

// landingPage.spec.js (Test Cases)
describe('Landing Page Tests', () => {
    const landingPage = new LandingPage();
    
    beforeEach(() => {
        cy.visit('http://169.61.105.110/medicareAdvantage_sandbox/landing-page', { timeout: 30000 });
        cy.wait(2000); // Optional: Wait for elements to load
    });
    

    it('should verify the email input placeholder', () => {
        landingPage.assertEmailInputPlaceholder('Filter by Email or Recommendation Name');
    });

    it('should check if the email input is visible', () => {
        landingPage.assertEmailInputIsVisible();
    });

    it('should check if the email input is enabled', () => {
        landingPage.assertEmailInputIsEnabled();
    });

    it('should type an email into the email input', () => {
        const email = 'test@example.com';
        landingPage.typeEmail(email);
        landingPage.emailInput.should('have.value', email);
    });

    it('should clear the email input', () => {
        const email = 'niv';
        landingPage.typeEmail(niv);
        landingPage.typeEmail('');
        landingPage.assertEmailInputIsEmpty();
    });
});