require('./helper')

const fs = require('fs').promise
const path = require('path')

async function ls() {
  // Use 'await' inside 'async function's
  console.log('Executing ls function...')
  const promise = fs.readdir(__dirname)
  const fileNames = await promise
  for (const item of fileNames) {
    const filePath = path.join(__dirname, item)
    fs.stat(filePath, function (error, stats) {
      if (error) {
        throw error
      }
      if (stats.isDirectory()) {
        for (const item of stats) {

        }
      }
    });
  }
}

ls()

