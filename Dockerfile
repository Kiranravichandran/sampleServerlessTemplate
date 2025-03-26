FROM public.ecr.aws/lambda/nodejs:14

# Copy package.json and package-lock.json
COPY package*.json ./

# Install dependencies
RUN npm install --production

# Copy source code
COPY src ./src

# Set the handler file as the CMD
CMD [ "src/api/handler.helloWorld" ]
