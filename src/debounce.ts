function debounce<T extends (...params: any[]) => any>(func: T, timeout: number) {
    let t = null;

    const f = (...args: any[]) => {
        clearTimeout(t);
        t = setTimeout(() => func.apply(null, args), timeout);
    };

    return f as (...params: Parameters<T>) => ReturnType<T>;
}

export default debounce;