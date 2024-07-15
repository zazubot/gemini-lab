import { env } from "utils/config";
async function main() {
  try {
    console.log(`Typescript gemini-pro Lib : API KEY ${env.API_KEY}`);
  } catch (e) {
    console.error(e);
  }
}
main();
