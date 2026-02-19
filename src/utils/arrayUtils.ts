/**
 * Function that shuffles an array according to the Fisher-Yates (Durstenfield)
 * Algorithm
 * @param arr An array of strings
 * @returns shuffled array
 */
export function shuffleArray(arr: Array<string>): Array<string> {
  for (let i = arr.length - 1; i > 0; i--) {
    // pick a random index from 0 to i
    const j = Math.floor(Math.random() * (i + 1));

    // swap elements at i and j
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
}
