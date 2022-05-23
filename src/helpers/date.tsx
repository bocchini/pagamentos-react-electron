import moment from 'moment';

export const helperDate = (date:string | undefined):string =>{
  if(!date) {
    return '';
  }
  return moment(date).format("DD/MM/YYYY");
}
