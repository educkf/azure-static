module.exports = async function (context, req) {
  context.res = {
    body: {
      text: "Hello! Message from serverless function, fetch just right now"
    }
  };
};
