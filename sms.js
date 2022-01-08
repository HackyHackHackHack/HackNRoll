import * as SMS from "expo-sms";

export const Message = (number, message) => {
  const isAvailable = SMS.isAvailableAsync();
  if (isAvailable) {
    SMS.sendSMSAsync(number, message, {});
  }
};
