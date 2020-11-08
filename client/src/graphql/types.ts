/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: FetchMeasurements
// ====================================================

export interface FetchMeasurements_measurements {
  __typename: "EnvironmentMeasurement";
  id: number;
  topic: string;
  battery: number;
  linkquality: number;
  voltage: number;
  pressure: any;
  temperature: any;
  humidity: any;
  timestamp: any;
}

export interface FetchMeasurements {
  measurements: FetchMeasurements_measurements[];
}

export interface FetchMeasurementsVariables {
  filter?: EnvironmentMeasurementFilter | null;
}

/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL fragment: EnvironmentMeasurementFragment
// ====================================================

export interface EnvironmentMeasurementFragment {
  __typename: "EnvironmentMeasurement";
  id: number;
  topic: string;
  battery: number;
  linkquality: number;
  voltage: number;
  pressure: any;
  temperature: any;
  humidity: any;
  timestamp: any;
}

/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

//==============================================================
// START Enums and Input Objects
//==============================================================

export interface EnvironmentMeasurementFilter {
  AND?: EnvironmentMeasurementFilter[] | null;
  battery?: number | null;
  battery_gt?: number | null;
  battery_gte?: number | null;
  battery_in?: number[] | null;
  battery_lt?: number | null;
  battery_lte?: number | null;
  battery_not?: number | null;
  battery_not_gt?: number | null;
  battery_not_gte?: number | null;
  battery_not_in?: number[] | null;
  battery_not_lt?: number | null;
  battery_not_lte?: number | null;
  humidity?: any | null;
  humidity_gt?: any | null;
  humidity_gte?: any | null;
  humidity_in?: any[] | null;
  humidity_lt?: any | null;
  humidity_lte?: any | null;
  humidity_not?: any | null;
  humidity_not_gt?: any | null;
  humidity_not_gte?: any | null;
  humidity_not_in?: any[] | null;
  humidity_not_lt?: any | null;
  humidity_not_lte?: any | null;
  id?: number | null;
  id_gt?: number | null;
  id_gte?: number | null;
  id_in?: number[] | null;
  id_lt?: number | null;
  id_lte?: number | null;
  id_not?: number | null;
  id_not_gt?: number | null;
  id_not_gte?: number | null;
  id_not_in?: number[] | null;
  id_not_lt?: number | null;
  id_not_lte?: number | null;
  linkquality?: number | null;
  linkquality_gt?: number | null;
  linkquality_gte?: number | null;
  linkquality_in?: number[] | null;
  linkquality_lt?: number | null;
  linkquality_lte?: number | null;
  linkquality_not?: number | null;
  linkquality_not_gt?: number | null;
  linkquality_not_gte?: number | null;
  linkquality_not_in?: number[] | null;
  linkquality_not_lt?: number | null;
  linkquality_not_lte?: number | null;
  OR?: EnvironmentMeasurementFilter[] | null;
  pressure?: any | null;
  pressure_gt?: any | null;
  pressure_gte?: any | null;
  pressure_in?: any[] | null;
  pressure_lt?: any | null;
  pressure_lte?: any | null;
  pressure_not?: any | null;
  pressure_not_gt?: any | null;
  pressure_not_gte?: any | null;
  pressure_not_in?: any[] | null;
  pressure_not_lt?: any | null;
  pressure_not_lte?: any | null;
  temperature?: any | null;
  temperature_gt?: any | null;
  temperature_gte?: any | null;
  temperature_in?: any[] | null;
  temperature_lt?: any | null;
  temperature_lte?: any | null;
  temperature_not?: any | null;
  temperature_not_gt?: any | null;
  temperature_not_gte?: any | null;
  temperature_not_in?: any[] | null;
  temperature_not_lt?: any | null;
  temperature_not_lte?: any | null;
  timestamp?: any | null;
  timestamp_gt?: any | null;
  timestamp_gte?: any | null;
  timestamp_in?: any[] | null;
  timestamp_lt?: any | null;
  timestamp_lte?: any | null;
  timestamp_not?: any | null;
  timestamp_not_gt?: any | null;
  timestamp_not_gte?: any | null;
  timestamp_not_in?: any[] | null;
  timestamp_not_lt?: any | null;
  timestamp_not_lte?: any | null;
  topic?: string | null;
  topic_contains?: string | null;
  topic_ends_with?: string | null;
  topic_in?: string[] | null;
  topic_not?: string | null;
  topic_not_contains?: string | null;
  topic_not_ends_with?: string | null;
  topic_not_in?: string[] | null;
  topic_not_starts_with?: string | null;
  topic_starts_with?: string | null;
  voltage?: number | null;
  voltage_gt?: number | null;
  voltage_gte?: number | null;
  voltage_in?: number[] | null;
  voltage_lt?: number | null;
  voltage_lte?: number | null;
  voltage_not?: number | null;
  voltage_not_gt?: number | null;
  voltage_not_gte?: number | null;
  voltage_not_in?: number[] | null;
  voltage_not_lt?: number | null;
  voltage_not_lte?: number | null;
}

//==============================================================
// END Enums and Input Objects
//==============================================================
