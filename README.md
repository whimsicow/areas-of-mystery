# Markdown to HTML

Simple app to convert markdown to HTML.

## Cases
App currently handles the following markdown cases:

```
| Markdown                               | HTML                                              |
| -------------------------------------- | ------------------------------------------------- |
| `# Heading 1`                          | `<h1>Heading 1</h1>`                              | 
| `## Heading 2`                         | `<h2>Heading 2</h2>`                              | 
| `### Heading 3`                        | `<h3>Heading 3</h3>`                              | 
| `#### Heading 4`                       | `<h4>Heading 4</h4>`                              | 
| `##### Heading 5`                      | `<h5>Heading 2</h5>`                              | 
| `###### Heading 6`                     | `<h6>Heading 6</h6>`                              | 
| `Paragraph`                            | `<p>Paragraph</p>`                                | 
| `[Link text](https://www.example.com)` | `<a href="https://www.example.com">Link text</a>` |
| `![a mountain](mountain.jpg)`          | `<img alt="a mountain" src="mountain.jpg">`       |  
| `Blank line`                           | `Ignored`                                         | 
```
## Run the App

Inside the project directory install all project dependencies by running:
```
npm install
```

To run the app on localhost:9898:
```
npm run start
```

To run all e2e tests, first run the app via the above command, then:
```
npm run e2e
```

You may need to ``npm install`` cypress in order to run the e2e tests.

To run all unit tests:
```
npm run test
```