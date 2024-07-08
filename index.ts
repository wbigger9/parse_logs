//logUtils.ts

import fs from 'fs/promises';
import open from 'open';
import { filenames } from './filenames';
async function processFiles() {
  try {
    const errorLogPath = './log/sampleErrors.txt';
    const logFilePath = './log/sampleLog.txt';
    
    // Initial write to the error log file
    const initialErrorMessage = 'Error: Something went wrong\n';
    await fs.writeFile(errorLogPath, initialErrorMessage);
   // console.log('Initial error message written successfully');

    // Read the log file content
    const logContent = await fs.readFile(logFilePath, 'utf8');
    
    let lineNumber = 1;
    const errorLines = logContent
      .split('\n')
      .filter(line => line.includes('[ERROR]'))
      .map(line => `Line ${lineNumber++}: ${line}`)
      .join('\n');
    
    // Append error lines to the error log file
    await fs.appendFile(errorLogPath, errorLines);
    //console.log('Error lines appended successfully');

    // Open the error log file with VS Code
   // await open(errorLogPath, { app: { name: 'code' } });
    //console.log('Error log file opened in VS Code');
  } catch (err) {
    console.error('Error:', err);
  }
}

processFiles();
filenames();

