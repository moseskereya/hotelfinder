
![Screenshot (625)](https://github.com/moseskereya/hotelfinder/assets/49228545/9e08757e-7e94-40d0-b0e2-122cdc79b3ca)

Hotel Booking App Documentation
Overview
The Hotel Booking App is a web application that allows users to search and book hotels in a specific location. The app utilizes the React framework and integrates with Google Maps to provide an interactive map interface for users to explore available hotels.

Prerequisites
Before running the app, make sure you have the following set up:

Node.js installed on your machine
Google Maps API key
Installation
Follow these steps to set up and run the Hotel Booking App:

Clone the repository:

bash
Copy code
git clone <repository-url>
Navigate to the project directory:

bash
Copy code
cd hotel-booking-app
Install dependencies:

Copy code
npm install
Set up Google Maps API key:

Create a new project in the Google Cloud Console.
Enable the "Maps JavaScript API" for your project.
Obtain the API key.
Configure API key:

Open the src/config.js file.
Replace 'YOUR_API_KEY' with your Google Maps API key.
Start the development server:

sql
Copy code
npm start
Open the app in your browser:

arduino
Copy code
http://localhost:3000
Usage
Once the app is running, users can perform the following actions:

Search for a location:

Enter the desired location in the search bar.
Press the Enter key or click the search button to search for hotels in the specified location.
Explore hotels on the map:

The map displays markers for available hotels in the searched location.
Click on a marker to view a brief overview of the hotel.
To view detailed information and make a booking, click on the "View Details" button or the hotel name.
View hotel details:

The app will open a modal dialog showing the hotel's detailed information.
The modal includes the hotel name, description, amenities, and an image gallery.
Users can book the hotel directly through the provided booking link.
Navigate the map:

Use the zoom in/out controls to adjust the map's zoom level.
Click and drag to pan the map and explore different areas.
The "Take me back home" button resets the map's center and zoom level to the initial location.
Customization
The Hotel Booking App is designed to be customizable. You can modify various aspects of the app to fit your specific requirements:

Styling:

Customize the CSS styles in the src/App.css file to change the appearance of the app components.
Adjust the styles of markers, modals, search bar, and other UI elements to match your design preferences.
Data:

Modify the hotel data source in the src/data/hotels.js file.
Add, remove, or update hotel entries according to your data requirements.
Ensure that each hotel entry includes the necessary details such as name, description, coordinates, and image URLs.
Troubleshooting
If you encounter any issues while running the app, consider the following steps:

Verify that you have provided the correct Google Maps API key in the src/config.js file.
Check the browser console for any error messages or warnings.
Ensure that you have a stable internet connection.
Clear your browser cache and restart the app.
If the issue persists, feel free to reach out for further assistance.

License
This project is released under the MIT License.





