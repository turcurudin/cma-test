# CMA Developer Code Test

## Running the project

This project has been built and tested in Windows 10, with Python version 2.7.16, Virtualenv version 1.10.1, and Flask version 1.1.1.  It may be necessary to install one or more of these tools if they are missing from your system.

Part 1 of the project can be simply run by opening a command-line in the project directory, and running "python json_generator.py".

Part 2 can be run by first activating the virtual environment with the command "scripts/activate" (on Windows), and then "python app.py".  This starts the Flask development web server that is reachable in your browser at 127.0.0.1:5000.  

If you wish to regenerate the artwork.json file, run the part 1 app, then move the created file from the main directory to static/json/ and overwrite.

## Part 1: Data Transformation

A 5-table SQLite database has been provided. The database contains a table of 100 artworks, a table of creators, a table of departments, and 2 linking tables containing the relationships between artworks, departments, and creators.

Using python, write a script that extracts the data from the tables and writes them to a single array of JSON objects. Each object should contain all the information relevant to an artwork. Write the resulting data to a file.

## Part 2: Front-End Data Presentation

Using the web or mobile framework of your choice, create a simple app that ingests the JSON file from Part 1 and displays all the information in a clear interface. Feel free to be creative and keep in mind that each artwork record will have a lot of data, so displaying all the data, all at once, will not result in a “clear interface”. Also provided is a folder of artwork images that are referenced in the artwork data. The images are named by the accession number of the artwork (a unique identifier assigned to an artwork when it is acquired by a musuem). These images should also be incorporated into the final app.

## Completion and Submission

Completed work should include all code to arrive at the solution, plus all code, assets, and resources required to run the final result of part 2. All completed work should be pushed to a public repo on GitHub.
