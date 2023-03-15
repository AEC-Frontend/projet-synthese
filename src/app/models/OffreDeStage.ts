import { Entreprise } from './Entreprise';

export type OffreDeStage = {
  _id: string;
  createdAt: string;
  updatedAt: string;
  titre: string;
  description: string;
  enterprise: Entreprise;
  startDate: string;
  endDate: string;
  program: string;
  requirements: string;
  stageType: string;
  hoursPerWeek: number;
  additionalInfo: string;
  paid: boolean;
  published: boolean;
  active: boolean;
  skills: Array<{
    __typename: string;
    label: string;
    value: string;
  }>;
};
