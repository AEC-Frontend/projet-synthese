import { TSelectOption } from 'src/app/types/TSelectOption';

export const API_URL = 'https://e-stages-gbgeb8.can.canonic.dev/api/';
export const API_SECRET_KEY =
  '6404c645274d14000884986c-a9a0862d-b837-4bdd-97aa-9285851dbf02';

export const REGIONS: TSelectOption[] = [
  { value: 'BAS_SAINT_LAURENT', label: 'Bas-St-Laurent' },
  { value: 'GASPESIE', label: 'Gaspésie-Iles-de-la-Madeleine' },
  { value: 'SAGUENAY_LAC_SAINT_JEAN', label: 'Saguenay-Lac-St-Jean' },
  { value: 'NORD-DU-QUEBEC', label: 'Nord-du-Québec' },
  { value: 'BAS_SAINT_LAURENT', label: 'Bas-St-Laurent' },
  { value: 'CHAUDIERE_APPALACHES', label: 'Chaudière-Appalaches' },
  { value: 'MAURICIE', label: 'Mauricie' },
  { value: 'CENTRE_DU_QUEBEC', label: 'Centre-du-Québec' },
  { value: 'ESTRIE', label: 'Estrie' },
  { value: 'MONTREAL', label: 'Montréal' },
  { value: 'LAVAL', label: 'Laval' },
  { value: 'LANAUDIERE', label: 'Lanaudière' },
  { value: 'LAURENTIDES', label: 'Laurentides' },
  { value: 'MONTEREGIE', label: 'Montérégie' },
  { value: 'OUTAOUAIS', label: 'Outaouais' },
  { value: 'ABITIBI_TEMISCAMINGUE', label: 'Abitibi-Témiscamingue' },
  { value: 'COTE_NORD', label: 'Côte-Nord' },
];

export const SKILLS: TSelectOption[] = [
  { value: 'VUE', label: 'Vue' },
  { value: 'REACT', label: 'React' },
  { value: 'ANGULAR', label: 'Angular' },
];

export const TYPE_DE_STAGE: TSelectOption[] = [
  { value: 'TEMPS_PARTIEL', label: 'Temps partiel' },
  { value: 'TEMPS_PLEIN', label: 'Temps plein' },
];

export const NOMBRE_HEURES_SEMAINE: TSelectOption[] = [
  { value: '5', label: '5 heures' },
  { value: '10', label: '10 heures' },
  { value: '15', label: '15 heures' },
  { value: '20', label: '20 heures' },
  { value: '25', label: '25 heures' },
  { value: '30', label: '30 heures' },
  { value: '35', label: '35 heures' },
];

export const RENUMERATION: TSelectOption[] = [
  { value: 'false', label: 'À discuter' },
  { value: 'true', label: 'Stage rémunéré' },
  { value: 'false', label: 'Stage non rémunéré' },
];

export const ACTIVITY_SECTOR: TSelectOption[] = [
  { value: 'sante', label: 'Santé' },
  { value: 'science', label: 'Science' },
  { value: 'construction', label: 'Construction' },
  { value: 'restauration', label: 'Restauration' },
  { value: 'commerce_de_detail', label: 'Commerce de détail' },
  { value: 'informatique', label: 'Informatique' },
];
