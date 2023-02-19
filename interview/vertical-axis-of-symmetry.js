/*
Vertical axis of symmetry.
Given an array of points with integer coordinates (x, y).
Determine if there is a vertical line dividing the points into 2 sets,
symmetrical about this line.
The input is an array of points in the format [x, y]: [[0, 0], [1, 1], ...].
If the input was not an array, you must return the error 'points must be array'.
If there are no points, we can assume that there is such a line.
That is, the function should return true if an empty array was passed as an argument.
*/ 

/**
 * @param {([number, number])[]} points
 * @returns {boolean}
 */

function isSym(points) {
    if (!Array.isArray(points)) {
      throw new Error('points must be array');
    }
    
    if (points.length === 0) {
      return true;
    }
    
    const d = {};
    const xList = points.map(([x]) => x);
    const xl = Math.min(...xList);
    const xr = Math.max(...xList);
    
    points.forEach(point => {
      const dl = point[0] - xl;
      const dr = xr - point[0];
      
      const hashKey = JSON.stringify({x: Math.min(dl, dr), y: point[1]});
      
      if (!d[hashKey]) {
        d[hashKey] = 0;
      }
      
      d[JSON.stringify({x: Math.min(dl, dr), y: point[1]})] += (dl > dr) - (dl < dr);
    });
    
    return Object.values(d).every(v => v === 0);
}
