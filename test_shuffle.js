const fs = require('fs');
const data = JSON.parse(fs.readFileSync('questions.json', 'utf8'));
let allData = [];
data.quizzes.forEach(q => allData.push(...q.questions));
console.log("total", allData.length);

const shuffled = [...allData];
for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
}
const questions = shuffled.slice(0, 10);
console.log("shuffled IDs:", questions.map(q => q.question_id));
