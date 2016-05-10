'use strict';

const TEMPLATE_FILE = 'src/slacker.js.template';
const SLACKERS_FOLDER = 'slackers';
const OUTPUT_FOLDER = 'build';

const fs = require('fs');

try {
  fs.mkdirSync(OUTPUT_FOLDER);
} catch (e) {
}



let template = fs.readFileSync(TEMPLATE_FILE, 'utf8');

fs.readdirSync(SLACKERS_FOLDER)
  .filter(x => /\.svg$/.test(x))
  .forEach(icon => {
    let imageData = fs.readFileSync(`${SLACKERS_FOLDER}/${icon}`, 'binary');
    var base64Image = new Buffer(imageData, 'binary').toString('base64');
    let dataUrlPrefix = "data:image/svg+xml;base64,";

    let iconName = icon.replace(/^-|\.svg$/g, '');
    if (iconName == 'base') throw new Error("base is a reserved name and cannot be used as slacker name");

    let capitalName;
    // icons starting with - will have empty text
    if (icon.indexOf('-') !== 0) {
      capitalName = fromCamelCase(iconName)
    }

    let iconFile = template;
    iconFile = iconFile.replace('%TEXT%', capitalName || '');
    iconFile = iconFile.replace('%IMAGE_BASE64%', dataUrlPrefix + base64Image);

    fs.writeFileSync(`${OUTPUT_FOLDER}/${iconName}.js`, iconFile);
  });


function fromCamelCase(name) {
  return name.split('-')
    .map(x => x.replace(/^\w/, match => match.toUpperCase()))
    .join(' ');
}
