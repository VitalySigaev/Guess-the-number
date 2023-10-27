const errorType = document.querySelector('.error-type');
const errorRange = document.querySelector('.error-range');

export function hideErrors() {
    errorType.style.display = 'none';
    errorRange.style.display = 'none';
}


export function showErrorsType(){
    errorType.style.display = 'block';
}

export function showErrorsRange(){
    errorRange.style.display = 'block';
}