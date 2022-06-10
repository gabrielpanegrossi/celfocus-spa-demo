function FormatNumberId(number: string) {
  return number.replace(/^(.{3})(.*)$/, '$1 $2');
}

export default FormatNumberId;
