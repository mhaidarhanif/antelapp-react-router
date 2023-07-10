import { useLoaderData } from "react-router-dom";

type User = {
  id: number;
  name: string;
  username: string;
  email: string;
  address: {
    street: string;
    suite: string;
    city: string;
    zipcode: string;
    geo: {
      lat: string;
      lng: string;
    };
  };
  phone: string;
  website: string;
  company: {
    name: string;
    catchPhrase: string;
    bs: string;
  };
};

export async function loader() {
  const response = await fetch("https://jsonplaceholder.typicode.com/users");
  const users = (await response.json()) as User[];

  return { users };
}

export function UsersRoute() {
  const { users } = useLoaderData() as Awaited<ReturnType<typeof loader>>;

  return <pre>{JSON.stringify(users, null, 2)}</pre>;
}
