
let Index={ salary :100000};
let payGrades = {
  entryLevel: { taxMultiplier: .05, benefits: ['health'], minSalary: 10000, maxSalary: 49999 },
  midLevel: { taxMultiplier: .1, benefits: ['health', 'housing'], minSalary: 50000, maxSalary: 99999 },
  seniorLevel: { taxMultiplier: .2, benefits: ['health', 'housing', 'wellness', 'gym'], minSalary: 100000, maxSalary: 200000 }
};

 Index. getCadre= function () {
  if (Index.salary >= payGrades.entryLevel.minSalary && salary <= payGrades.entryLevel.maxSalary) {
    return 'entryLevel';
  } else if (Index.salary >= payGrades.midLevel.minSalary && salary <= payGrades.midLevel.maxSalary) {
    return 'midLevel';
  } else return 'seniorLevel';
}

Index. calculateTax=function () {
  return payGrades[Index.getCadre()].taxMultiplier * Index.salary;
}

Index. getBenefits= function () {
  return payGrades[Index.getCadre()].benefits.join(', ');
}

 Index. calculateBonus=function () {
  return .02 * salary;
}
Index. reimbursementEligibility=function () {
  let reimbursementCosts = { health: 5000, housing: 8000, wellness: 6000, gym: 12000 };
  let totalBenefitsValue = 0; 
  let employeeBenefits = payGrades[Index.getCadre()].benefits;
  for (let i = 0; i < employeeBenefits.length; i++) {
    totalBenefitsValue += reimbursementCosts[employeeBenefits[i]];
  }
  return totalBenefitsValue;
}
module.exports= {Index,payGrades , getCadre , calculateTax, getBenefits, calculateBonus, reimbursementEligibility} ;
//export index.js as module;

