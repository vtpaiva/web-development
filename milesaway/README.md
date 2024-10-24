
# Running the MilesAway Project

## Install the Modules

In the terminal, inside the project directory, run the following command:
```
npm install
```

## Run the Project

Finally, in a different terminal, still inside the same folder, run the following command:
```
npm start
```

### Detailed React Execution Process

1. **Clone the Repository** (if applicable):  
   If the project is hosted on a platform like GitHub, you can start by cloning the repository:
   ```
   git clone https://github.com/your-repo/milesaway.git
   ```
   Navigate to the project directory:
   ```
   cd milesaway
   ```

2. **Install Dependencies**:  
   As stated before, make sure to install all necessary Node.js dependencies by running:
   ```
   npm install
   ```
   This command looks at the `package.json` file and installs all the required packages to run the project.

3. **Development Server**:  
   After the dependencies have been installed, start the development server with the following command:
   ```
   npm start
   ```
   This will launch the React development server, and the project should be running locally at `http://localhost:3000`. By default, it opens in the browser automatically.

4. **Testing the Application**:  
   If there are any tests set up, you can run them using the following command:
   ```
   npm test
   ```
   This will run any pre-configured unit tests, typically using Jest, to ensure the application components behave as expected.

5. **Build the Application**:  
   When you're ready to deploy or package the project, run the following command to create an optimized build of the app:
   ```
   npm run build
   ```
   The build process will create a `build/` directory with the production-ready files, which can be hosted on any static server.