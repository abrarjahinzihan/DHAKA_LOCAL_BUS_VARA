// Multi-Route Bus Fare Data
// Source: Dhaka Metro Passenger & Goods Transport Committee
// Minimum fare: 10 BDT | Rate: 2.70 BDT/km

const routes = [

  // ══════════════════════════════════════════════
  // ROUTE A-101: Kalshi (Mirpur-12) → Kachpur Bridge
  // Total: 28.8 km | 14 stops
  // ══════════════════════════════════════════════
  {
    id: 'A101',
    routeNo: 'এ-১০১',
    nameBn: 'কালশী → কাঁচপুরব্রীজ',
    nameEn: 'Kalshi → Kachpur Bridge',
    totalKm: 28.8,
    stops: [
      { id: 0,  nameEn: 'Kalshi',         nameBn: 'কালশী',          aliases: ['kalshi','kalsi','কালশী','কালশি'] },
      { id: 1,  nameEn: 'Mirpur-12',      nameBn: 'মিরপুর-১২',      aliases: ['mirpur-12','mirpur 12','mirpur12','মিরপুর-১২','মিরপুর ১২','মিরপুর১২'] },
      { id: 2,  nameEn: 'Mirpur-10',      nameBn: 'মিরপুর-১০',      aliases: ['mirpur-10','mirpur 10','mirpur10','মিরপুর-১০','মিরপুর ১০','মিরপুর১০'] },
      { id: 3,  nameEn: 'Kazipara',       nameBn: 'কাজীপাড়া',       aliases: ['kazipara','kazi para','কাজীপাড়া','কাজি পাড়া','কাজিপাড়া'] },
      { id: 4,  nameEn: 'Sheorapara',     nameBn: 'শেওড়াপাড়া',     aliases: ['sheorapara','sheora para','শেওড়াপাড়া','শেওড়া পাড়া'] },
      { id: 5,  nameEn: 'Farmgate',       nameBn: 'ফার্মগেট',        aliases: ['farmgate','farm gate','ফার্মগেট','ফার্ম গেট'] },
      { id: 6,  nameEn: 'Shahbag',        nameBn: 'শাহবাগ',          aliases: ['shahbag','shabag','শাহবাগ','শাহ বাগ'] },
      { id: 7,  nameEn: 'Palton',         nameBn: 'পল্টন',           aliases: ['palton','পল্টন'] },
      { id: 8,  nameEn: 'Gulistan',       nameBn: 'গুলিস্তান',       aliases: ['gulistan','গুলিস্তান','গুলিস্থান'] },
      { id: 9,  nameEn: 'Tikatuli',       nameBn: 'টিকাটুলি',        aliases: ['tikatuli','tika tuli','টিকাটুলি','টিকা টুলি'] },
      { id: 10, nameEn: 'Sayedabad',      nameBn: 'সায়দাবাদ',        aliases: ['sayedabad','saydabad','সায়দাবাদ','সাইদাবাদ','সায়েদাবাদ'] },
      { id: 11, nameEn: 'Jatrabari',      nameBn: 'যাত্রাবাড়ী',     aliases: ['jatrabari','jatra bari','যাত্রাবাড়ী','যাত্রাবাড়ি','যাত্রা বাড়ী'] },
      { id: 12, nameEn: 'Signboard',      nameBn: 'সাইনবোর্ড',       aliases: ['signboard','sign board','সাইনবোর্ড','সাইন বোর্ড'] },
      { id: 13, nameEn: 'Kachpur Bridge', nameBn: 'কাঁচপুরব্রীজ',   aliases: ['kachpur bridge','kachpur','kachpurbridge','কাঁচপুরব্রীজ','কাচপুর ব্রিজ','কাঁচপুর ব্রিজ','কাচপুর'] },
    ],
    fareMatrix: [
      //  0    1    2    3    4    5    6    7    8    9   10   11   12   13
      [   0,  10,  13,  16,  18,  31,  37,  42,  45,  48,  51,  54,  67,  78], // 0 Kalshi
      [  10,   0,  10,  10,  12,  25,  31,  36,  39,  42,  45,  48,  61,  72], // 1 Mirpur-12
      [  13,  10,   0,  10,  10,  18,  24,  29,  32,  35,  38,  41,  54,  65], // 2 Mirpur-10
      [  16,  10,  10,   0,  10,  12,  21,  26,  28,  32,  35,  38,  50,  61], // 3 Kazipara
      [  18,  12,  10,  10,   0,  10,  19,  24,  26,  30,  33,  35,  48,  59], // 4 Sheorapara
      [  31,  25,  18,  12,  10,   0,  10,  11,  18,  17,  20,  23,  36,  47], // 5 Farmgate
      [  37,  31,  24,  21,  19,  10,   0,  10,  10,  11,  14,  19,  30,  41], // 6 Shahbag
      [  42,  36,  29,  26,  24,  11,  10,   0,  10,  10,  10,  12,  25,  36], // 7 Palton
      [  45,  39,  32,  28,  26,  18,  10,  10,   0,  10,  10,  10,  22,  33], // 8 Gulistan
      [  48,  42,  35,  32,  30,  17,  11,  10,  10,   0,  10,  10,  19,  30], // 9 Tikatuli
      [  51,  45,  38,  35,  33,  20,  14,  10,  10,  10,   0,  10,  16,  27], // 10 Sayedabad
      [  54,  48,  41,  38,  35,  23,  19,  12,  10,  10,  10,   0,  13,  24], // 11 Jatrabari
      [  67,  61,  54,  50,  48,  36,  30,  25,  22,  19,  16,  13,   0,  11], // 12 Signboard
      [  78,  72,  65,  61,  59,  47,  41,  36,  33,  30,  27,  24,  11,   0], // 13 Kachpur Bridge
    ]
  },

  // ══════════════════════════════════════════════
  // ROUTE A-102: Pallabi (Mirpur-12) → Victoria Park (Sadarghat)
  // Total: 16.9 km | 11 stops
  // ══════════════════════════════════════════════
  {
    id: 'A102',
    routeNo: 'এ-১০২',
    nameBn: 'পল্লবী → ভিক্টোরিয়া পার্ক',
    nameEn: 'Pallabi → Victoria Park',
    totalKm: 16.9,
    stops: [
      { id: 0,  nameEn: 'Pallabi',         nameBn: 'পল্লবী (মিরপুর-১২)', aliases: ['pallabi','pallabi mirpur','পল্লবী','পল্লবী মিরপুর','pallbi'] },
      { id: 1,  nameEn: 'Mirpur-11 3/2',   nameBn: 'মিরপুর-১১ ৩/২',     aliases: ['mirpur 11 3/2','mirpur-11 3/2','mirpur11-3/2','মিরপুর-১১ ৩/২','মিরপুর ১১ ৩/২'] },
      { id: 2,  nameEn: 'Bekali Hotel',    nameBn: 'বেকালী হোটেল',       aliases: ['bekali hotel','bekali','বেকালী হোটেল','বেকালি হোটেল','বেকালী'] },
      { id: 3,  nameEn: 'Mirpur-11',       nameBn: 'মিরপুর-১১',          aliases: ['mirpur-11','mirpur 11','mirpur11','মিরপুর-১১','মিরপুর ১১','মিরপুর১১'] },
      { id: 4,  nameEn: 'Mirpur-10',       nameBn: 'মিরপুর-১০',          aliases: ['mirpur-10','mirpur 10','mirpur10','মিরপুর-১০','মিরপুর ১০','মিরপুর১০'] },
      { id: 5,  nameEn: 'Kazipara',        nameBn: 'কাজীপাড়া',           aliases: ['kazipara','kazi para','কাজীপাড়া','কাজি পাড়া','কাজিপাড়া'] },
      { id: 6,  nameEn: 'Farmgate',        nameBn: 'ফার্মগেট',            aliases: ['farmgate','farm gate','ফার্মগেট','ফার্ম গেট'] },
      { id: 7,  nameEn: 'Pressclub',       nameBn: 'প্রেসক্লাব',          aliases: ['pressclub','press club','প্রেসক্লাব','প্রেস ক্লাব'] },
      { id: 8,  nameEn: 'TNT',             nameBn: 'টিএন্ডটি',            aliases: ['tnt','t&t','tnt office','টিএন্ডটি','টি এন্ড টি'] },
      { id: 9,  nameEn: 'Raysaheb Bazar',  nameBn: 'রায়সাহেব বাজার',     aliases: ['raysaheb bazar','ray saheb bazar','রায়সাহেব বাজার','রায় সাহেব বাজার','raysaheb','raysahib'] },
      { id: 10, nameEn: 'Victoria Park',   nameBn: 'ভিক্টোরিয়া পার্ক',  aliases: ['victoria park','victoria','ভিক্টোরিয়া পার্ক','ভিক্টোরিয়া','bahadur shah park'] },
    ],
    fareMatrix: [
      //  0    1    2    3    4    5    6    7    8    9   10
      [   0,  10,  10,  10,  10,  10,  24,  36,  40,  42,  46], // 0 Pallabi
      [  10,   0,  10,  10,  10,  10,  23,  35,  39,  41,  45], // 1 Mirpur-11 3/2
      [  10,  10,   0,  10,  10,  10,  22,  34,  38,  41,  45], // 2 Bekali Hotel
      [  10,  10,  10,   0,  10,  10,  21,  32,  36,  39,  43], // 3 Mirpur-11
      [  10,  10,  10,  10,   0,  10,  18,  29,  33,  36,  39], // 4 Mirpur-10
      [  10,  10,  10,  10,  10,   0,  14,  26,  30,  32,  36], // 5 Kazipara
      [  24,  23,  22,  21,  18,  14,   0,  11,  15,  18,  21], // 6 Farmgate
      [  36,  35,  34,  32,  29,  26,  11,   0,  10,  10,  10], // 7 Pressclub
      [  40,  39,  38,  36,  33,  30,  15,  10,   0,  10,  10], // 8 TNT
      [  42,  41,  41,  39,  36,  32,  18,  10,  10,   0,  10], // 9 Raysaheb Bazar
      [  46,  45,  45,  43,  39,  36,  21,  10,  10,  10,   0], // 10 Victoria Park
    ]
  },

  // ══════════════════════════════════════════════
  // ROUTE A-105: Duyaripara (Pallabi) → Dhakeshwari Mandir
  // Total: 15.1 km | 12 stops
  // ══════════════════════════════════════════════
  {
    id: 'A105',
    routeNo: 'এ-১০৫',
    nameBn: 'দুয়ারীপাড়া → ঢাকেশ্বরী মন্দির',
    nameEn: 'Duyaripara → Dhakeshwari Mandir',
    totalKm: 15.1,
    stops: [
      { id: 0,  nameEn: 'Duyaripara',          nameBn: 'দুয়ারীপাড়া',      aliases: ['duyaripara','duaripara','দুয়ারীপাড়া','দুয়ারি পাড়া','দুয়ারিপাড়া'] },
      { id: 1,  nameEn: 'Mirpur-12',            nameBn: 'মিরপুর-১২',        aliases: ['mirpur-12','mirpur 12','mirpur12','মিরপুর-১২','মিরপুর ১২','মিরপুর১২'] },
      { id: 2,  nameEn: 'Mirpur Sade 11',       nameBn: 'মিরপুর সাড়ে ১১',  aliases: ['mirpur sade 11','mirpur 11.5','mirpur sare 11','মিরপুর সাড়ে ১১','মিরপুর সাড়ে এগারো'] },
      { id: 3,  nameEn: 'Bekali Hotel',          nameBn: 'বেকালী হোটেল',    aliases: ['bekali hotel','bekali','বেকালী হোটেল','বেকালি হোটেল','বেকালী'] },
      { id: 4,  nameEn: 'Mirpur-11',             nameBn: 'মিরপুর-১১',       aliases: ['mirpur-11','mirpur 11','mirpur11','মিরপুর-১১','মিরপুর ১১','মিরপুর১১'] },
      { id: 5,  nameEn: 'Mirpur-10',             nameBn: 'মিরপুর-১০',       aliases: ['mirpur-10','mirpur 10','mirpur10','মিরপুর-১০','মিরপুর ১০','মিরপুর১০'] },
      { id: 6,  nameEn: 'Kazipara',              nameBn: 'কাজীপাড়া',        aliases: ['kazipara','kazi para','কাজীপাড়া','কাজি পাড়া','কাজিপাড়া'] },
      { id: 7,  nameEn: 'Sheorapara',            nameBn: 'শেওড়াপাড়া',      aliases: ['sheorapara','sheora para','শেওড়াপাড়া','শেওড়া পাড়া'] },
      { id: 8,  nameEn: 'Agargaon',              nameBn: 'আগারগাঁও',         aliases: ['agargaon','agar gaon','আগারগাঁও','আগার গাঁও','আগারগাও'] },
      { id: 9,  nameEn: 'Dhanmondi',             nameBn: 'ধানমন্ডি',         aliases: ['dhanmondi','dhan mondi','ধানমন্ডি','ধান মন্ডি'] },
      { id: 10, nameEn: 'Shukrabad',             nameBn: 'শুক্রাবাদ',        aliases: ['shukrabad','sukrabad','শুক্রাবাদ','শুক্রা বাদ'] },
      { id: 11, nameEn: 'Dhakeshwari Mandir',    nameBn: 'ঢাকেশ্বরী মন্দির', aliases: ['dhakeshwari mandir','dhakeshwari','dhakeshori','ঢাকেশ্বরী মন্দির','ঢাকেশ্বরী','ঢাকেশ্বরি মন্দির'] },
    ],
    fareMatrix: [
      //  0    1    2    3    4    5    6    7    8    9   10   11
      [   0,  10,  10,  10,  10,  10,  12,  14,  19,  29,  30,  41], // 0 Duyaripara
      [  10,   0,  10,  10,  10,  10,  10,  12,  16,  26,  28,  38], // 1 Mirpur-12
      [  10,  10,   0,  10,  10,  10,  10,  11,  15,  25,  26,  37], // 2 Mirpur Sade 11
      [  10,  10,  10,   0,  10,  10,  10,  10,  14,  24,  25,  36], // 3 Bekali Hotel
      [  10,  10,  10,  10,   0,  10,  10,  10,  13,  22,  23,  35], // 4 Mirpur-11
      [  10,  10,  10,  10,  10,   0,  10,  10,  10,  20,  21,  32], // 5 Mirpur-10
      [  12,  10,  10,  10,  10,  10,   0,  10,  10,  16,  16,  28], // 6 Kazipara
      [  14,  12,  11,  10,  10,  10,  10,   0,  10,  14,  14,  26], // 7 Sheorapara
      [  19,  16,  15,  14,  13,  10,  10,  10,   0,  10,  11,  22], // 8 Agargaon
      [  29,  26,  25,  24,  22,  20,  16,  14,  10,   0,  10,  12], // 9 Dhanmondi
      [  30,  28,  26,  25,  23,  21,  16,  14,  11,  10,   0,  11], // 10 Shukrabad
      [  41,  38,  37,  36,  35,  32,  28,  26,  22,  12,  11,   0], // 11 Dhakeshwari Mandir
    ]
  },

  // ══════════════════════════════════════════════
  // ROUTE A-110: Duyaripara → Gulistan
  // Total: 16.7 km | 10 stops
  // ══════════════════════════════════════════════
  {
    id: 'A110',
    routeNo: 'এ-১১০',
    nameBn: 'দুয়ারীপাড়া → গুলিস্তান',
    nameEn: 'Duyaripara → Gulistan',
    totalKm: 16.7,
    stops: [
      { id: 0, nameEn: 'Duyaripara',   nameBn: 'দুয়ারীপাড়া',   aliases: ['duyaripara','দুয়ারীপাড়া'] },
      { id: 1, nameEn: 'Proshika',     nameBn: 'প্রশিকা',        aliases: ['proshika','প্রশিকা'] },
      { id: 2, nameEn: 'Mirpur Thana', nameBn: 'মিরপুর থানা',    aliases: ['mirpur thana','মিরপুর থানা'] },
      { id: 3, nameEn: 'Mirpur-1',     nameBn: 'মিরপুর-১',       aliases: ['mirpur-1','মিরপুর-১'] },
      { id: 4, nameEn: 'Ansarcamp',    nameBn: 'আনসারক্যাম্প',  aliases: ['ansarcamp','আনসারক্যাম্প'] },
      { id: 5, nameEn: 'Technical',    nameBn: 'টেকনিক্যাল',     aliases: ['technical','টেকনিক্যাল'] },
      { id: 6, nameEn: 'Asadgate',     nameBn: 'আসাদগেট',       aliases: ['asadgate','আসাদগেট'] },
      { id: 7, nameEn: 'Science Lab',  nameBn: 'সায়েন্সল্যাব',   aliases: ['science lab','সায়েন্সল্যাব'] },
      { id: 8, nameEn: 'BUET',         nameBn: 'বুয়েট',         aliases: ['buet','বুয়েট'] },
      { id: 9, nameEn: 'Gulistan',     nameBn: 'গুলিস্তান',       aliases: ['gulistan','গুলিস্তান'] }
    ],
    fareMatrix: [
      [0,10,10,10,12,15,25,32,40,45],
      [10,0,10,10,10,10,19,26,35,40],
      [10,10,0,10,10,10,18,25,34,39],
      [10,10,10,0,10,10,15,22,30,35],
      [12,10,10,10,0,10,12,19,28,33],
      [15,10,10,10,10,0,10,17,25,30],
      [25,19,18,15,12,10,0,10,16,21],
      [32,26,25,22,19,17,10,0,10,13],
      [40,35,34,30,28,25,16,10,0,10],
      [45,40,39,35,33,30,21,13,10,0]
    ]
  },

  // ══════════════════════════════════════════════
  // ROUTE A-111: Pallabi (Ceramic) → Dilkusha (Sonali Bank)
  // Total: 17.0 km | 10 stops
  // ══════════════════════════════════════════════
  {
    id: 'A111',
    routeNo: 'এ-১১১',
    nameBn: 'পল্লবী (সিরামিক) → দিলকুশা',
    nameEn: 'Pallabi (Ceramic) → Dilkusha',
    totalKm: 17.0,
    stops: [
      { id: 0, nameEn: 'Pallabi Ceramic', nameBn: 'পল্লবী (সিরামিক)', aliases: ['pallabi ceramic','পল্লবী সিরামিক','পল্লবী (সিরামিক)'] },
      { id: 1, nameEn: 'Mirpur-11 1/2',   nameBn: 'মিরপুর-১১ ১/২',    aliases: ['mirpur-11 1/2','মিরপুর-১১ ১/২'] },
      { id: 2, nameEn: 'Bekali Hotel',    nameBn: 'বেকালী হোটেল',      aliases: ['bekali hotel','বেকালী হোটেল'] },
      { id: 3, nameEn: 'Mirpur-11',       nameBn: 'মিরপুর-১১',         aliases: ['mirpur-11','মিরপুর-১১'] },
      { id: 4, nameEn: 'Mirpur-10',       nameBn: 'মিরপুর-১০',         aliases: ['mirpur-10','মিরপুর-১০'] },
      { id: 5, nameEn: 'Kazipara',        nameBn: 'কাজীপাড়া',          aliases: ['kazipara','কাজীপাড়া'] },
      { id: 6, nameEn: 'Farmgate',        nameBn: 'ফার্মগেট',           aliases: ['farmgate','ফার্মগেট'] },
      { id: 7, nameEn: 'Palton',          nameBn: 'পল্টন',              aliases: ['palton','পল্টন'] },
      { id: 8, nameEn: 'Stadium',         nameBn: 'স্টেডিয়াম',          aliases: ['stadium','স্টেডিয়াম'] },
      { id: 9, nameEn: 'Notre Dame College', nameBn: 'নটরড্যাম কলেজ', aliases: ['notre dame college','নটরড্যাম কলেজ'] }
    ],
    fareMatrix: [
      [0,10,10,10,10,10,24,36,37,46],
      [10,0,10,10,10,10,22,35,35,44],
      [10,10,0,10,10,10,21,33,34,43],
      [10,10,10,0,10,10,20,32,33,42],
      [10,10,10,10,0,10,17,29,30,39],
      [10,10,10,10,10,0,14,26,29,36],
      [24,22,21,20,17,14,0,12,13,22],
      [36,35,33,32,29,26,12,0,10,10],
      [37,35,34,33,30,29,13,10,0,10],
      [46,44,43,42,39,36,22,10,10,0]
    ]
  },

  // ══════════════════════════════════════════════
  // ROUTE A-114: Mirpur (Chiriakhana) → Sayedabad
  // Total: 18.3 km | 15 stops
  // ══════════════════════════════════════════════
  {
    id: 'A114',
    routeNo: 'এ-১১৪',
    nameBn: 'মিরপুর (চিড়িয়াখানা) → সায়েদাবাদ',
    nameEn: 'Chiriakhana → Sayedabad',
    totalKm: 18.3,
    stops: [
      { id: 0,  nameEn: 'Chiriakhana',   nameBn: 'চিড়িয়াখানা',      aliases: ['chiriakhana','চিড়িয়াখানা','মিরপুর চিড়িয়াখানা'] },
      { id: 1,  nameEn: 'Mirpur-1',      nameBn: 'মিরপুর-১',        aliases: ['mirpur-1','মিরপুর-১'] },
      { id: 2,  nameEn: 'Ansarcamp',     nameBn: 'আনসারক্যাম্প',    aliases: ['ansarcamp','আনসারক্যাম্প'] },
      { id: 3,  nameEn: 'Darus Salam',   nameBn: 'দারুসসালাম',      aliases: ['darus salam','দারুসসালাম'] },
      { id: 4,  nameEn: 'Kalyanpur',     nameBn: 'কল্যাণপুর',       aliases: ['kalyanpur','কল্যাণপুর'] },
      { id: 5,  nameEn: 'Shyamoli',      nameBn: 'শ্যামলী',         aliases: ['shyamoli','শ্যামলী','shishu mela','শিশুমেলা'] },
      { id: 6,  nameEn: 'College Gate',  nameBn: 'কলেজগেট',         aliases: ['college gate','কলেজগেট'] },
      { id: 7,  nameEn: 'Asadgate',      nameBn: 'আসাদগেট',         aliases: ['asadgate','আসাদগেট'] },
      { id: 8,  nameEn: 'Farmgate',      nameBn: 'ফার্মগেট',        aliases: ['farmgate','ফার্মগেট'] },
      { id: 9,  nameEn: 'Kawran Bazar',  nameBn: 'কাওরানবাজার',     aliases: ['kawran bazar','কাওরানবাজার'] },
      { id: 10, nameEn: 'Shahbag',       nameBn: 'শাহবাগ',          aliases: ['shahbag','শাহবাগ'] },
      { id: 11, nameEn: 'Pressclub',     nameBn: 'প্রেসক্লাব',      aliases: ['pressclub','প্রেসক্লাব'] },
      { id: 12, nameEn: 'Stadium',       nameBn: 'স্টেডিয়াম',       aliases: ['stadium','স্টেডিয়াম'] },
      { id: 13, nameEn: 'Ittefaq',       nameBn: 'ইত্তেফাক',        aliases: ['ittefaq','ইত্তেফাক'] },
      { id: 14, nameEn: 'Sayedabad',     nameBn: 'সায়েদাবাদ',       aliases: ['sayedabad','সায়েদাবাদ'] }
    ],
    fareMatrix: [
      [0,10,10,10,14,15,17,19,24,27,31,35,38,46,49],
      [10,0,10,10,10,10,12,15,19,22,26,31,33,42,45],
      [10,10,0,10,10,10,10,12,17,20,23,28,31,39,42],
      [10,10,10,0,10,10,10,10,14,17,21,25,28,36,39],
      [14,10,10,10,0,10,10,10,11,14,17,22,25,33,36],
      [15,10,10,10,10,0,10,10,10,12,16,21,23,32,35],
      [17,12,10,10,10,10,0,10,10,10,14,18,21,29,32],
      [19,15,12,10,10,10,10,0,10,10,11,16,19,27,30],
      [24,19,17,14,11,10,10,10,0,10,10,11,14,22,25],
      [27,22,20,17,14,12,10,10,10,0,10,10,11,19,22],
      [31,26,23,21,17,16,14,11,10,10,0,10,10,16,19],
      [35,31,28,25,22,21,18,16,11,10,10,0,10,11,14],
      [38,33,31,28,25,23,21,19,14,11,10,10,0,10,11],
      [46,42,39,36,33,32,29,27,22,19,16,11,10,0,10],
      [49,45,42,39,36,35,32,30,25,22,19,14,11,10,0]
    ]
  },

  // ══════════════════════════════════════════════
  // ROUTE A-115: Mirpur-1 (Baishakhi Super Market) → Jatrabari
  // Total: 17.6 km | 15 stops
  // ══════════════════════════════════════════════
  {
    id: 'A115',
    routeNo: 'এ-১১৫',
    nameBn: 'মিরপুর-১ → যাত্রাবাড়ী',
    nameEn: 'Mirpur-1 → Jatrabari',
    totalKm: 17.6,
    stops: [
      { id: 0,  nameEn: 'Mirpur-1',       nameBn: 'মিরপুর-১',        aliases: ['mirpur-1','মিরপুর-১','বৈশাখী সুপার মার্কেট'] },
      { id: 1,  nameEn: 'Ansarcamp',      nameBn: 'আনসার ক্যাম্প',    aliases: ['ansarcamp','আনসার ক্যাম্প','আনসারক্যাম্প'] },
      { id: 2,  nameEn: 'Technical',      nameBn: 'টেকনিক্যাল',       aliases: ['technical','টেকনিক্যাল'] },
      { id: 3,  nameEn: 'Kalyanpur',      nameBn: 'কল্যাণপুর',        aliases: ['kalyanpur','কল্যাণপুর'] },
      { id: 4,  nameEn: 'Shyamoli',       nameBn: 'শ্যামলী',          aliases: ['shyamoli','শ্যামলী','shishu mela','শিশুমেলা'] },
      { id: 5,  nameEn: 'College Gate',   nameBn: 'কলেজগেট',          aliases: ['college gate','কলেজগেট'] },
      { id: 6,  nameEn: 'Shukrabad',      nameBn: 'শুক্রাবাদ',         aliases: ['shukrabad','শুক্রাবাদ'] },
      { id: 7,  nameEn: 'Kalabagan',      nameBn: 'কলাবাগান',         aliases: ['kalabagan','কলাবাগান'] },
      { id: 8,  nameEn: 'Science Lab',    nameBn: 'সায়েন্সল্যাব',      aliases: ['science lab','সায়েন্সল্যাব'] },
      { id: 9,  nameEn: 'Kataban',        nameBn: 'কাঁটাবন',          aliases: ['kataban','কাঁটাবন'] },
      { id: 10, nameEn: 'Shahbag',        nameBn: 'শাহবাগ',           aliases: ['shahbag','শাহবাগ'] },
      { id: 11, nameEn: 'Pressclub',      nameBn: 'প্রেসক্লাব',       aliases: ['pressclub','প্রেসক্লাব'] },
      { id: 12, nameEn: 'Gulistan Mor',   nameBn: 'গুলিস্তান মোড়',    aliases: ['gulistan mor','gulistan','গুলিস্তান','গুলিস্তান মোড়'] },
      { id: 13, nameEn: 'Bangladesh Bank',nameBn: 'বাংলাদেশ ব্যাংক',  aliases: ['bangladesh bank','বাংলাদেশ ব্যাংক'] },
      { id: 14, nameEn: 'Jatrabari',      nameBn: 'যাত্রাবাড়ী',      aliases: ['jatrabari','যাত্রাবাড়ী'] }
    ],
    fareMatrix: [
      [0,10,10,10,10,12,18,20,23,25,26,31,34,37,48],
      [10,0,10,10,10,10,16,17,20,22,23,28,31,35,45],
      [10,10,0,10,10,10,12,14,17,19,20,25,28,31,42],
      [10,10,10,0,10,10,10,11,14,16,18,22,25,29,39],
      [10,10,10,10,0,10,10,10,12,15,16,21,23,27,37],
      [12,10,10,10,10,0,10,10,10,13,14,19,21,25,35],
      [18,16,12,10,10,10,0,10,10,10,10,13,15,19,29],
      [20,17,14,11,10,10,10,0,10,10,10,11,14,17,28],
      [23,20,17,14,12,10,10,10,0,10,10,10,11,15,25],
      [25,22,19,16,15,13,10,10,10,0,10,10,10,12,22],
      [26,23,20,18,16,14,10,10,10,10,0,10,10,11,21],
      [31,28,25,22,21,19,13,11,10,10,10,0,10,10,16],
      [34,31,28,25,23,21,15,14,11,10,10,10,0,10,14],
      [37,35,31,29,27,25,19,17,15,12,11,10,10,0,10],
      [48,45,42,39,37,35,29,28,25,22,21,16,14,10,0]
    ]
  },

  // ══════════════════════════════════════════════
  // ROUTE A-119: Duyaripara → Victoria Park
  // Total: 18.3 km | 12 stops
  // ══════════════════════════════════════════════
  {
    id: 'A119',
    routeNo: 'এ-১১৯',
    nameBn: 'দুয়ারীপাড়া → ভিক্টোরিয়া পার্ক',
    nameEn: 'Duyaripara → Victoria Park',
    totalKm: 18.3,
    stops: [
      { id: 0,  nameEn: 'Duyaripara',         nameBn: 'দুয়ারীপাড়া',       aliases: ['duyaripara','দুয়ারীপাড়া'] },
      { id: 1,  nameEn: 'Pallabi',            nameBn: 'পল্লবী (মিরপুর-১২)',  aliases: ['pallabi','পল্লবী'] },
      { id: 2,  nameEn: 'Mirpur-11 1/2',      nameBn: 'মিরপুর-১১ ১/২',     aliases: ['mirpur-11 1/2','মিরপুর-১১ ১/২'] },
      { id: 3,  nameEn: 'Bekali Hotel',       nameBn: 'বেকালী হোটেল',       aliases: ['bekali hotel','বেকালী হোটেল'] },
      { id: 4,  nameEn: 'Mirpur-11',          nameBn: 'মিরপুর-১১',          aliases: ['mirpur-11','মিরপুর-১১'] },
      { id: 5,  nameEn: 'Mirpur-10',          nameBn: 'মিরপুর-১০',          aliases: ['mirpur-10','মিরপুর-১০'] },
      { id: 6,  nameEn: 'Kazipara',           nameBn: 'কাজীপাড়া',           aliases: ['kazipara','কাজীপাড়া'] },
      { id: 7,  nameEn: 'Farmgate',           nameBn: 'ফার্মগেট',            aliases: ['farmgate','ফার্মগেট'] },
      { id: 8,  nameEn: 'Pressclub',          nameBn: 'প্রেসক্লাব',          aliases: ['pressclub','প্রেসক্লাব'] },
      { id: 9,  nameEn: 'TNT',                nameBn: 'টিএন্ডটি',             aliases: ['tnt','টিএন্ডটি'] },
      { id: 10, nameEn: 'Raysaheb Bazar',     nameBn: 'রায়সাহেব বাজার',      aliases: ['raysaheb bazar','রায়সাহেব বাজার'] },
      { id: 11, nameEn: 'Victoria Park',      nameBn: 'ভিক্টোরিয়া পার্ক',   aliases: ['victoria park','ভিক্টোরিয়া পার্ক'] }
    ],
    fareMatrix: [
      [0,10,10,10,10,10,14,28,39,43,49,49],
      [10,0,10,10,10,10,10,24,36,40,45,46],
      [10,10,0,10,10,10,10,23,35,39,44,45],
      [10,10,10,0,10,10,10,22,34,38,43,44],
      [10,10,10,10,0,10,10,21,32,36,41,42],
      [10,10,10,10,10,0,10,18,29,33,39,39],
      [14,10,10,10,10,10,0,14,26,30,35,36],
      [28,24,23,22,21,18,14,0,11,15,21,21],
      [39,36,35,34,32,29,26,11,0,10,10,10],
      [43,40,39,38,36,33,30,15,10,0,10,10],
      [49,45,44,43,41,39,35,21,10,10,0,10],
      [49,46,45,44,42,39,36,21,10,10,10,0]
    ]
  },

  // ══════════════════════════════════════════════
  // ROUTE A-122: Mirpur-12 (ECB Chattar) → Azimpur
  // Total: 22.0 km | 10 stops
  // ══════════════════════════════════════════════
  {
    id: 'A122',
    routeNo: 'এ-১২২',
    nameBn: 'মিরপুর-১২ → আজিমপুর',
    nameEn: 'Mirpur-12 → Azimpur',
    totalKm: 22.0,
    stops: [
      { id: 0, nameEn: 'Mirpur-12',          nameBn: 'মিরপুর-১২',           aliases: ['mirpur-12','মিরপুর-১২'] },
      { id: 1, nameEn: 'ECB Mor',            nameBn: 'ইসিবি মোড়',          aliases: ['ecb mor','ইসিবি মোড়'] },
      { id: 2, nameEn: 'Mirpur-10',          nameBn: 'মিরপুর-১০',           aliases: ['mirpur-10','মিরপুর-১০'] },
      { id: 3, nameEn: 'Kazipara',           nameBn: 'কাজীপাড়া',            aliases: ['kazipara','কাজীপাড়া'] },
      { id: 4, nameEn: 'Sheorapara',         nameBn: 'শেওড়াপাড়া',          aliases: ['sheorapara','শেওড়াপাড়া'] },
      { id: 5, nameEn: 'Agargaon',           nameBn: 'আগারগাঁও',            aliases: ['agargaon','আগারগাঁও'] },
      { id: 6, nameEn: 'Farmgate',           nameBn: 'ফার্মগেট',            aliases: ['farmgate','ফার্মগেট'] },
      { id: 7, nameEn: 'College Gate',       nameBn: 'কলেজগেট',             aliases: ['college gate','কলেজগেট'] },
      { id: 8, nameEn: 'Manik Mia Avenue',   nameBn: 'মানিকমিয়া এভিনিউ',   aliases: ['manik mia avenue','মানিকমিয়া এভিনিউ'] },
      { id: 9, nameEn: 'Azimpur',            nameBn: 'আজিমপুর',             aliases: ['azimpur','আজিমপুর'] }
    ],
    fareMatrix: [
      [0,12,24,28,30,34,38,39,43,59],
      [12,0,12,16,18,22,26,27,31,48],
      [24,12,0,10,10,10,14,15,19,35],
      [28,16,10,0,10,10,10,11,15,32],
      [30,18,10,10,0,10,10,10,13,30],
      [34,22,10,10,10,0,10,10,10,25],
      [38,26,14,10,10,10,0,10,10,22],
      [39,27,15,11,10,10,10,0,10,20],
      [43,31,19,15,13,10,10,10,0,16],
      [59,48,35,32,30,25,22,20,16,0]
    ]
  }

];

module.exports = { routes };
