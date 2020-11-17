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
  pressure: GQLDecimal;
  temperature: GQLDecimal;
  humidity: GQLDecimal;
  timestamp: GQLDateTime;
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
  pressure: GQLDecimal;
  temperature: GQLDecimal;
  humidity: GQLDecimal;
  timestamp: GQLDateTime;
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
  humidity?: GQLDecimal | null;
  humidity_gt?: GQLDecimal | null;
  humidity_gte?: GQLDecimal | null;
  humidity_in?: GQLDecimal[] | null;
  humidity_lt?: GQLDecimal | null;
  humidity_lte?: GQLDecimal | null;
  humidity_not?: GQLDecimal | null;
  humidity_not_gt?: GQLDecimal | null;
  humidity_not_gte?: GQLDecimal | null;
  humidity_not_in?: GQLDecimal[] | null;
  humidity_not_lt?: GQLDecimal | null;
  humidity_not_lte?: GQLDecimal | null;
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
  pressure?: GQLDecimal | null;
  pressure_gt?: GQLDecimal | null;
  pressure_gte?: GQLDecimal | null;
  pressure_in?: GQLDecimal[] | null;
  pressure_lt?: GQLDecimal | null;
  pressure_lte?: GQLDecimal | null;
  pressure_not?: GQLDecimal | null;
  pressure_not_gt?: GQLDecimal | null;
  pressure_not_gte?: GQLDecimal | null;
  pressure_not_in?: GQLDecimal[] | null;
  pressure_not_lt?: GQLDecimal | null;
  pressure_not_lte?: GQLDecimal | null;
  temperature?: GQLDecimal | null;
  temperature_gt?: GQLDecimal | null;
  temperature_gte?: GQLDecimal | null;
  temperature_in?: GQLDecimal[] | null;
  temperature_lt?: GQLDecimal | null;
  temperature_lte?: GQLDecimal | null;
  temperature_not?: GQLDecimal | null;
  temperature_not_gt?: GQLDecimal | null;
  temperature_not_gte?: GQLDecimal | null;
  temperature_not_in?: GQLDecimal[] | null;
  temperature_not_lt?: GQLDecimal | null;
  temperature_not_lte?: GQLDecimal | null;
  timestamp?: GQLDateTime | null;
  timestamp_gt?: GQLDateTime | null;
  timestamp_gte?: GQLDateTime | null;
  timestamp_in?: GQLDateTime[] | null;
  timestamp_lt?: GQLDateTime | null;
  timestamp_lte?: GQLDateTime | null;
  timestamp_not?: GQLDateTime | null;
  timestamp_not_gt?: GQLDateTime | null;
  timestamp_not_gte?: GQLDateTime | null;
  timestamp_not_in?: GQLDateTime[] | null;
  timestamp_not_lt?: GQLDateTime | null;
  timestamp_not_lte?: GQLDateTime | null;
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
