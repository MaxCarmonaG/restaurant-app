"use client";

const Error = ({ error }: { error: Error }) => (
  <main className="error">
    <h1>An error occurred!</h1>
    <p>Failed to fetch meal data. Please try again later.</p>
    <p>{error.message}</p>
  </main>
);

export default Error;
