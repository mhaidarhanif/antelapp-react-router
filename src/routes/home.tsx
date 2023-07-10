import { Link } from "react-router-dom";

export function HomeRoute() {
  return (
    <main>
      <h1>🦌 Antelapp with React Router</h1>
      <Link to="/users">Go to Users</Link>
    </main>
  );
}
