export class HelloWorld {
  /**
   * Function to handle different path parameters
   */
  static async welcomeFunction(event: any) {
    return new Promise((resolve, reject) => {
      try {
        const pathParam = event.pathParameters?.message || 'default';
        let response;

        switch (pathParam) {
          case 'hello1':
            response = {
              statusCode: 200,
              body: JSON.stringify({ "message": "Hello World 1" })
            };
            break;
          case 'hello2':
            response = {
              statusCode: 200,
              body: JSON.stringify({ "message": "Hello World 2" })
            };
            break;
          default:
            response = {
              statusCode: 400,
              body: JSON.stringify({ "error": "Invalid path parameter. Use 'hello1' or 'hello2'" })
            };
        }

        resolve(response);
      } catch (error) {
        reject(error);
      }
    });
  }
}

export const helloWorld = HelloWorld.welcomeFunction;
