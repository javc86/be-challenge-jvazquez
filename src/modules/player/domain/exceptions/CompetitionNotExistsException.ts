import { AxiosError } from 'axios';

class CompetitionNotExistsException extends AxiosError {
  constructor() {
    super("Competition doesn't exists");
  }
}

export default CompetitionNotExistsException;