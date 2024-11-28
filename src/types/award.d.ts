export type Award = {
  year: number;
  data: {
    id: number;
    title: string;
    award: string;
    organizer: string;
  }[];
};
