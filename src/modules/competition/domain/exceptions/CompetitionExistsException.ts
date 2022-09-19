import { AxiosError } from 'axios';

class CompetitionExistsException extends AxiosError {
  constructor() {
    super("Competition already exists");
  }
}

export default CompetitionExistsException;