var exec = require("child_process").exec;
var spawn = require("child_process").spawn;

function cpe(process, options) {
  exec(process, options, function(err, stdout) {
    if (err) {
      throw err;
    }
    console.log("Process Complete:");
    console.log(stdout);
  });
}

function cps(process, options) {
  spawn(process, options);
  cp.stdout.on("data", function(data) {
    console.log(`OUTPUT: ${data.toString()}`);
  });
  cp.on("close", function() {
    console.log("-----");
    process.exit();
  });
}

module.export = {
  cpe: cpe,
  cps: cps
};
