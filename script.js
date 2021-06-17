var fs = require('fs')
const { JSDOM } = require('jsdom');
const { forEach } = require('lodash');

const inputFileName = process.argv[2];
const outputFileName = inputFileName.replace(".html",".css");

const { body } = new JSDOM(fs.readFileSync(inputFileName)).window.document
const usedSelectors = new Set();

/*Returns the most adequate CSS selector to a given node.
This function may be changed to fill your needs.*/
function getNodeSelector(node){
    if(node.tagName === "BODY") return ""; //Don't use body tag

    let selector = "";
    if (node.classList.length){
        forEach(node.classList,(currentClass) => {
            selector += "." + currentClass;
        })
    }
    else if (node.id){
        selector = "#" + root.id;
    }
    else {
        selector = node.tagName.toLowerCase();
    }
    return selector + " "; //Add space between selectors
}

/*Performs a depth-first search in the DOM tree of the passed HTML file,
writing the CSS selectors for each first occurence of each node.*/
function DFS(root, previousSelector){
    let currentSelector = previousSelector + getNodeSelector(root);

    if(!usedSelectors.has(currentSelector) && root.tagName !== "BODY"){
        fs.appendFileSync(outputFileName,currentSelector + "{\n\n}\n\n")
        usedSelectors.add(currentSelector);
    }

    //Recurse for each of the node's children
    for(key in root.children){ 
        const child = root.children[key];
        if(child.tagName) DFS(child,currentSelector);
    }
}

//Runs the script
DFS(body,""); 