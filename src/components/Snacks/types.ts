export enum SnackbarStatus {
  Info,
  Success,
  Failure
}

export interface Snacks {
  [key: string]: {
    title: string;
    message: string;
    status: SnackbarStatus;
    icon?: string;
    delay?: number;
    action?: () => void;
    actionText?: string;
  };
}
