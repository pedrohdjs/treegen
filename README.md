# Treegen

Treegen is a simple and easily modifiable script to generate a CSS selector tree from an HTML file.

## Building and installing (Linux)

In order to build the script yourself, you need to have [Node.js and NPM](https://nodejs.org/en/download/), as well as the [pkg NPM Module](https://github.com/vercel/pkg) installed. This has been tested in Ubuntu 20.04.2 LTS.

1. Clone the repository
   ```
    git clone https://github.com/pedrohdjs/treegen.git
   ```
2. Go to the repository folder
   ```
    cd treegen
   ```
3. Install the required npm modules
    ```
    npm install
    ``` 
4. Build with pkg according to their instructions
   ```
   pkg .
   ```
5. Copy the output file to your bin folder (You might need administrator privileges to do this)
   ```
   sudo cp output-file /bin/treegen
   ```

## Execution

   After you installed the script according to the instructions passed, you may use it by simply running the command:

   ```
   treegen target-file.html
   ```

   By doing so, treegen will create a file with the same name as your HTML file but with a CSS extension. If the file already exists, the content will be appended to it, not damaging any saved content on the file.

## Modifying

   Simply modify script.js according to your needs.

## Notes

   This is a work in progress. New issues and pull requests are welcome and encouraged!
