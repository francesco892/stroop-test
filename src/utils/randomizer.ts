export function getRandomElement<T>(array: T[]): T {
    return shuffleArray(array)[0];
}

export function getRandomElements<T>(array: T[], nElements: number): T[] {
    return shuffleArray(array).slice(0, nElements);
}

export function shuffleArray<T>(arrayToShuffle: T[]): T[] {
    const array = [...arrayToShuffle];
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}