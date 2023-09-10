# Dashboard Challenge ⭐️

## Overview ✨

This project is a solution to the Dashboard Challenge, which aims to create a web application to display weather data in various chart formats. The data is retrieved from a provided API and presented in the form of column, line, and area charts. The application is built using Angular and TypeScript.

## Table of Contents 📒

- [Dashboard Challenge ⭐️](#dashboard-challenge-️)
  - [Overview ✨](#overview-)
  - [Table of Contents 📒](#table-of-contents-)
  - [Requirements 📌](#requirements-)
  - [Features 🎉](#features-)
  - [Getting Started 🚀](#getting-started-)
  - [Usage ⚡️](#usage-️)
  - [Bonus Features 🎁](#bonus-features-)
    - [Local Database Storage 💾](#local-database-storage-)
    - [Responsive Design 🪄](#responsive-design-)
  - [License 📝](#license-)

## Requirements 📌

To complete the Dashboard Challenge, the following requirements must be met:

- Retrieve data from the [API](https://api.open-meteo.com/v1/forecast?latitude=1.29&longitude=103.85&hourly=relativehumidity_2m,direct_radiation&daily=temperature_2m_max,temperature_2m_min&timezone=Asia%2FSingapore&start_date=2023-01-01&end_date=2023-01-10).
- Create a single-page application.
- Display data in three types of charts: column chart for relative humidity, line chart for temperature (min and max), and area chart for direct radiation.
- Create a simple dashboard look and feel.

Optional Bonus Requirements:

- Store the data in a local SQL database and read from the database in the absence of internet access.
- Implement responsive design to ensure the application works on both desktop and mobile devices.

Read more related to requirement [here](./coding-challenge.pdf)

## Features 🎉

- Angular framework used for building the application.
- Charts for visualizing weather data.
- Data retrieval from the provided API.
- Local database storage for offline access (bonus feature).
- Responsive design for desktop and mobile views (bonus feature).

## Getting Started 🚀

Follow these steps to get started with the project:

1. Clone this repository to your local machine:

   ```bash
   git clone https://github.com/yourusername/dashboard-challenge.git
   ```

2. Navigate to the project directory:

   ```bash
   cd dashboard-challenge
   ```

3. Install the required dependencies:

   ```bash
   npm install
   ```

4. Run the application locally:

   ```bash
   ng serve
   ```

5. Open your web browser and access the application at [http://localhost:4200/](http://localhost:4200/).

## Usage ⚡️

Once the application is running, you can:

- View weather data presented in various charts on the dashboard.
- Interact with the charts about the weather information.

## Bonus Features 🎁

### Local Database Storage 💾

To enable local database storage for offline access:

1. Implement a local SQL database to store retrieved weather data.
2. Modify the application to read data from the local database when there is no internet access.
3. Ensure data synchronization between the API and local database when online.

### Responsive Design 🪄

To implement responsive design:

1. Adjust the layout and styles to ensure a seamless experience on both desktop and mobile devices.
2. Test the application on various screen sizes to ensure responsiveness.

## License 📝

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.
