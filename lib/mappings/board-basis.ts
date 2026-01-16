/**
 * Board Basis Code to Display Name Mappings
 * Complete list from API provider documentation
 */

export const BOARD_BASIS_NAMES: Record<string, string> = {
  // Standard Board Basis
  "RO": "Room Only",
  "BB": "Bed & Breakfast",
  "HB": "Half Board",
  "FB": "Full Board",
  "AI": "All Inclusive",
  "SC": "Self Catering",
  
  // Extended Variations
  "ROOM_ONLY": "Room Only",
  "BED_BREAKFAST": "Bed & Breakfast",
  "HALF_BOARD": "Half Board",
  "FULL_BOARD": "Full Board",
  "ALL_INCLUSIVE": "All Inclusive",
  "SELF_CATERING": "Self Catering",
};

/**
 * Full descriptions for board basis types
 */
export const BOARD_BASIS_DESCRIPTIONS: Record<string, string> = {
  "RO": "Accommodation only - no meals included",
  "BB": "Includes accommodation and breakfast",
  "HB": "Includes accommodation, breakfast, and dinner",
  "FB": "Includes accommodation, breakfast, lunch, and dinner",
  "AI": "All meals, snacks, and selected drinks included",
  "SC": "Self-catering accommodation with kitchen facilities",
  "ROOM_ONLY": "Accommodation only - no meals included",
  "BED_BREAKFAST": "Includes accommodation and breakfast",
  "HALF_BOARD": "Includes accommodation, breakfast, and dinner",
  "FULL_BOARD": "Includes accommodation, breakfast, lunch, and dinner",
  "ALL_INCLUSIVE": "All meals, snacks, and selected drinks included",
  "SELF_CATERING": "Self-catering accommodation with kitchen facilities",
};

/**
 * Get board basis display name from code
 * @param code Board basis code (e.g., "AI", "HB", "RO")
 * @returns Full board basis name or code if not found
 */
export function getBoardBasisName(code: string): string {
  const upperCode = code?.toUpperCase() || "";
  return BOARD_BASIS_NAMES[upperCode] || code;
}

/**
 * Get board basis description
 * @param code Board basis code
 * @returns Description of what's included or empty string if not found
 */
export function getBoardBasisDescription(code: string): string {
  const upperCode = code?.toUpperCase() || "";
  return BOARD_BASIS_DESCRIPTIONS[upperCode] || "";
}

/**
 * Get board basis name with description
 * @param code Board basis code
 * @returns "All Inclusive - All meals, snacks, and selected drinks included"
 */
export function getBoardBasisWithDescription(code: string): string {
  const name = getBoardBasisName(code);
  const description = getBoardBasisDescription(code);
  if (!description || name === code) return name;
  return `${name} - ${description}`;
}

/**
 * Check if board basis code exists in mappings
 */
export function isValidBoardBasisCode(code: string): boolean {
  return code?.toUpperCase() in BOARD_BASIS_NAMES;
}

/**
 * Get all available board basis options for display
 * @returns Array of {code, name, description} objects
 */
export function getAllBoardBasisOptions() {
  return Object.entries(BOARD_BASIS_NAMES)
    .filter(([code]) => code.length <= 2) // Only short codes
    .map(([code, name]) => ({
      code,
      name,
      description: BOARD_BASIS_DESCRIPTIONS[code] || "",
    }));
}
