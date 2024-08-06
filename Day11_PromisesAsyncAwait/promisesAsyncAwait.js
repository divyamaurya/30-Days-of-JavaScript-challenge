// Activity 1: Understanding Promises
// Task 1
let promise = new Promise((resolve) => {
  setTimeout(() => {
    resolve("Message after 2 secs");
  }, 2000);
});
promise.then(() => {
  console.log(promise);
});
// and Task 2
let promiseReject = new Promise((resolve, reject) => {
  setTimeout(() => {
    reject(2 > 60);
  }, 2000);
});
promiseReject.catch((error) => {
  console.log("error occurred:", error);
});
// Activity 2: Chaining Promises
// Task 3 create a sequence of promises
const fetchData = (message, delay) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log(message);
      resolve();
    }, delay);
  });
};
// Creating a sequence of promises
fetchData("step 1", 1000)
  .then(() => fetchData("step 2", 1000))
  .then(() => fetchData("step 3", 1000))
  .then(() => fetchData("step 4", 1000))
  .then(() => {
    console.log("All step completed!");
  })
  .catch((error) => {
    console.log("An error occurred", error);
  });
// Activity 3: Using Async/Await
// Task 4 and Task 5
const waitForPromise = async () => {
  const myPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
      // resolve("Promise resolved"); //Task 4
      reject("rejected!"); //Task 5
    }, 5000);
  });

  try {
    const resolveValue = await myPromise;
    console.log(resolveValue);
  } catch (error) {
    console.error("Error", error);
  }
};

waitForPromise();

// Activity 4: Fetching data from an API
// Task 6
fetch("https://jsonplaceholder.typicode.com/posts/1")
  .then((response) => response.json())
  .then((data) => console.log(data))
  .then((error) => console.error("Error Fetching data", error));

// Task 7
const fetchDataAsyncAwait = async () => {
  try {
    const response = await fetch(
      "https://jsonplaceholder.typicode.com/posts/1"
    );
    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.error("Error", error);
  }
};
fetchDataAsyncAwait();

// Activity 5: Concurrent Promisses
// Task 8: Promise.all
const fetchDataConcurrentPromise = async () => {
  const url = [
    "https://jsonplaceholder.typicode.com/posts/1",
    "https://jsonplaceholder.typicode.com/posts/2",
    "https://jsonplaceholder.typicode.com/posts/3",
  ];
  try {
    const promises = url.map((url) =>
      fetch(url).then((response) => response.json())
    );
    const result = await Promise.all(promises);
    console.log("result", result);
  } catch (error) {
    console.error("Error", error);
  }
};

fetchDataConcurrentPromise();

// Task 9 Promise.race
const fetchDataPromiseRace = async () => {
  const url = [
    "https://jsonplaceholder.typicode.com/posts/1",
    "https://jsonplaceholder.typicode.com/posts/2",
    "https://jsonplaceholder.typicode.com/posts/3",
  ];
  try {
    const promise = url.map((url) =>
      fetch(url).then((response) => response.json())
    );
    const result = await Promise.race(promise);
    console.log("result promise race", result);
  } catch (error) {
    console.error("Error", error);
  }
};

fetchDataPromiseRace();
