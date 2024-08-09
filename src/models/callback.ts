export default interface callback {
    <T, K>(...args: T[]): K | void;
}