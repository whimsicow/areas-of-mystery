const markdownToTest = {
  "# Heading 1": "<h1>Heading 1</h1>",
  "## Heading 2": "<h2>Heading 2</h2>",
  "### Heading 3": "<h3>Heading 3</h3>",
  "#### Heading 4": "<h4>Heading 4</h4>",
  "##### Heading 5": "<h5>Heading 5</h5>",
  "###### Heading 6": "<h6>Heading 6</h6>",
  "Classic paragraph": "<p>Classic paragraph</p>",
  "![a mountain](mountain.jpg)": '<img src="mountain.jpg" alt="a mountain" />',
  "[link](https://www.google.com)": '<a href="https://www.google.com">link</a>',
  "## Header [with a link](http://yahoo.com)": '<h2>Header <a href="http://yahoo.com">with a link</a></h2>',
  "paragraph ![with an image](image.jpg)": '<p>paragraph <img src="image.jpg" alt="with an image" /></p>'
}

describe('markdownToHTML', () => {
  Object.keys(markdownToTest).forEach(markdownLine => {
    const expectedHTML = markdownToTest[markdownLine];
    it(`should convert ${markdownLine} to ${expectedHTML}`, () => {
      expect(markdownToHTML(markdownLine)).toEqual(expectedHTML);
    })
  })

  it(`should convert a markdown line beginning with more than 6 #'s to a paragraph`, () => {
    expect(markdownToHTML("####### too many")).toEqual("<p>####### too many</p>");
  })

  it(`should convert a markdown line without a space after the beginning #'s to a paragraph`, () => {
    expect(markdownToHTML("##no space")).toEqual("<p>##no space</p>");
  })

  it(`should not add new paragraph tag to unformatted text if there is only one space between them`, () => {
    expect(markdownToHTML("no space \none line")).toEqual(`<p>no space \none line</p>`);
  })
})