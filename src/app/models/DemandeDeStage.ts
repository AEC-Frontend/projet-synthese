import { Entreprise } from './Entreprise';

export type DemandeDeStage = {
  _id: string;
  createdAt: string;
  updatedAt: string;
  titre: string;
  description: string;
  startDate: string;
  enterprise: Entreprise;
  endDate: string;
  program: string;
  requirements: string;
  stageType: {
    __typename: string;
    label: string;
    value: string;
  };
  hoursPerWeek: number;
  additionalInfo: string;
  paid: boolean;
  published: boolean;
  skills: {
    __typename: string;
    label: string;
    value: string;
  };
  active: boolean;
  region: {
    __typename: string;
    label: string;
    value: string;
  };
  activitySector: string;
  city: string;
  resume: string;
};
