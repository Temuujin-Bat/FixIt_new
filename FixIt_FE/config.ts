const TOKEN_KEY = "ENCRYPT_KEY";
const MAP_BOX_TOKEN =
  "pk.eyJ1IjoidGVtdWppbjEyMyIsImEiOiJjbTE5b2pydWwxZDVyMmtzOHNwc25rbGxlIn0.NeYHxEAURhaDiGx3MLD0OA";

interface IApiHostsMap {
  [key: string]: string;
}

const apiHostsMap: IApiHostsMap = {
  local: "http://localhost:8080/",
  development: "https://airsoftportaldev.azurewebsites.net/",
  production: "https://israelairsoft.com/api/",
};

const clientHostsMap: IApiHostsMap = {
  local: "https://airsoftportaldev.azurewebsites.net/",
  development: "https://airsoftportaldev.azurewebsites.net/",
  production: "https://israelairsoft.com/",
}

const nodeEnv = import.meta.env.MODE || 'local';

const BASE_URL = apiHostsMap[nodeEnv];
const BASE_CLIENT_URL = clientHostsMap[nodeEnv];

export { TOKEN_KEY, MAP_BOX_TOKEN, BASE_URL, BASE_CLIENT_URL };
