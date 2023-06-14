// Importing database functions. DO NOT MODIFY THIS LINE.
import { central, db1, db2, db3, vault } from "./databases.js";

function getUserData(id) {
  const dbs = {
    db1: db1,
    db2: db2,
    db3: db3
  };
}


async function getUserData(id) {
  try {
    const databaseId = await central(id);
    const userData = await dbs[databaseId](id);
    const personalData = await vault(id);

    {
      id: number,
      name: string,
      username: string,
      email: string,
      address: {
        street: string,
        suite: string,
        city: string,
        zipcode: string,
        geo: {
          lat: string,
          lng: string
        }
      }
      phone: string,
      website: string,
      company: {
        name: string,
        catchPhrase: string,
        bs: string
      }
  }

    return user;
  } catch (error) {
    throw new Error('Failed to retrieve user data');
  }
}

getUserData(6)
  .then((user) => {
    console.log(user);
  });
  .catch((error));