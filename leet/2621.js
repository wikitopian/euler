/**
 * @param {number} millis
 */
const sleep = async (millis) => {
  for(const stop = Date.now() + millis; Date.now() < stop;);
};


console.log(await sleep(5000));

// const t = Date.now();
// sleep(100).then(() => console.log(Date.now() - t)); // 100