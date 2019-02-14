---
title: "Render 2018"
date: 2018-12-30T18:21:22Z
draft: false

live: "https://2018.render-conf.com/"

type: "White October"
---

Every year, White October Events have several amazing conferences, from The Lead Developer, to Angular Connect and things like Render, and every year a new site is built for each conference from an internal toolkit we use, which sets up all of the right content into a CMS and loads in some basic styling so we mostly just have to add the color scheme to the site. The only other thing we always have to do is create the hero for the site. We were given a budget and a set of days to fill to make the it as good as we could.

Render was one of the more fun heros we got to build, I was presented with a design for this site in the form of a flat sketch file and a dream, a dream in which all of the little pieces of confetti were floating around the screen and the big letter chunks would move with the mouse. So we started to break down the design, keeping in mind that the budget was tight. We considered thing like: should confetti collide? what happens on smaller screens? How deep could we get into the animations in the budget? 

We initially considered that if confetti was going to collide, we would need a lightweight physics engine to determine how they collide, where they bounce to if they bounce and any collisions with the larger shapes, but we couldn't really justify all of that within the budget. We settled on having the confetti spawn in, float to a location and then fade out, which initally put a heavy load on the machine as we were ccreating and destroying the elements and the garbage collection couldn't keep up, so in the end we forced a limit on the amount of confetti flakes there were on the screen and then faded them in, moved them to a different location then faded them out again. Once our flake was completely hidden we could sneakily move our confetti flake to a random location and then fade it in and start again.

We them implemented the floating large chunks of letter on the sides, and noticed that we had almost all of the parts required to build an "R", that's when it hit us, we could group the elements together wehn we hovered over the buy button in the middle of the hero. We implemented this and demoed it to the office, everyone seemed to like our new feature and we managed to keep it within budget at the same time.
