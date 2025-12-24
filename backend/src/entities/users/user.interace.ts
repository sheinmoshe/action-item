type ISODateString = string;

type Gender = "male" | "female";
type Nationality = string;

interface Name {
  title: string;
  first: string;
  last: string;
}

interface Street {
  number: number;
  name: string;
}

interface Coordinates {
  latitude: string;
  longitude: string;
}

interface Timezone {
  offset: string;
  description: string;
}

interface Location {
  street: Street;
  city: string;
  state: string;
  country: string;
  postcode: number;
  coordinates: Coordinates;
  timezone: Timezone;
}

interface Login {
  uuid: string;
  username: string;
  password: string;
  salt: string;
  md5: string;
  sha1: string;
  sha256: string;
}

interface DateWithAge {
  date: ISODateString;
  age: number;
}

interface Identification {
  name: string;
  value: string | null;
}

interface Picture {
  large: string;
  medium: string;
  thumbnail: string;
}

export interface User {
  gender: Gender;
  name: Name;
  location: Location;
  email: string;
  login: Login;
  dob: DateWithAge;
  registered: DateWithAge;
  phone: string;
  cell: string;
  id: Identification;
  picture: Picture;
  nat: Nationality;
}
