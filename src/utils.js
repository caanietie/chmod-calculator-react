const constant =  {
  USER: "user",
  GROUP: "group",
  OTHERS: "others",

  ZERO: "0",
  ONE: "1",
  TWO: "2",
  THREE: "3",
  FOUR: "4",
  FIVE: "5",
  SIX: "6",
  SEVEN: "7",

  NO_PERM: "-",
  R_PERM: "r",
  W_PERM: "w",
  X_PERM: "x"
};

const permNumFromStr = str => {
  switch(str){
    case constant.R_PERM: return +constant.FOUR;
    case constant.W_PERM: return +constant.TWO;
    case constant.X_PERM: return +constant.ONE;
    default: return +constant.ZERO; // constant.NO_PERM
  }
};

const permArrayFromNum = permNum => {
  switch(permNum){
    case +constant.FOUR: return [constant.R_PERM, constant.NO_PERM, constant.NO_PERM];
    case +constant.TWO: return [constant.NO_PERM, constant.W_PERM, constant.NO_PERM];
    case +constant.SIX: return [constant.R_PERM, constant.W_PERM, constant.NO_PERM];
    case +constant.ONE: return [constant.NO_PERM, constant.NO_PERM, constant.X_PERM];
    case +constant.FIVE: return [constant.R_PERM, constant.NO_PERM, constant.X_PERM];
    case +constant.THREE: return [constant.NO_PERM, constant.W_PERM, constant.X_PERM];
    case +constant.SEVEN: return [constant.R_PERM, constant.W_PERM, constant.X_PERM];
    default: return [constant.NO_PERM, constant.NO_PERM, constant.NO_PERM];
  }
};

const permNumFromArray = (permObj, user) => {
  return permObj[user].map(str => permNumFromStr(str)).reduce((nm, pm) => nm + pm);
};


export { constant, permNumFromStr, permArrayFromNum, permNumFromArray }; 