const { gql } = require('apollo-server');


const typeDefs = gql`
type Query {
    fetchCarEU(id: ID!) : CarEU
    fetchCarUSA(id: ID!) : CarUSA
    fetchCarChina(id: ID!) : CarChina

    fetchAnalysis : [Analysis]
}

interface Car {
    id : ID!
    unit: ID
    timestamp: Float
}

type CarEU implements Car{
  id : ID!
  unit: ID
  timestamp: Float
  
  kilometerTotal: String
  kilometerStart: Int
  kmh: Float

  model: String
  labels: [String]
  fuel: String

  estimatedRange: Float

  travelTimeTotal: Float
  travelTime: Float
  
  oilLevel: Int 
  fuelLevel : Float
  breakFluidLevel : Float

  tirePressure : Float

  temperatureEngine : Float
  temperatureInside : Float
  temperatureOutside : Float
  temperatureBreaks : Float
  temperatureTires: Float

  breakPower: Float
  breakActive: Boolean 
  gasPower: Float
  gasActive: Boolean

  light: Boolean
  acc: Boolean

  rpm: Float
  oxygenLevel: Float

  engineWarning : Boolean
  breaksWarning : Boolean
  forwardCollisionWarning : Boolean
  airbag : Boolean
  serviceCall : Boolean
  lightingSystemFailure : Boolean

  lat: Float 
  lon: Float

  infotainmentOn: Boolean
  infotainmentService: String
  infotainmentVolume: Float
}

type CarUSA implements Car{
  id : ID!
  unit: ID
  timestamp: Float

  mileageTotal:Float
  mileageStart:Float
  mph: Float

  model: String
  labels: [String]
  fuel: String

  estimatedRange: Float

  travelTimeTotal: Float
  travelTime: Float
  
  oilLevel: Int 
  fuelLevel : Float
  breakFluidLevel : Float

  tirePressure : Float

  temperatureEngine : Float
  temperatureInside : Float
  temperatureOutside : Float
  temperatureBreaks : Float
  temperatureTires: Float

  breakPower: Float
  breakActive: Boolean 
  gasPower: Float
  gasActive: Boolean

  light: Boolean
  acc: Boolean

  rpm: Float
  oxygenLevel: Float

  engineWarning : Boolean
  breaksWarning : Boolean
  forwardCollisionWarning : Boolean
  airbag : Boolean
  serviceCall : Boolean
  lightingSystemFailure : Boolean

  lat: Float 
  lon: Float

  infotainmentOn: Boolean
  infotainmentService: String
  infotainmentVolume: Float
}

type CarChina {
  infotainmentOn: Boolean
  infotainmentService: String
  infotainmentVolume: Float
}

type Analysis {
  _id: ID
  label: String
  graphs: [JsonGraph]
}

type JsonGraph {
  type: String
  title: String
  chartType: String
  jsonGraph: String
}
`;



module.exports = typeDefs;