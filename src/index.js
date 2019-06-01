function addConvertListener() {
  const convertButton = document.querySelector('.markdown-box').addEventListener('keyup', function (event) {
      event.preventDefault();
      const markdownToConvert = document.querySelector('.markdown-box').value;

      const convertedMarkdown = markdownToHTML(markdownToConvert)
      document.querySelector('.html-box').value = convertedMarkdown;
  });
}

document.addEventListener('DOMContentLoaded', function() {
    addConvertListener()
 });