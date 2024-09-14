import cron from 'node-cron';


function doGitPull() {
    // CREATE GIT PULL CHILD PROCESS
    const pull = cp.spawn('git',['pull'],{cwd:gitDir}) 
    // HANDLE CHILD PROCESS' OUTPUT
    pull.stdout.on('data', d => console.log(d.toString()))
    // HANDLE CHILD PROCESS' ERROR OUTPUT
    pull.stderr.on('data', e => console.error(e.toString()))
    // HANDLE CHILD PROCESS ERRORS
    pull.on('error', e=> res.sendStatus(500))
    // HANDLE PROCESS EXIT CODES. IF 0, SUCCESSFULLY CONTINUE
    pull.on('exit',code => {
      if (code == 0) next()
      else res.sendStatus(500)
    })
  }
  console.log('task puller!! started');
cron.schedule('*/1 * * * *', () => {
  console.log('running a task every minute');
  doGitPull();
});