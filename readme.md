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

For local development, you can use Serverless Offline. The following commands are available:

1. Start the local development server:
```bash
# Basic usage
sls offline --stage dev --host 0.0.0.0

# With custom port
sls offline --stage dev --host 0.0.0.0 --httpPort 3000

# With custom region
sls offline --stage dev --host 0.0.0.0 --region us-east-1
```

The service will be available at `http://localhost:3000`

### Docker Development

1. Build the Docker image:
```bash
npm run build
# or
docker build -t sampleserverlesstemplate .
```

2. Run the Docker container:
```bash
docker run -p 3000:3000 sampleserverlesstemplate
```

This will create and run a Docker container with the image named `sampleserverlesstemplate`.

## Deployment

You can deploy the service to AWS using the following commands:

1. Deploy to default stage (dev) and region (us-east-1):
```bash
npm run deploy
# or
serverless deploy
```

2. Deploy with specific stage and region:
```bash
# Deploy to production
serverless deploy --stage prod

# Deploy to specific region
serverless deploy --region eu-west-1

# Deploy with both stage and region
serverless deploy --stage prod --region eu-west-1
```

3. Deploy a single function:
```bash
serverless deploy function -f helloWorld
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
