class NewReleasesPage {
    get newReleasesLink() {
        return cy.get('a[href="/gp/new-releases/?ref_=nav_em_cs_newreleases_0_1_1_3"]');
    }

    visit() {
        cy.visit('https://www.amazon.com/gp/new-releases/?ref_=nav_em_cs_newreleases_0_1_1_3', { failOnStatusCode: false });
    }

    clickNewReleases() {
        this.newReleasesLink.should('exist').click();
        cy.wait(5000);
    }

    verifyNewReleasesPage() {
        cy.url().should('include', '/gp/new-releases/');
        cy.get('h1', { timeout: 100000 }).should('contain', 'New Releases');
    }
}

// newReleases.spec.js
Cypress.on('uncaught:exception', (err, runnable) => {
    return false; // Prevent Cypress from failing on Amazon's JS errors
});

describe('New Releases Page Tests', () => {
    const newReleasesPage = new NewReleasesPage();

    beforeEach(() => {
        newReleasesPage.visit();
        cy.get('body', { timeout: 100000 }).should('be.visible'); // Ensure page loads
    });

    it('should navigate to New Releases page', () => {
        newReleasesPage.clickNewReleases();
        newReleasesPage.verifyNewReleasesPage();
    });

    it('should have New Releases link visible', () => {
        newReleasesPage.newReleasesLink.should('be.visible');
        cy.wait(5000);
    });

    it('should have correct href for New Releases link', () => {
        newReleasesPage.newReleasesLink.should('have.attr', 'href', '/gp/new-releases/?ref_=nav_em_cs_newreleases_0_1_1_3');
        cy.wait(5000);
    });
});
