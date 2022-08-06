import IMask from "imask";

export const phoneMask = IMask.createMask({
  mask: "(00) 00000-0000",
});

export const moneyMask = IMask.createMask({
  mask: Number,
  scale: 2,
  thousandsSeparator: ".",
  radix: ",",
  signed: false,
});
