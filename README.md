# Thinkific Multi-User Journal Assignment

## Getting Started

### 1. Get to know project tech stack

This simple project is a starting point for your take-home test. It is built with the following technologies:

- [React](https://reactjs.org/), a JavaScript library for building user interfaces
- [Next.js](https://nextjs.org/), a frontend framework for server-side rendering, easy routing, serverless RESTful API
- [Prisma](https://www.prisma.io/), a database ORM for Node.js
  - Scaffolding is set up for SQLite
  - You are free to use other databases of your choice

### 2. Install npm dependencies

```
yarn
```

### 3. Create .env file

```
cp .env.example .env
```

### 4. Prepare DB

Create a local SQLite database and run migrations.

```
npx prisma migrate dev --name init
```

Seed the database with the sample data from [`prisma/seed.js`](./prisma/seed.js).

```
npx prisma db seed
```

### 5. Start the app

```
yarn dev
```

The app is now running, navigate to [`http://localhost:3000/`](http://localhost:3000/) in your browser to explore its UI.

## Submission

Update this README file by answering the questions below.

### Date Or Reflection

The date you're submitting this.

### Location of deployed application (not necessary for Junior Engineers)

Please provide the url where we can find and interact with your running application.

### Instructions to run assignment locally

Please provide us with the necessary instructions to run your solution if it is implemented with technologies different from the starting repo.

### Time spent

How much time did you spend on the assignment? Normally, this is expressed in hours.

### Assumptions made

Use this section to tell us about any assumptions that you made when creating your solution.

### Shortcuts/Compromises made

If applicable. Did you do something that you feel could have been done better in a real-world application? Please let us know.

### Assume your application will go into production...

#### 1) What would be your approach to ensuring the application is ready for production (testing)?

#### 2) How would you ensure a smooth user experience as 1000’s of users start using your app simultaneously?

#### 3) What key steps would you take to ensure application security?

### What did you not include in your solution that you want us to know about? Were you short on time and not able to include something that you want us to know about? Please list it here so that we know that you considered it.

### Other information about your submission that you feel it's important that we know if applicable.

### Your feedback on this technical challenge

Have feedback for how we could make this assignment better? Please let us know.
