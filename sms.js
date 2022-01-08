import * as SMS from "expo-sms";

export const sms = (number, message) => {
  const isAvailable = SMS.isAvailableAsync();
  if (isAvailable) {
    SMS.sendSMSAsync(number, message, {});
  }
};
