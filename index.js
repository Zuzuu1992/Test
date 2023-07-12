const calculateTip = (bill, percent, people) => {
  return bill + people * percent;
};

calculateTip(100, 18, 4);
