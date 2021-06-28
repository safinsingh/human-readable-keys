import { readFileSync } from "fs";
import { join } from "path";

const listDir = join(__dirname, "..", "wordlists");

// Utilities
const read = (name: string) => readFileSync(join(listDir, name + ".txt"), "utf8").split("\n");
const rand = (max: number) => Math.floor(Math.random() * max);
const pick = (arr: string[]) => arr[rand(arr.length)];
const dash = (...args: unknown[]) => args.join("-");
const pad = (n: number, digits: number) => n.toString().padStart(digits, "0");
const digits = (n: number) => n.toString().length;

// Wordlists
const adjectives = read("adjectives");
const animals = read("animals");

/**
 * Generate a random human-readable ID.
 *
 * ```typescript
 * import hrid from "human-readable-keys";
 * const id = hrid();
 * ```
 *
 * @param numberMax Maximum value for the numeric part of the ID. Defaults to 9999.
 *                  Note that values are automatically padded to the number of digits in the maximum value.
 * @returns generated ID as a `string`
 */
const hrid = (numberMax: number = 9999) =>
	dash(pick(adjectives), pick(animals), pad(rand(numberMax), digits(numberMax)));
export default hrid;
