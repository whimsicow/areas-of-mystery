const markdownToConvert = `# Header one

Hello there

How are you?
What's going on?

## Another Header

This is a paragraph [with an inline link](http://google.com). Neat, eh?

## This is a header [with a link](http://yahoo.com)`

const expectedHTML = `<h1>Header one</h1>

<p>Hello there</p>

<p>How are you?
What's going on?</p>

<h2>Another Header</h2>

<p>This is a paragraph <a href="http://google.com">with an inline link</a>. Neat, eh?</p>

<h2>This is a header <a href="http://yahoo.com">with a link</a></h2>`

describe('Markdown to HTML application', () => {
    it('allows the user to convert markdown to HTML', () => {
      cy.visit('/');
      cy.get('.markdown-box').type(markdownToConvert);

      cy.get('.html-box').should('have.value', expectedHTML);
    })
})