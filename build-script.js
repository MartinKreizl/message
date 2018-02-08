const fs = require("fs");
fs.writeFileSync("test.txt", "Toto bylo pridano scriptem, ktery spustil travis CI.");
process.exit(1); //for testing purpose
