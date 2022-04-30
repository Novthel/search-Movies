import placeholder from '../placeholder.png';

export function getImageURL(path, width){
    return path ? `https://image.tmdb.org/t/p/w${width}${path}` : placeholder;
        
}