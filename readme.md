# AWS NodeJS TypeScript Serverless Template

A serverless template for AWS Lambda functions using TypeScript, featuring local development capabilities with Serverless Offline and Docker support. This template demonstrates path parameter routing in a single Lambda function.

## Prerequisites

- Node.js >= 14.15.0
- npm or yarn
- AWS CLI (for deployment)
- Docker (optional, for containerized development)

## Project Setup

1. Clone the repository
2. Install dependencies:
```bash
npm install
```

## Development

### Local Development

Run the service locally using Serverless Offline:
```bash
sls offline --stage dev --host 0.0.0.0
```

The service will be available at `http://localhost:3000`

### Docker Development

Build the Docker image:
```bash
npm run build
```

This will create a Docker image named `sampleserverlesstemplate`.

## Deployment

Deploy to AWS:
```bash
npm run deploy
```
or
```bash
serverless deploy
```

## API Endpoints

### Hello World with Path Parameters

This single Lambda function handles two different responses based on the path parameter.

- **Base URL**: `/dev/hello/{message}`
- **Method**: GET
- **Path Parameters**: 
  - `message`: Required (either 'hello1' or 'hello2')

#### Example Requests

1. For Hello World 1:
```bash
curl --location --request GET 'http://localhost:3000/dev/hello/hello1' \
--header 'content-type: application/json' \
--header 'accept: application/json'
```
Response:
```json
{
  "message": "Hello World 1"
}
```

2. For Hello World 2:
```bash
curl --location --request GET 'http://localhost:3000/dev/hello/hello2' \
--header 'content-type: application/json' \
--header 'accept: application/json'
```
Response:
```json
{
  "message": "Hello World 2"
}
```

Invalid path parameters will return a 400 error with an appropriate error message.

## Project Structure

- `src/api/` - Contains API handlers and response utilities
  - `handler.ts` - Contains the Lambda function with path parameter routing
- `serverless.yml` - Serverless Framework service configuration
- `webpack.config.js` - Webpack configuration for building the project
- `Dockerfile` - Docker configuration for containerized development

## Dependencies

### Main Dependencies
- @middy/core: ^1.5.2
- @middy/http-json-body-parser: ^1.5.2

### Development Dependencies
- @serverless/typescript: ^2.23.0
- @types/aws-lambda: ^8.10.71
- @types/node: ^14.14.25
- serverless: ^2.23.0
- serverless-offline: ^8.2.0
- typescript: ^4.1.3
- ts-node: ^9.1.1
- tsconfig-paths: ^3.9.0

## License

MIT License
