function markdownToHTML(markdownToConvert) {
    let htmlStringArray = [];
    let paragraphCount = 0;

    markdownToConvert.split(/\r\n|\n|\r/).forEach(markdownLine => {    
        firstCharacter = markdownLine[0];
        if (firstCharacter === '#') {
            const headerNumber = countHeaderNumber(markdownLine);
            if(isValidHeader(headerNumber, markdownLine)) {
                htmlStringArray.push(`<h${headerNumber}>${convertLinkOrImage(markdownLine.slice(headerNumber + 1))}</h${headerNumber}>`);
                paragraphCount = 0;
            } else {
                addConvertedParagraph(htmlStringArray, markdownLine, paragraphCount);
                paragraphCount++;
            }
        } else if(isLineWithoutCharacters(markdownLine)) {
            paragraphCount = 0;
        } else {
            markdownLine = convertLinkOrImage(markdownLine);
            if(beginsWithUnformattedText(markdownLine)) {
                addConvertedParagraph(htmlStringArray, markdownLine, paragraphCount);
                paragraphCount++;
            } else {
                htmlStringArray.push(markdownLine);
                paragraphCount = 0;
            }
        }
    });

    return htmlStringArray.join('\n\n');
}

function countHeaderNumber(markdownLine) {
    let index = 1;
    let isHashCharacter = true;

    while(isHashCharacter) {
        if(markdownLine[index] === '#') {
            index++;
        } else {
            isHashCharacter = false;
        }
    }
    return index;
}

function isValidHeader(headerNumber, markdownLine) {
    return (headerNumber < 7 && markdownLine[headerNumber] === " ");
}

function convertLinkOrImage(markdownLine) {
    return markdownLine
      .replace(/!\[([^\]]*)]\(([^(]+)\)/g, '<img src="$2" alt="$1" />')
      .replace(/[\[]{1}([^\]]+)[\]]{1}[\(]{1}([^\)\"]+)(\"(.+)\")?[\)]{1}/g, '<a href="$2">$1</a>')
}

function addConvertedParagraph(htmlStringArray, markdownLine, paragraphCount) {
    const lastHTMLString = htmlStringArray[htmlStringArray.length - 1];
    if(isPartOfPreviousParagraph(paragraphCount, lastHTMLString)) {
        const combinedParagraph = lastHTMLString.substring(0, lastHTMLString.length - 4);
        htmlStringArray[htmlStringArray.length - 1] = `${combinedParagraph}\n${markdownLine}</p>`;
    } else {
        htmlStringArray.push(`<p>${markdownLine}</p>`);
    }
}

function beginsWithUnformattedText(markdownLine) {
    return (markdownLine.indexOf('<img') !== 0 && markdownLine.indexOf('<a') !== 0);
}

function isPartOfPreviousParagraph(paragraphCount, lastHTMLString) {
    return (lastHTMLString && lastHTMLString.indexOf('<p>') === 0 && paragraphCount > 0);
}

function isLineWithoutCharacters(markdownLine) {
    return markdownLine.length === 0;
}