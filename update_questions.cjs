const fs = require('fs');

const html = fs.readFileSync('C:/Users/eslam/Desktop/ztyx_web/index.html', 'utf8');
const match = html.match(/const QUESTIONS = (\[[\s\S]*?\n\]);/);
let QUESTIONS = eval(match[1]);

// Filter out and / or
let filtered = [];
QUESTIONS.forEach(q => {
  const qStr = (q.question || q.text || '');
  const cStr = (q.code || '');
  const fullText = (qStr + ' ' + cStr).toLowerCase();
  
  if (fullText.match(/\b(and|or)\b/)) {
    // skip
  } else {
    filtered.push(q);
  }
});

QUESTIONS = filtered;

// Categorize
QUESTIONS.forEach(q => {
  const qStr = (q.question || q.text || '');
  const cStr = (q.code || '');
  const fullText = (qStr + ' ' + cStr).toLowerCase();
  
  if (fullText.match(/if|elif|else/)) q.category = 'ifelse';
  else if (fullText.match(/<|>|<=|>=|!=|==/)) q.category = 'operators_logic';
  else if (fullText.match(/\+|-|\*|\/|%|\*\*/)) q.category = 'operators_math';
  else if (fullText.match(/int|float|str|bool|type\(|عدد صحيح|نص/)) q.category = 'datatypes';
  else if (fullText.match(/input|print|إدخال|طباعة/)) q.category = 'io';
  else if (fullText.match(/variable|متغير/)) q.category = 'variables';
  else if (fullText.match(/flowchart|خوارزمية/)) q.category = 'flowchart';
  else if (fullText.match(/cpu|ram|rom|hdd|ssd|جهاز|إخراج/)) q.category = 'hardware';
  else q.category = 'intro';
});

console.log('Filtered Count:', QUESTIONS.length);
const counts = {};
QUESTIONS.forEach(q => {
  counts[q.category] = (counts[q.category] || 0) + 1;
});
console.log('Categories:', counts);

// Replace QUESTIONS array in index.html
let newQuestionsStr = 'const QUESTIONS = [\n' + QUESTIONS.map(q => {
  let item = '  {\n';
  if (q.id) item += `    id: ${q.id},\n`;
  if (q.level) item += `    level: ${q.level},\n`;
  if (q.question) item += `    question: \`${q.question.replace(/`/g, '\\`')}\`,\n`;
  if (q.text) item += `    text: \`${q.text.replace(/`/g, '\\`')}\`,\n`;
  if (q.isCode) item += `    isCode: true,\n`;
  if (q.code) item += `    code: \`${q.code.replace(/`/g, '\\`')}\`,\n`;
  item += `    options: ${JSON.stringify(q.options)},\n`;
  item += `    answer: ${q.answer !== undefined ? q.answer : q.correct},\n`;
  item += `    category: '${q.category}'\n`;
  item += '  }';
  return item;
}).join(',\n') + '\n];';

const newHtml = html.replace(/const QUESTIONS = \[[\s\S]*?\n\];/, newQuestionsStr);
fs.writeFileSync('C:/Users/eslam/Desktop/ztyx_web/index.html', newHtml);
console.log('Done rewriting QUESTIONS in index.html');
