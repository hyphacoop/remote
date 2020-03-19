tocbot.init({
  // Where to render the table of contents.
  tocSelector: '.js-toc',
  // Where to grab the headings to build the table of contents.
  contentSelector: '.page-content',
  // Which headings to grab inside of the contentSelector element.
  headingSelector: 'h2, h3, h4',
  // For headings inside relative or absolute positioned containers within content.
  positionFixedSelector: '.js-toc',
  hasInnerContainers: true,
  positionFixedClass: 'is-position-fixed',
  fixedSidebarOffset: 70,
});