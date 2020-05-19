// Log to console

/*

Multi
line
notes 

const is variable that can contain subvariables.  These variables can be modified, but the CONST itself cannot be reassigned.

let initializes a variable and assigns it only when you do.  it can be reassigned
*/
// define UI in JS

const form = document.querySelector('#CharacterSheet');

const DropDownMenus = {
  alignmentMenu: document.querySelector('#Alignment'),

  raceMenu: document.querySelector('#Race'),
  
  classONE: document.querySelector('#classONE'),

  classTWO: document.querySelector('#classTWO'),

  classTHREE: document.querySelector('#classTHREE'),

}

// initialize character sheet
const Toon = {
  defaultStats: {
    STR: 8,
    DEX: 8,
    CON: 8, 
    INT: 8,
    WIS: 8,
    CHA: 8
  },

  Level: 0,
  ClassOne:{

    BAB: 0,
    FORT: 0,
    REFL: 0,
    WILL: 0,

},
  ClassTwo:{

    BAB: 0,
    FORT: 0,
    REFL: 0,
    WILL: 0,

},
  ClassThree:{

    BAB: 0,
    FORT: 0,
    REFL: 0,
    WILL: 0,

},
  Final:{

    BAB: 0,
    FORT: 0,
    REFL: 0,
    WILL: 0,

}
}

const Progression = {
  fastBAB: [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20],

  medBAB: [0,0,1,2,3,3,4,5,6,6,7,8,9,9,10,11,12,12,13,14,15],

  slowBAB: [0,0,1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,10],

  fastSAVES: [0,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,10,10,11,11,12],

  slowSAVES: [0,0,0,1,1,1,2,2,2,3,3,3,4,4,4,5,5,5,6,6,6],

  Null: [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],

  epicBAB: [0,1,1,2,2,3,3,4,4,5,5],

  epicSAVES: [0,0,1,1,2,2,3,3,4,4,5]
}

