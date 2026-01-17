/**
 * Airport Code to Display Name Mappings
 * Complete list from API provider documentation
 */

export const AIRPORT_NAMES: Record<string, string> = {
  // Any/All Options
  "-1": "Any London",
  "-2": "Any Midland",
  "-3": "Any Scotland",
  "-5": "Any Eurostar",
  "-7": "Any Northern Ireland",
  "-8": "Any Ireland (South)",
  "-9": "Any East Anglia",
  "-10": "Any North East / Yorkshire",
  "-11": "Any North West",
  "-12": "Any South East",
  "-13": "Any South West/Wales",
  "0": "Any Airport",
  
  // UK Airports - London
  "69": "City",
  "70": "Gatwick",
  "71": "Heathrow",
  "72": "Luton",
  "73": "Southend",
  "74": "Stansted",
  // 75 is used by some provider feeds as "Londonderry"; keep London City on 69/LCY.
  "75": "Londonderry",
  
  // UK Airports - Regional
  "1": "Aberdeen",
  "2": "Belfast International",
  "3": "Belleek",
  "4": "Biggin Hill",
  "5": "Birmingham",
  "6": "Blackpool",
  "7": "Bournemouth",
  "8": "Bristol",
  "9": "Belfast City",
  "10": "Belfast International",
  "11": "Carlisle",
  "12": "Coventry",
  "13": "Doncaster Sheffield",
  "14": "Birmingham",
  "15": "Dundee",
  "16": "Blackpool",
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
  "29": "Cork",
  "30": "Coventry",
  "31": "Liverpool",
  "32": "Doncaster Sheffield",
  "33": "Manchester",
  "34": "Dublin",
  "35": "Dundee",
  "36": "East Midlands",
  "37": "Edinburgh",
  "38": "Oxford",
  "39": "Plymouth",
  "40": "Robin Hood",
  "41": "Southampton",
  "42": "Stornoway",
  "43": "Sumburgh",
  "44": "Swansea",
  "45": "Glasgow",
  "46": "Prestwick",
  "47": "Wick",

  // Departures (provider IDs)
  "55": "Humberside",
  "56": "Inverness",
  "63": "Jersey",
  "66": "Leeds Bradford",
  "67": "Liverpool",
  "77": "Manchester",
  "80": "Newcastle",
  "81": "Newquay",
  "84": "Norwich",
  "88": "Plymouth",
  "95": "Southampton",
  "99": "Teesside",
  "220": "Shannon",
  "221": "Kent International",
  
  // Common IATA Codes (for flight data)
  "LGW": "Gatwick",
  "LHR": "Heathrow",
  "LTN": "Luton",
  "STN": "Stansted",
  "LCY": "City",
  "SEN": "Southend",
  "BHX": "Birmingham",
  "MAN": "Manchester",
  "EMA": "East Midlands",
  "NCL": "Newcastle",
  "GLA": "Glasgow",
  "EDI": "Edinburgh",
  "BRS": "Bristol",
  "LBA": "Leeds Bradford",
  "BFS": "Belfast International",
  "BHD": "Belfast City",
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
  "CVT": "Coventry",
  "HUY": "Humberside",
  "DND": "Dundee",
  "LDY": "Londonderry",
  "ORK": "Cork",
  "DUB": "Dublin",
  "SNN": "Shannon",
  "NWI": "Norwich",
  "MME": "Teesside",
  "BLK": "Blackpool",
  "JER": "Jersey",
  "MSE": "Kent International",
  "PLY": "Plymouth",
  
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
