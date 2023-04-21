console.log('loader loading...')

export const resolve = (a, b, nextResolve) => nextResolve(a, b)
export const load = (a, b, nextLoad) => nextLoad(a, b)