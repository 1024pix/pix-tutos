const fs = require('fs');
const DIST = 'dist';

(async () => {
    await fs.promises.mkdir(DIST);
    await fs.promises.writeFile(`${DIST}/index.html`, 'Hello, Tutos!', 'utf8')
})();
