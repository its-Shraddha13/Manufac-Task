# Indian Agriculture Analytics
This project is a data analysis task for Manufac Analytics Private Limited. The goal is to analyze the Indian Agriculture dataset and display the results as tables using React and Mantine v7.

# Project Setup and Running Instructions
 Prerequisites : Ensure you have the following installed on your system:
 1) Node.js (>= 14.x)
 2) Yarn (>= 1.22.x)

# Instructions
1) Clone the repository:
   git clone https://github.com/yourusername/indian-agriculture-analytics.git
   cd indian-agriculture-analytics
   
2) Install the project dependencies using Yarn:
   yarn install
  
# Running the Project
  To start the development server and view the application in your browser, run:
  yarn start

  This command will start the application and automatically open your default web browser with the application running on http://localhost:3000.
  
# Project Structure
1)   public/: Contains public assets such as the dataset (agriculturalDataset.csv).
2)   src/: Contains the source code for the React application.
    i) components/: Contains React components used in the project.
    ii) App.js: Main component rendering the tables.
    iii) index.js: Entry point of the application.


# Analysis and Tables
The application displays two tables based on the provided dataset:
1) Yearly Crop Production Table: Displays the crop with maximum and minimum production for each year from 1950 to 2020.
2) Crop Average Yield and Cultivation Area Table: Displays the average yield and average cultivation area for each crop between 1950 and 2020. Average values are rounded off 
   to 3 decimal places.

# Data Handling
1) All missing cell values in the dataset are treated as 0.
2) The calculations and aggregations are performed within the application, ensuring efficient and accurate data processing.

# Screenshots
1) Yearly Crop Production Table
2) Crop Average Yield and Cultivation Area Table

# Additional Information
1) No external libraries (such as Bootstrap, jQuery, Lodash, etc.) are used in this project.
2) The project is built using React via CRA and Mantine v7 for table components.
3) All unused code and libraries from the CRA template have been removed to reduce clutter.
