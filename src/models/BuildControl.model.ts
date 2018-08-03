export default interface IBuildControl {
    key: string;
    label: string;
    added: () => void;
    removed: () => void;
    disabled: boolean;
} 

export interface IBuildControls {
    price: number;
    ingredientAdded: (type: string) => void;
    ingredientRemoved: (type: string) => void;
    disabled: object;
}