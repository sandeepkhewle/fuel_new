import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'dataFormatter' })
export class DataFormatter implements PipeTransform {
  transform(key: any, record: any, column: any): any {
    let dataObj = JSON.parse(JSON.stringify(record));
    if (column) {
      const dbProp = column.split('.');
      try {
        for (let k = 0; k < dbProp.length - 1; k++) {
          dataObj = dataObj[dbProp[k]];
        }
        const value = dataObj[dbProp[dbProp.length - 1]];
        return value;
      } catch (error) {
        return '';
      }
    }
  }
}