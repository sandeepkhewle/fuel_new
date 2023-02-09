import { Pipe, PipeTransform } from '@angular/core';
import { DecimalPipe, DatePipe, getCurrencySymbol } from '@angular/common';

@Pipe({ name: 'formatter' })
export class Formatter implements PipeTransform {
  transform(value: any, formatString: string): any {

    if (formatString === 'date' && value) {
      try {
        const datePipe = new DatePipe('en-IN');
        return datePipe.transform(value, 'dd-MMM-yyyy', '', 'en-IN');
      }
      catch (error) {
        let splitDate = value.split("-");
        if (!splitDate || splitDate.length < 3) {
          splitDate = [];
          splitDate = value.split("/");
        }
        if (splitDate && splitDate.length >= 3) {
          let isoFormatDate = splitDate.reverse().join("-");
          const datePipe = new DatePipe('en-IN');
          return datePipe.transform(isoFormatDate, 'dd-MMM-yyyy', '', 'en-IN');
        }
        else {
          return value;
        }
      }
    } else if (formatString === 'dateTime' && value) {
      try {
        const datePipe = new DatePipe('en-IN');
        return datePipe.transform(value, 'dd-MMM-yyyy | h:mm a', '', 'en-IN');
      }
      catch (error) {
        // for DD-MM-YYYY date type.
        let splitDate = value.split("-");
        if (!splitDate || splitDate.length < 3) {
          // for DD/MM/YYYY date type.
          splitDate = [];
          splitDate = value.split("/");
        }
        if (splitDate && splitDate.length >= 3) {
          let isoFormatDate = splitDate.reverse().join("-");
          const datePipe = new DatePipe('en-IN');
          return datePipe.transform(isoFormatDate, 'dd-MMM-yyyy | h:mm a', '', 'en-IN');
        }
        else {
          return value;
        }
      }
    } else if (formatString === 'currency' && value) {
      return (
        getCurrencySymbol('INR', 'narrow') + ' ' +
        Math.round(Number(value)).toLocaleString('en-IN')
      );
    } else if (formatString === 'number' && value) {
      const decimalPipe = new DecimalPipe('en-IN');
      return decimalPipe.transform(value, '1.2-2');
    } else if (formatString === 'integer' && value) {
      const decimalPipe = new DecimalPipe('en-IN');
      return decimalPipe.transform(value, '1.0');
    } else if (formatString === 'time' && value) {
      const timePipe = new DatePipe('en-IN');
      return timePipe.transform(value, 'h:mm a', '', 'en-IN');
    } else if (formatString === 'memberStatus' && (value || value === false)) {
      let status = "Active";
      if (value === 2 || value === false) {
        status = "Inactive";
      }
      return status;
    } else if (formatString === 'formatTime' && value) {
      let hour = (value.split(':'))[0]
      let min = (value.split(':'))[1]
      let part = hour > 12 ? 'PM' : 'AM';
      min = (min + '').length == 1 ? `0${min}` : min;
      hour = hour > 12 ? hour - 12 : hour;
      hour = (hour + '').length == 1 ? `0${hour}` : hour;
      return `${hour}:${min} ${part}`
    } else {
      return value;
    }
  }
}
