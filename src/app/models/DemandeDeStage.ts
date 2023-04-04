import { Candidat } from './Candidat';
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


  // To validate
  candidat?: Candidat;
};

export type DemandeDeStagePost = {
  titre: string;
  description: string;
  startDate: string;
  endDate: string;
  program: string;
  requirements: string;
  stageType: {
    value: string;
    label: string;
  };
  hoursPerWeek: number;
  additionalInfo: string;
  paid: boolean;
  published: boolean;
  active: boolean;
  region: {
    label: string;
    value: string;
  };
  activitySector: string;
  city: string;
  resume: string;
  enterprise: string;
};
