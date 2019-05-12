export function statusName(status: StatusEnum | string | number) {
  switch (status.toString()) {
    case '1':
      return 'Filled in';
    case '2':
      return 'Waiting on Unit Manager';
    case '3':
      return 'Waiting on an India response';
    case '4':
      return 'Finished.';
    case '5':
      return 'Denied by Unit Manager';
    case '6':
      return 'Denied by India';
    default:
      return 'None';
  }
}

export enum StatusEnum {
  REJECTED_BY_INDIA_GUY = '6',
  REJECTED_BY_UNIT_MANAGER = '5',
  FILLED_IN = '1',
  WAITING_ON_UNIT_MANAGER = '2',
  WAITING_ON_INDIA = '3',
  APPROVED = '4',
  NONE = '0'
}
