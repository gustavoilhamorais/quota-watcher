function getMoney(str) {
  try {
    let string = str.toString();
    return parseInt(string.replace(/[\D]+/g, ""));
  } catch (error) { return null; }
}

function formatCash(int) {
  var tmp = int + "";
  tmp = tmp.replace(/([0-9]{2})$/g, ",$1");
  if (tmp.length > 6) tmp = tmp.replace(/([0-9]{3}),([0-9]{2}$)/g, ".$1,$2");

  return tmp;
}

export default function moneyMask(money) {
  const convertedMoney = getMoney(money);
  if (convertedMoney) return formatCash(convertedMoney);
  else return convertedMoney;
}
