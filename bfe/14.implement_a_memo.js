function memo(func, resolver = (...args) => args.join('_')) {
    const cache = new Map();
  
    return function(...args) {
      const cacheKey = resolver(...args);
      if (cache.has(cacheKey)) {
        return cache.get(cacheKey);
      }
      const value = func.apply(this, args);
      cache.set(cacheKey, value);
      return value;
    }
}