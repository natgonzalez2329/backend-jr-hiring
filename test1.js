module.exports = function Test1(server) {
  const data = new Promise((resolve, reject) => {
    server.on("name", (data) => {
      if (data) {
        return resolve(data);
      } else {
        return reject("Can´t return value");
      }
    });
  });
  return data;
};
