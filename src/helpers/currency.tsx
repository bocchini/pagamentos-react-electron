export const helpersValue = (value:number):string  =>{
  const valueToString = String(value);
  return valueToString.replace('.', ',')
}