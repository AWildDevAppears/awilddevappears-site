const pug = require('pug');
const fs = require('fs');

const PAGES = [
  'index',
  'about',
  'projects',
  'blog',
  'styleguide'
];
const PROJECTS = [];
const POSTS = [
  'post-one'
];

console.log('-- Building site --\n-- Transpiling pug files --\n');

PAGES.forEach((page) => {
  fs.writeFile(`./${page}.html`, pug.compileFile(`_src/templates/${page}.pug`, {
    pretty: true
  })(), (err) => {
     if(err) {
          return console.error(err);
      }
      console.log(`- Page "${page}" created`);
  });
});

PROJECTS.forEach((project) => {
  fs.writeFile(`./projects/${project}.html`, pug.compileFile(`_src/templates/projects/${project}.pug`, {
    pretty: true
  })(), (err) => {
    if(err) {
      return console.error(err);
    }
    console.log(`- Project page "${project}" created`);
  });
});

POSTS.forEach((post) => {
  fs.writeFile(`./blog/${post}.html`, pug.compileFile(`_src/templates/blog/${post}.pug`, {
      pretty: true
    })(), (err) => {
      if(err) {
            return console.error(err);
        }
        console.log(`- Blog post "${post}" created`);
  });
});



