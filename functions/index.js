import { every } from 'lodash'

export default isNumber = (n) => {
    return !isNaN(parseFloat(n)) && isFinite(n);
}

export const isEmpty = (data) => {
    if(!data) return true; // null, undefined, 0, false, ''
    if(Array.isArray(data) && !data.length) return true; // []
    if( (typeof data) === 'string' && !(data.trim())) return true; // '   '
    if( (typeof data) === 'string' && (data === '{}' || data === '[]') ) return true; // '[]', '{}'
    if( (typeof data) === 'object' && (JSON.stringify(data)) === '{}' ) return true; // {}
    if( ( (typeof data) === 'object' || Array.isArray(data) ) && every(data, isEmpty ) ) return true; // { a: null, b: undefined }, [{}]
    return false;
}