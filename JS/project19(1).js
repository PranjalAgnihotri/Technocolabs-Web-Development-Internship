var ind = require('./project19.js');
import {Index,payGrade, getCadre, calculateTax, getBenefits,     calculateBonus , reimbursementEligibility } from './project19.js';

function getEmployeeInformation(inputSalary) {
  console.log(inputSalary);
  Index.salary = inputSalary;
  var a='Cadre: ';
  var b='Tax: ';
  var c='Benefits: ';
  var d='Bonus: ';
  var e='Reimbursement Eligibility: ';
  return (a + getCadre());
  return ( b+ calculateTax());
  return (c+ getBenefits());
  return (d + calculateBonus());
  return ( e+  reimbursementEligibility());
}
getEmployeeInformation(10000);
getEmployeeInformation(50000);
getEmployeeInformation(100000);
