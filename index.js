const fs = require("fs");

// Check if appropriate command-line arguments provided
if (process.argv.length !== 4) {
  console.error("Please provide input and output file paths.");
  process.exit(1);
}

// Read input file contents
const inputPath = process.argv[2];
if (!fs.existsSync(inputPath)) {
  console.error(`File not found: ${inputPath}`);
  process.exit(1);
}
const contents = fs.readFileSync(inputPath, "utf-8");

// Split contents into an array of lines
const lines = contents.split("\n");

// Filter out empty lines and comments
const filteredLines = lines.filter(
  (line) => line.trim() !== "" && line.trim()[0] !== "#"
);

// Sort the remaining lines alphabetically
const sortedLines = filteredLines.sort();

// Write the sorted lines to the output file
const outputPath = process.argv[3];
fs.writeFileSync(outputPath, sortedLines.join("\n"), "utf-8");
console.log(`Sorted lines written to ${outputPath}`);
