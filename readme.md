# Code Test: Build a Portfolio App

## Challenge:

You are tasked with building a portfolio app that showcases your projects, skills, and experiences. The app should have the following features:

### 1. Projects:
 Display a list of projects with their names, descriptions, and links to their GitHub repositories.
### 2. Graphics Projects:
 Display a list of graphics projects with their names, descriptions, and images.
### 3. Articles:
 Display a list of articles written by you, with their titles, summaries, and links to the original articles.
### 4. Skills: 
Display a list of your skills, with their names and levels of proficiency.
### 5. Experience: 
Display a list of your work experiences, with their company names, job titles, and dates of employment.

## Requirements:

- Use Next.js to build the app.
- Use Node.js as the backend technology.
- Use a database (such as MongoDB) to store the data.
- Implement authentication and authorization using GitHub OAuth.
- Use GraphQL to query the data.
- Write unit tests and integration tests for the app.
- Deploy the app on a cloud platform (such as Vercel or Netlify).

## Data Models:

- Project:
    - id (string)
    - name (string)
    - description (string)
    - githubUrl (string)
- GraphicsProject:
    - id (string)
    - name (string)
    - description (string)
    - imageUrl (string)
- Article:
    - id (string)
    - title (string)
    - summary (string)
    - url (string)
- Skill:
    - id (string)
    - name (string)
    - level (string)
- Experience:
    - id (string)
    - company (string)
    - jobTitle (string)
    - dates (string)
## API Endpoints:

- GET /projects: Returns a list of projects.
- GET /graphics-projects: Returns a list of graphics projects.
- GET /articles: Returns a list of articles.
- GET /skills: Returns a list of skills.
- GET /experiences: Returns a list of experiences.

## Evaluation Criteria:

- The app should be built using Next.js and Node.js.
- The app should use a database to store the data.
- The app should implement authentication and authorization using GitHub OAuth.
- The app should use GraphQL to query the data.
- The app should write unit tests and integration tests.
- The app should be deployed on a cloud platform.
- The app should meet all the requirements mentioned above.