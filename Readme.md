# Club Auto - TailwindCSS Project

## Overview

This project is a website for "Club Auto" built using HTML, JavaScript, and TailwindCSS. The website includes multiple pages such as Accueil, Contact, and Vehicule Details. The project is structured to use reusable components for the header and footer.

## Project Structure


projet-tailwincss/ 
├── Accueil.html
 ├── asset/ 
 │ ├── vehicule1.jpg 
 │ ├── vehicule2.jpg 
 │ ├── vehicule3.jpg 
 │ ├── clients.jpg 
 │ ├── entretien.jpg 
 │ ├── icon1.png 
 │ ├── icon2.png 
 │ ├── icon3.png 
 │ ├── icon4.png 
 │ ├── icone-adresse.png 
 │ └── icon-telephone.png 
 ├── Contact.html 
 ├── Footer.html 
 ├── Header.html 
 ├── package.json 
 ├── src/ 
 │ └── js/ 
 │ └── script.js 
 ├── tailwind.config.js 
 └── vehicule-details.html

### Files and Directories

- **Accueil.html**: The homepage of the website.
- **Contact.html**: The contact page with a form for users to reach out.
- **vehicule-details.html**: A detailed page for a specific vehicle.
- **Header.html**: The header component used across multiple pages.
- **Footer.html**: The footer component used across multiple pages.
- **src/js/script.js**: JavaScript file to dynamically load the header and footer components.
- **tailwind.config.js**: Configuration file for TailwindCSS.
- **package.json**: Contains the project dependencies.

### Assets

The `asset` directory contains images and icons used throughout the website.

## Setup

1. **Install TailwindCSS**:
   Make sure you have Node.js installed. Navigate to the `projet-tailwincss` directory and run:
   ```sh
   npm install

2. **Run the Project**: 

Open the Accueil.html, Contact.html, or vehicule-details.html files in a web browser to view the website.

## Usage

The header and footer are dynamically loaded using JavaScript to ensure consistency across all pages.
TailwindCSS is used for styling the website, making it responsive and easy to maintain.

## Customization

TailwindCSS Configuration: You can customize the TailwindCSS configuration in the tailwind.config.js file to change the theme, colors, and fonts.

JavaScript: The script.js file in the src/js directory handles the dynamic loading of the header and footer. You can modify this file to add more dynamic features.

