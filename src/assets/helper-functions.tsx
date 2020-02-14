export function getQuestion(questions: Object[], value: number): Object[] {

  const result = [];
  const seen = [];

  for (let i = 0; i < value; ++i) {
    const randomIndex = Math.floor(Math.random() * questions.length);
    seen.push(randomIndex);
    if (seen.indexOf(randomIndex) === -1) i -= 1;
    else result.push(questions[randomIndex]);
  }
  return result;
}