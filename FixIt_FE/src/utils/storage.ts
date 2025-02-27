function setLocalValue<T>(name: string, data: T): void {
  const serializedData = JSON.stringify(data);

  localStorage.setItem(name, serializedData);
}

function getLocalValue<T>(name: string): T | null {
  let item: string | null = null;

  item = localStorage.getItem(name);


  if (item) {
    try {
      return JSON.parse(item) as T;
    } catch (error) {
      console.error('Parsing error in getSessionValue:', error);
      return null;
    }
  }
  return null;
}

export {
  setLocalValue,
  getLocalValue,
};

