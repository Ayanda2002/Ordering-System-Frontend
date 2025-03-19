const CACHE_KEY = 'cachedProducts';
const CACHE_TIME = 24 * 60 * 60 * 1000; // 24 hours

export const getCachedProducts = () => {
  const cachedData = localStorage.getItem(CACHE_KEY);
  const cachedTimestamp = localStorage.getItem(`${CACHE_KEY}_timestamp`);
  
  if (cachedData && cachedTimestamp) {
    const now = Date.now();
    if (now - parseInt(cachedTimestamp, 10) < CACHE_TIME) {
      console.log('Using cached products');
      return JSON.parse(cachedData);
    }
  }
  return null;
};

export const cacheProducts = (products) => {
  localStorage.setItem(CACHE_KEY, JSON.stringify(products));
  localStorage.setItem(`${CACHE_KEY}_timestamp`, Date.now().toString());
};
