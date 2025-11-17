const node_fs=require('fs');

node_fs.writeFileSync('newfile.txt','hello world');

const data=node_fs.readFileSync('newfile.txt', 'utf-8')
console.log(data)