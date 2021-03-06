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

export function shuffle(incorrectAnswers: string[], correctAnswer: string): string[] {
  const combinedAnswers = [...incorrectAnswers, correctAnswer];
  for (let i = 0; i < combinedAnswers.length; ++i) {
    const randomIndex = Math.floor(Math.random() * 4);
    const temp = combinedAnswers[i];
    combinedAnswers[i] = combinedAnswers[randomIndex];
    combinedAnswers[randomIndex] = temp;
  }
  return combinedAnswers;
}

export function removeDuplicateQuestions(questions: any): any {
  const set = new Set();
  const uniqueQuestions:any = [];
  questions.forEach((element: any) => (element.key = element.incorrect_answers.join('')));
  questions.forEach((element: any) => set.add(element.key));
  questions.forEach((element: any) => {
    if (set.has(element.key)) {
      uniqueQuestions.push(element);
      set.delete(element.key);
    }
  });
  return uniqueQuestions;
}
