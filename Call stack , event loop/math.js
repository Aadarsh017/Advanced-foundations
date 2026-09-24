export let pi = 3.14;

export function getCricumference(radius) {
    return pi * radius
}

export function getarea(radius) {
    return pi * radius * radius;
}

export function getVolume(radius) {
 return 4 * pi * radius * radius
}

// we also right export {pi,getCricumference,getarea,getVolume }