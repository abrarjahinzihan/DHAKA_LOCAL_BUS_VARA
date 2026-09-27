const routes = [
{
  "id": "A101",
  "routeNo": "এ-১০১",
  "nameBn": "কালশী → কাঁচপুরব্রীজ",
  "nameEn": "Kalshi → Kachpur Bridge",
  "totalKm": 28.8,
  "stops": [
    {
      "id": 0,
      "nameEn": "Kalshi",
      "nameBn": "কালশী",
      "aliases": [
        "kalshi",
        "kalsi",
        "কালশী",
        "কালশি"
      ]
    },
    {
      "id": 1,
      "nameEn": "Mirpur-12",
      "nameBn": "মিরপুর-১২",
      "aliases": [
        "mirpur-12",
        "mirpur 12",
        "mirpur12",
        "মিরপুর-১২",
        "মিরপুর ১২",
        "মিরপুর১২"
      ]
    },
    {
      "id": 2,
      "nameEn": "Mirpur-10",
      "nameBn": "মিরপুর-১০",
      "aliases": [
        "mirpur-10",
        "mirpur 10",
        "mirpur10",
        "মিরপুর-১০",
        "মিরপুর ১০",
        "মিরপুর১০"
      ]
    },
    {
      "id": 3,
      "nameEn": "Kazipara",
      "nameBn": "কাজীপাড়া",
      "aliases": [
        "kazipara",
        "kazi para",
        "কাজীপাড়া",
        "কাজি পাড়া",
        "কাজিপাড়া"
      ]
    },
    {
      "id": 4,
      "nameEn": "Sheorapara",
      "nameBn": "শেওড়াপাড়া",
      "aliases": [
        "sheorapara",
        "sheora para",
        "শেওড়াপাড়া",
        "শেওড়া পাড়া"
      ]
    },
    {
      "id": 5,
      "nameEn": "Farmgate",
      "nameBn": "ফার্মগেট",
      "aliases": [
        "farmgate",
        "farm gate",
        "ফার্মগেট",
        "ফার্ম গেট"
      ]
    },
    {
      "id": 6,
      "nameEn": "Shahbag",
      "nameBn": "শাহবাগ",
      "aliases": [
        "shahbag",
        "shabag",
        "শাহবাগ",
        "শাহ বাগ"
      ]
    },
    {
      "id": 7,
      "nameEn": "Palton",
      "nameBn": "পল্টন",
      "aliases": [
        "palton",
        "পল্টন"
      ]
    },
    {
      "id": 8,
      "nameEn": "Gulistan",
      "nameBn": "গুলিস্তান",
      "aliases": [
        "gulistan",
        "গুলিস্তান",
        "গুলিস্থান"
      ]
    },
    {
      "id": 9,
      "nameEn": "Tikatuli",
      "nameBn": "টিকাটুলি",
      "aliases": [
        "tikatuli",
        "tika tuli",
        "টিকাটুলি",
        "টিকা টুলি"
      ]
    },
    {
      "id": 10,
      "nameEn": "Sayedabad",
      "nameBn": "সায়দাবাদ",
      "aliases": [
        "sayedabad",
        "saydabad",
        "সায়দাবাদ",
        "সাইদাবাদ",
        "সায়েদাবাদ"
      ]
    },
    {
      "id": 11,
      "nameEn": "Jatrabari",
      "nameBn": "যাত্রাবাড়ী",
      "aliases": [
        "jatrabari",
        "jatra bari",
        "যাত্রাবাড়ী",
        "যাত্রাবাড়ি",
        "যাত্রা বাড়ী"
      ]
    },
    {
      "id": 12,
      "nameEn": "Signboard",
      "nameBn": "সাইনবোর্ড",
      "aliases": [
        "signboard",
        "sign board",
        "সাইনবোর্ড",
        "সাইন বোর্ড"
      ]
    },
    {
      "id": 13,
      "nameEn": "Kanchpur Bridge",
      "nameBn": "কাঁচপুর ব্রীজ",
      "aliases": [
        "kachpur bridge",
        "kachpur",
        "kachpurbridge",
        "কাঁচপুরব্রীজ",
        "কাচপুর ব্রিজ",
        "কাঁচপুর ব্রিজ",
        "কাচপুর",
        "কাঁচপুর ব্রীজ",
        "kanchpur bridge",
        "kanchpur"
      ]
    }
  ],
  "fareMatrix": [
    [
      0,
      10,
      13,
      16,
      18,
      31,
      37,
      42,
      45,
      48,
      51,
      54,
      67,
      78
    ],
    [
      10,
      0,
      10,
      10,
      12,
      25,
      31,
      36,
      39,
      42,
      45,
      48,
      61,
      72
    ],
    [
      13,
      10,
      0,
      10,
      10,
      18,
      24,
      29,
      32,
      35,
      38,
      41,
      54,
      65
    ],
    [
      16,
      10,
      10,
      0,
      10,
      12,
      21,
      26,
      28,
      32,
      35,
      38,
      50,
      61
    ],
    [
      18,
      12,
      10,
      10,
      0,
      10,
      19,
      24,
      26,
      30,
      33,
      35,
      48,
      59
    ],
    [
      31,
      25,
      18,
      12,
      10,
      0,
      10,
      11,
      18,
      17,
      20,
      23,
      36,
      47
    ],
    [
      37,
      31,
      24,
      21,
      19,
      10,
      0,
      10,
      10,
      11,
      14,
      19,
      30,
      41
    ],
    [
      42,
      36,
      29,
      26,
      24,
      11,
      10,
      0,
      10,
      10,
      10,
      12,
      25,
      36
    ],
    [
      45,
      39,
      32,
      28,
      26,
      18,
      10,
      10,
      0,
      10,
      10,
      10,
      22,
      33
    ],
    [
      48,
      42,
      35,
      32,
      30,
      17,
      11,
      10,
      10,
      0,
      10,
      10,
      19,
      30
    ],
    [
      51,
      45,
      38,
      35,
      33,
      20,
      14,
      10,
      10,
      10,
      0,
      10,
      16,
      27
    ],
    [
      54,
      48,
      41,
      38,
      35,
      23,
      19,
      12,
      10,
      10,
      10,
      0,
      13,
      24
    ],
    [
      67,
      61,
      54,
      50,
      48,
      36,
      30,
      25,
      22,
      19,
      16,
      13,
      0,
      11
    ],
    [
      78,
      72,
      65,
      61,
      59,
      47,
      41,
      36,
      33,
      30,
      27,
      24,
      11,
      0
    ]
  ]
},
{
  "id": "A102",
  "routeNo": "এ-১০২",
  "nameBn": "পল্লবী → ভিক্টোরিয়া পার্ক",
  "nameEn": "Pallabi → Victoria Park",
  "totalKm": 16.9,
  "stops": [
    {
      "id": 0,
      "nameEn": "Pallabi",
      "nameBn": "পল্লবী (মিরপুর-১২)",
      "aliases": [
        "pallabi",
        "pallabi mirpur",
        "পল্লবী",
        "পল্লবী মিরপুর",
        "pallbi"
      ]
    },
    {
      "id": 1,
      "nameEn": "Mirpur-11 3/2",
      "nameBn": "মিরপুর-১১ ৩/২",
      "aliases": [
        "mirpur 11 3/2",
        "mirpur-11 3/2",
        "mirpur11-3/2",
        "মিরপুর-১১ ৩/২",
        "মিরপুর ১১ ৩/২"
      ]
    },
    {
      "id": 2,
      "nameEn": "Bekali Hotel",
      "nameBn": "বেকালী হোটেল",
      "aliases": [
        "bekali hotel",
        "bekali",
        "বেকালী হোটেল",
        "বেকালি হোটেল",
        "বেকালী"
      ]
    },
    {
      "id": 3,
      "nameEn": "Mirpur-11",
      "nameBn": "মিরপুর-১১",
      "aliases": [
        "mirpur-11",
        "mirpur 11",
        "mirpur11",
        "মিরপুর-১১",
        "মিরপুর ১১",
        "মিরপুর১১"
      ]
    },
    {
      "id": 4,
      "nameEn": "Mirpur-10",
      "nameBn": "মিরপুর-১০",
      "aliases": [
        "mirpur-10",
        "mirpur 10",
        "mirpur10",
        "মিরপুর-১০",
        "মিরপুর ১০",
        "মিরপুর১০"
      ]
    },
    {
      "id": 5,
      "nameEn": "Kazipara",
      "nameBn": "কাজীপাড়া",
      "aliases": [
        "kazipara",
        "kazi para",
        "কাজীপাড়া",
        "কাজি পাড়া",
        "কাজিপাড়া"
      ]
    },
    {
      "id": 6,
      "nameEn": "Farmgate",
      "nameBn": "ফার্মগেট",
      "aliases": [
        "farmgate",
        "farm gate",
        "ফার্মগেট",
        "ফার্ম গেট"
      ]
    },
    {
      "id": 7,
      "nameEn": "Pressclub",
      "nameBn": "প্রেসক্লাব",
      "aliases": [
        "pressclub",
        "press club",
        "প্রেসক্লাব",
        "প্রেস ক্লাব"
      ]
    },
    {
      "id": 8,
      "nameEn": "TNT",
      "nameBn": "টিএন্ডটি",
      "aliases": [
        "tnt",
        "t&t",
        "tnt office",
        "টিএন্ডটি",
        "টি এন্ড টি"
      ]
    },
    {
      "id": 9,
      "nameEn": "Raysaheb Bazar",
      "nameBn": "রায়সাহেব বাজার",
      "aliases": [
        "raysaheb bazar",
        "ray saheb bazar",
        "রায়সাহেব বাজার",
        "রায় সাহেব বাজার",
        "raysaheb",
        "raysahib"
      ]
    },
    {
      "id": 10,
      "nameEn": "Victoria Park",
      "nameBn": "ভিক্টোরিয়া পার্ক",
      "aliases": [
        "victoria park",
        "victoria",
        "ভিক্টোরিয়া পার্ক",
        "ভিক্টোরিয়া",
        "bahadur shah park"
      ]
    }
  ],
  "fareMatrix": [
    [
      0,
      10,
      10,
      10,
      10,
      10,
      24,
      36,
      40,
      42,
      46
    ],
    [
      10,
      0,
      10,
      10,
      10,
      10,
      23,
      35,
      39,
      41,
      45
    ],
    [
      10,
      10,
      0,
      10,
      10,
      10,
      22,
      34,
      38,
      41,
      45
    ],
    [
      10,
      10,
      10,
      0,
      10,
      10,
      21,
      32,
      36,
      39,
      43
    ],
    [
      10,
      10,
      10,
      10,
      0,
      10,
      18,
      29,
      33,
      36,
      39
    ],
    [
      10,
      10,
      10,
      10,
      10,
      0,
      14,
      26,
      30,
      32,
      36
    ],
    [
      24,
      23,
      22,
      21,
      18,
      14,
      0,
      11,
      15,
      18,
      21
    ],
    [
      36,
      35,
      34,
      32,
      29,
      26,
      11,
      0,
      10,
      10,
      10
    ],
    [
      40,
      39,
      38,
      36,
      33,
      30,
      15,
      10,
      0,
      10,
      10
    ],
    [
      42,
      41,
      41,
      39,
      36,
      32,
      18,
      10,
      10,
      0,
      10
    ],
    [
      46,
      45,
      45,
      43,
      39,
      36,
      21,
      10,
      10,
      10,
      0
    ]
  ]
},
{
  "id": "A105",
  "routeNo": "এ-১০৫",
  "nameBn": "দুয়ারীপাড়া → ঢাকেশ্বরী মন্দির",
  "nameEn": "Duyaripara → Dhakeshwari Mandir",
  "totalKm": 15.1,
  "stops": [
    {
      "id": 0,
      "nameEn": "Duyaripara",
      "nameBn": "দুয়ারীপাড়া",
      "aliases": [
        "duyaripara",
        "duaripara",
        "দুয়ারীপাড়া",
        "দুয়ারি পাড়া",
        "দুয়ারিপাড়া"
      ]
    },
    {
      "id": 1,
      "nameEn": "Mirpur-12",
      "nameBn": "মিরপুর-১২",
      "aliases": [
        "mirpur-12",
        "mirpur 12",
        "mirpur12",
        "মিরপুর-১২",
        "মিরপুর ১২",
        "মিরপুর১২"
      ]
    },
    {
      "id": 2,
      "nameEn": "Mirpur Sade 11",
      "nameBn": "মিরপুর সাড়ে ১১",
      "aliases": [
        "mirpur sade 11",
        "mirpur 11.5",
        "mirpur sare 11",
        "মিরপুর সাড়ে ১১",
        "মিরপুর সাড়ে এগারো"
      ]
    },
    {
      "id": 3,
      "nameEn": "Bekali Hotel",
      "nameBn": "বেকালী হোটেল",
      "aliases": [
        "bekali hotel",
        "bekali",
        "বেকালী হোটেল",
        "বেকালি হোটেল",
        "বেকালী"
      ]
    },
    {
      "id": 4,
      "nameEn": "Mirpur-11",
      "nameBn": "মিরপুর-১১",
      "aliases": [
        "mirpur-11",
        "mirpur 11",
        "mirpur11",
        "মিরপুর-১১",
        "মিরপুর ১১",
        "মিরপুর১১"
      ]
    },
    {
      "id": 5,
      "nameEn": "Mirpur-10",
      "nameBn": "মিরপুর-১০",
      "aliases": [
        "mirpur-10",
        "mirpur 10",
        "mirpur10",
        "মিরপুর-১০",
        "মিরপুর ১০",
        "মিরপুর১০"
      ]
    },
    {
      "id": 6,
      "nameEn": "Kazipara",
      "nameBn": "কাজীপাড়া",
      "aliases": [
        "kazipara",
        "kazi para",
        "কাজীপাড়া",
        "কাজি পাড়া",
        "কাজিপাড়া"
      ]
    },
    {
      "id": 7,
      "nameEn": "Sheorapara",
      "nameBn": "শেওড়াপাড়া",
      "aliases": [
        "sheorapara",
        "sheora para",
        "শেওড়াপাড়া",
        "শেওড়া পাড়া"
      ]
    },
    {
      "id": 8,
      "nameEn": "Agargaon",
      "nameBn": "আগারগাঁও",
      "aliases": [
        "agargaon",
        "agar gaon",
        "আগারগাঁও",
        "আগার গাঁও",
        "আগারগাও"
      ]
    },
    {
      "id": 9,
      "nameEn": "Dhanmondi",
      "nameBn": "ধানমন্ডি",
      "aliases": [
        "dhanmondi",
        "dhan mondi",
        "ধানমন্ডি",
        "ধান মন্ডি"
      ]
    },
    {
      "id": 10,
      "nameEn": "Shukrabad",
      "nameBn": "শুক্রাবাদ",
      "aliases": [
        "shukrabad",
        "sukrabad",
        "শুক্রাবাদ",
        "শুক্রা বাদ"
      ]
    },
    {
      "id": 11,
      "nameEn": "Dhakeshwari Mandir",
      "nameBn": "ঢাকেশ্বরী মন্দির",
      "aliases": [
        "dhakeshwari mandir",
        "dhakeshwari",
        "dhakeshori",
        "ঢাকেশ্বরী মন্দির",
        "ঢাকেশ্বরী",
        "ঢাকেশ্বরি মন্দির"
      ]
    }
  ],
  "fareMatrix": [
    [
      0,
      10,
      10,
      10,
      10,
      10,
      12,
      14,
      19,
      29,
      30,
      41
    ],
    [
      10,
      0,
      10,
      10,
      10,
      10,
      10,
      12,
      16,
      26,
      28,
      38
    ],
    [
      10,
      10,
      0,
      10,
      10,
      10,
      10,
      11,
      15,
      25,
      26,
      37
    ],
    [
      10,
      10,
      10,
      0,
      10,
      10,
      10,
      10,
      14,
      24,
      25,
      36
    ],
    [
      10,
      10,
      10,
      10,
      0,
      10,
      10,
      10,
      13,
      22,
      23,
      35
    ],
    [
      10,
      10,
      10,
      10,
      10,
      0,
      10,
      10,
      10,
      20,
      21,
      32
    ],
    [
      12,
      10,
      10,
      10,
      10,
      10,
      0,
      10,
      10,
      16,
      16,
      28
    ],
    [
      14,
      12,
      11,
      10,
      10,
      10,
      10,
      0,
      10,
      14,
      14,
      26
    ],
    [
      19,
      16,
      15,
      14,
      13,
      10,
      10,
      10,
      0,
      10,
      11,
      22
    ],
    [
      29,
      26,
      25,
      24,
      22,
      20,
      16,
      14,
      10,
      0,
      10,
      12
    ],
    [
      30,
      28,
      26,
      25,
      23,
      21,
      16,
      14,
      11,
      10,
      0,
      11
    ],
    [
      41,
      38,
      37,
      36,
      35,
      32,
      28,
      26,
      22,
      12,
      11,
      0
    ]
  ]
},
{
  "id": "A110",
  "routeNo": "এ-১১০",
  "nameBn": "দুয়ারীপাড়া → গুলিস্তান",
  "nameEn": "Duyaripara → Gulistan",
  "totalKm": 16.7,
  "stops": [
    {
      "id": 0,
      "nameEn": "Duyaripara",
      "nameBn": "দুয়ারীপাড়া",
      "aliases": [
        "duyaripara",
        "দুয়ারীপাড়া"
      ]
    },
    {
      "id": 1,
      "nameEn": "Proshika",
      "nameBn": "প্রশিকা",
      "aliases": [
        "proshika",
        "প্রশিকা"
      ]
    },
    {
      "id": 2,
      "nameEn": "Mirpur Thana",
      "nameBn": "মিরপুর থানা",
      "aliases": [
        "mirpur thana",
        "মিরপুর থানা"
      ]
    },
    {
      "id": 3,
      "nameEn": "Mirpur-1",
      "nameBn": "মিরপুর-১",
      "aliases": [
        "mirpur-1",
        "মিরপুর-১"
      ]
    },
    {
      "id": 4,
      "nameEn": "Ansarcamp",
      "nameBn": "আনসারক্যাম্প",
      "aliases": [
        "ansarcamp",
        "আনসারক্যাম্প"
      ]
    },
    {
      "id": 5,
      "nameEn": "Technical",
      "nameBn": "টেকনিক্যাল",
      "aliases": [
        "technical",
        "টেকনিক্যাল"
      ]
    },
    {
      "id": 6,
      "nameEn": "Asadgate",
      "nameBn": "আসাদগেট",
      "aliases": [
        "asadgate",
        "আসাদগেট"
      ]
    },
    {
      "id": 7,
      "nameEn": "Science Lab",
      "nameBn": "সায়েন্সল্যাব",
      "aliases": [
        "science lab",
        "সায়েন্সল্যাব"
      ]
    },
    {
      "id": 8,
      "nameEn": "BUET",
      "nameBn": "বুয়েট",
      "aliases": [
        "buet",
        "বুয়েট"
      ]
    },
    {
      "id": 9,
      "nameEn": "Gulistan",
      "nameBn": "গুলিস্তান",
      "aliases": [
        "gulistan",
        "গুলিস্তান"
      ]
    }
  ],
  "fareMatrix": [
    [
      0,
      10,
      10,
      10,
      12,
      15,
      25,
      32,
      40,
      45
    ],
    [
      10,
      0,
      10,
      10,
      10,
      10,
      19,
      26,
      35,
      40
    ],
    [
      10,
      10,
      0,
      10,
      10,
      10,
      18,
      25,
      34,
      39
    ],
    [
      10,
      10,
      10,
      0,
      10,
      10,
      15,
      22,
      30,
      35
    ],
    [
      12,
      10,
      10,
      10,
      0,
      10,
      12,
      19,
      28,
      33
    ],
    [
      15,
      10,
      10,
      10,
      10,
      0,
      10,
      17,
      25,
      30
    ],
    [
      25,
      19,
      18,
      15,
      12,
      10,
      0,
      10,
      16,
      21
    ],
    [
      32,
      26,
      25,
      22,
      19,
      17,
      10,
      0,
      10,
      13
    ],
    [
      40,
      35,
      34,
      30,
      28,
      25,
      16,
      10,
      0,
      10
    ],
    [
      45,
      40,
      39,
      35,
      33,
      30,
      21,
      13,
      10,
      0
    ]
  ]
},
{
  "id": "A111",
  "routeNo": "এ-১১১",
  "nameBn": "পল্লবী (সিরামিক) → দিলকুশা",
  "nameEn": "Pallabi (Ceramic) → Dilkusha",
  "totalKm": 17,
  "stops": [
    {
      "id": 0,
      "nameEn": "Pallabi Ceramic",
      "nameBn": "পল্লবী (সিরামিক)",
      "aliases": [
        "pallabi ceramic",
        "পল্লবী সিরামিক",
        "পল্লবী (সিরামিক)"
      ]
    },
    {
      "id": 1,
      "nameEn": "Mirpur-11 1/2",
      "nameBn": "মিরপুর-১১ ১/২",
      "aliases": [
        "mirpur-11 1/2",
        "মিরপুর-১১ ১/২"
      ]
    },
    {
      "id": 2,
      "nameEn": "Bekali Hotel",
      "nameBn": "বেকালী হোটেল",
      "aliases": [
        "bekali hotel",
        "বেকালী হোটেল"
      ]
    },
    {
      "id": 3,
      "nameEn": "Mirpur-11",
      "nameBn": "মিরপুর-১১",
      "aliases": [
        "mirpur-11",
        "মিরপুর-১১"
      ]
    },
    {
      "id": 4,
      "nameEn": "Mirpur-10",
      "nameBn": "মিরপুর-১০",
      "aliases": [
        "mirpur-10",
        "মিরপুর-১০"
      ]
    },
    {
      "id": 5,
      "nameEn": "Kazipara",
      "nameBn": "কাজীপাড়া",
      "aliases": [
        "kazipara",
        "কাজীপাড়া"
      ]
    },
    {
      "id": 6,
      "nameEn": "Farmgate",
      "nameBn": "ফার্মগেট",
      "aliases": [
        "farmgate",
        "ফার্মগেট"
      ]
    },
    {
      "id": 7,
      "nameEn": "Palton",
      "nameBn": "পল্টন",
      "aliases": [
        "palton",
        "পল্টন"
      ]
    },
    {
      "id": 8,
      "nameEn": "Stadium",
      "nameBn": "স্টেডিয়াম",
      "aliases": [
        "stadium",
        "স্টেডিয়াম"
      ]
    },
    {
      "id": 9,
      "nameEn": "Notre Dame College",
      "nameBn": "নটরড্যাম কলেজ",
      "aliases": [
        "notre dame college",
        "নটরড্যাম কলেজ"
      ]
    }
  ],
  "fareMatrix": [
    [
      0,
      10,
      10,
      10,
      10,
      10,
      24,
      36,
      37,
      46
    ],
    [
      10,
      0,
      10,
      10,
      10,
      10,
      22,
      35,
      35,
      44
    ],
    [
      10,
      10,
      0,
      10,
      10,
      10,
      21,
      33,
      34,
      43
    ],
    [
      10,
      10,
      10,
      0,
      10,
      10,
      20,
      32,
      33,
      42
    ],
    [
      10,
      10,
      10,
      10,
      0,
      10,
      17,
      29,
      30,
      39
    ],
    [
      10,
      10,
      10,
      10,
      10,
      0,
      14,
      26,
      29,
      36
    ],
    [
      24,
      22,
      21,
      20,
      17,
      14,
      0,
      12,
      13,
      22
    ],
    [
      36,
      35,
      33,
      32,
      29,
      26,
      12,
      0,
      10,
      10
    ],
    [
      37,
      35,
      34,
      33,
      30,
      29,
      13,
      10,
      0,
      10
    ],
    [
      46,
      44,
      43,
      42,
      39,
      36,
      22,
      10,
      10,
      0
    ]
  ]
},
{
  "id": "A114",
  "routeNo": "এ-১১৪",
  "nameBn": "মিরপুর (চিড়িয়াখানা) → সায়েদাবাদ",
  "nameEn": "Chiriakhana → Sayedabad",
  "totalKm": 18.3,
  "stops": [
    {
      "id": 0,
      "nameEn": "Chiriakhana",
      "nameBn": "চিড়িয়াখানা",
      "aliases": [
        "chiriakhana",
        "চিড়িয়াখানা",
        "মিরপুর চিড়িয়াখানা"
      ]
    },
    {
      "id": 1,
      "nameEn": "Mirpur-1",
      "nameBn": "মিরপুর-১",
      "aliases": [
        "mirpur-1",
        "মিরপুর-১"
      ]
    },
    {
      "id": 2,
      "nameEn": "Ansarcamp",
      "nameBn": "আনসারক্যাম্প",
      "aliases": [
        "ansarcamp",
        "আনসারক্যাম্প"
      ]
    },
    {
      "id": 3,
      "nameEn": "Darus Salam",
      "nameBn": "দারুসসালাম",
      "aliases": [
        "darus salam",
        "দারুসসালাম"
      ]
    },
    {
      "id": 4,
      "nameEn": "Kalyanpur",
      "nameBn": "কল্যাণপুর",
      "aliases": [
        "kalyanpur",
        "কল্যাণপুর"
      ]
    },
    {
      "id": 5,
      "nameEn": "Shyamoli",
      "nameBn": "শ্যামলী",
      "aliases": [
        "shyamoli",
        "শ্যামলী"
      ]
    },
    {
      "id": 6,
      "nameEn": "College Gate",
      "nameBn": "কলেজগেট",
      "aliases": [
        "college gate",
        "কলেজগেট"
      ]
    },
    {
      "id": 7,
      "nameEn": "Asadgate",
      "nameBn": "আসাদগেট",
      "aliases": [
        "asadgate",
        "আসাদগেট"
      ]
    },
    {
      "id": 8,
      "nameEn": "Farmgate",
      "nameBn": "ফার্মগেট",
      "aliases": [
        "farmgate",
        "ফার্মগেট"
      ]
    },
    {
      "id": 9,
      "nameEn": "Kawran Bazar",
      "nameBn": "কাওরানবাজার",
      "aliases": [
        "kawran bazar",
        "কাওরানবাজার"
      ]
    },
    {
      "id": 10,
      "nameEn": "Shahbag",
      "nameBn": "শাহবাগ",
      "aliases": [
        "shahbag",
        "শাহবাগ"
      ]
    },
    {
      "id": 11,
      "nameEn": "Pressclub",
      "nameBn": "প্রেসক্লাব",
      "aliases": [
        "pressclub",
        "প্রেসক্লাব"
      ]
    },
    {
      "id": 12,
      "nameEn": "Stadium",
      "nameBn": "স্টেডিয়াম",
      "aliases": [
        "stadium",
        "স্টেডিয়াম"
      ]
    },
    {
      "id": 13,
      "nameEn": "Ittefaq",
      "nameBn": "ইত্তেফাক",
      "aliases": [
        "ittefaq",
        "ইত্তেফাক"
      ]
    },
    {
      "id": 14,
      "nameEn": "Sayedabad",
      "nameBn": "সায়েদাবাদ",
      "aliases": [
        "sayedabad",
        "সায়েদাবাদ"
      ]
    }
  ],
  "fareMatrix": [
    [
      0,
      10,
      10,
      10,
      14,
      15,
      17,
      19,
      24,
      27,
      31,
      35,
      38,
      46,
      49
    ],
    [
      10,
      0,
      10,
      10,
      10,
      10,
      12,
      15,
      19,
      22,
      26,
      31,
      33,
      42,
      45
    ],
    [
      10,
      10,
      0,
      10,
      10,
      10,
      10,
      12,
      17,
      20,
      23,
      28,
      31,
      39,
      42
    ],
    [
      10,
      10,
      10,
      0,
      10,
      10,
      10,
      10,
      14,
      17,
      21,
      25,
      28,
      36,
      39
    ],
    [
      14,
      10,
      10,
      10,
      0,
      10,
      10,
      10,
      11,
      14,
      17,
      22,
      25,
      33,
      36
    ],
    [
      15,
      10,
      10,
      10,
      10,
      0,
      10,
      10,
      10,
      12,
      16,
      21,
      23,
      32,
      35
    ],
    [
      17,
      12,
      10,
      10,
      10,
      10,
      0,
      10,
      10,
      10,
      14,
      18,
      21,
      29,
      32
    ],
    [
      19,
      15,
      12,
      10,
      10,
      10,
      10,
      0,
      10,
      10,
      11,
      16,
      19,
      27,
      30
    ],
    [
      24,
      19,
      17,
      14,
      11,
      10,
      10,
      10,
      0,
      10,
      10,
      11,
      14,
      22,
      25
    ],
    [
      27,
      22,
      20,
      17,
      14,
      12,
      10,
      10,
      10,
      0,
      10,
      10,
      11,
      19,
      22
    ],
    [
      31,
      26,
      23,
      21,
      17,
      16,
      14,
      11,
      10,
      10,
      0,
      10,
      10,
      16,
      19
    ],
    [
      35,
      31,
      28,
      25,
      22,
      21,
      18,
      16,
      11,
      10,
      10,
      0,
      10,
      11,
      14
    ],
    [
      38,
      33,
      31,
      28,
      25,
      23,
      21,
      19,
      14,
      11,
      10,
      10,
      0,
      10,
      11
    ],
    [
      46,
      42,
      39,
      36,
      33,
      32,
      29,
      27,
      22,
      19,
      16,
      11,
      10,
      0,
      10
    ],
    [
      49,
      45,
      42,
      39,
      36,
      35,
      32,
      30,
      25,
      22,
      19,
      14,
      11,
      10,
      0
    ]
  ]
},
{
  "id": "A115",
  "routeNo": "এ-১১৫",
  "nameBn": "মিরপুর-১ → যাত্রাবাড়ী",
  "nameEn": "Mirpur-1 → Jatrabari",
  "totalKm": 17.6,
  "stops": [
    {
      "id": 0,
      "nameEn": "Mirpur-1",
      "nameBn": "মিরপুর-১",
      "aliases": [
        "mirpur-1",
        "মিরপুর-১",
        "বৈশাখী সুপার মার্কেট"
      ]
    },
    {
      "id": 1,
      "nameEn": "Ansarcamp",
      "nameBn": "আনসার ক্যাম্প",
      "aliases": [
        "ansarcamp",
        "আনসার ক্যাম্প",
        "আনসারক্যাম্প"
      ]
    },
    {
      "id": 2,
      "nameEn": "Technical",
      "nameBn": "টেকনিক্যাল",
      "aliases": [
        "technical",
        "টেকনিক্যাল"
      ]
    },
    {
      "id": 3,
      "nameEn": "Kalyanpur",
      "nameBn": "কল্যাণপুর",
      "aliases": [
        "kalyanpur",
        "কল্যাণপুর"
      ]
    },
    {
      "id": 4,
      "nameEn": "Shyamoli",
      "nameBn": "শ্যামলী",
      "aliases": [
        "shyamoli",
        "শ্যামলী"
      ]
    },
    {
      "id": 5,
      "nameEn": "College Gate",
      "nameBn": "কলেজগেট",
      "aliases": [
        "college gate",
        "কলেজগেট"
      ]
    },
    {
      "id": 6,
      "nameEn": "Shukrabad",
      "nameBn": "শুক্রাবাদ",
      "aliases": [
        "shukrabad",
        "শুক্রাবাদ"
      ]
    },
    {
      "id": 7,
      "nameEn": "Kalabagan",
      "nameBn": "কলাবাগান",
      "aliases": [
        "kalabagan",
        "কলাবাগান"
      ]
    },
    {
      "id": 8,
      "nameEn": "Science Lab",
      "nameBn": "সায়েন্সল্যাব",
      "aliases": [
        "science lab",
        "সায়েন্সল্যাব"
      ]
    },
    {
      "id": 9,
      "nameEn": "Kataban",
      "nameBn": "কাঁটাবন",
      "aliases": [
        "kataban",
        "কাঁটাবন"
      ]
    },
    {
      "id": 10,
      "nameEn": "Shahbag",
      "nameBn": "শাহবাগ",
      "aliases": [
        "shahbag",
        "শাহবাগ"
      ]
    },
    {
      "id": 11,
      "nameEn": "Pressclub",
      "nameBn": "প্রেসক্লাব",
      "aliases": [
        "pressclub",
        "প্রেসক্লাব"
      ]
    },
    {
      "id": 12,
      "nameEn": "Gulistan Mor",
      "nameBn": "গুলিস্তান মোড়",
      "aliases": [
        "gulistan mor",
        "gulistan",
        "গুলিস্তান",
        "গুলিস্তান মোড়"
      ]
    },
    {
      "id": 13,
      "nameEn": "Bangladesh Bank",
      "nameBn": "বাংলাদেশ ব্যাংক",
      "aliases": [
        "bangladesh bank",
        "বাংলাদেশ ব্যাংক"
      ]
    },
    {
      "id": 14,
      "nameEn": "Jatrabari",
      "nameBn": "যাত্রাবাড়ী",
      "aliases": [
        "jatrabari",
        "যাত্রাবাড়ী"
      ]
    }
  ],
  "fareMatrix": [
    [
      0,
      10,
      10,
      10,
      10,
      12,
      18,
      20,
      23,
      25,
      26,
      31,
      34,
      37,
      48
    ],
    [
      10,
      0,
      10,
      10,
      10,
      10,
      16,
      17,
      20,
      22,
      23,
      28,
      31,
      35,
      45
    ],
    [
      10,
      10,
      0,
      10,
      10,
      10,
      12,
      14,
      17,
      19,
      20,
      25,
      28,
      31,
      42
    ],
    [
      10,
      10,
      10,
      0,
      10,
      10,
      10,
      11,
      14,
      16,
      18,
      22,
      25,
      29,
      39
    ],
    [
      10,
      10,
      10,
      10,
      0,
      10,
      10,
      10,
      12,
      15,
      16,
      21,
      23,
      27,
      37
    ],
    [
      12,
      10,
      10,
      10,
      10,
      0,
      10,
      10,
      10,
      13,
      14,
      19,
      21,
      25,
      35
    ],
    [
      18,
      16,
      12,
      10,
      10,
      10,
      0,
      10,
      10,
      10,
      10,
      13,
      15,
      19,
      29
    ],
    [
      20,
      17,
      14,
      11,
      10,
      10,
      10,
      0,
      10,
      10,
      10,
      11,
      14,
      17,
      28
    ],
    [
      23,
      20,
      17,
      14,
      12,
      10,
      10,
      10,
      0,
      10,
      10,
      10,
      11,
      15,
      25
    ],
    [
      25,
      22,
      19,
      16,
      15,
      13,
      10,
      10,
      10,
      0,
      10,
      10,
      10,
      12,
      22
    ],
    [
      26,
      23,
      20,
      18,
      16,
      14,
      10,
      10,
      10,
      10,
      0,
      10,
      10,
      11,
      21
    ],
    [
      31,
      28,
      25,
      22,
      21,
      19,
      13,
      11,
      10,
      10,
      10,
      0,
      10,
      10,
      16
    ],
    [
      34,
      31,
      28,
      25,
      23,
      21,
      15,
      14,
      11,
      10,
      10,
      10,
      0,
      10,
      14
    ],
    [
      37,
      35,
      31,
      29,
      27,
      25,
      19,
      17,
      15,
      12,
      11,
      10,
      10,
      0,
      10
    ],
    [
      48,
      45,
      42,
      39,
      37,
      35,
      29,
      28,
      25,
      22,
      21,
      16,
      14,
      10,
      0
    ]
  ]
},
{
  "id": "A119",
  "routeNo": "এ-১১৯",
  "nameBn": "দুয়ারীপাড়া → ভিক্টোরিয়া পার্ক",
  "nameEn": "Duyaripara → Victoria Park",
  "totalKm": 18.3,
  "stops": [
    {
      "id": 0,
      "nameEn": "Duyaripara",
      "nameBn": "দুয়ারীপাড়া",
      "aliases": [
        "duyaripara",
        "দুয়ারীপাড়া"
      ]
    },
    {
      "id": 1,
      "nameEn": "Pallabi",
      "nameBn": "পল্লবী (মিরপুর-১২)",
      "aliases": [
        "pallabi",
        "পল্লবী"
      ]
    },
    {
      "id": 2,
      "nameEn": "Mirpur-11 1/2",
      "nameBn": "মিরপুর-১১ ১/২",
      "aliases": [
        "mirpur-11 1/2",
        "মিরপুর-১১ ১/২"
      ]
    },
    {
      "id": 3,
      "nameEn": "Bekali Hotel",
      "nameBn": "বেকালী হোটেল",
      "aliases": [
        "bekali hotel",
        "বেকালী হোটেল"
      ]
    },
    {
      "id": 4,
      "nameEn": "Mirpur-11",
      "nameBn": "মিরপুর-১১",
      "aliases": [
        "mirpur-11",
        "মিরপুর-১১"
      ]
    },
    {
      "id": 5,
      "nameEn": "Mirpur-10",
      "nameBn": "মিরপুর-১০",
      "aliases": [
        "mirpur-10",
        "মিরপুর-১০"
      ]
    },
    {
      "id": 6,
      "nameEn": "Kazipara",
      "nameBn": "কাজীপাড়া",
      "aliases": [
        "kazipara",
        "কাজীপাড়া"
      ]
    },
    {
      "id": 7,
      "nameEn": "Farmgate",
      "nameBn": "ফার্মগেট",
      "aliases": [
        "farmgate",
        "ফার্মগেট"
      ]
    },
    {
      "id": 8,
      "nameEn": "Pressclub",
      "nameBn": "প্রেসক্লাব",
      "aliases": [
        "pressclub",
        "প্রেসক্লাব"
      ]
    },
    {
      "id": 9,
      "nameEn": "TNT",
      "nameBn": "টিএন্ডটি",
      "aliases": [
        "tnt",
        "টিএন্ডটি"
      ]
    },
    {
      "id": 10,
      "nameEn": "Raysaheb Bazar",
      "nameBn": "রায়সাহেব বাজার",
      "aliases": [
        "raysaheb bazar",
        "রায়সাহেব বাজার"
      ]
    },
    {
      "id": 11,
      "nameEn": "Victoria Park",
      "nameBn": "ভিক্টোরিয়া পার্ক",
      "aliases": [
        "victoria park",
        "ভিক্টোরিয়া পার্ক"
      ]
    }
  ],
  "fareMatrix": [
    [
      0,
      10,
      10,
      10,
      10,
      10,
      14,
      28,
      39,
      43,
      49,
      49
    ],
    [
      10,
      0,
      10,
      10,
      10,
      10,
      10,
      24,
      36,
      40,
      45,
      46
    ],
    [
      10,
      10,
      0,
      10,
      10,
      10,
      10,
      23,
      35,
      39,
      44,
      45
    ],
    [
      10,
      10,
      10,
      0,
      10,
      10,
      10,
      22,
      34,
      38,
      43,
      44
    ],
    [
      10,
      10,
      10,
      10,
      0,
      10,
      10,
      21,
      32,
      36,
      41,
      42
    ],
    [
      10,
      10,
      10,
      10,
      10,
      0,
      10,
      18,
      29,
      33,
      39,
      39
    ],
    [
      14,
      10,
      10,
      10,
      10,
      10,
      0,
      14,
      26,
      30,
      35,
      36
    ],
    [
      28,
      24,
      23,
      22,
      21,
      18,
      14,
      0,
      11,
      15,
      21,
      21
    ],
    [
      39,
      36,
      35,
      34,
      32,
      29,
      26,
      11,
      0,
      10,
      10,
      10
    ],
    [
      43,
      40,
      39,
      38,
      36,
      33,
      30,
      15,
      10,
      0,
      10,
      10
    ],
    [
      49,
      45,
      44,
      43,
      41,
      39,
      35,
      21,
      10,
      10,
      0,
      10
    ],
    [
      49,
      46,
      45,
      44,
      42,
      39,
      36,
      21,
      10,
      10,
      10,
      0
    ]
  ]
},
{
  "id": "A122",
  "routeNo": "এ-১২২",
  "nameBn": "মিরপুর-১২ → আজিমপুর",
  "nameEn": "Mirpur-12 → Azimpur",
  "totalKm": 22,
  "stops": [
    {
      "id": 0,
      "nameEn": "Mirpur-12",
      "nameBn": "মিরপুর-১২",
      "aliases": [
        "mirpur-12",
        "মিরপুর-১২"
      ]
    },
    {
      "id": 1,
      "nameEn": "ECB Mor",
      "nameBn": "ইসিবি মোড়",
      "aliases": [
        "ecb mor",
        "ইসিবি মোড়"
      ]
    },
    {
      "id": 2,
      "nameEn": "Mirpur-10",
      "nameBn": "মিরপুর-১০",
      "aliases": [
        "mirpur-10",
        "মিরপুর-১০"
      ]
    },
    {
      "id": 3,
      "nameEn": "Kazipara",
      "nameBn": "কাজীপাড়া",
      "aliases": [
        "kazipara",
        "কাজীপাড়া"
      ]
    },
    {
      "id": 4,
      "nameEn": "Sheorapara",
      "nameBn": "শেওড়াপাড়া",
      "aliases": [
        "sheorapara",
        "শেওড়াপাড়া"
      ]
    },
    {
      "id": 5,
      "nameEn": "Agargaon",
      "nameBn": "আগারগাঁও",
      "aliases": [
        "agargaon",
        "আগারগাঁও"
      ]
    },
    {
      "id": 6,
      "nameEn": "Shishu Mela",
      "nameBn": "শিশুমেলা",
      "aliases": [
        "shishu mela",
        "শিশুমেলা"
      ]
    },
    {
      "id": 7,
      "nameEn": "College Gate",
      "nameBn": "কলেজগেট",
      "aliases": [
        "college gate",
        "কলেজগেট"
      ]
    },
    {
      "id": 8,
      "nameEn": "Manik Mia Avenue",
      "nameBn": "মানিকমিয়া এভিনিউ",
      "aliases": [
        "manik mia avenue",
        "মানিকমিয়া এভিনিউ"
      ]
    },
    {
      "id": 9,
      "nameEn": "Azimpur",
      "nameBn": "আজিমপুর",
      "aliases": [
        "azimpur",
        "আজিমপুর"
      ]
    }
  ],
  "fareMatrix": [
    [
      0,
      12,
      24,
      28,
      30,
      34,
      38,
      39,
      43,
      59
    ],
    [
      12,
      0,
      12,
      16,
      18,
      22,
      26,
      27,
      31,
      48
    ],
    [
      24,
      12,
      0,
      10,
      10,
      10,
      14,
      15,
      19,
      35
    ],
    [
      28,
      16,
      10,
      0,
      10,
      10,
      10,
      11,
      15,
      32
    ],
    [
      30,
      18,
      10,
      10,
      0,
      10,
      10,
      10,
      13,
      30
    ],
    [
      34,
      22,
      10,
      10,
      10,
      0,
      10,
      10,
      10,
      25
    ],
    [
      38,
      26,
      14,
      10,
      10,
      10,
      0,
      10,
      10,
      22
    ],
    [
      39,
      27,
      15,
      11,
      10,
      10,
      10,
      0,
      10,
      20
    ],
    [
      43,
      31,
      19,
      15,
      13,
      10,
      10,
      10,
      0,
      16
    ],
    [
      59,
      48,
      35,
      32,
      30,
      25,
      22,
      20,
      16,
      0
    ]
  ]
},
{
  "id": "A127",
  "routeNo": "এ-১২৭",
  "nameBn": "মিরপুর মাজার রোড → আজিমপুর",
  "nameEn": "Mirpur Mazar Road → Azimpur",
  "totalKm": 12,
  "stops": [
    {
      "id": 0,
      "nameEn": "Mirpur Mazar Road",
      "nameBn": "মিরপুর মাজার রোড",
      "aliases": [
        "mirpur mazar road",
        "মিরপুর মাজার রোড"
      ]
    },
    {
      "id": 1,
      "nameEn": "Mirpur-1",
      "nameBn": "মিরপুর-১",
      "aliases": [
        "mirpur-1",
        "মিরপুর-১"
      ]
    },
    {
      "id": 2,
      "nameEn": "Shyamoli",
      "nameBn": "শ্যামলী",
      "aliases": [
        "shyamoli",
        "শ্যামলী"
      ]
    },
    {
      "id": 3,
      "nameEn": "Asadgate",
      "nameBn": "আসাদগেট",
      "aliases": [
        "asadgate",
        "আসাদগেট"
      ]
    },
    {
      "id": 4,
      "nameEn": "Russel Square",
      "nameBn": "রাসেল স্কয়ার",
      "aliases": [
        "russel square",
        "রাসেল স্কয়ার"
      ]
    },
    {
      "id": 5,
      "nameEn": "Kalabagan",
      "nameBn": "কলাবাগান",
      "aliases": [
        "kalabagan",
        "কলাবাগান"
      ]
    },
    {
      "id": 6,
      "nameEn": "Science Lab",
      "nameBn": "সায়েন্সল্যাব",
      "aliases": [
        "science lab",
        "সায়েন্সল্যাব"
      ]
    },
    {
      "id": 7,
      "nameEn": "New Market",
      "nameBn": "নিউমার্কেট",
      "aliases": [
        "new market",
        "নিউমার্কেট"
      ]
    },
    {
      "id": 8,
      "nameEn": "Nilkhet",
      "nameBn": "নীলক্ষেত",
      "aliases": [
        "nilkhet",
        "নীলক্ষেত"
      ]
    },
    {
      "id": 9,
      "nameEn": "Azimpur",
      "nameBn": "আজিমপুর",
      "aliases": [
        "azimpur",
        "আজিমপুর"
      ]
    }
  ],
  "fareMatrix": [
    [
      0,
      10,
      12,
      18,
      23,
      24,
      27,
      29,
      29,
      32
    ],
    [
      10,
      0,
      10,
      15,
      21,
      22,
      24,
      26,
      26,
      30
    ],
    [
      12,
      10,
      0,
      10,
      11,
      12,
      15,
      16,
      17,
      20
    ],
    [
      18,
      15,
      10,
      0,
      10,
      10,
      10,
      11,
      11,
      15
    ],
    [
      23,
      21,
      11,
      10,
      0,
      10,
      10,
      10,
      10,
      10
    ],
    [
      24,
      22,
      12,
      10,
      10,
      0,
      10,
      10,
      10,
      10
    ],
    [
      27,
      24,
      15,
      10,
      10,
      10,
      0,
      10,
      10,
      10
    ],
    [
      29,
      26,
      16,
      11,
      10,
      10,
      10,
      0,
      10,
      10
    ],
    [
      29,
      26,
      17,
      11,
      10,
      10,
      10,
      10,
      0,
      10
    ],
    [
      32,
      30,
      20,
      15,
      10,
      10,
      10,
      10,
      10,
      0
    ]
  ]
},
{
  "id": "M14_KHILGAON",
  "routeNo": "মিরপুর(১৪)-খিলগাঁও",
  "nameBn": "মিরপুর(১৪) → খিলগাঁও তালতলা",
  "nameEn": "Mirpur-14 → Khilgaon Taltola",
  "totalKm": 25.7,
  "stops": [
    {
      "id": 0,
      "nameEn": "Mirpur-14",
      "nameBn": "মিরপুর(১৪)",
      "aliases": [
        "mirpur-14",
        "মিরপুর(১৪)",
        "মিরপুর ১৪"
      ]
    },
    {
      "id": 1,
      "nameEn": "Mirpur-10",
      "nameBn": "মিরপুর(১০)",
      "aliases": [
        "mirpur-10",
        "মিরপুর(১০)",
        "মিরপুর ১০"
      ]
    },
    {
      "id": 2,
      "nameEn": "Mirpur-1",
      "nameBn": "মিরপুর(১)",
      "aliases": [
        "mirpur-1",
        "মিরপুর(১)",
        "মিরপুর ১"
      ]
    },
    {
      "id": 3,
      "nameEn": "Bangla College",
      "nameBn": "বাংলা কলেজ",
      "aliases": [
        "bangla college",
        "বাংলা কলেজ"
      ]
    },
    {
      "id": 4,
      "nameEn": "Shyamoli",
      "nameBn": "শ্যামলী",
      "aliases": [
        "shyamoli",
        "শ্যামলী"
      ]
    },
    {
      "id": 5,
      "nameEn": "Asadgate",
      "nameBn": "আসাদগেট",
      "aliases": [
        "asadgate",
        "আসাদগেট"
      ]
    },
    {
      "id": 6,
      "nameEn": "Shukrabad",
      "nameBn": "শুক্রাবাদ",
      "aliases": [
        "shukrabad",
        "শুক্রাবাদ"
      ]
    },
    {
      "id": 7,
      "nameEn": "Kalabagan",
      "nameBn": "কলাবাগান",
      "aliases": [
        "kalabagan",
        "কলাবাগান"
      ]
    },
    {
      "id": 8,
      "nameEn": "Science Lab",
      "nameBn": "সাইন্সল্যাব",
      "aliases": [
        "science lab",
        "সাইন্সল্যাব"
      ]
    },
    {
      "id": 9,
      "nameEn": "Shahbag",
      "nameBn": "শাহবাগ",
      "aliases": [
        "shahbag",
        "শাহবাগ"
      ]
    },
    {
      "id": 10,
      "nameEn": "Pressclub",
      "nameBn": "প্রেসক্লাব",
      "aliases": [
        "pressclub",
        "প্রেসক্লাব"
      ]
    },
    {
      "id": 11,
      "nameEn": "Shapla Chattar",
      "nameBn": "শাপলা চত্ত্বর",
      "aliases": [
        "shapla chattar",
        "শাপলা চত্ত্বর"
      ]
    },
    {
      "id": 12,
      "nameEn": "Kamalapur",
      "nameBn": "কমলাপুর",
      "aliases": [
        "kamalapur",
        "কমলাপুর"
      ]
    },
    {
      "id": 13,
      "nameEn": "Basabo",
      "nameBn": "বাসাবো",
      "aliases": [
        "basabo",
        "বাসাবো"
      ]
    },
    {
      "id": 14,
      "nameEn": "Khilgaon Railgate",
      "nameBn": "খিলগাও রেলগেট",
      "aliases": [
        "khilgaon railgate",
        "খিলগাও রেলগেট"
      ]
    },
    {
      "id": 15,
      "nameEn": "Khilgaon Taltola",
      "nameBn": "খিলগাও তালতলা",
      "aliases": [
        "khilgaon taltola",
        "খিলগাও তালতলা"
      ]
    }
  ],
  "fareMatrix": [
    [
      0,
      10,
      10,
      14,
      20,
      24,
      25,
      27,
      32,
      35,
      40,
      46,
      49,
      56,
      63,
      69
    ],
    [
      10,
      0,
      10,
      10,
      14,
      18,
      20,
      22,
      26,
      30,
      34,
      41,
      43,
      51,
      57,
      64
    ],
    [
      10,
      10,
      0,
      10,
      10,
      14,
      16,
      18,
      22,
      26,
      30,
      36,
      39,
      47,
      53,
      60
    ],
    [
      14,
      10,
      10,
      0,
      10,
      10,
      11,
      13,
      18,
      21,
      25,
      32,
      35,
      42,
      49,
      55
    ],
    [
      20,
      14,
      10,
      10,
      0,
      10,
      10,
      10,
      12,
      15,
      20,
      26,
      29,
      36,
      43,
      49
    ],
    [
      24,
      18,
      14,
      10,
      10,
      0,
      10,
      10,
      10,
      11,
      16,
      22,
      25,
      32,
      39,
      45
    ],
    [
      25,
      20,
      16,
      11,
      10,
      10,
      0,
      10,
      10,
      10,
      14,
      21,
      23,
      31,
      38,
      44
    ],
    [
      27,
      22,
      18,
      13,
      10,
      10,
      10,
      0,
      10,
      10,
      12,
      19,
      22,
      29,
      36,
      42
    ],
    [
      32,
      26,
      22,
      18,
      12,
      10,
      10,
      10,
      0,
      10,
      10,
      14,
      17,
      24,
      31,
      37
    ],
    [
      35,
      30,
      26,
      21,
      15,
      11,
      10,
      10,
      10,
      0,
      10,
      10,
      14,
      21,
      28,
      34
    ],
    [
      40,
      34,
      30,
      25,
      20,
      16,
      14,
      12,
      10,
      10,
      0,
      10,
      10,
      17,
      23,
      30
    ],
    [
      46,
      41,
      36,
      32,
      26,
      22,
      21,
      19,
      14,
      10,
      10,
      0,
      10,
      10,
      17,
      23
    ],
    [
      49,
      43,
      39,
      35,
      29,
      25,
      23,
      22,
      17,
      14,
      10,
      10,
      0,
      10,
      14,
      21
    ],
    [
      56,
      51,
      47,
      42,
      36,
      32,
      31,
      29,
      24,
      21,
      17,
      10,
      10,
      0,
      10,
      13
    ],
    [
      63,
      57,
      53,
      49,
      43,
      39,
      38,
      36,
      31,
      28,
      23,
      17,
      14,
      10,
      0,
      10
    ],
    [
      69,
      64,
      60,
      55,
      49,
      45,
      44,
      42,
      37,
      34,
      30,
      23,
      21,
      13,
      10,
      0
    ]
  ]
},
{
  "id": "CHIRIAKHANA_VICTORIA",
  "routeNo": "চিড়িয়াখানা-ভিক্টোরিয়া",
  "nameBn": "চিড়িয়াখানা → ভিক্টোরিয়াপার্ক",
  "nameEn": "Chiriakhana → Victoria Park",
  "totalKm": 16,
  "stops": [
    {
      "id": 0,
      "nameEn": "Chiriakhana",
      "nameBn": "চিড়িয়াখানা",
      "aliases": [
        "chiriakhana",
        "চিড়িয়াখানা"
      ]
    },
    {
      "id": 1,
      "nameEn": "Mirpur-1",
      "nameBn": "মিরপুর-১",
      "aliases": [
        "mirpur-1",
        "মিরপুর-১"
      ]
    },
    {
      "id": 2,
      "nameEn": "Darus Salam",
      "nameBn": "দারুসসালাম",
      "aliases": [
        "darus salam",
        "দারুসসালাম"
      ]
    },
    {
      "id": 3,
      "nameEn": "Shyamoli",
      "nameBn": "শ্যামলী",
      "aliases": [
        "shyamoli",
        "শ্যামলী"
      ]
    },
    {
      "id": 4,
      "nameEn": "Asadgate",
      "nameBn": "আসাদগেট",
      "aliases": [
        "asadgate",
        "আসাদগেট"
      ]
    },
    {
      "id": 5,
      "nameEn": "Farmgate",
      "nameBn": "ফার্মগেট",
      "aliases": [
        "farmgate",
        "ফার্মগেট"
      ]
    },
    {
      "id": 6,
      "nameEn": "Pressclub",
      "nameBn": "প্রেসক্লাব",
      "aliases": [
        "pressclub",
        "প্রেসক্লাব"
      ]
    },
    {
      "id": 7,
      "nameEn": "Gulistan",
      "nameBn": "গুলিস্তান",
      "aliases": [
        "gulistan",
        "গুলিস্তান"
      ]
    },
    {
      "id": 8,
      "nameEn": "Victoria Park",
      "nameBn": "ভিক্টোরিয়াপার্ক",
      "aliases": [
        "victoria park",
        "ভিক্টোরিয়াপার্ক"
      ]
    }
  ],
  "fareMatrix": [
    [
      0,
      10,
      10,
      15,
      19,
      24,
      34,
      37,
      43
    ],
    [
      10,
      0,
      10,
      10,
      15,
      19,
      29,
      32,
      38
    ],
    [
      10,
      10,
      0,
      10,
      10,
      14,
      24,
      27,
      33
    ],
    [
      15,
      10,
      10,
      0,
      10,
      10,
      19,
      22,
      29
    ],
    [
      19,
      15,
      10,
      10,
      0,
      10,
      15,
      18,
      24
    ],
    [
      24,
      19,
      14,
      10,
      10,
      0,
      10,
      13,
      19
    ],
    [
      34,
      29,
      24,
      19,
      15,
      10,
      0,
      10,
      10
    ],
    [
      37,
      32,
      27,
      22,
      18,
      13,
      10,
      0,
      10
    ],
    [
      43,
      38,
      33,
      29,
      24,
      19,
      10,
      10,
      0
    ]
  ]
},
{
  "id": "BAIPAIL_KERANIGANJ",
  "routeNo": "বাইপাইল-কেরানীগঞ্জ",
  "nameBn": "বাইপাইল → কেরানীগঞ্জ (নতুন জেলখানা)",
  "nameEn": "Baipail → Keraniganj (Notun Jailkhana)",
  "totalKm": 47.5,
  "stops": [
    {
      "id": 0,
      "nameEn": "Baipail",
      "nameBn": "বাইপাইল",
      "aliases": [
        "baipail",
        "বাইপাইল"
      ]
    },
    {
      "id": 1,
      "nameEn": "Kamarpara",
      "nameBn": "কামারপাড়া",
      "aliases": [
        "kamarpara",
        "কামারপাড়া"
      ]
    },
    {
      "id": 2,
      "nameEn": "Abdullahpur",
      "nameBn": "আব্দুল্লাহপুর",
      "aliases": [
        "abdullahpur",
        "আব্দুল্লাহপুর"
      ]
    },
    {
      "id": 3,
      "nameEn": "Azampur",
      "nameBn": "আজমপুর",
      "aliases": [
        "azampur",
        "আজমপুর"
      ]
    },
    {
      "id": 4,
      "nameEn": "Airport",
      "nameBn": "এয়ারপোর্ট",
      "aliases": [
        "airport",
        "এয়ারপোর্ট"
      ]
    },
    {
      "id": 5,
      "nameEn": "Khilkhet",
      "nameBn": "খিলক্ষেত",
      "aliases": [
        "khilkhet",
        "খিলক্ষেত"
      ]
    },
    {
      "id": 6,
      "nameEn": "Bishwa Road",
      "nameBn": "বিশ্বরোড",
      "aliases": [
        "bishwa road",
        "বিশ্বরোড"
      ]
    },
    {
      "id": 7,
      "nameEn": "Staff Road",
      "nameBn": "স্টাফরোড",
      "aliases": [
        "staff road",
        "স্টাফরোড"
      ]
    },
    {
      "id": 8,
      "nameEn": "Kakoli",
      "nameBn": "কাকলি",
      "aliases": [
        "kakoli",
        "কাকলি"
      ]
    },
    {
      "id": 9,
      "nameEn": "Mohakhali",
      "nameBn": "মহাখালী",
      "aliases": [
        "mohakhali",
        "মহাখালী"
      ]
    },
    {
      "id": 10,
      "nameEn": "Farmgate",
      "nameBn": "ফার্মগেট",
      "aliases": [
        "farmgate",
        "ফার্মগেট"
      ]
    },
    {
      "id": 11,
      "nameEn": "Shahbag",
      "nameBn": "শাহবাগ",
      "aliases": [
        "shahbag",
        "শাহবাগ"
      ]
    },
    {
      "id": 12,
      "nameEn": "Pressclub",
      "nameBn": "প্রেসক্লাব",
      "aliases": [
        "pressclub",
        "প্রেসক্লাব"
      ]
    },
    {
      "id": 13,
      "nameEn": "Fulbaria",
      "nameBn": "ফুলবাড়িয়া",
      "aliases": [
        "fulbaria",
        "ফুলবাড়িয়া"
      ]
    },
    {
      "id": 14,
      "nameEn": "Babu Bazar Bridge",
      "nameBn": "বাবু বাজার ব্রীজ",
      "aliases": [
        "babu bazar bridge",
        "বাবু বাজার ব্রীজ"
      ]
    },
    {
      "id": 15,
      "nameEn": "Keraniganj",
      "nameBn": "কেরানীগঞ্জ (নতুন জেলখানা)",
      "aliases": [
        "keraniganj",
        "কেরানীগঞ্জ",
        "কেরানীগঞ্জ (নতুন জেলখানা)"
      ]
    }
  ],
  "fareMatrix": [
    [
      0,
      42,
      48,
      50,
      56,
      63,
      66,
      71,
      77,
      82,
      89,
      96,
      101,
      105,
      109,
      128
    ],
    [
      42,
      0,
      10,
      10,
      14,
      22,
      24,
      29,
      35,
      40,
      48,
      54,
      59,
      63,
      67,
      86
    ],
    [
      48,
      10,
      0,
      10,
      10,
      16,
      18,
      23,
      29,
      34,
      42,
      48,
      53,
      57,
      61,
      80
    ],
    [
      50,
      10,
      10,
      0,
      10,
      14,
      16,
      22,
      27,
      32,
      40,
      46,
      51,
      55,
      59,
      79
    ],
    [
      56,
      14,
      10,
      10,
      0,
      10,
      10,
      15,
      21,
      26,
      33,
      40,
      45,
      49,
      53,
      72
    ],
    [
      63,
      22,
      16,
      14,
      10,
      0,
      10,
      10,
      13,
      18,
      26,
      32,
      37,
      41,
      45,
      65
    ],
    [
      66,
      24,
      18,
      16,
      10,
      10,
      0,
      10,
      11,
      16,
      23,
      30,
      35,
      39,
      43,
      62
    ],
    [
      71,
      29,
      23,
      22,
      15,
      10,
      10,
      0,
      10,
      10,
      18,
      25,
      29,
      33,
      37,
      57
    ],
    [
      77,
      35,
      29,
      27,
      21,
      13,
      11,
      10,
      0,
      10,
      13,
      19,
      24,
      28,
      32,
      52
    ],
    [
      82,
      40,
      34,
      32,
      26,
      18,
      16,
      10,
      10,
      0,
      10,
      14,
      19,
      23,
      27,
      47
    ],
    [
      89,
      48,
      42,
      40,
      33,
      26,
      23,
      18,
      13,
      10,
      0,
      10,
      11,
      15,
      19,
      39
    ],
    [
      96,
      54,
      48,
      46,
      40,
      32,
      30,
      25,
      19,
      14,
      10,
      0,
      10,
      10,
      13,
      32
    ],
    [
      101,
      59,
      53,
      51,
      45,
      37,
      35,
      29,
      24,
      19,
      11,
      10,
      0,
      10,
      10,
      28
    ],
    [
      105,
      63,
      57,
      55,
      49,
      41,
      39,
      33,
      28,
      23,
      15,
      10,
      10,
      0,
      10,
      23
    ],
    [
      109,
      67,
      61,
      59,
      53,
      45,
      43,
      37,
      32,
      27,
      19,
      13,
      10,
      10,
      0,
      20
    ],
    [
      128,
      86,
      80,
      79,
      72,
      65,
      62,
      57,
      52,
      47,
      39,
      32,
      28,
      23,
      20,
      0
    ]
  ]
},
{
  "id": "SAYEDABAD_BALUGHAT",
  "routeNo": "সায়দাবাদ-বালুঘাট",
  "nameBn": "সায়দাবাদ → বালুঘাট",
  "nameEn": "Sayedabad → Balughat",
  "totalKm": 14.6,
  "stops": [
    {
      "id": 0,
      "nameEn": "Sayedabad",
      "nameBn": "সায়দাবাদ",
      "aliases": [
        "sayedabad",
        "সায়দাবাদ"
      ]
    },
    {
      "id": 1,
      "nameEn": "Bangladesh Bank",
      "nameBn": "বাংলাদেশ ব্যাংক",
      "aliases": [
        "bangladesh bank",
        "বাংলাদেশ ব্যাংক"
      ]
    },
    {
      "id": 2,
      "nameEn": "UBL",
      "nameBn": "ইউবিএল",
      "aliases": [
        "ubl",
        "ইউবিএল"
      ]
    },
    {
      "id": 3,
      "nameEn": "Pressclub",
      "nameBn": "প্রেসক্লাব",
      "aliases": [
        "pressclub",
        "প্রেসক্লাব"
      ]
    },
    {
      "id": 4,
      "nameEn": "Shahbag",
      "nameBn": "শাহবাগ",
      "aliases": [
        "shahbag",
        "শাহবাগ"
      ]
    },
    {
      "id": 5,
      "nameEn": "Farmgate",
      "nameBn": "ফার্মগেট",
      "aliases": [
        "farmgate",
        "ফার্মগেট"
      ]
    },
    {
      "id": 6,
      "nameEn": "Balughat",
      "nameBn": "বালুঘাট",
      "aliases": [
        "balughat",
        "বালুঘাট"
      ]
    }
  ],
  "fareMatrix": [
    [
      0,
      10,
      10,
      10,
      14,
      20,
      39
    ],
    [
      10,
      0,
      10,
      10,
      10,
      14,
      33
    ],
    [
      10,
      10,
      0,
      10,
      10,
      11,
      30
    ],
    [
      10,
      10,
      10,
      0,
      10,
      10,
      29
    ],
    [
      14,
      10,
      10,
      10,
      0,
      10,
      25
    ],
    [
      20,
      14,
      11,
      10,
      10,
      0,
      19
    ],
    [
      39,
      33,
      30,
      29,
      25,
      19,
      0
    ]
  ]
},
{
  "id": "UTTARA_VICTORIA",
  "routeNo": "উত্তরা-ভিক্টোরিয়া",
  "nameBn": "উত্তরা (রাণীগঞ্জ) → ভিক্টোরিয়া পার্ক",
  "nameEn": "Uttara (Raniganj) → Victoria Park",
  "totalKm": 23.3,
  "stops": [
    {
      "id": 0,
      "nameEn": "Uttara (Raniganj)",
      "nameBn": "উত্তরা (রাণীগঞ্জ)",
      "aliases": [
        "uttara (raniganj)",
        "uttara",
        "উত্তরা (রাণীগঞ্জ)",
        "উত্তরা"
      ]
    },
    {
      "id": 1,
      "nameEn": "Notun Bazar",
      "nameBn": "নতুন বাজার",
      "aliases": [
        "notun bazar",
        "নতুন বাজার"
      ]
    },
    {
      "id": 2,
      "nameEn": "Rampura TV Center",
      "nameBn": "রামপুরা টিভি সেন্টার",
      "aliases": [
        "rampura tv center",
        "রামপুরা টিভি সেন্টার"
      ]
    },
    {
      "id": 3,
      "nameEn": "Malibagh",
      "nameBn": "মালিবাগ",
      "aliases": [
        "malibagh",
        "মালিবাগ"
      ]
    },
    {
      "id": 4,
      "nameEn": "Kakrail",
      "nameBn": "কাকরাইল",
      "aliases": [
        "kakrail",
        "কাকরাইল"
      ]
    },
    {
      "id": 5,
      "nameEn": "Bangabandhu Avenue",
      "nameBn": "বঙ্গবন্ধু এভিনিউ",
      "aliases": [
        "bangabandhu avenue",
        "বঙ্গবন্ধু এভিনিউ"
      ]
    },
    {
      "id": 6,
      "nameEn": "Victoria Park",
      "nameBn": "ভিক্টোরিয়া পার্ক",
      "aliases": [
        "victoria park",
        "ভিক্টোরিয়া পার্ক"
      ]
    }
  ],
  "fareMatrix": [
    [
      0,
      32,
      41,
      50,
      52,
      57,
      63
    ],
    [
      32,
      0,
      10,
      18,
      20,
      25,
      31
    ],
    [
      41,
      10,
      0,
      10,
      11,
      16,
      22
    ],
    [
      50,
      18,
      10,
      0,
      10,
      10,
      13
    ],
    [
      52,
      20,
      11,
      10,
      0,
      10,
      10
    ],
    [
      57,
      25,
      16,
      10,
      10,
      0,
      10
    ],
    [
      63,
      31,
      22,
      13,
      10,
      10,
      0
    ]
  ]
},
{
  "id": "BANASREE_SHIA",
  "routeNo": "বনশ্রী-শিয়া মসজিদ",
  "nameBn": "বনশ্রী → মোহাম্মদপুর শিয়া মসজিদ",
  "nameEn": "Banasree → Mohammadpur Shia Masjid",
  "totalKm": 18.2,
  "stops": [
    {
      "id": 0,
      "nameEn": "Banasree",
      "nameBn": "বনশ্রী",
      "aliases": [
        "banasree",
        "বনশ্রী"
      ]
    },
    {
      "id": 1,
      "nameEn": "Rampura",
      "nameBn": "রামপুরা",
      "aliases": [
        "rampura",
        "রামপুরা"
      ]
    },
    {
      "id": 2,
      "nameEn": "Gulshan-1",
      "nameBn": "গুলশান-১",
      "aliases": [
        "gulshan-1",
        "গুলশান-১",
        "gulshan 1",
        "গুলশান ১"
      ]
    },
    {
      "id": 3,
      "nameEn": "Mohakhali",
      "nameBn": "মহাখালী",
      "aliases": [
        "mohakhali",
        "মহাখালী"
      ]
    },
    {
      "id": 4,
      "nameEn": "Agargaon",
      "nameBn": "আগারগাঁও",
      "aliases": [
        "agargaon",
        "আগারগাঁও"
      ]
    },
    {
      "id": 5,
      "nameEn": "Shyamoli Ring Road",
      "nameBn": "শ্যামলী রিং রোড",
      "aliases": [
        "shyamoli ring road",
        "শ্যামলী রিং রোড"
      ]
    },
    {
      "id": 6,
      "nameEn": "Mohammadpur Shia Masjid",
      "nameBn": "মোহাম্মদপুর শিয়া মসজিদ",
      "aliases": [
        "mohammadpur shia masjid",
        "mohammadpur",
        "মোহাম্মদপুর শিয়া মসজিদ",
        "মোহাম্মদপুর"
      ]
    }
  ],
  "fareMatrix": [
    [
      0,
      10,
      21,
      28,
      38,
      45,
      49
    ],
    [
      10,
      0,
      14,
      21,
      31,
      38,
      42
    ],
    [
      21,
      14,
      0,
      10,
      17,
      24,
      28
    ],
    [
      28,
      21,
      10,
      0,
      11,
      18,
      22
    ],
    [
      38,
      31,
      17,
      11,
      0,
      10,
      11
    ],
    [
      45,
      38,
      24,
      18,
      10,
      0,
      10
    ],
    [
      49,
      42,
      28,
      22,
      11,
      10,
      0
    ]
  ]
},
{
  "id": "PEERJONGI_NOTUN_1",
  "routeNo": "পীরজঙ্গী-নতুনবাজার (ফার্মগেট)",
  "nameBn": "পীরজঙ্গী মাজার → নতুন বাজার (ফার্মগেট হয়ে)",
  "nameEn": "Peerjongi Mazar → Notun Bazar (via Farmgate)",
  "totalKm": 16.7,
  "stops": [
    {
      "id": 0,
      "nameEn": "Peerjongi Mazar",
      "nameBn": "পীরজঙ্গী মাজার",
      "aliases": [
        "peerjongi mazar",
        "পীরজঙ্গী মাজার"
      ]
    },
    {
      "id": 1,
      "nameEn": "Kamalapur Station",
      "nameBn": "কমলাপুর স্টেশন",
      "aliases": [
        "kamalapur station",
        "কমলাপুর স্টেশন"
      ]
    },
    {
      "id": 2,
      "nameEn": "Bangladesh Bank",
      "nameBn": "বাংলাদেশ ব্যাংক",
      "aliases": [
        "bangladesh bank",
        "বাংলাদেশ ব্যাংক"
      ]
    },
    {
      "id": 3,
      "nameEn": "Stadium",
      "nameBn": "স্টেডিয়াম",
      "aliases": [
        "stadium",
        "স্টেডিয়াম"
      ]
    },
    {
      "id": 4,
      "nameEn": "Paltan",
      "nameBn": "পল্টন",
      "aliases": [
        "paltan",
        "পল্টন"
      ]
    },
    {
      "id": 5,
      "nameEn": "Kakrail",
      "nameBn": "কাকরাইল",
      "aliases": [
        "kakrail",
        "কাকরাইল"
      ]
    },
    {
      "id": 6,
      "nameEn": "Malibagh",
      "nameBn": "মালিবাগ",
      "aliases": [
        "malibagh",
        "মালিবাগ"
      ]
    },
    {
      "id": 7,
      "nameEn": "Moghbazar",
      "nameBn": "মগবাজার",
      "aliases": [
        "moghbazar",
        "মগবাজার"
      ]
    },
    {
      "id": 8,
      "nameEn": "Bangla Motor",
      "nameBn": "বাংলামটর",
      "aliases": [
        "bangla motor",
        "বাংলামটর",
        "banglamotor"
      ]
    },
    {
      "id": 9,
      "nameEn": "Farmgate",
      "nameBn": "ফার্মগেট",
      "aliases": [
        "farmgate",
        "ফার্মগেট"
      ]
    },
    {
      "id": 10,
      "nameEn": "Mohakhali",
      "nameBn": "মহাখালী",
      "aliases": [
        "mohakhali",
        "মহাখালী"
      ]
    },
    {
      "id": 11,
      "nameEn": "Gulshan-1",
      "nameBn": "গুলশান-১",
      "aliases": [
        "gulshan-1",
        "গুলশান-১",
        "gulshan 1"
      ]
    },
    {
      "id": 12,
      "nameEn": "Gulshan-2",
      "nameBn": "গুলশান-২",
      "aliases": [
        "gulshan-2",
        "গুলশান-২",
        "gulshan 2"
      ]
    },
    {
      "id": 13,
      "nameEn": "Notun Bazar",
      "nameBn": "নতুন বাজার",
      "aliases": [
        "notun bazar",
        "নতুন বাজার"
      ]
    }
  ],
  "fareMatrix": [
    [
      0,
      10,
      10,
      10,
      10,
      14,
      16,
      19,
      22,
      26,
      34,
      39,
      43,
      45
    ],
    [
      10,
      0,
      10,
      10,
      10,
      12,
      15,
      18,
      21,
      25,
      33,
      38,
      42,
      44
    ],
    [
      10,
      10,
      0,
      10,
      10,
      10,
      12,
      15,
      18,
      22,
      30,
      35,
      39,
      41
    ],
    [
      10,
      10,
      10,
      0,
      10,
      10,
      10,
      12,
      15,
      19,
      26,
      32,
      36,
      38
    ],
    [
      10,
      10,
      10,
      10,
      0,
      10,
      10,
      10,
      13,
      17,
      25,
      30,
      34,
      36
    ],
    [
      14,
      12,
      10,
      10,
      10,
      0,
      10,
      10,
      10,
      13,
      21,
      26,
      30,
      32
    ],
    [
      16,
      15,
      12,
      10,
      10,
      10,
      0,
      10,
      10,
      10,
      18,
      23,
      28,
      29
    ],
    [
      19,
      18,
      15,
      12,
      10,
      10,
      10,
      0,
      10,
      10,
      15,
      20,
      24,
      26
    ],
    [
      22,
      21,
      18,
      15,
      13,
      10,
      10,
      10,
      0,
      10,
      12,
      17,
      21,
      23
    ],
    [
      26,
      25,
      22,
      19,
      17,
      13,
      10,
      10,
      10,
      0,
      10,
      13,
      17,
      19
    ],
    [
      34,
      33,
      30,
      26,
      25,
      21,
      18,
      15,
      12,
      10,
      0,
      10,
      10,
      11
    ],
    [
      39,
      38,
      35,
      32,
      30,
      26,
      23,
      20,
      17,
      13,
      10,
      0,
      10,
      10
    ],
    [
      43,
      42,
      39,
      36,
      34,
      30,
      28,
      24,
      21,
      17,
      10,
      10,
      0,
      10
    ],
    [
      45,
      44,
      41,
      38,
      36,
      32,
      29,
      26,
      23,
      19,
      11,
      10,
      10,
      0
    ]
  ]
},
{
  "id": "PEERJONGI_NOTUN_2",
  "routeNo": "পীরজঙ্গী-নতুনবাজার (সাতরাস্তা) (বিকল্প)",
  "nameBn": "পীরজঙ্গী মাজার → নতুন বাজার (সাতরাস্তা হয়ে) (বিকল্প)",
  "nameEn": "Peerjongi Mazar → Notun Bazar (via Satrasta) (Alternative)",
  "totalKm": 15,
  "stops": [
    {
      "id": 0,
      "nameEn": "Peerjongi Mazar",
      "nameBn": "পীরজঙ্গী মাজার",
      "aliases": [
        "peerjongi mazar",
        "পীরজঙ্গী মাজার"
      ]
    },
    {
      "id": 1,
      "nameEn": "Kamalapur Station",
      "nameBn": "কমলাপুর স্টেশন",
      "aliases": [
        "kamalapur station",
        "কমলাপুর স্টেশন"
      ]
    },
    {
      "id": 2,
      "nameEn": "Bangladesh Bank",
      "nameBn": "বাংলাদেশ ব্যাংক",
      "aliases": [
        "bangladesh bank",
        "বাংলাদেশ ব্যাংক"
      ]
    },
    {
      "id": 3,
      "nameEn": "Stadium",
      "nameBn": "স্টেডিয়াম",
      "aliases": [
        "stadium",
        "স্টেডিয়াম"
      ]
    },
    {
      "id": 4,
      "nameEn": "Paltan",
      "nameBn": "পল্টন",
      "aliases": [
        "paltan",
        "পল্টন"
      ]
    },
    {
      "id": 5,
      "nameEn": "Kakrail",
      "nameBn": "কাকরাইল",
      "aliases": [
        "kakrail",
        "কাকরাইল"
      ]
    },
    {
      "id": 6,
      "nameEn": "Malibagh",
      "nameBn": "মালিবাগ",
      "aliases": [
        "malibagh",
        "মালিবাগ"
      ]
    },
    {
      "id": 7,
      "nameEn": "Moghbazar",
      "nameBn": "মগবাজার",
      "aliases": [
        "moghbazar",
        "মগবাজার"
      ]
    },
    {
      "id": 8,
      "nameEn": "Satrasta",
      "nameBn": "সাতরাস্তা",
      "aliases": [
        "satrasta",
        "সাতরাস্তা"
      ]
    },
    {
      "id": 9,
      "nameEn": "Nabisco",
      "nameBn": "নাবিস্কো",
      "aliases": [
        "nabisco",
        "নাবিস্কো"
      ]
    },
    {
      "id": 10,
      "nameEn": "Mohakhali",
      "nameBn": "মহাখালী",
      "aliases": [
        "mohakhali",
        "মহাখালী"
      ]
    },
    {
      "id": 11,
      "nameEn": "Titumir College",
      "nameBn": "তিতুমীর কলেজ",
      "aliases": [
        "titumir college",
        "তিতুমীর কলেজ"
      ]
    },
    {
      "id": 12,
      "nameEn": "Gulshan-1",
      "nameBn": "গুলশান-১",
      "aliases": [
        "gulshan-1",
        "গুলশান-১",
        "gulshan 1"
      ]
    },
    {
      "id": 13,
      "nameEn": "Notun Bazar",
      "nameBn": "নতুন বাজার",
      "aliases": [
        "notun bazar",
        "নতুন বাজার"
      ]
    }
  ],
  "fareMatrix": [
    [
      0,
      10,
      10,
      10,
      10,
      14,
      16,
      19,
      22,
      26,
      28,
      30,
      33,
      41
    ],
    [
      10,
      0,
      10,
      10,
      10,
      12,
      15,
      18,
      21,
      24,
      26,
      29,
      32,
      39
    ],
    [
      10,
      10,
      0,
      10,
      10,
      10,
      12,
      15,
      18,
      22,
      24,
      26,
      29,
      36
    ],
    [
      10,
      10,
      10,
      0,
      10,
      10,
      10,
      12,
      15,
      18,
      20,
      22,
      25,
      33
    ],
    [
      10,
      10,
      10,
      10,
      0,
      10,
      10,
      10,
      13,
      16,
      18,
      21,
      23,
      31
    ],
    [
      14,
      12,
      10,
      10,
      10,
      0,
      10,
      10,
      10,
      12,
      14,
      16,
      19,
      27
    ],
    [
      16,
      15,
      12,
      10,
      10,
      10,
      0,
      10,
      10,
      10,
      12,
      14,
      17,
      25
    ],
    [
      19,
      18,
      15,
      12,
      10,
      10,
      10,
      0,
      10,
      10,
      10,
      11,
      14,
      21
    ],
    [
      22,
      21,
      18,
      15,
      13,
      10,
      10,
      10,
      0,
      10,
      10,
      10,
      11,
      18
    ],
    [
      26,
      24,
      22,
      18,
      16,
      12,
      10,
      10,
      10,
      0,
      10,
      10,
      10,
      15
    ],
    [
      28,
      26,
      24,
      20,
      18,
      14,
      12,
      10,
      10,
      10,
      0,
      10,
      10,
      13
    ],
    [
      30,
      29,
      26,
      22,
      21,
      16,
      14,
      11,
      10,
      10,
      10,
      0,
      10,
      10
    ],
    [
      33,
      32,
      29,
      25,
      23,
      19,
      17,
      14,
      11,
      10,
      10,
      10,
      0,
      10
    ],
    [
      41,
      39,
      36,
      33,
      31,
      27,
      25,
      21,
      18,
      15,
      13,
      10,
      10,
      0
    ]
  ]
},
{
  "id": "SAYEDABAD_BALUGHAT_2",
  "routeNo": "সায়দাবাদ-বালুঘাট (বিকল্প)",
  "nameBn": "সায়দাবাদ → বালুঘাট (বিকল্প)",
  "nameEn": "Sayedabad → Balughat (Alternative)",
  "totalKm": 14.6,
  "stops": [
    {
      "id": 0,
      "nameEn": "Sayedabad",
      "nameBn": "সায়দাবাদ",
      "aliases": [
        "sayedabad",
        "সায়দাবাদ"
      ]
    },
    {
      "id": 1,
      "nameEn": "Bangladesh Bank",
      "nameBn": "বাংলাদেশ ব্যাংক",
      "aliases": [
        "bangladesh bank",
        "বাংলাদেশ ব্যাংক"
      ]
    },
    {
      "id": 2,
      "nameEn": "UBL",
      "nameBn": "ইউবিএল",
      "aliases": [
        "ubl",
        "ইউবিএল"
      ]
    },
    {
      "id": 3,
      "nameEn": "Pressclub",
      "nameBn": "প্রেসক্লাব",
      "aliases": [
        "pressclub",
        "প্রেসক্লাব"
      ]
    },
    {
      "id": 4,
      "nameEn": "Shahbag",
      "nameBn": "শাহবাগ",
      "aliases": [
        "shahbag",
        "শাহবাগ"
      ]
    },
    {
      "id": 5,
      "nameEn": "Farmgate",
      "nameBn": "ফার্মগেট",
      "aliases": [
        "farmgate",
        "ফার্মগেট"
      ]
    },
    {
      "id": 6,
      "nameEn": "Balughat",
      "nameBn": "বালুঘাট",
      "aliases": [
        "balughat",
        "বালুঘাট"
      ]
    }
  ],
  "fareMatrix": [
    [
      0,
      10,
      10,
      10,
      14,
      20,
      39
    ],
    [
      10,
      0,
      10,
      10,
      10,
      14,
      33
    ],
    [
      10,
      10,
      0,
      10,
      10,
      11,
      30
    ],
    [
      10,
      10,
      10,
      0,
      10,
      10,
      29
    ],
    [
      14,
      10,
      10,
      10,
      0,
      10,
      25
    ],
    [
      20,
      14,
      11,
      10,
      10,
      0,
      19
    ],
    [
      39,
      33,
      30,
      29,
      25,
      19,
      0
    ]
  ]
},
{
  "id": "UTTARA_VICTORIA_2",
  "routeNo": "উত্তরা-ভিক্টোরিয়া (বিকল্প)",
  "nameBn": "উত্তরা (রাণীগঞ্জ) → ভিক্টোরিয়া পার্ক (বিকল্প)",
  "nameEn": "Uttara (Raniganj) → Victoria Park (Alternative)",
  "totalKm": 23.3,
  "stops": [
    {
      "id": 0,
      "nameEn": "Uttara (Raniganj)",
      "nameBn": "উত্তরা (রাণীগঞ্জ)",
      "aliases": [
        "uttara (raniganj)",
        "uttara",
        "উত্তরা (রাণীগঞ্জ)",
        "উত্তরা"
      ]
    },
    {
      "id": 1,
      "nameEn": "Notun Bazar",
      "nameBn": "নতুন বাজার",
      "aliases": [
        "notun bazar",
        "নতুন বাজার"
      ]
    },
    {
      "id": 2,
      "nameEn": "Rampura TV Center",
      "nameBn": "রামপুরা টিভি সেন্টার",
      "aliases": [
        "rampura tv center",
        "রামপুরা টিভি সেন্টার"
      ]
    },
    {
      "id": 3,
      "nameEn": "Malibagh",
      "nameBn": "মালিবাগ",
      "aliases": [
        "malibagh",
        "মালিবাগ"
      ]
    },
    {
      "id": 4,
      "nameEn": "Kakrail",
      "nameBn": "কাকরাইল",
      "aliases": [
        "kakrail",
        "কাকরাইল"
      ]
    },
    {
      "id": 5,
      "nameEn": "Bangabandhu Avenue",
      "nameBn": "বঙ্গবন্ধু এভিনিউ",
      "aliases": [
        "bangabandhu avenue",
        "বঙ্গবন্ধু এভিনিউ"
      ]
    },
    {
      "id": 6,
      "nameEn": "Victoria Park",
      "nameBn": "ভিক্টোরিয়া পার্ক",
      "aliases": [
        "victoria park",
        "ভিক্টোরিয়া পার্ক"
      ]
    }
  ],
  "fareMatrix": [
    [
      0,
      32,
      41,
      50,
      52,
      57,
      63
    ],
    [
      32,
      0,
      10,
      18,
      20,
      25,
      31
    ],
    [
      41,
      10,
      0,
      10,
      11,
      16,
      22
    ],
    [
      50,
      18,
      10,
      0,
      10,
      10,
      13
    ],
    [
      52,
      20,
      11,
      10,
      0,
      10,
      10
    ],
    [
      57,
      25,
      16,
      10,
      10,
      0,
      10
    ],
    [
      63,
      31,
      22,
      13,
      10,
      10,
      0
    ]
  ]
},
{
  "id": "BANASREE_SHIA_2",
  "routeNo": "বনশ্রী-শিয়া (বিকল্প)",
  "nameBn": "বনশ্রী → মোহাম্মদপুর শিয়া মসজিদ (বিকল্প)",
  "nameEn": "Banasree → Mohammadpur Shia Masjid (Alternative)",
  "totalKm": 18.2,
  "stops": [
    {
      "id": 0,
      "nameEn": "Banasree",
      "nameBn": "বনশ্রী",
      "aliases": [
        "banasree",
        "বনশ্রী"
      ]
    },
    {
      "id": 1,
      "nameEn": "Rampura",
      "nameBn": "রামপুরা",
      "aliases": [
        "rampura",
        "রামপুরা"
      ]
    },
    {
      "id": 2,
      "nameEn": "Gulshan-1",
      "nameBn": "গুলশান-১",
      "aliases": [
        "gulshan-1",
        "গুলশান-১",
        "gulshan 1",
        "গুলশান ১"
      ]
    },
    {
      "id": 3,
      "nameEn": "Mohakhali",
      "nameBn": "মহাখালী",
      "aliases": [
        "mohakhali",
        "মহাখালী"
      ]
    },
    {
      "id": 4,
      "nameEn": "Agargaon",
      "nameBn": "আগারগাঁও",
      "aliases": [
        "agargaon",
        "আগারগাঁও"
      ]
    },
    {
      "id": 5,
      "nameEn": "Shyamoli Ring Road",
      "nameBn": "শ্যামলী রিং রোড",
      "aliases": [
        "shyamoli ring road",
        "শ্যামলী রিং রোড"
      ]
    },
    {
      "id": 6,
      "nameEn": "Mohammadpur Shia Masjid",
      "nameBn": "মোহাম্মদপুর শিয়া মসজিদ",
      "aliases": [
        "mohammadpur shia masjid",
        "mohammadpur",
        "মোহাম্মদপুর শিয়া মসজিদ",
        "মোহাম্মদপুর"
      ]
    }
  ],
  "fareMatrix": [
    [
      0,
      10,
      21,
      28,
      38,
      45,
      49
    ],
    [
      10,
      0,
      14,
      21,
      31,
      38,
      42
    ],
    [
      21,
      14,
      0,
      10,
      17,
      24,
      28
    ],
    [
      28,
      21,
      10,
      0,
      11,
      18,
      22
    ],
    [
      38,
      31,
      17,
      11,
      0,
      10,
      11
    ],
    [
      45,
      38,
      24,
      18,
      10,
      0,
      10
    ],
    [
      49,
      42,
      28,
      22,
      11,
      10,
      0
    ]
  ]
},
{
  "id": "BANASREE_MOHAMMADPUR_ASAD",
  "routeNo": "বনশ্রী-মোহাম্মদপুর (বিকল্প)",
  "nameBn": "বনশ্রী → মোহাম্মদপুর (আসাদ এভিনিউ) (বিকল্প)",
  "nameEn": "Banasree → Mohammadpur (Asad Avenue) (Alternative)",
  "totalKm": 14,
  "stops": [
    {
      "id": 0,
      "nameEn": "Banasree",
      "nameBn": "বনশ্রী",
      "aliases": [
        "banasree",
        "বনশ্রী"
      ]
    },
    {
      "id": 1,
      "nameEn": "Mouchak",
      "nameBn": "মৌচাক",
      "aliases": [
        "mouchak",
        "মৌচাক"
      ]
    },
    {
      "id": 2,
      "nameEn": "Kakrail",
      "nameBn": "কাকরাইল",
      "aliases": [
        "kakrail",
        "কাকরাইল"
      ]
    },
    {
      "id": 3,
      "nameEn": "Shahbag",
      "nameBn": "শাহবাগ",
      "aliases": [
        "shahbag",
        "শাহবাগ"
      ]
    },
    {
      "id": 4,
      "nameEn": "Science Lab",
      "nameBn": "সাইন্সল্যাব",
      "aliases": [
        "science lab",
        "সাইন্সল্যাব"
      ]
    },
    {
      "id": 5,
      "nameEn": "Jigatola",
      "nameBn": "জিগাতলা",
      "aliases": [
        "jigatola",
        "জিগাতলা"
      ]
    },
    {
      "id": 6,
      "nameEn": "Mohammadpur (Asad Avenue)",
      "nameBn": "মোহাম্মদপুর (আসাদ এভিনিউ)",
      "aliases": [
        "mohammadpur asad avenue",
        "mohammadpur",
        "মোহাম্মদপুর (আসাদ এভিনিউ)",
        "মোহাম্মদপুর"
      ]
    }
  ],
  "fareMatrix": [
    [
      0,
      16,
      18,
      24,
      27,
      30,
      38
    ],
    [
      16,
      0,
      10,
      10,
      11,
      14,
      22
    ],
    [
      18,
      10,
      0,
      10,
      10,
      12,
      20
    ],
    [
      24,
      10,
      10,
      0,
      10,
      10,
      14
    ],
    [
      27,
      11,
      10,
      10,
      0,
      10,
      10
    ],
    [
      30,
      14,
      12,
      10,
      10,
      0,
      10
    ],
    [
      38,
      22,
      20,
      14,
      10,
      10,
      0
    ]
  ]
},
{
  "id": "MOHAMMADPUR_POSTOGOLA",
  "routeNo": "মোহাম্মদপুর-পোস্তগোলা (বিকল্প)",
  "nameBn": "মোহাম্মদপুর (জাপান গার্ডেন সিটি) → পোস্তগোলা (বিকল্প)",
  "nameEn": "Mohammadpur (Japan Garden City) → Postogola (Alternative)",
  "totalKm": 16.2,
  "stops": [
    {
      "id": 0,
      "nameEn": "Mohammadpur (Japan Garden City)",
      "nameBn": "মোংপুর (জাপান গার্ডেন সিটি)",
      "aliases": [
        "mohammadpur japan garden city",
        "mohammadpur",
        "মোংপুর (জাপান গার্ডেন সিটি)",
        "মোহাম্মদপুর"
      ]
    },
    {
      "id": 1,
      "nameEn": "Shyamoli",
      "nameBn": "শ্যামলী",
      "aliases": [
        "shyamoli",
        "শ্যামলী"
      ]
    },
    {
      "id": 2,
      "nameEn": "Asad Gate",
      "nameBn": "আসাদগেট",
      "aliases": [
        "asad gate",
        "আসাদগেট"
      ]
    },
    {
      "id": 3,
      "nameEn": "Science Lab",
      "nameBn": "সাইন্সল্যাবঃ",
      "aliases": [
        "science lab",
        "সাইন্সল্যাব",
        "সাইন্সল্যাবঃ"
      ]
    },
    {
      "id": 4,
      "nameEn": "Shahbag",
      "nameBn": "শাহবাগ",
      "aliases": [
        "shahbag",
        "শাহবাগ"
      ]
    },
    {
      "id": 5,
      "nameEn": "Kakrail",
      "nameBn": "কাকরাইল",
      "aliases": [
        "kakrail",
        "কাকরাইল"
      ]
    },
    {
      "id": 6,
      "nameEn": "Fakirapool",
      "nameBn": "ফকিরাপুল",
      "aliases": [
        "fakirapool",
        "ফকিরাপুল"
      ]
    },
    {
      "id": 7,
      "nameEn": "Bangladesh Bank",
      "nameBn": "বাংলাদেশ ব্যাংক",
      "aliases": [
        "bangladesh bank",
        "বাংলাদেশ ব্যাংক"
      ]
    },
    {
      "id": 8,
      "nameEn": "Doyaganj Road",
      "nameBn": "দয়াগঞ্জ রোড",
      "aliases": [
        "doyaganj road",
        "দয়াগঞ্জ রোড"
      ]
    },
    {
      "id": 9,
      "nameEn": "Postogola",
      "nameBn": "পোস্তগোলা",
      "aliases": [
        "postogola",
        "পোস্তগোলা"
      ]
    }
  ],
  "fareMatrix": [
    [
      0,
      10,
      12,
      19,
      23,
      27,
      31,
      33,
      38,
      44
    ],
    [
      10,
      0,
      10,
      12,
      16,
      20,
      23,
      26,
      30,
      36
    ],
    [
      12,
      10,
      0,
      10,
      11,
      15,
      19,
      22,
      26,
      32
    ],
    [
      19,
      12,
      10,
      0,
      10,
      10,
      11,
      14,
      18,
      25
    ],
    [
      23,
      16,
      11,
      10,
      0,
      10,
      10,
      10,
      14,
      21
    ],
    [
      27,
      20,
      15,
      10,
      10,
      0,
      10,
      10,
      10,
      16
    ],
    [
      31,
      23,
      19,
      11,
      10,
      10,
      0,
      10,
      10,
      13
    ],
    [
      33,
      26,
      22,
      14,
      10,
      10,
      10,
      0,
      10,
      10
    ],
    [
      38,
      30,
      26,
      18,
      14,
      10,
      10,
      10,
      0,
      10
    ],
    [
      44,
      36,
      32,
      25,
      21,
      16,
      13,
      10,
      10,
      0
    ]
  ]
},
{
  "id": "A190",
  "routeNo": "এ-১৯০",
  "nameBn": "ইপিজেড → লিংক রোড",
  "nameEn": "EPZ → Link Road",
  "totalKm": 46.2,
  "stops": [
    {
      "id": 0,
      "nameEn": "EPZ",
      "nameBn": "ইপিজেড",
      "aliases": [
        "epz",
        "ইপিজেড"
      ]
    },
    {
      "id": 1,
      "nameEn": "Gabtoli",
      "nameBn": "গাবতলি",
      "aliases": [
        "gabtoli",
        "গাবতলি"
      ]
    },
    {
      "id": 2,
      "nameEn": "Kalyanpur",
      "nameBn": "কল্যাণপুর",
      "aliases": [
        "kalyanpur",
        "কল্যাণপুর"
      ]
    },
    {
      "id": 3,
      "nameEn": "College Gate",
      "nameBn": "কলেজগেট",
      "aliases": [
        "college gate",
        "কলেজগেট"
      ]
    },
    {
      "id": 4,
      "nameEn": "Farmgate",
      "nameBn": "ফার্মগেট",
      "aliases": [
        "farmgate",
        "ফার্মগেট"
      ]
    },
    {
      "id": 5,
      "nameEn": "Bangladesh Bank",
      "nameBn": "বাংলাদেশ ব্যাংক",
      "aliases": [
        "bangladesh bank",
        "বাংলাদেশ ব্যাংক"
      ]
    },
    {
      "id": 6,
      "nameEn": "Sayedabad",
      "nameBn": "সায়েদাবাদ",
      "aliases": [
        "sayedabad",
        "সায়েদাবাদ"
      ]
    },
    {
      "id": 7,
      "nameEn": "Link Road",
      "nameBn": "লিংক রোড",
      "aliases": [
        "link road",
        "লিংক রোড"
      ]
    }
  ],
  "fareMatrix": [
    [
      0,
      70,
      76,
      80,
      87,
      103,
      108,
      125
    ],
    [
      70,
      null,
      10,
      10,
      18,
      33,
      38,
      55
    ],
    [
      76,
      10,
      null,
      10,
      11,
      26,
      32,
      48
    ],
    [
      80,
      10,
      10,
      null,
      10,
      23,
      28,
      45
    ],
    [
      87,
      18,
      11,
      10,
      null,
      15,
      21,
      37
    ],
    [
      103,
      33,
      26,
      23,
      15,
      null,
      10,
      22
    ],
    [
      108,
      38,
      32,
      28,
      21,
      10,
      null,
      17
    ],
    [
      125,
      55,
      48,
      45,
      37,
      22,
      17,
      null
    ]
  ]
},
{
  "id": "A192",
  "routeNo": "এ-১৯২",
  "nameBn": "ঈদগাহ → চিটাগাং রোড",
  "nameEn": "Eidgah → Chittagong Road",
  "totalKm": 47.5,
  "stops": [
    {
      "id": 0,
      "nameEn": "Eidgah",
      "nameBn": "ঈদগাহ",
      "aliases": [
        "eidgah",
        "ঈদগাহ"
      ]
    },
    {
      "id": 1,
      "nameEn": "Savar",
      "nameBn": "সাভার",
      "aliases": [
        "savar",
        "সাভার"
      ]
    },
    {
      "id": 2,
      "nameEn": "Gabtoli",
      "nameBn": "গাবতলি",
      "aliases": [
        "gabtoli",
        "গাবতলি"
      ]
    },
    {
      "id": 3,
      "nameEn": "Kalyanpur",
      "nameBn": "কল্যাণপুর",
      "aliases": [
        "kalyanpur",
        "কল্যাণপুর"
      ]
    },
    {
      "id": 4,
      "nameEn": "College Gate",
      "nameBn": "কলেজগেট",
      "aliases": [
        "college gate",
        "কলেজগেট"
      ]
    },
    {
      "id": 5,
      "nameEn": "Farmgate",
      "nameBn": "ফার্মগেট",
      "aliases": [
        "farmgate",
        "ফার্মগেট"
      ]
    },
    {
      "id": 6,
      "nameEn": "Mohakhali",
      "nameBn": "মহাখালী",
      "aliases": [
        "mohakhali",
        "মহাখালী"
      ]
    },
    {
      "id": 7,
      "nameEn": "Gulshan",
      "nameBn": "গুলশান",
      "aliases": [
        "gulshan",
        "গুলশান"
      ]
    },
    {
      "id": 8,
      "nameEn": "Badda",
      "nameBn": "বাড্ডা",
      "aliases": [
        "badda",
        "বাড্ডা"
      ]
    },
    {
      "id": 9,
      "nameEn": "Malibagh",
      "nameBn": "মালিবাগ",
      "aliases": [
        "malibagh",
        "মালিবাগ"
      ]
    },
    {
      "id": 10,
      "nameEn": "Tikatuli",
      "nameBn": "টিকাটুলি",
      "aliases": [
        "tikatuli",
        "টিকাটুলি"
      ]
    },
    {
      "id": 11,
      "nameEn": "Sayedabad",
      "nameBn": "সায়েদাবাদ",
      "aliases": [
        "sayedabad",
        "সায়েদাবাদ"
      ]
    },
    {
      "id": 12,
      "nameEn": "Chittagong Road",
      "nameBn": "চিটাগাং রোড",
      "aliases": [
        "chittagong road",
        "চিটাগাং রোড"
      ]
    }
  ],
  "fareMatrix": [
    [
      0,
      35,
      70,
      76,
      80,
      87,
      92,
      95,
      98,
      104,
      113,
      114,
      128
    ],
    [
      35,
      null,
      35,
      42,
      45,
      53,
      57,
      60,
      63,
      70,
      78,
      80,
      94
    ],
    [
      70,
      35,
      null,
      10,
      10,
      18,
      22,
      25,
      28,
      35,
      43,
      44,
      58
    ],
    [
      76,
      42,
      10,
      null,
      10,
      11,
      15,
      18,
      22,
      28,
      36,
      38,
      52
    ],
    [
      80,
      45,
      10,
      10,
      null,
      10,
      12,
      15,
      18,
      25,
      33,
      34,
      48
    ],
    [
      87,
      53,
      18,
      11,
      10,
      null,
      10,
      10,
      11,
      17,
      25,
      27,
      41
    ],
    [
      92,
      57,
      22,
      15,
      12,
      10,
      null,
      10,
      10,
      13,
      21,
      22,
      36
    ],
    [
      95,
      60,
      25,
      18,
      15,
      10,
      10,
      null,
      10,
      10,
      18,
      20,
      34
    ],
    [
      98,
      63,
      28,
      22,
      18,
      11,
      10,
      10,
      null,
      10,
      15,
      16,
      30
    ],
    [
      104,
      70,
      35,
      28,
      25,
      17,
      13,
      10,
      10,
      null,
      10,
      10,
      24
    ],
    [
      113,
      78,
      43,
      36,
      33,
      25,
      21,
      18,
      15,
      10,
      null,
      10,
      16
    ],
    [
      114,
      80,
      44,
      38,
      34,
      27,
      22,
      20,
      16,
      10,
      10,
      null,
      14
    ],
    [
      128,
      94,
      58,
      52,
      48,
      41,
      36,
      34,
      30,
      24,
      16,
      14,
      null
    ]
  ]
},
{
  "id": "A202",
  "routeNo": "এ-২০২",
  "nameBn": "সাভার → ভিক্টোরিয়া পার্ক",
  "nameEn": "Savar → Victoria Park",
  "totalKm": 43,
  "stops": [
    {
      "id": 0,
      "nameEn": "Savar",
      "nameBn": "সাভার",
      "aliases": [
        "savar",
        "সাভার"
      ]
    },
    {
      "id": 1,
      "nameEn": "Gabtoli",
      "nameBn": "গাবতলি",
      "aliases": [
        "gabtoli",
        "গাবতলি"
      ]
    },
    {
      "id": 2,
      "nameEn": "Mirpur-1",
      "nameBn": "মিরপুর-১",
      "aliases": [
        "mirpur-1",
        "মিরপুর-১"
      ]
    },
    {
      "id": 3,
      "nameEn": "Mirpur-10",
      "nameBn": "মিরপুর-১০",
      "aliases": [
        "mirpur-10",
        "মিরপুর-১০"
      ]
    },
    {
      "id": 4,
      "nameEn": "Kakoli",
      "nameBn": "কাকলী",
      "aliases": [
        "kakoli",
        "কাকলী"
      ]
    },
    {
      "id": 5,
      "nameEn": "Notun Bazar",
      "nameBn": "নতুন বাজার",
      "aliases": [
        "notun bazar",
        "নতুন বাজার"
      ]
    },
    {
      "id": 6,
      "nameEn": "Rampura",
      "nameBn": "রামপুরা",
      "aliases": [
        "rampura",
        "রামপুরা"
      ]
    },
    {
      "id": 7,
      "nameEn": "Malibagh",
      "nameBn": "মালিবাগ",
      "aliases": [
        "malibagh",
        "মালিবাগ"
      ]
    },
    {
      "id": 8,
      "nameEn": "Gulistan",
      "nameBn": "গুলিস্তান",
      "aliases": [
        "gulistan",
        "গুলিস্তান"
      ]
    },
    {
      "id": 9,
      "nameEn": "Victoria Park",
      "nameBn": "ভিক্টোরিয়া পার্ক",
      "aliases": [
        "victoria park",
        "ভিক্টোরিয়া পার্ক"
      ]
    }
  ],
  "fareMatrix": [
    [
      0,
      37,
      46,
      51,
      71,
      78,
      92,
      98,
      106,
      116
    ],
    [
      37,
      null,
      10,
      14,
      34,
      40,
      55,
      61,
      69,
      79
    ],
    [
      46,
      10,
      null,
      10,
      25,
      32,
      46,
      53,
      61,
      70
    ],
    [
      51,
      14,
      10,
      null,
      20,
      27,
      41,
      48,
      56,
      65
    ],
    [
      71,
      34,
      25,
      20,
      null,
      10,
      21,
      27,
      35,
      45
    ],
    [
      78,
      40,
      32,
      27,
      10,
      null,
      14,
      21,
      29,
      39
    ],
    [
      92,
      55,
      46,
      41,
      21,
      14,
      null,
      10,
      15,
      24
    ],
    [
      98,
      61,
      53,
      48,
      27,
      21,
      10,
      null,
      10,
      18
    ],
    [
      106,
      69,
      61,
      56,
      35,
      29,
      15,
      10,
      null,
      10
    ],
    [
      116,
      79,
      70,
      65,
      45,
      39,
      24,
      18,
      10,
      null
    ]
  ]
},
{
  "id": "A207",
  "routeNo": "এ-২০৭",
  "nameBn": "টঙ্গী → ঢাকেশ্বরী",
  "nameEn": "Tongi → Dhakeshwari",
  "totalKm": 28,
  "stops": [
    {
      "id": 0,
      "nameEn": "Tongi",
      "nameBn": "টঙ্গী",
      "aliases": [
        "tongi",
        "টঙ্গী"
      ]
    },
    {
      "id": 1,
      "nameEn": "Azampur",
      "nameBn": "আজমপুর",
      "aliases": [
        "azampur",
        "আজমপুর"
      ]
    },
    {
      "id": 2,
      "nameEn": "Mohakhali",
      "nameBn": "মহাখালী",
      "aliases": [
        "mohakhali",
        "মহাখালী"
      ]
    },
    {
      "id": 3,
      "nameEn": "Farmgate",
      "nameBn": "ফার্মগেট",
      "aliases": [
        "farmgate",
        "ফার্মগেট"
      ]
    },
    {
      "id": 4,
      "nameEn": "Manik Mia",
      "nameBn": "মানিক মিয়া",
      "aliases": [
        "manik mia",
        "মানিক মিয়া",
        "manik mia avenue"
      ]
    },
    {
      "id": 5,
      "nameEn": "City College",
      "nameBn": "সিটি কলেজ",
      "aliases": [
        "city college",
        "সিটি কলেজ"
      ]
    },
    {
      "id": 6,
      "nameEn": "Nilkhet",
      "nameBn": "নীলক্ষেত",
      "aliases": [
        "nilkhet",
        "নীলক্ষেত"
      ]
    },
    {
      "id": 7,
      "nameEn": "Dhakeshwari",
      "nameBn": "ঢাকেশ্বরী",
      "aliases": [
        "dhakeshwari",
        "ঢাকেশ্বরী",
        "ঢাকেশ্বরী এতিমখানা"
      ]
    }
  ],
  "fareMatrix": [
    [
      0,
      20,
      51,
      58,
      63,
      69,
      72,
      76
    ],
    [
      20,
      null,
      31,
      38,
      43,
      49,
      52,
      56
    ],
    [
      51,
      31,
      null,
      10,
      12,
      17,
      20,
      24
    ],
    [
      58,
      38,
      10,
      null,
      10,
      11,
      14,
      18
    ],
    [
      63,
      43,
      12,
      10,
      null,
      10,
      10,
      13
    ],
    [
      69,
      49,
      17,
      11,
      10,
      null,
      10,
      10
    ],
    [
      72,
      52,
      20,
      14,
      10,
      10,
      null,
      10
    ],
    [
      76,
      56,
      24,
      18,
      13,
      10,
      10,
      null
    ]
  ]
},
{
  "id": "A219",
  "routeNo": "এ-২১৯",
  "nameBn": "ফুলবাড়ীয়া → কাপাসিয়া",
  "nameEn": "Fulbaria → Kapasia",
  "totalKm": 66,
  "stops": [
    {
      "id": 0,
      "nameEn": "Fulbaria",
      "nameBn": "ফুলবাড়ীয়া",
      "aliases": [
        "fulbaria",
        "ফুলবাড়ীয়া"
      ]
    },
    {
      "id": 1,
      "nameEn": "Malibagh",
      "nameBn": "মালিবাগ",
      "aliases": [
        "malibagh",
        "মালিবাগ"
      ]
    },
    {
      "id": 2,
      "nameEn": "Nabisco",
      "nameBn": "নাবিস্কো",
      "aliases": [
        "nabisco",
        "নাবিস্কো"
      ]
    },
    {
      "id": 3,
      "nameEn": "Mohakhali",
      "nameBn": "মহাখালী",
      "aliases": [
        "mohakhali",
        "মহাখালী"
      ]
    },
    {
      "id": 4,
      "nameEn": "Banani",
      "nameBn": "বনানী",
      "aliases": [
        "banani",
        "বনানী"
      ]
    },
    {
      "id": 5,
      "nameEn": "Airport",
      "nameBn": "এয়ারপোর্ট",
      "aliases": [
        "airport",
        "এয়ারপোর্ট"
      ]
    },
    {
      "id": 6,
      "nameEn": "Tongi",
      "nameBn": "টঙ্গী",
      "aliases": [
        "tongi",
        "টঙ্গী"
      ]
    },
    {
      "id": 7,
      "nameEn": "Gazipur Chowrasta",
      "nameBn": "গাজীপুর চৌঃ",
      "aliases": [
        "gazipur chowrasta",
        "গাজীপুর চৌঃ",
        "গাজীপুর"
      ]
    },
    {
      "id": 8,
      "nameEn": "Rajendrapur",
      "nameBn": "রাজেন্দ্রপুর",
      "aliases": [
        "rajendrapur",
        "রাজেন্দ্রপুর"
      ]
    },
    {
      "id": 9,
      "nameEn": "Rajabari",
      "nameBn": "রাজাবাড়ী",
      "aliases": [
        "rajabari",
        "রাজাবাড়ী"
      ]
    },
    {
      "id": 10,
      "nameEn": "Pabur",
      "nameBn": "পাবুর",
      "aliases": [
        "pabur",
        "পাবুর"
      ]
    },
    {
      "id": 11,
      "nameEn": "Kapasia",
      "nameBn": "কাপাসিয়া",
      "aliases": [
        "kapasia",
        "কাপাসিয়া"
      ]
    }
  ],
  "fareMatrix": [
    [
      0,
      11,
      23,
      25,
      30,
      53,
      68,
      99,
      131,
      146,
      159,
      178
    ],
    [
      11,
      null,
      11,
      14,
      19,
      42,
      56,
      87,
      120,
      134,
      147,
      167
    ],
    [
      23,
      11,
      null,
      10,
      10,
      31,
      45,
      76,
      109,
      123,
      136,
      156
    ],
    [
      25,
      14,
      10,
      null,
      10,
      28,
      42,
      73,
      106,
      120,
      133,
      153
    ],
    [
      30,
      19,
      10,
      10,
      null,
      23,
      38,
      69,
      101,
      116,
      129,
      149
    ],
    [
      53,
      42,
      31,
      28,
      23,
      null,
      14,
      45,
      78,
      92,
      105,
      125
    ],
    [
      68,
      56,
      45,
      42,
      38,
      14,
      null,
      31,
      64,
      78,
      91,
      111
    ],
    [
      99,
      87,
      76,
      73,
      69,
      45,
      31,
      null,
      33,
      47,
      60,
      80
    ],
    [
      131,
      120,
      109,
      106,
      101,
      78,
      64,
      33,
      null,
      15,
      28,
      47
    ],
    [
      146,
      134,
      123,
      120,
      116,
      92,
      78,
      47,
      15,
      null,
      13,
      32
    ],
    [
      159,
      147,
      136,
      133,
      129,
      105,
      91,
      60,
      28,
      13,
      null,
      19
    ],
    [
      178,
      167,
      156,
      153,
      149,
      125,
      111,
      80,
      47,
      32,
      19,
      null
    ]
  ]
},
{
  "id": "A161",
  "routeNo": "এ-১৬১",
  "nameBn": "ঘাটারচর → ধুপখোলা",
  "nameEn": "Ghatarchar → Dhupkhola",
  "totalKm": 20.5,
  "stops": [
    {
      "id": 0,
      "nameEn": "Ghatarchar",
      "nameBn": "ঘাটারচর",
      "aliases": [
        "ghatarchar",
        "ঘাটারচর"
      ]
    },
    {
      "id": 1,
      "nameEn": "Mohammadpur",
      "nameBn": "মোহাম্মদপুর",
      "aliases": [
        "mohammadpur",
        "মোহাম্মদপুর",
        "মোংপুর"
      ]
    },
    {
      "id": 2,
      "nameEn": "Shankar",
      "nameBn": "শংকর",
      "aliases": [
        "shankar",
        "শংকর"
      ]
    },
    {
      "id": 3,
      "nameEn": "Dhanmondi-15",
      "nameBn": "ধানমন্ডি-১৫",
      "aliases": [
        "dhanmondi-15",
        "ধানমন্ডি-১৫",
        "dhanmondi 15"
      ]
    },
    {
      "id": 4,
      "nameEn": "Jigatola",
      "nameBn": "জিগাতলা",
      "aliases": [
        "jigatola",
        "জিগাতলা"
      ]
    },
    {
      "id": 5,
      "nameEn": "Dhaka City College",
      "nameBn": "ঢাকা সিটি কলেজ",
      "aliases": [
        "dhaka city college",
        "ঢাকা সিটি কলেজ",
        "city college"
      ]
    },
    {
      "id": 6,
      "nameEn": "Science Lab",
      "nameBn": "সাইন্সল্যাব",
      "aliases": [
        "science lab",
        "সাইন্সল্যাব",
        "সাইন্সল্যাবঃ"
      ]
    },
    {
      "id": 7,
      "nameEn": "Dhaka College",
      "nameBn": "ঢাকা কলেজ",
      "aliases": [
        "dhaka college",
        "ঢাকা কলেজ"
      ]
    },
    {
      "id": 8,
      "nameEn": "New Market",
      "nameBn": "নিউ মার্কেট",
      "aliases": [
        "new market",
        "নিউ মার্কেট",
        "নিউমার্কেট"
      ]
    },
    {
      "id": 9,
      "nameEn": "Azimpur",
      "nameBn": "আজিমপুর",
      "aliases": [
        "azimpur",
        "আজিমপুর"
      ]
    },
    {
      "id": 10,
      "nameEn": "Nilkhet",
      "nameBn": "নীলক্ষেত",
      "aliases": [
        "nilkhet",
        "নীলক্ষেত"
      ]
    },
    {
      "id": 11,
      "nameEn": "Dhupkhola",
      "nameBn": "ধুপখোলা",
      "aliases": [
        "dhupkhola",
        "ধুপখোলা"
      ]
    }
  ],
  "fareMatrix": [
    [
      0,
      16,
      19,
      21,
      23,
      25,
      26,
      26,
      28,
      29,
      32,
      55
    ],
    [
      16,
      0,
      10,
      10,
      10,
      10,
      10,
      10,
      11,
      13,
      16,
      39
    ],
    [
      19,
      10,
      0,
      10,
      10,
      10,
      10,
      10,
      10,
      11,
      14,
      37
    ],
    [
      21,
      10,
      10,
      0,
      10,
      10,
      10,
      10,
      10,
      10,
      11,
      35
    ],
    [
      23,
      10,
      10,
      10,
      0,
      10,
      10,
      10,
      10,
      10,
      10,
      33
    ],
    [
      25,
      10,
      10,
      10,
      10,
      0,
      10,
      10,
      10,
      10,
      10,
      31
    ],
    [
      26,
      10,
      10,
      10,
      10,
      10,
      0,
      10,
      10,
      10,
      10,
      29
    ],
    [
      26,
      10,
      10,
      10,
      10,
      10,
      10,
      0,
      10,
      10,
      10,
      29
    ],
    [
      28,
      11,
      10,
      10,
      10,
      10,
      10,
      10,
      0,
      10,
      10,
      28
    ],
    [
      29,
      13,
      11,
      10,
      10,
      10,
      10,
      10,
      10,
      0,
      10,
      26
    ],
    [
      32,
      16,
      14,
      11,
      10,
      10,
      10,
      10,
      10,
      10,
      0,
      23
    ],
    [
      55,
      39,
      37,
      35,
      33,
      31,
      29,
      29,
      28,
      26,
      23,
      0
    ]
  ]
},
{
  "id": "A166",
  "routeNo": "এ-১৬৬",
  "nameBn": "মোহাম্মদপুর → হাউজ বিল্ডিং",
  "nameEn": "Mohammadpur → House Building",
  "totalKm": 20.5,
  "stops": [
    {
      "id": 0,
      "nameEn": "Mohammadpur",
      "nameBn": "মোহাম্মদপুর",
      "aliases": [
        "mohammadpur",
        "মোহাম্মদপুর"
      ]
    },
    {
      "id": 1,
      "nameEn": "Town Hall",
      "nameBn": "টাউন হল",
      "aliases": [
        "town hall",
        "টাউন হল"
      ]
    },
    {
      "id": 2,
      "nameEn": "Asad Gate",
      "nameBn": "আসাদগেট",
      "aliases": [
        "asad gate",
        "আসাদগেট"
      ]
    },
    {
      "id": 3,
      "nameEn": "Farmgate",
      "nameBn": "ফার্মগেট",
      "aliases": [
        "farmgate",
        "ফার্মগেট"
      ]
    },
    {
      "id": 4,
      "nameEn": "Mohakhali",
      "nameBn": "মহাখালী",
      "aliases": [
        "mohakhali",
        "মহাখালী"
      ]
    },
    {
      "id": 5,
      "nameEn": "Titumir College",
      "nameBn": "তিতুমীর কলেজ",
      "aliases": [
        "titumir college",
        "তিতুমীর কলেজ"
      ]
    },
    {
      "id": 6,
      "nameEn": "Gulshan-1",
      "nameBn": "গুলশান-১",
      "aliases": [
        "gulshan-1",
        "গুলশান-১",
        "gulshan 1"
      ]
    },
    {
      "id": 7,
      "nameEn": "Madhya Badda",
      "nameBn": "মধ্য বাড্ডা",
      "aliases": [
        "madhya badda",
        "মধ্য বাড্ডা"
      ]
    },
    {
      "id": 8,
      "nameEn": "Uttar Badda",
      "nameBn": "উত্তর বাড্ডা",
      "aliases": [
        "uttar badda",
        "উত্তর বাড্ডা"
      ]
    },
    {
      "id": 9,
      "nameEn": "Notun Bazar",
      "nameBn": "নতুন বাজার",
      "aliases": [
        "notun bazar",
        "নতুন বাজার"
      ]
    },
    {
      "id": 10,
      "nameEn": "Basundhara",
      "nameBn": "বসুন্ধরা",
      "aliases": [
        "basundhara",
        "বসুন্ধরা"
      ]
    },
    {
      "id": 11,
      "nameEn": "Nadda",
      "nameBn": "নর্দ্দা",
      "aliases": [
        "nadda",
        "নর্দ্দা",
        "নর্দা"
      ]
    },
    {
      "id": 12,
      "nameEn": "Kuril Bishwaroad",
      "nameBn": "কুড়িল বিশ্বরোড",
      "aliases": [
        "kuril bishwaroad",
        "কুড়িল বিশ্বরোড"
      ]
    },
    {
      "id": 13,
      "nameEn": "Khilkhet",
      "nameBn": "খিলক্ষেত",
      "aliases": [
        "khilkhet",
        "খিলক্ষেত"
      ]
    },
    {
      "id": 14,
      "nameEn": "New Airport",
      "nameBn": "নিউ এয়ারপোর্ট",
      "aliases": [
        "new airport",
        "নিউ এয়ারপোর্ট",
        "airport"
      ]
    },
    {
      "id": 15,
      "nameEn": "Rajlakshmi",
      "nameBn": "রাজলক্ষ্মী",
      "aliases": [
        "rajlakshmi",
        "রাজলক্ষ্মী"
      ]
    },
    {
      "id": 16,
      "nameEn": "House Building",
      "nameBn": "হাউজ বিল্ডিং",
      "aliases": [
        "house building",
        "হাউজ বিল্ডিং",
        "uttara house building"
      ]
    }
  ],
  "fareMatrix": [
    [
      0,
      10,
      10,
      11,
      19,
      21,
      24,
      26,
      29,
      30,
      35,
      37,
      38,
      39,
      46,
      50,
      55
    ],
    [
      10,
      0,
      10,
      10,
      15,
      17,
      20,
      22,
      26,
      26,
      31,
      33,
      34,
      36,
      43,
      47,
      52
    ],
    [
      10,
      10,
      0,
      10,
      12,
      15,
      17,
      20,
      23,
      23,
      29,
      30,
      32,
      33,
      40,
      44,
      49
    ],
    [
      11,
      10,
      10,
      0,
      10,
      11,
      13,
      16,
      19,
      19,
      25,
      26,
      28,
      29,
      36,
      40,
      45
    ],
    [
      19,
      15,
      12,
      10,
      0,
      10,
      10,
      10,
      11,
      11,
      16,
      18,
      19,
      21,
      28,
      32,
      36
    ],
    [
      21,
      17,
      15,
      11,
      10,
      0,
      10,
      10,
      10,
      10,
      14,
      16,
      17,
      18,
      25,
      29,
      34
    ],
    [
      24,
      20,
      17,
      13,
      10,
      10,
      0,
      10,
      10,
      10,
      10,
      13,
      14,
      16,
      23,
      27,
      32
    ],
    [
      26,
      22,
      20,
      16,
      10,
      10,
      10,
      0,
      10,
      10,
      10,
      11,
      12,
      13,
      20,
      24,
      29
    ],
    [
      29,
      26,
      23,
      19,
      11,
      10,
      10,
      10,
      0,
      10,
      10,
      10,
      10,
      10,
      17,
      21,
      26
    ],
    [
      30,
      26,
      23,
      19,
      11,
      10,
      10,
      10,
      10,
      0,
      10,
      10,
      10,
      10,
      16,
      21,
      25
    ],
    [
      35,
      31,
      29,
      25,
      16,
      14,
      10,
      10,
      10,
      10,
      0,
      10,
      10,
      10,
      10,
      15,
      20
    ],
    [
      37,
      33,
      30,
      26,
      18,
      16,
      13,
      11,
      10,
      10,
      10,
      0,
      10,
      10,
      10,
      14,
      19
    ],
    [
      38,
      34,
      32,
      28,
      19,
      17,
      14,
      12,
      10,
      10,
      10,
      10,
      0,
      10,
      10,
      12,
      17
    ],
    [
      39,
      36,
      33,
      29,
      21,
      18,
      16,
      13,
      10,
      10,
      10,
      10,
      10,
      0,
      10,
      11,
      16
    ],
    [
      46,
      43,
      40,
      36,
      28,
      25,
      23,
      20,
      17,
      16,
      10,
      10,
      10,
      10,
      0,
      10,
      10
    ],
    [
      50,
      47,
      44,
      40,
      32,
      29,
      27,
      24,
      21,
      21,
      15,
      14,
      12,
      11,
      10,
      0,
      10
    ],
    [
      55,
      52,
      49,
      45,
      36,
      34,
      32,
      29,
      26,
      25,
      20,
      19,
      17,
      16,
      10,
      10,
      0
    ]
  ]
},
{
  "id": "A182",
  "routeNo": "এ-১৮২",
  "nameBn": "মিরপুর-১৪ → চন্দ্রা",
  "nameEn": "Mirpur-14 → Chandra",
  "totalKm": 42.5,
  "stops": [
    {
      "id": 0,
      "nameEn": "Mirpur-14",
      "nameBn": "মিরপুর-১৪",
      "aliases": [
        "mirpur-14",
        "মিরপুর-১৪"
      ]
    },
    {
      "id": 1,
      "nameEn": "Mirpur-10",
      "nameBn": "মিরপুর-১০",
      "aliases": [
        "mirpur-10",
        "মিরপুর-১০"
      ]
    },
    {
      "id": 2,
      "nameEn": "Mirpur-1",
      "nameBn": "মিরপুর-১",
      "aliases": [
        "mirpur-1",
        "মিরপুর-১"
      ]
    },
    {
      "id": 3,
      "nameEn": "Mazar Gate",
      "nameBn": "মাজার গেট",
      "aliases": [
        "mazar gate",
        "মাজার গেট"
      ]
    },
    {
      "id": 4,
      "nameEn": "Hemayetpur",
      "nameBn": "হেমায়েতপুর",
      "aliases": [
        "hemayetpur",
        "হেমায়েতপুর"
      ]
    },
    {
      "id": 5,
      "nameEn": "Savar",
      "nameBn": "সাভার",
      "aliases": [
        "savar",
        "সাভার"
      ]
    },
    {
      "id": 6,
      "nameEn": "Nabinagar",
      "nameBn": "নবীনগর",
      "aliases": [
        "nabinagar",
        "নবীনগর"
      ]
    },
    {
      "id": 7,
      "nameEn": "Baipail",
      "nameBn": "বাইপাইল",
      "aliases": [
        "baipail",
        "বাইপাইল"
      ]
    },
    {
      "id": 8,
      "nameEn": "EPZ",
      "nameBn": "ইপিজেড",
      "aliases": [
        "epz",
        "ইপিজেড"
      ]
    },
    {
      "id": 9,
      "nameEn": "Sreepur",
      "nameBn": "শ্রীপুর",
      "aliases": [
        "sreepur",
        "শ্রীপুর"
      ]
    },
    {
      "id": 10,
      "nameEn": "Shafipur",
      "nameBn": "সফিপুর",
      "aliases": [
        "shafipur",
        "সফিপুর"
      ]
    },
    {
      "id": 11,
      "nameEn": "Palli Bidyut",
      "nameBn": "পল্লীবিদ্যুৎ",
      "aliases": [
        "palli bidyut",
        "পল্লীবিদ্যুৎ",
        "পল্লী বিদ্যুৎ"
      ]
    },
    {
      "id": 12,
      "nameEn": "Chandra",
      "nameBn": "চন্দ্রা",
      "aliases": [
        "chandra",
        "চন্দ্রা"
      ]
    }
  ],
  "fareMatrix": [
    [
      0,
      10,
      10,
      13,
      24,
      47,
      62,
      73,
      80,
      84,
      97,
      108,
      115
    ],
    [
      10,
      0,
      10,
      10,
      18,
      41,
      56,
      67,
      73,
      77,
      91,
      102,
      109
    ],
    [
      10,
      10,
      0,
      10,
      13,
      36,
      51,
      62,
      68,
      72,
      86,
      97,
      104
    ],
    [
      13,
      10,
      10,
      0,
      11,
      34,
      49,
      60,
      67,
      71,
      84,
      95,
      102
    ],
    [
      24,
      18,
      13,
      11,
      0,
      23,
      38,
      49,
      55,
      59,
      73,
      84,
      90
    ],
    [
      47,
      41,
      36,
      34,
      23,
      0,
      15,
      26,
      32,
      36,
      50,
      61,
      68
    ],
    [
      62,
      56,
      51,
      49,
      38,
      15,
      0,
      11,
      18,
      22,
      35,
      46,
      53
    ],
    [
      73,
      67,
      62,
      60,
      49,
      26,
      11,
      0,
      10,
      10,
      24,
      35,
      41
    ],
    [
      80,
      73,
      68,
      67,
      55,
      32,
      18,
      10,
      0,
      10,
      18,
      28,
      35
    ],
    [
      84,
      77,
      72,
      71,
      59,
      36,
      22,
      10,
      10,
      0,
      14,
      24,
      31
    ],
    [
      97,
      91,
      86,
      84,
      73,
      50,
      35,
      24,
      18,
      14,
      0,
      11,
      18
    ],
    [
      108,
      102,
      97,
      95,
      84,
      61,
      46,
      35,
      28,
      24,
      11,
      0,
      10
    ],
    [
      115,
      109,
      104,
      102,
      90,
      68,
      53,
      41,
      35,
      31,
      18,
      10,
      0
    ]
  ]
},
{
  "id": "A220",
  "routeNo": "এ-২২০",
  "nameBn": "ফুলবাড়ীয়া → বরমী",
  "nameEn": "Fulbaria → Barmi",
  "totalKm": 77.5,
  "stops": [
    {
      "id": 0,
      "nameEn": "Fulbaria",
      "nameBn": "ফুলবাড়ীয়া",
      "aliases": [
        "fulbaria",
        "ফুলবাড়ীয়া"
      ]
    },
    {
      "id": 1,
      "nameEn": "Moghbazar",
      "nameBn": "মগবাজার",
      "aliases": [
        "moghbazar",
        "মগবাজার"
      ]
    },
    {
      "id": 2,
      "nameEn": "Mohakhali",
      "nameBn": "মহাখালী",
      "aliases": [
        "mohakhali",
        "মহাখালী"
      ]
    },
    {
      "id": 3,
      "nameEn": "Kakoli",
      "nameBn": "কাকলী",
      "aliases": [
        "kakoli",
        "কাকলী",
        "কাকলি"
      ]
    },
    {
      "id": 4,
      "nameEn": "Airport",
      "nameBn": "এয়ারপোর্ট",
      "aliases": [
        "airport",
        "এয়ারপোর্ট"
      ]
    },
    {
      "id": 5,
      "nameEn": "Tongi",
      "nameBn": "টঙ্গী",
      "aliases": [
        "tongi",
        "টঙ্গী"
      ]
    },
    {
      "id": 6,
      "nameEn": "Gazipur Chowrasta",
      "nameBn": "গাজীপুর চৌঃ",
      "aliases": [
        "gazipur chowrasta",
        "গাজীপুর চৌঃ",
        "গাজীপুর চৌরাস্তা"
      ]
    },
    {
      "id": 7,
      "nameEn": "Rajendrapur Chowrasta",
      "nameBn": "রাজেন্দ্রপুর চৌঃ",
      "aliases": [
        "rajendrapur chowrasta",
        "রাজেন্দ্রপুর চৌঃ",
        "রাজেন্দ্রপুর চৌরাস্তা"
      ]
    },
    {
      "id": 8,
      "nameEn": "Hotapara",
      "nameBn": "হোতাপাড়া",
      "aliases": [
        "hotapara",
        "হোতাপাড়া"
      ]
    },
    {
      "id": 9,
      "nameEn": "Bagher Bazar",
      "nameBn": "বাঘের বাজার",
      "aliases": [
        "bagher bazar",
        "বাঘের বাজার"
      ]
    },
    {
      "id": 10,
      "nameEn": "Mawna Chowrasta",
      "nameBn": "মাওনা চৌরাস্তা",
      "aliases": [
        "mawna chowrasta",
        "মাওনা চৌরাস্তা",
        "মাওনা"
      ]
    },
    {
      "id": 11,
      "nameEn": "Sreepur",
      "nameBn": "শ্রীপুর",
      "aliases": [
        "sreepur",
        "শ্রীপুর"
      ]
    },
    {
      "id": 12,
      "nameEn": "Barmi",
      "nameBn": "বরমী",
      "aliases": [
        "barmi",
        "বরমী"
      ]
    }
  ],
  "fareMatrix": [
    [
      0,
      11,
      25,
      30,
      53,
      68,
      99,
      131,
      141,
      155,
      162,
      191,
      209
    ],
    [
      11,
      0,
      14,
      19,
      42,
      56,
      87,
      120,
      130,
      143,
      151,
      179,
      198
    ],
    [
      25,
      14,
      0,
      10,
      28,
      42,
      73,
      106,
      116,
      129,
      137,
      165,
      184
    ],
    [
      30,
      19,
      10,
      0,
      23,
      38,
      69,
      101,
      111,
      124,
      132,
      161,
      179
    ],
    [
      53,
      42,
      28,
      23,
      0,
      14,
      45,
      78,
      88,
      101,
      109,
      137,
      156
    ],
    [
      68,
      56,
      42,
      38,
      14,
      0,
      31,
      64,
      74,
      87,
      95,
      123,
      142
    ],
    [
      99,
      87,
      73,
      69,
      45,
      31,
      0,
      33,
      43,
      56,
      63,
      92,
      111
    ],
    [
      131,
      120,
      106,
      101,
      78,
      64,
      33,
      0,
      10,
      23,
      31,
      59,
      78
    ],
    [
      141,
      130,
      116,
      111,
      88,
      74,
      43,
      10,
      0,
      14,
      21,
      49,
      68
    ],
    [
      155,
      143,
      129,
      124,
      101,
      87,
      56,
      23,
      14,
      0,
      10,
      36,
      55
    ],
    [
      162,
      151,
      137,
      132,
      109,
      95,
      63,
      31,
      21,
      10,
      0,
      29,
      47
    ],
    [
      191,
      179,
      165,
      161,
      137,
      123,
      92,
      59,
      49,
      36,
      29,
      0,
      19
    ],
    [
      209,
      198,
      184,
      179,
      156,
      142,
      111,
      78,
      68,
      55,
      47,
      19,
      0
    ]
  ]
},
{
  "id": "A221",
  "routeNo": "এ-২২১",
  "nameBn": "ফুলবাড়ীয়া → কালিয়াকৈর",
  "nameEn": "Fulbaria → Kaliakair",
  "totalKm": 57.8,
  "stops": [
    {
      "id": 0,
      "nameEn": "Fulbaria",
      "nameBn": "ফুলবাড়ীয়া",
      "aliases": [
        "fulbaria",
        "ফুলবাড়ীয়া"
      ]
    },
    {
      "id": 1,
      "nameEn": "Moghbazar",
      "nameBn": "মগবাজার",
      "aliases": [
        "moghbazar",
        "মগবাজার"
      ]
    },
    {
      "id": 2,
      "nameEn": "Mohakhali",
      "nameBn": "মহাখালী",
      "aliases": [
        "mohakhali",
        "মহাখালী"
      ]
    },
    {
      "id": 3,
      "nameEn": "Kakoli",
      "nameBn": "কাকলী",
      "aliases": [
        "kakoli",
        "কাকলী",
        "কাকলি"
      ]
    },
    {
      "id": 4,
      "nameEn": "Airport",
      "nameBn": "এয়ারপোর্ট",
      "aliases": [
        "airport",
        "এয়ারপোর্ট"
      ]
    },
    {
      "id": 5,
      "nameEn": "Tongi",
      "nameBn": "টঙ্গী",
      "aliases": [
        "tongi",
        "টঙ্গী"
      ]
    },
    {
      "id": 6,
      "nameEn": "Joydebpur Chowrasta",
      "nameBn": "জয়দেবপুর চৌঃ",
      "aliases": [
        "joydebpur chowrasta",
        "জয়দেবপুর চৌঃ",
        "জয়দেবপুর চৌরাস্তা"
      ]
    },
    {
      "id": 7,
      "nameEn": "Konabari",
      "nameBn": "কোনাবাড়ী",
      "aliases": [
        "konabari",
        "কোনাবাড়ী"
      ]
    },
    {
      "id": 8,
      "nameEn": "Shafipur",
      "nameBn": "সফিপুর",
      "aliases": [
        "shafipur",
        "সফিপুর"
      ]
    },
    {
      "id": 9,
      "nameEn": "Chandra",
      "nameBn": "চন্দ্রা",
      "aliases": [
        "chandra",
        "চন্দ্রা"
      ]
    },
    {
      "id": 10,
      "nameEn": "Kaliakair",
      "nameBn": "কালিয়াকৈর",
      "aliases": [
        "kaliakair",
        "কালিয়াকৈর"
      ]
    }
  ],
  "fareMatrix": [
    [
      0,
      11,
      25,
      30,
      53,
      68,
      99,
      118,
      131,
      143,
      156
    ],
    [
      11,
      0,
      14,
      19,
      42,
      56,
      87,
      107,
      120,
      132,
      145
    ],
    [
      25,
      14,
      0,
      10,
      28,
      42,
      73,
      93,
      106,
      118,
      131
    ],
    [
      30,
      19,
      10,
      0,
      23,
      38,
      69,
      88,
      101,
      113,
      126
    ],
    [
      53,
      42,
      28,
      23,
      0,
      14,
      45,
      65,
      78,
      90,
      103
    ],
    [
      68,
      56,
      42,
      38,
      14,
      0,
      31,
      51,
      64,
      76,
      89
    ],
    [
      99,
      87,
      73,
      69,
      45,
      31,
      0,
      20,
      33,
      45,
      58
    ],
    [
      118,
      107,
      93,
      88,
      65,
      51,
      20,
      0,
      13,
      25,
      38
    ],
    [
      131,
      120,
      106,
      101,
      78,
      64,
      33,
      13,
      0,
      12,
      25
    ],
    [
      143,
      132,
      118,
      113,
      90,
      76,
      45,
      25,
      12,
      0,
      13
    ],
    [
      156,
      145,
      131,
      126,
      103,
      89,
      58,
      38,
      25,
      13,
      0
    ]
  ]
},
{
  "id": "A222",
  "routeNo": "এ-২২২",
  "nameBn": "ফুলবাড়ীয়া → গাউছিয়া",
  "nameEn": "Fulbaria → Gausia",
  "totalKm": 41.5,
  "stops": [
    {
      "id": 0,
      "nameEn": "Fulbaria",
      "nameBn": "ফুলবাড়ীয়া",
      "aliases": [
        "fulbaria",
        "ফুলবাড়ীয়া"
      ]
    },
    {
      "id": 1,
      "nameEn": "Kakrail",
      "nameBn": "কাকরাইল",
      "aliases": [
        "kakrail",
        "কাকরাইল"
      ]
    },
    {
      "id": 2,
      "nameEn": "Moghbazar",
      "nameBn": "মগবাজার",
      "aliases": [
        "moghbazar",
        "মগবাজার"
      ]
    },
    {
      "id": 3,
      "nameEn": "Mohakhali",
      "nameBn": "মহাখালী",
      "aliases": [
        "mohakhali",
        "মহাখালী"
      ]
    },
    {
      "id": 4,
      "nameEn": "Kakoli",
      "nameBn": "কাকলী",
      "aliases": [
        "kakoli",
        "কাকলী",
        "কাকলি"
      ]
    },
    {
      "id": 5,
      "nameEn": "Airport",
      "nameBn": "এয়ারপোর্ট",
      "aliases": [
        "airport",
        "এয়ারপোর্ট"
      ]
    },
    {
      "id": 6,
      "nameEn": "Tongi",
      "nameBn": "টঙ্গী",
      "aliases": [
        "tongi",
        "টঙ্গী"
      ]
    },
    {
      "id": 7,
      "nameEn": "Mirer Bazar",
      "nameBn": "মীরের বাজার",
      "aliases": [
        "mirer bazar",
        "মীরের বাজার"
      ]
    },
    {
      "id": 8,
      "nameEn": "Gausia",
      "nameBn": "গাউছিয়া",
      "aliases": [
        "gausia",
        "গাউছিয়া"
      ]
    }
  ],
  "fareMatrix": [
    [
      0,
      10,
      11,
      25,
      30,
      53,
      68,
      99,
      112
    ],
    [
      10,
      0,
      10,
      20,
      25,
      48,
      62,
      93,
      107
    ],
    [
      11,
      10,
      0,
      14,
      19,
      42,
      56,
      87,
      101
    ],
    [
      25,
      20,
      14,
      0,
      10,
      28,
      42,
      73,
      87
    ],
    [
      30,
      25,
      19,
      10,
      0,
      23,
      38,
      69,
      82
    ],
    [
      53,
      48,
      42,
      28,
      23,
      0,
      14,
      45,
      59
    ],
    [
      68,
      62,
      56,
      42,
      38,
      14,
      0,
      31,
      45
    ],
    [
      99,
      93,
      87,
      73,
      69,
      45,
      31,
      0,
      14
    ],
    [
      112,
      107,
      101,
      87,
      82,
      59,
      45,
      14,
      0
    ]
  ]
},
{
  "id": "A224",
  "routeNo": "এ-২২৪",
  "nameBn": "ফুলবাড়ীয়া → পাটুরিয়া",
  "nameEn": "Fulbaria → Paturia",
  "totalKm": 92.3,
  "stops": [
    {
      "id": 0,
      "nameEn": "Fulbaria",
      "nameBn": "ফুলবাড়ীয়া",
      "aliases": [
        "fulbaria",
        "ফুলবাড়ীয়া"
      ]
    },
    {
      "id": 1,
      "nameEn": "High Court",
      "nameBn": "হাইকোর্ট",
      "aliases": [
        "high court",
        "হাইকোর্ট"
      ]
    },
    {
      "id": 2,
      "nameEn": "Matsya Bhaban",
      "nameBn": "মৎসভবন",
      "aliases": [
        "matsya bhaban",
        "মৎসভবন"
      ]
    },
    {
      "id": 3,
      "nameEn": "Shahbag",
      "nameBn": "শাহবাগ",
      "aliases": [
        "shahbag",
        "শাহবাগ"
      ]
    },
    {
      "id": 4,
      "nameEn": "Science Lab",
      "nameBn": "সাইন্সল্যাব",
      "aliases": [
        "science lab",
        "সাইন্সল্যাব"
      ]
    },
    {
      "id": 5,
      "nameEn": "Kalabagan",
      "nameBn": "কলাবাগান",
      "aliases": [
        "kalabagan",
        "কলাবাগান"
      ]
    },
    {
      "id": 6,
      "nameEn": "Asad Gate",
      "nameBn": "আসাদগেট",
      "aliases": [
        "asad gate",
        "আসাদগেট"
      ]
    },
    {
      "id": 7,
      "nameEn": "Technical",
      "nameBn": "টেকনিক্যাল",
      "aliases": [
        "technical",
        "টেকনিক্যাল"
      ]
    },
    {
      "id": 8,
      "nameEn": "Gabtoli",
      "nameBn": "গাবতলী",
      "aliases": [
        "gabtoli",
        "গাবতলী",
        "গাবতলি"
      ]
    },
    {
      "id": 9,
      "nameEn": "Manikganj",
      "nameBn": "মানিকগঞ্জ",
      "aliases": [
        "manikganj",
        "মানিকগঞ্জ"
      ]
    },
    {
      "id": 10,
      "nameEn": "Paturia",
      "nameBn": "পাটুরিয়া",
      "aliases": [
        "paturia",
        "পাটুরিয়া"
      ]
    }
  ],
  "fareMatrix": [
    [
      0,
      10,
      10,
      10,
      13,
      18,
      22,
      31,
      33,
      176,
      249
    ],
    [
      10,
      0,
      10,
      10,
      11,
      16,
      20,
      28,
      31,
      173,
      247
    ],
    [
      10,
      10,
      0,
      10,
      10,
      15,
      19,
      27,
      30,
      172,
      246
    ],
    [
      10,
      10,
      10,
      0,
      10,
      10,
      13,
      21,
      24,
      166,
      240
    ],
    [
      13,
      11,
      10,
      10,
      0,
      10,
      10,
      17,
      20,
      162,
      236
    ],
    [
      18,
      16,
      15,
      10,
      10,
      0,
      10,
      12,
      15,
      157,
      231
    ],
    [
      22,
      20,
      19,
      13,
      10,
      10,
      0,
      10,
      11,
      153,
      227
    ],
    [
      31,
      28,
      27,
      21,
      17,
      12,
      10,
      0,
      10,
      145,
      219
    ],
    [
      33,
      31,
      30,
      24,
      20,
      15,
      11,
      10,
      0,
      142,
      216
    ],
    [
      176,
      173,
      172,
      166,
      162,
      157,
      153,
      145,
      142,
      0,
      74
    ],
    [
      249,
      247,
      246,
      240,
      236,
      231,
      227,
      219,
      216,
      74,
      0
    ]
  ]
},
{
  "id": "A223",
  "routeNo": "এ-২২৩",
  "nameBn": "ফুলবাড়ীয়া → গাজীপুর",
  "nameEn": "Fulbaria → Gazipur",
  "totalKm": 41.5,
  "stops": [
    {
      "id": 0,
      "nameEn": "Fulbaria",
      "nameBn": "ফুলবাড়ীয়া",
      "aliases": [
        "fulbaria",
        "ফুলবাড়ীয়া"
      ]
    },
    {
      "id": 1,
      "nameEn": "Kakrail",
      "nameBn": "কাকরাইল",
      "aliases": [
        "kakrail",
        "কাকরাইল"
      ]
    },
    {
      "id": 2,
      "nameEn": "Moghbazar",
      "nameBn": "মগবাজার",
      "aliases": [
        "moghbazar",
        "মগবাজার"
      ]
    },
    {
      "id": 3,
      "nameEn": "Mohakhali",
      "nameBn": "মহাখালী",
      "aliases": [
        "mohakhali",
        "মহাখালী"
      ]
    },
    {
      "id": 4,
      "nameEn": "Kakoli",
      "nameBn": "কাকলী",
      "aliases": [
        "kakoli",
        "কাকলী",
        "কাকলি"
      ]
    },
    {
      "id": 5,
      "nameEn": "Airport",
      "nameBn": "এয়ারপোর্ট",
      "aliases": [
        "airport",
        "এয়ারপোর্ট"
      ]
    },
    {
      "id": 6,
      "nameEn": "Tongi",
      "nameBn": "টঙ্গী",
      "aliases": [
        "tongi",
        "টঙ্গী"
      ]
    },
    {
      "id": 7,
      "nameEn": "Gazipur Chowrasta",
      "nameBn": "গাজীপুর চৌরাস্তা",
      "aliases": [
        "gazipur chowrasta",
        "গাজীপুর চৌঃ",
        "গাজীপুর চৌরাস্তা"
      ]
    },
    {
      "id": 8,
      "nameEn": "Gazipur",
      "nameBn": "গাজীপুর",
      "aliases": [
        "gazipur",
        "গাজীপুর"
      ]
    }
  ],
  "fareMatrix": [
    [
      0,
      10,
      11,
      25,
      30,
      53,
      68,
      99,
      112
    ],
    [
      10,
      0,
      10,
      20,
      25,
      48,
      62,
      93,
      107
    ],
    [
      11,
      10,
      0,
      14,
      19,
      42,
      56,
      87,
      101
    ],
    [
      25,
      20,
      14,
      0,
      10,
      28,
      42,
      73,
      87
    ],
    [
      30,
      25,
      19,
      10,
      0,
      23,
      38,
      69,
      82
    ],
    [
      53,
      48,
      42,
      28,
      23,
      0,
      14,
      45,
      59
    ],
    [
      68,
      62,
      56,
      42,
      38,
      14,
      0,
      31,
      45
    ],
    [
      99,
      93,
      87,
      73,
      69,
      45,
      31,
      0,
      14
    ],
    [
      112,
      107,
      101,
      87,
      82,
      59,
      45,
      14,
      0
    ]
  ]
},
{
  "id": "A225",
  "routeNo": "এ-২২৫",
  "nameBn": "সায়েদাবাদ → সাভার",
  "nameEn": "Sayedabad → Savar",
  "totalKm": 42,
  "stops": [
    {
      "id": 0,
      "nameEn": "Sayedabad",
      "nameBn": "সায়েদাবাদ",
      "aliases": [
        "sayedabad",
        "সায়েদাবাদ"
      ]
    },
    {
      "id": 1,
      "nameEn": "Gulistan",
      "nameBn": "গুলিস্তান",
      "aliases": [
        "gulistan",
        "গুলিস্তান"
      ]
    },
    {
      "id": 2,
      "nameEn": "Shahbag",
      "nameBn": "শাহবাগ",
      "aliases": [
        "shahbag",
        "শাহবাগ"
      ]
    },
    {
      "id": 3,
      "nameEn": "Farmgate",
      "nameBn": "ফার্মগেট",
      "aliases": [
        "farmgate",
        "ফার্মগেট"
      ]
    },
    {
      "id": 4,
      "nameEn": "Asad Gate",
      "nameBn": "আসাদগেট",
      "aliases": [
        "asad gate",
        "আসাদগেট"
      ]
    },
    {
      "id": 5,
      "nameEn": "Shyamoli",
      "nameBn": "শ্যামলী",
      "aliases": [
        "shyamoli",
        "শ্যামলী"
      ]
    },
    {
      "id": 6,
      "nameEn": "Technical",
      "nameBn": "টেকনিক্যাল",
      "aliases": [
        "technical",
        "টেকনিক্যাল"
      ]
    },
    {
      "id": 7,
      "nameEn": "Gabtoli",
      "nameBn": "গাবতলী",
      "aliases": [
        "gabtoli",
        "গাবতলী",
        "গাবতলি"
      ]
    },
    {
      "id": 8,
      "nameEn": "Amin Bazar",
      "nameBn": "আমিন বাজার",
      "aliases": [
        "amin bazar",
        "আমিন বাজার"
      ]
    },
    {
      "id": 9,
      "nameEn": "Hemayetpur",
      "nameBn": "হেমায়েতপুর",
      "aliases": [
        "hemayetpur",
        "হেমায়েতপুর"
      ]
    },
    {
      "id": 10,
      "nameEn": "Savar",
      "nameBn": "সাভার",
      "aliases": [
        "savar",
        "সাভার"
      ]
    }
  ],
  "fareMatrix": [
    [
      0,
      11,
      22,
      32,
      35,
      38,
      46,
      51,
      57,
      84,
      113
    ],
    [
      11,
      null,
      11,
      22,
      24,
      27,
      35,
      41,
      46,
      73,
      103
    ],
    [
      22,
      11,
      null,
      11,
      14,
      16,
      24,
      30,
      35,
      62,
      92
    ],
    [
      32,
      22,
      11,
      null,
      10,
      10,
      14,
      19,
      24,
      51,
      81
    ],
    [
      35,
      24,
      14,
      10,
      null,
      10,
      11,
      16,
      22,
      49,
      78
    ],
    [
      38,
      27,
      16,
      10,
      10,
      null,
      10,
      14,
      19,
      46,
      76
    ],
    [
      46,
      35,
      24,
      14,
      11,
      10,
      null,
      10,
      11,
      38,
      68
    ],
    [
      51,
      41,
      30,
      19,
      16,
      14,
      10,
      null,
      10,
      32,
      62
    ],
    [
      57,
      46,
      35,
      24,
      22,
      19,
      11,
      10,
      null,
      27,
      57
    ],
    [
      84,
      73,
      62,
      51,
      49,
      46,
      38,
      32,
      27,
      null,
      30
    ],
    [
      113,
      103,
      92,
      81,
      78,
      76,
      68,
      62,
      57,
      30,
      null
    ]
  ]
},
{
  "id": "A228",
  "routeNo": "এ-২২৮",
  "nameBn": "সায়েদাবাদ → নারায়ণগঞ্জ",
  "nameEn": "Sayedabad → Narayanganj",
  "totalKm": 15.8,
  "stops": [
    {
      "id": 0,
      "nameEn": "Sayedabad",
      "nameBn": "সায়েদাবাদ",
      "aliases": [
        "sayedabad",
        "সায়েদাবাদ"
      ]
    },
    {
      "id": 1,
      "nameEn": "Jatrabari",
      "nameBn": "যাত্রাবাড়ী",
      "aliases": [
        "jatrabari",
        "যাত্রাবাড়ী",
        "যাত্রাবাড়ি"
      ]
    },
    {
      "id": 2,
      "nameEn": "Jurain",
      "nameBn": "জুরাইন",
      "aliases": [
        "jurain",
        "জুরাইন"
      ]
    },
    {
      "id": 3,
      "nameEn": "Postogola",
      "nameBn": "পোস্তগোলা",
      "aliases": [
        "postogola",
        "পোস্তগোলা"
      ]
    },
    {
      "id": 4,
      "nameEn": "Narayanganj",
      "nameBn": "নারায়ণগঞ্জ",
      "aliases": [
        "narayanganj",
        "নারায়ণগঞ্জ",
        "নারায়নগঞ্জ"
      ]
    }
  ],
  "fareMatrix": [
    [
      0,
      10,
      10,
      10,
      43
    ],
    [
      10,
      null,
      10,
      10,
      40
    ],
    [
      10,
      10,
      null,
      10,
      35
    ],
    [
      10,
      10,
      10,
      null,
      33
    ],
    [
      43,
      40,
      35,
      33,
      null
    ]
  ]
},
{
  "id": "A204",
  "routeNo": "এ-২০৪",
  "nameBn": "মদনগঞ্জ → আজিমপুর",
  "nameEn": "Madanganj → Azimpur",
  "totalKm": 33.1,
  "stops": [
    {
      "id": 0,
      "nameEn": "Madanganj",
      "nameBn": "মদনগঞ্জ",
      "aliases": [
        "madanganj",
        "মদনগঞ্জ"
      ]
    },
    {
      "id": 1,
      "nameEn": "Sayedabad",
      "nameBn": "সায়েদাবাদ",
      "aliases": [
        "sayedabad",
        "সায়েদাবাদ"
      ]
    },
    {
      "id": 2,
      "nameEn": "Gulistan",
      "nameBn": "গুলিস্তান",
      "aliases": [
        "gulistan",
        "গুলিস্তান"
      ]
    },
    {
      "id": 3,
      "nameEn": "Press Club",
      "nameBn": "প্রেসক্লাব",
      "aliases": [
        "press club",
        "প্রেসক্লাব"
      ]
    },
    {
      "id": 4,
      "nameEn": "Shahbag",
      "nameBn": "শাহবাগ",
      "aliases": [
        "shahbag",
        "শাহবাগ"
      ]
    },
    {
      "id": 5,
      "nameEn": "Nilkhet",
      "nameBn": "নীলক্ষেত",
      "aliases": [
        "nilkhet",
        "নীলক্ষেত"
      ]
    },
    {
      "id": 6,
      "nameEn": "Azimpur",
      "nameBn": "আজিমপুর",
      "aliases": [
        "azimpur",
        "আজিমপুর"
      ]
    }
  ],
  "fareMatrix": [
    [
      0,
      70,
      75,
      78,
      83,
      88,
      89
    ],
    [
      70,
      null,
      10,
      10,
      13,
      18,
      19
    ],
    [
      75,
      10,
      null,
      10,
      10,
      12,
      14
    ],
    [
      78,
      10,
      10,
      null,
      10,
      10,
      11
    ],
    [
      83,
      13,
      10,
      10,
      null,
      10,
      10
    ],
    [
      88,
      18,
      12,
      10,
      10,
      null,
      10
    ],
    [
      89,
      19,
      14,
      11,
      10,
      10,
      null
    ]
  ]
},
{
  "id": "A206",
  "routeNo": "এ-২০৬",
  "nameBn": "সায়েদাবাদ → নারায়ণগঞ্জ",
  "nameEn": "Sayedabad → Narayanganj",
  "totalKm": 16.2,
  "stops": [
    {
      "id": 0,
      "nameEn": "Sayedabad",
      "nameBn": "সায়েদাবাদ",
      "aliases": [
        "sayedabad",
        "সায়েদাবাদ"
      ]
    },
    {
      "id": 1,
      "nameEn": "Jatrabari",
      "nameBn": "যাত্রাবাড়ী",
      "aliases": [
        "jatrabari",
        "যাত্রাবাড়ী",
        "যাত্রাবাড়ি"
      ]
    },
    {
      "id": 2,
      "nameEn": "Shanir Akhra",
      "nameBn": "শনিরআখড়া",
      "aliases": [
        "shanir akhra",
        "শনিরআখড়া",
        "শনির আখড়া"
      ]
    },
    {
      "id": 3,
      "nameEn": "Rayerbag",
      "nameBn": "রায়েরবাগ",
      "aliases": [
        "rayerbag",
        "রায়েরবাগ"
      ]
    },
    {
      "id": 4,
      "nameEn": "Link Road",
      "nameBn": "লিংক রোড",
      "aliases": [
        "link road",
        "লিংক রোড"
      ]
    },
    {
      "id": 5,
      "nameEn": "Narayanganj",
      "nameBn": "নারায়ণগঞ্জ",
      "aliases": [
        "narayanganj",
        "নারায়ণগঞ্জ",
        "নারায়নগঞ্জ"
      ]
    }
  ],
  "fareMatrix": [
    [
      0,
      10,
      10,
      10,
      16,
      44
    ],
    [
      10,
      null,
      10,
      10,
      14,
      42
    ],
    [
      10,
      10,
      null,
      10,
      10,
      37
    ],
    [
      10,
      10,
      10,
      null,
      10,
      34
    ],
    [
      16,
      14,
      10,
      10,
      null,
      28
    ],
    [
      44,
      42,
      37,
      34,
      28,
      null
    ]
  ]
},
{
  "id": "A240",
  "routeNo": "এ-২৪০",
  "nameBn": "কাঁচপুর → টঙ্গী বাস্তহারা",
  "nameEn": "Kachpur → Tongi Bastuhara",
  "totalKm": 36,
  "stops": [
    {
      "id": 0,
      "nameEn": "Kanchpur Bridge",
      "nameBn": "কাঁচপুর ব্রীজ",
      "aliases": [
        "kachpur",
        "কাঁচপুর",
        "kachpur bridge",
        "kachpurbridge",
        "কাঁচপুরব্রীজ",
        "কাচপুর ব্রিজ",
        "কাঁচপুর ব্রিজ",
        "কাচপুর",
        "কাঁচপুর ব্রীজ",
        "kanchpur bridge",
        "kanchpur"
      ]
    },
    {
      "id": 1,
      "nameEn": "Sayedabad",
      "nameBn": "সায়েদাবাদ",
      "aliases": [
        "sayedabad",
        "সায়েদাবাদ"
      ]
    },
    {
      "id": 2,
      "nameEn": "Malibagh",
      "nameBn": "মালিবাগ",
      "aliases": [
        "malibagh",
        "মালিবাগ"
      ]
    },
    {
      "id": 3,
      "nameEn": "Notun Bazar",
      "nameBn": "নতুন বাজার",
      "aliases": [
        "notun bazar",
        "নতুন বাজার"
      ]
    },
    {
      "id": 4,
      "nameEn": "Airport",
      "nameBn": "এয়ারপোর্ট",
      "aliases": [
        "airport",
        "এয়ারপোর্ট"
      ]
    },
    {
      "id": 5,
      "nameEn": "Tongi",
      "nameBn": "টঙ্গী",
      "aliases": [
        "tongi",
        "টঙ্গী"
      ]
    },
    {
      "id": 6,
      "nameEn": "Tongi Bastuhara",
      "nameBn": "টঙ্গী বাস্তহারা",
      "aliases": [
        "tongi bastuhara",
        "টঙ্গী বাস্তহারা"
      ]
    }
  ],
  "fareMatrix": [
    [
      0,
      24,
      40,
      56,
      74,
      85,
      97
    ],
    [
      24,
      null,
      16,
      32,
      49,
      60,
      73
    ],
    [
      40,
      16,
      null,
      16,
      33,
      45,
      57
    ],
    [
      56,
      32,
      16,
      null,
      18,
      29,
      41
    ],
    [
      74,
      49,
      33,
      18,
      null,
      11,
      23
    ],
    [
      85,
      60,
      45,
      29,
      11,
      null,
      12
    ],
    [
      97,
      73,
      57,
      41,
      23,
      12,
      null
    ]
  ]
},
{
  "id": "A243",
  "routeNo": "এ-২৪৩",
  "nameBn": "ধলেশ্বর → টঙ্গী (বাস্তহারা)",
  "nameEn": "Dhaleshwar → Tongi Bastuhara",
  "totalKm": 31.7,
  "stops": [
    {
      "id": 0,
      "nameEn": "Dhaleshwar",
      "nameBn": "ধলেশ্বর",
      "aliases": [
        "dhaleshwar",
        "ধলেশ্বর"
      ]
    },
    {
      "id": 1,
      "nameEn": "Jatrabari",
      "nameBn": "যাত্রাবাড়ী",
      "aliases": [
        "jatrabari",
        "যাত্রাবাড়ী"
      ]
    },
    {
      "id": 2,
      "nameEn": "Malibagh",
      "nameBn": "মালিবাগ",
      "aliases": [
        "malibagh",
        "মালিবাগ"
      ]
    },
    {
      "id": 3,
      "nameEn": "Pragati Sarani",
      "nameBn": "প্রগতি সরণী",
      "aliases": [
        "pragati sarani",
        "প্রগতি সরণী"
      ]
    },
    {
      "id": 4,
      "nameEn": "Abdullahpur",
      "nameBn": "আব্দুল্লাহপুর",
      "aliases": [
        "abdullahpur",
        "আব্দুল্লাহপুর"
      ]
    },
    {
      "id": 5,
      "nameEn": "Tongi Bastuhara",
      "nameBn": "টঙ্গী (বাস্তহারা)",
      "aliases": [
        "tongi bastuhara",
        "টঙ্গী (বাস্তহারা)"
      ]
    }
  ],
  "fareMatrix": [
    [
      0,
      12,
      29,
      43,
      72,
      86
    ],
    [
      12,
      null,
      16,
      31,
      60,
      73
    ],
    [
      29,
      16,
      null,
      14,
      43,
      57
    ],
    [
      43,
      31,
      14,
      null,
      29,
      43
    ],
    [
      72,
      60,
      43,
      29,
      null,
      14
    ],
    [
      86,
      73,
      57,
      43,
      14,
      null
    ]
  ]
},
{
  "id": "A245",
  "routeNo": "এ-২৪৫",
  "nameBn": "মদনপুর → আব্দুল্লাহপুর",
  "nameEn": "Madanpur → Abdullahpur",
  "totalKm": 36.5,
  "stops": [
    {
      "id": 0,
      "nameEn": "Madanpur",
      "nameBn": "মদনপুর",
      "aliases": [
        "madanpur",
        "মদনপুর"
      ]
    },
    {
      "id": 1,
      "nameEn": "Motijheel",
      "nameBn": "মতিঝিল",
      "aliases": [
        "motijheel",
        "মতিঝিল"
      ]
    },
    {
      "id": 2,
      "nameEn": "Malibagh",
      "nameBn": "মালিবাগ",
      "aliases": [
        "malibagh",
        "মালিবাগ"
      ]
    },
    {
      "id": 3,
      "nameEn": "Moghbazar",
      "nameBn": "মগবাজার",
      "aliases": [
        "moghbazar",
        "মগবাজার"
      ]
    },
    {
      "id": 4,
      "nameEn": "Mohakhali",
      "nameBn": "মহাখালী",
      "aliases": [
        "mohakhali",
        "মহাখালী"
      ]
    },
    {
      "id": 5,
      "nameEn": "Kakoli",
      "nameBn": "কাকলী",
      "aliases": [
        "kakoli",
        "কাকলী",
        "কাকলি"
      ]
    },
    {
      "id": 6,
      "nameEn": "Abdullahpur",
      "nameBn": "আব্দুল্লাহপুর",
      "aliases": [
        "abdullahpur",
        "আব্দুল্লাহপুর"
      ]
    }
  ],
  "fareMatrix": [
    [
      0,
      43,
      50,
      54,
      63,
      68,
      99
    ],
    [
      43,
      null,
      10,
      10,
      20,
      25,
      55
    ],
    [
      50,
      10,
      null,
      10,
      13,
      18,
      48
    ],
    [
      54,
      10,
      10,
      null,
      10,
      14,
      45
    ],
    [
      63,
      20,
      13,
      10,
      null,
      10,
      35
    ],
    [
      68,
      25,
      18,
      14,
      10,
      null,
      31
    ],
    [
      99,
      55,
      48,
      45,
      35,
      31,
      null
    ]
  ]
},
{
  "id": "A249",
  "routeNo": "এ-২৪৯",
  "nameBn": "ফুলবাড়ীয়া → খাসিয়াখালী বেড়ীবাঁধ",
  "nameEn": "Fulbaria → Khasiakhali Beribadh",
  "totalKm": 52.5,
  "stops": [
    {
      "id": 0,
      "nameEn": "Fulbaria",
      "nameBn": "ফুলবাড়ীয়া",
      "aliases": [
        "fulbaria",
        "ফুলবাড়ীয়া"
      ]
    },
    {
      "id": 1,
      "nameEn": "Naya Bazar",
      "nameBn": "নয়াবাজার",
      "aliases": [
        "naya bazar",
        "নয়াবাজার"
      ]
    },
    {
      "id": 2,
      "nameEn": "Jinjira",
      "nameBn": "জিঞ্জিরা",
      "aliases": [
        "jinjira",
        "জিঞ্জিরা"
      ]
    },
    {
      "id": 3,
      "nameEn": "Konakhola Bazar",
      "nameBn": "কোণাখোলা বাজার",
      "aliases": [
        "konakhola bazar",
        "কোণাখোলা বাজার"
      ]
    },
    {
      "id": 4,
      "nameEn": "Ramer Kanda",
      "nameBn": "রামের কান্দা",
      "aliases": [
        "ramer kanda",
        "রামের কান্দা"
      ]
    },
    {
      "id": 5,
      "nameEn": "Syedpur",
      "nameBn": "সৈয়দপুর",
      "aliases": [
        "syedpur",
        "সৈয়দপুর"
      ]
    },
    {
      "id": 6,
      "nameEn": "Kharshur",
      "nameBn": "খারশুর",
      "aliases": [
        "kharshur",
        "খারশুর"
      ]
    },
    {
      "id": 7,
      "nameEn": "Tikorpur",
      "nameBn": "টিকরপুর",
      "aliases": [
        "tikorpur",
        "টিকরপুর"
      ]
    },
    {
      "id": 8,
      "nameEn": "Agla Bazar",
      "nameBn": "আগলা বাজার",
      "aliases": [
        "agla bazar",
        "আগলা বাজার"
      ]
    },
    {
      "id": 9,
      "nameEn": "Box Nagar",
      "nameBn": "বক্সনগর",
      "aliases": [
        "box nagar",
        "বক্সনগর"
      ]
    },
    {
      "id": 10,
      "nameEn": "Gurganj",
      "nameBn": "গুরগঞ্জ",
      "aliases": [
        "gurganj",
        "গুরগঞ্জ",
        "শূরগঞ্জ",
        "শুরগঞ্জ"
      ]
    },
    {
      "id": 11,
      "nameEn": "Baghmara",
      "nameBn": "বাঘমারা",
      "aliases": [
        "baghmara",
        "বাঘমারা"
      ]
    },
    {
      "id": 12,
      "nameEn": "Nawabganj",
      "nameBn": "নবাবগঞ্জ",
      "aliases": [
        "nawabganj",
        "নবাবগঞ্জ"
      ]
    },
    {
      "id": 13,
      "nameEn": "Majhir Kanda",
      "nameBn": "মাঝির কান্দা",
      "aliases": [
        "majhir kanda",
        "মাঝির কান্দা"
      ]
    },
    {
      "id": 14,
      "nameEn": "Bandura",
      "nameBn": "বান্দুরা",
      "aliases": [
        "bandura",
        "বান্দুরা"
      ]
    },
    {
      "id": 15,
      "nameEn": "Baruakhali",
      "nameBn": "বারুয়াখালী",
      "aliases": [
        "baruakhali",
        "বারুয়াখালী"
      ]
    },
    {
      "id": 16,
      "nameEn": "Khasiakhali Beribadh",
      "nameBn": "খাসিয়াখালী বেড়ীবাঁধ",
      "aliases": [
        "khasiakhali beribadh",
        "খাসিয়াখালী বেড়ীবাঁধ"
      ]
    }
  ],
  "fareMatrix": [
    [
      0,
      10,
      11,
      23,
      34,
      43,
      63,
      76,
      79,
      89,
      94,
      95,
      97,
      106,
      113,
      129,
      142
    ],
    [
      10,
      null,
      10,
      19,
      30,
      39,
      60,
      72,
      75,
      85,
      90,
      91,
      94,
      103,
      110,
      125,
      138
    ],
    [
      11,
      10,
      null,
      12,
      23,
      32,
      53,
      65,
      68,
      78,
      83,
      84,
      87,
      96,
      103,
      118,
      131
    ],
    [
      23,
      19,
      12,
      null,
      11,
      20,
      40,
      52,
      56,
      66,
      71,
      72,
      74,
      83,
      90,
      106,
      119
    ],
    [
      34,
      30,
      23,
      11,
      null,
      10,
      30,
      42,
      45,
      55,
      60,
      61,
      64,
      73,
      80,
      95,
      108
    ],
    [
      43,
      39,
      32,
      20,
      10,
      null,
      20,
      32,
      36,
      46,
      51,
      52,
      54,
      63,
      70,
      86,
      99
    ],
    [
      63,
      60,
      53,
      40,
      30,
      20,
      null,
      12,
      15,
      26,
      31,
      32,
      34,
      43,
      50,
      66,
      78
    ],
    [
      76,
      72,
      65,
      52,
      42,
      32,
      12,
      null,
      10,
      14,
      18,
      19,
      22,
      31,
      38,
      53,
      66
    ],
    [
      79,
      75,
      68,
      56,
      45,
      36,
      15,
      10,
      null,
      10,
      15,
      16,
      19,
      28,
      35,
      50,
      63
    ],
    [
      89,
      85,
      78,
      66,
      55,
      46,
      26,
      14,
      10,
      null,
      10,
      10,
      10,
      17,
      24,
      40,
      53
    ],
    [
      94,
      90,
      83,
      71,
      60,
      51,
      31,
      18,
      15,
      10,
      null,
      10,
      10,
      12,
      19,
      34,
      47
    ],
    [
      95,
      91,
      84,
      72,
      61,
      52,
      32,
      19,
      16,
      10,
      10,
      null,
      10,
      11,
      18,
      34,
      47
    ],
    [
      97,
      94,
      87,
      74,
      64,
      54,
      34,
      22,
      19,
      10,
      10,
      10,
      null,
      10,
      16,
      32,
      44
    ],
    [
      106,
      103,
      96,
      83,
      73,
      63,
      43,
      31,
      28,
      17,
      12,
      11,
      10,
      null,
      10,
      23,
      35
    ],
    [
      113,
      110,
      103,
      90,
      80,
      70,
      50,
      38,
      35,
      24,
      19,
      18,
      16,
      10,
      null,
      16,
      28
    ],
    [
      129,
      125,
      118,
      106,
      95,
      86,
      66,
      53,
      50,
      40,
      34,
      34,
      32,
      23,
      16,
      null,
      13
    ],
    [
      142,
      138,
      131,
      119,
      108,
      99,
      78,
      66,
      63,
      53,
      47,
      47,
      44,
      35,
      28,
      13,
      null
    ]
  ]
},
{
  "id": "A252",
  "routeNo": "এ-২৫২",
  "nameBn": "ভুলতা → সাইন্সল্যাব",
  "nameEn": "Bhulta → Science Lab",
  "totalKm": 31.3,
  "stops": [
    {
      "id": 0,
      "nameEn": "Bhulta",
      "nameBn": "ভুলতা",
      "aliases": [
        "bhulta",
        "ভুলতা"
      ]
    },
    {
      "id": 1,
      "nameEn": "Jatrabari",
      "nameBn": "যাত্রাবাড়ী",
      "aliases": [
        "jatrabari",
        "যাত্রাবাড়ী"
      ]
    },
    {
      "id": 2,
      "nameEn": "Gulistan",
      "nameBn": "গুলিস্তান",
      "aliases": [
        "gulistan",
        "গুলিস্তান"
      ]
    },
    {
      "id": 3,
      "nameEn": "Shahbag",
      "nameBn": "শাহবাগ",
      "aliases": [
        "shahbag",
        "শাহবাগ"
      ]
    },
    {
      "id": 4,
      "nameEn": "Kalabagan",
      "nameBn": "কলাবাগান",
      "aliases": [
        "kalabagan",
        "কলাবাগান"
      ]
    },
    {
      "id": 5,
      "nameEn": "Science Lab",
      "nameBn": "সাইন্সল্যাব",
      "aliases": [
        "science lab",
        "সাইন্সল্যাব"
      ]
    }
  ],
  "fareMatrix": [
    [
      0,
      57,
      65,
      73,
      82,
      85
    ],
    [
      57,
      null,
      10,
      16,
      25,
      28
    ],
    [
      65,
      10,
      null,
      10,
      17,
      19
    ],
    [
      73,
      16,
      10,
      null,
      10,
      12
    ],
    [
      82,
      25,
      17,
      10,
      null,
      10
    ],
    [
      85,
      28,
      19,
      12,
      10,
      null
    ]
  ]
},
{
  "id": "A255",
  "routeNo": "এ-২৫৫",
  "nameBn": "সায়েদাবাদ → সোনারগাঁও (মেঘনাঘাট)",
  "nameEn": "Sayedabad → Sonargaon (Meghnaghat)",
  "totalKm": 25.9,
  "stops": [
    {
      "id": 0,
      "nameEn": "Sayedabad",
      "nameBn": "সায়েদাবাদ",
      "aliases": [
        "sayedabad",
        "সায়েদাবাদ"
      ]
    },
    {
      "id": 1,
      "nameEn": "Jatrabari",
      "nameBn": "যাত্রাবাড়ী",
      "aliases": [
        "jatrabari",
        "যাত্রাবাড়ী"
      ]
    },
    {
      "id": 2,
      "nameEn": "Kanchpur Bridge",
      "nameBn": "কাঁচপুর ব্রীজ",
      "aliases": [
        "kachpur",
        "কাঁচপুর",
        "kachpur bridge",
        "kachpurbridge",
        "কাঁচপুরব্রীজ",
        "কাচপুর ব্রিজ",
        "কাঁচপুর ব্রিজ",
        "কাচপুর",
        "কাঁচপুর ব্রীজ",
        "kanchpur bridge",
        "kanchpur"
      ]
    },
    {
      "id": 3,
      "nameEn": "Madanpur",
      "nameBn": "মদনপুর",
      "aliases": [
        "madanpur",
        "মদনপুর"
      ]
    },
    {
      "id": 4,
      "nameEn": "Mogra Para",
      "nameBn": "মোগড়া পাড়া",
      "aliases": [
        "mogra para",
        "মোগড়া পাড়া"
      ]
    },
    {
      "id": 5,
      "nameEn": "Meghna Ghat",
      "nameBn": "মেঘনা ঘাট",
      "aliases": [
        "meghna ghat",
        "মেঘনা ঘাট",
        "মেঘনাঘাট",
        "meghnaghat"
      ]
    }
  ],
  "fareMatrix": [
    [
      0,
      10,
      28,
      38,
      59,
      70
    ],
    [
      10,
      null,
      25,
      35,
      56,
      67
    ],
    [
      28,
      25,
      null,
      10,
      31,
      42
    ],
    [
      38,
      35,
      10,
      null,
      21,
      32
    ],
    [
      59,
      56,
      31,
      21,
      null,
      11
    ],
    [
      70,
      67,
      42,
      32,
      11,
      null
    ]
  ]
},
{
  "id": "A256",
  "routeNo": "এ-২৫৬",
  "nameBn": "চাঁনখারপুল → মেঘনা ঘাট",
  "nameEn": "Chankharpul → Meghna Ghat",
  "totalKm": 29.3,
  "stops": [
    {
      "id": 0,
      "nameEn": "Chankharpul",
      "nameBn": "চাঁনখারপুল",
      "aliases": [
        "chankharpul",
        "চাঁনখারপুল"
      ]
    },
    {
      "id": 1,
      "nameEn": "Gulistan",
      "nameBn": "গুলিস্তান",
      "aliases": [
        "gulistan",
        "গুলিস্তান"
      ]
    },
    {
      "id": 2,
      "nameEn": "Jatrabari",
      "nameBn": "যাত্রাবাড়ী",
      "aliases": [
        "jatrabari",
        "যাত্রাবাড়ী"
      ]
    },
    {
      "id": 3,
      "nameEn": "Kanchpur Bridge",
      "nameBn": "কাঁচপুর ব্রীজ",
      "aliases": [
        "kachpur",
        "কাঁচপুর",
        "kachpur bridge",
        "kachpurbridge",
        "কাঁচপুরব্রীজ",
        "কাচপুর ব্রিজ",
        "কাঁচপুর ব্রিজ",
        "কাচপুর",
        "কাঁচপুর ব্রীজ",
        "kanchpur bridge",
        "kanchpur"
      ]
    },
    {
      "id": 4,
      "nameEn": "Madanpur",
      "nameBn": "মদনপুর",
      "aliases": [
        "madanpur",
        "মদনপুর"
      ]
    },
    {
      "id": 5,
      "nameEn": "Sonargaon Mogra Para",
      "nameBn": "সোনারগাঁও মোগড়া পাড়া",
      "aliases": [
        "sonargaon mogra para",
        "সোনারগাঁও মোগড়া পাড়া"
      ]
    },
    {
      "id": 6,
      "nameEn": "Meghna Ghat",
      "nameBn": "মেঘনা ঘাট",
      "aliases": [
        "meghna ghat",
        "মেঘনা ঘাট",
        "মেঘনাঘাট",
        "meghnaghat"
      ]
    }
  ],
  "fareMatrix": [
    [
      0,
      10,
      15,
      40,
      49,
      70,
      79
    ],
    [
      10,
      null,
      10,
      35,
      43,
      64,
      74
    ],
    [
      15,
      10,
      null,
      25,
      34,
      55,
      65
    ],
    [
      40,
      35,
      25,
      null,
      10,
      30,
      39
    ],
    [
      49,
      43,
      34,
      10,
      null,
      21,
      31
    ],
    [
      70,
      64,
      55,
      30,
      21,
      null,
      10
    ],
    [
      79,
      74,
      65,
      39,
      31,
      10,
      null
    ]
  ]
},
{
  "id": "A257",
  "routeNo": "এ-২৫৭",
  "nameBn": "কাঁচপুর ব্রীজ → বোর্ড বাজার",
  "nameEn": "Kachpur Bridge → Board Bazar",
  "totalKm": 40.9,
  "stops": [
    {
      "id": 0,
      "nameEn": "Kanchpur Bridge",
      "nameBn": "কাঁচপুর ব্রীজ",
      "aliases": [
        "kachpur bridge",
        "কাঁচপুর ব্রীজ",
        "kachpur",
        "kachpurbridge",
        "কাঁচপুরব্রীজ",
        "কাচপুর ব্রিজ",
        "কাঁচপুর ব্রিজ",
        "কাচপুর",
        "kanchpur bridge",
        "kanchpur"
      ]
    },
    {
      "id": 1,
      "nameEn": "Motijheel",
      "nameBn": "মতিঝিল",
      "aliases": [
        "motijheel",
        "মতিঝিল"
      ]
    },
    {
      "id": 2,
      "nameEn": "Malibagh",
      "nameBn": "মালিবাগ",
      "aliases": [
        "malibagh",
        "মালিবাগ"
      ]
    },
    {
      "id": 3,
      "nameEn": "Pragati Sarani",
      "nameBn": "প্রগতি সরণী",
      "aliases": [
        "pragati sarani",
        "প্রগতি সরণী"
      ]
    },
    {
      "id": 4,
      "nameEn": "Airport",
      "nameBn": "এয়ারপোর্ট",
      "aliases": [
        "airport",
        "এয়ারপোর্ট"
      ]
    },
    {
      "id": 5,
      "nameEn": "Abdullahpur",
      "nameBn": "আব্দুল্লাহপুর",
      "aliases": [
        "abdullahpur",
        "আব্দুল্লাহপুর"
      ]
    },
    {
      "id": 6,
      "nameEn": "Board Bazar",
      "nameBn": "বোর্ড বাজার",
      "aliases": [
        "board bazar",
        "বোর্ড বাজার"
      ]
    }
  ],
  "fareMatrix": [
    [
      0,
      36,
      44,
      60,
      80,
      89,
      110
    ],
    [
      36,
      null,
      10,
      24,
      43,
      53,
      74
    ],
    [
      44,
      10,
      null,
      16,
      35,
      45,
      66
    ],
    [
      60,
      24,
      16,
      null,
      19,
      29,
      50
    ],
    [
      80,
      43,
      35,
      19,
      null,
      10,
      31
    ],
    [
      89,
      53,
      45,
      29,
      10,
      null,
      21
    ],
    [
      110,
      74,
      66,
      50,
      31,
      21,
      null
    ]
  ]
},
{
  "id": "A259",
  "routeNo": "এ-২৫৯",
  "nameBn": "পলাশী → মেঘনাঘাট",
  "nameEn": "Palashi → Meghnaghat",
  "totalKm": 33.4,
  "stops": [
    {
      "id": 0,
      "nameEn": "Palashi",
      "nameBn": "পলাশী",
      "aliases": [
        "palashi",
        "পলাশী"
      ]
    },
    {
      "id": 1,
      "nameEn": "Eden College",
      "nameBn": "ইডেন কলেজ",
      "aliases": [
        "eden college",
        "ইডেন কলেজ"
      ]
    },
    {
      "id": 2,
      "nameEn": "Shahbag",
      "nameBn": "শাহবাগ",
      "aliases": [
        "shahbag",
        "শাহবাগ"
      ]
    },
    {
      "id": 3,
      "nameEn": "Gulistan",
      "nameBn": "গুলিস্তান",
      "aliases": [
        "gulistan",
        "গুলিস্তান"
      ]
    },
    {
      "id": 4,
      "nameEn": "Jatrabari",
      "nameBn": "যাত্রাবাড়ী",
      "aliases": [
        "jatrabari",
        "যাত্রাবাড়ী"
      ]
    },
    {
      "id": 5,
      "nameEn": "Shanir Akhra",
      "nameBn": "শনিরআখড়া",
      "aliases": [
        "shanir akhra",
        "শনিরআখড়া",
        "শনির আখড়া"
      ]
    },
    {
      "id": 6,
      "nameEn": "Meghnaghat",
      "nameBn": "মেঘনাঘাট",
      "aliases": [
        "meghnaghat",
        "মেঘনাঘাট",
        "মেঘনা ঘাট",
        "meghna ghat"
      ]
    }
  ],
  "fareMatrix": [
    [
      0,
      10,
      10,
      16,
      25,
      30,
      90
    ],
    [
      10,
      null,
      10,
      14,
      23,
      27,
      88
    ],
    [
      10,
      10,
      null,
      10,
      16,
      21,
      81
    ],
    [
      16,
      14,
      10,
      null,
      10,
      13,
      74
    ],
    [
      25,
      23,
      16,
      10,
      null,
      10,
      65
    ],
    [
      30,
      27,
      21,
      13,
      10,
      null,
      60
    ],
    [
      90,
      88,
      81,
      74,
      65,
      60,
      null
    ]
  ]
},
{
  "id": "A260",
  "routeNo": "এ-২৬০",
  "nameBn": "ফুলবাড়ীয়া পশু হাসপাতাল → ধামরাই",
  "nameEn": "Fulbaria Poshu Hospital → Dhamrai",
  "totalKm": 42,
  "stops": [
    {
      "id": 0,
      "nameEn": "Fulbaria",
      "nameBn": "ফুলবাড়ীয়া",
      "aliases": [
        "fulbaria",
        "ফুলবাড়ীয়া",
        "ফুলবাড়ীয়া",
        "fulbaria poshu hospital"
      ]
    },
    {
      "id": 1,
      "nameEn": "Chankharpul",
      "nameBn": "চাঁনখারপুল",
      "aliases": [
        "chankharpul",
        "চাঁনখারপুল",
        "চানখারপুল"
      ]
    },
    {
      "id": 2,
      "nameEn": "Azimpur",
      "nameBn": "আজিমপুর",
      "aliases": [
        "azimpur",
        "আজিমপুর"
      ]
    },
    {
      "id": 3,
      "nameEn": "Asad Gate",
      "nameBn": "আসাদগেট",
      "aliases": [
        "asad gate",
        "asadgate",
        "আসাদগেট",
        "আসাদ গেট"
      ]
    },
    {
      "id": 4,
      "nameEn": "Technical",
      "nameBn": "টেকনিক্যাল",
      "aliases": [
        "technical",
        "টেকনিক্যাল",
        "টেকনিকাল"
      ]
    },
    {
      "id": 5,
      "nameEn": "Gabtoli",
      "nameBn": "গাবতলী",
      "aliases": [
        "gabtoli",
        "গাবতলী",
        "গাবতলি"
      ]
    },
    {
      "id": 6,
      "nameEn": "Dhamrai",
      "nameBn": "ধামরাই",
      "aliases": [
        "dhamrai",
        "ধামরাই"
      ]
    }
  ],
  "fareMatrix": [
    [
      0,
      10,
      14,
      22,
      30,
      32,
      113
    ],
    [
      10,
      null,
      10,
      18,
      26,
      28,
      109
    ],
    [
      14,
      10,
      null,
      10,
      16,
      19,
      100
    ],
    [
      22,
      18,
      10,
      null,
      10,
      11,
      92
    ],
    [
      30,
      26,
      16,
      10,
      null,
      10,
      84
    ],
    [
      32,
      28,
      19,
      11,
      10,
      null,
      81
    ],
    [
      113,
      109,
      100,
      92,
      84,
      81,
      null
    ]
  ]
},
{
  "id": "A264",
  "routeNo": "এ-২৬৪",
  "nameBn": "মিরপুর (চিড়িয়াখানা) → কেরানীগঞ্জ",
  "nameEn": "Mirpur (Chiriakhana) → Keraniganj",
  "totalKm": 17.2,
  "stops": [
    {
      "id": 0,
      "nameEn": "Mirpur Chiriakhana",
      "nameBn": "মিরপুর (চিড়িয়াখানা)",
      "aliases": [
        "mirpur chiriakhana",
        "মিরপুর (চিড়িয়াখানা)",
        "মিরপুর চিড়িয়াখানা",
        "চিড়িয়াখানা",
        "চিড়িয়াখানা"
      ]
    },
    {
      "id": 1,
      "nameEn": "Mirpur-1",
      "nameBn": "মিরপুর-১",
      "aliases": [
        "mirpur-1",
        "মিরপুর-১",
        "মিরপুর ১"
      ]
    },
    {
      "id": 2,
      "nameEn": "Ansar Camp",
      "nameBn": "আনসারক্যাম্প",
      "aliases": [
        "ansar camp",
        "ansarcamp",
        "আনসারক্যাম্প",
        "আনসার ক্যাম্প"
      ]
    },
    {
      "id": 3,
      "nameEn": "Farmgate",
      "nameBn": "ফার্মগেট",
      "aliases": [
        "farmgate",
        "ফার্মগেট"
      ]
    },
    {
      "id": 4,
      "nameEn": "Golapshah Mazar Fulbaria",
      "nameBn": "গোলাপশাহ মাজার (ফুলবাড়ীয়া)",
      "aliases": [
        "golapshah mazar fulbaria",
        "গোলাপশাহ মাজার (ফুলবাড়ীয়া)",
        "গোলাপশাহ মাজার",
        "golapshah mazar"
      ]
    },
    {
      "id": 5,
      "nameEn": "Naya Bazar 2 No Bridge",
      "nameBn": "নয়াবাজার (২নং ব্রীজের গোড়া)",
      "aliases": [
        "naya bazar 2 no bridge",
        "নয়াবাজার (২নং ব্রীজের গোড়া)",
        "নয়াবাজার",
        "নয়াবাজার",
        "naya bazar"
      ]
    },
    {
      "id": 6,
      "nameEn": "Keraniganj",
      "nameBn": "কেরানীগঞ্জ",
      "aliases": [
        "keraniganj",
        "কেরানীগঞ্জ"
      ]
    }
  ],
  "fareMatrix": [
    [
      0,
      10,
      10,
      24,
      38,
      42,
      46
    ],
    [
      10,
      null,
      10,
      19,
      33,
      38,
      42
    ],
    [
      10,
      10,
      null,
      17,
      31,
      35,
      39
    ],
    [
      24,
      19,
      17,
      null,
      14,
      18,
      22
    ],
    [
      38,
      33,
      31,
      14,
      null,
      10,
      10
    ],
    [
      42,
      38,
      35,
      18,
      10,
      null,
      10
    ],
    [
      46,
      42,
      39,
      22,
      10,
      10,
      null
    ]
  ]
},
{
  "id": "A265",
  "routeNo": "এ-২৬৫",
  "nameBn": "জগন্নাথ বিশ্ববিদ্যালয় → চন্দ্রা",
  "nameEn": "Jagannath University → Chandra",
  "totalKm": 55.3,
  "stops": [
    {
      "id": 0,
      "nameEn": "Jagannath University",
      "nameBn": "জগন্নাথ বিশ্ববিদ্যালয়",
      "aliases": [
        "jagannath university",
        "জগন্নাথ বিশ্ববিদ্যালয়",
        "জগন্নাথ বিশ্ববিদ্যালয়",
        "জবি"
      ]
    },
    {
      "id": 1,
      "nameEn": "Fulbaria",
      "nameBn": "ফুলবাড়ীয়া",
      "aliases": [
        "fulbaria",
        "ফুলবাড়ীয়া",
        "ফুলবাড়ীয়া"
      ]
    },
    {
      "id": 2,
      "nameEn": "Paltan",
      "nameBn": "পল্টন",
      "aliases": [
        "paltan",
        "palton",
        "পল্টন"
      ]
    },
    {
      "id": 3,
      "nameEn": "Kakrail",
      "nameBn": "কাকরাইল",
      "aliases": [
        "kakrail",
        "কাকরাইল"
      ]
    },
    {
      "id": 4,
      "nameEn": "Moghbazar",
      "nameBn": "মগবাজার",
      "aliases": [
        "moghbazar",
        "মগবাজার"
      ]
    },
    {
      "id": 5,
      "nameEn": "Mohakhali",
      "nameBn": "মহাখালী",
      "aliases": [
        "mohakhali",
        "মহাখালী"
      ]
    },
    {
      "id": 6,
      "nameEn": "Airport",
      "nameBn": "এয়ারপোর্ট",
      "aliases": [
        "airport",
        "এয়ারপোর্ট",
        "বিমানবন্দর",
        "এয়ারপোর্ট"
      ]
    },
    {
      "id": 7,
      "nameEn": "Tongi",
      "nameBn": "টঙ্গী",
      "aliases": [
        "tongi",
        "টঙ্গী"
      ]
    },
    {
      "id": 8,
      "nameEn": "Gazipur",
      "nameBn": "গাজীপুর",
      "aliases": [
        "gazipur",
        "গাজীপুর"
      ]
    },
    {
      "id": 9,
      "nameEn": "Konabari",
      "nameBn": "কোনাবাড়ী",
      "aliases": [
        "konabari",
        "কোনাবাড়ী",
        "কোনাবাড়ী"
      ]
    },
    {
      "id": 10,
      "nameEn": "Shafipur",
      "nameBn": "সফিপুর",
      "aliases": [
        "shafipur",
        "সফিপুর"
      ]
    },
    {
      "id": 11,
      "nameEn": "Chandra",
      "nameBn": "চন্দ্রা",
      "aliases": [
        "chandra",
        "চন্দ্রা"
      ]
    }
  ],
  "fareMatrix": [
    [
      0,
      10,
      10,
      12,
      19,
      30,
      54,
      73,
      103,
      122,
      138,
      149
    ],
    [
      10,
      null,
      10,
      10,
      14,
      24,
      49,
      68,
      97,
      116,
      132,
      144
    ],
    [
      10,
      10,
      null,
      10,
      10,
      21,
      45,
      64,
      94,
      113,
      129,
      141
    ],
    [
      12,
      10,
      10,
      null,
      10,
      18,
      42,
      61,
      90,
      109,
      126,
      137
    ],
    [
      19,
      14,
      10,
      10,
      null,
      11,
      35,
      54,
      84,
      103,
      119,
      130
    ],
    [
      30,
      24,
      21,
      18,
      11,
      null,
      24,
      43,
      73,
      92,
      108,
      120
    ],
    [
      54,
      49,
      45,
      42,
      35,
      24,
      null,
      19,
      49,
      68,
      84,
      95
    ],
    [
      73,
      68,
      64,
      61,
      54,
      43,
      19,
      null,
      30,
      49,
      65,
      76
    ],
    [
      103,
      97,
      94,
      90,
      84,
      73,
      49,
      30,
      null,
      19,
      35,
      47
    ],
    [
      122,
      116,
      113,
      109,
      103,
      92,
      68,
      49,
      19,
      null,
      16,
      28
    ],
    [
      138,
      132,
      129,
      126,
      119,
      108,
      84,
      65,
      35,
      16,
      null,
      12
    ],
    [
      149,
      144,
      141,
      137,
      130,
      120,
      95,
      76,
      47,
      28,
      12,
      null
    ]
  ]
},
{
  "id": "A266",
  "routeNo": "এ-২৬৬",
  "nameBn": "জগন্নাথ বিশ্ববিদ্যালয় → চন্দ্রা",
  "nameEn": "Jagannath University → Chandra",
  "totalKm": 55.3,
  "stops": [
    {
      "id": 0,
      "nameEn": "Jagannath University",
      "nameBn": "জগন্নাথ বিশ্ববিদ্যালয়",
      "aliases": [
        "jagannath university",
        "জগন্নাথ বিশ্ববিদ্যালয়",
        "জগন্নাথ বিশ্ববিদ্যালয়",
        "জবি"
      ]
    },
    {
      "id": 1,
      "nameEn": "Fulbaria",
      "nameBn": "ফুলবাড়ীয়া",
      "aliases": [
        "fulbaria",
        "ফুলবাড়ীয়া",
        "ফুলবাড়ীয়া"
      ]
    },
    {
      "id": 2,
      "nameEn": "Paltan",
      "nameBn": "পল্টন",
      "aliases": [
        "paltan",
        "palton",
        "পল্টন"
      ]
    },
    {
      "id": 3,
      "nameEn": "Kakrail",
      "nameBn": "কাকরাইল",
      "aliases": [
        "kakrail",
        "কাকরাইল"
      ]
    },
    {
      "id": 4,
      "nameEn": "Moghbazar",
      "nameBn": "মগবাজার",
      "aliases": [
        "moghbazar",
        "মগবাজার"
      ]
    },
    {
      "id": 5,
      "nameEn": "Mohakhali",
      "nameBn": "মহাখালী",
      "aliases": [
        "mohakhali",
        "মহাখালী"
      ]
    },
    {
      "id": 6,
      "nameEn": "Airport",
      "nameBn": "এয়ারপোর্ট",
      "aliases": [
        "airport",
        "এয়ারপোর্ট",
        "বিমানবন্দর",
        "এয়ারপোর্ট"
      ]
    },
    {
      "id": 7,
      "nameEn": "Tongi",
      "nameBn": "টঙ্গী",
      "aliases": [
        "tongi",
        "টঙ্গী"
      ]
    },
    {
      "id": 8,
      "nameEn": "Gazipur",
      "nameBn": "গাজীপুর",
      "aliases": [
        "gazipur",
        "গাজীপুর"
      ]
    },
    {
      "id": 9,
      "nameEn": "Konabari",
      "nameBn": "কোনাবাড়ী",
      "aliases": [
        "konabari",
        "কোনাবাড়ী",
        "কোনাবাড়ী"
      ]
    },
    {
      "id": 10,
      "nameEn": "Shafipur",
      "nameBn": "সফিপুর",
      "aliases": [
        "shafipur",
        "সফিপুর"
      ]
    },
    {
      "id": 11,
      "nameEn": "Chandra",
      "nameBn": "চন্দ্রা",
      "aliases": [
        "chandra",
        "চন্দ্রা"
      ]
    }
  ],
  "fareMatrix": [
    [
      0,
      10,
      10,
      12,
      19,
      30,
      54,
      73,
      103,
      122,
      138,
      149
    ],
    [
      10,
      null,
      10,
      10,
      14,
      24,
      49,
      68,
      97,
      116,
      132,
      144
    ],
    [
      10,
      10,
      null,
      10,
      10,
      21,
      45,
      64,
      94,
      113,
      129,
      141
    ],
    [
      12,
      10,
      10,
      null,
      10,
      18,
      42,
      61,
      90,
      109,
      126,
      137
    ],
    [
      19,
      14,
      10,
      10,
      null,
      11,
      35,
      54,
      84,
      103,
      119,
      130
    ],
    [
      30,
      24,
      21,
      18,
      11,
      null,
      24,
      43,
      73,
      92,
      108,
      120
    ],
    [
      54,
      49,
      45,
      42,
      35,
      24,
      null,
      19,
      49,
      68,
      84,
      95
    ],
    [
      73,
      68,
      64,
      61,
      54,
      43,
      19,
      null,
      30,
      49,
      65,
      76
    ],
    [
      103,
      97,
      94,
      90,
      84,
      73,
      49,
      30,
      null,
      19,
      35,
      47
    ],
    [
      122,
      116,
      113,
      109,
      103,
      92,
      68,
      49,
      19,
      null,
      16,
      28
    ],
    [
      138,
      132,
      129,
      126,
      119,
      108,
      84,
      65,
      35,
      16,
      null,
      12
    ],
    [
      149,
      144,
      141,
      137,
      130,
      120,
      95,
      76,
      47,
      28,
      12,
      null
    ]
  ]
},
{
  "id": "A270",
  "routeNo": "এ-২৭০",
  "nameBn": "গাবতলী → রামপুরা বাজার",
  "nameEn": "Gabtoli → Rampura Bazar",
  "totalKm": 26.5,
  "stops": [
    {
      "id": 0,
      "nameEn": "Gabtoli Bridge Par",
      "nameBn": "গাবতলী ব্রীজ পাড়",
      "aliases": [
        "gabtoli bridge par",
        "গাবতলী ব্রীজ পাড়",
        "gabtoli bridge"
      ]
    },
    {
      "id": 1,
      "nameEn": "Technical",
      "nameBn": "টেকনিক্যাল",
      "aliases": [
        "technical",
        "টেকনিক্যাল"
      ]
    },
    {
      "id": 2,
      "nameEn": "Mirpur-1",
      "nameBn": "মিরপুর-১",
      "aliases": [
        "mirpur-1",
        "মিরপুর-১"
      ]
    },
    {
      "id": 3,
      "nameEn": "Mirpur-2",
      "nameBn": "মিরপুর-২",
      "aliases": [
        "mirpur-2",
        "মিরপুর-২"
      ]
    },
    {
      "id": 4,
      "nameEn": "Mirpur-10",
      "nameBn": "মিরপুর-১০",
      "aliases": [
        "mirpur-10",
        "মিরপুর-১০"
      ]
    },
    {
      "id": 5,
      "nameEn": "Mirpur-11",
      "nameBn": "মিরপুর-১১",
      "aliases": [
        "mirpur-11",
        "মিরপুর-১১"
      ]
    },
    {
      "id": 6,
      "nameEn": "Purobi",
      "nameBn": "পূরবী",
      "aliases": [
        "purobi",
        "পূরবী"
      ]
    },
    {
      "id": 7,
      "nameEn": "Kalshi",
      "nameBn": "কালশী",
      "aliases": [
        "kalshi",
        "কালশী"
      ]
    },
    {
      "id": 8,
      "nameEn": "ECB Chattar",
      "nameBn": "ইসিবি চত্বর",
      "aliases": [
        "ecb chattar",
        "ইসিবি চত্বর",
        "ecb"
      ]
    },
    {
      "id": 9,
      "nameEn": "Kakoli",
      "nameBn": "কাকলী",
      "aliases": [
        "kakoli",
        "কাকলী"
      ]
    },
    {
      "id": 10,
      "nameEn": "Mohakhali Amtoli",
      "nameBn": "মহাখালী আমতলী",
      "aliases": [
        "mohakhali amtoli",
        "মহাখালী",
        "mohakhali",
        "আমতলী"
      ]
    },
    {
      "id": 11,
      "nameEn": "Gulshan-1",
      "nameBn": "গুলশান-১",
      "aliases": [
        "gulshan-1",
        "গুলশান-১",
        "gulshan 1"
      ]
    },
    {
      "id": 12,
      "nameEn": "Badda Link Road",
      "nameBn": "বাড্ডা লিংক রোড/মধ্য বাড্ডা",
      "aliases": [
        "badda link road",
        "বাড্ডা লিংক রোড",
        "মধ্য বাড্ডা",
        "madhya badda"
      ]
    },
    {
      "id": 13,
      "nameEn": "Rampura Bazar",
      "nameBn": "রামপুরা বাজার",
      "aliases": [
        "rampura bazar",
        "রামপুরা বাজার",
        "rampura",
        "রামপুরা"
      ]
    }
  ],
  "fareMatrix": [
    [
      0,
      10,
      10,
      13,
      15,
      17,
      19,
      27,
      32,
      42,
      46,
      51,
      58,
      72
    ],
    [
      10,
      0,
      10,
      10,
      10,
      12,
      14,
      22,
      27,
      37,
      41,
      46,
      53,
      67
    ],
    [
      10,
      10,
      0,
      10,
      10,
      10,
      10,
      17,
      22,
      32,
      36,
      41,
      48,
      62
    ],
    [
      13,
      10,
      10,
      0,
      10,
      10,
      10,
      14,
      18,
      29,
      33,
      38,
      45,
      58
    ],
    [
      15,
      10,
      10,
      10,
      0,
      10,
      10,
      12,
      17,
      28,
      32,
      36,
      43,
      57
    ],
    [
      17,
      12,
      10,
      10,
      10,
      0,
      10,
      10,
      14,
      25,
      29,
      34,
      41,
      54
    ],
    [
      19,
      14,
      10,
      10,
      10,
      10,
      0,
      10,
      13,
      23,
      28,
      32,
      39,
      53
    ],
    [
      27,
      22,
      17,
      14,
      12,
      10,
      10,
      0,
      10,
      15,
      19,
      24,
      31,
      45
    ],
    [
      32,
      27,
      22,
      18,
      17,
      14,
      13,
      10,
      0,
      11,
      15,
      19,
      26,
      40
    ],
    [
      42,
      37,
      32,
      29,
      28,
      25,
      23,
      15,
      11,
      0,
      10,
      10,
      16,
      29
    ],
    [
      46,
      41,
      36,
      33,
      32,
      29,
      28,
      19,
      15,
      10,
      0,
      10,
      12,
      25
    ],
    [
      51,
      46,
      41,
      38,
      36,
      34,
      32,
      24,
      19,
      10,
      10,
      0,
      10,
      21
    ],
    [
      58,
      53,
      48,
      45,
      43,
      41,
      39,
      31,
      26,
      16,
      12,
      10,
      0,
      14
    ],
    [
      72,
      67,
      62,
      58,
      57,
      54,
      53,
      45,
      40,
      29,
      25,
      21,
      14,
      0
    ]
  ]
},
{
  "id": "A271",
  "routeNo": "এ-২৭১",
  "nameBn": "গাবতলী → গাজীপুর",
  "nameEn": "Gabtoli → Gazipur",
  "totalKm": 36.7,
  "stops": [
    {
      "id": 0,
      "nameEn": "Gabtoli",
      "nameBn": "গাবতলী ব্রীজ পাড়",
      "aliases": [
        "gabtoli",
        "গাবতলী"
      ]
    },
    {
      "id": 1,
      "nameEn": "Mirpur-1",
      "nameBn": "মিরপুর-১",
      "aliases": [
        "mirpur-1",
        "মিরপুর-১"
      ]
    },
    {
      "id": 2,
      "nameEn": "Mirpur-2",
      "nameBn": "মিরপুর-২",
      "aliases": [
        "mirpur-2",
        "মিরপুর-২"
      ]
    },
    {
      "id": 3,
      "nameEn": "Mirpur-10",
      "nameBn": "মিরপুর-১০",
      "aliases": [
        "mirpur-10",
        "মিরপুর-১০"
      ]
    },
    {
      "id": 4,
      "nameEn": "Kalshi Mor",
      "nameBn": "কালশীর মোড়",
      "aliases": [
        "kalshi mor",
        "কালশীর মোড়",
        "kalshi",
        "কালশী"
      ]
    },
    {
      "id": 5,
      "nameEn": "Khilkhet",
      "nameBn": "খিলক্ষেত",
      "aliases": [
        "khilkhet",
        "খিলক্ষেত"
      ]
    },
    {
      "id": 6,
      "nameEn": "Airport",
      "nameBn": "এয়ারপোর্ট",
      "aliases": [
        "airport",
        "এয়ারপোর্ট"
      ]
    },
    {
      "id": 7,
      "nameEn": "Abdullahpur",
      "nameBn": "আব্দুল্লাহপুর",
      "aliases": [
        "abdullahpur",
        "আব্দুল্লাহপুর"
      ]
    },
    {
      "id": 8,
      "nameEn": "Gazipur",
      "nameBn": "গাজীপুর",
      "aliases": [
        "gazipur",
        "গাজীপুর",
        "gajipur"
      ]
    }
  ],
  "fareMatrix": [
    [
      0,
      10,
      10,
      13,
      26,
      41,
      49,
      59,
      99
    ],
    [
      10,
      0,
      10,
      10,
      20,
      35,
      43,
      53,
      94
    ],
    [
      10,
      10,
      0,
      10,
      15,
      30,
      38,
      48,
      89
    ],
    [
      13,
      10,
      10,
      0,
      13,
      28,
      36,
      46,
      86
    ],
    [
      26,
      20,
      15,
      13,
      0,
      15,
      23,
      33,
      73
    ],
    [
      41,
      35,
      30,
      28,
      15,
      0,
      10,
      18,
      59
    ],
    [
      49,
      43,
      38,
      36,
      23,
      10,
      0,
      10,
      50
    ],
    [
      59,
      53,
      48,
      46,
      33,
      18,
      10,
      0,
      41
    ],
    [
      99,
      94,
      89,
      86,
      73,
      59,
      50,
      41,
      0
    ]
  ]
},
{
  "id": "A273",
  "routeNo": "এ-২৭৩",
  "nameBn": "গাবতলী → আব্দুল্লাহপুর",
  "nameEn": "Gabtoli → Abdullahpur",
  "totalKm": 26.5,
  "stops": [
    {
      "id": 0,
      "nameEn": "Gabtoli",
      "nameBn": "গাবতলী ব্রীজ পাড়",
      "aliases": [
        "gabtoli",
        "গাবতলী"
      ]
    },
    {
      "id": 1,
      "nameEn": "Technical",
      "nameBn": "টেকনিক্যাল",
      "aliases": [
        "technical",
        "টেকনিক্যাল"
      ]
    },
    {
      "id": 2,
      "nameEn": "Mirpur-1",
      "nameBn": "মিরপুর-১",
      "aliases": [
        "mirpur-1",
        "মিরপুর-১"
      ]
    },
    {
      "id": 3,
      "nameEn": "Mirpur-2",
      "nameBn": "মিরপুর-২",
      "aliases": [
        "mirpur-2",
        "মিরপুর-২"
      ]
    },
    {
      "id": 4,
      "nameEn": "Mirpur-10",
      "nameBn": "মিরপুর-১০",
      "aliases": [
        "mirpur-10",
        "মিরপুর-১০"
      ]
    },
    {
      "id": 5,
      "nameEn": "Mirpur-11",
      "nameBn": "মিরপুর-১১",
      "aliases": [
        "mirpur-11",
        "মিরপুর-১১"
      ]
    },
    {
      "id": 6,
      "nameEn": "Purobi",
      "nameBn": "পূরবী",
      "aliases": [
        "purobi",
        "পূরবী"
      ]
    },
    {
      "id": 7,
      "nameEn": "Kalshi",
      "nameBn": "কালশী",
      "aliases": [
        "kalshi",
        "কালশী"
      ]
    },
    {
      "id": 8,
      "nameEn": "ECB Chattar",
      "nameBn": "ইসিবি চত্বর",
      "aliases": [
        "ecb chattar",
        "ইসিবি চত্বর",
        "ecb"
      ]
    },
    {
      "id": 9,
      "nameEn": "Kuril",
      "nameBn": "কুড়িল",
      "aliases": [
        "kuril",
        "কুড়িল"
      ]
    },
    {
      "id": 10,
      "nameEn": "Airport",
      "nameBn": "এয়ারপোর্ট",
      "aliases": [
        "airport",
        "এয়ারপোর্ট"
      ]
    },
    {
      "id": 11,
      "nameEn": "Jashimuddin",
      "nameBn": "জসীমউদ্দীন",
      "aliases": [
        "jashimuddin",
        "জসীমউদ্দীন"
      ]
    },
    {
      "id": 12,
      "nameEn": "Uttara Rajlakshmi",
      "nameBn": "উত্তরা হাউজ বিল্ডিং/মাসকট",
      "aliases": [
        "uttara rajlakshmi",
        "উত্তরা",
        "মাসকট",
        "উত্তরা রাজলক্ষ্মী",
        "house building",
        "হাউজ বিল্ডিং"
      ]
    },
    {
      "id": 13,
      "nameEn": "Abdullahpur",
      "nameBn": "আব্দুল্লাহপুর",
      "aliases": [
        "abdullahpur",
        "আব্দুল্লাহপুর"
      ]
    }
  ],
  "fareMatrix": [
    [
      0,
      10,
      10,
      13,
      15,
      17,
      19,
      27,
      32,
      42,
      46,
      51,
      58,
      72
    ],
    [
      10,
      0,
      10,
      10,
      10,
      12,
      14,
      22,
      27,
      37,
      41,
      46,
      53,
      67
    ],
    [
      10,
      10,
      0,
      10,
      10,
      10,
      10,
      17,
      22,
      32,
      36,
      41,
      48,
      62
    ],
    [
      13,
      10,
      10,
      0,
      10,
      10,
      10,
      14,
      18,
      29,
      33,
      38,
      45,
      58
    ],
    [
      15,
      10,
      10,
      10,
      0,
      10,
      10,
      12,
      17,
      28,
      32,
      36,
      43,
      57
    ],
    [
      17,
      12,
      10,
      10,
      10,
      0,
      10,
      10,
      14,
      25,
      29,
      34,
      41,
      54
    ],
    [
      19,
      14,
      10,
      10,
      10,
      10,
      0,
      10,
      13,
      23,
      28,
      32,
      39,
      53
    ],
    [
      27,
      22,
      17,
      14,
      12,
      10,
      10,
      0,
      10,
      15,
      19,
      24,
      31,
      45
    ],
    [
      32,
      27,
      22,
      18,
      17,
      14,
      13,
      10,
      0,
      11,
      15,
      19,
      26,
      40
    ],
    [
      42,
      37,
      32,
      29,
      28,
      25,
      23,
      15,
      11,
      0,
      10,
      10,
      16,
      29
    ],
    [
      46,
      41,
      36,
      33,
      32,
      29,
      28,
      19,
      15,
      10,
      0,
      10,
      12,
      25
    ],
    [
      51,
      46,
      41,
      38,
      36,
      34,
      32,
      24,
      19,
      10,
      10,
      0,
      10,
      21
    ],
    [
      58,
      53,
      48,
      45,
      43,
      41,
      39,
      31,
      26,
      16,
      12,
      10,
      0,
      14
    ],
    [
      72,
      67,
      62,
      58,
      57,
      54,
      53,
      45,
      40,
      29,
      25,
      21,
      14,
      0
    ]
  ]
},
{
  "id": "A278",
  "routeNo": "এ-২৭৮",
  "nameBn": "মিরপুর-১ → বেরাইদ",
  "nameEn": "Mirpur-1 → Beraid",
  "totalKm": 21,
  "stops": [
    {
      "id": 0,
      "nameEn": "Mirpur-1",
      "nameBn": "মিরপুর-১",
      "aliases": [
        "mirpur-1",
        "মিরপুর-১"
      ]
    },
    {
      "id": 1,
      "nameEn": "Mirpur-2",
      "nameBn": "মিরপুর-২",
      "aliases": [
        "mirpur-2",
        "মিরপুর-২"
      ]
    },
    {
      "id": 2,
      "nameEn": "Kochukhet",
      "nameBn": "কচুক্ষেত",
      "aliases": [
        "kochukhet",
        "কচুক্ষেত"
      ]
    },
    {
      "id": 3,
      "nameEn": "Sainik Club",
      "nameBn": "সৈনিক ক্লাব",
      "aliases": [
        "sainik club",
        "সৈনিক ক্লাব"
      ]
    },
    {
      "id": 4,
      "nameEn": "Banani",
      "nameBn": "বনানী",
      "aliases": [
        "banani",
        "বনানী"
      ]
    },
    {
      "id": 5,
      "nameEn": "Mohakhali",
      "nameBn": "মহাখালী আমতলী",
      "aliases": [
        "mohakhali",
        "মহাখালী",
        "amtoli",
        "আমতলী"
      ]
    },
    {
      "id": 6,
      "nameEn": "Gulshan-1",
      "nameBn": "গুলশান-১",
      "aliases": [
        "gulshan-1",
        "গুলশান-১"
      ]
    },
    {
      "id": 7,
      "nameEn": "Badda Link Road",
      "nameBn": "বাড্ডা লিংক রোড",
      "aliases": [
        "badda link road",
        "বাড্ডা লিংক রোড",
        "বাড্ডা"
      ]
    },
    {
      "id": 8,
      "nameEn": "Notun Bazar",
      "nameBn": "নতুন বাজার",
      "aliases": [
        "notun bazar",
        "নতুন বাজার"
      ]
    },
    {
      "id": 9,
      "nameEn": "Beraid",
      "nameBn": "বেরাইদ",
      "aliases": [
        "beraid",
        "বেরাইদ"
      ]
    }
  ],
  "fareMatrix": [
    [
      0,
      10,
      16,
      19,
      22,
      28,
      33,
      37,
      41,
      57
    ],
    [
      10,
      0,
      13,
      16,
      18,
      25,
      29,
      33,
      37,
      53
    ],
    [
      16,
      13,
      0,
      10,
      10,
      12,
      17,
      21,
      24,
      41
    ],
    [
      19,
      16,
      10,
      0,
      10,
      10,
      14,
      18,
      21,
      37
    ],
    [
      22,
      18,
      10,
      10,
      0,
      10,
      11,
      15,
      19,
      35
    ],
    [
      28,
      25,
      12,
      10,
      10,
      0,
      10,
      10,
      12,
      28
    ],
    [
      33,
      29,
      17,
      14,
      11,
      10,
      0,
      10,
      10,
      24
    ],
    [
      37,
      33,
      21,
      18,
      15,
      10,
      10,
      0,
      10,
      20
    ],
    [
      41,
      37,
      24,
      21,
      19,
      12,
      10,
      10,
      0,
      16
    ],
    [
      57,
      53,
      41,
      37,
      35,
      28,
      24,
      20,
      16,
      0
    ]
  ]
},
{
  "id": "A280",
  "routeNo": "এ-২৮০",
  "nameBn": "মিরপুর ডিওএইচএস → মতিঝিল",
  "nameEn": "Mirpur DOHS → Motijheel",
  "totalKm": 18.9,
  "stops": [
    {
      "id": 0,
      "nameEn": "Mirpur DOHS",
      "nameBn": "মিরপুর ডিওএইচএস",
      "aliases": [
        "mirpur dohs",
        "মিরপুর ডিওএইচএস"
      ]
    },
    {
      "id": 1,
      "nameEn": "Kalshi Mor",
      "nameBn": "কালশি মোড়",
      "aliases": [
        "kalshi mor",
        "কালশি মোড়",
        "kalshi",
        "কালশী"
      ]
    },
    {
      "id": 2,
      "nameEn": "ECB Chattar",
      "nameBn": "ইসিবি চত্বর",
      "aliases": [
        "ecb chattar",
        "ইসিবি চত্বর",
        "ecb"
      ]
    },
    {
      "id": 3,
      "nameEn": "Cantonment Signal Gate",
      "nameBn": "ক্যান্টনমেন্ট সিগন্যাল গেট",
      "aliases": [
        "cantonment signal gate",
        "ক্যান্টনমেন্ট",
        "cantonment"
      ]
    },
    {
      "id": 4,
      "nameEn": "Workshop",
      "nameBn": "ওয়ার্ক সপ",
      "aliases": [
        "workshop",
        "ওয়ার্ক সপ"
      ]
    },
    {
      "id": 5,
      "nameEn": "Farmgate",
      "nameBn": "ফার্মগেট",
      "aliases": [
        "farmgate",
        "ফার্মগেট"
      ]
    },
    {
      "id": 6,
      "nameEn": "Shahbag",
      "nameBn": "শাহবাগ",
      "aliases": [
        "shahbag",
        "শাহবাগ"
      ]
    },
    {
      "id": 7,
      "nameEn": "Gulistan",
      "nameBn": "গুলিস্তান",
      "aliases": [
        "gulistan",
        "গুলিস্তান"
      ]
    },
    {
      "id": 8,
      "nameEn": "Motijheel",
      "nameBn": "মতিঝিল",
      "aliases": [
        "motijheel",
        "মতিঝিল"
      ]
    }
  ],
  "fareMatrix": [
    [
      0,
      10,
      10,
      16,
      24,
      32,
      39,
      46,
      51
    ],
    [
      10,
      0,
      10,
      10,
      16,
      24,
      31,
      38,
      43
    ],
    [
      10,
      10,
      0,
      10,
      14,
      22,
      28,
      35,
      40
    ],
    [
      16,
      10,
      10,
      0,
      10,
      16,
      22,
      30,
      35
    ],
    [
      24,
      16,
      14,
      10,
      0,
      10,
      14,
      22,
      27
    ],
    [
      32,
      24,
      22,
      16,
      10,
      0,
      10,
      14,
      19
    ],
    [
      39,
      31,
      28,
      22,
      14,
      10,
      0,
      10,
      12
    ],
    [
      46,
      38,
      35,
      30,
      22,
      14,
      10,
      0,
      10
    ],
    [
      51,
      43,
      40,
      35,
      27,
      19,
      12,
      10,
      0
    ]
  ]
},
{
  "id": "A285",
  "routeNo": "এ-২৮৫",
  "nameBn": "চিড়িয়াখানা → কেরানীগঞ্জ",
  "nameEn": "Chiriakhana → Keraniganj",
  "totalKm": 21,
  "stops": [
    {
      "id": 0,
      "nameEn": "Mirpur Chiriakhana",
      "nameBn": "চিড়িয়াখানা",
      "aliases": [
        "chiriakhana",
        "চিড়িয়াখানা",
        "mirpur chiriakhana"
      ]
    },
    {
      "id": 1,
      "nameEn": "Mirpur-1",
      "nameBn": "মিরপুর-১",
      "aliases": [
        "mirpur-1",
        "মিরপুর-১"
      ]
    },
    {
      "id": 2,
      "nameEn": "Technical",
      "nameBn": "টেকনিক্যাল",
      "aliases": [
        "technical",
        "টেকনিক্যাল"
      ]
    },
    {
      "id": 3,
      "nameEn": "Shyamoli",
      "nameBn": "শ্যামলী",
      "aliases": [
        "shyamoli",
        "শ্যামলী"
      ]
    },
    {
      "id": 4,
      "nameEn": "Asadgate",
      "nameBn": "আসাদগেট",
      "aliases": [
        "asadgate",
        "আসাদগেট"
      ]
    },
    {
      "id": 5,
      "nameEn": "Farmgate",
      "nameBn": "ফার্মগেট",
      "aliases": [
        "farmgate",
        "ফার্মগেট"
      ]
    },
    {
      "id": 6,
      "nameEn": "Pressclub",
      "nameBn": "প্রেসক্লাব",
      "aliases": [
        "pressclub",
        "প্রেসক্লাব"
      ]
    },
    {
      "id": 7,
      "nameEn": "Fulbaria",
      "nameBn": "ফুলবাড়ীয়া",
      "aliases": [
        "fulbaria",
        "ফুলবাড়ীয়া",
        "golapshah mazar fulbaria"
      ]
    },
    {
      "id": 8,
      "nameEn": "Tanti Bazar",
      "nameBn": "তাঁতী বাজার",
      "aliases": [
        "tanti bazar",
        "তাঁতী বাজার"
      ]
    },
    {
      "id": 9,
      "nameEn": "Babu Bazar Bridge",
      "nameBn": "বাবু বাজার ব্রীজ",
      "aliases": [
        "babu bazar bridge",
        "বাবু বাজার ব্রীজ",
        "babu bazar"
      ]
    },
    {
      "id": 10,
      "nameEn": "Kadamtali",
      "nameBn": "কদমতলী",
      "aliases": [
        "kadamtali",
        "কদমতলী"
      ]
    },
    {
      "id": 11,
      "nameEn": "Keraniganj",
      "nameBn": "কেরানীগঞ্জ",
      "aliases": [
        "keraniganj",
        "কেরানীগঞ্জ",
        "keranigonj"
      ]
    }
  ],
  "fareMatrix": [
    [
      0,
      10,
      10,
      15,
      19,
      24,
      34,
      38,
      42,
      46,
      49,
      57
    ],
    [
      10,
      0,
      10,
      10,
      15,
      19,
      29,
      33,
      38,
      41,
      44,
      52
    ],
    [
      10,
      10,
      0,
      10,
      12,
      17,
      27,
      31,
      35,
      38,
      41,
      49
    ],
    [
      15,
      10,
      10,
      0,
      10,
      10,
      19,
      24,
      28,
      31,
      34,
      42
    ],
    [
      19,
      15,
      12,
      10,
      0,
      10,
      15,
      19,
      23,
      26,
      29,
      37
    ],
    [
      24,
      19,
      17,
      10,
      10,
      0,
      10,
      14,
      18,
      21,
      24,
      32
    ],
    [
      34,
      29,
      27,
      19,
      15,
      10,
      0,
      10,
      10,
      12,
      15,
      23
    ],
    [
      38,
      33,
      31,
      24,
      19,
      14,
      10,
      0,
      10,
      10,
      10,
      18
    ],
    [
      42,
      38,
      35,
      28,
      23,
      18,
      10,
      10,
      0,
      10,
      10,
      14
    ],
    [
      46,
      41,
      38,
      31,
      26,
      21,
      12,
      10,
      10,
      0,
      10,
      11
    ],
    [
      49,
      44,
      41,
      34,
      29,
      24,
      15,
      10,
      10,
      10,
      0,
      10
    ],
    [
      57,
      52,
      49,
      42,
      37,
      32,
      23,
      18,
      14,
      11,
      10,
      0
    ]
  ]
},
{
  "id": "A260",
  "routeNo": "এ-২৬০",
  "nameBn": "ফুলবাড়ীয়া পশু হাসপাতাল → ধামরাই",
  "nameEn": "Fulbaria Poshu Hospital → Dhamrai",
  "totalKm": 42,
  "stops": [
    {
      "id": 0,
      "nameEn": "Fulbaria",
      "nameBn": "ফুলবাড়ীয়া",
      "aliases": [
        "fulbaria",
        "ফুলবাড়ীয়া"
      ]
    },
    {
      "id": 1,
      "nameEn": "Chankharpul",
      "nameBn": "চাঁনখারপুল",
      "aliases": [
        "chankharpul",
        "চাঁনখারপুল"
      ]
    },
    {
      "id": 2,
      "nameEn": "Azimpur",
      "nameBn": "আজিমপুর",
      "aliases": [
        "azimpur",
        "আজিমপুর"
      ]
    },
    {
      "id": 3,
      "nameEn": "Asad Gate",
      "nameBn": "আসাদগেট",
      "aliases": [
        "asad gate",
        "আসাদগেট"
      ]
    },
    {
      "id": 4,
      "nameEn": "Technical",
      "nameBn": "টেকনিক্যাল",
      "aliases": [
        "technical",
        "টেকনিক্যাল"
      ]
    },
    {
      "id": 5,
      "nameEn": "Gabtoli",
      "nameBn": "গাবতলী",
      "aliases": [
        "gabtoli",
        "গাবতলী",
        "গাবতলি"
      ]
    },
    {
      "id": 6,
      "nameEn": "Dhamrai",
      "nameBn": "ধামরাই",
      "aliases": [
        "dhamrai",
        "ধামরাই"
      ]
    }
  ],
  "fareMatrix": [
    [
      0,
      10,
      14,
      22,
      30,
      32,
      113
    ],
    [
      10,
      null,
      10,
      18,
      26,
      28,
      109
    ],
    [
      14,
      10,
      null,
      10,
      16,
      19,
      100
    ],
    [
      22,
      18,
      10,
      null,
      10,
      11,
      92
    ],
    [
      30,
      26,
      16,
      10,
      null,
      10,
      84
    ],
    [
      32,
      28,
      19,
      11,
      10,
      null,
      81
    ],
    [
      113,
      109,
      100,
      92,
      84,
      81,
      null
    ]
  ]
},
{
  "id": "A264",
  "routeNo": "এ-২৬৪",
  "nameBn": "মিরপুর (চিড়িয়াখানা) → পোস্তগোলা",
  "nameEn": "Mirpur (Chiriakhana) → Postogola",
  "totalKm": 17.2,
  "stops": [
    {
      "id": 0,
      "nameEn": "Mirpur Chiriakhana",
      "nameBn": "মিরপুর (চিড়িয়াখানা)",
      "aliases": [
        "mirpur chiriakhana",
        "মিরপুর (চিড়িয়াখানা)",
        "চিড়িয়াখানা"
      ]
    },
    {
      "id": 1,
      "nameEn": "Mirpur-1",
      "nameBn": "মিরপুর-১",
      "aliases": [
        "mirpur-1",
        "মিরপুর-১",
        "মিরপুর ১"
      ]
    },
    {
      "id": 2,
      "nameEn": "Ansar Camp",
      "nameBn": "আনসারক্যাম্প",
      "aliases": [
        "ansar camp",
        "আনসারক্যাম্প",
        "আনসার ক্যাম্প"
      ]
    },
    {
      "id": 3,
      "nameEn": "Technical",
      "nameBn": "টেকনিক্যাল",
      "aliases": [
        "technical",
        "টেকনিক্যাল"
      ]
    },
    {
      "id": 4,
      "nameEn": "Golapshah Mazar Fulbaria",
      "nameBn": "গোলাপশাহ মাজার (ফুলবাড়ীয়া)",
      "aliases": [
        "golapshah mazar fulbaria",
        "গোলাপশাহ মাজার (ফুলবাড়ীয়া)",
        "গোলাপশাহ মাজার"
      ]
    },
    {
      "id": 5,
      "nameEn": "Naya Bazar 2 No Bridge",
      "nameBn": "নয়াবাজার (২নং ঢাল সংলগ্ন)",
      "aliases": [
        "naya bazar 2 no bridge",
        "নয়াবাজার (২নং ঢাল সংলগ্ন)",
        "নয়াবাজার"
      ]
    },
    {
      "id": 6,
      "nameEn": "Postogola",
      "nameBn": "পোস্তগোলা",
      "aliases": [
        "postogola",
        "পোস্তগোলা"
      ]
    }
  ],
  "fareMatrix": [
    [
      0,
      10,
      10,
      24,
      38,
      42,
      46
    ],
    [
      10,
      null,
      10,
      19,
      33,
      38,
      42
    ],
    [
      10,
      10,
      null,
      17,
      31,
      35,
      39
    ],
    [
      24,
      19,
      17,
      null,
      14,
      18,
      22
    ],
    [
      38,
      33,
      31,
      14,
      null,
      10,
      10
    ],
    [
      42,
      38,
      35,
      18,
      10,
      null,
      10
    ],
    [
      46,
      42,
      39,
      22,
      10,
      10,
      null
    ]
  ]
},
{
  "id": "A265",
  "routeNo": "এ-২৬৫",
  "nameBn": "জগন্নাথ বিশ্ববিদ্যালয় → চন্দ্রা",
  "nameEn": "Jagannath University → Chandra",
  "totalKm": 55.3,
  "stops": [
    {
      "id": 0,
      "nameEn": "Jagannath University",
      "nameBn": "জগন্নাথ বিশ্ববিদ্যালয়",
      "aliases": [
        "jagannath university",
        "জগন্নাথ বিশ্ববিদ্যালয়"
      ]
    },
    {
      "id": 1,
      "nameEn": "Fulbaria",
      "nameBn": "ফুলবাড়ীয়া",
      "aliases": [
        "fulbaria",
        "ফুলবাড়ীয়া"
      ]
    },
    {
      "id": 2,
      "nameEn": "Paltan",
      "nameBn": "পল্টন",
      "aliases": [
        "paltan",
        "পল্টন"
      ]
    },
    {
      "id": 3,
      "nameEn": "Kakrail",
      "nameBn": "কাকরাইল",
      "aliases": [
        "kakrail",
        "কাকরাইল"
      ]
    },
    {
      "id": 4,
      "nameEn": "Moghbazar",
      "nameBn": "মগবাজার",
      "aliases": [
        "moghbazar",
        "মগবাজার"
      ]
    },
    {
      "id": 5,
      "nameEn": "Mohakhali",
      "nameBn": "মহাখালী",
      "aliases": [
        "mohakhali",
        "মহাখালী"
      ]
    },
    {
      "id": 6,
      "nameEn": "Airport",
      "nameBn": "এয়ারপোর্ট",
      "aliases": [
        "airport",
        "এয়ারপোর্ট"
      ]
    },
    {
      "id": 7,
      "nameEn": "Tongi",
      "nameBn": "টঙ্গী",
      "aliases": [
        "tongi",
        "টঙ্গী"
      ]
    },
    {
      "id": 8,
      "nameEn": "Gazipur",
      "nameBn": "গাজীপুর",
      "aliases": [
        "gazipur",
        "গাজীপুর"
      ]
    },
    {
      "id": 9,
      "nameEn": "Konabari",
      "nameBn": "কোনাবাড়ী",
      "aliases": [
        "konabari",
        "কোনাবাড়ী"
      ]
    },
    {
      "id": 10,
      "nameEn": "Shafipur",
      "nameBn": "সফিপুর",
      "aliases": [
        "shafipur",
        "সফিপুর"
      ]
    },
    {
      "id": 11,
      "nameEn": "Chandra",
      "nameBn": "চন্দ্রা",
      "aliases": [
        "chandra",
        "চন্দ্রা"
      ]
    }
  ],
  "fareMatrix": [
    [
      0,
      10,
      10,
      12,
      19,
      30,
      54,
      73,
      103,
      122,
      138,
      149
    ],
    [
      10,
      null,
      10,
      10,
      14,
      24,
      49,
      68,
      97,
      116,
      132,
      144
    ],
    [
      10,
      10,
      null,
      10,
      10,
      21,
      45,
      64,
      94,
      113,
      129,
      141
    ],
    [
      12,
      10,
      10,
      null,
      10,
      18,
      42,
      61,
      90,
      109,
      126,
      137
    ],
    [
      19,
      14,
      10,
      10,
      null,
      11,
      35,
      54,
      84,
      103,
      119,
      130
    ],
    [
      30,
      24,
      21,
      18,
      11,
      null,
      24,
      43,
      73,
      92,
      108,
      120
    ],
    [
      54,
      49,
      45,
      42,
      35,
      24,
      null,
      19,
      49,
      68,
      84,
      95
    ],
    [
      73,
      68,
      64,
      61,
      54,
      43,
      19,
      null,
      30,
      49,
      65,
      76
    ],
    [
      103,
      97,
      94,
      90,
      84,
      73,
      49,
      30,
      null,
      19,
      35,
      47
    ],
    [
      122,
      116,
      113,
      109,
      103,
      92,
      68,
      49,
      19,
      null,
      16,
      28
    ],
    [
      138,
      132,
      129,
      126,
      119,
      108,
      84,
      65,
      35,
      16,
      null,
      12
    ],
    [
      149,
      144,
      141,
      137,
      130,
      120,
      95,
      76,
      47,
      28,
      12,
      null
    ]
  ]
},
{
  "id": "A270",
  "routeNo": "এ-২৭০",
  "nameBn": "বসিলা → কামারপাড়া",
  "nameEn": "Basila → Kamarpara",
  "totalKm": 29.2,
  "stops": [
    {
      "id": 0,
      "nameEn": "Bosila",
      "nameBn": "বসিলা",
      "aliases": [
        "basila",
        "বসিলা",
        "bosila",
        "বছিলা"
      ]
    },
    {
      "id": 1,
      "nameEn": "Asad Avenue",
      "nameBn": "আসাদ এভিনিউ",
      "aliases": [
        "asad avenue",
        "আসাদ এভিনিউ"
      ]
    },
    {
      "id": 2,
      "nameEn": "Shyamoli",
      "nameBn": "শ্যামলী",
      "aliases": [
        "shyamoli",
        "শ্যামলী"
      ]
    },
    {
      "id": 3,
      "nameEn": "Kalyanpur",
      "nameBn": "কল্যাণপুর",
      "aliases": [
        "kalyanpur",
        "কল্যাণপুর"
      ]
    },
    {
      "id": 4,
      "nameEn": "Technical",
      "nameBn": "টেকনিক্যাল",
      "aliases": [
        "technical",
        "টেকনিক্যাল"
      ]
    },
    {
      "id": 5,
      "nameEn": "Mirpur-1",
      "nameBn": "মিরপুর-১",
      "aliases": [
        "mirpur-1",
        "মিরপুর-১",
        "মিরপুর ১"
      ]
    },
    {
      "id": 6,
      "nameEn": "Mirpur-2",
      "nameBn": "মিরপুর-২",
      "aliases": [
        "mirpur-2",
        "মিরপুর-২",
        "মিরপুর ২"
      ]
    },
    {
      "id": 7,
      "nameEn": "Mirpur-10",
      "nameBn": "মিরপুর-১০",
      "aliases": [
        "mirpur-10",
        "মিরপুর-১০",
        "মিরপুর ১০"
      ]
    },
    {
      "id": 8,
      "nameEn": "Mirpur-11",
      "nameBn": "মিরপুর-১১",
      "aliases": [
        "mirpur-11",
        "মিরপুর-১১",
        "মিরপুর ১১"
      ]
    },
    {
      "id": 9,
      "nameEn": "Purobi",
      "nameBn": "পুরবী",
      "aliases": [
        "purobi",
        "পুরবী"
      ]
    },
    {
      "id": 10,
      "nameEn": "Kalshi",
      "nameBn": "কালশী",
      "aliases": [
        "kalshi",
        "কালশী"
      ]
    },
    {
      "id": 11,
      "nameEn": "Khilkhet Bazar",
      "nameBn": "খিলক্ষেত বাজার",
      "aliases": [
        "khilkhet bazar",
        "খিলক্ষেত বাজার",
        "খিলক্ষেত"
      ]
    },
    {
      "id": 12,
      "nameEn": "Airport",
      "nameBn": "এয়ারপোর্ট",
      "aliases": [
        "airport",
        "এয়ারপোর্ট"
      ]
    },
    {
      "id": 13,
      "nameEn": "Jashimuddin",
      "nameBn": "জসিমউদ্দিন",
      "aliases": [
        "jashimuddin",
        "জসিমউদ্দিন"
      ]
    },
    {
      "id": 14,
      "nameEn": "Abdullahpur",
      "nameBn": "আব্দুল্লাহপুর",
      "aliases": [
        "abdullahpur",
        "আব্দুল্লাহপুর"
      ]
    },
    {
      "id": 15,
      "nameEn": "Kamarpara",
      "nameBn": "কামারপাড়া",
      "aliases": [
        "kamarpara",
        "কামারপাড়া"
      ]
    }
  ],
  "fareMatrix": [
    [
      0,
      10,
      13,
      16,
      16,
      23,
      26,
      28,
      31,
      32,
      41,
      52,
      63,
      66,
      73,
      79
    ],
    [
      10,
      null,
      10,
      10,
      10,
      15,
      18,
      20,
      22,
      24,
      32,
      44,
      55,
      58,
      65,
      71
    ],
    [
      13,
      10,
      null,
      10,
      10,
      10,
      14,
      15,
      18,
      19,
      28,
      39,
      50,
      53,
      60,
      66
    ],
    [
      16,
      10,
      10,
      null,
      10,
      10,
      11,
      12,
      15,
      16,
      25,
      36,
      47,
      51,
      57,
      63
    ],
    [
      16,
      10,
      10,
      10,
      null,
      10,
      10,
      11,
      14,
      16,
      24,
      36,
      47,
      50,
      57,
      63
    ],
    [
      23,
      15,
      10,
      10,
      10,
      null,
      10,
      10,
      10,
      10,
      18,
      29,
      40,
      43,
      50,
      56
    ],
    [
      26,
      18,
      14,
      11,
      10,
      10,
      null,
      10,
      10,
      10,
      14,
      26,
      37,
      40,
      47,
      52
    ],
    [
      28,
      20,
      15,
      12,
      11,
      10,
      10,
      null,
      10,
      10,
      13,
      25,
      35,
      39,
      45,
      51
    ],
    [
      31,
      22,
      18,
      15,
      14,
      10,
      10,
      10,
      null,
      10,
      10,
      22,
      33,
      36,
      43,
      48
    ],
    [
      32,
      24,
      19,
      16,
      16,
      10,
      10,
      10,
      10,
      null,
      10,
      21,
      31,
      35,
      41,
      47
    ],
    [
      41,
      32,
      28,
      25,
      24,
      18,
      14,
      13,
      10,
      10,
      null,
      12,
      23,
      26,
      33,
      38
    ],
    [
      52,
      44,
      39,
      36,
      36,
      29,
      26,
      25,
      22,
      21,
      12,
      null,
      11,
      14,
      21,
      26
    ],
    [
      63,
      55,
      50,
      47,
      47,
      40,
      37,
      35,
      33,
      31,
      23,
      11,
      null,
      10,
      10,
      16
    ],
    [
      66,
      58,
      53,
      51,
      50,
      43,
      40,
      39,
      36,
      35,
      26,
      14,
      10,
      null,
      10,
      12
    ],
    [
      73,
      65,
      60,
      57,
      57,
      50,
      47,
      45,
      43,
      41,
      33,
      21,
      10,
      10,
      null,
      10
    ],
    [
      79,
      71,
      66,
      63,
      63,
      56,
      52,
      51,
      48,
      47,
      38,
      26,
      16,
      12,
      10,
      null
    ]
  ]
},
{
  "id": "A292",
  "routeNo": "এ-২৯২",
  "nameBn": "মোহাম্মদপুর শিয়া মসজিদ → নবীনগর (সাভার)",
  "nameEn": "Mohammadpur Shia Masjid → Nabinagar (Savar)",
  "totalKm": 40,
  "stops": [
    {
      "id": 0,
      "nameEn": "Mohammadpur Shia Masjid",
      "nameBn": "মোহাম্মদপুর শিয়া মসজিদ",
      "aliases": [
        "mohammadpur shia masjid",
        "মোহাম্মদপুর শিয়া মসজিদ",
        "shia masjid",
        "শিয়া মসজিদ"
      ]
    },
    {
      "id": 1,
      "nameEn": "Shyamoli",
      "nameBn": "শ্যামলী",
      "aliases": [
        "shyamoli",
        "শ্যামলী"
      ]
    },
    {
      "id": 2,
      "nameEn": "Shishumela",
      "nameBn": "শিশুমেলা",
      "aliases": [
        "shishumela",
        "শিশুমেলা"
      ]
    },
    {
      "id": 3,
      "nameEn": "Agargaon",
      "nameBn": "আগারগাঁও",
      "aliases": [
        "agargaon",
        "আগারগাঁও"
      ]
    },
    {
      "id": 4,
      "nameEn": "Mohakhali",
      "nameBn": "মহাখালী",
      "aliases": [
        "mohakhali",
        "মহাখালী"
      ]
    },
    {
      "id": 5,
      "nameEn": "Banani",
      "nameBn": "বনানী",
      "aliases": [
        "banani",
        "বনানী"
      ]
    },
    {
      "id": 6,
      "nameEn": "Airport",
      "nameBn": "বিমানবন্দর",
      "aliases": [
        "airport",
        "বিমানবন্দর",
        "এয়ারপোর্ট"
      ]
    },
    {
      "id": 7,
      "nameEn": "Uttara",
      "nameBn": "উত্তরা",
      "aliases": [
        "uttara",
        "উত্তরা"
      ]
    },
    {
      "id": 8,
      "nameEn": "Abdullahpur",
      "nameBn": "আব্দুল্লাহপুর",
      "aliases": [
        "abdullahpur",
        "আব্দুল্লাহপুর"
      ]
    },
    {
      "id": 9,
      "nameEn": "Tongi",
      "nameBn": "টঙ্গী",
      "aliases": [
        "tongi",
        "টঙ্গী"
      ]
    },
    {
      "id": 10,
      "nameEn": "Ashulia",
      "nameBn": "আশুলিয়া",
      "aliases": [
        "ashulia",
        "আশুলিয়া"
      ]
    },
    {
      "id": 11,
      "nameEn": "Nabinagar Savar",
      "nameBn": "নবীনগর (সাভার)",
      "aliases": [
        "nabinagar savar",
        "নবীনগর (সাভার)",
        "nabinagar",
        "নবীনগর",
        "savar",
        "সাভার"
      ]
    }
  ],
  "fareMatrix": [
    [
      0,
      10,
      10,
      11,
      22,
      26,
      47,
      53,
      56,
      68,
      77,
      108
    ],
    [
      10,
      0,
      10,
      10,
      18,
      22,
      43,
      49,
      52,
      64,
      73,
      104
    ],
    [
      10,
      10,
      0,
      10,
      16,
      21,
      41,
      47,
      51,
      63,
      71,
      103
    ],
    [
      11,
      10,
      10,
      0,
      11,
      15,
      36,
      42,
      45,
      57,
      66,
      97
    ],
    [
      22,
      18,
      16,
      11,
      0,
      10,
      25,
      31,
      35,
      46,
      55,
      86
    ],
    [
      26,
      22,
      21,
      15,
      10,
      0,
      20,
      26,
      30,
      42,
      50,
      82
    ],
    [
      47,
      43,
      41,
      36,
      25,
      20,
      0,
      10,
      10,
      21,
      30,
      61
    ],
    [
      53,
      49,
      47,
      42,
      31,
      26,
      10,
      0,
      10,
      15,
      24,
      55
    ],
    [
      56,
      52,
      51,
      45,
      35,
      30,
      10,
      10,
      0,
      10,
      21,
      52
    ],
    [
      68,
      64,
      63,
      57,
      46,
      42,
      21,
      15,
      10,
      0,
      10,
      40
    ],
    [
      77,
      73,
      71,
      66,
      55,
      50,
      30,
      24,
      21,
      10,
      0,
      31
    ],
    [
      108,
      104,
      103,
      97,
      86,
      82,
      61,
      55,
      52,
      40,
      31,
      0
    ]
  ]
},
{
  "id": "A294",
  "routeNo": "এ-২৯৪",
  "nameBn": "জাপান গার্ডেন সিটি → টঙ্গী",
  "nameEn": "Japan Garden City → Tongi",
  "totalKm": 25.2,
  "stops": [
    {
      "id": 0,
      "nameEn": "Japan Garden City",
      "nameBn": "জাপান গার্ডেন সিটি",
      "aliases": [
        "japan garden city",
        "জাপান গার্ডেন সিটি",
        "japan garden"
      ]
    },
    {
      "id": 1,
      "nameEn": "Shyamoli",
      "nameBn": "শ্যামলী",
      "aliases": [
        "shyamoli",
        "শ্যামলী"
      ]
    },
    {
      "id": 2,
      "nameEn": "Agargaon",
      "nameBn": "আগারগাঁও",
      "aliases": [
        "agargaon",
        "আগারগাঁও"
      ]
    },
    {
      "id": 3,
      "nameEn": "Mohakhali",
      "nameBn": "মহাখালী",
      "aliases": [
        "mohakhali",
        "মহাখালী"
      ]
    },
    {
      "id": 4,
      "nameEn": "Kakoli",
      "nameBn": "কাকলী",
      "aliases": [
        "kakoli",
        "কাকলী"
      ]
    },
    {
      "id": 5,
      "nameEn": "Airport",
      "nameBn": "এয়ারপোর্ট",
      "aliases": [
        "airport",
        "এয়ারপোর্ট",
        "বিমানবন্দর"
      ]
    },
    {
      "id": 6,
      "nameEn": "Uttara",
      "nameBn": "উত্তরা",
      "aliases": [
        "uttara",
        "উত্তরা"
      ]
    },
    {
      "id": 7,
      "nameEn": "Tongi",
      "nameBn": "টঙ্গী",
      "aliases": [
        "tongi",
        "টঙ্গী"
      ]
    }
  ],
  "fareMatrix": [
    [
      0,
      10,
      11,
      22,
      26,
      47,
      53,
      68
    ],
    [
      10,
      0,
      10,
      18,
      22,
      43,
      49,
      64
    ],
    [
      11,
      10,
      0,
      10,
      15,
      36,
      42,
      57
    ],
    [
      22,
      18,
      10,
      0,
      10,
      25,
      31,
      46
    ],
    [
      26,
      22,
      15,
      10,
      0,
      20,
      26,
      42
    ],
    [
      47,
      43,
      36,
      25,
      20,
      0,
      10,
      21
    ],
    [
      53,
      49,
      42,
      31,
      26,
      10,
      0,
      15
    ],
    [
      68,
      64,
      57,
      46,
      42,
      21,
      15,
      0
    ]
  ]
},
{
  "id": "A295",
  "routeNo": "এ-২৯৫",
  "nameBn": "মিরপুর-১২ → মাওয়া ফেরীঘাট",
  "nameEn": "Mirpur-12 → Mawa Ferighat",
  "totalKm": 53,
  "stops": [
    {
      "id": 0,
      "nameEn": "Mirpur-12",
      "nameBn": "মিরপুর-১২",
      "aliases": [
        "mirpur-12",
        "মিরপুর-১২"
      ]
    },
    {
      "id": 1,
      "nameEn": "Mirpur-10",
      "nameBn": "মিরপুর-১০",
      "aliases": [
        "mirpur-10",
        "মিরপুর-১০"
      ]
    },
    {
      "id": 2,
      "nameEn": "Bijoy Sarani",
      "nameBn": "বিজয় সরণী",
      "aliases": [
        "bijoy sarani",
        "বিজয় সরণী",
        "বিজয় সরনি"
      ]
    },
    {
      "id": 3,
      "nameEn": "Farmgate",
      "nameBn": "ফার্মগেট",
      "aliases": [
        "farmgate",
        "ফার্মগেট"
      ]
    },
    {
      "id": 4,
      "nameEn": "Gulistan",
      "nameBn": "গুলিস্তান",
      "aliases": [
        "gulistan",
        "গুলিস্তান"
      ]
    },
    {
      "id": 5,
      "nameEn": "Babu Bazar Bridge",
      "nameBn": "বাবু বাজার ব্রীজ",
      "aliases": [
        "babu bazar bridge",
        "বাবু বাজার ব্রীজ",
        "babu bazar",
        "বাবু বাজার"
      ]
    },
    {
      "id": 6,
      "nameEn": "Mawa Ferighat",
      "nameBn": "মাওয়া ফেরীঘাট",
      "aliases": [
        "mawa ferighat",
        "মাওয়া ফেরীঘাট",
        "mawa",
        "মাওয়া",
        "ফেরীঘাট"
      ]
    }
  ],
  "fareMatrix": [
    [
      0,
      10,
      25,
      27,
      41,
      49,
      143
    ],
    [
      10,
      0,
      17,
      19,
      32,
      41,
      135
    ],
    [
      25,
      17,
      0,
      10,
      15,
      23,
      118
    ],
    [
      27,
      19,
      10,
      0,
      14,
      22,
      116
    ],
    [
      41,
      32,
      15,
      14,
      0,
      10,
      103
    ],
    [
      49,
      41,
      23,
      22,
      10,
      0,
      95
    ],
    [
      143,
      135,
      118,
      116,
      103,
      95,
      0
    ]
  ]
},
{
  "id": "A299",
  "routeNo": "এ-২৯৯",
  "nameBn": "আটি বাজার → টঙ্গী",
  "nameEn": "Atibazar → Tongi",
  "totalKm": 29,
  "stops": [
    {
      "id": 0,
      "nameEn": "Atibazar",
      "nameBn": "আটিবাজার",
      "aliases": [
        "atibazar",
        "আটিবাজার",
        "ati bazar",
        "আটি বাজার"
      ]
    },
    {
      "id": 1,
      "nameEn": "Mohammadpur",
      "nameBn": "মোহাম্মদপুর",
      "aliases": [
        "mohammadpur",
        "মোহাম্মদপুর"
      ]
    },
    {
      "id": 2,
      "nameEn": "Farmgate",
      "nameBn": "ফার্মগেট",
      "aliases": [
        "farmgate",
        "ফার্মগেট"
      ]
    },
    {
      "id": 3,
      "nameEn": "Kakoli",
      "nameBn": "কাকলী",
      "aliases": [
        "kakoli",
        "কাকলী"
      ]
    },
    {
      "id": 4,
      "nameEn": "Airport",
      "nameBn": "এয়ারপোর্ট",
      "aliases": [
        "airport",
        "এয়ারপোর্ট",
        "বিমানবন্দর"
      ]
    },
    {
      "id": 5,
      "nameEn": "Uttara",
      "nameBn": "উত্তরা",
      "aliases": [
        "uttara",
        "উত্তরা"
      ]
    },
    {
      "id": 6,
      "nameEn": "Tongi",
      "nameBn": "টঙ্গী",
      "aliases": [
        "tongi",
        "টঙ্গী"
      ]
    }
  ],
  "fareMatrix": [
    [
      0,
      14,
      22,
      35,
      54,
      62,
      78
    ],
    [
      14,
      0,
      10,
      22,
      41,
      49,
      65
    ],
    [
      22,
      10,
      0,
      14,
      32,
      41,
      57
    ],
    [
      35,
      22,
      14,
      0,
      19,
      27,
      43
    ],
    [
      54,
      41,
      32,
      19,
      0,
      10,
      24
    ],
    [
      62,
      49,
      41,
      27,
      10,
      0,
      16
    ],
    [
      78,
      65,
      57,
      43,
      24,
      16,
      0
    ]
  ]
},
{
  "id": "A301",
  "routeNo": "এ-৩০১",
  "nameBn": "জাপান গার্ডেন সিটি → টঙ্গী",
  "nameEn": "Japan Garden City → Tongi",
  "totalKm": 29.5,
  "stops": [
    {
      "id": 0,
      "nameEn": "Japan Garden City",
      "nameBn": "জাপান গার্ডেন সিটি",
      "aliases": [
        "japan garden city",
        "জাপান গার্ডেন সিটি",
        "japan garden"
      ]
    },
    {
      "id": 1,
      "nameEn": "Shyamoli Ring Road",
      "nameBn": "শ্যামলী রিং রোড",
      "aliases": [
        "shyamoli ring road",
        "শ্যামলী রিং রোড",
        "শ্যামলী"
      ]
    },
    {
      "id": 2,
      "nameEn": "Agargaon",
      "nameBn": "আগারগাঁও",
      "aliases": [
        "agargaon",
        "আগারগাঁও"
      ]
    },
    {
      "id": 3,
      "nameEn": "Rokeya Sarani",
      "nameBn": "রোকেয়া সরণী",
      "aliases": [
        "rokeya sarani",
        "রোকেয়া সরণী",
        "রোকেয়া সরনি"
      ]
    },
    {
      "id": 4,
      "nameEn": "Mirpur-10",
      "nameBn": "মিরপুর-১০",
      "aliases": [
        "mirpur-10",
        "মিরপুর-১০"
      ]
    },
    {
      "id": 5,
      "nameEn": "Purobi",
      "nameBn": "পূরবী",
      "aliases": [
        "purobi",
        "পূরবী",
        "পুরবী"
      ]
    },
    {
      "id": 6,
      "nameEn": "ECB Chattar",
      "nameBn": "ইসিবি চত্বর",
      "aliases": [
        "ecb chattar",
        "ইসিবি চত্বর",
        "ecb"
      ]
    },
    {
      "id": 7,
      "nameEn": "Airport",
      "nameBn": "এয়ারপোর্ট",
      "aliases": [
        "airport",
        "এয়ারপোর্ট",
        "বিমানবন্দর"
      ]
    },
    {
      "id": 8,
      "nameEn": "Abdullahpur",
      "nameBn": "আব্দুল্লাহপুর",
      "aliases": [
        "abdullahpur",
        "আব্দুল্লাহপুর"
      ]
    },
    {
      "id": 9,
      "nameEn": "Tongi",
      "nameBn": "টঙ্গী",
      "aliases": [
        "tongi",
        "টঙ্গী"
      ]
    }
  ],
  "fareMatrix": [
    [
      0,
      10,
      10,
      14,
      19,
      32,
      37,
      55,
      65,
      80
    ],
    [
      10,
      0,
      10,
      10,
      15,
      28,
      33,
      51,
      61,
      76
    ],
    [
      10,
      10,
      0,
      10,
      10,
      22,
      27,
      45,
      55,
      70
    ],
    [
      14,
      10,
      10,
      0,
      10,
      18,
      23,
      41,
      51,
      66
    ],
    [
      19,
      15,
      10,
      10,
      0,
      13,
      18,
      36,
      46,
      60
    ],
    [
      32,
      28,
      22,
      18,
      13,
      0,
      10,
      23,
      33,
      48
    ],
    [
      37,
      33,
      27,
      23,
      18,
      10,
      0,
      18,
      28,
      43
    ],
    [
      55,
      51,
      45,
      41,
      36,
      23,
      18,
      0,
      10,
      25
    ],
    [
      65,
      61,
      55,
      51,
      46,
      33,
      28,
      10,
      0,
      15
    ],
    [
      80,
      76,
      70,
      66,
      60,
      48,
      43,
      25,
      15,
      0
    ]
  ]
},
{
  "id": "A302",
  "routeNo": "এ-৩০২",
  "nameBn": "বনশ্রী (মেরাদিয়া) → সাভার",
  "nameEn": "Banashree (Meradia) → Savar",
  "totalKm": 26.7,
  "stops": [
    {
      "id": 0,
      "nameEn": "Banashree (Meradia)",
      "nameBn": "বনশ্রী (মেরাদিয়া)",
      "aliases": [
        "banashree meradia",
        "বনশ্রী (মেরাদিয়া)",
        "বনশ্রী",
        "মেরাদিয়া"
      ]
    },
    {
      "id": 1,
      "nameEn": "Rampura Bridge",
      "nameBn": "রামপুরা ব্রীজ",
      "aliases": [
        "rampura bridge",
        "রামপুরা ব্রীজ"
      ]
    },
    {
      "id": 2,
      "nameEn": "Gulshan-1",
      "nameBn": "গুলশান-১",
      "aliases": [
        "gulshan-1",
        "গুলশান-১"
      ]
    },
    {
      "id": 3,
      "nameEn": "Mohakhali",
      "nameBn": "মহাখালী",
      "aliases": [
        "mohakhali",
        "মহাখালী"
      ]
    },
    {
      "id": 4,
      "nameEn": "Agargaon",
      "nameBn": "আগারগাঁও",
      "aliases": [
        "agargaon",
        "আগারগাঁও"
      ]
    },
    {
      "id": 5,
      "nameEn": "Shyamoli",
      "nameBn": "শ্যামলী",
      "aliases": [
        "shyamoli",
        "শ্যামলী"
      ]
    },
    {
      "id": 6,
      "nameEn": "Kallyanpur",
      "nameBn": "কল্যাণপুর",
      "aliases": [
        "kallyanpur",
        "কল্যাণপুর"
      ]
    },
    {
      "id": 7,
      "nameEn": "Gabtoli",
      "nameBn": "গাবতলী",
      "aliases": [
        "gabtoli",
        "গাবতলী"
      ]
    },
    {
      "id": 8,
      "nameEn": "Amin Bazar",
      "nameBn": "আমিন বাজার",
      "aliases": [
        "amin bazar",
        "আমিন বাজার"
      ]
    },
    {
      "id": 9,
      "nameEn": "Savar",
      "nameBn": "সাভার",
      "aliases": [
        "savar",
        "সাভার"
      ]
    }
  ],
  "fareMatrix": [
    [
      0,
      10,
      10,
      14,
      25,
      30,
      32,
      36,
      40,
      72
    ],
    [
      10,
      0,
      10,
      12,
      22,
      28,
      29,
      33,
      37,
      69
    ],
    [
      10,
      10,
      0,
      10,
      15,
      21,
      22,
      26,
      30,
      63
    ],
    [
      14,
      12,
      10,
      0,
      11,
      16,
      17,
      21,
      25,
      58
    ],
    [
      25,
      22,
      15,
      11,
      0,
      10,
      10,
      11,
      15,
      47
    ],
    [
      30,
      28,
      21,
      16,
      10,
      0,
      10,
      10,
      10,
      42
    ],
    [
      32,
      29,
      22,
      17,
      10,
      10,
      0,
      10,
      10,
      41
    ],
    [
      36,
      33,
      26,
      21,
      11,
      10,
      10,
      0,
      10,
      36
    ],
    [
      40,
      37,
      30,
      25,
      15,
      10,
      10,
      10,
      0,
      32
    ],
    [
      72,
      69,
      63,
      58,
      47,
      42,
      41,
      36,
      32,
      0
    ]
  ]
},
{
  "id": "A304",
  "routeNo": "এ-৩০৪",
  "nameBn": "বছিলা → ধউর",
  "nameEn": "Bosila → Dhaur",
  "totalKm": 32.2,
  "stops": [
    {
      "id": 0,
      "nameEn": "Bosila",
      "nameBn": "বসিলা",
      "aliases": [
        "bosila",
        "বছিলা",
        "basila",
        "বসিলা"
      ]
    },
    {
      "id": 1,
      "nameEn": "Asad Avenue",
      "nameBn": "আসাদ এভিনিউ",
      "aliases": [
        "asad avenue",
        "আসাদ এভিনিউ"
      ]
    },
    {
      "id": 2,
      "nameEn": "Shyamoli",
      "nameBn": "শ্যামলী",
      "aliases": [
        "shyamoli",
        "শ্যামলী"
      ]
    },
    {
      "id": 3,
      "nameEn": "Kallyanpur",
      "nameBn": "কল্যাণপুর",
      "aliases": [
        "kallyanpur",
        "কল্যাণপুর"
      ]
    },
    {
      "id": 4,
      "nameEn": "Technical",
      "nameBn": "টেকনিক্যাল",
      "aliases": [
        "technical",
        "টেকনিক্যাল"
      ]
    },
    {
      "id": 5,
      "nameEn": "Mirpur-1",
      "nameBn": "মিরপুর-১",
      "aliases": [
        "mirpur-1",
        "মিরপুর-১"
      ]
    },
    {
      "id": 6,
      "nameEn": "Mirpur-2",
      "nameBn": "মিরপুর-২",
      "aliases": [
        "mirpur-2",
        "মিরপুর-২"
      ]
    },
    {
      "id": 7,
      "nameEn": "Mirpur-10",
      "nameBn": "মিরপুর-১০",
      "aliases": [
        "mirpur-10",
        "মিরপুর-১০"
      ]
    },
    {
      "id": 8,
      "nameEn": "Mirpur-11",
      "nameBn": "মিরপুর-১১",
      "aliases": [
        "mirpur-11",
        "মিরপুর-১১"
      ]
    },
    {
      "id": 9,
      "nameEn": "Purobi",
      "nameBn": "পূরবী",
      "aliases": [
        "purobi",
        "পূরবী",
        "পুরবী"
      ]
    },
    {
      "id": 10,
      "nameEn": "Kalshi",
      "nameBn": "কালশী",
      "aliases": [
        "kalshi",
        "কালশী"
      ]
    },
    {
      "id": 11,
      "nameEn": "Shewra Bazar",
      "nameBn": "শেওড়া বাজার",
      "aliases": [
        "shewra bazar",
        "শেওড়া বাজার"
      ]
    },
    {
      "id": 12,
      "nameEn": "Airport",
      "nameBn": "এয়ারপোর্ট",
      "aliases": [
        "airport",
        "এয়ারপোর্ট",
        "বিমানবন্দর"
      ]
    },
    {
      "id": 13,
      "nameEn": "Jashimuddin",
      "nameBn": "জসীমউদ্দীন",
      "aliases": [
        "jashimuddin",
        "জসীমউদ্দীন"
      ]
    },
    {
      "id": 14,
      "nameEn": "Abdullahpur",
      "nameBn": "আব্দুল্লাহপুর",
      "aliases": [
        "abdullahpur",
        "আব্দুল্লাহপুর"
      ]
    },
    {
      "id": 15,
      "nameEn": "Kamarpara",
      "nameBn": "কামারপাড়া",
      "aliases": [
        "kamarpara",
        "কামারপাড়া"
      ]
    },
    {
      "id": 16,
      "nameEn": "Dhaur",
      "nameBn": "ধউর",
      "aliases": [
        "dhaur",
        "ধউর"
      ]
    }
  ],
  "fareMatrix": [
    [
      0,
      10,
      13,
      14,
      16,
      23,
      26,
      28,
      31,
      32,
      41,
      52,
      63,
      66,
      73,
      79,
      87
    ],
    [
      10,
      0,
      10,
      10,
      10,
      15,
      18,
      20,
      22,
      24,
      32,
      44,
      55,
      58,
      65,
      71,
      79
    ],
    [
      13,
      10,
      0,
      10,
      10,
      10,
      14,
      15,
      18,
      19,
      28,
      39,
      50,
      53,
      60,
      66,
      74
    ],
    [
      14,
      10,
      10,
      0,
      10,
      10,
      13,
      14,
      17,
      18,
      27,
      39,
      49,
      53,
      59,
      65,
      74
    ],
    [
      16,
      10,
      10,
      10,
      0,
      10,
      10,
      11,
      14,
      16,
      24,
      36,
      47,
      50,
      57,
      63,
      71
    ],
    [
      23,
      15,
      10,
      10,
      10,
      0,
      10,
      10,
      10,
      10,
      18,
      29,
      40,
      43,
      50,
      56,
      64
    ],
    [
      26,
      18,
      14,
      13,
      10,
      10,
      0,
      10,
      10,
      10,
      14,
      26,
      37,
      40,
      47,
      52,
      60
    ],
    [
      28,
      20,
      15,
      14,
      11,
      10,
      10,
      0,
      10,
      10,
      13,
      25,
      35,
      39,
      45,
      51,
      59
    ],
    [
      31,
      22,
      18,
      17,
      14,
      10,
      10,
      10,
      0,
      10,
      10,
      22,
      33,
      36,
      43,
      48,
      56
    ],
    [
      32,
      24,
      19,
      18,
      16,
      10,
      10,
      10,
      10,
      0,
      10,
      21,
      31,
      35,
      41,
      47,
      55
    ],
    [
      41,
      32,
      28,
      27,
      24,
      18,
      14,
      13,
      10,
      10,
      0,
      12,
      23,
      26,
      33,
      38,
      46
    ],
    [
      52,
      44,
      39,
      39,
      36,
      29,
      26,
      25,
      22,
      21,
      12,
      0,
      11,
      14,
      21,
      26,
      35
    ],
    [
      63,
      55,
      50,
      49,
      47,
      40,
      37,
      35,
      33,
      31,
      23,
      11,
      0,
      10,
      10,
      16,
      24
    ],
    [
      66,
      58,
      53,
      53,
      50,
      43,
      40,
      39,
      36,
      35,
      26,
      14,
      10,
      0,
      10,
      12,
      21
    ],
    [
      73,
      65,
      60,
      59,
      57,
      50,
      47,
      45,
      43,
      41,
      33,
      21,
      10,
      10,
      0,
      10,
      14
    ],
    [
      79,
      71,
      66,
      65,
      63,
      56,
      52,
      51,
      48,
      47,
      38,
      26,
      16,
      12,
      10,
      0,
      10
    ],
    [
      87,
      79,
      74,
      74,
      71,
      64,
      60,
      59,
      56,
      55,
      46,
      35,
      24,
      21,
      14,
      10,
      0
    ]
  ]
},
{
  "id": "A307",
  "routeNo": "এ-৩০৭",
  "nameBn": "মিরপুর-১৪ → ইপিজেড",
  "nameEn": "Mirpur-14 → EPZ",
  "totalKm": 32.7,
  "stops": [
    {
      "id": 0,
      "nameEn": "Mirpur-14",
      "nameBn": "মিরপুর-১৪",
      "aliases": [
        "mirpur-14",
        "মিরপুর-১৪"
      ]
    },
    {
      "id": 1,
      "nameEn": "Mirpur-10",
      "nameBn": "মিরপুর-১০",
      "aliases": [
        "mirpur-10",
        "মিরপুর-১০"
      ]
    },
    {
      "id": 2,
      "nameEn": "Mirpur-2",
      "nameBn": "মিরপুর-২",
      "aliases": [
        "mirpur-2",
        "মিরপুর-২"
      ]
    },
    {
      "id": 3,
      "nameEn": "Mirpur-1",
      "nameBn": "মিরপুর-১",
      "aliases": [
        "mirpur-1",
        "মিরপুর-১"
      ]
    },
    {
      "id": 4,
      "nameEn": "Gabtoli",
      "nameBn": "গাবতলী",
      "aliases": [
        "gabtoli",
        "গাবতলী"
      ]
    },
    {
      "id": 5,
      "nameEn": "Savar",
      "nameBn": "সাভার",
      "aliases": [
        "savar",
        "সাভার"
      ]
    },
    {
      "id": 6,
      "nameEn": "Nabinagar",
      "nameBn": "নবীনগর",
      "aliases": [
        "nabinagar",
        "নবীনগর"
      ]
    },
    {
      "id": 7,
      "nameEn": "EPZ",
      "nameBn": "ইপিজেড",
      "aliases": [
        "epz",
        "ইপিজেড"
      ]
    }
  ],
  "fareMatrix": [
    [
      0,
      10,
      10,
      12,
      18,
      54,
      76,
      88
    ],
    [
      10,
      0,
      10,
      10,
      12,
      49,
      70,
      83
    ],
    [
      10,
      10,
      0,
      10,
      10,
      45,
      66,
      79
    ],
    [
      12,
      10,
      10,
      0,
      10,
      42,
      63,
      76
    ],
    [
      18,
      12,
      10,
      10,
      0,
      36,
      58,
      70
    ],
    [
      54,
      49,
      45,
      42,
      36,
      0,
      22,
      34
    ],
    [
      76,
      70,
      66,
      63,
      58,
      22,
      0,
      12
    ],
    [
      88,
      83,
      79,
      76,
      70,
      34,
      12,
      0
    ]
  ]
},
{
  "id": "A309",
  "routeNo": "এ-৩০৯",
  "nameBn": "সদরঘাট → ইপিজেড",
  "nameEn": "Sadarghat → EPZ",
  "totalKm": 41.7,
  "stops": [
    {
      "id": 0,
      "nameEn": "Sadarghat",
      "nameBn": "সদরঘাট",
      "aliases": [
        "sadarghat",
        "সদরঘাট",
        "সদর ঘাট",
        "sadar ghat"
      ]
    },
    {
      "id": 1,
      "nameEn": "Gulistan",
      "nameBn": "গুলিস্তান",
      "aliases": [
        "gulistan",
        "গুলিস্তান"
      ]
    },
    {
      "id": 2,
      "nameEn": "Paltan",
      "nameBn": "পল্টন",
      "aliases": [
        "paltan",
        "পল্টন"
      ]
    },
    {
      "id": 3,
      "nameEn": "Shahbagh",
      "nameBn": "শাহবাগ",
      "aliases": [
        "shahbagh",
        "শাহবাগ"
      ]
    },
    {
      "id": 4,
      "nameEn": "Science Lab",
      "nameBn": "সাইন্সল্যাব",
      "aliases": [
        "science lab",
        "সাইন্সল্যাব"
      ]
    },
    {
      "id": 5,
      "nameEn": "Asad Gate",
      "nameBn": "আসাদগেট",
      "aliases": [
        "asad gate",
        "আসাদগেট"
      ]
    },
    {
      "id": 6,
      "nameEn": "Gabtoli",
      "nameBn": "গাবতলী",
      "aliases": [
        "gabtoli",
        "গাবতলী"
      ]
    },
    {
      "id": 7,
      "nameEn": "Savar",
      "nameBn": "সাভার",
      "aliases": [
        "savar",
        "সাভার"
      ]
    },
    {
      "id": 8,
      "nameEn": "Nabinagar",
      "nameBn": "নবীনগর",
      "aliases": [
        "nabinagar",
        "নবীনগর"
      ]
    },
    {
      "id": 9,
      "nameEn": "EPZ",
      "nameBn": "ইপিজেড",
      "aliases": [
        "epz",
        "ইপিজেড"
      ]
    }
  ],
  "fareMatrix": [
    [
      0,
      10,
      10,
      16,
      19,
      26,
      41,
      77,
      100,
      113
    ],
    [
      10,
      0,
      10,
      10,
      12,
      19,
      34,
      70,
      93,
      106
    ],
    [
      10,
      10,
      0,
      10,
      10,
      16,
      31,
      68,
      90,
      103
    ],
    [
      16,
      10,
      10,
      0,
      10,
      10,
      25,
      61,
      84,
      97
    ],
    [
      19,
      12,
      10,
      10,
      0,
      10,
      21,
      58,
      81,
      93
    ],
    [
      26,
      19,
      16,
      10,
      10,
      0,
      15,
      51,
      74,
      87
    ],
    [
      41,
      34,
      31,
      25,
      21,
      15,
      0,
      36,
      59,
      72
    ],
    [
      77,
      70,
      68,
      61,
      58,
      51,
      36,
      0,
      23,
      36
    ],
    [
      100,
      93,
      90,
      84,
      81,
      74,
      59,
      23,
      0,
      13
    ],
    [
      113,
      106,
      103,
      97,
      93,
      87,
      72,
      36,
      13,
      0
    ]
  ]
},
{
  "id": "A310",
  "routeNo": "এ-৩১০",
  "nameBn": "মিরপুর রূপনগর → সায়েদাবাদ",
  "nameEn": "Mirpur Rupnagar → Sayedabad",
  "totalKm": 21.6,
  "stops": [
    {
      "id": 0,
      "nameEn": "Mirpur Rupnagar",
      "nameBn": "মিরপুর রূপনগর",
      "aliases": [
        "mirpur rupnagar",
        "মিরপুর রূপনগর",
        "রূপনগর"
      ]
    },
    {
      "id": 1,
      "nameEn": "Mirpur-12",
      "nameBn": "মিরপুর-১২",
      "aliases": [
        "mirpur-12",
        "মিরপুর-১২"
      ]
    },
    {
      "id": 2,
      "nameEn": "Mirpur-11",
      "nameBn": "মিরপুর-১১",
      "aliases": [
        "mirpur-11",
        "মিরপুর-১১"
      ]
    },
    {
      "id": 3,
      "nameEn": "Mirpur-10",
      "nameBn": "মিরপুর-১০",
      "aliases": [
        "mirpur-10",
        "মিরপুর-১০"
      ]
    },
    {
      "id": 4,
      "nameEn": "Kazipara",
      "nameBn": "কাজীপাড়া",
      "aliases": [
        "kazipara",
        "কাজীপাড়া"
      ]
    },
    {
      "id": 5,
      "nameEn": "Shewrapara",
      "nameBn": "শেওড়াপাড়া",
      "aliases": [
        "shewrapara",
        "শেওড়াপাড়া"
      ]
    },
    {
      "id": 6,
      "nameEn": "Farmgate",
      "nameBn": "ফার্মগেট",
      "aliases": [
        "farmgate",
        "ফার্মগেট"
      ]
    },
    {
      "id": 7,
      "nameEn": "Paltan",
      "nameBn": "পল্টন",
      "aliases": [
        "paltan",
        "পল্টন"
      ]
    },
    {
      "id": 8,
      "nameEn": "Dainik Bangla",
      "nameBn": "দৈনিক বাংলা",
      "aliases": [
        "dainik bangla",
        "দৈনিক বাংলা"
      ]
    },
    {
      "id": 9,
      "nameEn": "Shapla Chattar",
      "nameBn": "শাপলা চত্বর",
      "aliases": [
        "shapla chattar",
        "শাপলা চত্বর"
      ]
    },
    {
      "id": 10,
      "nameEn": "Arambagh",
      "nameBn": "আরামবাগ",
      "aliases": [
        "arambagh",
        "আরামবাগ"
      ]
    },
    {
      "id": 11,
      "nameEn": "Kamalapur",
      "nameBn": "কমলাপুর",
      "aliases": [
        "kamalapur",
        "কমলাপুর"
      ]
    },
    {
      "id": 12,
      "nameEn": "Sayedabad",
      "nameBn": "সায়েদাবাদ",
      "aliases": [
        "sayedabad",
        "সায়েদাবাদ"
      ]
    }
  ],
  "fareMatrix": [
    [
      0,
      10,
      10,
      10,
      13,
      15,
      28,
      40,
      42,
      44,
      46,
      48,
      58
    ],
    [
      10,
      0,
      10,
      10,
      10,
      12,
      24,
      36,
      39,
      41,
      43,
      44,
      55
    ],
    [
      10,
      10,
      0,
      10,
      10,
      10,
      21,
      33,
      35,
      37,
      39,
      41,
      51
    ],
    [
      10,
      10,
      10,
      0,
      10,
      10,
      18,
      30,
      32,
      35,
      37,
      38,
      49
    ],
    [
      13,
      10,
      10,
      10,
      0,
      10,
      14,
      26,
      29,
      31,
      33,
      34,
      45
    ],
    [
      15,
      12,
      10,
      10,
      10,
      0,
      13,
      25,
      27,
      29,
      31,
      33,
      43
    ],
    [
      28,
      24,
      21,
      18,
      14,
      13,
      0,
      12,
      14,
      17,
      19,
      20,
      31
    ],
    [
      40,
      36,
      33,
      30,
      26,
      25,
      12,
      0,
      10,
      10,
      10,
      10,
      19
    ],
    [
      42,
      39,
      35,
      32,
      29,
      27,
      14,
      10,
      0,
      10,
      10,
      10,
      16
    ],
    [
      44,
      41,
      37,
      35,
      31,
      29,
      17,
      10,
      10,
      0,
      10,
      10,
      14
    ],
    [
      46,
      43,
      39,
      37,
      33,
      31,
      19,
      10,
      10,
      10,
      0,
      10,
      12
    ],
    [
      48,
      44,
      41,
      38,
      34,
      33,
      20,
      10,
      10,
      10,
      10,
      0,
      11
    ],
    [
      58,
      55,
      51,
      49,
      45,
      43,
      31,
      19,
      16,
      14,
      12,
      11,
      0
    ]
  ]
},
{
  "id": "A314",
  "routeNo": "এ-৩১৪",
  "nameBn": "হেমায়েতপুর → ডেমরা স্টাফ কোয়ার্টার",
  "nameEn": "Hemayetpur → Demra Staff Quarter",
  "totalKm": 38.8,
  "stops": [
    {
      "id": 0,
      "nameEn": "Hemayetpur",
      "nameBn": "হেমায়েতপুর",
      "aliases": [
        "hemayetpur",
        "হেমায়েতপুর"
      ]
    },
    {
      "id": 1,
      "nameEn": "Gabtoli",
      "nameBn": "গাবতলী",
      "aliases": [
        "gabtoli",
        "গাবতলী"
      ]
    },
    {
      "id": 2,
      "nameEn": "Technical",
      "nameBn": "টেকনিক্যাল",
      "aliases": [
        "technical",
        "টেকনিক্যাল"
      ]
    },
    {
      "id": 3,
      "nameEn": "Mirpur-1",
      "nameBn": "মিরপুর-১",
      "aliases": [
        "mirpur-1",
        "মিরপুর-১"
      ]
    },
    {
      "id": 4,
      "nameEn": "Mirpur-2",
      "nameBn": "মিরপুর-২",
      "aliases": [
        "mirpur-2",
        "মিরপুর-২"
      ]
    },
    {
      "id": 5,
      "nameEn": "Mirpur-6",
      "nameBn": "মিরপুর-৬",
      "aliases": [
        "mirpur-6",
        "মিরপুর-৬"
      ]
    },
    {
      "id": 6,
      "nameEn": "Mirpur-11",
      "nameBn": "মিরপুর-১১",
      "aliases": [
        "mirpur-11",
        "মিরপুর-১১"
      ]
    },
    {
      "id": 7,
      "nameEn": "Kalshi Mor",
      "nameBn": "কালশীমোড়",
      "aliases": [
        "kalshi mor",
        "কালশীমোড়",
        "কালশী মোড়"
      ]
    },
    {
      "id": 8,
      "nameEn": "ECB Chattar",
      "nameBn": "ইসিবি চত্বর",
      "aliases": [
        "ecb chattar",
        "ইসিবি চত্বর"
      ]
    },
    {
      "id": 9,
      "nameEn": "Kuril Bishwaroad",
      "nameBn": "কুড়িল বিশ্বরোড",
      "aliases": [
        "kuril bishwaroad",
        "কুড়িল বিশ্বরোড"
      ]
    },
    {
      "id": 10,
      "nameEn": "Rampura",
      "nameBn": "রামপুরা",
      "aliases": [
        "rampura",
        "রামপুরা"
      ]
    },
    {
      "id": 11,
      "nameEn": "Banashree",
      "nameBn": "বনশ্রী",
      "aliases": [
        "banashree",
        "বনশ্রী"
      ]
    },
    {
      "id": 12,
      "nameEn": "Meradia Bazar",
      "nameBn": "মেরাদিয়া বাজার",
      "aliases": [
        "meradia bazar",
        "মেরাদিয়া বাজার"
      ]
    },
    {
      "id": 13,
      "nameEn": "Staff Quarter",
      "nameBn": "স্টাফ কোয়ার্টার",
      "aliases": [
        "staff quarter",
        "স্টাফ কোয়ার্টার",
        "demra staff quarter",
        "ডেমরা স্টাফ কোয়ার্টার"
      ]
    }
  ],
  "fareMatrix": [
    [
      0,
      19,
      23,
      28,
      32,
      35,
      39,
      49,
      54,
      62,
      80,
      83,
      89,
      105
    ],
    [
      19,
      0,
      10,
      10,
      12,
      16,
      20,
      30,
      35,
      42,
      61,
      64,
      69,
      85
    ],
    [
      23,
      10,
      0,
      10,
      10,
      12,
      16,
      26,
      31,
      38,
      57,
      60,
      65,
      81
    ],
    [
      28,
      10,
      10,
      0,
      10,
      10,
      11,
      21,
      26,
      33,
      52,
      55,
      60,
      76
    ],
    [
      32,
      12,
      10,
      10,
      0,
      10,
      10,
      18,
      22,
      30,
      49,
      51,
      57,
      73
    ],
    [
      35,
      16,
      12,
      10,
      10,
      0,
      10,
      14,
      19,
      26,
      45,
      48,
      53,
      69
    ],
    [
      39,
      20,
      16,
      11,
      10,
      10,
      0,
      10,
      15,
      22,
      41,
      44,
      49,
      65
    ],
    [
      49,
      30,
      26,
      21,
      18,
      14,
      10,
      0,
      10,
      12,
      31,
      34,
      39,
      55
    ],
    [
      54,
      35,
      31,
      26,
      22,
      19,
      15,
      10,
      0,
      10,
      26,
      29,
      34,
      50
    ],
    [
      62,
      42,
      38,
      33,
      30,
      26,
      22,
      12,
      10,
      0,
      19,
      22,
      27,
      43
    ],
    [
      80,
      61,
      57,
      52,
      49,
      45,
      41,
      31,
      26,
      19,
      0,
      10,
      10,
      24
    ],
    [
      83,
      64,
      60,
      55,
      51,
      48,
      44,
      34,
      29,
      22,
      10,
      0,
      10,
      22
    ],
    [
      89,
      69,
      65,
      60,
      57,
      53,
      49,
      39,
      34,
      27,
      10,
      10,
      0,
      16
    ],
    [
      105,
      85,
      81,
      76,
      73,
      69,
      65,
      55,
      50,
      43,
      24,
      22,
      16,
      0
    ]
  ]
},
{
  "id": "A317",
  "routeNo": "এ-৩১৭",
  "nameBn": "দিয়াবাড়ী → পোস্তগোলা",
  "nameEn": "Diyabari → Postogola",
  "totalKm": 27.3,
  "stops": [
    {
      "id": 0,
      "nameEn": "Diyabari Chowrasta",
      "nameBn": "দিয়াবাড়ী চৌরাস্তা",
      "aliases": [
        "diyabari chowrasta",
        "দিয়াবাড়ী চৌরাস্তা",
        "diyabari",
        "দিয়াবাড়ী"
      ]
    },
    {
      "id": 1,
      "nameEn": "Mascot Plaza",
      "nameBn": "মাস্কট প্লাজা",
      "aliases": [
        "mascot plaza",
        "মাস্কট প্লাজা"
      ]
    },
    {
      "id": 2,
      "nameEn": "Airport",
      "nameBn": "এয়ারপোর্ট",
      "aliases": [
        "airport",
        "এয়ারপোর্ট",
        "বিমানবন্দর"
      ]
    },
    {
      "id": 3,
      "nameEn": "Kuril Flyover",
      "nameBn": "কুড়িল ফ্লাইওভার",
      "aliases": [
        "kuril flyover",
        "কুড়িল ফ্লাইওভার"
      ]
    },
    {
      "id": 4,
      "nameEn": "Notun Bazar",
      "nameBn": "নতুন বাজার",
      "aliases": [
        "notun bazar",
        "নতুন বাজার"
      ]
    },
    {
      "id": 5,
      "nameEn": "Badda",
      "nameBn": "বাড্ডা",
      "aliases": [
        "badda",
        "বাড্ডা"
      ]
    },
    {
      "id": 6,
      "nameEn": "Rampura",
      "nameBn": "রামপুরা",
      "aliases": [
        "rampura",
        "রামপুরা"
      ]
    },
    {
      "id": 7,
      "nameEn": "Khilgaon Flyover",
      "nameBn": "খিলগাঁও ফ্লাইওভার",
      "aliases": [
        "khilgaon flyover",
        "খিলগাঁও ফ্লাইওভার",
        "খিলগাঁও"
      ]
    },
    {
      "id": 8,
      "nameEn": "TT Para",
      "nameBn": "টিটিপাড়া",
      "aliases": [
        "tt para",
        "টিটিপাড়া"
      ]
    },
    {
      "id": 9,
      "nameEn": "Sayedabad",
      "nameBn": "সায়েদাবাদ",
      "aliases": [
        "sayedabad",
        "সায়েদাবাদ"
      ]
    },
    {
      "id": 10,
      "nameEn": "Jatrabari",
      "nameBn": "যাত্রাবাড়ী",
      "aliases": [
        "jatrabari",
        "যাত্রাবাড়ী"
      ]
    },
    {
      "id": 11,
      "nameEn": "Postogola",
      "nameBn": "পোস্তগোলা",
      "aliases": [
        "postogola",
        "পোস্তগোলা"
      ]
    }
  ],
  "fareMatrix": [
    [
      0,
      10,
      12,
      23,
      33,
      39,
      45,
      56,
      60,
      63,
      67,
      74
    ],
    [
      10,
      0,
      10,
      16,
      26,
      33,
      38,
      49,
      54,
      56,
      60,
      67
    ],
    [
      12,
      10,
      0,
      11,
      21,
      27,
      33,
      44,
      48,
      51,
      55,
      62
    ],
    [
      23,
      16,
      11,
      0,
      10,
      16,
      22,
      33,
      38,
      40,
      44,
      51
    ],
    [
      33,
      26,
      21,
      10,
      0,
      10,
      12,
      23,
      28,
      31,
      34,
      41
    ],
    [
      39,
      33,
      27,
      16,
      10,
      0,
      10,
      16,
      21,
      24,
      28,
      34
    ],
    [
      45,
      38,
      33,
      22,
      12,
      10,
      0,
      11,
      15,
      18,
      22,
      29
    ],
    [
      56,
      49,
      44,
      33,
      23,
      16,
      11,
      0,
      10,
      10,
      11,
      18
    ],
    [
      60,
      54,
      48,
      38,
      28,
      21,
      15,
      10,
      0,
      10,
      10,
      13
    ],
    [
      63,
      56,
      51,
      40,
      31,
      24,
      18,
      10,
      10,
      0,
      10,
      11
    ],
    [
      67,
      60,
      55,
      44,
      34,
      28,
      22,
      11,
      10,
      10,
      0,
      10
    ],
    [
      74,
      67,
      62,
      51,
      41,
      34,
      29,
      18,
      13,
      11,
      10,
      0
    ]
  ]
},
{
  "id": "A319",
  "routeNo": "এ-৩১৯",
  "nameBn": "মিরপুর-১২ → কাঁচপুর ব্রীজ",
  "nameEn": "Mirpur-12 → Kanchpur Bridge",
  "totalKm": 30.7,
  "stops": [
    {
      "id": 0,
      "nameEn": "Mirpur-12",
      "nameBn": "মিরপুর-১২",
      "aliases": [
        "mirpur-12",
        "মিরপুর-১২"
      ]
    },
    {
      "id": 1,
      "nameEn": "Kalapani",
      "nameBn": "কালাপানি",
      "aliases": [
        "kalapani",
        "কালাপানি"
      ]
    },
    {
      "id": 2,
      "nameEn": "Bangabandhu College",
      "nameBn": "বঙ্গবন্ধু কলেজ",
      "aliases": [
        "bangabandhu college",
        "বঙ্গবন্ধু কলেজ",
        "বঙ্গবন্ধু"
      ]
    },
    {
      "id": 3,
      "nameEn": "Mirpur-11",
      "nameBn": "মিরপুর-১১",
      "aliases": [
        "mirpur-11",
        "মিরপুর-১১"
      ]
    },
    {
      "id": 4,
      "nameEn": "Mirpur-10",
      "nameBn": "মিরপুর-১০",
      "aliases": [
        "mirpur-10",
        "মিরপুর-১০"
      ]
    },
    {
      "id": 5,
      "nameEn": "Kazipara",
      "nameBn": "কাজীপাড়া",
      "aliases": [
        "kazipara",
        "কাজীপাড়া"
      ]
    },
    {
      "id": 6,
      "nameEn": "Farmgate",
      "nameBn": "ফার্মগেট",
      "aliases": [
        "farmgate",
        "ফার্মগেট"
      ]
    },
    {
      "id": 7,
      "nameEn": "Gulistan",
      "nameBn": "গুলিস্তান",
      "aliases": [
        "gulistan",
        "গুলিস্তান"
      ]
    },
    {
      "id": 8,
      "nameEn": "Sayedabad",
      "nameBn": "সায়েদাবাদ",
      "aliases": [
        "sayedabad",
        "সায়েদাবাদ"
      ]
    },
    {
      "id": 9,
      "nameEn": "Jatrabari",
      "nameBn": "যাত্রাবাড়ী",
      "aliases": [
        "jatrabari",
        "যাত্রাবাড়ী"
      ]
    },
    {
      "id": 10,
      "nameEn": "Kanchpur Bridge",
      "nameBn": "কাঁচপুর ব্রীজ",
      "aliases": [
        "kanchpur bridge",
        "কাঁচপুর ব্রীজ",
        "কাঁচপুর",
        "kachpur bridge",
        "kachpur",
        "kachpurbridge",
        "কাঁচপুরব্রীজ",
        "কাচপুর ব্রিজ",
        "কাঁচপুর ব্রিজ",
        "কাচপুর",
        "kanchpur"
      ]
    }
  ],
  "fareMatrix": [
    [
      0,
      10,
      10,
      12,
      15,
      19,
      33,
      47,
      55,
      58,
      83
    ],
    [
      10,
      0,
      10,
      10,
      12,
      16,
      31,
      44,
      52,
      55,
      80
    ],
    [
      10,
      10,
      0,
      10,
      11,
      15,
      29,
      43,
      51,
      53,
      79
    ],
    [
      12,
      10,
      10,
      0,
      10,
      10,
      21,
      35,
      43,
      45,
      70
    ],
    [
      15,
      12,
      11,
      10,
      0,
      10,
      18,
      32,
      40,
      42,
      68
    ],
    [
      19,
      16,
      15,
      10,
      10,
      0,
      14,
      28,
      36,
      38,
      64
    ],
    [
      33,
      31,
      29,
      21,
      18,
      14,
      0,
      14,
      22,
      24,
      49
    ],
    [
      47,
      44,
      43,
      35,
      32,
      28,
      14,
      0,
      10,
      11,
      36
    ],
    [
      55,
      52,
      51,
      43,
      40,
      36,
      22,
      10,
      0,
      10,
      28
    ],
    [
      58,
      55,
      53,
      45,
      42,
      38,
      24,
      11,
      10,
      0,
      25
    ],
    [
      83,
      80,
      79,
      70,
      68,
      64,
      49,
      36,
      28,
      25,
      0
    ]
  ]
},
{
  "id": "A320",
  "routeNo": "এ-৩২০",
  "nameBn": "চিড়িয়াখানা → যাত্রাবাড়ী",
  "nameEn": "Chiriakhana → Jatrabari",
  "totalKm": 27,
  "stops": [
    {
      "id": 0,
      "nameEn": "Chiriakhana",
      "nameBn": "চিড়িয়াখানা",
      "aliases": [
        "chiriakhana",
        "চিড়িয়াখানা"
      ]
    },
    {
      "id": 1,
      "nameEn": "Sony Cinema Hall",
      "nameBn": "সনি সিনেমা হল",
      "aliases": [
        "sony cinema hall",
        "সনি সিনেমা হল",
        "sony cinema"
      ]
    },
    {
      "id": 2,
      "nameEn": "Mirpur-2",
      "nameBn": "মিরপুর-২",
      "aliases": [
        "mirpur-2",
        "মিরপুর-২"
      ]
    },
    {
      "id": 3,
      "nameEn": "Mirpur-10",
      "nameBn": "মিরপুর-১০",
      "aliases": [
        "mirpur-10",
        "মিরপুর-১০"
      ]
    },
    {
      "id": 4,
      "nameEn": "Mirpur-11",
      "nameBn": "মিরপুর-১১",
      "aliases": [
        "mirpur-11",
        "মিরপুর-১১"
      ]
    },
    {
      "id": 5,
      "nameEn": "Purobi",
      "nameBn": "পূরবী",
      "aliases": [
        "purobi",
        "পূরবী",
        "পুরবী"
      ]
    },
    {
      "id": 6,
      "nameEn": "Matikata",
      "nameBn": "মাটিকাটা",
      "aliases": [
        "matikata",
        "মাটিকাটা"
      ]
    },
    {
      "id": 7,
      "nameEn": "Cantt. Station",
      "nameBn": "ক্যান্ট. স্টেশন",
      "aliases": [
        "cantt station",
        "ক্যান্ট. স্টেশন",
        "cantonment station",
        "ক্যান্টনমেন্ট স্টেশন"
      ]
    },
    {
      "id": 8,
      "nameEn": "Kuril Bishwaroad",
      "nameBn": "কুড়িল বিশ্বরোড",
      "aliases": [
        "kuril bishwaroad",
        "কুড়িল বিশ্বরোড"
      ]
    },
    {
      "id": 9,
      "nameEn": "Notun Bazar",
      "nameBn": "নতুন বাজার",
      "aliases": [
        "notun bazar",
        "নতুন বাজার"
      ]
    },
    {
      "id": 10,
      "nameEn": "Badda",
      "nameBn": "বাড্ডা",
      "aliases": [
        "badda",
        "বাড্ডা"
      ]
    },
    {
      "id": 11,
      "nameEn": "Rampura",
      "nameBn": "রামপুরা",
      "aliases": [
        "rampura",
        "রামপুরা"
      ]
    },
    {
      "id": 12,
      "nameEn": "Khilgaon Flyover",
      "nameBn": "খিলগাঁও ফ্লাইওভার",
      "aliases": [
        "khilgaon flyover",
        "খিলগাঁও ফ্লাইওভার",
        "খিলগাঁও"
      ]
    },
    {
      "id": 13,
      "nameEn": "Mugda",
      "nameBn": "মুগদা",
      "aliases": [
        "mugda",
        "মুগদা"
      ]
    },
    {
      "id": 14,
      "nameEn": "TT Para",
      "nameBn": "টিটিপাড়া",
      "aliases": [
        "tt para",
        "টিটিপাড়া"
      ]
    },
    {
      "id": 15,
      "nameEn": "Jatrabari",
      "nameBn": "যাত্রাবাড়ী",
      "aliases": [
        "jatrabari",
        "যাত্রাবাড়ী"
      ]
    }
  ],
  "fareMatrix": [
    [
      0,
      10,
      10,
      10,
      11,
      13,
      24,
      28,
      36,
      44,
      47,
      52,
      57,
      65,
      68,
      73
    ],
    [
      10,
      0,
      10,
      10,
      10,
      10,
      19,
      24,
      32,
      39,
      42,
      48,
      52,
      60,
      63,
      68
    ],
    [
      10,
      10,
      0,
      10,
      10,
      10,
      17,
      21,
      29,
      37,
      40,
      45,
      50,
      58,
      60,
      66
    ],
    [
      10,
      10,
      10,
      0,
      10,
      10,
      15,
      20,
      28,
      35,
      38,
      43,
      48,
      56,
      59,
      64
    ],
    [
      11,
      10,
      10,
      10,
      0,
      10,
      12,
      17,
      25,
      32,
      35,
      41,
      45,
      53,
      56,
      62
    ],
    [
      13,
      10,
      10,
      10,
      10,
      0,
      11,
      15,
      23,
      31,
      34,
      39,
      44,
      52,
      55,
      60
    ],
    [
      24,
      19,
      17,
      15,
      12,
      11,
      0,
      10,
      13,
      20,
      23,
      28,
      33,
      41,
      44,
      49
    ],
    [
      28,
      24,
      21,
      20,
      17,
      15,
      10,
      0,
      10,
      15,
      18,
      24,
      28,
      36,
      39,
      45
    ],
    [
      36,
      32,
      29,
      28,
      25,
      23,
      13,
      10,
      0,
      10,
      10,
      16,
      20,
      28,
      31,
      36
    ],
    [
      44,
      39,
      37,
      35,
      32,
      31,
      20,
      15,
      10,
      0,
      10,
      10,
      13,
      21,
      24,
      29
    ],
    [
      47,
      42,
      40,
      38,
      35,
      34,
      23,
      18,
      10,
      10,
      0,
      10,
      10,
      18,
      21,
      26
    ],
    [
      52,
      48,
      45,
      43,
      41,
      39,
      28,
      24,
      16,
      10,
      10,
      0,
      10,
      13,
      15,
      21
    ],
    [
      57,
      52,
      50,
      48,
      45,
      44,
      33,
      28,
      20,
      13,
      10,
      10,
      0,
      10,
      11,
      16
    ],
    [
      65,
      60,
      58,
      56,
      53,
      52,
      41,
      36,
      28,
      21,
      18,
      13,
      10,
      0,
      10,
      10
    ],
    [
      68,
      63,
      60,
      59,
      56,
      55,
      44,
      39,
      31,
      24,
      21,
      15,
      11,
      10,
      0,
      10
    ],
    [
      73,
      68,
      66,
      64,
      62,
      60,
      49,
      45,
      36,
      29,
      26,
      21,
      16,
      10,
      10,
      0
    ]
  ]
},
{
  "id": "A324",
  "routeNo": "এ-৩২৪",
  "nameBn": "বসিলা → আমুলিয়া স্টাফ কোয়ার্টার",
  "nameEn": "Bosila → Amulia Staff Quarter",
  "totalKm": 23.4,
  "stops": [
    {
      "id": 0,
      "nameEn": "Bosila",
      "nameBn": "বসিলা",
      "aliases": [
        "bosila",
        "বসিলা",
        "basila",
        "বছিলা"
      ]
    },
    {
      "id": 1,
      "nameEn": "Mohammadpur",
      "nameBn": "মোহাম্মদপুর",
      "aliases": [
        "mohammadpur",
        "মোহাম্মদপুর"
      ]
    },
    {
      "id": 2,
      "nameEn": "Asad Gate",
      "nameBn": "আসাদগেট",
      "aliases": [
        "asad gate",
        "আসাদগেট"
      ]
    },
    {
      "id": 3,
      "nameEn": "Khejur Bagan",
      "nameBn": "খেজুর বাগান",
      "aliases": [
        "khejur bagan",
        "খেজুর বাগান"
      ]
    },
    {
      "id": 4,
      "nameEn": "Bijoy Sarani",
      "nameBn": "বিজয় সরণী",
      "aliases": [
        "bijoy sarani",
        "বিজয় সরণী"
      ]
    },
    {
      "id": 5,
      "nameEn": "Mohakhali",
      "nameBn": "মহাখালী",
      "aliases": [
        "mohakhali",
        "মহাখালী"
      ]
    },
    {
      "id": 6,
      "nameEn": "Gulshan-1",
      "nameBn": "গুলশান-১",
      "aliases": [
        "gulshan-1",
        "গুলশান-১"
      ]
    },
    {
      "id": 7,
      "nameEn": "Badda Link Road",
      "nameBn": "বাড্ডা লিংক রোড",
      "aliases": [
        "badda link road",
        "বাড্ডা লিংক রোড",
        "মধ্য বাড্ডা"
      ]
    },
    {
      "id": 8,
      "nameEn": "Rampura",
      "nameBn": "রামপুরা",
      "aliases": [
        "rampura",
        "রামপুরা"
      ]
    },
    {
      "id": 9,
      "nameEn": "Banashree",
      "nameBn": "বনশ্রী",
      "aliases": [
        "banashree",
        "বনশ্রী"
      ]
    },
    {
      "id": 10,
      "nameEn": "Trimohoni",
      "nameBn": "ত্রিমোহনী",
      "aliases": [
        "trimohoni",
        "ত্রিমোহনী"
      ]
    },
    {
      "id": 11,
      "nameEn": "Nandipara Bridge",
      "nameBn": "নন্দীপাড়া ব্রীজ",
      "aliases": [
        "nandipara bridge",
        "নন্দীপাড়া ব্রীজ",
        "নন্দীপাড়া"
      ]
    },
    {
      "id": 12,
      "nameEn": "Meradia Mor",
      "nameBn": "মেরাদিয়া মোড়",
      "aliases": [
        "meradia mor",
        "মেরাদিয়া মোড়",
        "মেরাদিয়া"
      ]
    },
    {
      "id": 13,
      "nameEn": "Amulia Staff Quarter",
      "nameBn": "আমুলিয়া স্টাফ কোয়ার্টার",
      "aliases": [
        "amulia staff quarter",
        "আমুলিয়া স্টাফ কোয়ার্টার",
        "amulia",
        "আমুলিয়া"
      ]
    }
  ],
  "fareMatrix": [
    [
      0,
      10,
      10,
      10,
      15,
      22,
      27,
      32,
      38,
      41,
      47,
      54,
      56,
      63
    ],
    [
      10,
      0,
      10,
      10,
      12,
      19,
      23,
      29,
      34,
      37,
      44,
      50,
      53,
      60
    ],
    [
      10,
      10,
      0,
      10,
      10,
      14,
      19,
      24,
      30,
      32,
      39,
      46,
      48,
      55
    ],
    [
      10,
      10,
      10,
      0,
      10,
      13,
      18,
      23,
      28,
      31,
      38,
      45,
      47,
      54
    ],
    [
      15,
      12,
      10,
      10,
      0,
      10,
      12,
      17,
      22,
      25,
      32,
      39,
      41,
      48
    ],
    [
      22,
      19,
      14,
      13,
      10,
      0,
      10,
      10,
      16,
      18,
      25,
      32,
      34,
      41
    ],
    [
      27,
      23,
      19,
      18,
      12,
      10,
      0,
      10,
      11,
      14,
      20,
      27,
      29,
      36
    ],
    [
      32,
      29,
      24,
      23,
      17,
      10,
      10,
      0,
      10,
      10,
      15,
      22,
      24,
      31
    ],
    [
      38,
      34,
      30,
      28,
      22,
      16,
      11,
      10,
      0,
      10,
      10,
      16,
      18,
      25
    ],
    [
      41,
      37,
      32,
      31,
      25,
      18,
      14,
      10,
      10,
      0,
      10,
      14,
      16,
      23
    ],
    [
      47,
      44,
      39,
      38,
      32,
      25,
      20,
      15,
      10,
      10,
      0,
      10,
      10,
      16
    ],
    [
      54,
      50,
      46,
      45,
      39,
      32,
      27,
      22,
      16,
      14,
      10,
      0,
      10,
      10
    ],
    [
      56,
      53,
      48,
      47,
      41,
      34,
      29,
      24,
      18,
      16,
      10,
      10,
      0,
      10
    ],
    [
      63,
      60,
      55,
      54,
      48,
      41,
      36,
      31,
      25,
      23,
      16,
      10,
      10,
      0
    ]
  ]
},
{
  "id": "A327",
  "routeNo": "এ-৩২৭",
  "nameBn": "মিরপুর-১৪ → মতিঝিল",
  "nameEn": "Mirpur-14 → Motijheel",
  "totalKm": 13.5,
  "stops": [
    {
      "id": 0,
      "nameEn": "Mirpur-14",
      "nameBn": "মিরপুর-১৪",
      "aliases": [
        "mirpur-14",
        "মিরপুর-১৪"
      ]
    },
    {
      "id": 1,
      "nameEn": "Kachukhet",
      "nameBn": "কচুক্ষেত",
      "aliases": [
        "kachukhet",
        "কচুক্ষেত"
      ]
    },
    {
      "id": 2,
      "nameEn": "Farmgate",
      "nameBn": "ফার্মগেট",
      "aliases": [
        "farmgate",
        "ফার্মগেট"
      ]
    },
    {
      "id": 3,
      "nameEn": "Kawran Bazar",
      "nameBn": "কারওয়ান বাজার",
      "aliases": [
        "kawran bazar",
        "কারওয়ান বাজার",
        "karwan bazar"
      ]
    },
    {
      "id": 4,
      "nameEn": "Shahbagh",
      "nameBn": "শাহবাগ",
      "aliases": [
        "shahbagh",
        "শাহবাগ"
      ]
    },
    {
      "id": 5,
      "nameEn": "Gulistan",
      "nameBn": "গুলিস্তান",
      "aliases": [
        "gulistan",
        "গুলিস্তান"
      ]
    },
    {
      "id": 6,
      "nameEn": "Motijheel",
      "nameBn": "মতিঝিল",
      "aliases": [
        "motijheel",
        "মতিঝিল"
      ]
    }
  ],
  "fareMatrix": [
    [
      0,
      10,
      18,
      20,
      23,
      31,
      36
    ],
    [
      10,
      0,
      15,
      18,
      20,
      28,
      34
    ],
    [
      18,
      15,
      0,
      10,
      10,
      13,
      19
    ],
    [
      20,
      18,
      10,
      0,
      10,
      10,
      16
    ],
    [
      23,
      20,
      10,
      10,
      0,
      10,
      14
    ],
    [
      31,
      28,
      13,
      10,
      10,
      0,
      10
    ],
    [
      36,
      34,
      19,
      16,
      14,
      10,
      0
    ]
  ]
},
{
  "id": "A329",
  "routeNo": "এ-৩২৯",
  "nameBn": "বসিলা → সাইনবোর্ড",
  "nameEn": "Bosila → Signboard",
  "totalKm": 20.8,
  "stops": [
    {
      "id": 0,
      "nameEn": "Bosila",
      "nameBn": "বসিলা",
      "aliases": [
        "bosila",
        "বসিলা",
        "basila",
        "বছিলা"
      ]
    },
    {
      "id": 1,
      "nameEn": "Mohammadpur Bus Stand",
      "nameBn": "মোহাম্মদপুর বাস স্ট্যান্ড",
      "aliases": [
        "mohammadpur bus stand",
        "মোহাম্মদপুর বাস স্ট্যান্ড",
        "mohammadpur",
        "মোহাম্মদপুর"
      ]
    },
    {
      "id": 2,
      "nameEn": "Jigatola",
      "nameBn": "জিগাতলা",
      "aliases": [
        "jigatola",
        "জিগাতলা"
      ]
    },
    {
      "id": 3,
      "nameEn": "Science Lab",
      "nameBn": "সাইন্সল্যাব",
      "aliases": [
        "science lab",
        "সাইন্সল্যাব"
      ]
    },
    {
      "id": 4,
      "nameEn": "Bata Signal",
      "nameBn": "বাটা সিগন্যাল",
      "aliases": [
        "bata signal",
        "বাটা সিগন্যাল"
      ]
    },
    {
      "id": 5,
      "nameEn": "Shahbagh",
      "nameBn": "শাহবাগ",
      "aliases": [
        "shahbagh",
        "শাহবাগ"
      ]
    },
    {
      "id": 6,
      "nameEn": "Matsya Bhaban",
      "nameBn": "মৎস্য ভবন",
      "aliases": [
        "matsya bhaban",
        "মৎস্য ভবন"
      ]
    },
    {
      "id": 7,
      "nameEn": "Gulistan",
      "nameBn": "গুলিস্তান",
      "aliases": [
        "gulistan",
        "গুলিস্তান"
      ]
    },
    {
      "id": 8,
      "nameEn": "Tikatuli",
      "nameBn": "টিকাটুলি",
      "aliases": [
        "tikatuli",
        "টিকাটুলি"
      ]
    },
    {
      "id": 9,
      "nameEn": "Shanir Akhra",
      "nameBn": "শনির আখড়া",
      "aliases": [
        "shanir akhra",
        "শনির আখড়া"
      ]
    },
    {
      "id": 10,
      "nameEn": "Signboard",
      "nameBn": "সাইনবোর্ড",
      "aliases": [
        "signboard",
        "সাইনবোর্ড"
      ]
    }
  ],
  "fareMatrix": [
    [
      0,
      10,
      10,
      10,
      15,
      18,
      23,
      25,
      30,
      46,
      56
    ],
    [
      10,
      0,
      10,
      10,
      10,
      13,
      18,
      21,
      25,
      41,
      51
    ],
    [
      10,
      10,
      0,
      10,
      10,
      11,
      16,
      19,
      23,
      39,
      49
    ],
    [
      10,
      10,
      10,
      0,
      10,
      10,
      13,
      15,
      20,
      36,
      46
    ],
    [
      15,
      10,
      10,
      10,
      0,
      10,
      10,
      11,
      15,
      31,
      41
    ],
    [
      18,
      13,
      11,
      10,
      10,
      0,
      10,
      10,
      12,
      29,
      39
    ],
    [
      23,
      18,
      16,
      13,
      10,
      10,
      0,
      10,
      10,
      23,
      33
    ],
    [
      25,
      21,
      19,
      15,
      11,
      10,
      10,
      0,
      10,
      21,
      31
    ],
    [
      30,
      25,
      23,
      20,
      15,
      12,
      10,
      10,
      0,
      16,
      26
    ],
    [
      46,
      41,
      39,
      36,
      31,
      29,
      23,
      21,
      16,
      0,
      10
    ],
    [
      56,
      51,
      49,
      46,
      41,
      39,
      33,
      31,
      26,
      10,
      0
    ]
  ]
},
{
  "id": "A330",
  "routeNo": "এ-৩৩০",
  "nameBn": "নবীনগর → দিয়াবাড়ী",
  "nameEn": "Nabinagar → Diyabari",
  "totalKm": 31.8,
  "stops": [
    {
      "id": 0,
      "nameEn": "Nabinagar",
      "nameBn": "নবীনগর",
      "aliases": [
        "nabinagar",
        "নবীনগর"
      ]
    },
    {
      "id": 1,
      "nameEn": "EPZ",
      "nameBn": "ইপিজেড",
      "aliases": [
        "epz",
        "ইপিজেড"
      ]
    },
    {
      "id": 2,
      "nameEn": "Baipail",
      "nameBn": "বাইপাইল",
      "aliases": [
        "baipail",
        "বাইপাইল"
      ]
    },
    {
      "id": 3,
      "nameEn": "Jamgora",
      "nameBn": "জামগড়া",
      "aliases": [
        "jamgora",
        "জামগড়া"
      ]
    },
    {
      "id": 4,
      "nameEn": "Fantasy Kingdom",
      "nameBn": "ফ্যান্টাসি",
      "aliases": [
        "fantasy kingdom",
        "ফ্যান্টাসি"
      ]
    },
    {
      "id": 5,
      "nameEn": "Ashulia",
      "nameBn": "আশুলিয়া",
      "aliases": [
        "ashulia",
        "আশুলিয়া"
      ]
    },
    {
      "id": 6,
      "nameEn": "Dhaur",
      "nameBn": "ধউর",
      "aliases": [
        "dhaur",
        "ধউর"
      ]
    },
    {
      "id": 7,
      "nameEn": "Prottasha",
      "nameBn": "প্রত্যাশা",
      "aliases": [
        "prottasha",
        "প্রত্যাশা"
      ]
    },
    {
      "id": 8,
      "nameEn": "Pallabi",
      "nameBn": "পল্লবী",
      "aliases": [
        "pallabi",
        "পল্লবী"
      ]
    },
    {
      "id": 9,
      "nameEn": "Purobi",
      "nameBn": "পূরবী",
      "aliases": [
        "purobi",
        "পূরবী",
        "পুরবী"
      ]
    },
    {
      "id": 10,
      "nameEn": "Mirpur-11",
      "nameBn": "মিরপুর-১১",
      "aliases": [
        "mirpur-11",
        "মিরপুর-১১"
      ]
    },
    {
      "id": 11,
      "nameEn": "Mirpur-10",
      "nameBn": "মিরপুর-১০",
      "aliases": [
        "mirpur-10",
        "মিরপুর-১০"
      ]
    },
    {
      "id": 12,
      "nameEn": "Mirpur-1",
      "nameBn": "মিরপুর-১",
      "aliases": [
        "mirpur-1",
        "মিরপুর-১"
      ]
    },
    {
      "id": 13,
      "nameEn": "Diyabari",
      "nameBn": "দিয়াবাড়ী",
      "aliases": [
        "diyabari",
        "দিয়াবাড়ী"
      ]
    }
  ],
  "fareMatrix": [
    [
      0,
      10,
      22,
      28,
      30,
      42,
      54,
      58,
      66,
      69,
      72,
      78,
      82,
      86
    ],
    [
      10,
      0,
      12,
      18,
      21,
      33,
      44,
      49,
      57,
      60,
      62,
      69,
      73,
      77
    ],
    [
      22,
      12,
      0,
      10,
      10,
      21,
      32,
      37,
      45,
      47,
      50,
      57,
      60,
      64
    ],
    [
      28,
      18,
      10,
      0,
      10,
      15,
      26,
      31,
      39,
      41,
      44,
      51,
      54,
      58
    ],
    [
      30,
      21,
      10,
      10,
      0,
      12,
      23,
      28,
      36,
      39,
      41,
      48,
      52,
      56
    ],
    [
      42,
      33,
      21,
      15,
      12,
      0,
      11,
      16,
      24,
      27,
      29,
      36,
      39,
      43
    ],
    [
      54,
      44,
      32,
      26,
      23,
      11,
      0,
      10,
      13,
      15,
      18,
      25,
      28,
      32
    ],
    [
      58,
      49,
      37,
      31,
      28,
      16,
      10,
      0,
      10,
      11,
      14,
      20,
      24,
      28
    ],
    [
      66,
      57,
      45,
      39,
      36,
      24,
      13,
      10,
      0,
      10,
      10,
      12,
      16,
      20
    ],
    [
      69,
      60,
      47,
      41,
      39,
      27,
      15,
      11,
      10,
      0,
      10,
      10,
      13,
      17
    ],
    [
      72,
      62,
      50,
      44,
      41,
      29,
      18,
      14,
      10,
      10,
      0,
      10,
      10,
      14
    ],
    [
      78,
      69,
      57,
      51,
      48,
      36,
      25,
      20,
      12,
      10,
      10,
      0,
      10,
      10
    ],
    [
      82,
      73,
      60,
      54,
      52,
      39,
      28,
      24,
      16,
      13,
      10,
      10,
      0,
      10
    ],
    [
      86,
      77,
      64,
      58,
      56,
      43,
      32,
      28,
      20,
      17,
      14,
      10,
      10,
      0
    ]
  ]
},
{
  "id": "A331",
  "routeNo": "এ-৩৩১",
  "nameBn": "নন্দন পার্ক → সাইনবোর্ড",
  "nameEn": "Nandan Park → Signboard",
  "totalKm": 58.6,
  "stops": [
    {
      "id": 0,
      "nameEn": "Nandan Park",
      "nameBn": "নন্দন পার্ক",
      "aliases": [
        "nandan park",
        "নন্দন পার্ক",
        "নন্দন"
      ]
    },
    {
      "id": 1,
      "nameEn": "EPZ",
      "nameBn": "ইপিজেড",
      "aliases": [
        "epz",
        "ইপিজেড"
      ]
    },
    {
      "id": 2,
      "nameEn": "Nabinagar",
      "nameBn": "নবীনগর",
      "aliases": [
        "nabinagar",
        "নবীনগর"
      ]
    },
    {
      "id": 3,
      "nameEn": "Savar",
      "nameBn": "সাভার",
      "aliases": [
        "savar",
        "সাভার"
      ]
    },
    {
      "id": 4,
      "nameEn": "Hemayetpur",
      "nameBn": "হেমায়েতপুর",
      "aliases": [
        "hemayetpur",
        "হেমায়েতপুর"
      ]
    },
    {
      "id": 5,
      "nameEn": "Gabtoli",
      "nameBn": "গাবতলী",
      "aliases": [
        "gabtoli",
        "গাবতলী"
      ]
    },
    {
      "id": 6,
      "nameEn": "Shyamoli",
      "nameBn": "শ্যামলী",
      "aliases": [
        "shyamoli",
        "শ্যামলী"
      ]
    },
    {
      "id": 7,
      "nameEn": "Asad Gate",
      "nameBn": "আসাদগেট",
      "aliases": [
        "asad gate",
        "আসাদগেট"
      ]
    },
    {
      "id": 8,
      "nameEn": "Farmgate",
      "nameBn": "ফার্মগেট",
      "aliases": [
        "farmgate",
        "ফার্মগেট"
      ]
    },
    {
      "id": 9,
      "nameEn": "Banglamotor",
      "nameBn": "বাংলামটর",
      "aliases": [
        "banglamotor",
        "বাংলামটর"
      ]
    },
    {
      "id": 10,
      "nameEn": "Shahbagh",
      "nameBn": "শাহবাগ",
      "aliases": [
        "shahbagh",
        "শাহবাগ"
      ]
    },
    {
      "id": 11,
      "nameEn": "Press Club",
      "nameBn": "প্রেসক্লাব",
      "aliases": [
        "press club",
        "প্রেসক্লাব"
      ]
    },
    {
      "id": 12,
      "nameEn": "Paltan",
      "nameBn": "পল্টন",
      "aliases": [
        "paltan",
        "পল্টন"
      ]
    },
    {
      "id": 13,
      "nameEn": "Motijheel",
      "nameBn": "মতিঝিল",
      "aliases": [
        "motijheel",
        "মতিঝিল"
      ]
    },
    {
      "id": 14,
      "nameEn": "Tikatuli",
      "nameBn": "টিকাটুলি",
      "aliases": [
        "tikatuli",
        "টিকাটুলি"
      ]
    },
    {
      "id": 15,
      "nameEn": "Sayedabad",
      "nameBn": "সায়েদাবাদ",
      "aliases": [
        "sayedabad",
        "সায়েদাবাদ"
      ]
    },
    {
      "id": 16,
      "nameEn": "Jatrabari",
      "nameBn": "যাত্রাবাড়ী",
      "aliases": [
        "jatrabari",
        "যাত্রাবাড়ী"
      ]
    },
    {
      "id": 17,
      "nameEn": "Shanir Akhra",
      "nameBn": "শনির আখড়া",
      "aliases": [
        "shanir akhra",
        "শনির আখড়া"
      ]
    },
    {
      "id": 18,
      "nameEn": "Signboard",
      "nameBn": "সাইনবোর্ড",
      "aliases": [
        "signboard",
        "সাইনবোর্ড"
      ]
    }
  ],
  "fareMatrix": [
    [
      0,
      26,
      38,
      60,
      76,
      97,
      106,
      110,
      115,
      121,
      123,
      128,
      130,
      136,
      139,
      142,
      145,
      149,
      158
    ],
    [
      26,
      0,
      12,
      34,
      50,
      71,
      80,
      84,
      89,
      95,
      97,
      102,
      104,
      110,
      113,
      116,
      119,
      123,
      132
    ],
    [
      38,
      12,
      0,
      22,
      38,
      59,
      68,
      72,
      77,
      83,
      85,
      90,
      92,
      98,
      101,
      104,
      107,
      111,
      120
    ],
    [
      60,
      34,
      22,
      0,
      16,
      37,
      46,
      50,
      55,
      61,
      63,
      68,
      70,
      76,
      79,
      82,
      85,
      89,
      98
    ],
    [
      76,
      50,
      38,
      16,
      0,
      21,
      29,
      33,
      39,
      44,
      47,
      52,
      53,
      59,
      62,
      66,
      68,
      73,
      82
    ],
    [
      97,
      71,
      59,
      37,
      21,
      0,
      10,
      13,
      18,
      24,
      26,
      31,
      33,
      39,
      42,
      45,
      48,
      52,
      61
    ],
    [
      106,
      80,
      68,
      46,
      29,
      10,
      0,
      10,
      10,
      15,
      18,
      23,
      24,
      30,
      33,
      36,
      39,
      43,
      53
    ],
    [
      110,
      84,
      72,
      50,
      33,
      13,
      10,
      0,
      10,
      11,
      14,
      18,
      20,
      26,
      29,
      32,
      35,
      39,
      48
    ],
    [
      115,
      89,
      77,
      55,
      39,
      18,
      10,
      10,
      0,
      10,
      10,
      13,
      14,
      21,
      23,
      27,
      29,
      34,
      43
    ],
    [
      121,
      95,
      83,
      61,
      44,
      24,
      15,
      11,
      10,
      0,
      10,
      10,
      10,
      15,
      18,
      21,
      24,
      28,
      38
    ],
    [
      123,
      97,
      85,
      63,
      47,
      26,
      18,
      14,
      10,
      10,
      0,
      10,
      10,
      12,
      15,
      19,
      21,
      26,
      35
    ],
    [
      128,
      102,
      90,
      68,
      52,
      31,
      23,
      18,
      13,
      10,
      10,
      0,
      10,
      10,
      11,
      14,
      16,
      21,
      30
    ],
    [
      130,
      104,
      92,
      70,
      53,
      33,
      24,
      20,
      14,
      10,
      10,
      10,
      0,
      10,
      10,
      12,
      15,
      19,
      29
    ],
    [
      136,
      110,
      98,
      76,
      59,
      39,
      30,
      26,
      21,
      15,
      12,
      10,
      10,
      0,
      10,
      10,
      10,
      13,
      22
    ],
    [
      139,
      113,
      101,
      79,
      62,
      42,
      33,
      29,
      23,
      18,
      15,
      11,
      10,
      10,
      0,
      10,
      10,
      10,
      19
    ],
    [
      142,
      116,
      104,
      82,
      66,
      45,
      36,
      32,
      27,
      21,
      19,
      14,
      12,
      10,
      10,
      0,
      10,
      10,
      16
    ],
    [
      145,
      119,
      107,
      85,
      68,
      48,
      39,
      35,
      29,
      24,
      21,
      16,
      15,
      10,
      10,
      10,
      0,
      10,
      14
    ],
    [
      149,
      123,
      111,
      89,
      73,
      52,
      43,
      39,
      34,
      28,
      26,
      21,
      19,
      13,
      10,
      10,
      10,
      0,
      10
    ],
    [
      158,
      132,
      120,
      98,
      82,
      61,
      53,
      48,
      43,
      38,
      35,
      30,
      29,
      22,
      19,
      16,
      14,
      10,
      0
    ]
  ]
},
{
  "id": "A333",
  "routeNo": "এ-৩৩৩",
  "nameBn": "মিরপুর-১৪ → নন্দন পার্ক",
  "nameEn": "Mirpur-14 → Nandan Park",
  "totalKm": 39.8,
  "stops": [
    {
      "id": 0,
      "nameEn": "Mirpur-14",
      "nameBn": "মিরপুর-১৪",
      "aliases": [
        "mirpur-14",
        "মিরপুর-১৪"
      ]
    },
    {
      "id": 1,
      "nameEn": "Mirpur-10",
      "nameBn": "মিরপুর-১০",
      "aliases": [
        "mirpur-10",
        "মিরপুর-১০"
      ]
    },
    {
      "id": 2,
      "nameEn": "Mirpur-1",
      "nameBn": "মিরপুর-১",
      "aliases": [
        "mirpur-1",
        "মিরপুর-১"
      ]
    },
    {
      "id": 3,
      "nameEn": "Dhaur",
      "nameBn": "ধউর",
      "aliases": [
        "dhaur",
        "ধউর"
      ]
    },
    {
      "id": 4,
      "nameEn": "Ashulia",
      "nameBn": "আশুলিয়া",
      "aliases": [
        "ashulia",
        "আশুলিয়া"
      ]
    },
    {
      "id": 5,
      "nameEn": "Fantasy Kingdom",
      "nameBn": "ফ্যান্টাসি",
      "aliases": [
        "fantasy kingdom",
        "ফ্যান্টাসি"
      ]
    },
    {
      "id": 6,
      "nameEn": "EPZ",
      "nameBn": "ইপিজেড",
      "aliases": [
        "epz",
        "ইপিজেড"
      ]
    },
    {
      "id": 7,
      "nameEn": "Nandan Park",
      "nameBn": "নন্দন পার্ক",
      "aliases": [
        "nandan park",
        "নন্দন পার্ক",
        "নন্দন"
      ]
    }
  ],
  "fareMatrix": [
    [
      0,
      10,
      11,
      47,
      69,
      78,
      99,
      107
    ],
    [
      10,
      0,
      10,
      41,
      63,
      73,
      94,
      102
    ],
    [
      11,
      10,
      0,
      36,
      58,
      68,
      89,
      97
    ],
    [
      47,
      41,
      36,
      0,
      22,
      32,
      53,
      61
    ],
    [
      69,
      63,
      58,
      22,
      0,
      10,
      31,
      39
    ],
    [
      78,
      73,
      68,
      32,
      10,
      0,
      21,
      29
    ],
    [
      99,
      94,
      89,
      53,
      31,
      21,
      0,
      10
    ],
    [
      107,
      102,
      97,
      61,
      39,
      29,
      10,
      0
    ]
  ]
},
{
  "id": "A341",
  "routeNo": "এ-৩৪১",
  "nameBn": "সাইনবোর্ড → বাইপাইল",
  "nameEn": "Signboard → Baipail",
  "totalKm": 48.7,
  "stops": [
    {
      "id": 0,
      "nameEn": "Signboard",
      "nameBn": "সাইনবোর্ড",
      "aliases": [
        "signboard",
        "সাইনবোর্ড"
      ]
    },
    {
      "id": 1,
      "nameEn": "Shanir Akhra",
      "nameBn": "শনির আখড়া",
      "aliases": [
        "shanir akhra",
        "শনির আখড়া"
      ]
    },
    {
      "id": 2,
      "nameEn": "Jatrabari",
      "nameBn": "যাত্রাবাড়ী",
      "aliases": [
        "jatrabari",
        "যাত্রাবাড়ী"
      ]
    },
    {
      "id": 3,
      "nameEn": "Gulistan",
      "nameBn": "গুলিস্তান",
      "aliases": [
        "gulistan",
        "গুলিস্তান",
        "ফুলবাড়িয়া"
      ]
    },
    {
      "id": 4,
      "nameEn": "Kakrail",
      "nameBn": "কাকরাইল",
      "aliases": [
        "kakrail",
        "কাকরাইল"
      ]
    },
    {
      "id": 5,
      "nameEn": "Malibagh",
      "nameBn": "মালিবাগ",
      "aliases": [
        "malibagh",
        "মালিবাগ"
      ]
    },
    {
      "id": 6,
      "nameEn": "Moghbazar",
      "nameBn": "মগবাজার",
      "aliases": [
        "moghbazar",
        "মগবাজার"
      ]
    },
    {
      "id": 7,
      "nameEn": "Mohakhali",
      "nameBn": "মহাখালী",
      "aliases": [
        "mohakhali",
        "মহাখালী"
      ]
    },
    {
      "id": 8,
      "nameEn": "Chairman Bari",
      "nameBn": "চেয়ারম্যান বাড়ি",
      "aliases": [
        "chairman bari",
        "চেয়ারম্যান বাড়ি"
      ]
    },
    {
      "id": 9,
      "nameEn": "Kakoli",
      "nameBn": "কাকলী",
      "aliases": [
        "kakoli",
        "কাকলী"
      ]
    },
    {
      "id": 10,
      "nameEn": "Khilkhet",
      "nameBn": "খিলক্ষেত",
      "aliases": [
        "khilkhet",
        "খিলক্ষেত"
      ]
    },
    {
      "id": 11,
      "nameEn": "Airport",
      "nameBn": "এয়ারপোর্ট",
      "aliases": [
        "airport",
        "এয়ারপোর্ট",
        "বিমানবন্দর"
      ]
    },
    {
      "id": 12,
      "nameEn": "Uttara",
      "nameBn": "উত্তরা",
      "aliases": [
        "uttara",
        "উত্তরা"
      ]
    },
    {
      "id": 13,
      "nameEn": "Abdullahpur",
      "nameBn": "আব্দুল্লাহপুর",
      "aliases": [
        "abdullahpur",
        "আব্দুল্লাহপুর"
      ]
    },
    {
      "id": 14,
      "nameEn": "Dhaur",
      "nameBn": "ধউর",
      "aliases": [
        "dhaur",
        "ধউর"
      ]
    },
    {
      "id": 15,
      "nameEn": "Fantasy Kingdom",
      "nameBn": "ফ্যান্টাসি কিংডম",
      "aliases": [
        "fantasy kingdom",
        "ফ্যান্টাসি কিংডম",
        "ফ্যান্টাসি"
      ]
    },
    {
      "id": 16,
      "nameEn": "Baipail",
      "nameBn": "বাইপাইল",
      "aliases": [
        "baipail",
        "বাইপাইল"
      ]
    }
  ],
  "fareMatrix": [
    [
      0,
      10,
      19,
      26,
      28,
      32,
      36,
      42,
      45,
      51,
      69,
      76,
      82,
      85,
      100,
      125,
      131
    ],
    [
      10,
      0,
      10,
      15,
      17,
      23,
      27,
      32,
      36,
      42,
      60,
      67,
      73,
      76,
      91,
      116,
      122
    ],
    [
      19,
      10,
      0,
      10,
      10,
      13,
      17,
      23,
      26,
      32,
      50,
      57,
      63,
      67,
      82,
      107,
      113
    ],
    [
      26,
      15,
      10,
      0,
      10,
      10,
      10,
      17,
      21,
      27,
      45,
      52,
      58,
      61,
      76,
      101,
      107
    ],
    [
      28,
      17,
      10,
      10,
      0,
      10,
      10,
      15,
      19,
      25,
      43,
      50,
      56,
      59,
      74,
      99,
      105
    ],
    [
      32,
      23,
      13,
      10,
      10,
      0,
      10,
      10,
      14,
      21,
      38,
      45,
      51,
      54,
      68,
      93,
      99
    ],
    [
      36,
      27,
      17,
      10,
      10,
      10,
      0,
      10,
      10,
      15,
      33,
      40,
      46,
      49,
      64,
      89,
      95
    ],
    [
      42,
      32,
      23,
      17,
      15,
      10,
      10,
      0,
      10,
      10,
      27,
      34,
      40,
      43,
      58,
      83,
      89
    ],
    [
      45,
      36,
      26,
      21,
      19,
      14,
      10,
      10,
      0,
      10,
      24,
      31,
      36,
      40,
      55,
      80,
      86
    ],
    [
      51,
      42,
      32,
      27,
      25,
      21,
      15,
      10,
      10,
      0,
      19,
      26,
      32,
      35,
      50,
      75,
      81
    ],
    [
      69,
      60,
      50,
      45,
      43,
      38,
      33,
      27,
      24,
      19,
      0,
      10,
      13,
      16,
      31,
      56,
      62
    ],
    [
      76,
      67,
      57,
      52,
      50,
      45,
      40,
      34,
      31,
      26,
      10,
      0,
      10,
      10,
      24,
      49,
      56
    ],
    [
      82,
      73,
      63,
      58,
      56,
      51,
      46,
      40,
      36,
      32,
      13,
      10,
      0,
      10,
      18,
      43,
      50
    ],
    [
      85,
      76,
      67,
      61,
      59,
      54,
      49,
      43,
      40,
      35,
      16,
      10,
      10,
      0,
      15,
      40,
      46
    ],
    [
      100,
      91,
      82,
      76,
      74,
      68,
      64,
      58,
      55,
      50,
      31,
      24,
      18,
      15,
      0,
      25,
      31
    ],
    [
      125,
      116,
      107,
      101,
      99,
      93,
      89,
      83,
      80,
      75,
      56,
      49,
      43,
      40,
      25,
      0,
      10
    ],
    [
      131,
      122,
      113,
      107,
      105,
      99,
      95,
      89,
      86,
      81,
      62,
      56,
      50,
      46,
      31,
      10,
      0
    ]
  ]
},
{
  "id": "A344",
  "routeNo": "এ-৩৪৪",
  "nameBn": "চিড়িয়াখানা → ইকুরিয়া",
  "nameEn": "Chiriakhana → Ikuriya",
  "totalKm": 23.7,
  "stops": [
    {
      "id": 0,
      "nameEn": "Chiriakhana",
      "nameBn": "চিড়িয়াখানা",
      "aliases": [
        "chiriakhana",
        "চিড়িয়াখানা"
      ]
    },
    {
      "id": 1,
      "nameEn": "Mirpur-2",
      "nameBn": "মিরপুর-২",
      "aliases": [
        "mirpur-2",
        "মিরপুর-২",
        "মিরপুর ২"
      ]
    },
    {
      "id": 2,
      "nameEn": "Mirpur-10",
      "nameBn": "মিরপুর-১০",
      "aliases": [
        "mirpur-10",
        "মিরপুর-১০",
        "মিরপুর ১০"
      ]
    },
    {
      "id": 3,
      "nameEn": "Kazipara",
      "nameBn": "কাজীপাড়া",
      "aliases": [
        "kazipara",
        "কাজীপাড়া"
      ]
    },
    {
      "id": 4,
      "nameEn": "Shewrapara",
      "nameBn": "শেওড়াপাড়া",
      "aliases": [
        "shewrapara",
        "শেওড়াপাড়া"
      ]
    },
    {
      "id": 5,
      "nameEn": "Agargaon",
      "nameBn": "আগারগাঁও",
      "aliases": [
        "agargaon",
        "আগারগাঁও"
      ]
    },
    {
      "id": 6,
      "nameEn": "Farmgate",
      "nameBn": "ফার্মগেট",
      "aliases": [
        "farmgate",
        "ফার্মগেট"
      ]
    },
    {
      "id": 7,
      "nameEn": "Kawran Bazar",
      "nameBn": "কারওয়ান বাজার",
      "aliases": [
        "kawran bazar",
        "কারওয়ান বাজার",
        "কাওরান বাজার"
      ]
    },
    {
      "id": 8,
      "nameEn": "Moghbazar",
      "nameBn": "মগবাজার",
      "aliases": [
        "moghbazar",
        "মগবাজার"
      ]
    },
    {
      "id": 9,
      "nameEn": "Mouchak",
      "nameBn": "মৌচাক",
      "aliases": [
        "mouchak",
        "মৌচাক"
      ]
    },
    {
      "id": 10,
      "nameEn": "Fakirapool",
      "nameBn": "ফকিরাপুল",
      "aliases": [
        "fakirapool",
        "ফকিরাপুল"
      ]
    },
    {
      "id": 11,
      "nameEn": "Motijheel",
      "nameBn": "মতিঝিল",
      "aliases": [
        "motijheel",
        "মতিঝিল"
      ]
    },
    {
      "id": 12,
      "nameEn": "Sayedabad",
      "nameBn": "সায়েদাবাদ",
      "aliases": [
        "sayedabad",
        "সায়েদাবাদ"
      ]
    },
    {
      "id": 13,
      "nameEn": "Jatrabari",
      "nameBn": "যাত্রাবাড়ী",
      "aliases": [
        "jatrabari",
        "যাত্রাবাড়ী"
      ]
    },
    {
      "id": 14,
      "nameEn": "Postogola Bridge",
      "nameBn": "পোস্তগোলা ব্রীজ",
      "aliases": [
        "postogola bridge",
        "পোস্তগোলা ব্রীজ",
        "পোস্তগোলা"
      ]
    },
    {
      "id": 15,
      "nameEn": "Ikuriya",
      "nameBn": "ইকুরিয়া",
      "aliases": [
        "ikuriya",
        "ইকুরিয়া",
        "ekuria"
      ]
    }
  ],
  "fareMatrix": [
    [
      0,
      10,
      10,
      13,
      15,
      19,
      27,
      32,
      34,
      37,
      45,
      47,
      52,
      55,
      60,
      64
    ],
    [
      10,
      0,
      10,
      10,
      10,
      12,
      20,
      24,
      27,
      30,
      37,
      40,
      44,
      47,
      52,
      56
    ],
    [
      10,
      10,
      0,
      10,
      10,
      10,
      18,
      22,
      25,
      28,
      35,
      38,
      43,
      45,
      51,
      55
    ],
    [
      13,
      10,
      10,
      0,
      10,
      10,
      14,
      19,
      21,
      24,
      32,
      34,
      39,
      42,
      47,
      51
    ],
    [
      15,
      10,
      10,
      10,
      0,
      10,
      12,
      17,
      19,
      22,
      30,
      32,
      37,
      40,
      45,
      49
    ],
    [
      19,
      12,
      10,
      10,
      10,
      0,
      10,
      12,
      15,
      18,
      25,
      28,
      32,
      35,
      41,
      45
    ],
    [
      27,
      20,
      18,
      14,
      12,
      10,
      0,
      10,
      10,
      10,
      17,
      20,
      25,
      27,
      33,
      37
    ],
    [
      32,
      24,
      22,
      19,
      17,
      12,
      10,
      0,
      10,
      10,
      13,
      16,
      20,
      23,
      28,
      32
    ],
    [
      34,
      27,
      25,
      21,
      19,
      15,
      10,
      10,
      0,
      10,
      10,
      13,
      18,
      20,
      26,
      30
    ],
    [
      37,
      30,
      28,
      24,
      22,
      18,
      10,
      10,
      10,
      0,
      10,
      10,
      15,
      17,
      23,
      27
    ],
    [
      45,
      37,
      35,
      32,
      30,
      25,
      17,
      13,
      10,
      10,
      0,
      10,
      10,
      10,
      15,
      19
    ],
    [
      47,
      40,
      38,
      34,
      32,
      28,
      20,
      16,
      13,
      10,
      10,
      0,
      10,
      10,
      13,
      17
    ],
    [
      52,
      44,
      43,
      39,
      37,
      32,
      25,
      20,
      18,
      15,
      10,
      10,
      0,
      10,
      10,
      12
    ],
    [
      55,
      47,
      45,
      42,
      40,
      35,
      27,
      23,
      20,
      17,
      10,
      10,
      10,
      0,
      10,
      10
    ],
    [
      60,
      52,
      51,
      47,
      45,
      41,
      33,
      28,
      26,
      23,
      15,
      13,
      10,
      10,
      0,
      10
    ],
    [
      64,
      56,
      55,
      51,
      49,
      45,
      37,
      32,
      30,
      27,
      19,
      17,
      12,
      10,
      10,
      0
    ]
  ]
},
{
  "id": "A345",
  "routeNo": "এ-৩৪৫",
  "nameBn": "দয়াগঞ্জ → আব্দুল্লাহপুর",
  "nameEn": "Dayaganj → Abdullahpur",
  "totalKm": 25,
  "stops": [
    {
      "id": 0,
      "nameEn": "Dayaganj",
      "nameBn": "দয়াগঞ্জ",
      "aliases": [
        "dayaganj",
        "দয়াগঞ্জ"
      ]
    },
    {
      "id": 1,
      "nameEn": "Jatrabari",
      "nameBn": "যাত্রাবাড়ী",
      "aliases": [
        "jatrabari",
        "যাত্রাবাড়ী"
      ]
    },
    {
      "id": 2,
      "nameEn": "Gulistan",
      "nameBn": "গুলিস্তান",
      "aliases": [
        "gulistan",
        "গুলিস্তান"
      ]
    },
    {
      "id": 3,
      "nameEn": "Mohakhali",
      "nameBn": "মহাখালী",
      "aliases": [
        "mohakhali",
        "মহাখালী"
      ]
    },
    {
      "id": 4,
      "nameEn": "Banani",
      "nameBn": "বনানী",
      "aliases": [
        "banani",
        "বনানী"
      ]
    },
    {
      "id": 5,
      "nameEn": "Khilkhet",
      "nameBn": "খিলক্ষেত",
      "aliases": [
        "khilkhet",
        "খিলক্ষেত"
      ]
    },
    {
      "id": 6,
      "nameEn": "Airport",
      "nameBn": "এয়ারপোর্ট",
      "aliases": [
        "airport",
        "এয়ারপোর্ট"
      ]
    },
    {
      "id": 7,
      "nameEn": "Uttara",
      "nameBn": "উত্তরা",
      "aliases": [
        "uttara",
        "উত্তরা"
      ]
    },
    {
      "id": 8,
      "nameEn": "Abdullahpur",
      "nameBn": "আব্দুল্লাহপুর",
      "aliases": [
        "abdullahpur",
        "আব্দুল্লাহপুর"
      ]
    }
  ],
  "fareMatrix": [
    [
      0,
      10,
      15,
      33,
      37,
      51,
      57,
      61,
      68
    ],
    [
      10,
      0,
      10,
      27,
      31,
      45,
      51,
      55,
      62
    ],
    [
      15,
      10,
      0,
      18,
      22,
      36,
      42,
      46,
      52
    ],
    [
      33,
      27,
      18,
      0,
      10,
      18,
      24,
      28,
      35
    ],
    [
      37,
      31,
      22,
      10,
      0,
      14,
      20,
      24,
      31
    ],
    [
      51,
      45,
      36,
      18,
      14,
      0,
      10,
      10,
      16
    ],
    [
      57,
      51,
      42,
      24,
      20,
      10,
      0,
      10,
      11
    ],
    [
      61,
      55,
      46,
      28,
      24,
      10,
      10,
      0,
      10
    ],
    [
      68,
      62,
      52,
      35,
      31,
      16,
      11,
      10,
      0
    ]
  ]
},
{
  "id": "A348",
  "routeNo": "এ-৩৪৮",
  "nameBn": "চিড়িয়াখানা → মতিঝিল",
  "nameEn": "Chiriakhana → Motijheel",
  "totalKm": 17.5,
  "stops": [
    {
      "id": 0,
      "nameEn": "Chiriakhana",
      "nameBn": "চিড়িয়াখানা",
      "aliases": [
        "chiriakhana",
        "চিড়িয়াখানা"
      ]
    },
    {
      "id": 1,
      "nameEn": "Milk Vita",
      "nameBn": "মিল্কভিটা",
      "aliases": [
        "milk vita",
        "মিল্কভিটা"
      ]
    },
    {
      "id": 2,
      "nameEn": "Mirpur-1",
      "nameBn": "মিরপুর-১",
      "aliases": [
        "mirpur-1",
        "মিরপুর-১"
      ]
    },
    {
      "id": 3,
      "nameEn": "Kalyanpur",
      "nameBn": "কল্যাণপুর",
      "aliases": [
        "kalyanpur",
        "কল্যাণপুর"
      ]
    },
    {
      "id": 4,
      "nameEn": "Shyamoli",
      "nameBn": "শ্যামলী",
      "aliases": [
        "shyamoli",
        "শ্যামলী"
      ]
    },
    {
      "id": 5,
      "nameEn": "Asad Gate",
      "nameBn": "আসাদ গেট",
      "aliases": [
        "asad gate",
        "আসাদ গেট"
      ]
    },
    {
      "id": 6,
      "nameEn": "Science Lab",
      "nameBn": "সায়েন্সল্যাব",
      "aliases": [
        "science lab",
        "সায়েন্সল্যাব"
      ]
    },
    {
      "id": 7,
      "nameEn": "Shahbag",
      "nameBn": "শাহবাগ",
      "aliases": [
        "shahbag",
        "শাহবাগ"
      ]
    },
    {
      "id": 8,
      "nameEn": "Press Club",
      "nameBn": "প্রেসক্লাব",
      "aliases": [
        "press club",
        "প্রেসক্লাব"
      ]
    },
    {
      "id": 9,
      "nameEn": "Motijheel",
      "nameBn": "মতিঝিল",
      "aliases": [
        "motijheel",
        "মতিঝিল"
      ]
    }
  ],
  "fareMatrix": [
    [
      0,
      10,
      10,
      14,
      18,
      23,
      31,
      37,
      41,
      50
    ],
    [
      10,
      0,
      10,
      11,
      15,
      21,
      28,
      35,
      39,
      45
    ],
    [
      10,
      10,
      0,
      10,
      10,
      15,
      23,
      30,
      34,
      40
    ],
    [
      14,
      11,
      10,
      0,
      10,
      10,
      17,
      23,
      28,
      33
    ],
    [
      18,
      15,
      10,
      10,
      0,
      10,
      13,
      20,
      24,
      30
    ],
    [
      23,
      21,
      15,
      10,
      10,
      0,
      10,
      14,
      18,
      24
    ],
    [
      31,
      28,
      23,
      17,
      13,
      10,
      0,
      10,
      11,
      16
    ],
    [
      37,
      35,
      30,
      23,
      20,
      14,
      10,
      0,
      10,
      10
    ],
    [
      41,
      39,
      34,
      28,
      24,
      18,
      11,
      10,
      0,
      10
    ],
    [
      50,
      45,
      40,
      33,
      30,
      24,
      16,
      10,
      10,
      0
    ]
  ]
},
{
  "id": "A355",
  "routeNo": "এ-৩৫৫",
  "nameBn": "কুড়িল বিশ্বরোড → আজিমপুর",
  "nameEn": "Kuril Bishwaroad → Azimpur",
  "totalKm": 17.5,
  "stops": [
    {
      "id": 0,
      "nameEn": "Kuril Bishwaroad",
      "nameBn": "কুড়িল বিশ্বরোড",
      "aliases": [
        "kuril bishwaroad",
        "কুড়িল বিশ্বরোড"
      ]
    },
    {
      "id": 1,
      "nameEn": "Notun Bazar",
      "nameBn": "নতুন বাজার",
      "aliases": [
        "notun bazar",
        "নতুন বাজার"
      ]
    },
    {
      "id": 2,
      "nameEn": "Badda Link Road",
      "nameBn": "বাড্ডা লিংক রোড",
      "aliases": [
        "badda link road",
        "বাড্ডা লিংক রোড"
      ]
    },
    {
      "id": 3,
      "nameEn": "Gulshan-1",
      "nameBn": "গুলশান-১",
      "aliases": [
        "gulshan-1",
        "গুলশান-১"
      ]
    },
    {
      "id": 4,
      "nameEn": "Mohakhali",
      "nameBn": "মহাখালী",
      "aliases": [
        "mohakhali",
        "মহাখালী"
      ]
    },
    {
      "id": 5,
      "nameEn": "Farmgate",
      "nameBn": "ফার্মগেট",
      "aliases": [
        "farmgate",
        "ফার্মগেট"
      ]
    },
    {
      "id": 6,
      "nameEn": "Shahbag",
      "nameBn": "শাহবাগ",
      "aliases": [
        "shahbag",
        "শাহবাগ"
      ]
    },
    {
      "id": 7,
      "nameEn": "New Market",
      "nameBn": "নিউমার্কেট",
      "aliases": [
        "new market",
        "নিউমার্কেট"
      ]
    },
    {
      "id": 8,
      "nameEn": "Azimpur",
      "nameBn": "আজিমপুর",
      "aliases": [
        "azimpur",
        "আজিমপুর"
      ]
    }
  ],
  "fareMatrix": [
    [
      0,
      10,
      15,
      18,
      23,
      31,
      37,
      42,
      47
    ],
    [
      10,
      0,
      10,
      10,
      14,
      22,
      28,
      33,
      38
    ],
    [
      15,
      10,
      0,
      10,
      10,
      16,
      22,
      27,
      32
    ],
    [
      18,
      10,
      10,
      0,
      10,
      13,
      20,
      25,
      30
    ],
    [
      23,
      14,
      10,
      10,
      0,
      10,
      14,
      19,
      24
    ],
    [
      31,
      22,
      16,
      13,
      10,
      0,
      10,
      11,
      16
    ],
    [
      37,
      28,
      22,
      20,
      14,
      10,
      0,
      10,
      10
    ],
    [
      42,
      33,
      27,
      25,
      19,
      11,
      10,
      0,
      10
    ],
    [
      47,
      38,
      32,
      30,
      24,
      16,
      10,
      10,
      0
    ]
  ]
},
{
  "id": "A354",
  "routeNo": "এ-৩৫৪",
  "nameBn": "আজিমপুর → নন্দন পার্ক",
  "nameEn": "Azimpur → Nandan Park",
  "totalKm": 35.5,
  "stops": [
    {
      "id": 0,
      "nameEn": "Azimpur",
      "nameBn": "আজিমপুর",
      "aliases": [
        "azimpur",
        "আজিমপুর"
      ]
    },
    {
      "id": 1,
      "nameEn": "Science Lab",
      "nameBn": "সায়েন্সল্যাব",
      "aliases": [
        "science lab",
        "সায়েন্সল্যাব"
      ]
    },
    {
      "id": 2,
      "nameEn": "Kalabagan",
      "nameBn": "কলাবাগান",
      "aliases": [
        "kalabagan",
        "কলাবাগান"
      ]
    },
    {
      "id": 3,
      "nameEn": "Asad Gate",
      "nameBn": "আসাদ গেট",
      "aliases": [
        "asad gate",
        "আসাদ গেট"
      ]
    },
    {
      "id": 4,
      "nameEn": "Shishu Mela",
      "nameBn": "শিশুমোলা",
      "aliases": [
        "shishu mela",
        "শিশুমোলা"
      ]
    },
    {
      "id": 5,
      "nameEn": "Kalyanpur",
      "nameBn": "কল্যাণপুর",
      "aliases": [
        "kalyanpur",
        "কল্যাণপুর"
      ]
    },
    {
      "id": 6,
      "nameEn": "Gabtoli",
      "nameBn": "গাবতলী",
      "aliases": [
        "gabtoli",
        "গাবতলী"
      ]
    },
    {
      "id": 7,
      "nameEn": "Amin Bazar",
      "nameBn": "আমিনবাজার",
      "aliases": [
        "amin bazar",
        "আমিনবাজার"
      ]
    },
    {
      "id": 8,
      "nameEn": "Hemayetpur",
      "nameBn": "হেমায়েতপুর",
      "aliases": [
        "hemayetpur",
        "হেমায়েতপুর"
      ]
    },
    {
      "id": 9,
      "nameEn": "Savar",
      "nameBn": "সাভার",
      "aliases": [
        "savar",
        "সাভার"
      ]
    },
    {
      "id": 10,
      "nameEn": "Nabinagar",
      "nameBn": "নবীনগর",
      "aliases": [
        "nabinagar",
        "নবীনগর"
      ]
    },
    {
      "id": 11,
      "nameEn": "Nandan Park",
      "nameBn": "নন্দন পার্ক",
      "aliases": [
        "nandan park",
        "নন্দন পার্ক",
        "নন্দন"
      ]
    }
  ],
  "fareMatrix": [
    [
      0,
      10,
      10,
      10,
      14,
      16,
      28,
      38,
      49,
      58,
      83,
      96
    ],
    [
      10,
      0,
      10,
      10,
      11,
      13,
      25,
      35,
      47,
      56,
      80,
      93
    ],
    [
      10,
      10,
      0,
      10,
      10,
      10,
      20,
      30,
      42,
      51,
      75,
      88
    ],
    [
      10,
      10,
      10,
      0,
      10,
      10,
      18,
      28,
      40,
      49,
      73,
      86
    ],
    [
      14,
      11,
      10,
      10,
      0,
      10,
      14,
      24,
      35,
      45,
      69,
      82
    ],
    [
      16,
      13,
      10,
      10,
      10,
      0,
      12,
      22,
      33,
      43,
      67,
      80
    ],
    [
      28,
      25,
      20,
      18,
      14,
      12,
      0,
      10,
      21,
      31,
      55,
      68
    ],
    [
      38,
      35,
      30,
      28,
      24,
      22,
      10,
      0,
      12,
      21,
      45,
      58
    ],
    [
      49,
      47,
      42,
      40,
      35,
      33,
      21,
      12,
      0,
      10,
      33,
      47
    ],
    [
      58,
      56,
      51,
      49,
      45,
      43,
      31,
      21,
      10,
      0,
      24,
      38
    ],
    [
      83,
      80,
      75,
      73,
      69,
      67,
      55,
      45,
      33,
      24,
      0,
      13
    ],
    [
      96,
      93,
      88,
      86,
      82,
      80,
      68,
      58,
      47,
      38,
      13,
      0
    ]
  ]
},
{
  "id": "A346",
  "routeNo": "এ-৩৪৬",
  "nameBn": "কামারপাড়া → নটরডেম কলেজ",
  "nameEn": "Kamarpara → Notre Dame College",
  "totalKm": 25,
  "stops": [
    {
      "id": 0,
      "nameEn": "Kamarpara",
      "nameBn": "কামারপাড়া",
      "aliases": [
        "kamarpara",
        "কামারপাড়া"
      ]
    },
    {
      "id": 1,
      "nameEn": "Abdullahpur",
      "nameBn": "আব্দুল্লাহপুর",
      "aliases": [
        "abdullahpur",
        "আব্দুল্লাহপুর"
      ]
    },
    {
      "id": 2,
      "nameEn": "Airport",
      "nameBn": "এয়ারপোর্ট",
      "aliases": [
        "airport",
        "এয়ারপোর্ট"
      ]
    },
    {
      "id": 3,
      "nameEn": "Kakoli",
      "nameBn": "কাকলী",
      "aliases": [
        "kakoli",
        "কাকলী"
      ]
    },
    {
      "id": 4,
      "nameEn": "Mohakhali",
      "nameBn": "মহাখালী",
      "aliases": [
        "mohakhali",
        "মহাখালী"
      ]
    },
    {
      "id": 5,
      "nameEn": "Moghbazar",
      "nameBn": "মগবাজার",
      "aliases": [
        "moghbazar",
        "মগবাজার"
      ]
    },
    {
      "id": 6,
      "nameEn": "Kakrail",
      "nameBn": "কাকরাইল",
      "aliases": [
        "kakrail",
        "কাকরাইল"
      ]
    },
    {
      "id": 7,
      "nameEn": "Paltan",
      "nameBn": "পল্টন",
      "aliases": [
        "paltan",
        "পল্টন"
      ]
    },
    {
      "id": 8,
      "nameEn": "Notre Dame College",
      "nameBn": "নটরডেম কলেজ",
      "aliases": [
        "notre dame college",
        "নটরডেম কলেজ",
        "নটরডেম"
      ]
    }
  ],
  "fareMatrix": [
    [
      0,
      10,
      15,
      33,
      37,
      51,
      57,
      61,
      68
    ],
    [
      10,
      0,
      10,
      27,
      31,
      45,
      51,
      55,
      62
    ],
    [
      15,
      10,
      0,
      18,
      22,
      36,
      42,
      46,
      52
    ],
    [
      33,
      27,
      18,
      0,
      10,
      18,
      24,
      28,
      35
    ],
    [
      37,
      31,
      22,
      10,
      0,
      14,
      20,
      24,
      31
    ],
    [
      51,
      45,
      36,
      18,
      14,
      0,
      10,
      10,
      16
    ],
    [
      57,
      51,
      42,
      24,
      20,
      10,
      0,
      10,
      11
    ],
    [
      61,
      55,
      46,
      28,
      24,
      10,
      10,
      0,
      10
    ],
    [
      68,
      62,
      52,
      35,
      31,
      16,
      11,
      10,
      0
    ]
  ]
},
{
  "id": "A356",
  "routeNo": "এ-৩৫৬",
  "nameBn": "আজিমপুর → ধউর",
  "nameEn": "Azimpur → Dhaur",
  "totalKm": 29.9,
  "stops": [
    {
      "id": 0,
      "nameEn": "Azimpur",
      "nameBn": "আজিমপুর",
      "aliases": [
        "azimpur",
        "আজিমপুর"
      ]
    },
    {
      "id": 1,
      "nameEn": "New Market",
      "nameBn": "নিউ মার্কেট",
      "aliases": [
        "new market",
        "নিউ মার্কেট"
      ]
    },
    {
      "id": 2,
      "nameEn": "Kalabagan",
      "nameBn": "কলাবাগান",
      "aliases": [
        "kalabagan",
        "কলাবাগান"
      ]
    },
    {
      "id": 3,
      "nameEn": "Asad Gate",
      "nameBn": "আসাদগেট",
      "aliases": [
        "asad gate",
        "আসাদগেট"
      ]
    },
    {
      "id": 4,
      "nameEn": "Shyamoli",
      "nameBn": "শ্যামলী",
      "aliases": [
        "shyamoli",
        "শ্যামলী"
      ]
    },
    {
      "id": 5,
      "nameEn": "Technical",
      "nameBn": "টেকনিক্যাল",
      "aliases": [
        "technical",
        "টেকনিক্যাল"
      ]
    },
    {
      "id": 6,
      "nameEn": "Mirpur-1",
      "nameBn": "মিরপুর-১",
      "aliases": [
        "mirpur-1",
        "মিরপুর-১"
      ]
    },
    {
      "id": 7,
      "nameEn": "Original 10",
      "nameBn": "অরিজিনাল দশ",
      "aliases": [
        "original 10",
        "অরিজিনাল দশ",
        "original-10"
      ]
    },
    {
      "id": 8,
      "nameEn": "Mirpur-12",
      "nameBn": "মিরপুর-১২",
      "aliases": [
        "mirpur-12",
        "মিরপুর-১২"
      ]
    },
    {
      "id": 9,
      "nameEn": "Kalshi",
      "nameBn": "কালশি",
      "aliases": [
        "kalshi",
        "কালশি"
      ]
    },
    {
      "id": 10,
      "nameEn": "Kurmitola General Hospital",
      "nameBn": "কুর্মিটোলা জেনারেল হাসপাতাল",
      "aliases": [
        "kurmitola general hospital",
        "কুর্মিটোলা জেনারেল হাসপাতাল",
        "kurmitola hospital",
        "কুর্মিটোলা"
      ]
    },
    {
      "id": 11,
      "nameEn": "Airport",
      "nameBn": "এয়ারপোর্ট",
      "aliases": [
        "airport",
        "এয়ারপোর্ট"
      ]
    },
    {
      "id": 12,
      "nameEn": "Abdullahpur",
      "nameBn": "আব্দুল্লাহপুর",
      "aliases": [
        "abdullahpur",
        "আব্দুল্লাহপুর"
      ]
    },
    {
      "id": 13,
      "nameEn": "Kamarpara",
      "nameBn": "কামারপাড়া",
      "aliases": [
        "kamarpara",
        "কামারপাড়া"
      ]
    },
    {
      "id": 14,
      "nameEn": "Dhaur",
      "nameBn": "ধউর",
      "aliases": [
        "dhaur",
        "ধউর"
      ]
    }
  ],
  "fareMatrix": [
    [
      0,
      10,
      10,
      11,
      15,
      20,
      25,
      32,
      38,
      43,
      48,
      62,
      67,
      73,
      81
    ],
    [
      10,
      0,
      10,
      10,
      13,
      18,
      23,
      30,
      35,
      41,
      46,
      59,
      65,
      70,
      79
    ],
    [
      10,
      10,
      0,
      10,
      10,
      12,
      18,
      24,
      30,
      35,
      41,
      54,
      59,
      65,
      73
    ],
    [
      11,
      10,
      10,
      0,
      10,
      10,
      14,
      21,
      26,
      32,
      37,
      50,
      56,
      62,
      70
    ],
    [
      15,
      13,
      10,
      10,
      0,
      10,
      10,
      17,
      22,
      28,
      33,
      46,
      52,
      58,
      66
    ],
    [
      20,
      18,
      12,
      10,
      10,
      0,
      10,
      12,
      18,
      23,
      28,
      42,
      47,
      53,
      61
    ],
    [
      25,
      23,
      18,
      14,
      10,
      10,
      0,
      10,
      12,
      18,
      23,
      36,
      42,
      47,
      55
    ],
    [
      32,
      30,
      24,
      21,
      17,
      12,
      10,
      0,
      10,
      11,
      16,
      29,
      35,
      41,
      49
    ],
    [
      38,
      35,
      30,
      26,
      22,
      18,
      12,
      10,
      0,
      10,
      11,
      24,
      29,
      35,
      43
    ],
    [
      43,
      41,
      35,
      32,
      28,
      23,
      18,
      11,
      10,
      0,
      10,
      19,
      24,
      30,
      38
    ],
    [
      48,
      46,
      41,
      37,
      33,
      28,
      23,
      16,
      11,
      10,
      0,
      13,
      19,
      24,
      32
    ],
    [
      62,
      59,
      54,
      50,
      46,
      42,
      36,
      29,
      24,
      19,
      13,
      0,
      10,
      11,
      19
    ],
    [
      67,
      65,
      59,
      56,
      52,
      47,
      42,
      35,
      29,
      24,
      19,
      10,
      0,
      10,
      14
    ],
    [
      73,
      70,
      65,
      62,
      58,
      53,
      47,
      41,
      35,
      30,
      24,
      11,
      10,
      0,
      10
    ],
    [
      81,
      79,
      73,
      70,
      66,
      61,
      55,
      49,
      43,
      38,
      32,
      19,
      14,
      10,
      0
    ]
  ]
},
{
  "id": "A362",
  "routeNo": "এ-৩৬২",
  "nameBn": "ধউর → মদনপুর",
  "nameEn": "Dhaur → Madanpur",
  "totalKm": 38.5,
  "stops": [
    {
      "id": 0,
      "nameEn": "Dhaur",
      "nameBn": "ধউর",
      "aliases": [
        "dhaur",
        "ধউর"
      ]
    },
    {
      "id": 1,
      "nameEn": "Abdullahpur",
      "nameBn": "আব্দুল্লাহপুর",
      "aliases": [
        "abdullahpur",
        "আব্দুল্লাহপুর"
      ]
    },
    {
      "id": 2,
      "nameEn": "Airport",
      "nameBn": "এয়ারপোর্ট",
      "aliases": [
        "airport",
        "এয়ারপোর্ট"
      ]
    },
    {
      "id": 3,
      "nameEn": "Kuril",
      "nameBn": "কুড়িল",
      "aliases": [
        "kuril",
        "কুড়িল"
      ]
    },
    {
      "id": 4,
      "nameEn": "Badda",
      "nameBn": "বাড্ডা",
      "aliases": [
        "badda",
        "বাড্ডা"
      ]
    },
    {
      "id": 5,
      "nameEn": "Rampura Bridge",
      "nameBn": "রামপুরা ব্রীজ",
      "aliases": [
        "rampura bridge",
        "রামপুরা ব্রীজ"
      ]
    },
    {
      "id": 6,
      "nameEn": "Meradia Bazar",
      "nameBn": "মেরাদিয়া বাজার",
      "aliases": [
        "meradia bazar",
        "মেরাদিয়া বাজার"
      ]
    },
    {
      "id": 7,
      "nameEn": "Staff Quarter",
      "nameBn": "স্টাফ কোয়ার্টার",
      "aliases": [
        "staff quarter",
        "স্টাফ কোয়ার্টার"
      ]
    },
    {
      "id": 8,
      "nameEn": "Sultana Kamal Bridge",
      "nameBn": "সুলতানা কামাল ব্রীজ",
      "aliases": [
        "sultana kamal bridge",
        "সুলতানা কামাল ব্রীজ"
      ]
    },
    {
      "id": 9,
      "nameEn": "Tarabo Bishwaroad",
      "nameBn": "তারাবো বিশ্বরোড",
      "aliases": [
        "tarabo bishwaroad",
        "তারাবো বিশ্বরোড",
        "tarabo"
      ]
    },
    {
      "id": 10,
      "nameEn": "Kanchpur",
      "nameBn": "কাঁচপুর",
      "aliases": [
        "kanchpur",
        "কাঁচপুর"
      ]
    },
    {
      "id": 11,
      "nameEn": "Madanpur",
      "nameBn": "মদনপুর",
      "aliases": [
        "madanpur",
        "মদনপুর"
      ]
    }
  ],
  "fareMatrix": [
    [
      0,
      14,
      23,
      33,
      46,
      51,
      59,
      77,
      82,
      88,
      95,
      104
    ],
    [
      14,
      0,
      10,
      20,
      32,
      38,
      46,
      63,
      69,
      74,
      81,
      90
    ],
    [
      23,
      10,
      0,
      10,
      23,
      28,
      36,
      54,
      59,
      65,
      71,
      81
    ],
    [
      33,
      20,
      10,
      0,
      12,
      18,
      26,
      43,
      49,
      54,
      61,
      70
    ],
    [
      46,
      32,
      23,
      12,
      0,
      10,
      14,
      31,
      36,
      42,
      49,
      58
    ],
    [
      51,
      38,
      28,
      18,
      10,
      0,
      10,
      26,
      31,
      36,
      43,
      53
    ],
    [
      59,
      46,
      36,
      26,
      14,
      10,
      0,
      18,
      23,
      28,
      35,
      45
    ],
    [
      77,
      63,
      54,
      43,
      31,
      26,
      18,
      0,
      10,
      11,
      18,
      27
    ],
    [
      82,
      69,
      59,
      49,
      36,
      31,
      23,
      10,
      0,
      10,
      12,
      22
    ],
    [
      88,
      74,
      65,
      54,
      42,
      36,
      28,
      11,
      10,
      0,
      10,
      16
    ],
    [
      95,
      81,
      71,
      61,
      49,
      43,
      35,
      18,
      12,
      10,
      0,
      10
    ],
    [
      104,
      90,
      81,
      70,
      58,
      53,
      45,
      27,
      22,
      16,
      10,
      0
    ]
  ]
},
{
  "id": "A365",
  "routeNo": "এ-৩৬৫",
  "nameBn": "নবীনগর → ধউর",
  "nameEn": "Nabinagar → Dhaur",
  "totalKm": 45.2,
  "stops": [
    {
      "id": 0,
      "nameEn": "Nabinagar",
      "nameBn": "নবীনগর",
      "aliases": [
        "nabinagar",
        "নবীনগর"
      ]
    },
    {
      "id": 1,
      "nameEn": "Savar",
      "nameBn": "সাভার",
      "aliases": [
        "savar",
        "সাভার"
      ]
    },
    {
      "id": 2,
      "nameEn": "Gabtoli",
      "nameBn": "গাবতলী",
      "aliases": [
        "gabtoli",
        "গাবতলী"
      ]
    },
    {
      "id": 3,
      "nameEn": "Mirpur-1",
      "nameBn": "মিরপুর-১",
      "aliases": [
        "mirpur-1",
        "মিরপুর-১"
      ]
    },
    {
      "id": 4,
      "nameEn": "Sony Mor",
      "nameBn": "সনি মোড়",
      "aliases": [
        "sony mor",
        "সনি মোড়"
      ]
    },
    {
      "id": 5,
      "nameEn": "Original-10",
      "nameBn": "অরিজিনাল-১০",
      "aliases": [
        "original-10",
        "অরিজিনাল-১০",
        "original 10"
      ]
    },
    {
      "id": 6,
      "nameEn": "Kalshi",
      "nameBn": "কালশি",
      "aliases": [
        "kalshi",
        "কালশি"
      ]
    },
    {
      "id": 7,
      "nameEn": "ECB Chattar Flyover",
      "nameBn": "ইসিবি চত্বর ফ্লাইওভার",
      "aliases": [
        "ecb chattar flyover",
        "ইসিবি চত্বর ফ্লাইওভার",
        "ecb chattar"
      ]
    },
    {
      "id": 8,
      "nameEn": "Matikata",
      "nameBn": "মাটিকাটা",
      "aliases": [
        "matikata",
        "মাটিকাটা"
      ]
    },
    {
      "id": 9,
      "nameEn": "Airport",
      "nameBn": "এয়ারপোর্ট",
      "aliases": [
        "airport",
        "এয়ারপোর্ট"
      ]
    },
    {
      "id": 10,
      "nameEn": "Abdullahpur",
      "nameBn": "আব্দুল্লাহপুর",
      "aliases": [
        "abdullahpur",
        "আব্দুল্লাহপুর"
      ]
    },
    {
      "id": 11,
      "nameEn": "Kamarpara",
      "nameBn": "কামারপাড়া",
      "aliases": [
        "kamarpara",
        "কামারপাড়া"
      ]
    },
    {
      "id": 12,
      "nameEn": "Dhaur",
      "nameBn": "ধউর",
      "aliases": [
        "dhaur",
        "ধউর"
      ]
    }
  ],
  "fareMatrix": [
    [
      0,
      22,
      58,
      63,
      67,
      70,
      80,
      81,
      88,
      99,
      108,
      114,
      122
    ],
    [
      22,
      0,
      36,
      42,
      45,
      48,
      59,
      60,
      67,
      77,
      87,
      92,
      100
    ],
    [
      58,
      36,
      0,
      10,
      10,
      12,
      22,
      23,
      30,
      41,
      50,
      56,
      64
    ],
    [
      63,
      42,
      10,
      0,
      10,
      10,
      17,
      18,
      25,
      35,
      45,
      50,
      59
    ],
    [
      67,
      45,
      10,
      10,
      0,
      10,
      13,
      14,
      21,
      32,
      41,
      47,
      55
    ],
    [
      70,
      48,
      12,
      10,
      10,
      0,
      10,
      12,
      19,
      29,
      39,
      44,
      52
    ],
    [
      80,
      59,
      22,
      17,
      13,
      10,
      0,
      10,
      10,
      19,
      28,
      34,
      42
    ],
    [
      81,
      60,
      23,
      18,
      14,
      12,
      10,
      0,
      10,
      18,
      27,
      33,
      41
    ],
    [
      88,
      67,
      30,
      25,
      21,
      19,
      10,
      10,
      0,
      10,
      20,
      26,
      34
    ],
    [
      99,
      77,
      41,
      35,
      32,
      29,
      19,
      18,
      10,
      0,
      10,
      15,
      23
    ],
    [
      108,
      87,
      50,
      45,
      41,
      39,
      28,
      27,
      20,
      10,
      0,
      10,
      14
    ],
    [
      114,
      92,
      56,
      50,
      47,
      44,
      34,
      33,
      26,
      15,
      10,
      0,
      10
    ],
    [
      122,
      100,
      64,
      59,
      55,
      52,
      42,
      41,
      34,
      23,
      14,
      10,
      0
    ]
  ]
},
{
  "id": "A366",
  "routeNo": "এ-৩৬৬",
  "nameBn": "বসিলা → ধউর",
  "nameEn": "Bosila → Dhaur",
  "totalKm": 32.4,
  "stops": [
    {
      "id": 0,
      "nameEn": "Bosila",
      "nameBn": "বসিলা",
      "aliases": [
        "bosila",
        "বসিলা",
        "bosila bridge",
        "basila",
        "বছিলা"
      ]
    },
    {
      "id": 1,
      "nameEn": "Asad Avenue",
      "nameBn": "আসাদ এভিনিউ",
      "aliases": [
        "asad avenue",
        "আসাদ এভিনিউ"
      ]
    },
    {
      "id": 2,
      "nameEn": "Shyamoli",
      "nameBn": "শ্যামলী",
      "aliases": [
        "shyamoli",
        "শ্যামলী"
      ]
    },
    {
      "id": 3,
      "nameEn": "Kalyanpur",
      "nameBn": "কল্যাণপুর",
      "aliases": [
        "kalyanpur",
        "কল্যাণপুর"
      ]
    },
    {
      "id": 4,
      "nameEn": "Technical",
      "nameBn": "টেকনিক্যাল",
      "aliases": [
        "technical",
        "টেকনিক্যাল"
      ]
    },
    {
      "id": 5,
      "nameEn": "Mirpur-1",
      "nameBn": "মিরপুর-১",
      "aliases": [
        "mirpur-1",
        "মিরপুর-১"
      ]
    },
    {
      "id": 6,
      "nameEn": "Mirpur-2",
      "nameBn": "মিরপুর-২",
      "aliases": [
        "mirpur-2",
        "মিরপুর-২"
      ]
    },
    {
      "id": 7,
      "nameEn": "Mirpur-10",
      "nameBn": "মিরপুর-১০",
      "aliases": [
        "mirpur-10",
        "মিরপুর-১০"
      ]
    },
    {
      "id": 8,
      "nameEn": "Mirpur-11",
      "nameBn": "মিরপুর-১১",
      "aliases": [
        "mirpur-11",
        "মিরপুর-১১"
      ]
    },
    {
      "id": 9,
      "nameEn": "Purobi",
      "nameBn": "পূরবী",
      "aliases": [
        "purobi",
        "পূরবী"
      ]
    },
    {
      "id": 10,
      "nameEn": "Kalshi",
      "nameBn": "কালশী",
      "aliases": [
        "kalshi",
        "কালশী"
      ]
    },
    {
      "id": 11,
      "nameEn": "Shewra Bazar",
      "nameBn": "শেওড়া বাজার",
      "aliases": [
        "shewra bazar",
        "শেওড়া বাজার"
      ]
    },
    {
      "id": 12,
      "nameEn": "Airport",
      "nameBn": "এয়ারপোর্ট",
      "aliases": [
        "airport",
        "এয়ারপোর্ট"
      ]
    },
    {
      "id": 13,
      "nameEn": "Uttara",
      "nameBn": "উত্তরা",
      "aliases": [
        "uttara",
        "উত্তরা"
      ]
    },
    {
      "id": 14,
      "nameEn": "Abdullahpur",
      "nameBn": "আব্দুল্লাহপুর",
      "aliases": [
        "abdullahpur",
        "আব্দুল্লাহপুর"
      ]
    },
    {
      "id": 15,
      "nameEn": "Dhaur",
      "nameBn": "ধউর",
      "aliases": [
        "dhaur",
        "ধউর"
      ]
    }
  ],
  "fareMatrix": [
    [
      0,
      10,
      13,
      14,
      16,
      23,
      26,
      28,
      31,
      32,
      41,
      52,
      63,
      67,
      74,
      87
    ],
    [
      10,
      0,
      10,
      10,
      10,
      15,
      18,
      20,
      22,
      24,
      32,
      44,
      55,
      59,
      66,
      79
    ],
    [
      13,
      10,
      0,
      10,
      10,
      10,
      14,
      15,
      18,
      19,
      28,
      39,
      50,
      54,
      61,
      75
    ],
    [
      14,
      10,
      10,
      0,
      10,
      10,
      13,
      14,
      17,
      18,
      27,
      39,
      49,
      53,
      60,
      74
    ],
    [
      16,
      10,
      10,
      10,
      0,
      10,
      10,
      11,
      14,
      16,
      24,
      36,
      47,
      50,
      57,
      71
    ],
    [
      23,
      15,
      10,
      10,
      10,
      0,
      10,
      10,
      10,
      10,
      18,
      29,
      40,
      44,
      51,
      65
    ],
    [
      26,
      18,
      14,
      13,
      10,
      10,
      0,
      10,
      10,
      10,
      14,
      26,
      37,
      40,
      47,
      61
    ],
    [
      28,
      20,
      15,
      14,
      11,
      10,
      10,
      0,
      10,
      10,
      13,
      25,
      35,
      39,
      46,
      60
    ],
    [
      31,
      22,
      18,
      17,
      14,
      10,
      10,
      10,
      0,
      10,
      10,
      22,
      33,
      36,
      43,
      57
    ],
    [
      32,
      24,
      19,
      18,
      16,
      10,
      10,
      10,
      10,
      0,
      10,
      21,
      31,
      35,
      42,
      56
    ],
    [
      41,
      32,
      28,
      27,
      24,
      18,
      14,
      13,
      10,
      10,
      0,
      12,
      23,
      26,
      33,
      47
    ],
    [
      52,
      44,
      39,
      39,
      36,
      29,
      26,
      25,
      22,
      21,
      12,
      0,
      11,
      14,
      21,
      35
    ],
    [
      63,
      55,
      50,
      49,
      47,
      40,
      37,
      35,
      33,
      31,
      23,
      11,
      0,
      10,
      11,
      24
    ],
    [
      67,
      59,
      54,
      53,
      50,
      44,
      40,
      39,
      36,
      35,
      26,
      14,
      10,
      0,
      10,
      21
    ],
    [
      74,
      66,
      61,
      60,
      57,
      51,
      47,
      46,
      43,
      42,
      33,
      21,
      11,
      10,
      0,
      14
    ],
    [
      87,
      79,
      75,
      74,
      71,
      65,
      61,
      60,
      57,
      56,
      47,
      35,
      24,
      21,
      14,
      0
    ]
  ]
},
{
  "id": "A367",
  "routeNo": "এ-৩৬৭",
  "nameBn": "ভাষানটেক → নন্দনপার্ক",
  "nameEn": "Bhashantek → Nandan Park",
  "totalKm": 44.8,
  "stops": [
    {
      "id": 0,
      "nameEn": "Bhashantek",
      "nameBn": "ভাষানটেক",
      "aliases": [
        "bhashantek",
        "ভাষানটেক"
      ]
    },
    {
      "id": 1,
      "nameEn": "Mirpur-14",
      "nameBn": "মিরপুর-১৪",
      "aliases": [
        "mirpur-14",
        "মিরপুর-১৪"
      ]
    },
    {
      "id": 2,
      "nameEn": "Mirpur-10",
      "nameBn": "মিরপুর-১০",
      "aliases": [
        "mirpur-10",
        "মিরপুর-১০"
      ]
    },
    {
      "id": 3,
      "nameEn": "Mirpur-1",
      "nameBn": "মিরপুর-১",
      "aliases": [
        "mirpur-1",
        "মিরপুর-১"
      ]
    },
    {
      "id": 4,
      "nameEn": "Technical",
      "nameBn": "টেকনিক্যাল",
      "aliases": [
        "technical",
        "টেকনিক্যাল"
      ]
    },
    {
      "id": 5,
      "nameEn": "Gabtoli",
      "nameBn": "গাবতলী",
      "aliases": [
        "gabtoli",
        "গাবতলী"
      ]
    },
    {
      "id": 6,
      "nameEn": "Hemayetpur",
      "nameBn": "হেমায়েতপুর",
      "aliases": [
        "hemayetpur",
        "হেমায়েতপুর"
      ]
    },
    {
      "id": 7,
      "nameEn": "Savar",
      "nameBn": "সাভার",
      "aliases": [
        "savar",
        "সাভার"
      ]
    },
    {
      "id": 8,
      "nameEn": "Nabinagar",
      "nameBn": "নবীনগর",
      "aliases": [
        "nabinagar",
        "নবীনগর"
      ]
    },
    {
      "id": 9,
      "nameEn": "EPZ",
      "nameBn": "ইপিজেড",
      "aliases": [
        "epz",
        "ইপিজেড"
      ]
    },
    {
      "id": 10,
      "nameEn": "Nandan Park",
      "nameBn": "নন্দনপার্ক",
      "aliases": [
        "nandan park",
        "নন্দনপার্ক",
        "nandan"
      ]
    }
  ],
  "fareMatrix": [
    [
      0,
      10,
      10,
      16,
      21,
      24,
      43,
      61,
      83,
      96,
      121
    ],
    [
      10,
      0,
      10,
      11,
      16,
      19,
      39,
      56,
      78,
      91,
      116
    ],
    [
      10,
      10,
      0,
      10,
      10,
      13,
      33,
      50,
      72,
      85,
      110
    ],
    [
      16,
      11,
      10,
      0,
      10,
      10,
      28,
      46,
      67,
      80,
      105
    ],
    [
      21,
      16,
      10,
      10,
      0,
      10,
      23,
      41,
      62,
      75,
      100
    ],
    [
      24,
      19,
      13,
      10,
      10,
      0,
      19,
      37,
      59,
      72,
      97
    ],
    [
      43,
      39,
      33,
      28,
      23,
      19,
      0,
      18,
      39,
      52,
      77
    ],
    [
      61,
      56,
      50,
      46,
      41,
      37,
      18,
      0,
      22,
      34,
      60
    ],
    [
      83,
      78,
      72,
      67,
      62,
      59,
      39,
      22,
      0,
      13,
      38
    ],
    [
      96,
      91,
      85,
      80,
      75,
      72,
      52,
      34,
      13,
      0,
      25
    ],
    [
      121,
      116,
      110,
      105,
      100,
      97,
      77,
      60,
      38,
      25,
      0
    ]
  ]
},
{
  "id": "A368",
  "routeNo": "এ-৩৬৮",
  "nameBn": "সাইনবোর্ড → ফ্যান্টাসী কিংডম",
  "nameEn": "Signboard → Fantasy Kingdom",
  "totalKm": 46.3,
  "stops": [
    {
      "id": 0,
      "nameEn": "Signboard",
      "nameBn": "সাইনবোর্ড",
      "aliases": [
        "signboard",
        "সাইনবোর্ড"
      ]
    },
    {
      "id": 1,
      "nameEn": "Jatrabari",
      "nameBn": "যাত্রাবাড়ী",
      "aliases": [
        "jatrabari",
        "যাত্রাবাড়ী"
      ]
    },
    {
      "id": 2,
      "nameEn": "Gulistan",
      "nameBn": "গুলিস্তান",
      "aliases": [
        "gulistan",
        "গুলিস্তান",
        "বঙ্গবন্ধু স্কোয়ার",
        "bangabandhu square"
      ]
    },
    {
      "id": 3,
      "nameEn": "Paltan",
      "nameBn": "পল্টন",
      "aliases": [
        "paltan",
        "পল্টন"
      ]
    },
    {
      "id": 4,
      "nameEn": "Bijoy Nagar",
      "nameBn": "বিজয় নগর",
      "aliases": [
        "bijoy nagar",
        "বিজয় নগর"
      ]
    },
    {
      "id": 5,
      "nameEn": "Kakrail",
      "nameBn": "কাকরাইল",
      "aliases": [
        "kakrail",
        "কাকরাইল"
      ]
    },
    {
      "id": 6,
      "nameEn": "Mouchak",
      "nameBn": "মৌচাক",
      "aliases": [
        "mouchak",
        "মৌচাক"
      ]
    },
    {
      "id": 7,
      "nameEn": "Moghbazar",
      "nameBn": "মগবাজার",
      "aliases": [
        "moghbazar",
        "মগবাজার"
      ]
    },
    {
      "id": 8,
      "nameEn": "Satrasta",
      "nameBn": "সাতরাস্তা",
      "aliases": [
        "satrasta",
        "সাতরাস্তা"
      ]
    },
    {
      "id": 9,
      "nameEn": "Mohakhali",
      "nameBn": "মহাখালী",
      "aliases": [
        "mohakhali",
        "মহাখালী"
      ]
    },
    {
      "id": 10,
      "nameEn": "Banani",
      "nameBn": "বনানী",
      "aliases": [
        "banani",
        "বনানী"
      ]
    },
    {
      "id": 11,
      "nameEn": "Shewra",
      "nameBn": "শেওড়া",
      "aliases": [
        "shewra",
        "শেওড়া"
      ]
    },
    {
      "id": 12,
      "nameEn": "Khilkhet",
      "nameBn": "খিলক্ষেত",
      "aliases": [
        "khilkhet",
        "খিলক্ষেত"
      ]
    },
    {
      "id": 13,
      "nameEn": "Airport",
      "nameBn": "এয়ারপোর্ট",
      "aliases": [
        "airport",
        "এয়ারপোর্ট"
      ]
    },
    {
      "id": 14,
      "nameEn": "House Building",
      "nameBn": "হাউজ বিল্ডিং",
      "aliases": [
        "house building",
        "হাউজ বিল্ডিং"
      ]
    },
    {
      "id": 15,
      "nameEn": "Abdullahpur",
      "nameBn": "আব্দুল্লাহপুর",
      "aliases": [
        "abdullahpur",
        "আব্দুল্লাহপুর"
      ]
    },
    {
      "id": 16,
      "nameEn": "Kamarpara",
      "nameBn": "কামারপাড়া",
      "aliases": [
        "kamarpara",
        "কামারপাড়া"
      ]
    },
    {
      "id": 17,
      "nameEn": "Fantasy Kingdom",
      "nameBn": "ফ্যান্টাসী কিংডম",
      "aliases": [
        "fantasy kingdom",
        "ফ্যান্টাসী কিংডম"
      ]
    }
  ],
  "fareMatrix": [
    [
      0,
      14,
      21,
      24,
      26,
      28,
      31,
      34,
      37,
      45,
      51,
      60,
      64,
      71,
      82,
      85,
      91,
      125
    ],
    [
      14,
      0,
      10,
      10,
      12,
      14,
      17,
      21,
      23,
      32,
      37,
      46,
      50,
      58,
      69,
      72,
      78,
      112
    ],
    [
      21,
      10,
      0,
      10,
      10,
      10,
      10,
      14,
      16,
      25,
      30,
      39,
      43,
      50,
      62,
      65,
      70,
      104
    ],
    [
      24,
      10,
      10,
      0,
      10,
      10,
      10,
      10,
      13,
      21,
      27,
      36,
      40,
      47,
      58,
      61,
      67,
      101
    ],
    [
      26,
      12,
      10,
      10,
      0,
      10,
      10,
      10,
      11,
      20,
      25,
      34,
      38,
      46,
      57,
      60,
      66,
      99
    ],
    [
      28,
      14,
      10,
      10,
      10,
      0,
      10,
      10,
      10,
      18,
      23,
      32,
      36,
      43,
      55,
      58,
      63,
      97
    ],
    [
      31,
      17,
      10,
      10,
      10,
      10,
      0,
      10,
      10,
      15,
      20,
      29,
      33,
      41,
      52,
      55,
      61,
      94
    ],
    [
      34,
      21,
      14,
      10,
      10,
      10,
      10,
      0,
      10,
      11,
      16,
      25,
      30,
      37,
      48,
      51,
      56,
      91
    ],
    [
      37,
      23,
      16,
      13,
      11,
      10,
      10,
      10,
      0,
      10,
      14,
      23,
      27,
      34,
      45,
      48,
      54,
      88
    ],
    [
      45,
      32,
      25,
      21,
      20,
      18,
      15,
      11,
      10,
      0,
      10,
      14,
      19,
      26,
      37,
      40,
      46,
      80
    ],
    [
      51,
      37,
      30,
      27,
      25,
      23,
      20,
      16,
      14,
      10,
      0,
      10,
      13,
      21,
      32,
      35,
      41,
      74
    ],
    [
      60,
      46,
      39,
      36,
      34,
      32,
      29,
      25,
      23,
      14,
      10,
      0,
      10,
      12,
      23,
      26,
      31,
      65
    ],
    [
      64,
      50,
      43,
      40,
      38,
      36,
      33,
      30,
      27,
      19,
      13,
      10,
      0,
      10,
      18,
      21,
      27,
      61
    ],
    [
      71,
      58,
      50,
      47,
      46,
      43,
      41,
      37,
      34,
      26,
      21,
      12,
      10,
      0,
      11,
      14,
      20,
      54
    ],
    [
      82,
      69,
      62,
      58,
      57,
      55,
      52,
      48,
      45,
      37,
      32,
      23,
      18,
      11,
      0,
      10,
      10,
      43
    ],
    [
      85,
      72,
      65,
      61,
      60,
      58,
      55,
      51,
      48,
      40,
      35,
      26,
      21,
      14,
      10,
      0,
      10,
      40
    ],
    [
      91,
      78,
      70,
      67,
      66,
      63,
      61,
      56,
      54,
      46,
      41,
      31,
      27,
      20,
      10,
      10,
      0,
      34
    ],
    [
      125,
      112,
      104,
      101,
      99,
      97,
      94,
      91,
      88,
      80,
      74,
      65,
      61,
      54,
      43,
      40,
      34,
      0
    ]
  ]
},
{
  "id": "A377",
  "routeNo": "এ-৩৭৭",
  "nameBn": "ডেমরা ব্রীজ → নবীনগর",
  "nameEn": "Demra Bridge → Nabinagar",
  "totalKm": 46.9,
  "stops": [
    {
      "id": 0,
      "nameEn": "Demra Bridge",
      "nameBn": "ডেমরা ব্রীজ",
      "aliases": [
        "demra bridge",
        "ডেমরা ব্রীজ"
      ]
    },
    {
      "id": 1,
      "nameEn": "Demra Staff Quarter",
      "nameBn": "ডেমরা স্টাফ কোয়ার্টার",
      "aliases": [
        "demra staff quarter",
        "ডেমরা স্টাফ কোয়ার্টার",
        "স্টাফ কোয়ার্টার"
      ]
    },
    {
      "id": 2,
      "nameEn": "Meradia",
      "nameBn": "মেরাদিয়া (নতুন রাস্তা)",
      "aliases": [
        "meradia",
        "মেরাদিয়া",
        "মেরাদিয়া (নতুন রাস্তা)"
      ]
    },
    {
      "id": 3,
      "nameEn": "Rampura Banasree",
      "nameBn": "রামপুরা (বনশ্রী)",
      "aliases": [
        "rampura banasree",
        "রামপুরা (বনশ্রী)",
        "বনশ্রী"
      ]
    },
    {
      "id": 4,
      "nameEn": "Badda",
      "nameBn": "বাড্ডা",
      "aliases": [
        "badda",
        "বাড্ডা"
      ]
    },
    {
      "id": 5,
      "nameEn": "Kuril",
      "nameBn": "কুড়িল",
      "aliases": [
        "kuril",
        "কুড়িল"
      ]
    },
    {
      "id": 6,
      "nameEn": "Khilkhet",
      "nameBn": "খিলক্ষেত",
      "aliases": [
        "khilkhet",
        "খিলক্ষেত"
      ]
    },
    {
      "id": 7,
      "nameEn": "Airport",
      "nameBn": "এয়ারপোর্ট",
      "aliases": [
        "airport",
        "এয়ারপোর্ট"
      ]
    },
    {
      "id": 8,
      "nameEn": "House Building",
      "nameBn": "হাউজ বিল্ডিং",
      "aliases": [
        "house building",
        "হাউজ বিল্ডিং"
      ]
    },
    {
      "id": 9,
      "nameEn": "Abdullahpur",
      "nameBn": "আব্দুল্লাহপুর",
      "aliases": [
        "abdullahpur",
        "আব্দুল্লাহপুর"
      ]
    },
    {
      "id": 10,
      "nameEn": "Tongi",
      "nameBn": "টঙ্গী",
      "aliases": [
        "tongi",
        "টঙ্গী"
      ]
    },
    {
      "id": 11,
      "nameEn": "Savar",
      "nameBn": "সাভার",
      "aliases": [
        "savar",
        "সাভার"
      ]
    },
    {
      "id": 12,
      "nameEn": "Nabinagar",
      "nameBn": "নবীনগর",
      "aliases": [
        "nabinagar",
        "নবীনগর"
      ]
    }
  ],
  "fareMatrix": [
    [
      0,
      10,
      23,
      31,
      38,
      40,
      46,
      49,
      60,
      66,
      69,
      105,
      127
    ],
    [
      10,
      0,
      18,
      26,
      32,
      35,
      41,
      44,
      55,
      61,
      63,
      100,
      121
    ],
    [
      23,
      18,
      0,
      10,
      15,
      17,
      23,
      26,
      37,
      43,
      46,
      82,
      104
    ],
    [
      31,
      26,
      10,
      0,
      10,
      10,
      15,
      18,
      29,
      35,
      38,
      74,
      96
    ],
    [
      38,
      32,
      15,
      10,
      0,
      10,
      10,
      11,
      22,
      28,
      31,
      67,
      89
    ],
    [
      40,
      35,
      17,
      10,
      10,
      0,
      10,
      10,
      20,
      26,
      28,
      65,
      86
    ],
    [
      46,
      41,
      23,
      15,
      10,
      10,
      0,
      10,
      14,
      20,
      23,
      59,
      81
    ],
    [
      49,
      44,
      26,
      18,
      11,
      10,
      10,
      0,
      11,
      17,
      19,
      56,
      77
    ],
    [
      60,
      55,
      37,
      29,
      22,
      20,
      14,
      11,
      0,
      10,
      10,
      45,
      67
    ],
    [
      66,
      61,
      43,
      35,
      28,
      26,
      20,
      17,
      10,
      0,
      10,
      39,
      60
    ],
    [
      69,
      63,
      46,
      38,
      31,
      28,
      23,
      19,
      10,
      10,
      0,
      36,
      58
    ],
    [
      105,
      100,
      82,
      74,
      67,
      65,
      59,
      56,
      45,
      39,
      36,
      0,
      22
    ],
    [
      127,
      121,
      104,
      96,
      89,
      86,
      81,
      77,
      67,
      60,
      58,
      22,
      0
    ]
  ]
},
{
  "id": "A378",
  "routeNo": "এ-৩৭৮",
  "nameBn": "ডেমরা স্টাফ কোয়ার্টার → বসিলা",
  "nameEn": "Demra Staff Quarter → Bosila",
  "totalKm": 23.5,
  "stops": [
    {
      "id": 0,
      "nameEn": "Demra Staff Quarter",
      "nameBn": "ডেমরা স্টাফ কোয়ার্টার",
      "aliases": [
        "demra staff quarter",
        "ডেমরা স্টাফ কোয়ার্টার"
      ]
    },
    {
      "id": 1,
      "nameEn": "Meradia Bazar",
      "nameBn": "মেরাদিয়া বাজার",
      "aliases": [
        "meradia bazar",
        "মেরাদিয়া বাজার"
      ]
    },
    {
      "id": 2,
      "nameEn": "Rampura",
      "nameBn": "রামপুরা",
      "aliases": [
        "rampura",
        "রামপুরা"
      ]
    },
    {
      "id": 3,
      "nameEn": "Malibagh",
      "nameBn": "মালিবাগ",
      "aliases": [
        "malibagh",
        "মালিবাগ"
      ]
    },
    {
      "id": 4,
      "nameEn": "Shantinagar",
      "nameBn": "শান্তিনগর",
      "aliases": [
        "shantinagar",
        "শান্তিনগর"
      ]
    },
    {
      "id": 5,
      "nameEn": "Kakrail",
      "nameBn": "কাকরাইল",
      "aliases": [
        "kakrail",
        "কাকরাইল"
      ]
    },
    {
      "id": 6,
      "nameEn": "Matsya Bhaban",
      "nameBn": "মৎস্য ভবন",
      "aliases": [
        "matsya bhaban",
        "মৎস্য ভবন"
      ]
    },
    {
      "id": 7,
      "nameEn": "Shahbagh",
      "nameBn": "শাহবাগ",
      "aliases": [
        "shahbagh",
        "শাহবাগ"
      ]
    },
    {
      "id": 8,
      "nameEn": "Science Lab",
      "nameBn": "সায়েন্সল্যাব",
      "aliases": [
        "science lab",
        "সায়েন্সল্যাব"
      ]
    },
    {
      "id": 9,
      "nameEn": "Bosila",
      "nameBn": "বসিলা",
      "aliases": [
        "bosila",
        "বসিলা",
        "basila"
      ]
    }
  ],
  "fareMatrix": [
    [
      0,
      22,
      29,
      36,
      39,
      42,
      47,
      52,
      55,
      63
    ],
    [
      22,
      0,
      10,
      14,
      17,
      20,
      26,
      30,
      34,
      42
    ],
    [
      29,
      10,
      0,
      10,
      10,
      13,
      18,
      23,
      26,
      34
    ],
    [
      36,
      14,
      10,
      0,
      10,
      10,
      11,
      16,
      19,
      28
    ],
    [
      39,
      17,
      10,
      10,
      0,
      10,
      10,
      13,
      17,
      25
    ],
    [
      42,
      20,
      13,
      10,
      10,
      0,
      10,
      10,
      14,
      22
    ],
    [
      47,
      26,
      18,
      11,
      10,
      10,
      0,
      10,
      10,
      16
    ],
    [
      52,
      30,
      23,
      16,
      13,
      10,
      10,
      0,
      10,
      12
    ],
    [
      55,
      34,
      26,
      19,
      17,
      14,
      10,
      10,
      0,
      10
    ],
    [
      63,
      42,
      34,
      28,
      25,
      22,
      16,
      12,
      10,
      0
    ]
  ]
},
{
  "id": "A380",
  "routeNo": "এ-৩৮০",
  "nameBn": "খিলগাঁও → পল্লবী (মিরপুর ১২)",
  "nameEn": "Khilgaon → Pallabi (Mirpur-12)",
  "totalKm": 21,
  "stops": [
    {
      "id": 0,
      "nameEn": "Khilgaon",
      "nameBn": "খিলগাঁও",
      "aliases": [
        "khilgaon",
        "খিলগাঁও"
      ]
    },
    {
      "id": 1,
      "nameEn": "Khilgaon Railgate",
      "nameBn": "খিলগাঁও রেলগেট",
      "aliases": [
        "khilgaon railgate",
        "খিলগাঁও রেলগেট"
      ]
    },
    {
      "id": 2,
      "nameEn": "Malibagh Chowdhury Para",
      "nameBn": "মালিবাগ চৌধুরী পাড়া",
      "aliases": [
        "malibagh chowdhury para",
        "মালিবাগ চৌধুরী পাড়া"
      ]
    },
    {
      "id": 3,
      "nameEn": "Malibagh",
      "nameBn": "মালিবাগ",
      "aliases": [
        "malibagh",
        "মালিবাগ"
      ]
    },
    {
      "id": 4,
      "nameEn": "Kakrail",
      "nameBn": "কাকরাইল",
      "aliases": [
        "kakrail",
        "কাকরাইল"
      ]
    },
    {
      "id": 5,
      "nameEn": "Matsya Bhaban",
      "nameBn": "মৎস্য ভবন",
      "aliases": [
        "matsya bhaban",
        "মৎস্য ভবন"
      ]
    },
    {
      "id": 6,
      "nameEn": "Shahbagh",
      "nameBn": "শাহবাগ",
      "aliases": [
        "shahbagh",
        "শাহবাগ"
      ]
    },
    {
      "id": 7,
      "nameEn": "Science Lab",
      "nameBn": "সায়েন্সল্যাব",
      "aliases": [
        "science lab",
        "সায়েন্সল্যাব"
      ]
    },
    {
      "id": 8,
      "nameEn": "Sukrabad",
      "nameBn": "শুক্রাবাদ",
      "aliases": [
        "sukrabad",
        "শুক্রাবাদ"
      ]
    },
    {
      "id": 9,
      "nameEn": "Shyamoli",
      "nameBn": "শ্যামলী",
      "aliases": [
        "shyamoli",
        "শ্যামলী"
      ]
    },
    {
      "id": 10,
      "nameEn": "Kalyanpur",
      "nameBn": "কল্যাণপুর",
      "aliases": [
        "kalyanpur",
        "কল্যাণপুর"
      ]
    },
    {
      "id": 11,
      "nameEn": "Technical",
      "nameBn": "টেকনিক্যাল",
      "aliases": [
        "technical",
        "টেকনিক্যাল"
      ]
    },
    {
      "id": 12,
      "nameEn": "Mirpur-1",
      "nameBn": "মিরপুর-১",
      "aliases": [
        "mirpur-1",
        "মিরপুর-১"
      ]
    },
    {
      "id": 13,
      "nameEn": "Sony Cinema Hall",
      "nameBn": "সনি সিনেমা হল",
      "aliases": [
        "sony cinema hall",
        "সনি সিনেমা হল"
      ]
    },
    {
      "id": 14,
      "nameEn": "Pallabi",
      "nameBn": "পল্লবী (মিরপুর ১২)",
      "aliases": [
        "pallabi",
        "পল্লবী (মিরপুর ১২)",
        "পল্লবী",
        "mirpur-12"
      ]
    }
  ],
  "fareMatrix": [
    [
      0,
      10,
      10,
      11,
      17,
      20,
      26,
      32,
      37,
      43,
      46,
      49,
      52,
      55,
      57
    ],
    [
      10,
      0,
      10,
      10,
      12,
      15,
      21,
      26,
      31,
      37,
      41,
      44,
      47,
      49,
      51
    ],
    [
      10,
      10,
      0,
      10,
      10,
      12,
      18,
      24,
      29,
      35,
      38,
      41,
      44,
      46,
      49
    ],
    [
      11,
      10,
      10,
      0,
      10,
      10,
      16,
      21,
      26,
      32,
      35,
      39,
      41,
      44,
      46
    ],
    [
      17,
      12,
      10,
      10,
      0,
      10,
      10,
      15,
      20,
      26,
      29,
      32,
      35,
      38,
      40
    ],
    [
      20,
      15,
      12,
      10,
      10,
      0,
      10,
      12,
      16,
      22,
      26,
      29,
      32,
      35,
      36
    ],
    [
      26,
      21,
      18,
      16,
      10,
      10,
      0,
      10,
      10,
      16,
      19,
      23,
      26,
      28,
      30
    ],
    [
      32,
      26,
      24,
      21,
      15,
      12,
      10,
      0,
      10,
      11,
      14,
      18,
      20,
      23,
      25
    ],
    [
      37,
      31,
      29,
      26,
      20,
      16,
      10,
      10,
      0,
      10,
      10,
      13,
      15,
      18,
      20
    ],
    [
      43,
      37,
      35,
      32,
      26,
      22,
      16,
      11,
      10,
      0,
      10,
      10,
      10,
      12,
      14
    ],
    [
      46,
      41,
      38,
      35,
      29,
      26,
      19,
      14,
      10,
      10,
      0,
      10,
      10,
      10,
      11
    ],
    [
      49,
      44,
      41,
      39,
      32,
      29,
      23,
      18,
      13,
      10,
      10,
      0,
      10,
      10,
      10
    ],
    [
      52,
      47,
      44,
      41,
      35,
      32,
      26,
      20,
      15,
      10,
      10,
      10,
      0,
      10,
      10
    ],
    [
      55,
      49,
      46,
      44,
      38,
      35,
      28,
      23,
      18,
      12,
      10,
      10,
      10,
      0,
      10
    ],
    [
      57,
      51,
      49,
      46,
      40,
      36,
      30,
      25,
      20,
      14,
      11,
      10,
      10,
      10,
      0
    ]
  ]
},
{
  "id": "A381",
  "routeNo": "এ-৩৮১",
  "nameBn": "গুলিস্তান → গোদানাইল (সিদ্ধিরগঞ্জ)",
  "nameEn": "Gulistan → Godanail (Siddhirganj)",
  "totalKm": 20.6,
  "stops": [
    {
      "id": 0,
      "nameEn": "Gulistan",
      "nameBn": "গুলিস্তান",
      "aliases": [
        "gulistan",
        "গুলিস্তান"
      ]
    },
    {
      "id": 1,
      "nameEn": "Postogola",
      "nameBn": "পোস্তগোলা",
      "aliases": [
        "postogola",
        "পোস্তগোলা"
      ]
    },
    {
      "id": 2,
      "nameEn": "Pagla",
      "nameBn": "পাগলা",
      "aliases": [
        "pagla",
        "পাগলা"
      ]
    },
    {
      "id": 3,
      "nameEn": "Fatullah",
      "nameBn": "ফতুল্লা",
      "aliases": [
        "fatullah",
        "ফতুল্লা"
      ]
    },
    {
      "id": 4,
      "nameEn": "Godanail",
      "nameBn": "গোদানাইল (সিদ্ধিরগঞ্জ)",
      "aliases": [
        "godanail",
        "গোদানাইল",
        "গোদানাইল (সিদ্ধিরগঞ্জ)",
        "siddhirganj"
      ]
    }
  ],
  "fareMatrix": [
    [
      0,
      26,
      37,
      41,
      56
    ],
    [
      26,
      0,
      11,
      15,
      30
    ],
    [
      37,
      11,
      0,
      10,
      19
    ],
    [
      41,
      15,
      10,
      0,
      15
    ],
    [
      56,
      30,
      19,
      15,
      0
    ]
  ]
},
{
  "id": "A382",
  "routeNo": "এ-৩৮২",
  "nameBn": "শিয়ালবাড়ী → কমলাপুর (শহীদ তাজউদ্দীন সরণি)",
  "nameEn": "Shialbari → Kamalapur",
  "totalKm": 21,
  "stops": [
    {
      "id": 0,
      "nameEn": "Shialbari",
      "nameBn": "শিয়ালবাড়ী",
      "aliases": [
        "shialbari",
        "শিয়ালবাড়ী",
        "শিয়ালবাড়ি"
      ]
    },
    {
      "id": 1,
      "nameEn": "Original Dosh",
      "nameBn": "অরিজিনাল দশ",
      "aliases": [
        "original dosh",
        "অরিজিনাল দশ",
        "mirpur 10"
      ]
    },
    {
      "id": 2,
      "nameEn": "Purobi",
      "nameBn": "পূরবী",
      "aliases": [
        "purobi",
        "পূরবী"
      ]
    },
    {
      "id": 3,
      "nameEn": "Kalshi Mor",
      "nameBn": "কালশী মোড়",
      "aliases": [
        "kalshi mor",
        "কালশী মোড়",
        "kalshi"
      ]
    },
    {
      "id": 4,
      "nameEn": "Md. Jillur Rahman Flyover",
      "nameBn": "মোঃ জিল্লুর রহমান ফ্লাইওভার",
      "aliases": [
        "md jillur rahman flyover",
        "মোঃ জিল্লুর রহমান ফ্লাইওভার"
      ]
    },
    {
      "id": 5,
      "nameEn": "Banani",
      "nameBn": "বনানী",
      "aliases": [
        "banani",
        "বনানী"
      ]
    },
    {
      "id": 6,
      "nameEn": "Mohakhali",
      "nameBn": "মহাখালী",
      "aliases": [
        "mohakhali",
        "মহাখালী"
      ]
    },
    {
      "id": 7,
      "nameEn": "Satrasta",
      "nameBn": "সাতরাস্তা",
      "aliases": [
        "satrasta",
        "সাতরাস্তা"
      ]
    },
    {
      "id": 8,
      "nameEn": "Moghbazar",
      "nameBn": "মগবাজার",
      "aliases": [
        "moghbazar",
        "মগবাজার"
      ]
    },
    {
      "id": 9,
      "nameEn": "Malibagh",
      "nameBn": "মালিবাগ",
      "aliases": [
        "malibagh",
        "মালিবাগ"
      ]
    },
    {
      "id": 10,
      "nameEn": "Kakrail",
      "nameBn": "কাকরাইল",
      "aliases": [
        "kakrail",
        "কাকরাইল"
      ]
    },
    {
      "id": 11,
      "nameEn": "Fakirapool",
      "nameBn": "ফকিরাপুল",
      "aliases": [
        "fakirapool",
        "ফকিরাপুল"
      ]
    },
    {
      "id": 12,
      "nameEn": "Kamalapur",
      "nameBn": "কমলাপুর (বিআরটিসি টার্মিনাল)",
      "aliases": [
        "kamalapur",
        "কমলাপুর"
      ]
    }
  ],
  "fareMatrix": [
    [
      0,
      10,
      10,
      17,
      26,
      32,
      37,
      43,
      46,
      49,
      52,
      55,
      57
    ],
    [
      10,
      0,
      10,
      12,
      21,
      26,
      31,
      37,
      41,
      44,
      47,
      49,
      51
    ],
    [
      10,
      10,
      0,
      10,
      18,
      24,
      29,
      35,
      38,
      41,
      44,
      46,
      49
    ],
    [
      17,
      12,
      10,
      0,
      10,
      15,
      20,
      26,
      29,
      32,
      35,
      38,
      40
    ],
    [
      26,
      21,
      18,
      10,
      0,
      10,
      10,
      16,
      19,
      23,
      26,
      28,
      30
    ],
    [
      32,
      26,
      24,
      15,
      10,
      0,
      10,
      11,
      14,
      18,
      20,
      23,
      25
    ],
    [
      37,
      31,
      29,
      20,
      10,
      10,
      0,
      10,
      10,
      13,
      15,
      18,
      20
    ],
    [
      43,
      37,
      35,
      26,
      16,
      11,
      10,
      0,
      10,
      10,
      10,
      12,
      14
    ],
    [
      46,
      41,
      38,
      29,
      19,
      14,
      10,
      10,
      0,
      10,
      10,
      10,
      11
    ],
    [
      49,
      44,
      41,
      32,
      23,
      18,
      13,
      10,
      10,
      0,
      10,
      10,
      10
    ],
    [
      52,
      47,
      44,
      35,
      26,
      20,
      15,
      10,
      10,
      10,
      0,
      10,
      10
    ],
    [
      55,
      49,
      46,
      38,
      28,
      23,
      18,
      12,
      10,
      10,
      10,
      0,
      10
    ],
    [
      57,
      51,
      49,
      40,
      30,
      25,
      20,
      14,
      11,
      10,
      10,
      10,
      0
    ]
  ]
},
{
  "id": "A385",
  "routeNo": "এ-৩৮৫",
  "nameBn": "সাইনবোর্ড → নন্দনপার্ক",
  "nameEn": "Signboard → Nandan Park",
  "totalKm": 56.5,
  "stops": [
    {
      "id": 0,
      "nameEn": "Signboard",
      "nameBn": "সাইনবোর্ড",
      "aliases": [
        "signboard",
        "সাইনবোর্ড"
      ]
    },
    {
      "id": 1,
      "nameEn": "Mayor Mohammad Flyover",
      "nameBn": "মেয়র মোহাম্মদ ফ্লাইওভার",
      "aliases": [
        "mayor mohammad flyover",
        "মেয়র মোহাম্মদ ফ্লাইওভার"
      ]
    },
    {
      "id": 2,
      "nameEn": "Chankharpul",
      "nameBn": "চানখারপুল",
      "aliases": [
        "chankharpul",
        "চানখারপুল"
      ]
    },
    {
      "id": 3,
      "nameEn": "Shahbagh",
      "nameBn": "শাহবাগ",
      "aliases": [
        "shahbagh",
        "শাহবাগ"
      ]
    },
    {
      "id": 4,
      "nameEn": "Farmgate",
      "nameBn": "ফার্মগেট",
      "aliases": [
        "farmgate",
        "ফার্মগেট"
      ]
    },
    {
      "id": 5,
      "nameEn": "Gabtoli",
      "nameBn": "গাবতলী",
      "aliases": [
        "gabtoli",
        "গাবতলী"
      ]
    },
    {
      "id": 6,
      "nameEn": "Savar",
      "nameBn": "সাভার",
      "aliases": [
        "savar",
        "সাভার"
      ]
    },
    {
      "id": 7,
      "nameEn": "Nabinagar",
      "nameBn": "নবীনগর",
      "aliases": [
        "nabinagar",
        "নবীনগর"
      ]
    },
    {
      "id": 8,
      "nameEn": "EPZ",
      "nameBn": "ইপিজেড",
      "aliases": [
        "epz",
        "ইপিজেড"
      ]
    },
    {
      "id": 9,
      "nameEn": "Jirani",
      "nameBn": "জিরানী",
      "aliases": [
        "jirani",
        "জিরানী"
      ]
    },
    {
      "id": 10,
      "nameEn": "Nandan Park",
      "nameBn": "নন্দনপার্ক",
      "aliases": [
        "nandan park",
        "নন্দনপার্ক"
      ]
    }
  ],
  "fareMatrix": [
    [
      0,
      11,
      25,
      30,
      32,
      53,
      92,
      115,
      127,
      140,
      153
    ],
    [
      11,
      0,
      14,
      20,
      22,
      42,
      81,
      104,
      116,
      130,
      142
    ],
    [
      25,
      14,
      0,
      10,
      10,
      28,
      67,
      90,
      102,
      115,
      127
    ],
    [
      30,
      20,
      10,
      0,
      10,
      23,
      62,
      84,
      96,
      110,
      122
    ],
    [
      32,
      22,
      10,
      10,
      0,
      21,
      59,
      82,
      94,
      108,
      120
    ],
    [
      53,
      42,
      28,
      23,
      21,
      0,
      39,
      62,
      74,
      87,
      99
    ],
    [
      92,
      81,
      67,
      62,
      59,
      39,
      0,
      23,
      35,
      48,
      60
    ],
    [
      115,
      104,
      90,
      84,
      82,
      62,
      23,
      0,
      12,
      26,
      38
    ],
    [
      127,
      116,
      102,
      96,
      94,
      74,
      35,
      12,
      0,
      14,
      26
    ],
    [
      140,
      130,
      115,
      110,
      108,
      87,
      48,
      26,
      14,
      0,
      12
    ],
    [
      153,
      142,
      127,
      122,
      120,
      99,
      60,
      38,
      26,
      12,
      0
    ]
  ]
},
{
  "id": "A386",
  "routeNo": "এ-৩৮৬",
  "nameBn": "মদনপুর → নন্দন পার্ক",
  "nameEn": "Madanpur → Nandan Park",
  "totalKm": 78.6,
  "stops": [
    {
      "id": 0,
      "nameEn": "Madanpur",
      "nameBn": "মদনপুর",
      "aliases": [
        "madanpur",
        "মদনপুর"
      ]
    },
    {
      "id": 1,
      "nameEn": "Kanchpur",
      "nameBn": "কাঁচপুর",
      "aliases": [
        "kanchpur",
        "কাঁচপুর"
      ]
    },
    {
      "id": 2,
      "nameEn": "Demra",
      "nameBn": "ডেমরা",
      "aliases": [
        "demra",
        "ডেমরা"
      ]
    },
    {
      "id": 3,
      "nameEn": "Meradia Bazar",
      "nameBn": "মেরাদিয়া বাজার",
      "aliases": [
        "meradia bazar",
        "মেরাদিয়া বাজার"
      ]
    },
    {
      "id": 4,
      "nameEn": "Banasree",
      "nameBn": "বনশ্রী",
      "aliases": [
        "banasree",
        "বনশ্রী"
      ]
    },
    {
      "id": 5,
      "nameEn": "Rampura Bridge",
      "nameBn": "রামপুরা ব্রীজ",
      "aliases": [
        "rampura bridge",
        "রামপুরা ব্রীজ"
      ]
    },
    {
      "id": 6,
      "nameEn": "Jamuna Future Park",
      "nameBn": "যমুনা ফিউচার পার্ক",
      "aliases": [
        "jamuna future park",
        "যমুনা ফিউচার পার্ক"
      ]
    },
    {
      "id": 7,
      "nameEn": "Kuril",
      "nameBn": "কুড়িল",
      "aliases": [
        "kuril",
        "কুড়িল"
      ]
    },
    {
      "id": 8,
      "nameEn": "ECB Chattar",
      "nameBn": "ইসিবি চত্বর",
      "aliases": [
        "ecb chattar",
        "ইসিবি চত্বর"
      ]
    },
    {
      "id": 9,
      "nameEn": "Kalshi",
      "nameBn": "কালশী",
      "aliases": [
        "kalshi",
        "কালশী"
      ]
    },
    {
      "id": 10,
      "nameEn": "Mirpur-10",
      "nameBn": "মিরপুর-১০",
      "aliases": [
        "mirpur-10",
        "মিরপুর-১০",
        "original 10",
        "অরিজিনাল দশ"
      ]
    },
    {
      "id": 11,
      "nameEn": "Mirpur-1",
      "nameBn": "মিরপুর-১",
      "aliases": [
        "mirpur-1",
        "মিরপুর-১"
      ]
    },
    {
      "id": 12,
      "nameEn": "Gabtoli",
      "nameBn": "গাবতলী",
      "aliases": [
        "gabtoli",
        "গাবতলী"
      ]
    },
    {
      "id": 13,
      "nameEn": "Hemayetpur",
      "nameBn": "হেমায়েতপুর",
      "aliases": [
        "hemayetpur",
        "হেমায়েতপুর"
      ]
    },
    {
      "id": 14,
      "nameEn": "Savar",
      "nameBn": "সাভার",
      "aliases": [
        "savar",
        "সাভার"
      ]
    },
    {
      "id": 15,
      "nameEn": "EPZ",
      "nameBn": "ইপিজেড",
      "aliases": [
        "epz",
        "ইপিজেড"
      ]
    },
    {
      "id": 16,
      "nameEn": "Nandan Park",
      "nameBn": "নন্দন পার্ক",
      "aliases": [
        "nandan park",
        "নন্দন পার্ক"
      ]
    }
  ],
  "fareMatrix": [
    [
      0,
      11,
      24,
      42,
      48,
      50,
      64,
      67,
      77,
      82,
      95,
      100,
      108,
      130,
      148,
      184,
      212
    ],
    [
      11,
      0,
      14,
      31,
      37,
      39,
      53,
      56,
      66,
      71,
      84,
      89,
      97,
      119,
      137,
      173,
      201
    ],
    [
      24,
      14,
      0,
      18,
      23,
      26,
      40,
      43,
      52,
      58,
      71,
      76,
      84,
      106,
      124,
      159,
      188
    ],
    [
      42,
      31,
      18,
      0,
      10,
      10,
      22,
      25,
      35,
      40,
      53,
      58,
      66,
      88,
      106,
      141,
      170
    ],
    [
      48,
      37,
      23,
      10,
      0,
      10,
      17,
      19,
      29,
      34,
      48,
      52,
      61,
      82,
      100,
      136,
      165
    ],
    [
      50,
      39,
      26,
      10,
      10,
      0,
      14,
      17,
      26,
      32,
      45,
      50,
      58,
      80,
      98,
      133,
      162
    ],
    [
      64,
      53,
      40,
      22,
      17,
      14,
      0,
      10,
      12,
      18,
      31,
      36,
      44,
      66,
      84,
      119,
      148
    ],
    [
      67,
      56,
      43,
      25,
      19,
      17,
      10,
      0,
      10,
      15,
      28,
      33,
      41,
      63,
      81,
      117,
      145
    ],
    [
      77,
      66,
      52,
      35,
      29,
      26,
      12,
      10,
      0,
      10,
      18,
      23,
      32,
      53,
      71,
      107,
      136
    ],
    [
      82,
      71,
      58,
      40,
      34,
      32,
      18,
      15,
      10,
      0,
      13,
      18,
      26,
      48,
      66,
      102,
      130
    ],
    [
      95,
      84,
      71,
      53,
      48,
      45,
      31,
      28,
      18,
      13,
      0,
      10,
      13,
      35,
      53,
      89,
      117
    ],
    [
      100,
      89,
      76,
      58,
      52,
      50,
      36,
      33,
      23,
      18,
      10,
      0,
      10,
      30,
      48,
      84,
      112
    ],
    [
      108,
      97,
      84,
      66,
      61,
      58,
      44,
      41,
      32,
      26,
      13,
      10,
      0,
      22,
      40,
      75,
      104
    ],
    [
      130,
      119,
      106,
      88,
      82,
      80,
      66,
      63,
      53,
      48,
      35,
      30,
      22,
      0,
      18,
      54,
      82
    ],
    [
      148,
      137,
      124,
      106,
      100,
      98,
      84,
      81,
      71,
      66,
      53,
      48,
      40,
      18,
      0,
      36,
      64
    ],
    [
      184,
      173,
      159,
      141,
      136,
      133,
      119,
      117,
      107,
      102,
      89,
      84,
      75,
      54,
      36,
      0,
      29
    ],
    [
      212,
      201,
      188,
      170,
      165,
      162,
      148,
      145,
      136,
      130,
      117,
      112,
      104,
      82,
      64,
      29,
      0
    ]
  ]
},
{
  "id": "A390",
  "routeNo": "এ-৩৯০",
  "nameBn": "সাভার → ভিক্টোরিয়া পার্ক",
  "nameEn": "Savar → Victoria Park",
  "totalKm": 32.4,
  "stops": [
    {
      "id": 0,
      "nameEn": "Savar",
      "nameBn": "সাভার",
      "aliases": [
        "savar",
        "সাভার"
      ]
    },
    {
      "id": 1,
      "nameEn": "Hemayetpur",
      "nameBn": "হেমায়েতপুর",
      "aliases": [
        "hemayetpur",
        "হেমায়েতপুর"
      ]
    },
    {
      "id": 2,
      "nameEn": "Gabtoli",
      "nameBn": "গাবতলী",
      "aliases": [
        "gabtoli",
        "গাবতলী"
      ]
    },
    {
      "id": 3,
      "nameEn": "Technical",
      "nameBn": "টেকনিক্যাল",
      "aliases": [
        "technical",
        "টেকনিক্যাল"
      ]
    },
    {
      "id": 4,
      "nameEn": "Mirpur-2",
      "nameBn": "মিরপুর-২",
      "aliases": [
        "mirpur-2",
        "মিরপুর-২"
      ]
    },
    {
      "id": 5,
      "nameEn": "Mirpur-11",
      "nameBn": "মিরপুর-১১",
      "aliases": [
        "mirpur-11",
        "মিরপুর-১১"
      ]
    },
    {
      "id": 6,
      "nameEn": "Kalshi",
      "nameBn": "কালশী",
      "aliases": [
        "kalshi",
        "কালশী"
      ]
    },
    {
      "id": 7,
      "nameEn": "Md. Jillur Rahman Flyover",
      "nameBn": "মোঃ জিল্লুর রহমান ফ্লাইওভার",
      "aliases": [
        "md jillur rahman flyover",
        "মোঃ জিল্লুর রহমান ফ্লাইওভার"
      ]
    },
    {
      "id": 8,
      "nameEn": "Moghbazar",
      "nameBn": "মগবাজার",
      "aliases": [
        "moghbazar",
        "মগবাজার"
      ]
    },
    {
      "id": 9,
      "nameEn": "Kakrail",
      "nameBn": "কাকরাইল",
      "aliases": [
        "kakrail",
        "কাকরাইল"
      ]
    },
    {
      "id": 10,
      "nameEn": "Gulistan",
      "nameBn": "গুলিস্তান",
      "aliases": [
        "gulistan",
        "গুলিস্তান"
      ]
    },
    {
      "id": 11,
      "nameEn": "Victoria Park",
      "nameBn": "ভিক্টোরিয়া পার্ক",
      "aliases": [
        "victoria park",
        "ভিক্টোরিয়া পার্ক"
      ]
    }
  ],
  "fareMatrix": [
    [
      0,
      18,
      38,
      41,
      49,
      53,
      64,
      70,
      75,
      78,
      81,
      87
    ],
    [
      18,
      0,
      21,
      23,
      31,
      36,
      46,
      52,
      57,
      60,
      63,
      70
    ],
    [
      38,
      21,
      0,
      10,
      11,
      15,
      25,
      31,
      37,
      39,
      43,
      49
    ],
    [
      41,
      23,
      10,
      0,
      10,
      13,
      23,
      29,
      35,
      37,
      41,
      47
    ],
    [
      49,
      31,
      11,
      10,
      0,
      10,
      15,
      21,
      26,
      29,
      32,
      38
    ],
    [
      53,
      36,
      15,
      13,
      10,
      0,
      10,
      16,
      22,
      24,
      28,
      34
    ],
    [
      64,
      46,
      25,
      23,
      15,
      10,
      0,
      10,
      11,
      14,
      18,
      24
    ],
    [
      70,
      52,
      31,
      29,
      21,
      16,
      10,
      0,
      10,
      10,
      12,
      18
    ],
    [
      75,
      57,
      37,
      35,
      26,
      22,
      11,
      10,
      0,
      10,
      10,
      12
    ],
    [
      78,
      60,
      39,
      37,
      29,
      24,
      14,
      10,
      10,
      0,
      10,
      10
    ],
    [
      81,
      63,
      43,
      41,
      32,
      28,
      18,
      12,
      10,
      10,
      0,
      10
    ],
    [
      87,
      70,
      49,
      47,
      38,
      34,
      24,
      18,
      12,
      10,
      10,
      0
    ]
  ]
},
{
  "id": "A406",
  "routeNo": "এ-৪০৬",
  "nameBn": "ঘাটারচর → সোনারগাঁও",
  "nameEn": "Ghatarchar → Sonargaon",
  "totalKm": 39.4,
  "stops": [
    {
      "id": 0,
      "nameEn": "Ghatarchar",
      "nameBn": "ঘাটারচর",
      "aliases": [
        "ghatarchar",
        "ঘাটারচর"
      ]
    },
    {
      "id": 1,
      "nameEn": "Bosila",
      "nameBn": "বসিলা",
      "aliases": [
        "bosila",
        "বসিলা"
      ]
    },
    {
      "id": 2,
      "nameEn": "Mohammadpur",
      "nameBn": "মোহাম্মদপুর",
      "aliases": [
        "mohammadpur",
        "মোহাম্মদপুর"
      ]
    },
    {
      "id": 3,
      "nameEn": "Shankar",
      "nameBn": "শংকর",
      "aliases": [
        "shankar",
        "শংকর"
      ]
    },
    {
      "id": 4,
      "nameEn": "Dhanmondi",
      "nameBn": "ধানমন্ডি",
      "aliases": [
        "dhanmondi",
        "ধানমন্ডি"
      ]
    },
    {
      "id": 5,
      "nameEn": "Jigatola",
      "nameBn": "জিগাতলা",
      "aliases": [
        "jigatola",
        "জিগাতলা"
      ]
    },
    {
      "id": 6,
      "nameEn": "Science Lab",
      "nameBn": "সায়েন্সল্যাব",
      "aliases": [
        "science lab",
        "সায়েন্সল্যাব"
      ]
    },
    {
      "id": 7,
      "nameEn": "Shahbagh",
      "nameBn": "শাহবাগ",
      "aliases": [
        "shahbagh",
        "শাহবাগ"
      ]
    },
    {
      "id": 8,
      "nameEn": "Press Club",
      "nameBn": "প্রেস ক্লাব",
      "aliases": [
        "press club",
        "প্রেস ক্লাব"
      ]
    },
    {
      "id": 9,
      "nameEn": "Gulistan",
      "nameBn": "গুলিস্তান",
      "aliases": [
        "gulistan",
        "গুলিস্তান"
      ]
    },
    {
      "id": 10,
      "nameEn": "Ittefaq",
      "nameBn": "ইত্তেফাক",
      "aliases": [
        "ittefaq",
        "ইত্তেফাক"
      ]
    },
    {
      "id": 11,
      "nameEn": "Sayedabad",
      "nameBn": "সায়েদাবাদ",
      "aliases": [
        "sayedabad",
        "সায়েদাবাদ"
      ]
    },
    {
      "id": 12,
      "nameEn": "Sonir Akhra",
      "nameBn": "শনির আখড়া",
      "aliases": [
        "sonir akhra",
        "শনির আখড়া"
      ]
    },
    {
      "id": 13,
      "nameEn": "Rayerbagh",
      "nameBn": "রায়েরবাগ",
      "aliases": [
        "rayerbagh",
        "রায়েরবাগ"
      ]
    },
    {
      "id": 14,
      "nameEn": "Kanchpur",
      "nameBn": "কাঁচপুর",
      "aliases": [
        "kanchpur",
        "কাঁচপুর"
      ]
    },
    {
      "id": 15,
      "nameEn": "Madanpur",
      "nameBn": "মদনপুর",
      "aliases": [
        "madanpur",
        "মদনপুর"
      ]
    },
    {
      "id": 16,
      "nameEn": "Sonargaon",
      "nameBn": "সোনারগাঁও",
      "aliases": [
        "sonargaon",
        "সোনারগাঁও"
      ]
    }
  ],
  "fareMatrix": [
    [
      0,
      10,
      12,
      17,
      18,
      20,
      22,
      28,
      31,
      33,
      39,
      40,
      52,
      55,
      74,
      82,
      106
    ],
    [
      10,
      0,
      10,
      10,
      11,
      12,
      15,
      20,
      23,
      26,
      31,
      32,
      45,
      47,
      66,
      74,
      99
    ],
    [
      12,
      10,
      0,
      10,
      10,
      10,
      11,
      16,
      19,
      22,
      27,
      28,
      41,
      43,
      62,
      70,
      95
    ],
    [
      17,
      10,
      10,
      0,
      10,
      10,
      10,
      11,
      14,
      16,
      22,
      23,
      35,
      38,
      57,
      65,
      89
    ],
    [
      18,
      11,
      10,
      10,
      0,
      10,
      10,
      10,
      12,
      15,
      20,
      22,
      34,
      36,
      55,
      63,
      88
    ],
    [
      20,
      12,
      10,
      10,
      10,
      0,
      10,
      10,
      11,
      14,
      19,
      20,
      32,
      35,
      54,
      62,
      87
    ],
    [
      22,
      15,
      11,
      10,
      10,
      10,
      0,
      10,
      10,
      11,
      16,
      18,
      30,
      32,
      51,
      59,
      84
    ],
    [
      28,
      20,
      16,
      11,
      10,
      10,
      10,
      0,
      10,
      10,
      11,
      12,
      24,
      27,
      46,
      54,
      79
    ],
    [
      31,
      23,
      19,
      14,
      12,
      11,
      10,
      10,
      0,
      10,
      10,
      10,
      22,
      24,
      43,
      51,
      76
    ],
    [
      33,
      26,
      22,
      16,
      15,
      14,
      11,
      10,
      10,
      0,
      10,
      10,
      19,
      22,
      41,
      49,
      73
    ],
    [
      39,
      31,
      27,
      22,
      20,
      19,
      16,
      11,
      10,
      10,
      0,
      10,
      14,
      16,
      35,
      43,
      68
    ],
    [
      40,
      32,
      28,
      23,
      22,
      20,
      18,
      12,
      10,
      10,
      10,
      0,
      12,
      15,
      34,
      42,
      66
    ],
    [
      52,
      45,
      41,
      35,
      34,
      32,
      30,
      24,
      22,
      19,
      14,
      12,
      0,
      10,
      22,
      30,
      54
    ],
    [
      55,
      47,
      43,
      38,
      36,
      35,
      32,
      27,
      24,
      22,
      16,
      15,
      10,
      0,
      19,
      27,
      52
    ],
    [
      74,
      66,
      62,
      57,
      55,
      54,
      51,
      46,
      43,
      41,
      35,
      34,
      22,
      19,
      0,
      10,
      33
    ],
    [
      82,
      74,
      70,
      65,
      63,
      62,
      59,
      54,
      51,
      49,
      43,
      42,
      30,
      27,
      10,
      0,
      25
    ],
    [
      106,
      99,
      95,
      89,
      88,
      87,
      84,
      79,
      76,
      73,
      68,
      66,
      54,
      52,
      33,
      25,
      0
    ]
  ]
},
{
  "id": "A393",
  "routeNo": "এ-৩৯৩",
  "nameBn": "সাভার → বেরাইদ",
  "nameEn": "Savar → Beraid",
  "totalKm": 37.4,
  "stops": [
    {
      "id": 0,
      "nameEn": "Savar",
      "nameBn": "সাভার",
      "aliases": [
        "savar",
        "সাভার"
      ]
    },
    {
      "id": 1,
      "nameEn": "Hemayetpur",
      "nameBn": "হেমায়েতপুর",
      "aliases": [
        "hemayetpur",
        "হেমায়েতপুর"
      ]
    },
    {
      "id": 2,
      "nameEn": "Gabtoli",
      "nameBn": "গাবতলী",
      "aliases": [
        "gabtoli",
        "গাবতলী"
      ]
    },
    {
      "id": 3,
      "nameEn": "Technical",
      "nameBn": "টেকনিক্যাল",
      "aliases": [
        "technical",
        "টেকনিক্যাল"
      ]
    },
    {
      "id": 4,
      "nameEn": "Mirpur-2",
      "nameBn": "মিরপুর-২",
      "aliases": [
        "mirpur-2",
        "মিরপুর-২"
      ]
    },
    {
      "id": 5,
      "nameEn": "Mirpur-11",
      "nameBn": "মিরপুর-১১",
      "aliases": [
        "mirpur-11",
        "মিরপুর-১১"
      ]
    },
    {
      "id": 6,
      "nameEn": "Kalshi",
      "nameBn": "কালশী",
      "aliases": [
        "kalshi",
        "কালশী"
      ]
    },
    {
      "id": 7,
      "nameEn": "Md. Jillur Rahman Flyover",
      "nameBn": "মোঃ জিল্লুর রহমান ফ্লাইওভার",
      "aliases": [
        "md jillur rahman flyover",
        "মোঃ জিল্লুর রহমান ফ্লাইওভার"
      ]
    },
    {
      "id": 8,
      "nameEn": "Chowrasta",
      "nameBn": "চৌরাস্তা",
      "aliases": [
        "chowrasta",
        "চৌরাস্তা"
      ]
    },
    {
      "id": 9,
      "nameEn": "Kuril Bishwaroad",
      "nameBn": "কুড়িল বিশ্বরোড",
      "aliases": [
        "কুড়িল বিশ্বরোড",
        "kuril bishwaroad"
      ]
    },
    {
      "id": 10,
      "nameEn": "Nadda",
      "nameBn": "নদ্দা",
      "aliases": [
        "nadda",
        "নদ্দা"
      ]
    },
    {
      "id": 11,
      "nameEn": "Beraid",
      "nameBn": "বেরাইদ",
      "aliases": [
        "beraid",
        "বেরাইদ"
      ]
    }
  ],
  "fareMatrix": [
    [
      0,
      18,
      38,
      41,
      49,
      53,
      64,
      70,
      75,
      78,
      81,
      101
    ],
    [
      18,
      0,
      21,
      23,
      31,
      36,
      46,
      52,
      57,
      60,
      63,
      83
    ],
    [
      38,
      21,
      0,
      10,
      11,
      15,
      25,
      31,
      37,
      39,
      43,
      63
    ],
    [
      41,
      23,
      10,
      0,
      10,
      13,
      23,
      29,
      35,
      37,
      41,
      60
    ],
    [
      49,
      31,
      11,
      10,
      0,
      10,
      15,
      21,
      26,
      29,
      32,
      52
    ],
    [
      53,
      36,
      15,
      13,
      10,
      0,
      10,
      16,
      22,
      24,
      28,
      48
    ],
    [
      64,
      46,
      25,
      23,
      15,
      10,
      0,
      10,
      11,
      14,
      18,
      37
    ],
    [
      70,
      52,
      31,
      29,
      21,
      16,
      10,
      0,
      10,
      10,
      12,
      31
    ],
    [
      75,
      57,
      37,
      35,
      26,
      22,
      11,
      10,
      0,
      10,
      10,
      26
    ],
    [
      78,
      60,
      39,
      37,
      29,
      24,
      14,
      10,
      10,
      0,
      10,
      23
    ],
    [
      81,
      63,
      43,
      41,
      32,
      28,
      18,
      12,
      10,
      10,
      0,
      20
    ],
    [
      101,
      83,
      63,
      60,
      52,
      48,
      37,
      31,
      26,
      23,
      20,
      0
    ]
  ]
},
{
  "id": "A397",
  "routeNo": "এ-৩৯৭",
  "nameBn": "কালামপুর → ভিক্টোরিয়া পার্ক",
  "nameEn": "Kalampur → Victoria Park",
  "totalKm": 49.5,
  "stops": [
    {
      "id": 0,
      "nameEn": "Kalampur",
      "nameBn": "কালামপুর",
      "aliases": [
        "kalampur",
        "কালামপুর"
      ]
    },
    {
      "id": 1,
      "nameEn": "Dhamrai",
      "nameBn": "ধামরাই",
      "aliases": [
        "dhamrai",
        "ধামরাই"
      ]
    },
    {
      "id": 2,
      "nameEn": "Nabinagar",
      "nameBn": "নবীনগর",
      "aliases": [
        "nabinagar",
        "নবীনগর"
      ]
    },
    {
      "id": 3,
      "nameEn": "Savar",
      "nameBn": "সাভার",
      "aliases": [
        "savar",
        "সাভার"
      ]
    },
    {
      "id": 4,
      "nameEn": "Hemayetpur",
      "nameBn": "হেমায়েতপুর",
      "aliases": [
        "hemayetpur",
        "হেমায়েতপুর"
      ]
    },
    {
      "id": 5,
      "nameEn": "Gabtoli",
      "nameBn": "গাবতলী",
      "aliases": [
        "gabtoli",
        "গাবতলী"
      ]
    },
    {
      "id": 6,
      "nameEn": "Asad Gate",
      "nameBn": "আসাদগেট",
      "aliases": [
        "asad gate",
        "আসাদগেট"
      ]
    },
    {
      "id": 7,
      "nameEn": "Farmgate",
      "nameBn": "ফার্মগেট",
      "aliases": [
        "farmgate",
        "ফার্মগেট"
      ]
    },
    {
      "id": 8,
      "nameEn": "Shahbagh",
      "nameBn": "শাহবাগ",
      "aliases": [
        "shahbagh",
        "শাহবাগ"
      ]
    },
    {
      "id": 9,
      "nameEn": "Press Club",
      "nameBn": "প্রেসক্লাব",
      "aliases": [
        "press club",
        "প্রেসক্লাব"
      ]
    },
    {
      "id": 10,
      "nameEn": "Gulistan",
      "nameBn": "গুলিস্তান",
      "aliases": [
        "gulistan",
        "গুলিস্তান"
      ]
    },
    {
      "id": 11,
      "nameEn": "Victoria Park",
      "nameBn": "ভিক্টোরিয়া পার্ক",
      "aliases": [
        "victoria park",
        "ভিক্টোরিয়া পার্ক"
      ]
    }
  ],
  "fareMatrix": [
    [
      0,
      10,
      31,
      53,
      74,
      89,
      103,
      108,
      116,
      120,
      123,
      134
    ],
    [
      10,
      0,
      22,
      44,
      65,
      80,
      94,
      99,
      107,
      111,
      114,
      125
    ],
    [
      31,
      22,
      0,
      22,
      43,
      58,
      72,
      77,
      85,
      89,
      92,
      103
    ],
    [
      53,
      44,
      22,
      0,
      22,
      36,
      50,
      55,
      63,
      68,
      70,
      81
    ],
    [
      74,
      65,
      43,
      22,
      0,
      15,
      28,
      34,
      42,
      46,
      49,
      59
    ],
    [
      89,
      80,
      58,
      36,
      15,
      0,
      14,
      19,
      27,
      31,
      34,
      45
    ],
    [
      103,
      94,
      72,
      50,
      28,
      14,
      0,
      10,
      14,
      18,
      20,
      31
    ],
    [
      108,
      99,
      77,
      55,
      34,
      19,
      10,
      0,
      10,
      12,
      15,
      26
    ],
    [
      116,
      107,
      85,
      63,
      42,
      27,
      14,
      10,
      0,
      10,
      10,
      18
    ],
    [
      120,
      111,
      89,
      68,
      46,
      31,
      18,
      12,
      10,
      0,
      10,
      14
    ],
    [
      123,
      114,
      92,
      70,
      49,
      34,
      20,
      15,
      10,
      10,
      0,
      11
    ],
    [
      134,
      125,
      103,
      81,
      59,
      45,
      31,
      26,
      18,
      14,
      11,
      0
    ]
  ]
},
{
  "id": "A408",
  "routeNo": "এ-৪০৮",
  "nameBn": "নন্দনপার্ক → চট্টগ্রাম রোড",
  "nameEn": "Nandan Park → Chittagong Road",
  "totalKm": 61.2,
  "stops": [
    {
      "id": 0,
      "nameEn": "Nandan Park",
      "nameBn": "নন্দনপার্ক",
      "aliases": [
        "nandan park",
        "নন্দনপার্ক"
      ]
    },
    {
      "id": 1,
      "nameEn": "EPZ",
      "nameBn": "ইপিজেড",
      "aliases": [
        "epz",
        "ইপিজেড"
      ]
    },
    {
      "id": 2,
      "nameEn": "Nabinagar",
      "nameBn": "নবীনগর",
      "aliases": [
        "nabinagar",
        "নবীনগর"
      ]
    },
    {
      "id": 3,
      "nameEn": "Savar",
      "nameBn": "সাভার",
      "aliases": [
        "savar",
        "সাভার"
      ]
    },
    {
      "id": 4,
      "nameEn": "Hemayetpur",
      "nameBn": "হেমায়েতপুর",
      "aliases": [
        "hemayetpur",
        "হেমায়েতপুর"
      ]
    },
    {
      "id": 5,
      "nameEn": "Gabtoli",
      "nameBn": "গাবতলী",
      "aliases": [
        "gabtoli",
        "গাবতলী"
      ]
    },
    {
      "id": 6,
      "nameEn": "Shishu Mela",
      "nameBn": "শিশু মেলা",
      "aliases": [
        "shishu mela",
        "শিশু মেলা"
      ]
    },
    {
      "id": 7,
      "nameEn": "Agargaon",
      "nameBn": "আগারগাঁও",
      "aliases": [
        "agargaon",
        "আগারগাঁও"
      ]
    },
    {
      "id": 8,
      "nameEn": "Mohakhali",
      "nameBn": "মহাখালী",
      "aliases": [
        "mohakhali",
        "মহাখালী"
      ]
    },
    {
      "id": 9,
      "nameEn": "Gulshan Link Road",
      "nameBn": "গুলশান লিংক রোড",
      "aliases": [
        "gulshan link road",
        "গুলশান লিংক রোড"
      ]
    },
    {
      "id": 10,
      "nameEn": "Rampura Bridge",
      "nameBn": "রামপুরা ব্রিজ",
      "aliases": [
        "rampura bridge",
        "রামপুরা ব্রিজ"
      ]
    },
    {
      "id": 11,
      "nameEn": "Khilgaon",
      "nameBn": "খিলগাঁও",
      "aliases": [
        "khilgaon",
        "খিলগাঁও"
      ]
    },
    {
      "id": 12,
      "nameEn": "Sayedabad",
      "nameBn": "সায়েদাবাদ",
      "aliases": [
        "sayedabad",
        "সায়েদাবাদ"
      ]
    },
    {
      "id": 13,
      "nameEn": "Sonir Akhra",
      "nameBn": "শনির আখড়া",
      "aliases": [
        "sonir akhra",
        "শনির আখড়া"
      ]
    },
    {
      "id": 14,
      "nameEn": "Chittagong Road",
      "nameBn": "চট্টগ্রাম রোড",
      "aliases": [
        "chittagong road",
        "চট্টগ্রাম রোড"
      ]
    }
  ],
  "fareMatrix": [
    [
      0,
      26,
      38,
      60,
      82,
      97,
      113,
      116,
      125,
      132,
      136,
      144,
      153,
      160,
      165
    ],
    [
      26,
      0,
      12,
      35,
      56,
      71,
      87,
      91,
      99,
      106,
      110,
      118,
      127,
      135,
      140
    ],
    [
      38,
      12,
      0,
      23,
      45,
      59,
      76,
      79,
      87,
      95,
      98,
      106,
      115,
      123,
      128
    ],
    [
      60,
      35,
      23,
      0,
      22,
      36,
      53,
      56,
      64,
      72,
      75,
      83,
      92,
      100,
      105
    ],
    [
      82,
      56,
      45,
      22,
      0,
      15,
      31,
      34,
      43,
      50,
      53,
      62,
      71,
      78,
      83
    ],
    [
      97,
      71,
      59,
      36,
      15,
      0,
      16,
      19,
      28,
      35,
      39,
      47,
      56,
      63,
      68
    ],
    [
      113,
      87,
      76,
      53,
      31,
      16,
      0,
      10,
      12,
      19,
      22,
      31,
      40,
      47,
      52
    ],
    [
      116,
      91,
      79,
      56,
      34,
      19,
      10,
      0,
      10,
      16,
      19,
      27,
      36,
      44,
      49
    ],
    [
      125,
      99,
      87,
      64,
      43,
      28,
      12,
      10,
      0,
      10,
      11,
      19,
      28,
      36,
      41
    ],
    [
      132,
      106,
      95,
      72,
      50,
      35,
      19,
      16,
      10,
      0,
      10,
      12,
      21,
      28,
      33
    ],
    [
      136,
      110,
      98,
      75,
      53,
      39,
      22,
      19,
      11,
      10,
      0,
      10,
      17,
      25,
      30
    ],
    [
      144,
      118,
      106,
      83,
      62,
      47,
      31,
      27,
      19,
      12,
      10,
      0,
      10,
      17,
      22
    ],
    [
      153,
      127,
      115,
      92,
      71,
      56,
      40,
      36,
      28,
      21,
      17,
      10,
      0,
      10,
      13
    ],
    [
      160,
      135,
      123,
      100,
      78,
      63,
      47,
      44,
      36,
      28,
      25,
      17,
      10,
      0,
      10
    ],
    [
      165,
      140,
      128,
      105,
      83,
      68,
      52,
      49,
      41,
      33,
      30,
      22,
      13,
      10,
      0
    ]
  ]
},
{
  "id": "A414",
  "routeNo": "এ-৪১৪",
  "nameBn": "উত্তরা দিয়াবাড়ী → ঘাটার চর",
  "nameEn": "Uttara Diyabari → Ghatarchar",
  "totalKm": 32.1,
  "stops": [
    {
      "id": 0,
      "nameEn": "Uttara Diyabari",
      "nameBn": "উত্তরা দিয়াবাড়ী",
      "aliases": [
        "uttara diyabari",
        "উত্তরা দিয়াবাড়ী"
      ]
    },
    {
      "id": 1,
      "nameEn": "House Building",
      "nameBn": "হাউজ বিল্ডিং",
      "aliases": [
        "house building",
        "হাউজ বিল্ডিং"
      ]
    },
    {
      "id": 2,
      "nameEn": "Abdullahpur",
      "nameBn": "আব্দুল্লাহপুর",
      "aliases": [
        "abdullahpur",
        "আব্দুল্লাহপুর"
      ]
    },
    {
      "id": 3,
      "nameEn": "Kamarpara",
      "nameBn": "কামারপাড়া",
      "aliases": [
        "kamarpara",
        "কামারপাড়া"
      ]
    },
    {
      "id": 4,
      "nameEn": "Dhaur",
      "nameBn": "ধউর",
      "aliases": [
        "dhaur",
        "ধউর"
      ]
    },
    {
      "id": 5,
      "nameEn": "Diyabari Mor",
      "nameBn": "দিয়াবাড়ী মোড়",
      "aliases": [
        "diyabari mor",
        "দিয়াবাড়ী মোড়"
      ]
    },
    {
      "id": 6,
      "nameEn": "Mazar Road",
      "nameBn": "মাজার রোড",
      "aliases": [
        "mazar road",
        "মাজার রোড"
      ]
    },
    {
      "id": 7,
      "nameEn": "Mirpur-1",
      "nameBn": "মিরপুর-১",
      "aliases": [
        "mirpur-1",
        "মিরপুর-১"
      ]
    },
    {
      "id": 8,
      "nameEn": "Technical",
      "nameBn": "টেকনিক্যাল",
      "aliases": [
        "technical",
        "টেকনিক্যাল"
      ]
    },
    {
      "id": 9,
      "nameEn": "Shyamoli",
      "nameBn": "শ্যামলী",
      "aliases": [
        "shyamoli",
        "শ্যামলী"
      ]
    },
    {
      "id": 10,
      "nameEn": "Asad Gate",
      "nameBn": "আসাদগেট",
      "aliases": [
        "asad gate",
        "আসাদগেট"
      ]
    },
    {
      "id": 11,
      "nameEn": "Mohammadpur Bus Stand",
      "nameBn": "মো:বাসস্ট্যান্ড",
      "aliases": [
        "mohammadpur bus stand",
        "মো:বাসস্ট্যান্ড",
        "mohammadpur",
        "মোহাম্মদপুর"
      ]
    },
    {
      "id": 12,
      "nameEn": "Bosila Bridge",
      "nameBn": "বসিলা ব্রীজ",
      "aliases": [
        "bosila bridge",
        "বসিলা ব্রীজ",
        "bosila",
        "বসিলা"
      ]
    },
    {
      "id": 13,
      "nameEn": "Ghatarchar",
      "nameBn": "ঘাটার চর",
      "aliases": [
        "ghatarchar",
        "ঘাটার চর",
        "ঘাটারচর"
      ]
    }
  ],
  "fareMatrix": [
    [
      0,
      10,
      11,
      16,
      24,
      55,
      58,
      61,
      66,
      70,
      76,
      80,
      85,
      87
    ],
    [
      10,
      0,
      10,
      10,
      16,
      47,
      49,
      53,
      58,
      62,
      68,
      72,
      76,
      79
    ],
    [
      11,
      10,
      0,
      10,
      14,
      45,
      47,
      50,
      55,
      60,
      66,
      70,
      74,
      76
    ],
    [
      16,
      10,
      10,
      0,
      10,
      39,
      41,
      45,
      50,
      54,
      60,
      64,
      68,
      70
    ],
    [
      24,
      16,
      14,
      10,
      0,
      31,
      33,
      36,
      42,
      46,
      52,
      56,
      60,
      62
    ],
    [
      55,
      47,
      45,
      39,
      31,
      0,
      10,
      10,
      11,
      15,
      21,
      25,
      29,
      31
    ],
    [
      58,
      49,
      47,
      41,
      33,
      10,
      0,
      10,
      10,
      13,
      19,
      23,
      27,
      29
    ],
    [
      61,
      53,
      50,
      45,
      36,
      10,
      10,
      0,
      10,
      10,
      16,
      20,
      24,
      26
    ],
    [
      66,
      58,
      55,
      50,
      42,
      11,
      10,
      10,
      0,
      10,
      10,
      14,
      18,
      21
    ],
    [
      70,
      62,
      60,
      54,
      46,
      15,
      13,
      10,
      10,
      0,
      10,
      10,
      14,
      16
    ],
    [
      76,
      68,
      66,
      60,
      52,
      21,
      19,
      16,
      10,
      10,
      0,
      10,
      10,
      10
    ],
    [
      80,
      72,
      70,
      64,
      56,
      25,
      23,
      20,
      14,
      10,
      10,
      0,
      10,
      10
    ],
    [
      85,
      76,
      74,
      68,
      60,
      29,
      27,
      24,
      18,
      14,
      10,
      10,
      0,
      10
    ],
    [
      87,
      79,
      76,
      70,
      62,
      31,
      29,
      26,
      21,
      16,
      10,
      10,
      10,
      0
    ]
  ]
},
{
  "id": "A421",
  "routeNo": "এ-৪২১",
  "nameBn": "সাইনবোর্ড → নবীনগর",
  "nameEn": "Signboard → Nabinagar",
  "totalKm": 45.5,
  "stops": [
    {
      "id": 0,
      "nameEn": "Signboard",
      "nameBn": "সাইনবোর্ড",
      "aliases": [
        "signboard",
        "সাইনবোর্ড"
      ]
    },
    {
      "id": 1,
      "nameEn": "Jatrabari",
      "nameBn": "যাত্রাবাড়ী",
      "aliases": [
        "jatrabari",
        "যাত্রাবাড়ী"
      ]
    },
    {
      "id": 2,
      "nameEn": "Sayedabad",
      "nameBn": "সায়েদাবাদ",
      "aliases": [
        "sayedabad",
        "সায়েদাবাদ"
      ]
    },
    {
      "id": 3,
      "nameEn": "Mugda",
      "nameBn": "মুগদা",
      "aliases": [
        "mugda",
        "মুগদা"
      ]
    },
    {
      "id": 4,
      "nameEn": "Khilgaon Flyover",
      "nameBn": "খিলগাঁও ফ্লাইওভার",
      "aliases": [
        "khilgaon flyover",
        "খিলগাঁও ফ্লাইওভার",
        "khilgaon",
        "খিলগাঁও"
      ]
    },
    {
      "id": 5,
      "nameEn": "Rajarbagh",
      "nameBn": "রাজারবাগ",
      "aliases": [
        "rajarbagh",
        "রাজারবাগ"
      ]
    },
    {
      "id": 6,
      "nameEn": "Moghbazar",
      "nameBn": "মগবাজার",
      "aliases": [
        "moghbazar",
        "মগবাজার"
      ]
    },
    {
      "id": 7,
      "nameEn": "Banglamotor",
      "nameBn": "বাংলামটর",
      "aliases": [
        "banglamotor",
        "বাংলামটর"
      ]
    },
    {
      "id": 8,
      "nameEn": "Farmgate",
      "nameBn": "ফার্মগেট",
      "aliases": [
        "farmgate",
        "ফার্মগেট"
      ]
    },
    {
      "id": 9,
      "nameEn": "Asad Gate",
      "nameBn": "আসাদগেট",
      "aliases": [
        "asad gate",
        "আসাদগেট"
      ]
    },
    {
      "id": 10,
      "nameEn": "Kalyanpur",
      "nameBn": "কল্যাণপুর",
      "aliases": [
        "kalyanpur",
        "কল্যাণপুর"
      ]
    },
    {
      "id": 11,
      "nameEn": "Gabtoli",
      "nameBn": "গাবতলী",
      "aliases": [
        "gabtoli",
        "গাবতলী"
      ]
    },
    {
      "id": 12,
      "nameEn": "Savar",
      "nameBn": "সাভার",
      "aliases": [
        "savar",
        "সাভার"
      ]
    },
    {
      "id": 13,
      "nameEn": "Nabinagar",
      "nameBn": "নবীনগর",
      "aliases": [
        "nabinagar",
        "নবীনগর"
      ]
    }
  ],
  "fareMatrix": [
    [
      0,
      15,
      18,
      22,
      25,
      31,
      36,
      39,
      43,
      49,
      56,
      60,
      99,
      123
    ],
    [
      15,
      0,
      10,
      10,
      10,
      16,
      21,
      24,
      28,
      34,
      41,
      45,
      85,
      108
    ],
    [
      18,
      10,
      0,
      10,
      10,
      13,
      18,
      21,
      25,
      31,
      38,
      42,
      82,
      105
    ],
    [
      22,
      10,
      10,
      0,
      10,
      10,
      14,
      16,
      20,
      26,
      34,
      38,
      77,
      100
    ],
    [
      25,
      10,
      10,
      10,
      0,
      10,
      11,
      14,
      18,
      24,
      31,
      35,
      74,
      98
    ],
    [
      31,
      16,
      13,
      10,
      10,
      0,
      10,
      10,
      12,
      18,
      26,
      29,
      69,
      92
    ],
    [
      36,
      21,
      18,
      14,
      11,
      10,
      0,
      10,
      10,
      13,
      20,
      24,
      63,
      87
    ],
    [
      39,
      24,
      21,
      16,
      14,
      10,
      10,
      0,
      10,
      10,
      17,
      21,
      60,
      84
    ],
    [
      43,
      28,
      25,
      20,
      18,
      12,
      10,
      10,
      0,
      10,
      14,
      17,
      57,
      80
    ],
    [
      49,
      34,
      31,
      26,
      24,
      18,
      13,
      10,
      10,
      0,
      10,
      11,
      51,
      74
    ],
    [
      56,
      41,
      38,
      34,
      31,
      26,
      20,
      17,
      14,
      10,
      0,
      10,
      43,
      67
    ],
    [
      60,
      45,
      42,
      38,
      35,
      29,
      24,
      21,
      17,
      11,
      10,
      0,
      39,
      63
    ],
    [
      99,
      85,
      82,
      77,
      74,
      69,
      63,
      60,
      57,
      51,
      43,
      39,
      0,
      23
    ],
    [
      123,
      108,
      105,
      100,
      98,
      92,
      87,
      84,
      80,
      74,
      67,
      63,
      23,
      0
    ]
  ]
},
{
  "id": "A422",
  "routeNo": "এ-৪২২",
  "nameBn": "কামরাঙ্গীরচর (বেড়িবাঁধ) → কোনাবাড়ী",
  "nameEn": "Kamrangirchar (Beribadh) → Konabari",
  "totalKm": 52,
  "stops": [
    {
      "id": 0,
      "nameEn": "Kamrangirchar (Beribadh)",
      "nameBn": "কামরাঙ্গীরচর (বেড়িবাঁধ)",
      "aliases": [
        "kamrangirchar",
        "কামরাঙ্গীরচর",
        "kamrangirchar beribadh"
      ]
    },
    {
      "id": 1,
      "nameEn": "Mohammadpur",
      "nameBn": "মোহাম্মদপুর",
      "aliases": [
        "mohammadpur",
        "মোহাম্মদপুর"
      ]
    },
    {
      "id": 2,
      "nameEn": "Asad Gate",
      "nameBn": "আসাদগেট",
      "aliases": [
        "asad gate",
        "আসাদগেট"
      ]
    },
    {
      "id": 3,
      "nameEn": "Technical",
      "nameBn": "টেকনিক্যাল",
      "aliases": [
        "technical",
        "টেকনিক্যাল"
      ]
    },
    {
      "id": 4,
      "nameEn": "Mirpur-1",
      "nameBn": "মিরপুর-১",
      "aliases": [
        "mirpur-1",
        "মিরপুর-১"
      ]
    },
    {
      "id": 5,
      "nameEn": "Shialbari Mor",
      "nameBn": "শিয়ালবাড়ী মোড়",
      "aliases": [
        "shialbari mor",
        "শিয়ালবাড়ী মোড়"
      ]
    },
    {
      "id": 6,
      "nameEn": "Diyabari (Beribadh)",
      "nameBn": "দিয়াবাড়ী (বেড়িবাঁধ)",
      "aliases": [
        "diyabari",
        "দিয়াবাড়ী",
        "diyabari beribadh"
      ]
    },
    {
      "id": 7,
      "nameEn": "Dhaur Mor",
      "nameBn": "ধউর মোড়",
      "aliases": [
        "dhaur mor",
        "ধউর মোড়",
        "dhaur",
        "ধউর"
      ]
    },
    {
      "id": 8,
      "nameEn": "Jirabo",
      "nameBn": "জিরাবো",
      "aliases": [
        "jirabo",
        "জিরাবো"
      ]
    },
    {
      "id": 9,
      "nameEn": "Narsinghapur",
      "nameBn": "নরসিংহপুর",
      "aliases": [
        "narsinghapur",
        "নরসিংহপুর"
      ]
    },
    {
      "id": 10,
      "nameEn": "Kashimpur",
      "nameBn": "কাশেমপুর",
      "aliases": [
        "kashimpur",
        "কাশেমপুর"
      ]
    },
    {
      "id": 11,
      "nameEn": "Konabari",
      "nameBn": "কোনাবাড়ী",
      "aliases": [
        "konabari",
        "কোনাবাড়ী"
      ]
    }
  ],
  "fareMatrix": [
    [
      0,
      25,
      29,
      39,
      43,
      45,
      50,
      86,
      101,
      119,
      130,
      140
    ],
    [
      25,
      0,
      10,
      14,
      18,
      20,
      25,
      61,
      76,
      94,
      105,
      116
    ],
    [
      29,
      10,
      0,
      10,
      15,
      16,
      21,
      57,
      72,
      90,
      101,
      112
    ],
    [
      39,
      14,
      10,
      0,
      10,
      10,
      11,
      47,
      62,
      80,
      91,
      102
    ],
    [
      43,
      18,
      15,
      10,
      0,
      10,
      10,
      42,
      58,
      76,
      86,
      97
    ],
    [
      45,
      20,
      16,
      10,
      10,
      0,
      10,
      41,
      56,
      74,
      85,
      95
    ],
    [
      50,
      25,
      21,
      11,
      10,
      10,
      0,
      36,
      51,
      69,
      80,
      91
    ],
    [
      86,
      61,
      57,
      47,
      42,
      41,
      36,
      0,
      15,
      33,
      44,
      55
    ],
    [
      101,
      76,
      72,
      62,
      58,
      56,
      51,
      15,
      0,
      18,
      29,
      39
    ],
    [
      119,
      94,
      90,
      80,
      76,
      74,
      69,
      33,
      18,
      0,
      11,
      22
    ],
    [
      130,
      105,
      101,
      91,
      86,
      85,
      80,
      44,
      29,
      11,
      0,
      11
    ],
    [
      140,
      116,
      112,
      102,
      97,
      95,
      91,
      55,
      39,
      22,
      11,
      0
    ]
  ]
},
{
  "id": "A424",
  "routeNo": "এ-৪২৪",
  "nameBn": "সাইনবোর্ড → ধউর",
  "nameEn": "Signboard → Dhaur",
  "totalKm": 33,
  "stops": [
    {
      "id": 0,
      "nameEn": "Signboard",
      "nameBn": "সাইনবোর্ড",
      "aliases": [
        "signboard",
        "সাইনবোর্ড"
      ]
    },
    {
      "id": 1,
      "nameEn": "Jatrabari",
      "nameBn": "যাত্রাবাড়ী",
      "aliases": [
        "jatrabari",
        "যাত্রাবাড়ী"
      ]
    },
    {
      "id": 2,
      "nameEn": "Sayedabad",
      "nameBn": "সায়েদাবাদ",
      "aliases": [
        "sayedabad",
        "সায়েদাবাদ"
      ]
    },
    {
      "id": 3,
      "nameEn": "Maniknagar",
      "nameBn": "মানিকনগর",
      "aliases": [
        "maniknagar",
        "মানিকনগর"
      ]
    },
    {
      "id": 4,
      "nameEn": "Basabo",
      "nameBn": "বাসাবো",
      "aliases": [
        "basabo",
        "বাসাবো"
      ]
    },
    {
      "id": 5,
      "nameEn": "Malibagh",
      "nameBn": "মালিবাগ",
      "aliases": [
        "malibagh",
        "মালিবাগ"
      ]
    },
    {
      "id": 6,
      "nameEn": "Rampura",
      "nameBn": "রামপুরা",
      "aliases": [
        "rampura",
        "রামপুরা",
        "rampura tv center",
        "রামপুরা টিভি সেন্টার"
      ]
    },
    {
      "id": 7,
      "nameEn": "Badda",
      "nameBn": "বাড্ডা",
      "aliases": [
        "badda",
        "বাড্ডা"
      ]
    },
    {
      "id": 8,
      "nameEn": "Natun Bazar",
      "nameBn": "নতুন বাজার",
      "aliases": [
        "natun bazar",
        "নতুন বাজার"
      ]
    },
    {
      "id": 9,
      "nameEn": "Kuril Bishwaroad",
      "nameBn": "কুড়িল বিশ্বরোড",
      "aliases": [
        "কুড়িল বিশ্বরোড",
        "kuril bishwaroad"
      ]
    },
    {
      "id": 10,
      "nameEn": "Khilkhet",
      "nameBn": "খিলক্ষেত",
      "aliases": [
        "khilkhet",
        "খিলক্ষেত"
      ]
    },
    {
      "id": 11,
      "nameEn": "Airport",
      "nameBn": "এয়ারপোর্ট",
      "aliases": [
        "airport",
        "এয়ারপোর্ট",
        "biman bandar",
        "বিমানবন্দর"
      ]
    },
    {
      "id": 12,
      "nameEn": "Abdullahpur",
      "nameBn": "আব্দুল্লাহপুর",
      "aliases": [
        "abdullahpur",
        "আব্দুল্লাহপুর"
      ]
    },
    {
      "id": 13,
      "nameEn": "Kamarpara",
      "nameBn": "কামারপাড়া",
      "aliases": [
        "kamarpara",
        "কামারপাড়া"
      ]
    },
    {
      "id": 14,
      "nameEn": "Dhaur",
      "nameBn": "ধউর",
      "aliases": [
        "dhaur",
        "ধউর"
      ]
    }
  ],
  "fareMatrix": [
    [
      0,
      14,
      16,
      20,
      25,
      30,
      36,
      41,
      47,
      54,
      57,
      64,
      74,
      77,
      89
    ],
    [
      14,
      0,
      10,
      10,
      12,
      16,
      23,
      28,
      33,
      41,
      43,
      51,
      61,
      64,
      76
    ],
    [
      16,
      10,
      0,
      10,
      10,
      14,
      20,
      25,
      31,
      38,
      41,
      48,
      58,
      61,
      73
    ],
    [
      20,
      10,
      10,
      0,
      10,
      10,
      16,
      21,
      27,
      34,
      37,
      44,
      54,
      58,
      69
    ],
    [
      25,
      12,
      10,
      10,
      0,
      10,
      11,
      16,
      22,
      29,
      31,
      39,
      49,
      52,
      64
    ],
    [
      30,
      16,
      14,
      10,
      10,
      0,
      10,
      11,
      17,
      24,
      27,
      34,
      44,
      48,
      59
    ],
    [
      36,
      23,
      20,
      16,
      11,
      10,
      0,
      10,
      11,
      18,
      20,
      28,
      38,
      41,
      53
    ],
    [
      41,
      28,
      25,
      21,
      16,
      11,
      10,
      0,
      10,
      13,
      15,
      23,
      33,
      36,
      48
    ],
    [
      47,
      33,
      31,
      27,
      22,
      17,
      11,
      10,
      0,
      10,
      10,
      17,
      27,
      31,
      42
    ],
    [
      54,
      41,
      38,
      34,
      29,
      24,
      18,
      13,
      10,
      0,
      10,
      10,
      20,
      23,
      35
    ],
    [
      57,
      43,
      41,
      37,
      31,
      27,
      20,
      15,
      10,
      10,
      0,
      10,
      18,
      21,
      32
    ],
    [
      64,
      51,
      48,
      44,
      39,
      34,
      28,
      23,
      17,
      10,
      10,
      0,
      10,
      13,
      25
    ],
    [
      74,
      61,
      58,
      54,
      49,
      44,
      38,
      33,
      27,
      20,
      18,
      10,
      0,
      10,
      15
    ],
    [
      77,
      64,
      61,
      58,
      52,
      48,
      41,
      36,
      31,
      23,
      21,
      13,
      10,
      0,
      12
    ],
    [
      89,
      76,
      73,
      69,
      64,
      59,
      53,
      48,
      42,
      35,
      32,
      25,
      15,
      12,
      0
    ]
  ]
},
{
  "id": "A426",
  "routeNo": "এ-৪২৬",
  "nameBn": "কাঁচপুর → পাটুরিয়া",
  "nameEn": "Kanchpur → Paturia",
  "totalKm": 104.5,
  "stops": [
    {
      "id": 0,
      "nameEn": "Kanchpur",
      "nameBn": "কাঁচপুর",
      "aliases": [
        "kanchpur",
        "কাঁচপুর"
      ]
    },
    {
      "id": 1,
      "nameEn": "Hanif Flyover",
      "nameBn": "হানিফ ফ্লাইওভার",
      "aliases": [
        "hanif flyover",
        "হানিফ ফ্লাইওভার",
        "mayor hanif flyover",
        "মেয়র হানিফ ফ্লাইওভার"
      ]
    },
    {
      "id": 2,
      "nameEn": "Paltan",
      "nameBn": "পল্টন",
      "aliases": [
        "paltan",
        "পল্টন"
      ]
    },
    {
      "id": 3,
      "nameEn": "Azimpur (Dhakeshwari)",
      "nameBn": "আজিমপুর (ঢাকেশ্বরী)",
      "aliases": [
        "azimpur",
        "আজিমপুর",
        "dhakeshwari",
        "ঢাকেশ্বরী"
      ]
    },
    {
      "id": 4,
      "nameEn": "Kalabagan",
      "nameBn": "কলাবাগান",
      "aliases": [
        "kalabagan",
        "কলাবাগান"
      ]
    },
    {
      "id": 5,
      "nameEn": "Shyamoli",
      "nameBn": "শ্যামলী",
      "aliases": [
        "shyamoli",
        "শ্যামলী"
      ]
    },
    {
      "id": 6,
      "nameEn": "Gabtoli",
      "nameBn": "গাবতলী",
      "aliases": [
        "gabtoli",
        "গাবতলী"
      ]
    },
    {
      "id": 7,
      "nameEn": "Savar",
      "nameBn": "সাভার",
      "aliases": [
        "savar",
        "সাভার"
      ]
    },
    {
      "id": 8,
      "nameEn": "Nabinagar",
      "nameBn": "নবীনগর",
      "aliases": [
        "nabinagar",
        "নবীনগর"
      ]
    },
    {
      "id": 9,
      "nameEn": "Islampur",
      "nameBn": "ইসলামপুর",
      "aliases": [
        "islampur",
        "ইসলামপুর"
      ]
    },
    {
      "id": 10,
      "nameEn": "Kalampur",
      "nameBn": "কালামপুর",
      "aliases": [
        "kalampur",
        "কালামপুর"
      ]
    },
    {
      "id": 11,
      "nameEn": "Manikganj",
      "nameBn": "মানিকগঞ্জ",
      "aliases": [
        "manikganj",
        "মানিকগঞ্জ"
      ]
    },
    {
      "id": 12,
      "nameEn": "Baniyajuri",
      "nameBn": "বানিয়াজুড়ি",
      "aliases": [
        "baniyajuri",
        "বানিয়াজুড়ি"
      ]
    },
    {
      "id": 13,
      "nameEn": "Barangail",
      "nameBn": "বরংগাইল",
      "aliases": [
        "barangail",
        "বরংগাইল",
        "borongail"
      ]
    },
    {
      "id": 14,
      "nameEn": "Utholi",
      "nameBn": "উথলী",
      "aliases": [
        "utholi",
        "উথলী"
      ]
    },
    {
      "id": 15,
      "nameEn": "Paturia",
      "nameBn": "পাটুরিয়া",
      "aliases": [
        "paturia",
        "পাটুরিয়া"
      ]
    }
  ],
  "fareMatrix": [
    [
      0,
      38,
      46,
      47,
      55,
      63,
      71,
      109,
      131,
      140,
      160,
      208,
      228,
      244,
      262,
      282
    ],
    [
      38,
      0,
      10,
      10,
      18,
      26,
      33,
      71,
      94,
      102,
      122,
      171,
      190,
      206,
      224,
      244
    ],
    [
      46,
      10,
      0,
      10,
      10,
      18,
      25,
      63,
      86,
      94,
      114,
      163,
      182,
      198,
      216,
      236
    ],
    [
      47,
      10,
      10,
      0,
      10,
      16,
      24,
      61,
      84,
      93,
      113,
      161,
      180,
      197,
      214,
      235
    ],
    [
      55,
      18,
      10,
      10,
      0,
      10,
      15,
      53,
      76,
      85,
      105,
      153,
      172,
      188,
      206,
      227
    ],
    [
      63,
      26,
      18,
      16,
      10,
      0,
      10,
      45,
      68,
      76,
      97,
      145,
      164,
      180,
      198,
      219
    ],
    [
      71,
      33,
      25,
      24,
      15,
      10,
      0,
      38,
      61,
      69,
      89,
      138,
      157,
      173,
      191,
      211
    ],
    [
      109,
      71,
      63,
      61,
      53,
      45,
      38,
      0,
      23,
      31,
      52,
      100,
      119,
      135,
      153,
      174
    ],
    [
      131,
      94,
      86,
      84,
      76,
      68,
      61,
      23,
      0,
      10,
      29,
      77,
      96,
      112,
      130,
      151
    ],
    [
      140,
      102,
      94,
      93,
      85,
      76,
      69,
      31,
      10,
      0,
      20,
      69,
      88,
      104,
      122,
      142
    ],
    [
      160,
      122,
      114,
      113,
      105,
      97,
      89,
      52,
      29,
      20,
      0,
      48,
      68,
      84,
      102,
      122
    ],
    [
      208,
      171,
      163,
      161,
      153,
      145,
      138,
      100,
      77,
      69,
      48,
      0,
      19,
      35,
      53,
      74
    ],
    [
      228,
      190,
      182,
      180,
      172,
      164,
      157,
      119,
      96,
      88,
      68,
      19,
      0,
      16,
      34,
      55
    ],
    [
      244,
      206,
      198,
      197,
      188,
      180,
      173,
      135,
      112,
      104,
      84,
      35,
      16,
      0,
      18,
      38
    ],
    [
      262,
      224,
      216,
      214,
      206,
      198,
      191,
      153,
      130,
      122,
      102,
      53,
      34,
      18,
      0,
      21
    ],
    [
      282,
      244,
      236,
      235,
      227,
      219,
      211,
      174,
      151,
      142,
      122,
      74,
      55,
      38,
      21,
      0
    ]
  ]
},
{
  "id": "A429",
  "routeNo": "এ-৪২৯",
  "nameBn": "সাভার → সাইনবোর্ড",
  "nameEn": "Savar → Signboard",
  "totalKm": 34,
  "stops": [
    {
      "id": 0,
      "nameEn": "Savar",
      "nameBn": "সাভার",
      "aliases": [
        "savar",
        "সাভার"
      ]
    },
    {
      "id": 1,
      "nameEn": "Hemayetpur",
      "nameBn": "হেমায়েতপুর",
      "aliases": [
        "hemayetpur",
        "হেমায়েতপুর"
      ]
    },
    {
      "id": 2,
      "nameEn": "Gabtoli",
      "nameBn": "গাবতলী",
      "aliases": [
        "gabtoli",
        "গাবতলী"
      ]
    },
    {
      "id": 3,
      "nameEn": "Shyamoli",
      "nameBn": "শ্যামলী",
      "aliases": [
        "shyamoli",
        "শ্যামলী"
      ]
    },
    {
      "id": 4,
      "nameEn": "Asad Gate",
      "nameBn": "আসাদগেট",
      "aliases": [
        "asad gate",
        "আসাদগেট"
      ]
    },
    {
      "id": 5,
      "nameEn": "Farmgate",
      "nameBn": "ফার্মগেট",
      "aliases": [
        "farmgate",
        "ফার্মগেট"
      ]
    },
    {
      "id": 6,
      "nameEn": "Banglamotor",
      "nameBn": "বাংলামটর",
      "aliases": [
        "banglamotor",
        "বাংলামটর"
      ]
    },
    {
      "id": 7,
      "nameEn": "Moghbazar",
      "nameBn": "মগবাজার",
      "aliases": [
        "moghbazar",
        "মগবাজার"
      ]
    },
    {
      "id": 8,
      "nameEn": "Malibagh",
      "nameBn": "মালিবাগ",
      "aliases": [
        "malibagh",
        "মালিবাগ"
      ]
    },
    {
      "id": 9,
      "nameEn": "Khilgaon",
      "nameBn": "খিলগাঁও",
      "aliases": [
        "khilgaon",
        "খিলগাঁও"
      ]
    },
    {
      "id": 10,
      "nameEn": "Mugda",
      "nameBn": "মুগদা",
      "aliases": [
        "mugda",
        "মুগদা"
      ]
    },
    {
      "id": 11,
      "nameEn": "Sayedabad",
      "nameBn": "সায়েদাবাদ",
      "aliases": [
        "sayedabad",
        "সায়েদাবাদ"
      ]
    },
    {
      "id": 12,
      "nameEn": "Sonir Akhra",
      "nameBn": "শনির আখড়া",
      "aliases": [
        "sonir akhra",
        "শনির আখড়া"
      ]
    },
    {
      "id": 13,
      "nameEn": "Signboard",
      "nameBn": "সাইনবোর্ড",
      "aliases": [
        "signboard",
        "সাইনবোর্ড"
      ]
    }
  ],
  "fareMatrix": [
    [
      0,
      19,
      38,
      45,
      50,
      56,
      59,
      61,
      64,
      66,
      69,
      73,
      82,
      92
    ],
    [
      19,
      0,
      19,
      26,
      31,
      37,
      40,
      42,
      45,
      47,
      50,
      54,
      63,
      73
    ],
    [
      38,
      19,
      0,
      10,
      12,
      17,
      21,
      23,
      26,
      27,
      30,
      35,
      44,
      53
    ],
    [
      45,
      26,
      10,
      0,
      10,
      11,
      14,
      16,
      19,
      21,
      23,
      28,
      37,
      47
    ],
    [
      50,
      31,
      12,
      10,
      0,
      10,
      10,
      11,
      14,
      15,
      18,
      23,
      32,
      42
    ],
    [
      56,
      37,
      17,
      11,
      10,
      0,
      10,
      10,
      10,
      10,
      13,
      18,
      26,
      36
    ],
    [
      59,
      40,
      21,
      14,
      10,
      10,
      0,
      10,
      10,
      10,
      10,
      14,
      23,
      33
    ],
    [
      61,
      42,
      23,
      16,
      11,
      10,
      10,
      0,
      10,
      10,
      10,
      12,
      21,
      31
    ],
    [
      64,
      45,
      26,
      19,
      14,
      10,
      10,
      10,
      0,
      10,
      10,
      10,
      18,
      28
    ],
    [
      66,
      47,
      27,
      21,
      15,
      10,
      10,
      10,
      10,
      0,
      10,
      10,
      16,
      26
    ],
    [
      69,
      50,
      30,
      23,
      18,
      13,
      10,
      10,
      10,
      10,
      0,
      10,
      14,
      23
    ],
    [
      73,
      54,
      35,
      28,
      23,
      18,
      14,
      12,
      10,
      10,
      10,
      0,
      10,
      19
    ],
    [
      82,
      63,
      44,
      37,
      32,
      26,
      23,
      21,
      18,
      16,
      14,
      10,
      0,
      10
    ],
    [
      92,
      73,
      53,
      47,
      42,
      36,
      33,
      31,
      28,
      26,
      23,
      19,
      10,
      0
    ]
  ]
},
{
  "id": "A430",
  "routeNo": "এ-৪৩০",
  "nameBn": "ভাওয়ার ভিটি (দক্ষিণ কেরানীগঞ্জ) → দিয়াবাড়ী",
  "nameEn": "Bhawar Viti (South Keraniganj) → Diyabari",
  "totalKm": 35.1,
  "stops": [
    {
      "id": 0,
      "nameEn": "Bhawar Viti (South Keraniganj)",
      "nameBn": "ভাওয়ার ভিটি (দক্ষিণ কেরানীগঞ্জ)",
      "aliases": [
        "bhawar viti",
        "ভাওয়ার ভিটি"
      ]
    },
    {
      "id": 1,
      "nameEn": "Abdullahpur (Keraniganj)",
      "nameBn": "আব্দুল্লাহপুর (কেরানীগঞ্জ)",
      "aliases": [
        "abdullahpur (keraniganj)",
        "আব্দুল্লাহপুর (কেরানীগঞ্জ)"
      ]
    },
    {
      "id": 2,
      "nameEn": "Rajendrapur Bazar",
      "nameBn": "রাজেন্দ্রপুর বাজার",
      "aliases": [
        "rajendrapur bazar",
        "রাজেন্দ্রপুর বাজার"
      ]
    },
    {
      "id": 3,
      "nameEn": "Chunkutia Bazar",
      "nameBn": "চুনকুটিয়া বাজার",
      "aliases": [
        "chunkutia bazar",
        "চুনকুটিয়া বাজার"
      ]
    },
    {
      "id": 4,
      "nameEn": "Kadamtali",
      "nameBn": "কদমতলী",
      "aliases": [
        "kadamtali",
        "কদমতলী"
      ]
    },
    {
      "id": 5,
      "nameEn": "Babu Bazar",
      "nameBn": "বাবু বাজার",
      "aliases": [
        "babu bazar",
        "বাবু বাজার"
      ]
    },
    {
      "id": 6,
      "nameEn": "Gulistan (Fulbaria)",
      "nameBn": "গুলিস্তান (ফুলবাড়িয়া)",
      "aliases": [
        "gulistan",
        "গুলিস্তান",
        "fulbaria",
        "ফুলবাড়িয়া"
      ]
    },
    {
      "id": 7,
      "nameEn": "Paltan",
      "nameBn": "পল্টন",
      "aliases": [
        "paltan",
        "পল্টন"
      ]
    },
    {
      "id": 8,
      "nameEn": "Kakrail",
      "nameBn": "কাকরাইল",
      "aliases": [
        "kakrail",
        "কাকরাইল"
      ]
    },
    {
      "id": 9,
      "nameEn": "Malibagh",
      "nameBn": "মালিবাগ",
      "aliases": [
        "malibagh",
        "মালিবাগ"
      ]
    },
    {
      "id": 10,
      "nameEn": "Mouchak (Flyover)",
      "nameBn": "মৌচাক (ফ্লাইওভার)",
      "aliases": [
        "mouchak",
        "মৌচাক"
      ]
    },
    {
      "id": 11,
      "nameEn": "Rampura",
      "nameBn": "রামপুরা",
      "aliases": [
        "rampura",
        "রামপুরা"
      ]
    },
    {
      "id": 12,
      "nameEn": "Badda",
      "nameBn": "বাড্ডা",
      "aliases": [
        "badda",
        "বাড্ডা"
      ]
    },
    {
      "id": 13,
      "nameEn": "Natun Bazar",
      "nameBn": "নতুন বাজার",
      "aliases": [
        "natun bazar",
        "নতুন বাজার"
      ]
    },
    {
      "id": 14,
      "nameEn": "Kuril Bishwaroad",
      "nameBn": "কুড়িল বিশ্বরোড",
      "aliases": [
        "কুড়িল বিশ্বরোড",
        "kuril bishwaroad"
      ]
    },
    {
      "id": 15,
      "nameEn": "Khilkhet",
      "nameBn": "খিলক্ষেত",
      "aliases": [
        "khilkhet",
        "খিলক্ষেত"
      ]
    },
    {
      "id": 16,
      "nameEn": "Airport",
      "nameBn": "এয়ারপোর্ট",
      "aliases": [
        "airport",
        "এয়ারপোর্ট",
        "biman bandar",
        "বিমানবন্দর"
      ]
    },
    {
      "id": 17,
      "nameEn": "House Building",
      "nameBn": "হাউজবিল্ডিং",
      "aliases": [
        "house building",
        "হাউজবিল্ডিং"
      ]
    },
    {
      "id": 18,
      "nameEn": "Diyabari",
      "nameBn": "দিয়াবাড়ী",
      "aliases": [
        "diyabari",
        "দিয়াবাড়ী"
      ]
    }
  ],
  "fareMatrix": [
    [
      0,
      11,
      12,
      24,
      26,
      30,
      34,
      36,
      38,
      41,
      41,
      46,
      54,
      58,
      65,
      70,
      77,
      85,
      95
    ],
    [
      11,
      0,
      10,
      13,
      15,
      20,
      23,
      25,
      28,
      30,
      31,
      35,
      43,
      47,
      55,
      59,
      67,
      74,
      84
    ],
    [
      12,
      10,
      0,
      11,
      13,
      18,
      22,
      24,
      26,
      28,
      29,
      34,
      42,
      46,
      53,
      58,
      65,
      72,
      82
    ],
    [
      24,
      13,
      11,
      0,
      10,
      10,
      10,
      12,
      14,
      17,
      18,
      22,
      30,
      34,
      41,
      46,
      53,
      61,
      71
    ],
    [
      26,
      15,
      13,
      10,
      0,
      10,
      10,
      10,
      12,
      15,
      16,
      20,
      28,
      32,
      39,
      44,
      52,
      59,
      69
    ],
    [
      30,
      20,
      18,
      10,
      10,
      0,
      10,
      10,
      10,
      10,
      11,
      15,
      24,
      28,
      35,
      40,
      47,
      55,
      65
    ],
    [
      34,
      23,
      22,
      10,
      10,
      10,
      0,
      10,
      10,
      10,
      10,
      12,
      20,
      24,
      31,
      36,
      43,
      51,
      61
    ],
    [
      36,
      25,
      24,
      12,
      10,
      10,
      10,
      0,
      10,
      10,
      10,
      10,
      18,
      22,
      29,
      34,
      41,
      49,
      59
    ],
    [
      38,
      28,
      26,
      14,
      12,
      10,
      10,
      10,
      0,
      10,
      10,
      10,
      16,
      20,
      27,
      32,
      39,
      47,
      57
    ],
    [
      41,
      30,
      28,
      17,
      15,
      10,
      10,
      10,
      10,
      0,
      10,
      10,
      14,
      17,
      25,
      29,
      37,
      44,
      54
    ],
    [
      41,
      31,
      29,
      18,
      16,
      11,
      10,
      10,
      10,
      10,
      0,
      10,
      13,
      16,
      24,
      29,
      36,
      43,
      53
    ],
    [
      46,
      35,
      34,
      22,
      20,
      15,
      12,
      10,
      10,
      10,
      10,
      0,
      10,
      12,
      19,
      24,
      32,
      39,
      49
    ],
    [
      54,
      43,
      42,
      30,
      28,
      24,
      20,
      18,
      16,
      14,
      13,
      10,
      0,
      10,
      11,
      16,
      23,
      31,
      41
    ],
    [
      58,
      47,
      46,
      34,
      32,
      28,
      24,
      22,
      20,
      17,
      16,
      12,
      10,
      0,
      10,
      12,
      19,
      27,
      37
    ],
    [
      65,
      55,
      53,
      41,
      39,
      35,
      31,
      29,
      27,
      25,
      24,
      19,
      11,
      10,
      0,
      10,
      12,
      20,
      30
    ],
    [
      70,
      59,
      58,
      46,
      44,
      40,
      36,
      34,
      32,
      29,
      29,
      24,
      16,
      12,
      10,
      0,
      10,
      15,
      25
    ],
    [
      77,
      67,
      65,
      53,
      52,
      47,
      43,
      41,
      39,
      37,
      36,
      32,
      23,
      19,
      12,
      10,
      0,
      10,
      18
    ],
    [
      85,
      74,
      72,
      61,
      59,
      55,
      51,
      49,
      47,
      44,
      43,
      39,
      31,
      27,
      20,
      15,
      10,
      0,
      10
    ],
    [
      95,
      84,
      82,
      71,
      69,
      65,
      61,
      59,
      57,
      54,
      53,
      49,
      41,
      37,
      30,
      25,
      18,
      10,
      0
    ]
  ]
},
{
  "id": "A431",
  "routeNo": "এ-৪৩১",
  "nameBn": "চিড়িয়াখানা → মাইসাখালী বেড়িবাঁধ",
  "nameEn": "Chiriakhana → Maisakhali Beribadh",
  "totalKm": 53.8,
  "stops": [
    {
      "id": 0,
      "nameEn": "Chiriakhana",
      "nameBn": "চিড়িয়াখানা",
      "aliases": [
        "chiriakhana",
        "চিড়িয়াখানা"
      ]
    },
    {
      "id": 1,
      "nameEn": "Mirpur-1",
      "nameBn": "মিরপুর-১",
      "aliases": [
        "mirpur-1",
        "মিরপুর-১"
      ]
    },
    {
      "id": 2,
      "nameEn": "Technical",
      "nameBn": "টেকনিক্যাল",
      "aliases": [
        "technical",
        "টেকনিক্যাল"
      ]
    },
    {
      "id": 3,
      "nameEn": "Asad Gate",
      "nameBn": "আসাদগেট",
      "aliases": [
        "asad gate",
        "আসাদগেট"
      ]
    },
    {
      "id": 4,
      "nameEn": "Science Lab",
      "nameBn": "সাইন্সল্যাব",
      "aliases": [
        "science lab",
        "সাইন্সল্যাব"
      ]
    },
    {
      "id": 5,
      "nameEn": "Azimpur",
      "nameBn": "আজিমপুর",
      "aliases": [
        "azimpur",
        "আজিমপুর"
      ]
    },
    {
      "id": 6,
      "nameEn": "Chankharpul",
      "nameBn": "চানখারপুল",
      "aliases": [
        "chankharpul",
        "চানখারপুল"
      ]
    },
    {
      "id": 7,
      "nameEn": "Fulbaria",
      "nameBn": "ফুলবাড়িয়া",
      "aliases": [
        "fulbaria",
        "ফুলবাড়িয়া"
      ]
    },
    {
      "id": 8,
      "nameEn": "Nababazar",
      "nameBn": "নয়াবাজার",
      "aliases": [
        "nababazar",
        "নয়াবাজার"
      ]
    },
    {
      "id": 9,
      "nameEn": "Babu Bazar Bridge",
      "nameBn": "বাবু বাজার ব্রীজ",
      "aliases": [
        "babu bazar bridge",
        "বাবু বাজার ব্রীজ"
      ]
    },
    {
      "id": 10,
      "nameEn": "Kadamtali",
      "nameBn": "কদমতলী",
      "aliases": [
        "kadamtali",
        "কদমতলী"
      ]
    },
    {
      "id": 11,
      "nameEn": "Chunkutia",
      "nameBn": "চুনকুটিয়া",
      "aliases": [
        "chunkutia",
        "চুনকুটিয়া"
      ]
    },
    {
      "id": 12,
      "nameEn": "Ruitpur",
      "nameBn": "রুইতপুর",
      "aliases": [
        "ruitpur",
        "রুইতপুর"
      ]
    },
    {
      "id": 13,
      "nameEn": "Tulshikhali",
      "nameBn": "তুলশীখালী",
      "aliases": [
        "tulshikhali",
        "তুলশীখালী"
      ]
    },
    {
      "id": 14,
      "nameEn": "Komarganj",
      "nameBn": "কোমরগঞ্জ",
      "aliases": [
        "komarganj",
        "কোমরগঞ্জ"
      ]
    },
    {
      "id": 15,
      "nameEn": "Bandura",
      "nameBn": "বান্দুরা",
      "aliases": [
        "bandura",
        "বান্দুরা"
      ]
    },
    {
      "id": 16,
      "nameEn": "Maisakhali Beribadh",
      "nameBn": "মাইসাখালী বেড়িবাঁধ",
      "aliases": [
        "maisakhali beribadh",
        "মাইসাখালী বেড়িবাঁধ"
      ]
    },
    {
      "id": 17,
      "nameEn": "Beribadh",
      "nameBn": "বেড়িবাঁধ",
      "aliases": [
        "beribadh",
        "বেড়িবাঁধ"
      ]
    }
  ],
  "fareMatrix": [
    [
      0,
      10,
      10,
      20,
      27,
      34,
      43,
      48,
      51,
      55,
      58,
      71,
      82,
      104,
      138,
      141,
      144,
      145
    ],
    [
      10,
      0,
      10,
      15,
      22,
      29,
      39,
      43,
      46,
      50,
      53,
      66,
      77,
      99,
      133,
      136,
      139,
      140
    ],
    [
      10,
      10,
      0,
      10,
      16,
      24,
      33,
      38,
      41,
      44,
      48,
      61,
      72,
      94,
      128,
      131,
      133,
      135
    ],
    [
      20,
      15,
      10,
      0,
      10,
      14,
      23,
      28,
      31,
      35,
      38,
      51,
      62,
      84,
      118,
      121,
      124,
      125
    ],
    [
      27,
      22,
      16,
      10,
      0,
      10,
      17,
      21,
      24,
      28,
      31,
      44,
      56,
      77,
      112,
      114,
      117,
      119
    ],
    [
      34,
      29,
      24,
      14,
      10,
      0,
      10,
      14,
      17,
      21,
      24,
      37,
      49,
      70,
      104,
      107,
      110,
      112
    ],
    [
      43,
      39,
      33,
      23,
      17,
      10,
      0,
      10,
      10,
      11,
      15,
      28,
      39,
      61,
      95,
      97,
      100,
      102
    ],
    [
      48,
      43,
      38,
      28,
      21,
      14,
      10,
      0,
      10,
      10,
      10,
      23,
      35,
      56,
      90,
      93,
      96,
      97
    ],
    [
      51,
      46,
      41,
      31,
      24,
      17,
      10,
      10,
      0,
      10,
      10,
      20,
      31,
      53,
      87,
      90,
      93,
      94
    ],
    [
      55,
      50,
      44,
      35,
      28,
      21,
      11,
      10,
      10,
      0,
      10,
      16,
      28,
      50,
      84,
      86,
      89,
      91
    ],
    [
      58,
      53,
      48,
      38,
      31,
      24,
      15,
      10,
      10,
      10,
      0,
      13,
      24,
      46,
      80,
      83,
      86,
      87
    ],
    [
      71,
      66,
      61,
      51,
      44,
      37,
      28,
      23,
      20,
      16,
      13,
      0,
      11,
      33,
      67,
      70,
      73,
      74
    ],
    [
      82,
      77,
      72,
      62,
      56,
      49,
      39,
      35,
      31,
      28,
      24,
      11,
      0,
      22,
      56,
      59,
      61,
      63
    ],
    [
      104,
      99,
      94,
      84,
      77,
      70,
      61,
      56,
      53,
      50,
      46,
      33,
      22,
      0,
      34,
      37,
      39,
      41
    ],
    [
      138,
      133,
      128,
      118,
      112,
      104,
      95,
      90,
      87,
      84,
      80,
      67,
      56,
      34,
      0,
      10,
      10,
      10
    ],
    [
      141,
      136,
      131,
      121,
      114,
      107,
      97,
      93,
      90,
      86,
      83,
      70,
      59,
      37,
      10,
      0,
      10,
      10
    ],
    [
      144,
      139,
      133,
      124,
      117,
      110,
      100,
      96,
      93,
      89,
      86,
      73,
      61,
      39,
      10,
      10,
      0,
      10
    ],
    [
      145,
      140,
      135,
      125,
      119,
      112,
      102,
      97,
      94,
      91,
      87,
      74,
      63,
      41,
      10,
      10,
      10,
      0
    ]
  ]
},
{
  "id": "A432",
  "routeNo": "এ-৪৩২",
  "nameBn": "কুড়িল বিশ্বরোড → পলাশী",
  "nameEn": "Kuril Biswa Road → Palashi",
  "totalKm": 20,
  "stops": [
    {
      "id": 0,
      "nameEn": "Kuril Bishwaroad",
      "nameBn": "কুড়িল বিশ্বরোড",
      "aliases": [
        "কুড়িল বিশ্বরোড",
        "kuril bishwaroad"
      ]
    },
    {
      "id": 1,
      "nameEn": "Natun Bazar",
      "nameBn": "নতুন বাজার",
      "aliases": [
        "natun bazar",
        "নতুন বাজার"
      ]
    },
    {
      "id": 2,
      "nameEn": "Badda Link Road",
      "nameBn": "বাড্ডা লিংক রোড",
      "aliases": [
        "badda link road",
        "বাড্ডা লিংক রোড"
      ]
    },
    {
      "id": 3,
      "nameEn": "Gulshan-1",
      "nameBn": "গুলশান-১",
      "aliases": [
        "gulshan-1",
        "গুলশান-১"
      ]
    },
    {
      "id": 4,
      "nameEn": "Mohakhali",
      "nameBn": "মহাখালী",
      "aliases": [
        "mohakhali",
        "মহাখালী"
      ]
    },
    {
      "id": 5,
      "nameEn": "Rainbow",
      "nameBn": "রেইনবো",
      "aliases": [
        "rainbow",
        "রেইনবো"
      ]
    },
    {
      "id": 6,
      "nameEn": "Sonargaon",
      "nameBn": "সোনারগাঁও",
      "aliases": [
        "sonargaon",
        "সোনারগাঁও"
      ]
    },
    {
      "id": 7,
      "nameEn": "Russel Square",
      "nameBn": "রাসেল স্কয়ার",
      "aliases": [
        "russel square",
        "রাসেল স্কয়ার"
      ]
    },
    {
      "id": 8,
      "nameEn": "Kalabagan",
      "nameBn": "কলাবাগান",
      "aliases": [
        "kalabagan",
        "কলাবাগান"
      ]
    },
    {
      "id": 9,
      "nameEn": "New Market",
      "nameBn": "নিউমার্কেট",
      "aliases": [
        "new market",
        "নিউমার্কেট"
      ]
    },
    {
      "id": 10,
      "nameEn": "Palashi",
      "nameBn": "পলাশী",
      "aliases": [
        "palashi",
        "পলাশী"
      ]
    }
  ],
  "fareMatrix": [
    [
      0,
      10,
      15,
      18,
      23,
      31,
      33,
      38,
      41,
      45,
      54
    ],
    [
      10,
      0,
      10,
      10,
      14,
      21,
      24,
      29,
      32,
      35,
      45
    ],
    [
      15,
      10,
      0,
      10,
      10,
      16,
      18,
      23,
      26,
      30,
      39
    ],
    [
      18,
      10,
      10,
      0,
      10,
      13,
      16,
      20,
      23,
      27,
      36
    ],
    [
      23,
      14,
      10,
      10,
      0,
      10,
      10,
      15,
      18,
      22,
      31
    ],
    [
      31,
      21,
      16,
      13,
      10,
      0,
      10,
      10,
      10,
      14,
      23
    ],
    [
      33,
      24,
      18,
      16,
      10,
      10,
      0,
      10,
      10,
      11,
      21
    ],
    [
      38,
      29,
      23,
      20,
      15,
      10,
      10,
      0,
      10,
      10,
      16
    ],
    [
      41,
      32,
      26,
      23,
      18,
      10,
      10,
      10,
      0,
      10,
      13
    ],
    [
      45,
      35,
      30,
      27,
      22,
      14,
      11,
      10,
      10,
      0,
      10
    ],
    [
      54,
      45,
      39,
      36,
      31,
      23,
      21,
      16,
      13,
      10,
      0
    ]
  ]
},
{
  "id": "A438",
  "routeNo": "এ-৪৩৮",
  "nameBn": "সদরঘাট ভিক্টোরিয়া পার্ক → শ্রীপুর",
  "nameEn": "Sadarghat Victoria Park → Sreepur",
  "totalKm": 59.8,
  "stops": [
    {
      "id": 0,
      "nameEn": "Sadarghat Victoria Park",
      "nameBn": "সদরঘাট ভিক্টোরিয়া পার্ক",
      "aliases": [
        "sadarghat victoria park",
        "সদরঘাট ভিক্টোরিয়া পার্ক",
        "sadarghat",
        "সদরঘাট",
        "সদর ঘাট ভিক্টোরিয়া পার্ক",
        "সদর ঘাট ভিক্টোরিয়া",
        "সদর ঘাট",
        "ভিক্টোরিয়া পার্ক",
        "ভিক্টোরিয়া পার্ক",
        "victoria park",
        "sadar ghat",
        "sadar ghat victoria park"
      ]
    },
    {
      "id": 1,
      "nameEn": "Golap Shah Mazar",
      "nameBn": "গোলাপ শাহ্ মাজার",
      "aliases": [
        "golap shah mazar",
        "গোলাপ শাহ্ মাজার",
        "golap shah"
      ]
    },
    {
      "id": 2,
      "nameEn": "Kakrail",
      "nameBn": "কাকরাইল",
      "aliases": [
        "kakrail",
        "কাকরাইল"
      ]
    },
    {
      "id": 3,
      "nameEn": "Malibagh",
      "nameBn": "মালিবাগ",
      "aliases": [
        "malibagh",
        "মালিবাগ"
      ]
    },
    {
      "id": 4,
      "nameEn": "Mouchak",
      "nameBn": "মৌচাক",
      "aliases": [
        "mouchak",
        "মৌচাক"
      ]
    },
    {
      "id": 5,
      "nameEn": "Rampura",
      "nameBn": "রামপুরা",
      "aliases": [
        "rampura",
        "রামপুরা"
      ]
    },
    {
      "id": 6,
      "nameEn": "Kuril Bishwaroad",
      "nameBn": "কুড়িল বিশ্বরোড",
      "aliases": [
        "kuril bishwaroad",
        "কুড়িল বিশ্বরোড"
      ]
    },
    {
      "id": 7,
      "nameEn": "Airport",
      "nameBn": "এয়ারপোর্ট",
      "aliases": [
        "airport",
        "এয়ারপোর্ট",
        "biman bandar",
        "বিমানবন্দর"
      ]
    },
    {
      "id": 8,
      "nameEn": "Abdullahpur",
      "nameBn": "আব্দুল্লাহপুর",
      "aliases": [
        "abdullahpur",
        "আব্দুল্লাহপুর"
      ]
    },
    {
      "id": 9,
      "nameEn": "Tongi",
      "nameBn": "টঙ্গী",
      "aliases": [
        "tongi",
        "টঙ্গী"
      ]
    },
    {
      "id": 10,
      "nameEn": "Board Bazar",
      "nameBn": "বোর্ড বাজার",
      "aliases": [
        "board bazar",
        "বোর্ড বাজার"
      ]
    },
    {
      "id": 11,
      "nameEn": "Chowrasta (Gazipur Chowrasta)",
      "nameBn": "চৌরাস্তা (গাজীপুর চৌরাস্তা)",
      "aliases": [
        "gazipur chowrasta",
        "গাজীপুর চৌরাস্তা",
        "chowrasta",
        "চৌরাস্তা"
      ]
    },
    {
      "id": 12,
      "nameEn": "Bhawal (Jatiyo Uddan)",
      "nameBn": "ভাওয়াল (জাতীয় উদ্যান)",
      "aliases": [
        "bhawal",
        "ভাওয়াল",
        "jatiyo uddan",
        "জাতীয় উদ্যান"
      ]
    },
    {
      "id": 13,
      "nameEn": "Masterbari",
      "nameBn": "মাস্টারবাড়ী",
      "aliases": [
        "masterbari",
        "মাস্টারবাড়ী"
      ]
    },
    {
      "id": 14,
      "nameEn": "Sreepur",
      "nameBn": "শ্রীপুর",
      "aliases": [
        "sreepur",
        "শ্রীপুর"
      ]
    }
  ],
  "fareMatrix": [
    [
      0,
      10,
      11,
      13,
      14,
      21,
      38,
      50,
      60,
      75,
      89,
      101,
      107,
      134,
      161
    ],
    [
      10,
      0,
      10,
      10,
      10,
      14,
      31,
      43,
      53,
      68,
      82,
      94,
      100,
      127,
      154
    ],
    [
      11,
      10,
      0,
      10,
      10,
      11,
      27,
      39,
      49,
      64,
      78,
      90,
      97,
      124,
      151
    ],
    [
      13,
      10,
      10,
      0,
      10,
      10,
      25,
      38,
      47,
      62,
      76,
      88,
      95,
      122,
      149
    ],
    [
      14,
      10,
      10,
      10,
      0,
      10,
      24,
      36,
      46,
      61,
      75,
      87,
      94,
      121,
      148
    ],
    [
      21,
      14,
      11,
      10,
      10,
      0,
      16,
      29,
      38,
      53,
      68,
      79,
      86,
      113,
      140
    ],
    [
      38,
      31,
      27,
      25,
      24,
      16,
      0,
      12,
      22,
      37,
      51,
      63,
      70,
      97,
      124
    ],
    [
      50,
      43,
      39,
      38,
      36,
      29,
      12,
      0,
      10,
      25,
      39,
      51,
      57,
      84,
      111
    ],
    [
      60,
      53,
      49,
      47,
      46,
      38,
      22,
      10,
      0,
      15,
      29,
      41,
      48,
      75,
      102
    ],
    [
      75,
      68,
      64,
      62,
      61,
      53,
      37,
      25,
      15,
      0,
      14,
      26,
      33,
      60,
      87
    ],
    [
      89,
      82,
      78,
      76,
      75,
      68,
      51,
      39,
      29,
      14,
      0,
      12,
      18,
      45,
      72
    ],
    [
      101,
      94,
      90,
      88,
      87,
      79,
      63,
      51,
      41,
      26,
      12,
      0,
      10,
      34,
      61
    ],
    [
      107,
      100,
      97,
      95,
      94,
      86,
      70,
      57,
      48,
      33,
      18,
      10,
      0,
      27,
      54
    ],
    [
      134,
      127,
      124,
      122,
      121,
      113,
      97,
      84,
      75,
      60,
      45,
      34,
      27,
      0,
      27
    ],
    [
      161,
      154,
      151,
      149,
      148,
      140,
      124,
      111,
      102,
      87,
      72,
      61,
      54,
      27,
      0
    ]
  ]
},
{
  "id": "A439",
  "routeNo": "এ-৪৩৯",
  "nameBn": "খিলগাঁও খিদমাহ হাসপাতাল → ঘাটারচর",
  "nameEn": "Khilgaon Khidmah Hospital → Ghatarchar",
  "totalKm": 20,
  "stops": [
    {
      "id": 0,
      "nameEn": "Khilgaon Khidmah Hospital",
      "nameBn": "খিলগাঁও খিদমাহ হাসপাতাল",
      "aliases": [
        "khilgaon khidmah hospital",
        "খিলগাঁও খিদমাহ হাসপাতাল",
        "khidmah hospital",
        "খিদমাহ হাসপাতাল"
      ]
    },
    {
      "id": 1,
      "nameEn": "Khilgaon Railgate",
      "nameBn": "খিলগাঁও রেলগেট",
      "aliases": [
        "khilgaon railgate",
        "খিলগাঁও রেলগেট"
      ]
    },
    {
      "id": 2,
      "nameEn": "Malibagh",
      "nameBn": "মালিবাগ",
      "aliases": [
        "malibagh",
        "মালিবাগ"
      ]
    },
    {
      "id": 3,
      "nameEn": "Mouchak",
      "nameBn": "মৌচাক",
      "aliases": [
        "mouchak",
        "মৌচাক"
      ]
    },
    {
      "id": 4,
      "nameEn": "Moghbazar",
      "nameBn": "মগবাজার",
      "aliases": [
        "moghbazar",
        "মগবাজার"
      ]
    },
    {
      "id": 5,
      "nameEn": "Kakrail",
      "nameBn": "কাকরাইল",
      "aliases": [
        "kakrail",
        "কাকরাইল"
      ]
    },
    {
      "id": 6,
      "nameEn": "Shahbag",
      "nameBn": "শাহবাগ",
      "aliases": [
        "shahbag",
        "শাহবাগ"
      ]
    },
    {
      "id": 7,
      "nameEn": "Science Lab",
      "nameBn": "সায়েন্সল্যাব",
      "aliases": [
        "science lab",
        "সায়েন্সল্যাব"
      ]
    },
    {
      "id": 8,
      "nameEn": "Jhigatola",
      "nameBn": "ঝিগাতলা",
      "aliases": [
        "jhigatola",
        "ঝিগাতলা"
      ]
    },
    {
      "id": 9,
      "nameEn": "Shankar",
      "nameBn": "শংকর",
      "aliases": [
        "shankar",
        "শংকর"
      ]
    },
    {
      "id": 10,
      "nameEn": "Dhanmondi 15",
      "nameBn": "ধানমন্ডি-১৫",
      "aliases": [
        "dhanmondi 15",
        "ধানমন্ডি-১৫",
        "dhanmondi-15"
      ]
    },
    {
      "id": 11,
      "nameEn": "Mohammadpur",
      "nameBn": "মোহাম্মদপুর",
      "aliases": [
        "mohammadpur",
        "মোহাম্মদপুর"
      ]
    },
    {
      "id": 12,
      "nameEn": "Bosila",
      "nameBn": "বসিলা",
      "aliases": [
        "bosila",
        "বসিলা"
      ]
    },
    {
      "id": 13,
      "nameEn": "Ghatarchar",
      "nameBn": "ঘাটারচর",
      "aliases": [
        "ghatarchar",
        "ঘাটারচর"
      ]
    }
  ],
  "fareMatrix": [
    [
      0,
      10,
      11,
      12,
      15,
      18,
      21,
      28,
      32,
      35,
      37,
      42,
      46,
      54
    ],
    [
      10,
      0,
      10,
      10,
      10,
      11,
      14,
      21,
      25,
      29,
      30,
      36,
      40,
      47
    ],
    [
      11,
      10,
      0,
      10,
      10,
      10,
      10,
      17,
      21,
      25,
      26,
      32,
      36,
      43
    ],
    [
      12,
      10,
      10,
      0,
      10,
      10,
      10,
      16,
      20,
      23,
      25,
      30,
      34,
      42
    ],
    [
      15,
      10,
      10,
      10,
      0,
      10,
      10,
      13,
      17,
      21,
      22,
      28,
      32,
      39
    ],
    [
      18,
      11,
      10,
      10,
      10,
      0,
      10,
      11,
      15,
      18,
      19,
      25,
      29,
      36
    ],
    [
      21,
      14,
      10,
      10,
      10,
      10,
      0,
      10,
      11,
      14,
      16,
      21,
      25,
      33
    ],
    [
      28,
      21,
      17,
      16,
      13,
      11,
      10,
      0,
      10,
      10,
      10,
      14,
      18,
      26
    ],
    [
      32,
      25,
      21,
      20,
      17,
      15,
      11,
      10,
      0,
      10,
      10,
      10,
      14,
      22
    ],
    [
      35,
      29,
      25,
      23,
      21,
      18,
      14,
      10,
      10,
      0,
      10,
      10,
      11,
      19
    ],
    [
      37,
      30,
      26,
      25,
      22,
      19,
      16,
      10,
      10,
      10,
      0,
      10,
      10,
      17
    ],
    [
      42,
      36,
      32,
      30,
      28,
      25,
      21,
      14,
      10,
      10,
      10,
      0,
      10,
      12
    ],
    [
      46,
      40,
      36,
      34,
      32,
      29,
      25,
      18,
      14,
      11,
      10,
      10,
      0,
      10
    ],
    [
      54,
      47,
      43,
      42,
      39,
      36,
      33,
      26,
      22,
      19,
      17,
      12,
      10,
      0
    ]
  ]
},
{
  "id": "A441",
  "routeNo": "এ-৪৪১",
  "nameBn": "নন্দনপার্ক → নারায়ণগঞ্জ চাষারাহাট",
  "nameEn": "Nandanpark → Narayanganj Chasarahat",
  "totalKm": 65.4,
  "stops": [
    {
      "id": 0,
      "nameEn": "Nandanpark",
      "nameBn": "নন্দনপার্ক",
      "aliases": [
        "nandanpark",
        "নন্দনপার্ক",
        "nandan park"
      ]
    },
    {
      "id": 1,
      "nameEn": "Jirani Bazar",
      "nameBn": "জিরানী বাজার",
      "aliases": [
        "jirani bazar",
        "জিরানী বাজার",
        "jirani",
        "জিরানী"
      ]
    },
    {
      "id": 2,
      "nameEn": "Nabinagar",
      "nameBn": "নবীনগর",
      "aliases": [
        "nabinagar",
        "নবীনগর"
      ]
    },
    {
      "id": 3,
      "nameEn": "Savar",
      "nameBn": "সাভার",
      "aliases": [
        "savar",
        "সাভার"
      ]
    },
    {
      "id": 4,
      "nameEn": "Gabtoli",
      "nameBn": "গাবতলী",
      "aliases": [
        "gabtoli",
        "গাবতলী",
        "gabtali",
        "গাবতলি"
      ]
    },
    {
      "id": 5,
      "nameEn": "Newmarket",
      "nameBn": "নিউমার্কেট",
      "aliases": [
        "newmarket",
        "নিউমার্কেট",
        "new market"
      ]
    },
    {
      "id": 6,
      "nameEn": "Azimpur",
      "nameBn": "আজিমপুর",
      "aliases": [
        "azimpur",
        "আজিমপুর"
      ]
    },
    {
      "id": 7,
      "nameEn": "Bakshi Bazar",
      "nameBn": "বকশিবাজার",
      "aliases": [
        "bakshi bazar",
        "বকশিবাজার",
        "bakshi",
        "বকশি"
      ]
    },
    {
      "id": 8,
      "nameEn": "Chankharpul",
      "nameBn": "চানখারপুল",
      "aliases": [
        "chankharpul",
        "চানখারপুল",
        "chankar pool"
      ]
    },
    {
      "id": 9,
      "nameEn": "Signboard",
      "nameBn": "সাইনবোর্ড",
      "aliases": [
        "signboard",
        "সাইনবোর্ড"
      ]
    },
    {
      "id": 10,
      "nameEn": "Narayanganj Chasarahat",
      "nameBn": "নারায়ণগঞ্জ চাষারাহাট",
      "aliases": [
        "narayanganj chasarahat",
        "নারায়ণগঞ্জ চাষারাহাট",
        "chasara",
        "চাষারা",
        "narayanganj",
        "নারায়ণগঞ্জ"
      ]
    }
  ],
  "fareMatrix": [
    [
      0,
      12,
      38,
      61,
      100,
      120,
      122,
      126,
      128,
      153,
      177
    ],
    [
      12,
      0,
      26,
      49,
      88,
      108,
      110,
      114,
      116,
      141,
      164
    ],
    [
      38,
      26,
      0,
      23,
      62,
      82,
      84,
      88,
      90,
      115,
      139
    ],
    [
      61,
      49,
      23,
      0,
      39,
      59,
      62,
      65,
      67,
      92,
      116
    ],
    [
      100,
      88,
      62,
      39,
      0,
      21,
      23,
      26,
      28,
      53,
      77
    ],
    [
      120,
      108,
      82,
      59,
      21,
      0,
      10,
      10,
      10,
      33,
      56
    ],
    [
      122,
      110,
      84,
      62,
      23,
      10,
      0,
      10,
      10,
      31,
      54
    ],
    [
      126,
      114,
      88,
      65,
      26,
      10,
      10,
      0,
      10,
      27,
      50
    ],
    [
      128,
      116,
      90,
      67,
      28,
      10,
      10,
      10,
      0,
      25,
      48
    ],
    [
      153,
      141,
      115,
      92,
      53,
      33,
      31,
      27,
      25,
      0,
      23
    ],
    [
      177,
      164,
      139,
      116,
      77,
      56,
      54,
      50,
      48,
      23,
      0
    ]
  ]
},
{
  "id": "A436",
  "routeNo": "এ-৪৩৬",
  "nameBn": "সদরঘাট ভিক্টোরিয়া পার্ক → বাইপাইল",
  "nameEn": "Sadarghat Victoria Park → Baipail",
  "totalKm": 39.8,
  "stops": [
    {
      "id": 0,
      "nameEn": "Sadarghat Victoria Park",
      "nameBn": "সদরঘাট ভিক্টোরিয়া পার্ক",
      "aliases": [
        "sadarghat victoria park",
        "সদরঘাট ভিক্টোরিয়া পার্ক",
        "সদরঘাট ভিক্টোরিয়া",
        "sadarghat",
        "সদর ঘাট ভিক্টোরিয়া পার্ক",
        "সদর ঘাট ভিক্টোরিয়া",
        "সদর ঘাট",
        "ভিক্টোরিয়া পার্ক",
        "ভিক্টোরিয়া পার্ক",
        "victoria park",
        "sadar ghat",
        "sadar ghat victoria park"
      ]
    },
    {
      "id": 1,
      "nameEn": "Bangabandhu Avenue",
      "nameBn": "বঙ্গবন্ধু এভিনিউ",
      "aliases": [
        "bangabandhu avenue",
        "বঙ্গবন্ধু এভিনিউ"
      ]
    },
    {
      "id": 2,
      "nameEn": "Kakrail",
      "nameBn": "কাকরাইল",
      "aliases": [
        "kakrail",
        "কাকরাইল"
      ]
    },
    {
      "id": 3,
      "nameEn": "Malibagh",
      "nameBn": "মালিবাগ",
      "aliases": [
        "malibagh",
        "মালিবাগ"
      ]
    },
    {
      "id": 4,
      "nameEn": "Mouchak",
      "nameBn": "মৌচাক",
      "aliases": [
        "mouchak",
        "মৌচাক"
      ]
    },
    {
      "id": 5,
      "nameEn": "Rampura",
      "nameBn": "রামপুরা",
      "aliases": [
        "rampura",
        "রামপুরা"
      ]
    },
    {
      "id": 6,
      "nameEn": "Kuril Bishwaroad",
      "nameBn": "কুড়িল বিশ্বরোড",
      "aliases": [
        "kuril bishwaroad",
        "কুড়িল বিশ্বরোড"
      ]
    },
    {
      "id": 7,
      "nameEn": "Airport",
      "nameBn": "এয়ারপোর্ট",
      "aliases": [
        "airport",
        "এয়ারপোর্ট",
        "biman bandar",
        "বিমানবন্দর"
      ]
    },
    {
      "id": 8,
      "nameEn": "Abdullahpur",
      "nameBn": "আব্দুল্লাহপুর",
      "aliases": [
        "abdullahpur",
        "আব্দুল্লাহপুর"
      ]
    },
    {
      "id": 9,
      "nameEn": "Dhaur",
      "nameBn": "ধউর",
      "aliases": [
        "dhaur",
        "ধউর"
      ]
    },
    {
      "id": 10,
      "nameEn": "Jirabo",
      "nameBn": "জিরাবো",
      "aliases": [
        "jirabo",
        "জিরাবো"
      ]
    },
    {
      "id": 11,
      "nameEn": "Ashulia (Fantasy Kingdom)",
      "nameBn": "আশুলিয়া (ফ্যান্টাসি কিংডম)",
      "aliases": [
        "ashulia",
        "আশুলিয়া",
        "fantasy kingdom",
        "ফ্যান্টাসি কিংডম"
      ]
    },
    {
      "id": 12,
      "nameEn": "Baipail",
      "nameBn": "বাইপাইল",
      "aliases": [
        "baipail",
        "বাইপাইল"
      ]
    }
  ],
  "fareMatrix": [
    [
      0,
      10,
      11,
      13,
      14,
      21,
      38,
      50,
      60,
      75,
      89,
      101,
      107
    ],
    [
      10,
      0,
      10,
      10,
      10,
      14,
      31,
      43,
      53,
      68,
      82,
      94,
      100
    ],
    [
      11,
      10,
      0,
      10,
      10,
      11,
      27,
      39,
      49,
      64,
      78,
      90,
      97
    ],
    [
      13,
      10,
      10,
      0,
      10,
      10,
      25,
      38,
      47,
      62,
      76,
      88,
      95
    ],
    [
      14,
      10,
      10,
      10,
      0,
      10,
      24,
      36,
      46,
      61,
      75,
      87,
      94
    ],
    [
      21,
      14,
      11,
      10,
      10,
      0,
      16,
      29,
      38,
      53,
      68,
      79,
      86
    ],
    [
      38,
      31,
      27,
      25,
      24,
      16,
      0,
      12,
      22,
      37,
      51,
      63,
      70
    ],
    [
      50,
      43,
      39,
      38,
      36,
      29,
      12,
      0,
      10,
      25,
      39,
      51,
      57
    ],
    [
      60,
      53,
      49,
      47,
      46,
      38,
      22,
      10,
      0,
      15,
      29,
      41,
      48
    ],
    [
      75,
      68,
      64,
      62,
      61,
      53,
      37,
      25,
      15,
      0,
      14,
      26,
      33
    ],
    [
      89,
      82,
      78,
      76,
      75,
      68,
      51,
      39,
      29,
      14,
      0,
      12,
      18
    ],
    [
      101,
      94,
      90,
      88,
      87,
      79,
      63,
      51,
      41,
      26,
      12,
      0,
      10
    ],
    [
      107,
      100,
      97,
      95,
      94,
      86,
      70,
      57,
      48,
      33,
      18,
      10,
      0
    ]
  ]
},
{
  "id": "A450",
  "routeNo": "এ-৪৫০",
  "nameBn": "নবীনগর → মাওয়াঘাট",
  "nameEn": "Nabinagar → Mawaghat",
  "totalKm": 72.5,
  "stops": [
    {
      "id": 0,
      "nameEn": "Nabinagar",
      "nameBn": "নবীনগর",
      "aliases": [
        "nabinagar",
        "নবীনগর"
      ]
    },
    {
      "id": 1,
      "nameEn": "Savar",
      "nameBn": "সাভার",
      "aliases": [
        "savar",
        "সাভার"
      ]
    },
    {
      "id": 2,
      "nameEn": "Hemayetpur",
      "nameBn": "হেমায়েতপুর",
      "aliases": [
        "hemayetpur",
        "হেমায়েতপুর"
      ]
    },
    {
      "id": 3,
      "nameEn": "Gabtoli",
      "nameBn": "গাবতলী",
      "aliases": [
        "gabtoli",
        "গাবতলী",
        "gabtali",
        "গাবতলি"
      ]
    },
    {
      "id": 4,
      "nameEn": "Asad Gate",
      "nameBn": "আসাদগেট",
      "aliases": [
        "asad gate",
        "আসাদগেট",
        "asadgate"
      ]
    },
    {
      "id": 5,
      "nameEn": "Farmgate",
      "nameBn": "ফার্মগেট",
      "aliases": [
        "farmgate",
        "ফার্মগেট"
      ]
    },
    {
      "id": 6,
      "nameEn": "Shahbag",
      "nameBn": "শাহবাগ",
      "aliases": [
        "shahbag",
        "শাহবাগ"
      ]
    },
    {
      "id": 7,
      "nameEn": "Golap Shah Mazar",
      "nameBn": "গোলাপ শাহ মাজার",
      "aliases": [
        "golap shah mazar",
        "গোলাপ শাহ মাজার"
      ]
    },
    {
      "id": 8,
      "nameEn": "Babubazar Bridge",
      "nameBn": "বাবুবাজার ব্রীজ",
      "aliases": [
        "babubazar bridge",
        "বাবুবাজার ব্রীজ",
        "babubazar",
        "বাবুবাজার"
      ]
    },
    {
      "id": 9,
      "nameEn": "Sreenagar Chowrasta",
      "nameBn": "শ্রীনগর চৌরাস্তা",
      "aliases": [
        "sreenagar chowrasta",
        "শ্রীনগর চৌরাস্তা",
        "sreenagar",
        "শ্রীনগর"
      ]
    },
    {
      "id": 10,
      "nameEn": "Mawa Ferighat",
      "nameBn": "মাওয়াঘাট",
      "aliases": [
        "mawaghat",
        "মাওয়াঘাট",
        "mawa ghat",
        "mawa ferighat",
        "মাওয়া ফেরীঘাট",
        "মাওয়া"
      ]
    }
  ],
  "fareMatrix": [
    [
      0,
      22,
      40,
      60,
      74,
      78,
      85,
      91,
      96,
      166,
      196
    ],
    [
      22,
      0,
      18,
      38,
      52,
      56,
      62,
      69,
      74,
      144,
      174
    ],
    [
      40,
      18,
      0,
      20,
      34,
      38,
      45,
      51,
      56,
      126,
      156
    ],
    [
      60,
      38,
      20,
      0,
      14,
      18,
      24,
      31,
      36,
      106,
      136
    ],
    [
      74,
      52,
      34,
      14,
      0,
      10,
      11,
      17,
      23,
      93,
      122
    ],
    [
      78,
      56,
      38,
      18,
      10,
      0,
      10,
      13,
      19,
      89,
      118
    ],
    [
      85,
      62,
      45,
      24,
      11,
      10,
      0,
      10,
      12,
      82,
      111
    ],
    [
      91,
      69,
      51,
      31,
      17,
      13,
      10,
      0,
      10,
      75,
      105
    ],
    [
      96,
      74,
      56,
      36,
      23,
      19,
      12,
      10,
      0,
      70,
      99
    ],
    [
      166,
      144,
      126,
      106,
      93,
      89,
      82,
      75,
      70,
      0,
      29
    ],
    [
      196,
      174,
      156,
      136,
      122,
      118,
      111,
      105,
      99,
      29,
      0
    ]
  ]
},
{
  "id": "A458",
  "routeNo": "এ-৪৫৮",
  "nameBn": "মিরপুর-১২ → মতিঝিল",
  "nameEn": "Mirpur-12 → Motijheel",
  "totalKm": 15.3,
  "stops": [
    {
      "id": 0,
      "nameEn": "Mirpur-12",
      "nameBn": "মিরপুর-১২",
      "aliases": [
        "mirpur-12",
        "মিরপুর-১২",
        "mirpur 12",
        "মিরপুর ১২"
      ]
    },
    {
      "id": 1,
      "nameEn": "Mirpur-11",
      "nameBn": "মিরপুর-১১",
      "aliases": [
        "mirpur-11",
        "মিরপুর-১১",
        "mirpur 11",
        "মিরপুর ১১"
      ]
    },
    {
      "id": 2,
      "nameEn": "Mirpur-10",
      "nameBn": "মিরপুর-১০",
      "aliases": [
        "mirpur-10",
        "মিরপুর-১০",
        "mirpur 10",
        "মিরপুর ১০"
      ]
    },
    {
      "id": 3,
      "nameEn": "Kazipara",
      "nameBn": "কাজীপাড়া",
      "aliases": [
        "kazipara",
        "কাজীপাড়া",
        "kajipara"
      ]
    },
    {
      "id": 4,
      "nameEn": "Shewrapara",
      "nameBn": "শেওড়াপাড়া",
      "aliases": [
        "shewrapara",
        "শেওড়াপাড়া"
      ]
    },
    {
      "id": 5,
      "nameEn": "Bijoy Sarani",
      "nameBn": "বিজয় সরণী",
      "aliases": [
        "bijoy sarani",
        "বিজয় সরণী",
        "bijoy shoroni"
      ]
    },
    {
      "id": 6,
      "nameEn": "Farmgate",
      "nameBn": "ফার্মগেট",
      "aliases": [
        "farmgate",
        "ফার্মগেট"
      ]
    },
    {
      "id": 7,
      "nameEn": "Shahbag",
      "nameBn": "শাহবাগ",
      "aliases": [
        "shahbag",
        "শাহবাগ"
      ]
    },
    {
      "id": 8,
      "nameEn": "Press Club",
      "nameBn": "প্রেসক্লাব",
      "aliases": [
        "press club",
        "প্রেসক্লাব"
      ]
    },
    {
      "id": 9,
      "nameEn": "Gulistan",
      "nameBn": "গুলিস্তান",
      "aliases": [
        "gulistan",
        "গুলিস্তান"
      ]
    },
    {
      "id": 10,
      "nameEn": "Motijheel",
      "nameBn": "মতিঝিল",
      "aliases": [
        "motijheel",
        "মতিঝিল"
      ]
    }
  ],
  "fareMatrix": [
    [
      0,
      10,
      10,
      10,
      12,
      22,
      23,
      29,
      35,
      37,
      41
    ],
    [
      10,
      0,
      10,
      10,
      10,
      19,
      21,
      26,
      32,
      34,
      38
    ],
    [
      10,
      10,
      0,
      10,
      10,
      15,
      17,
      22,
      28,
      30,
      35
    ],
    [
      10,
      10,
      10,
      0,
      10,
      12,
      14,
      19,
      25,
      27,
      31
    ],
    [
      12,
      10,
      10,
      10,
      0,
      10,
      11,
      17,
      22,
      25,
      29
    ],
    [
      22,
      19,
      15,
      12,
      10,
      0,
      10,
      10,
      13,
      15,
      20
    ],
    [
      23,
      21,
      17,
      14,
      11,
      10,
      0,
      10,
      11,
      13,
      18
    ],
    [
      29,
      26,
      22,
      19,
      17,
      10,
      10,
      0,
      10,
      10,
      12
    ],
    [
      35,
      32,
      28,
      25,
      22,
      13,
      11,
      10,
      0,
      10,
      10
    ],
    [
      37,
      34,
      30,
      27,
      25,
      15,
      13,
      10,
      10,
      0,
      10
    ],
    [
      41,
      38,
      35,
      31,
      29,
      20,
      18,
      12,
      10,
      10,
      0
    ]
  ]
},
{
  "id": "A459",
  "routeNo": "এ-৪৫৯",
  "nameBn": "মানিকদি (ইসিবি মোড়) → আজিমপুর",
  "nameEn": "Manikdi (ECB Mor) → Azimpur",
  "totalKm": 15.3,
  "stops": [
    {
      "id": 0,
      "nameEn": "Manikdi (ECB Mor)",
      "nameBn": "মানিকদি (ইসিবি মোড়)",
      "aliases": [
        "manikdi (ecb mor)",
        "মানিকদি (ইসিবি মোড়)",
        "manikdi",
        "মানিকদি",
        "ecb mor",
        "ইসিবি মোড়"
      ]
    },
    {
      "id": 1,
      "nameEn": "Kalshi",
      "nameBn": "কালশী",
      "aliases": [
        "kalshi",
        "কালশী"
      ]
    },
    {
      "id": 2,
      "nameEn": "Mirpur-11",
      "nameBn": "মিরপুর-১১",
      "aliases": [
        "mirpur-11",
        "মিরপুর-১১",
        "mirpur 11",
        "মিরপুর ১১"
      ]
    },
    {
      "id": 3,
      "nameEn": "Mirpur-10",
      "nameBn": "মিরপুর-১০",
      "aliases": [
        "mirpur-10",
        "মিরপুর-১০",
        "mirpur 10",
        "মিরপুর ১০"
      ]
    },
    {
      "id": 4,
      "nameEn": "Kazipara",
      "nameBn": "কাজীপাড়া",
      "aliases": [
        "kazipara",
        "কাজীপাড়া",
        "kajipara"
      ]
    },
    {
      "id": 5,
      "nameEn": "Shewrapara",
      "nameBn": "শেওড়াপাড়া",
      "aliases": [
        "shewrapara",
        "শেওড়াপাড়া"
      ]
    },
    {
      "id": 6,
      "nameEn": "Agargaon",
      "nameBn": "আগারগাঁও",
      "aliases": [
        "agargaon",
        "আগারগাঁও"
      ]
    },
    {
      "id": 7,
      "nameEn": "Shishumela",
      "nameBn": "শিশুমেলা",
      "aliases": [
        "shishumela",
        "শিশুমেলা",
        "shishu mela"
      ]
    },
    {
      "id": 8,
      "nameEn": "College Gate",
      "nameBn": "কলেজ গেট",
      "aliases": [
        "college gate",
        "কলেজ গেট"
      ]
    },
    {
      "id": 9,
      "nameEn": "Sukrabad",
      "nameBn": "শুকরাবাদ",
      "aliases": [
        "sukrabad",
        "শুকরাবাদ",
        "shukrabad"
      ]
    },
    {
      "id": 10,
      "nameEn": "Newmarket",
      "nameBn": "নিউমার্কেট",
      "aliases": [
        "newmarket",
        "নিউমার্কেট",
        "new market"
      ]
    },
    {
      "id": 11,
      "nameEn": "Azimpur",
      "nameBn": "আজিমপুর",
      "aliases": [
        "azimpur",
        "আজিমপুর"
      ]
    }
  ],
  "fareMatrix": [
    [
      0,
      10,
      10,
      11,
      14,
      17,
      21,
      25,
      26,
      32,
      38,
      41
    ],
    [
      10,
      0,
      10,
      10,
      11,
      14,
      18,
      22,
      23,
      29,
      35,
      38
    ],
    [
      10,
      10,
      0,
      10,
      10,
      10,
      13,
      17,
      18,
      24,
      30,
      33
    ],
    [
      11,
      10,
      10,
      0,
      10,
      10,
      10,
      14,
      15,
      21,
      27,
      30
    ],
    [
      14,
      11,
      10,
      10,
      0,
      10,
      10,
      11,
      12,
      18,
      24,
      27
    ],
    [
      17,
      14,
      10,
      10,
      10,
      0,
      10,
      10,
      10,
      15,
      21,
      25
    ],
    [
      21,
      18,
      13,
      10,
      10,
      10,
      0,
      10,
      10,
      11,
      17,
      20
    ],
    [
      25,
      22,
      17,
      14,
      11,
      10,
      10,
      0,
      10,
      10,
      13,
      16
    ],
    [
      26,
      23,
      18,
      15,
      12,
      10,
      10,
      10,
      0,
      10,
      12,
      15
    ],
    [
      32,
      29,
      24,
      21,
      18,
      15,
      11,
      10,
      10,
      0,
      10,
      10
    ],
    [
      38,
      35,
      30,
      27,
      24,
      21,
      17,
      13,
      12,
      10,
      0,
      10
    ],
    [
      41,
      38,
      33,
      30,
      27,
      25,
      20,
      16,
      15,
      10,
      10,
      0
    ]
  ]
}
];

module.exports = { routes };
