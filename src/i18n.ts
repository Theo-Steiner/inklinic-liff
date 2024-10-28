const messages = {
  greeting: "この度は、inklinicをご予約をいただき誠にありがとうございます。",
  inputLabel:
    "ご予約を確定させるため、お客様のお名前をフルネームで以下にご入力ください。",
  inputTip: "（姓と名の間のスペースは不要です）",
  inputPlaceholder: "お客様のお名前",
  buttonLabel: "ご予約の確定",
  errorMessage: "エラーにより送信できません。",
  errorDescription:
    "ご予約を確定するために、お名前をフルネームでトークにお送りください。\nお送りいただいた時点で、予約確定となります。",
  successMessage:
    "【{name}】さまのご予約を確定いたしました。ご来店をお待ちしております。",
  contactRequestLabel: "お問合せ",
  contactRequestMessage: "【お問合せ】",
  contactRequestDescription:
    "まだご予約はしておらず、お問い合わせのみの場合はこちらを押してください",
} as const;

export const t = (
  key: keyof typeof messages,
  params: Record<string, string> = {},
) => {
  let message: string = messages[key];
  for (const [paramKey, paramValue] of Object.entries(params ?? {})) {
    message = message.replace(`{${paramKey}}`, paramValue);
  }
  message = message.replace(/\n/g, "<br>");
  return message;
};
