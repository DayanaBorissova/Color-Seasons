export function navigate(e, callback) {
    e.preventDefault();
    callback();
}

export function showView(view) {
    document.querySelector('main').replaceChildren(view);
}