const Classes = {
  Null: {
    BAB: Progression.Null,
  
    FORT: Progression.Null,
  
    REFL: Progression.Null,
  
    WILL: Progression.Null,

    NAME: 'Null',

    SKILLValues: {
      points: 0,
      preferred: [ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    }

  },

  Barbarian: {
    BAB: Progression.fastBAB,
  
    FORT: Progression.fastSAVES,
  
    REFL: Progression.slowSAVES,
  
    WILL: Progression.slowSAVES,

    NAME: 'Barbarian',

    SKILLValues: {
      points: 2,
      preferred: [ 0, 2, 2, 2, 1, 1, 2, 1, 1, 2, 1, 1, 1, 2, 2, 1, 0, 2, 2, 1, 2, 2, 2, 2, 1, 2, 0],
    }
  },
  
  Bard: {
    BAB: Progression.medBAB,
  
    FORT: Progression.slowSAVES,
  
    REFL: Progression.fastSAVES,
  
    WILL: Progression.fastSAVES,

    NAME: 'Bard',

    SKILLValues: {
      points: 6,
      preferred:  [0, 1, 1, 1, 1, 1, 2, 1, 1, 1, 2, 1, 1, 1, 2, 1, 1, 1, 1, 1, 2, 2, 1, 2, 1, 1, 1],
    }

  },
  
  Cleric: {
    BAB: Progression.medBAB,
  
    FORT: Progression.fastSAVES,
  
    REFL: Progression.slowSAVES,
  
    WILL: Progression.fastSAVES,

    NAME: 'Cleric',
    
    SKILLValues: {
      points: 2,
      preferred: [ 0, 2, 2, 1, 1, 1, 2, 2, 1, 2, 2, 2, 1, 2, 2, 1, 0, 1, 2, 1, 2, 2, 1, 2, 2, 2, 0]
    }


  },
  
  Druid: {
    BAB: Progression.medBAB,
  
    FORT: Progression.fastSAVES,
  
    REFL: Progression.slowSAVES,
  
    WILL: Progression.fastSAVES,

    NAME: 'Druid',

    SKILLValues: {
      points: 2,
      preferred: [ 1, 2, 2, 1, 1, 1, 2, 2, 1, 2, 2, 2, 1, 2, 2, 1, 0, 1, 2, 2, 2, 2, 1, 2, 2, 2, 0]
    }

  },
  
  Fighter: {
    BAB: Progression.fastBAB,
  
    FORT: Progression.fastSAVES,
  
    REFL: Progression.slowSAVES,
  
    WILL: Progression.slowSAVES,

    NAME: 'Fighter',

    SKILLValues: {
      points: 2,
      preferred: [ 0, 2, 2, 1, 1, 1, 2, 1, 1, 2, 1, 2, 1, 2, 2, 1, 0, 2, 2, 1, 2, 2, 2, 2, 2, 2, 0]
    }

  },
  
  Monk: {
    BAB: Progression.medBAB,
  
    FORT: Progression.fastSAVES,
  
    REFL: Progression.fastSAVES,
  
    WILL: Progression.fastSAVES,

    NAME: 'Monk',
    
    SKILLValues: {
      points: 2,
      preferred: [ 0, 2, 2, 1, 1, 1, 2, 1, 1, 1, 2, 1, 1, 1, 2, 1, 1, 1, 2, 1, 2, 2, 2, 1, 2, 2, 0]
    }

  },
  
  Paladin: {
    BAB: Progression.fastBAB,
  
    FORT: Progression.fastSAVES,
  
    REFL: Progression.slowSAVES,
  
    WILL: Progression.slowSAVES,

    NAME: 'Paladin',

    SKILLValues: {
      points: 2,
      preferred: [ 0, 2, 2, 1, 1, 1, 2, 1, 1, 2, 2, 2, 1, 2, 2, 1, 0, 1, 2, 1, 2, 2, 2, 1, 1, 2, 0]
    }


  },
  
  Ranger: {
    BAB: Progression.fastBAB,
  
    FORT: Progression.fastSAVES,
  
    REFL: Progression.fastSAVES,
  
    WILL: Progression.slowSAVES,

    NAME: 'Ranger',

    SKILLValues: {
      points: 4,
      preferred: [ 1, 2, 2, 1, 1, 1, 2, 1, 1, 1, 2, 1, 1, 1, 2, 1, 0, 2, 2, 1, 1, 1, 2, 1, 2, 2, 0]
    }

  },
  
  Rogue: {
    BAB: Progression.medBAB,
  
    FORT: Progression.slowSAVES,
  
    REFL: Progression.fastSAVES,
  
    WILL: Progression.slowSAVES,

    NAME: 'Rogue',

    SKILLValues: {
      points: 8,
      preferred: [ 0, 1, 1, 2, 1, 1, 1, 2, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 2, 1, 2, 1, 1]
    }
    
  },
  
  Sorcerer: {
    BAB: Progression.slowBAB,
  
    FORT: Progression.slowSAVES,
  
    REFL: Progression.slowSAVES,
  
    WILL: Progression.fastSAVES,

    NAME: 'Sorcerer',

    SKILLValues: {
      points: 2,
      preferred: [ 0, 2, 1, 1, 1, 1, 2, 2, 1, 2, 2, 2, 1, 2, 2, 2, 0, 1, 2, 2, 2, 2, 1, 2, 2, 2, 0]
    }

  },
  
  Wizard: {
    BAB: Progression.slowBAB,
  
    FORT: Progression.slowSAVES,
  
    REFL: Progression.slowSAVES,
  
    WILL: Progression.fastSAVES,

    NAME: 'Wizard',

    SKILLValues: {
      points: 2,
      preferred: [ 0, 2, 2, 1, 1, 1, 2, 2, 1, 2, 2, 2, 1, 2, 2, 2, 0, 2, 2, 2, 2, 2, 1, 2, 2, 2, 0]
    }

  },

}

//initialize Class leveling Progressions
const TotalLevel  = document.getElementById('TotalLevel')
let ClassLevel1 = 0
let ClassLevel2 = 0
let ClassLevel3 = 0

let bonusPoints = document.getElementById('BonusAttributePoints')
let attributePoints = document.getElementById('InitialAttributePoints')

let selectedClassOne=Classes.Null
let selectedClassTwo=Classes.Null
let selectedClassThree=Classes.Null
let displayedClass=Classes.Null.NAME

const Race = document.getElementById('Race')

const STR = document.getElementById('STR')
const STRmod = document.getElementById('STRmod')
const STRgift = document.getElementById('STRgift')

const currentStats ={
  STR: 8,
  DEX: 8,
  CON: 8, 
  INT: 8,
  WIS: 8,
  CHA: 8,

}

const SkillButtons = document.getElementsByName('test')
const SkillPointDisplay = document.getElementById('SkillPoints')
const SkillValues = document.getElementsByClassName('SkillValues')


const SkillMods = document.getElementsByClassName('SkillMods')

const Printout = document.getElementById('Printout')
const CL1 = document.getElementById('CL1')
const CL1BTN = document.getElementById('CL1BTN').addEventListener('click', CL1UP)
const CL2 = document.getElementById('CL2')
const CL2BTN = document.getElementById('CL2BTN').addEventListener('click', CL2UP)
const CL3 = document.getElementById('CL3')
const CL3BTN = document.getElementById('CL3BTN').addEventListener('click', CL3UP)

const score    = [ 0, 1, 2, 3, 4, 5, 6, 7, 8, 9,10,11,12,13,14,15,16,17,18,19,20]
const addsub   = [ 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 2, 3, 3, 4, 4]
const modtable = [-5,-5,-4,-4,-3,-3,-2,-2,-1,-1, 0, 0, 1, 1, 2, 2, 3, 3, 4, 4, 5]

function downSTR(){
  console.log('STR Down!')
  if (Number(attributePoints.innerText)+addsub[Number(STR.innerText)-1]>30) {
    
  }
  else {
    attributePoints.innerText=Number(attributePoints.innerText)+addsub[Number(STR.innerText)]
    STR.innerText=Number(STR.innerText)-1
    STRmod.innerText=modtable[Number(STR.innerText)]
    SkillMods[7].innerText = STRmod.innerText
  }
}

function upSTR(){
  console.log('STR Up!')
  if (Number(attributePoints.innerText)+addsub[Number(STR.innerText)+1]<0) {
  }
  else {
    STR.innerText=Number(STR.innerText)+1
    STRmod.innerText=modtable[Number(STR.innerText)]
    attributePoints.innerText=Number(attributePoints.innerText)-addsub[Number(STR.innerText)]
    SkillMods[7].innerText = STRmod.innerText
  }
}

function downDEX(){
  console.log('DEX Down!')
  if (Number(attributePoints.innerText)+addsub[Number(DEX.innerText)-1]>30) {
  }
  else {
    attributePoints.innerText=Number(attributePoints.innerText)+addsub[Number(DEX.innerText)]
    DEX.innerText=Number(DEX.innerText)-1
    DEXmod.innerText=modtable[Number(DEX.innerText)]
    SkillMods[6].innerText = DEXmod.innerText
    SkillMods[9].innerText = DEXmod.innerText
    SkillMods[13].innerText = DEXmod.innerText
    SkillMods[15].innerText = DEXmod.innerText
    SkillMods[18].innerText = DEXmod.innerText
    SkillMods[19].innerText = DEXmod.innerText
    SkillMods[21].innerText = DEXmod.innerText
    SkillMods[25].innerText = DEXmod.innerText

  }
}

function upDEX(){
  console.log('DEX Up!')
  if (Number(attributePoints.innerText)+addsub[Number(DEX.innerText)+1]<0) {
  }
  else {
    DEX.innerText=Number(DEX.innerText)+1
    DEXmod.innerText=modtable[Number(DEX.innerText)]
    attributePoints.innerText=Number(attributePoints.innerText)-addsub[Number(DEX.innerText)]
    SkillMods[6].innerText = DEXmod.innerText
    SkillMods[9].innerText = DEXmod.innerText
    SkillMods[13].innerText = DEXmod.innerText
    SkillMods[15].innerText = DEXmod.innerText
    SkillMods[18].innerText = DEXmod.innerText
    SkillMods[19].innerText = DEXmod.innerText
    SkillMods[21].innerText = DEXmod.innerText
    SkillMods[25].innerText = DEXmod.innerText
  }
}

function downCON(){
  console.log('CON Down!')
  if (Number(attributePoints.innerText)+addsub[Number(CON.innerText)-1]>30) {
  }
  else {
    attributePoints.innerText=Number(attributePoints.innerText)+addsub[Number(CON.innerText)]
    CON.innerText=Number(CON.innerText)-1
    CONmod.innerText=modtable[Number(CON.innerText)]
    SkillMods[3].innerText = CONmod.innerText
  }
}

function upCON(){
  console.log('CON Up!')
  if (Number(attributePoints.innerText)+addsub[Number(CON.innerText)+1]<0) {
  }
  else {
    CON.innerText=Number(CON.innerText)+1
    CONmod.innerText=modtable[Number(CON.innerText)]
    attributePoints.innerText=Number(attributePoints.innerText)-addsub[Number(CON.innerText)]
    SkillMods[3].innerText = CONmod.innerText
  }
}

function downINT(){
  console.log('INT Down!')
  if (Number(attributePoints.innerText)+addsub[Number(INT.innerText)-1]>30) {
  }
  else {
    attributePoints.innerText=Number(attributePoints.innerText)+addsub[Number(INT.innerText)]
    INT.innerText=Number(INT.innerText)-1
    INTmod.innerText=modtable[Number(INT.innerText)]
    SkillMods[1].innerText = INTmod.innerText
    SkillMods[4].innerText = INTmod.innerText
    SkillMods[5].innerText = INTmod.innerText
    SkillMods[12].innerText = INTmod.innerText
    SkillMods[14].innerText = INTmod.innerText
    SkillMods[20].innerText = INTmod.innerText
    SkillMods[22].innerText = INTmod.innerText
  }
}

function upINT(){
  console.log('INT Up!')
  if (Number(attributePoints.innerText)+addsub[Number(INT.innerText)+1]<0) {
  }
  else {
    INT.innerText=Number(INT.innerText)+1
    INTmod.innerText=modtable[Number(INT.innerText)]
    attributePoints.innerText=Number(attributePoints.innerText)-addsub[Number(INT.innerText)]
    SkillMods[1].innerText = INTmod.innerText
    SkillMods[4].innerText = INTmod.innerText
    SkillMods[5].innerText = INTmod.innerText
    SkillMods[12].innerText = INTmod.innerText
    SkillMods[14].innerText = INTmod.innerText
    SkillMods[20].innerText = INTmod.innerText
    SkillMods[22].innerText = INTmod.innerText
  }
}

function downWIS(){
  console.log('WIS Down!')
  if (Number(attributePoints.innerText)+addsub[Number(WIS.innerText)-1]>30) {
  }
  else {
    attributePoints.innerText=Number(attributePoints.innerText)+addsub[Number(WIS.innerText)]
    WIS.innerText=Number(WIS.innerText)-1
    WISmod.innerText=modtable[Number(WIS.innerText)]
    SkillMods[8].innerText = WISmod.innerText
    SkillMods[11].innerText = WISmod.innerText
    SkillMods[23].innerText = WISmod.innerText
  }
}

function upWIS(){
  console.log('WIS Up!')
  if (Number(attributePoints.innerText)+addsub[Number(WIS.innerText)+1]<0) {
  }
  else {
    WIS.innerText=Number(WIS.innerText)+1
    WISmod.innerText=modtable[Number(WIS.innerText)]
    attributePoints.innerText=Number(attributePoints.innerText)-addsub[Number(WIS.innerText)]
    SkillMods[8].innerText = WISmod.innerText
    SkillMods[11].innerText = WISmod.innerText
    SkillMods[23].innerText = WISmod.innerText
  }
}

function downCHA(){
  console.log('CHA Down!')
  if (Number(attributePoints.innerText)+addsub[Number(CHA.innerText)-1]>30) {
  }
  else {
    attributePoints.innerText=Number(attributePoints.innerText)+addsub[Number(CHA.innerText)]
    CHA.innerText=Number(CHA.innerText)-1
    CHAmod.innerText=modtable[Number(CHA.innerText)]
    SkillMods[0].innerText = CHAmod.innerText
    SkillMods[2].innerText = CHAmod.innerText
    SkillMods[10].innerText = CHAmod.innerText
    SkillMods[16].innerText = CHAmod.innerText
    SkillMods[17].innerText = CHAmod.innerText
    SkillMods[24].innerText = CHAmod.innerText
    SkillMods[26].innerText = CHAmod.innerText
  }
}

function upCHA(){
  console.log('CHA Up!')
  if (Number(attributePoints.innerText)+addsub[Number(CHA.innerText)+1]<0) {
  }
  else {
    CHA.innerText=Number(CHA.innerText)+1
    CHAmod.innerText=modtable[Number(CHA.innerText)]
    attributePoints.innerText=Number(attributePoints.innerText)-addsub[Number(CHA.innerText)]
    SkillMods[0].innerText = CHAmod.innerText
    SkillMods[2].innerText = CHAmod.innerText
    SkillMods[10].innerText = CHAmod.innerText
    SkillMods[16].innerText = CHAmod.innerText
    SkillMods[17].innerText = CHAmod.innerText
    SkillMods[24].innerText = CHAmod.innerText
    SkillMods[26].innerText = CHAmod.innerText
  }
}

function advancement(classLevel){
  skillPointCost()
  if (ClassLevel1+ClassLevel2+ClassLevel3<=30){
    TotalLevel.innerText=ClassLevel1+ClassLevel2+ClassLevel3
  }
  else {

  }

  if (TotalLevel.innerText<=20){
    Toon.ClassOne.BAB=selectedClassOne.BAB[ClassLevel1];
    Toon.ClassOne.FORT=selectedClassOne.FORT[ClassLevel1];
    Toon.ClassOne.REFL=selectedClassOne.REFL[ClassLevel1];
    Toon.ClassOne.WILL=selectedClassOne.WILL[ClassLevel1];
  
    Toon.ClassTwo.BAB=selectedClassTwo.BAB[ClassLevel2];
    Toon.ClassTwo.FORT=selectedClassTwo.FORT[ClassLevel2];
    Toon.ClassTwo.REFL=selectedClassTwo.REFL[ClassLevel2];
    Toon.ClassTwo.WILL=selectedClassTwo.WILL[ClassLevel2];
  
    Toon.ClassThree.BAB=selectedClassThree.BAB[ClassLevel3];
    Toon.ClassThree.FORT=selectedClassThree.FORT[ClassLevel3];
    Toon.ClassThree.REFL=selectedClassThree.REFL[ClassLevel3];
    Toon.ClassThree.WILL=selectedClassThree.WILL[ClassLevel3];

    Toon.Final.BAB=Toon.ClassOne.BAB + Toon.ClassTwo.BAB + Toon.ClassThree.BAB;
    Toon.Final.FORT=Toon.ClassOne.FORT + Toon.ClassTwo.FORT + Toon.ClassThree.FORT;
    Toon.Final.REFL=Toon.ClassOne.REFL + Toon.ClassTwo.REFL + Toon.ClassThree.REFL;
    Toon.Final.WILL=Toon.ClassOne.WILL + Toon.ClassTwo.WILL + Toon.ClassThree.WILL;
    document.getElementById('Printout').innerHTML += `
    <h4 class="lbl">${TotalLevel.innerText}</h4>
    <h4 class="lbl">${displayedClass.NAME}</h4>
    <h4 class="lbl">${classLevel}</h4>
    <h4 class="lbl">${Toon.Final.BAB}</h4>
    <h4 class="lbl">${Toon.Final.FORT}</h4>
    <h4 class="lbl">${Toon.Final.REFL}</h4>
    <h4 class="lbl">${Toon.Final.WILL}</h4>`;
  }
  else if (TotalLevel.innerText>20 && TotalLevel.innerText<31) {
    Toon.Final.BAB=Toon.ClassOne.BAB + Toon.ClassTwo.BAB + Toon.ClassThree.BAB + Progression.epicBAB[TotalLevel.innerText-20],
    Toon.Final.FORT=Toon.ClassOne.FORT + Toon.ClassTwo.FORT + Toon.ClassThree.FORT + Progression.epicSAVES[TotalLevel.innerText-20],
    Toon.Final.REFL=Toon.ClassOne.REFL + Toon.ClassTwo.REFL + Toon.ClassThree.REFL + Progression.epicSAVES[TotalLevel.innerText-20],
    Toon.Final.WILL=Toon.ClassOne.WILL + Toon.ClassTwo.WILL + Toon.ClassThree.WILL + Progression.epicSAVES[TotalLevel.innerText-20]
    document.getElementById('Printout').innerHTML += `
        <h4 class="lbl">${TotalLevel.innerText}</h4>
        <h4 class="lbl">${displayedClass.NAME}</h4>
        <h4 class="lbl">${classLevel}</h4>
        <h4 class="lbl">${Toon.Final.BAB}</h4>
        <h4 class="lbl">${Toon.Final.FORT}</h4>
        <h4 class="lbl">${Toon.Final.REFL}</h4>
        <h4 class="lbl">${Toon.Final.WILL}</h4>`;
  
  }
  
  else {
    

  }


  if (Number(TotalLevel.innerText) % 4 == 0) {
    bonusPoints.innerText=Number(bonusPoints.innerText)+1;
    console.log(bonusPoints)

  }

}

function skillPointCalculation(points) {
  switch (Number(TotalLevel.innerText)) {
    case 1: SkillPointDisplay.innerText = Number(SkillPointDisplay.innerText)+4+points+Number(INTmod.innerText);
    break;
    default: if (points+Number(INTmod.innerText)<1) {
      SkillPointDisplay.innerText = Number(SkillPointDisplay.innerText)+1
    }
    else {
      SkillPointDisplay.innerText = Number(SkillPointDisplay.innerText)+points+Number(INTmod.innerText)
    }
  }
  // if (TotalLevel == 1) {
  //   SkillPointDisplay.innerText = Number(SkillPointDisplay.innerText)+4+points+Number(INTmod.innerText)
  // }
  // else if (TotalLevel >=1 && points+Number(INTmod.innerText)<1){
  //   SkillPointDisplay.innerText = Number(SkillPointDisplay.innerText)+1
  // }
  // else {
  //   SkillPointDisplay.innerText = Number(SkillPointDisplay.innerText)+points+Number(INTmod.innerText)
  // }
}

function CL1UP() {
  ClassLevel1=Number(CL1.innerText) + 1;
  if (ClassLevel1+ClassLevel2+ClassLevel3<=30){
    CL1.innerText=ClassLevel1;
    advancement(ClassLevel1)
    skillPointCalculation(selectedClassOne.SKILLValues.points)
  }
  else {
    
  }

}

function CL2UP() {
  ClassLevel2=Number(CL2.innerText) + 1;
  if (ClassLevel1+ClassLevel2+ClassLevel3<=30){
    CL2.innerText=ClassLevel2;
    advancement(ClassLevel2)
    skillPointCalculation(selectedClassTwo.SKILLValues.points)

  }
  else {
    
  }

}

function CL3UP() {
  ClassLevel3=Number(CL3.innerText) + 1;
  if (ClassLevel1+ClassLevel2+ClassLevel3<=30){
    CL3.innerText=ClassLevel3;
    advancement(ClassLevel3)
    skillPointCalculation(selectedClassThree.SKILLValues.points)
  }
  else {

  }
  
}

function statAnchor(){
  currentStats.STR = Number(STR.innerText)
  currentStats.DEX = Number(DEX.innerText)
  currentStats.CON = Number(CON.innerText)
  currentStats.INT = Number(INT.innerText)
  currentStats.WIS = Number(WIS.innerText)
  currentStats.CHA = Number(CHA.innerText)
}

function racialTraits() {
  switch(DropDownMenus.raceMenu.selectedIndex){
    case 0://DEFAULT
      STR.innerText=Toon.defaultStats.STR
      DEX.innerText=Toon.defaultStats.DEX
      CON.innerText=Toon.defaultStats.CON
      INT.innerText=Toon.defaultStats.INT
      WIS.innerText=Toon.defaultStats.WIS
      CHA.innerText=Toon.defaultStats.CHA
      statAnchor()

      break;
    case 1://HUMAN
      STR.innerText=Toon.defaultStats.STR
      DEX.innerText=Toon.defaultStats.DEX
      CON.innerText=Toon.defaultStats.CON
      INT.innerText=Toon.defaultStats.INT
      WIS.innerText=Toon.defaultStats.WIS
      CHA.innerText=Toon.defaultStats.CHA
      statAnchor()
      break;
    case 2://DEEP IMASKARI
      
      STR.innerText=Toon.defaultStats.STR
      DEX.innerText=Toon.defaultStats.DEX-2
      CON.innerText=Toon.defaultStats.CON
      INT.innerText=Toon.defaultStats.INT+2
      WIS.innerText=Toon.defaultStats.WIS
      CHA.innerText=Toon.defaultStats.CHA
      statAnchor()
      break;
    case 3://FIRBOLG
      
      STR.innerText=Toon.defaultStats.STR+4
      DEX.innerText=Toon.defaultStats.DEX
      CON.innerText=Toon.defaultStats.CON+2
      INT.innerText=Toon.defaultStats.INT
      WIS.innerText=Toon.defaultStats.WIS
      CHA.innerText=Toon.defaultStats.CHA-4
      statAnchor()
      break;

    case 4://SHIELD DWARF
      
      STR.innerText=Toon.defaultStats.STR
      DEX.innerText=Toon.defaultStats.DEX
      CON.innerText=Toon.defaultStats.CON+2
      INT.innerText=Toon.defaultStats.INT
      WIS.innerText=Toon.defaultStats.WIS
      CHA.innerText=Toon.defaultStats.CHA-2

      statAnchor()
      break;

    case 5://GOLD DWARF
      
      STR.innerText=Toon.defaultStats.STR
      DEX.innerText=Toon.defaultStats.DEX-2
      CON.innerText=Toon.defaultStats.CON+2
      INT.innerText=Toon.defaultStats.INT
      WIS.innerText=Toon.defaultStats.WIS
      CHA.innerText=Toon.defaultStats.CHA

      statAnchor()
      break;

    case 6://DUERGAR
      
      STR.innerText=Toon.defaultStats.STR+2
      DEX.innerText=Toon.defaultStats.DEX
      CON.innerText=Toon.defaultStats.CON+2
      INT.innerText=Toon.defaultStats.INT
      WIS.innerText=Toon.defaultStats.WIS
      CHA.innerText=Toon.defaultStats.CHA-4

      statAnchor()

      break;
    case 7://WILD DWARF
      
      STR.innerText=Toon.defaultStats.STR
      DEX.innerText=Toon.defaultStats.DEX
      CON.innerText=Toon.defaultStats.CON+2
      INT.innerText=Toon.defaultStats.INT
      WIS.innerText=Toon.defaultStats.WIS
      CHA.innerText=Toon.defaultStats.CHA-2

      statAnchor()

      break;
    case 8://MOON ELF
      
      STR.innerText=Toon.defaultStats.STR
      DEX.innerText=Toon.defaultStats.DEX+2
      CON.innerText=Toon.defaultStats.CON-2
      INT.innerText=Toon.defaultStats.INT
      WIS.innerText=Toon.defaultStats.WIS
      CHA.innerText=Toon.defaultStats.CHA

      statAnchor()

      break;
    case 9://SUN ELF
      
      STR.innerText=Toon.defaultStats.STR
      DEX.innerText=Toon.defaultStats.DEX
      CON.innerText=Toon.defaultStats.CON-2
      INT.innerText=Toon.defaultStats.INT+2
      WIS.innerText=Toon.defaultStats.WIS
      CHA.innerText=Toon.defaultStats.CHA

      statAnchor()

      break;
    case 10://WILD ELF
      
      STR.innerText=Toon.defaultStats.STR
      DEX.innerText=Toon.defaultStats.DEX+2
      CON.innerText=Toon.defaultStats.CON
      INT.innerText=Toon.defaultStats.INT-2
      WIS.innerText=Toon.defaultStats.WIS
      CHA.innerText=Toon.defaultStats.CHA

      statAnchor()

      break;
    case 11://WOOD ELF
      
      STR.innerText=Toon.defaultStats.STR+2
      DEX.innerText=Toon.defaultStats.DEX
      CON.innerText=Toon.defaultStats.CON-2
      INT.innerText=Toon.defaultStats.INT
      WIS.innerText=Toon.defaultStats.WIS
      CHA.innerText=Toon.defaultStats.CHA

      statAnchor()

      break;
    case 12://DROW
      
      STR.innerText=Toon.defaultStats.STR
      DEX.innerText=Toon.defaultStats.DEX+2
      CON.innerText=Toon.defaultStats.CON-2
      INT.innerText=Toon.defaultStats.INT+2
      WIS.innerText=Toon.defaultStats.WIS
      CHA.innerText=Toon.defaultStats.CHA+2

      statAnchor()

      break;
    case 13://ROCK GNOME
      
      STR.innerText=Toon.defaultStats.STR-2
      DEX.innerText=Toon.defaultStats.DEX
      CON.innerText=Toon.defaultStats.CON+2
      INT.innerText=Toon.defaultStats.INT
      WIS.innerText=Toon.defaultStats.WIS
      CHA.innerText=Toon.defaultStats.CHA

      statAnchor()

      break;
    case 14://SVIRFNEBLIN
      
      STR.innerText=Toon.defaultStats.STR-2
      DEX.innerText=Toon.defaultStats.DEX+2
      CON.innerText=Toon.defaultStats.CON
      INT.innerText=Toon.defaultStats.INT
      WIS.innerText=Toon.defaultStats.WIS+2
      CHA.innerText=Toon.defaultStats.CHA-4

      statAnchor()

      break;
    case 15://FOREST GNOME
      
      STR.innerText=Toon.defaultStats.STR-2
      DEX.innerText=Toon.defaultStats.DEX
      CON.innerText=Toon.defaultStats.CON+2
      INT.innerText=Toon.defaultStats.INT
      WIS.innerText=Toon.defaultStats.WIS
      CHA.innerText=Toon.defaultStats.CHA

      statAnchor()


      break;
    case 16://LIGHTFOOT HALFLING
      
      STR.innerText=Toon.defaultStats.STR-2
      DEX.innerText=Toon.defaultStats.DEX+2
      CON.innerText=Toon.defaultStats.CON
      INT.innerText=Toon.defaultStats.INT
      WIS.innerText=Toon.defaultStats.WIS
      CHA.innerText=Toon.defaultStats.CHA

      statAnchor()

      break;
    case 17://GHOSTWISE HALFLING
      
      STR.innerText=Toon.defaultStats.STR-2
      DEX.innerText=Toon.defaultStats.DEX+2
      CON.innerText=Toon.defaultStats.CON
      INT.innerText=Toon.defaultStats.INT
      WIS.innerText=Toon.defaultStats.WIS
      CHA.innerText=Toon.defaultStats.CHA

      statAnchor()

      break;
    case 18://STRONGHEART HALFLING
      
      STR.innerText=Toon.defaultStats.STR-2
      DEX.innerText=Toon.defaultStats.DEX+2
      CON.innerText=Toon.defaultStats.CON
      INT.innerText=Toon.defaultStats.INT
      WIS.innerText=Toon.defaultStats.WIS
      CHA.innerText=Toon.defaultStats.CHA

      statAnchor()

      break;
    case 19://FEY
      
      STR.innerText=Toon.defaultStats.STR-4
      DEX.innerText=Toon.defaultStats.DEX+4
      CON.innerText=Toon.defaultStats.CON
      INT.innerText=Toon.defaultStats.INT
      WIS.innerText=Toon.defaultStats.WIS
      CHA.innerText=Toon.defaultStats.CHA+4

      statAnchor()

      break;
    case 20://HALF ELF
      
      STR.innerText=Toon.defaultStats.STR
      DEX.innerText=Toon.defaultStats.DEX
      CON.innerText=Toon.defaultStats.CON
      INT.innerText=Toon.defaultStats.INT
      WIS.innerText=Toon.defaultStats.WIS
      CHA.innerText=Toon.defaultStats.CHA

      statAnchor()

      break;
    case 21://HALF ORC
      
      STR.innerText=Toon.defaultStats.STR+2
      DEX.innerText=Toon.defaultStats.DEX
      CON.innerText=Toon.defaultStats.CON
      INT.innerText=Toon.defaultStats.INT-2
      WIS.innerText=Toon.defaultStats.WIS
      CHA.innerText=Toon.defaultStats.CHA-2

      statAnchor()

      break;
    case 22://GOBLIN
      
      STR.innerText=Toon.defaultStats.STR-2
      DEX.innerText=Toon.defaultStats.DEX+2
      CON.innerText=Toon.defaultStats.CON
      INT.innerText=Toon.defaultStats.INT
      WIS.innerText=Toon.defaultStats.WIS
      CHA.innerText=Toon.defaultStats.CHA

      statAnchor()

      break;
    case 23://KOBOLD
      
      STR.innerText=Toon.defaultStats.STR-2
      DEX.innerText=Toon.defaultStats.DEX+2
      CON.innerText=Toon.defaultStats.CON
      INT.innerText=Toon.defaultStats.INT
      WIS.innerText=Toon.defaultStats.WIS
      CHA.innerText=Toon.defaultStats.CHA

      statAnchor()

      break;
    case 24://GNOLL
      
      STR.innerText=Toon.defaultStats.STR+2
      DEX.innerText=Toon.defaultStats.DEX
      CON.innerText=Toon.defaultStats.CON+2
      INT.innerText=Toon.defaultStats.INT-2
      WIS.innerText=Toon.defaultStats.WIS
      CHA.innerText=Toon.defaultStats.CHA-2

      statAnchor()

      break;
    case 25://OROG
      
      STR.innerText=Toon.defaultStats.STR+4
      DEX.innerText=Toon.defaultStats.DEX
      CON.innerText=Toon.defaultStats.CON
      INT.innerText=Toon.defaultStats.INT
      WIS.innerText=Toon.defaultStats.WIS-2
      CHA.innerText=Toon.defaultStats.CHA+2

      statAnchor()

      break;
    case 26://HOBGOBLIN
      
      STR.innerText=Toon.defaultStats.STR
      DEX.innerText=Toon.defaultStats.DEX+2
      CON.innerText=Toon.defaultStats.CON+2
      INT.innerText=Toon.defaultStats.INT
      WIS.innerText=Toon.defaultStats.WIS
      CHA.innerText=Toon.defaultStats.CHA

      statAnchor()

      break;
    case 27://OGRE
      
      STR.innerText=Toon.defaultStats.STR+6
      DEX.innerText=Toon.defaultStats.DEX
      CON.innerText=Toon.defaultStats.CON+2
      INT.innerText=Toon.defaultStats.INT-4
      WIS.innerText=Toon.defaultStats.WIS
      CHA.innerText=Toon.defaultStats.CHA-4

      statAnchor()

      break;
    case 28://MINOTAUR
      
      STR.innerText=Toon.defaultStats.STR+4
      DEX.innerText=Toon.defaultStats.DEX
      CON.innerText=Toon.defaultStats.CON+2
      INT.innerText=Toon.defaultStats.INT
      WIS.innerText=Toon.defaultStats.WIS-2
      CHA.innerText=Toon.defaultStats.CHA-2

      statAnchor()

      break;
    case 29://IMP
      
      STR.innerText=Toon.defaultStats.STR-4
      DEX.innerText=Toon.defaultStats.DEX+2
      CON.innerText=Toon.defaultStats.CON
      INT.innerText=Toon.defaultStats.INT
      WIS.innerText=Toon.defaultStats.WIS
      CHA.innerText=Toon.defaultStats.CHA+4

      statAnchor()

      break;
    case 30://TROGLODYTE
      
      STR.innerText=Toon.defaultStats.STR
      DEX.innerText=Toon.defaultStats.DEX
      CON.innerText=Toon.defaultStats.CON+2
      INT.innerText=Toon.defaultStats.INT
      WIS.innerText=Toon.defaultStats.WIS
      CHA.innerText=Toon.defaultStats.CHA+2

      statAnchor()

      break;
    case 31://YUAN-TI
      
      STR.innerText=Toon.defaultStats.STR
      DEX.innerText=Toon.defaultStats.DEX+2
      CON.innerText=Toon.defaultStats.CON
      INT.innerText=Toon.defaultStats.INT+2
      WIS.innerText=Toon.defaultStats.WIS
      CHA.innerText=Toon.defaultStats.CHA+2

      statAnchor()

      break;
    case 32://DERRO
      
      STR.innerText=Toon.defaultStats.STR
      DEX.innerText=Toon.defaultStats.DEX+2
      CON.innerText=Toon.defaultStats.CON+2
      INT.innerText=Toon.defaultStats.INT
      WIS.innerText=Toon.defaultStats.WIS-2
      CHA.innerText=Toon.defaultStats.CHA

      statAnchor()

      break;
    case 33://RAKSHASA
      
      STR.innerText=Toon.defaultStats.STR
      DEX.innerText=Toon.defaultStats.DEX+2
      CON.innerText=Toon.defaultStats.CON
      INT.innerText=Toon.defaultStats.INT
      WIS.innerText=Toon.defaultStats.WIS
      CHA.innerText=Toon.defaultStats.CHA+2

      statAnchor()

      break;
    
    default: 
      console.log('hello');
      break;
  }
}

function classesFromAlignment(){
  switch(DropDownMenus.alignmentMenu.selectedIndex){
    case 0://DEFAULT
      
      break;
    case 1://LG 
      
      break;
    case 2://NG
    
      break;
    case 3://CG
      
      break;
    case 4://LN
      
      break;
    case 5://TN
      
      break;
    case 6://CN
      
      break;
    case 7://LE
      
      break;
    case 8://NE
      
      break;
    case 9://CE
      
      break;
    default: 
    console.log('hello');
    break;
  } 
}

function skillPointCost() {
  let i;
  for (i=0;i<27;i++){
    if (displayedClass.SKILLValues.preferred[i]==0){
      
      SkillButtons[i].className="btn ";
      SkillButtons[i].className+="skillCostProhibited"

    }

    else if (displayedClass.SKILLValues.preferred[i]==1){

      SkillButtons[i].className="btn ";
      SkillButtons[i].className+="skillCostOne"

    }

    else if (displayedClass.SKILLValues.preferred[i]==2){

      SkillButtons[i].className="btn ";
      SkillButtons[i].className+="skillCostTwo"

    }
    
  }

}

function classOneSelection(){
  switch(DropDownMenus.classONE.selectedIndex){
    case 0://DEFAULT
      selectedClassOne=Classes.Null
      displayedClass=selectedClassOne

      break;

    case 1://

      selectedClassOne=Classes.Barbarian
      
      displayedClass=selectedClassOne
      break;

    case 2://

      selectedClassOne=Classes.Bard
      displayedClass=selectedClassOne

      break;

    case 3://

      selectedClassOne=Classes.Cleric
      displayedClass=selectedClassOne

      break;

    case 4://

      selectedClassOne=Classes.Druid
      displayedClass=selectedClassOne

      break;

    case 5://

      selectedClassOne=Classes.Fighter
      displayedClass=selectedClassOne

      break;

    case 6://

      selectedClassOne=Classes.Monk
      displayedClass=selectedClassOne

      break;

    case 7://

      selectedClassOne=Classes.Paladin
      displayedClass=selectedClassOne

      break;

    case 8://

      selectedClassOne=Classes.Ranger
      displayedClass=selectedClassOne

      break;

    case 9://

      selectedClassOne=Classes.Rogue
      displayedClass=selectedClassOne

      break;

    case 10://
      selectedClassOne=Classes.Sorcerer
      displayedClass=selectedClassOne

      break;

    case 11://

      selectedClassOne=Classes.Wizard
      displayedClass=selectedClassOne

      break;

  } 
}

function classTwoSelection(){
  switch(DropDownMenus.classTWO.selectedIndex){
    case 0://DEFAULT
    selectedClassTwo=Classes.Null
    displayedClass=selectedClassTwo


      
      break;
    case 1://

      selectedClassTwo=Classes.Barbarian
      displayedClass=selectedClassTwo

      break;

    case 2://NG
      selectedClassTwo=Classes.Bard
      displayedClass=selectedClassTwo

    break;

    case 3://CG
      selectedClassTwo=Classes.Cleric
      displayedClass=selectedClassTwo

    break;

    case 4://LN
      selectedClassTwo=Classes.Druid
      displayedClass=selectedClassTwo

    break;

    case 5://TN
      selectedClassTwo=Classes.Fighter
      displayedClass=selectedClassTwo

    break;

    case 6://
      selectedClassTwo=Classes.Monk
      displayedClass=selectedClassTwo

    break;

    case 7://
      selectedClassTwo=Classes.Paladin
      displayedClass=selectedClassTwo

    break;

    case 8://
      selectedClassTwo=Classes.Ranger
      displayedClass=selectedClassTwo

    break;

    case 9://
      selectedClassTwo=Classes.Rogue
      displayedClass=selectedClassTwo

    break;

    case 10://
      selectedClassTwo=Classes.Sorcerer
      displayedClass=selectedClassTwo

    break;

    case 11://
      selectedClassTwo=Classes.Wizard
      displayedClass=selectedClassTwo

    break;

  } 
}

function classThreeSelection(){
  switch(DropDownMenus.classTHREE.selectedIndex){
    case 0://DEFAULT
      selectedClassThree=Classes.Null
      displayedClass=selectedClassThree

      break;

    case 1://
        selectedClassThree=Classes.Barbarian
        displayedClass=selectedClassThree

      break;

    case 2://
        selectedClassThree=Classes.Bard
        displayedClass=selectedClassThree

      break;

    case 3://
        selectedClassThree=Classes.Cleric
        displayedClass=selectedClassThree

      break;

    case 4://
        selectedClassThree=Classes.Druid
        displayedClass=selectedClassThree


      break;
    case 5://
        selectedClassThree=Classes.Fighter
        displayedClass=selectedClassThree

      break;

    case 6://
        selectedClassThree=Classes.Monk
        displayedClass=selectedClassThree

      break;

    case 7://
        selectedClassThree=Classes.Paladin
        displayedClass=selectedClassThree

      break;

    case 8://
        selectedClassThree=Classes.Ranger
        displayedClass=selectedClassThree

      break;

    case 9://
        selectedClassThree=Classes.Rogue
        displayedClass=selectedClassThree

      break;

    case 10://
        selectedClassThree=Classes.Sorcerer
        displayedClass=selectedClassThree

      break;

    case 11://
        selectedClassThree=Classes.Wizard
        displayedClass=selectedClassThree

      break;

  } 
}

function giftSTR(){

  switch(STRgift.selectedIndex){
    case 0: 
      STR.innerText=currentStats.STR

      break;
    case 1:
      STR.innerText=currentStats.STR +2;
      break;
  }
}

function giftDEX(){

  switch(DEXgift.selectedIndex){
    case 0: 
      DEX.innerText=currentStats.DEX

      break;
    case 1:
      DEX.innerText=currentStats.DEX +2;
      break;
  }
}

function giftCON(){

  switch(CONgift.selectedIndex){
    case 0: 
      CON.innerText=currentStats.CON

      break;
    case 1:
      CON.innerText=currentStats.CON +2;
      break;
  }
}

function giftINT(){

  switch(INTgift.selectedIndex){
    case 0: 
    INT.innerText=currentStats.INT

      break;
    case 1:
      INT.innerText=currentStats.INT +2;
      break;
  }
}

function giftWIS(){

  switch(WISgift.selectedIndex){
    case 0: 
    WIS.innerText=currentStats.WIS

      break;
    case 1:
      WIS.innerText=currentStats.WIS +2;
      break;
  }
}

function giftCHA(){

  switch(CHAgift.selectedIndex){
    case 0: 
      CHA.innerText=currentStats.CHA

      break;
    case 1:
      CHA.innerText=currentStats.CHA +2;
      break;
  }
}

function skillPointAllocation(pointer){
  if ((Number(SkillPointDisplay.innerText))==0) {

  }

  else {
    switch (displayedClass.SKILLValues.preferred[pointer]) {
      case 0:

        SkillPointDisplay.innerText=Number(SkillPointDisplay.innerText)-0
        SkillValues[pointer].textContent=Number(SkillValues[pointer].textContent)+0

        break;

      case 1:

        SkillPointDisplay.innerText=Number(SkillPointDisplay.innerText)-1
        SkillValues[pointer].textContent=Number(SkillValues[pointer].textContent)+1

        break;

      case 2: 

        SkillPointDisplay.innerText=Number(SkillPointDisplay.innerText)-2
        SkillValues[pointer].textContent=Number(SkillValues[pointer].textContent)+1

        break;

    }
  }
}

// function preferredSkills(CurrentClass){
//   // compare preferred skills in CurentClass to SkillValues array.  If preferred skill value == 0, then color black and not allow use. If == 1, color white and allow use, 1 point at a time. if == 2, color grey and allow use 2 points at a time. //
// }