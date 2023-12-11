import * as yup from "yup";

// Source: https://stackoverflow.com/questions/19605150/regex-for-password-must-contain-at-least-eight-characters-at-least-one-number-a
// Şifre için Kurallar:
// 1 büyük 1 küçük harf
// 1 sayı
// 1 özel karakter
const passwordRules =
  "^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{5,}$";

export const schema = yup.object().shape({
  email: yup
    .string()
    .email("Please enter a valid email.")
    .required("Required field"),
  age: yup
    .number()
    .positive()
    .min(18, "No under 18s allowed")
    .max(100, "You cannot be older than 100 years")
    .required("Required field"),
  password: yup
    .string()
    .min(5, "Password must be at least 5 characters")
    .matches(passwordRules, "Please enter a stronger password")
    .required("Required field"),
  confirmPassword: yup
    .string()
    // one of: elemanın değeri verilen değerlerden biriyle eşleşiyormu kontrol eder
    .oneOf(
      // ref: farklı bir inputun değerini çağırmaya yarar
      [yup.ref("password")],
      "Password does not match"
    )
    .required("Required field"),
  terms: yup
    .boolean()
    .isTrue("You cannot continue without accepting the conditions."),
});
