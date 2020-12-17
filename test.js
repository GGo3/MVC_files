const str = 'image/png';

let result = str.replace(/(\w+)\/(\w+)/, (match, name, format) => `.${format}`);

console.log(result);