import { reverseSentence } from './reverse';

const args: string[] = process.argv.slice(2); 
const sentence: string = args[0]; 

const reverseWordOrder: boolean = args.includes('--word');
const reverseLetterOrder: boolean = args.includes('--letter');

const result: string = reverseSentence(sentence, reverseWordOrder, reverseLetterOrder);

console.log(result);
