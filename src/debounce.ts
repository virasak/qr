type Timeout = ReturnType<typeof setTimeout> | undefined;

function debounce<T extends (...params: any[]) => any>(func: T, timeout: number) {
    let t: Timeout;

    return (...args: Parameters<T>): void => {
        clearTimeout(t);
        t = setTimeout(() => func.apply(null, args), timeout);
    };
}

export default debounce;