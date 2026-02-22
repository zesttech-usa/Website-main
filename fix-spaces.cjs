const fs = require('fs');
const path = require('path');

function walk(dir) {
    let results = [];
    const list = fs.readdirSync(dir);
    list.forEach(file => {
        file = path.join(dir, file);
        const stat = fs.statSync(file);
        if (stat && stat.isDirectory()) {
            results = results.concat(walk(file));
        } else if (file.endsWith('.jsx') || file.endsWith('.js')) {
            results.push(file);
        }
    });
    return results;
}

const files = walk('D:/zilaxis/Zest technologies/Website/src');
files.forEach(file => {
    let content = fs.readFileSync(file, 'utf8');
    const newContent = content.replace(/font-semibold([a-zA-Z])/g, 'font-semibold $1');
    if (newContent !== content) {
        fs.writeFileSync(file, newContent, 'utf8');
        console.log('Fixed ' + file);
    }
});
