import fs from 'fs';
import open, { apps } from 'open';


//write to a file all error messages
let initial: string = 'Error: Something went wrong\n';

fs.writeFile('./log/sampleErrors.txt',  initial, (err) => {
    if (err) {
      console.error('Error writing file:', err);
      return;
    }
    console.log('File written successfully');
});
// Read the content of a file
 fs.readFile('./log/sampleLog.txt', 'utf8', (err, data) => {
  if (err) {
    console.error('Error reading file:', err);
    return;
  }
 data.split('\n').forEach((line: string) => {

    if (line.includes('[ERROR]')) {
      fs.appendFile('./log/sampleErrors.txt', line + '\n', (err) => {
        if (err) {
          console.error('Error writing file:', err);
          return;
        }
        
      });
      console.log('File written successfully');
    }
});

});

