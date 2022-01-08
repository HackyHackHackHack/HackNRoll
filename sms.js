import * as SMS from "expo-sms";

export const sms = async (number, message) => {
  const isAvailable = await SMS.isAvailableAsync();
  if (isAvailable) {
    await SMS.sendSMSAsync(parseInt(number), message, {});
  }
};
