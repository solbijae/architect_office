export type Publication = {
    year: number;
    data: {
      id: number;
      date: string;
      organizer: string;
      title: string;
    }[];
  };