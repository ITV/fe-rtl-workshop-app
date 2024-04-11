const STORAGE_KEY = "animals";

const storage = {
  getAll: () => {
    var existing = localStorage.getItem(STORAGE_KEY);

    return existing ? JSON.parse(existing) : {};
  },
  addToLocalStorage: (key, value) => {
    var existing = localStorage.getItem(STORAGE_KEY);

    existing = existing ? JSON.parse(existing) : {};

    existing[key] = value;

    localStorage.setItem(STORAGE_KEY, JSON.stringify(existing));
  },
  removeFromLocalStorage: (key) => {
    var existing = localStorage.getItem(STORAGE_KEY);

    existing = existing ? JSON.parse(existing) : {};

    delete existing[key];

    localStorage.setItem(STORAGE_KEY, JSON.stringify(existing));
  },
};

export default storage;
