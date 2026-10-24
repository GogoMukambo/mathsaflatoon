const { spawn } = require("child_process");

function run(cmd, args) {
  const child = spawn(cmd, args, { stdio: "inherit", shell: true });
  child.on("exit", (code) => {
    if (code && code !== 0) process.exit(code);
  });
  return child;
}

run("python", ["paper-api.py"]);
run("node", ["server/study-server.js"]);
