import { Entreprise } from './Entreprise';

export type OffreDeStage = {
  _id?: string;
  createdAt?: string;
  updatedAt?: string;
  title: string;
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
};

export type OffreDeStagePost = {
  title: string;
  description: string;
  enterprise: string;
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
};
