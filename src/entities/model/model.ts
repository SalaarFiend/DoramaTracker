export type ListItemCardType = {
  name: string;
  status: 'done' | 'leaved';
  rate: number;
  dateStartWatch?: string;
  dateEndWatch?: string;
};
