export const withTimeout = (promise, fallback, timeoutMs = 1500) => {
  let timerId;
  const timeoutPromise = new Promise((resolve) => {
    timerId = setTimeout(() => {
      resolve(fallback);
    }, timeoutMs);
  });

  return Promise.race([
    promise
      .then((res) => {
        clearTimeout(timerId);
        return res ?? fallback;
      })
      .catch((err) => {
        clearTimeout(timerId);
        console.warn("DB safety query fallback triggered:", err?.message || err);
        return fallback;
      }),
    timeoutPromise
  ]);
};
