# Slackers

Slackers are simple amusing pages to use as placeholders with no effort.

The pages are valid components for [preact](https://github.com/developit/preact).


there is also a [demo](https://mrbar42.github.io/slackers).

#### What is it good for? 

well, you can use them for any purpose really.
I use them as placeholders for dark corners of my SPA where in normal
case you should never get to but its in-fact possible.
For example:

when using react-router or so.. a catch all page ('\*') can take `not-found`.

Or when an evil user navigates manually to authenticated user area only (`unauthorized`)

### Usage

Install using npm

    npm i -S slackers 

Simple render

    import NotFound from 'slackers/not-found';
    // or
    var NotFound = require('slackers/not-found');
    
    render(h(NotFound), target)
    
Change text:

    render(h(NotFound, {
        text: "This page doesn't exist"
      }), target)
    
Change icon:

    import Base from 'slackers/base'
    
    let backgroundImage = '' // path or base64 content (using webpack require for example)
    
    render(h(Base, {
        backgroundImage,
        text: "My custom text"
    }), target)

As standalone script (not recommended)

    <script src="https://unpkg.com/slackers/standalone/slackers_not-found.js"></script>
    <script>
      var NotFound = window['slackers_not-found'];
    </script>


### Example

    import {render, h} from 'preact';
    import NotFound from 'slackers/not-found';
    render(h(NotFound), target)
    
Will render: 

![not-found](https://cloud.githubusercontent.com/assets/12373774/15139233/8931acfc-169d-11e6-9f2c-df302ca214e1.jpg)


### Current list of available slackers

- not-found
- unauthorized
- error
- maintenance
- loader (animated)
- loader-gears (animated)


#### Credits
- SVG loaders taken from [loading.io](http://loading.io/)
