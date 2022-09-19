class TeamNotExistsException extends Error {
  constructor() {
    super("Team doesn't exists");
  }
}

export default TeamNotExistsException;