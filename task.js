import cron from 'node-cron';
import { simpleGit, CleanOptions } from 'simple-git';

const git = simpleGit().clean(CleanOptions.FORCE);

  console.log('task puller!! started');
cron.schedule('*/1 * * * *', async () => {
  console.log('running a task every minute');
  const res = await git.pull();
  console.log(res);
})
