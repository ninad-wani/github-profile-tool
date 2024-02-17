# GitHub Profiles Angular App

This Angular application allows users to search for GitHub profiles and view information about users and their repositories.

## Features

- Search GitHub profiles by username
- View user profile information including name, avatar, bio, and number of repositories
- View a list of user repositories with pagination
- Responsive UI using Angular Material

## Setup Instructions

To run this Angular application locally, follow these steps:

1. **Clone the Repository:**

   ```bash
   git clone https://github.com/your-username/github-profiles-app.git
   cd github-profiles-app

2. **Install Dependencies:**

   ```bash
   npm install

3. **Run the Application:**

   ```bash
   ng serve --open

## Usage

- Enter a GitHub username in the search bar to view the user's profile information and repositories.
- Click on a repository to view more details.
- Use pagination controls to navigate through the repository list.

## Routing Structure

This Angular application uses Angular Router for navigation. Below is the routing structure:

- **Profile Page**:

  - URL: `/profile/:username`
  - Description: Displays basic user information such as the user's name, avatar, bio, and number of repositories.

- **Repository List Page**:

  - URL: `/repositories/:username`
  - Description: Fetches and displays a list of the user's GitHub repositories. Each repository card includes repository name, description, and list of topics associated with the repository (if available). Pagination is implemented to show only 10 repositories per page.

- **Home Page**:
  - URL: `/`
  - Description: Displays a search bar where users can enter a GitHub username to navigate to the corresponding profile page.
