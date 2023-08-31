document.addEventListener('DOMContentLoaded', () => {
    const docsTab = document.getElementById('#docsTab');
    const contentContainer = document.getElementById('content-container');
    const searchInput = document.getElementById('search-input');
    // Sample data for documentations
    const documentations = [
      {
        "DocID": "1000",
        "docTitle": "Node JS Documentation",
        "version": "16",
        "codelanguage": "JavaScript",
        "link": "https://nodejs.org/en/blog/release/v16.16.0",
        "user_id": "1",
        "numberofcheckouts":"0",
        "createdAt": "11-11-1994",
        "updatedAt": "11-11-2023"
      },
      {
        "DocID": "2000",
        "docTitle": "CSS 3",
        "version": "3",
        "codelanguage": "CSS",
        "link": "https://devdocs.io/css/",
        "user_id": "1",
        "numberofcheckouts":"0",
        "createdAt": "11-11-1996",
        "updatedAt": "11-11-2023"
      }
      // Add more documentation objects as needed
    ];
    // Compiling the Handlebars template
    const documentationTemplateSource = document.getElementById('Documentation').innerHTML;
    const documentationTemplate = Handlebars.compile(documentationTemplateSource);
    // Function to render the documentation list
    const renderDocumentationList = () => {
      const renderedTemplate = documentationTemplate({ documentations });
      contentContainer.innerHTML = renderedTemplate;
    };
    // Adding event listener to the documentation tab
    docsTab.addEventListener('click', () => {
      renderDocumentationList();
    });
  });







