export interface Test {
  id?: number;
  name?: string;
  arName?: string;
  isCovid?: boolean;
  testTypeId?: number;
}

export interface TestType {
  name: string;
  arName: string;
  id: number;
}
