export const COLORS: Color[] = [
    { id: "brown", label: "brown", color: "brown" },
    { id: "red", label: "red", color: "red" },
    { id: "orange", label: "orange", color: "orange" },
    { id: "yellow", label: "yellow", color: "yellow" },
    { id: "green", label: "green", color: "green" },
    { id: "blue", label: "blue", color: "blue" },
    { id: "purple", label: "purple", color: "purple" },
    { id: "pink", label: "pink", color: "pink" },
    { id: "grey", label: "grey", color: "grey" }
]

export interface Color {
    id: string;
    label: string;
    color: string;
}