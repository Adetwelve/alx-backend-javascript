export default function taskBlock(trueOrFalse) {
  // set scope of task
  let task = false;
  let task2 = true;

  if (trueOrFalse) {
  // set block scope 
    const task = true;
    const task2 = false;
  }

  return [task, task2];
}
