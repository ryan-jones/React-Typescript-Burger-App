export interface IButtonProps {
  buttonType: string;
  clicked: () => void;
  children: string;
  type: string;
}

export interface ILogoProps {
  closed?: () => void;
}

export interface IModalProps {
  show: boolean;
  modalClosed: () => void;
  children: any;
}