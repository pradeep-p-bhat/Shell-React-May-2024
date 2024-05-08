(function(){
  // sync
  function addSync(x, y) {
    console.log(`   [@service] processing ${x} and ${y}`);
    const result = x + y;
    console.log(`   [@service] returning result`);
    return result;
  }

  function addSyncClient() {
    console.log(`[@client] invoking the service`);
    const result = addSync(100, 200);
    console.log(`[@client] result = ${result}`);
  }
  window["addSyncClient"] = addSyncClient;

  function divideSync(x, y) {
    console.log(`   [@service] processing ${x} and ${y}`);
    if (y === 0) {
      throw new Error("divisor cannot be 0");
    }
    const result = x / y;
    console.log(`   [@service] returning result`);
    return result;
  }

  function divideSyncClient() {
    console.log(`[@client] invoking the service`);
    try {
      const result = divideSync(100, 0);
      console.log(`[@client] result = ${result}`);
    } catch (error) {
      console.log(`[@client] error :`, error);
    }
  }
  window["divideSyncClient"] = divideSyncClient;

  // async
  function addAsync(x, y, callback) {
    console.log(`   [@service] processing ${x} and ${y}`);
    setTimeout(() => {
      const result = x + y;
      console.log(`   [@service] returning result`);
      callback(result);
    }, 5000);
  }

  function addAsyncClient() {
    console.log(`[@client] invoking the service`);
    addAsync(100, 200, function (result) {
      console.log(`[@client] result = ${result}`);
    });
  }
  window["addAsyncClient"] = addAsyncClient;

  function divideAsync(x, y, callback) {
    console.log(`   [@service] processing ${x} and ${y}`);
    setTimeout(() => {
      if (y === 0) {
        const err = Error("divisor cannot be 0");
        callback(err);
        return;
      }
      const result = x / y;
      console.log(`   [@service] returning result`);
      callback(null, result);
    }, 4000);
  }

  function divideAsyncClient(x, y) {
    console.log(`[@client] invoking the service`);
    divideAsync(x, y, function (err, result) {
      if (err) {
        console.log(`[@client] error :`, err);
        return;
      }
      console.log(`[@client] result = ${result}`);
    });
  }
  window["divideAsyncClient"] = divideAsyncClient;

  // async (Promise)
  function addAsyncPromise(x, y) {
    console.log(`   [@service] processing ${x} and ${y}`);
    const p = new Promise(function(resolveFn, rejectFn){
        setTimeout(() => {
          const result = x + y;
          console.log(`   [@service] returning result`);
          resolveFn(result);
        }, 5000);
    })
    return p;
  }

  

  /* 
  function addAsyncPromiseClient(x,y){
    console.log(`[@client] invoking the service`);
    let p = addAsyncPromise(x,y);
    p.then(function (result) {
      console.log(`[@client] result = ${result}`);
    });
  } 
  */

  async function addAsyncPromiseClient() {
    console.log(`[@client] invoking the service`);
    const result = await addAsyncPromise(100, 200);
    console.log(`[@client] result = ${result}`);
    return result * 2
  }

 
  window["addAsyncPromiseClient"] = addAsyncPromiseClient;

  function divideAsyncPromise(x, y) {
    console.log(`   [@service] processing ${x} and ${y}`);
    const p = new Promise(function (resolveFn, rejectFn) {
      setTimeout(() => {
        if (y === 0){
            const err = new Error('divisor cannot be 0')
            return rejectFn(err)
        }
        const result = x / y;
        console.log(`   [@service] returning result`);
        return resolveFn(result);
      }, 5000);
    });
    return p;
  }

  /* 
  function divideAsyncPromiseClient(x, y) {
    console.log(`[@client] invoking the service`);
    let p = divideAsyncPromise(x, y);
    p.then(function (result) {
      console.log(`[@client] result = ${result}`);
    })
    .catch(function(err){
        console.log(`[@client] error : ${err}`)
    })
  } 
  */

  async function divideAsyncPromiseClient(x, y) {
    console.log(`[@client] invoking the service`);
    /* 
    try {
        let result = await divideAsyncPromise(x, y);
        console.log(`[@client] result = ${result}`);
    } catch(err) {
      console.log(`[@client] error : ${err}`);
    } 
    */
    let result = await divideAsyncPromise(x, y);
    console.log(`[@client] result = ${result}`);
  }

  window["divideAsyncPromiseClient"] = divideAsyncPromiseClient;
})()