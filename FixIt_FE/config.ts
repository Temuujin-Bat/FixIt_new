interface IApiHostsMap {
  [key: string]: string;
}

const apiHostsMap: IApiHostsMap = {
  local: 'http://localhost:5151/api',
  development: '',
  production: '',
};

const ENV = process.env.NODE_ENV || 'local'; // Default to 'local' if not set
const BASE_URL = apiHostsMap[ENV] || apiHostsMap.local;

export { BASE_URL };