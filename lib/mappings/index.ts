/**
 * Central export point for all mapping utilities
 * Import all mapping functions from this single file
 */

// Airport mappings
export {
  AIRPORT_NAMES,
  getAirportName,
  getAirportNameWithCode,
  isValidAirportCode,
} from "./airports";

// Airline mappings
export {
  AIRLINE_NAMES,
  getAirlineName,
  getAirlineNameWithCode,
  isValidAirlineCode,
} from "./airlines";

// Board basis mappings
export {
  BOARD_BASIS_NAMES,
  BOARD_BASIS_DESCRIPTIONS,
  getBoardBasisName,
  getBoardBasisDescription,
  getBoardBasisWithDescription,
  isValidBoardBasisCode,
  getAllBoardBasisOptions,
} from "./board-basis";

// Duration helpers
export {
  formatDuration,
  formatDurationWithDays,
  formatDurationRange,
  COMMON_DURATIONS,
  getCommonDurationOptions,
  parseDuration,
  isValidDuration,
} from "./duration";
