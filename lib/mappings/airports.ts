/**
 * Airport Code to Display Name Mappings
 * Complete list from API provider documentation
 */

export const AIRPORT_NAMES: Record<string, string> = {
  // Any/All Options
  "-1": "Any London",
  "0": "Any Airport",
  
  // UK Airports - London
  "70": "London Gatwick",
  "71": "London Heathrow",
  "72": "London Luton",
  "73": "London Southend",
  "74": "London Stansted",
  "75": "London City",
  
  // UK Airports - Regional
  "1": "Aberdeen",
  "2": "Belfast International",
  "3": "Belleek",
  "4": "Biggin Hill",
  "5": "Birmingham",
  "6": "Blackpool",
  "7": "Bournemouth",
  "8": "Bristol",
  "9": "Cambridge",
  "10": "Cardiff",
  "11": "Carlisle",
  "12": "Coventry",
  "13": "Doncaster Sheffield",
  "14": "Birmingham",
  "15": "Dundee",
  "16": "Durham Tees Valley",
  "17": "East Midlands",
  "18": "Edinburgh",
  "19": "Exeter",
  "20": "Farnborough",
  "21": "Glasgow",
  "22": "Glasgow Prestwick",
  "23": "Gloucester Cheltenham",
  "24": "Hawarden",
  "25": "Humberside",
  "26": "Inverness",
  "27": "Isle of Man",
  "28": "Kirkwall",
  "29": "Leeds Bradford",
  "30": "Leicester",
  "31": "Liverpool",
  "32": "Lydd",
  "33": "Manchester",
  "34": "Newcastle",
  "35": "Norwich",
  "36": "East Midlands",
  "37": "Newquay",
  "38": "Oxford",
  "39": "Plymouth",
  "40": "Robin Hood",
  "41": "Southampton",
  "42": "Stornoway",
  "43": "Sumburgh",
  "44": "Swansea",
  "45": "Tiree",
  "46": "Unst",
  "47": "Wick",
  
  // Common IATA Codes (for flight data)
  "LGW": "London Gatwick",
  "LHR": "London Heathrow",
  "LTN": "London Luton",
  "STN": "London Stansted",
  "LCY": "London City",
  "SEN": "London Southend",
  "BHX": "Birmingham",
  "MAN": "Manchester",
  "EMA": "East Midlands",
  "NCL": "Newcastle",
  "GLA": "Glasgow",
  "EDI": "Edinburgh",
  "BRS": "Bristol",
  "LBA": "Leeds Bradford",
  "BFS": "Belfast",
  "ABZ": "Aberdeen",
  "LPL": "Liverpool",
  "CWL": "Cardiff",
  "BOH": "Bournemouth",
  "EXT": "Exeter",
  "NQY": "Newquay",
  "SOU": "Southampton",
  "DSA": "Doncaster Sheffield",
  "PIK": "Glasgow Prestwick",
  "INV": "Inverness",
  "IOM": "Isle of Man",
  
  // Destination Airports (Cyprus)
  "PFO": "Paphos",
  "LCA": "Larnaca",
  
  // Other European Destinations
  "ALC": "Alicante",
  "AGP": "Malaga",
  "PMI": "Palma de Mallorca",
  "BCN": "Barcelona",
  "MAD": "Madrid",
  "FAO": "Faro",
  "HER": "Heraklion",
  "CHQ": "Chania",
  "RHO": "Rhodes",
  "CFU": "Corfu",
  "ZTH": "Zakynthos",
  "ATH": "Athens",
  "DLM": "Dalaman",
  "AYT": "Antalya",
  "BJV": "Bodrum",
  "SSH": "Sharm El Sheikh",
  "HRG": "Hurghada",
  "DXB": "Dubai",
  "AUH": "Abu Dhabi",
};

/**
 * Get airport display name from code
 * @param code Airport code (either numeric ID or IATA code)
 * @returns Full airport name or code if not found
 */
export function getAirportName(code: string | number): string {
  const codeStr = String(code);
  return AIRPORT_NAMES[codeStr] || codeStr;
}

/**
 * Get airport name with code in parentheses
 * @param code Airport code
 * @returns "London Gatwick (LGW)" or just code if not found
 */
export function getAirportNameWithCode(code: string): string {
  const name = getAirportName(code);
  if (name === code) return code;
  return `${name} (${code})`;
}

/**
 * Check if airport code exists in mappings
 */
export function isValidAirportCode(code: string | number): boolean {
  return String(code) in AIRPORT_NAMES;
}
