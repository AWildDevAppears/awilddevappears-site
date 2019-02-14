---
title: "AWildDevAppears Stage One"
date: 2017-12-30T17:23:10Z
draft: false

type: "Personal projects"
---

Stage one of the AWildDevAppears site was built using SCSS as a CSS preprocessor, using my own selection of tools (some of which I have built) to aid me in styling up this site, for the pages, I used Pug, formally Jade, as a transpiler, my reasoning behind this is so that I can make it a lot easier to edit and manipulate shared areas of the page, without touching every page file. The idea behind the site build was to allow it to me as easy as possible for me to maintain and completely alter as I see fit.

I inititially built this site using Pug as I wanted to have a templating framework without a back-end so that I could create a static site. I'd already experienced HAML and despised it, so I thought I'd try Pug, at least I'd get to learn something new.

Pug did initially speed up the build process, it meant I could start componentising my site, have my header and footer in one place everything was great, except for the scripts that a rolled for building the site. They were clunky to say the least, and to say the worst they were incomprehensible to anyone outside of the project, they were magical, only I knew what I'd have to do to add a new page, and if I ever forgot...

I hooked these scripts directly into gulp, which didn't really help. Gulp was popular when I built this site but it was also severely overkill for what I wanted to acheive. With the rise of webpack looming it was in need of a refresh.
