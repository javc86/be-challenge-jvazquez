import { AxiosError } from 'axios';

class CompetitionExistEception extends AxiosError {
  constructor() {
    super("Competition already exists")
  }
}

export default CompetitionExistEception;