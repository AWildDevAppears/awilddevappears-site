const pug = require('pug');
const fs = require('fs');


const PROJECTS = [];

const POSTS = [
  'post-one'
]


console.log('-- Building site --\n-- Transpiling pug files --\n');

fs.writeFile('./index.html', pug.compileFile('_src/templates/index.pug', {
  pretty: true
})(), (err) => {
   if(err) {
        return console.error(err);
    }
    console.log('- Homepage created');
});

fs.writeFile('./about.html', pug.compileFile('_src/templates/about.pug', {
  pretty: true
})(), (err) => {
   if(err) {
        return console.error(err);
    }
    console.log('- About page created');
});

fs.writeFile('./projects.html', pug.compileFile('_src/templates/projects.pug', {
  pretty: true
})(), (err) => {
   if(err) {
        return console.error(err);
    }
    console.log('- Project page created');
});

fs.writeFile('./blog.html', pug.compileFile('_src/templates/blog.pug', {
  pretty: true
})(), (err) => {
   if(err) {
        return console.error(err);
    }
    console.log('- Blog listing created');
});


fs.writeFile('./styleguide.html', pug.compileFile('_src/templates/styleguide.pug', {
  pretty: true
})(), (err) => {
   if(err) {
        return console.error(err);
    }
    console.log('- Styleguide created');
});

PROJECTS.forEach( (project) => {
  fs.writeFile('./projects/' + project + '.html', pug.compileFile('_src/templates/projects/' + project + '.pug', {
      pretty: true
    })(), (err) => {
      if(err) {
            return console.error(err);
        }
        console.log('- Project ' + project + ' created');
  });
});

POSTS.forEach( (post) => {
  fs.writeFile('./blog/' + post + '.html', pug.compileFile('_src/templates/blog/' + post + '.pug', {
      pretty: true
    })(), (err) => {
      if(err) {
            return console.error(err);
        }
        console.log('- BLOG ' + post + ' created');
  });
});




