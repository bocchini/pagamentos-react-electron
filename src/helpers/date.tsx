export const helperDate = (date:string | undefined):string =>{
  if(!date) {
    return '';
  }  
  return new Date(date).toLocaleDateString('pt-BR')
}
