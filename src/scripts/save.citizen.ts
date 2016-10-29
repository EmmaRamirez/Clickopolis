import { Contribution } from './citizen';

export interface CitizenSave {
  name: string;
  amount: number;
  visible: boolean;
  enabled: boolean;
  contrib1: Contribution;
  contrib2: Contribution;
  contrib3: Contribution;
  contrib4: Contribution;
}