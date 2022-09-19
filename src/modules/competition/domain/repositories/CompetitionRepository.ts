import { Competition } from "../entities/Competition";

export interface CompetitionRepository {
  importLeague: (codeLeague: string) => Promise<boolean>;
  getAll: () => Promise<Competition[] | []>;
  getByCodeLeague: (codeLeague: string) => Promise<Competition | null>;
}
