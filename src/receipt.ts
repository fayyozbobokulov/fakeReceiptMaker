export const receipt = {
  "_id" : "60f15afacc3ac173a9063884",
  "state" : 4,
  "error" : null,
  "type" : 5,
  "external" : false,
  "operation" : -1,
  "create_time" : 1626430207831.0,
  "pay_time" : 1626430208156.0,
  "cancel_time" : 0,
  "merchant" : "606d5fc1f3caf56f28174452",
  "payment_service" : "56e7ce796b6ef347d846e3eb",
  "card" : {
      "number" : "8600510389813994",
      "expire" : "2602"
  },
  "amount" : 5000000,
  "currency" : 860,
  "commission" : 50000,
  "account" : {
      "number" : "9860120112269176",
      "expire" : "2602",
      "cardowner" : "NARGIZA XODJAYEVA",
      "vendor_info" : {
          "name" : "Humo",
          "processing" : "Humo"
      },
      "receiving" : "60f15b0032c52e3619c4f6ee"
  },
  "description" : null,
  "detail" : null,
  "category" : "56e95c616b6e8a6b89845274",
  "meta" : null,
  "account_indexed" : [
      {
          "key" : "number","value" : "9860120112269176"
      },
      {
          "key" : "expire",
          "value" : "2602"
      },
      {
          "key" : "cardowner",
          "value" : "NARGIZA XODJAYEVA"
      },
      {
          "key" : "token"
      },
      {
          "key" : "vendor_info",
          "value" : {
              "name" : "Humo",
              "processing" : "Humo"
          }
      }
  ],
  "payer" : {
      "ip" : "89.146.70.73",
      "agent" : {
          "os" : {
              "name" : "Android",
              "version" : "10"
          },
          "device" : {
              "model" : "Xiaomi M2007J20CG",
              "name" : "",
              "dpi" : "XXHDPI"
          },
          "app" : {
              "version" : "2.24.34",
              "theme" : "dark"
          }
      },
      "id" : "5b91f0850d728f2664d96fef",
      "phone" : "998977252317",
      "lang" : "ru"
  },
  "receivers" : [
      {
          "id" : "60dc5451fb059d65eeadcb07",
          "amount" : 5050000,
          "commission" : 50000,
          "state" : 1,
          "timestamp" : 1626430207867.0,
          "trace" : "558191","rrn" : "011833421596",
          "air" : "863253422",
          "card" : {
              "number" : "8600510389813994",
              "expire" : "2602",
              "token" : "BC1471AF39BBCA65E053D30811ACDB2C"
          },
          "technical" : 1,
          "operation" : -1,
          "processing_id" : 0,
          "ext" : "D_1626430207867_558191",
          "epos" : "0_90488933_92411209",
          "pTime" : "210716151007",
          "pCode" : "421596",
          "pStan" : "332265"
      },
      {
          "id" : "60dc5451fb059d65eeadcb07",
          "amount" : 5000000,
          "commission" : 0,
          "state" : 1,
          "timestamp" : 1626430207867.0,
          "trace" : "029914",
          "rrn" : "119715357133",
          "air" : "265566387",
          "pTime" : "20210716150734",
          "pCode" : "538666",
          "pStan" : null,
          "paymentRef" : null,
          "card" : {
              "number" : "9860120112269176",
              "expire" : "2602"
          },
          "technical" : 1,
          "operation" : 1,
          "processing_id" : 1,
          "ext" : "PAYME_C1626430207867_029914",
          "epos" : "1_011860000118607_2361080S"
      }
  ],
  "is_corporate" : false,
  "processing_id" : 0
}