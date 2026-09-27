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
      { id: 5,  nameEn: 'Shyamoli',      nameBn: 'শ্যামলী',         aliases: ['shyamoli','শ্যামলী'] },
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
      { id: 4,  nameEn: 'Shyamoli',       nameBn: 'শ্যামলী',          aliases: ['shyamoli','শ্যামলী'] },
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
      { id: 6, nameEn: 'Shishu Mela',        nameBn: 'শিশুমেলা',            aliases: ['shishu mela','শিশুমেলা'] },
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
  },

  // ══════════════════════════════════════════════
  // ROUTE A-127: Mirpur Mazar Road → Azimpur
  // Total: 12.0 km | 10 stops
  // ══════════════════════════════════════════════
  {
    id: 'A127',
    routeNo: 'এ-১২৭',
    nameBn: 'মিরপুর মাজার রোড → আজিমপুর',
    nameEn: 'Mirpur Mazar Road → Azimpur',
    totalKm: 12.0,
    stops: [
      { id: 0, nameEn: 'Mirpur Mazar Road',  nameBn: 'মিরপুর মাজার রোড',   aliases: ['mirpur mazar road','মিরপুর মাজার রোড'] },
      { id: 1, nameEn: 'Mirpur-1',           nameBn: 'মিরপুর-১',           aliases: ['mirpur-1','মিরপুর-১'] },
      { id: 2, nameEn: 'Shyamoli',           nameBn: 'শ্যামলী',            aliases: ['shyamoli','শ্যামলী'] },
      { id: 3, nameEn: 'Asadgate',           nameBn: 'আসাদগেট',            aliases: ['asadgate','আসাদগেট'] },
      { id: 4, nameEn: 'Russel Square',      nameBn: 'রাসেল স্কয়ার',         aliases: ['russel square','রাসেল স্কয়ার'] },
      { id: 5, nameEn: 'Kalabagan',          nameBn: 'কলাবাগান',           aliases: ['kalabagan','কলাবাগান'] },
      { id: 6, nameEn: 'Science Lab',        nameBn: 'সায়েন্সল্যাব',         aliases: ['science lab','সায়েন্সল্যাব'] },
      { id: 7, nameEn: 'New Market',         nameBn: 'নিউমার্কেট',           aliases: ['new market','নিউমার্কেট'] },
      { id: 8, nameEn: 'Nilkhet',            nameBn: 'নীলক্ষেত',            aliases: ['nilkhet','নীলক্ষেত'] },
      { id: 9, nameEn: 'Azimpur',            nameBn: 'আজিমপুর',             aliases: ['azimpur','আজিমপুর'] }
    ],
    fareMatrix: [
      [0,10,12,18,23,24,27,29,29,32],
      [10,0,10,15,21,22,24,26,26,30],
      [12,10,0,10,11,12,15,16,17,20],
      [18,15,10,0,10,10,10,11,11,15],
      [23,21,11,10,0,10,10,10,10,10],
      [24,22,12,10,10,0,10,10,10,10],
      [27,24,15,10,10,10,0,10,10,10],
      [29,26,16,11,10,10,10,0,10,10],
      [29,26,17,11,10,10,10,10,0,10],
      [32,30,20,15,10,10,10,10,10,0]
    ]
  },

  // ══════════════════════════════════════════════
  // ROUTE M14_KHILGAON: Mirpur-14 → Khilgaon Taltola
  // Total: 25.7 km | 16 stops
  // ══════════════════════════════════════════════
  {
    id: 'M14_KHILGAON',
    routeNo: 'মিরপুর(১৪)-খিলগাঁও',
    nameBn: 'মিরপুর(১৪) → খিলগাঁও তালতলা',
    nameEn: 'Mirpur-14 → Khilgaon Taltola',
    totalKm: 25.7,
    stops: [
      { id: 0,  nameEn: 'Mirpur-14',          nameBn: 'মিরপুর(১৪)',           aliases: ['mirpur-14','মিরপুর(১৪)','মিরপুর ১৪'] },
      { id: 1,  nameEn: 'Mirpur-10',          nameBn: 'মিরপুর(১০)',           aliases: ['mirpur-10','মিরপুর(১০)','মিরপুর ১০'] },
      { id: 2,  nameEn: 'Mirpur-1',           nameBn: 'মিরপুর(১)',            aliases: ['mirpur-1','মিরপুর(১)','মিরপুর ১'] },
      { id: 3,  nameEn: 'Bangla College',     nameBn: 'বাংলা কলেজ',           aliases: ['bangla college','বাংলা কলেজ'] },
      { id: 4,  nameEn: 'Shyamoli',           nameBn: 'শ্যামলী',              aliases: ['shyamoli','শ্যামলী'] },
      { id: 5,  nameEn: 'Asadgate',           nameBn: 'আসাদগেট',              aliases: ['asadgate','আসাদগেট'] },
      { id: 6,  nameEn: 'Shukrabad',          nameBn: 'শুক্রাবাদ',             aliases: ['shukrabad','শুক্রাবাদ'] },
      { id: 7,  nameEn: 'Kalabagan',          nameBn: 'কলাবাগান',             aliases: ['kalabagan','কলাবাগান'] },
      { id: 8,  nameEn: 'Science Lab',        nameBn: 'সাইন্সল্যাব',            aliases: ['science lab','সাইন্সল্যাব'] },
      { id: 9,  nameEn: 'Shahbag',            nameBn: 'শাহবাগ',               aliases: ['shahbag','শাহবাগ'] },
      { id: 10, nameEn: 'Pressclub',          nameBn: 'প্রেসক্লাব',            aliases: ['pressclub','প্রেসক্লাব'] },
      { id: 11, nameEn: 'Shapla Chattar',     nameBn: 'শাপলা চত্ত্বর',          aliases: ['shapla chattar','শাপলা চত্ত্বর'] },
      { id: 12, nameEn: 'Kamalapur',          nameBn: 'কমলাপুর',              aliases: ['kamalapur','কমলাপুর'] },
      { id: 13, nameEn: 'Basabo',             nameBn: 'বাসাবো',               aliases: ['basabo','বাসাবো'] },
      { id: 14, nameEn: 'Khilgaon Railgate',  nameBn: 'খিলগাও রেলগেট',        aliases: ['khilgaon railgate','খিলগাও রেলগেট'] },
      { id: 15, nameEn: 'Khilgaon Taltola',   nameBn: 'খিলগাও তালতলা',        aliases: ['khilgaon taltola','খিলগাও তালতলা'] }
    ],
    fareMatrix: [
      [0,10,10,14,20,24,25,27,32,35,40,46,49,56,63,69],
      [10,0,10,10,14,18,20,22,26,30,34,41,43,51,57,64],
      [10,10,0,10,10,14,16,18,22,26,30,36,39,47,53,60],
      [14,10,10,0,10,10,11,13,18,21,25,32,35,42,49,55],
      [20,14,10,10,0,10,10,10,12,15,20,26,29,36,43,49],
      [24,18,14,10,10,0,10,10,10,11,16,22,25,32,39,45],
      [25,20,16,11,10,10,0,10,10,10,14,21,23,31,38,44],
      [27,22,18,13,10,10,10,0,10,10,12,19,22,29,36,42],
      [32,26,22,18,12,10,10,10,0,10,10,14,17,24,31,37],
      [35,30,26,21,15,11,10,10,10,0,10,10,14,21,28,34],
      [40,34,30,25,20,16,14,12,10,10,0,10,10,17,23,30],
      [46,41,36,32,26,22,21,19,14,10,10,0,10,10,17,23],
      [49,43,39,35,29,25,23,22,17,14,10,10,0,10,14,21],
      [56,51,47,42,36,32,31,29,24,21,17,10,10,0,10,13],
      [63,57,53,49,43,39,38,36,31,28,23,17,14,10,0,10],
      [69,64,60,55,49,45,44,42,37,34,30,23,21,13,10,0]
    ]
  },

  // ══════════════════════════════════════════════
  // ROUTE CHIRIAKHANA_VICTORIA: Chiriakhana → Victoria Park
  // Total: 16.0 km | 9 stops
  // ══════════════════════════════════════════════
  {
    id: 'CHIRIAKHANA_VICTORIA',
    routeNo: 'চিড়িয়াখানা-ভিক্টোরিয়া',
    nameBn: 'চিড়িয়াখানা → ভিক্টোরিয়াপার্ক',
    nameEn: 'Chiriakhana → Victoria Park',
    totalKm: 16.0,
    stops: [
      { id: 0, nameEn: 'Chiriakhana',        nameBn: 'চিড়িয়াখানা',           aliases: ['chiriakhana','চিড়িয়াখানা'] },
      { id: 1, nameEn: 'Mirpur-1',           nameBn: 'মিরপুর-১',             aliases: ['mirpur-1','মিরপুর-১'] },
      { id: 2, nameEn: 'Darus Salam',        nameBn: 'দারুসসালাম',           aliases: ['darus salam','দারুসসালাম'] },
      { id: 3, nameEn: 'Shyamoli',           nameBn: 'শ্যামলী',              aliases: ['shyamoli','শ্যামলী'] },
      { id: 4, nameEn: 'Asadgate',           nameBn: 'আসাদগেট',              aliases: ['asadgate','আসাদগেট'] },
      { id: 5, nameEn: 'Farmgate',           nameBn: 'ফার্মগেট',             aliases: ['farmgate','ফার্মগেট'] },
      { id: 6, nameEn: 'Pressclub',          nameBn: 'প্রেসক্লাব',           aliases: ['pressclub','প্রেসক্লাব'] },
      { id: 7, nameEn: 'Gulistan',           nameBn: 'গুলিস্তান',            aliases: ['gulistan','গুলিস্তান'] },
      { id: 8, nameEn: 'Victoria Park',      nameBn: 'ভিক্টোরিয়াপার্ক',        aliases: ['victoria park','ভিক্টোরিয়াপার্ক'] }
    ],
    fareMatrix: [
      [0,10,10,15,19,24,34,37,43],
      [10,0,10,10,15,19,29,32,38],
      [10,10,0,10,10,14,24,27,33],
      [15,10,10,0,10,10,19,22,29],
      [19,15,10,10,0,10,15,18,24],
      [24,19,14,10,10,0,10,13,19],
      [34,29,24,19,15,10,0,10,10],
      [37,32,27,22,18,13,10,0,10],
      [43,38,33,29,24,19,10,10,0]
    ]
  },

  // ══════════════════════════════════════════════
  // ROUTE BAIPAIL_KERANIGANJ: Baipail → Keraniganj (Notun Jailkhana)
  // Total: 47.5 km | 16 stops
  // ══════════════════════════════════════════════
  {
    id: 'BAIPAIL_KERANIGANJ',
    routeNo: 'বাইপাইল-কেরানীগঞ্জ',
    nameBn: 'বাইপাইল → কেরানীগঞ্জ (নতুন জেলখানা)',
    nameEn: 'Baipail → Keraniganj (Notun Jailkhana)',
    totalKm: 47.5,
    stops: [
      { id: 0,  nameEn: 'Baipail',            nameBn: 'বাইপাইল',              aliases: ['baipail','বাইপাইল'] },
      { id: 1,  nameEn: 'Kamarpara',          nameBn: 'কামারপাড়া',            aliases: ['kamarpara','কামারপাড়া'] },
      { id: 2,  nameEn: 'Abdullahpur',        nameBn: 'আব্দুল্লাহপুর',            aliases: ['abdullahpur','আব্দুল্লাহপুর'] },
      { id: 3,  nameEn: 'Azampur',            nameBn: 'আজমপুর',               aliases: ['azampur','আজমপুর'] },
      { id: 4,  nameEn: 'Airport',            nameBn: 'এয়ারপোর্ট',             aliases: ['airport','এয়ারপোর্ট'] },
      { id: 5,  nameEn: 'Khilkhet',           nameBn: 'খিলক্ষেত',              aliases: ['khilkhet','খিলক্ষেত'] },
      { id: 6,  nameEn: 'Bishwa Road',        nameBn: 'বিশ্বরোড',              aliases: ['bishwa road','বিশ্বরোড'] },
      { id: 7,  nameEn: 'Staff Road',         nameBn: 'স্টাফরোড',             aliases: ['staff road','স্টাফরোড'] },
      { id: 8,  nameEn: 'Kakoli',             nameBn: 'কাকলি',                aliases: ['kakoli','কাকলি'] },
      { id: 9,  nameEn: 'Mohakhali',          nameBn: 'মহাখালী',              aliases: ['mohakhali','মহাখালী'] },
      { id: 10, nameEn: 'Farmgate',           nameBn: 'ফার্মগেট',             aliases: ['farmgate','ফার্মগেট'] },
      { id: 11, nameEn: 'Shahbag',            nameBn: 'শাহবাগ',               aliases: ['shahbag','শাহবাগ'] },
      { id: 12, nameEn: 'Pressclub',          nameBn: 'প্রেসক্লাব',            aliases: ['pressclub','প্রেসক্লাব'] },
      { id: 13, nameEn: 'Fulbaria',           nameBn: 'ফুলবাড়িয়া',            aliases: ['fulbaria','ফুলবাড়িয়া'] },
      { id: 14, nameEn: 'Babu Bazar Bridge',  nameBn: 'বাবু বাজার ব্রীজ',        aliases: ['babu bazar bridge','বাবু বাজার ব্রীজ'] },
      { id: 15, nameEn: 'Keraniganj',         nameBn: 'কেরানীগঞ্জ (নতুন জেলখানা)', aliases: ['keraniganj','কেরানীগঞ্জ','কেরানীগঞ্জ (নতুন জেলখানা)'] }
    ],
    fareMatrix: [
      [0,42,48,50,56,63,66,71,77,82,89,96,101,105,109,128],
      [42,0,10,10,14,22,24,29,35,40,48,54,59,63,67,86],
      [48,10,0,10,10,16,18,23,29,34,42,48,53,57,61,80],
      [50,10,10,0,10,14,16,22,27,32,40,46,51,55,59,79],
      [56,14,10,10,0,10,10,15,21,26,33,40,45,49,53,72],
      [63,22,16,14,10,0,10,10,13,18,26,32,37,41,45,65],
      [66,24,18,16,10,10,0,10,11,16,23,30,35,39,43,62],
      [71,29,23,22,15,10,10,0,10,10,18,25,29,33,37,57],
      [77,35,29,27,21,13,11,10,0,10,13,19,24,28,32,52],
      [82,40,34,32,26,18,16,10,10,0,10,14,19,23,27,47],
      [89,48,42,40,33,26,23,18,13,10,0,10,11,15,19,39],
      [96,54,48,46,40,32,30,25,19,14,10,0,10,10,13,32],
      [101,59,53,51,45,37,35,29,24,19,11,10,0,10,10,28],
      [105,63,57,55,49,41,39,33,28,23,15,10,10,0,10,23],
      [109,67,61,59,53,45,43,37,32,27,19,13,10,10,0,20],
      [128,86,80,79,72,65,62,57,52,47,39,32,28,23,20,0]
    ]
  },

  // ══════════════════════════════════════════════
  // ROUTE SAYEDABAD_BALUGHAT: Sayedabad → Balughat
  // Total: 14.6 km | 7 stops
  // ══════════════════════════════════════════════
  {
    id: 'SAYEDABAD_BALUGHAT',
    routeNo: 'সায়দাবাদ-বালুঘাট',
    nameBn: 'সায়দাবাদ → বালুঘাট',
    nameEn: 'Sayedabad → Balughat',
    totalKm: 14.6,
    stops: [
      { id: 0, nameEn: 'Sayedabad',          nameBn: 'সায়দাবাদ',              aliases: ['sayedabad','সায়দাবাদ'] },
      { id: 1, nameEn: 'Bangladesh Bank',    nameBn: 'বাংলাদেশ ব্যাংক',        aliases: ['bangladesh bank','বাংলাদেশ ব্যাংক'] },
      { id: 2, nameEn: 'UBL',                nameBn: 'ইউবিএল',               aliases: ['ubl','ইউবিএল'] },
      { id: 3, nameEn: 'Pressclub',          nameBn: 'প্রেসক্লাব',            aliases: ['pressclub','প্রেসক্লাব'] },
      { id: 4, nameEn: 'Shahbag',            nameBn: 'শাহবাগ',               aliases: ['shahbag','শাহবাগ'] },
      { id: 5, nameEn: 'Farmgate',           nameBn: 'ফার্মগেট',             aliases: ['farmgate','ফার্মগেট'] },
      { id: 6, nameEn: 'Balughat',           nameBn: 'বালুঘাট',              aliases: ['balughat','বালুঘাট'] }
    ],
    fareMatrix: [
      [0,10,10,10,14,20,39],
      [10,0,10,10,10,14,33],
      [10,10,0,10,10,11,30],
      [10,10,10,0,10,10,29],
      [14,10,10,10,0,10,25],
      [20,14,11,10,10,0,19],
      [39,33,30,29,25,19,0]
    ]
  },

  // ══════════════════════════════════════════════
  // ROUTE UTTARA_VICTORIA: Uttara (Raniganj) → Victoria Park
  // Total: 23.3 km | 7 stops
  // ══════════════════════════════════════════════
  {
    id: 'UTTARA_VICTORIA',
    routeNo: 'উত্তরা-ভিক্টোরিয়া',
    nameBn: 'উত্তরা (রাণীগঞ্জ) → ভিক্টোরিয়া পার্ক',
    nameEn: 'Uttara (Raniganj) → Victoria Park',
    totalKm: 23.3,
    stops: [
      { id: 0, nameEn: 'Uttara (Raniganj)',  nameBn: 'উত্তরা (রাণীগঞ্জ)',      aliases: ['uttara (raniganj)','uttara','উত্তরা (রাণীগঞ্জ)','উত্তরা'] },
      { id: 1, nameEn: 'Notun Bazar',        nameBn: 'নতুন বাজার',            aliases: ['notun bazar','নতুন বাজার'] },
      { id: 2, nameEn: 'Rampura TV Center',  nameBn: 'রামপুরা টিভি সেন্টার',      aliases: ['rampura tv center','রামপুরা টিভি সেন্টার'] },
      { id: 3, nameEn: 'Malibagh',           nameBn: 'মালিবাগ',              aliases: ['malibagh','মালিবাগ'] },
      { id: 4, nameEn: 'Kakrail',            nameBn: 'কাকরাইল',              aliases: ['kakrail','কাকরাইল'] },
      { id: 5, nameEn: 'Bangabandhu Avenue', nameBn: 'বঙ্গবন্ধু এভিনিউ',         aliases: ['bangabandhu avenue','বঙ্গবন্ধু এভিনিউ'] },
      { id: 6, nameEn: 'Victoria Park',      nameBn: 'ভিক্টোরিয়া পার্ক',        aliases: ['victoria park','ভিক্টোরিয়া পার্ক'] }
    ],
    fareMatrix: [
      [0,32,41,50,52,57,63],
      [32,0,10,18,20,25,31],
      [41,10,0,10,11,16,22],
      [50,18,10,0,10,10,13],
      [52,20,11,10,0,10,10],
      [57,25,16,10,10,0,10],
      [63,31,22,13,10,10,0]
    ]
  },

  // ══════════════════════════════════════════════
  // ROUTE BANASREE_SHIA: Banasree → Mohammadpur Shia Masjid
  // Total: 18.2 km | 7 stops
  // ══════════════════════════════════════════════
  {
    id: 'BANASREE_SHIA',
    routeNo: 'বনশ্রী-শিয়া মসজিদ',
    nameBn: 'বনশ্রী → মোহাম্মদপুর শিয়া মসজিদ',
    nameEn: 'Banasree → Mohammadpur Shia Masjid',
    totalKm: 18.2,
    stops: [
      { id: 0, nameEn: 'Banasree',                  nameBn: 'বনশ্রী',                     aliases: ['banasree','বনশ্রী'] },
      { id: 1, nameEn: 'Rampura',                   nameBn: 'রামপুরা',                    aliases: ['rampura','রামপুরা'] },
      { id: 2, nameEn: 'Gulshan-1',                 nameBn: 'গুলশান-১',                   aliases: ['gulshan-1','গুলশান-১','gulshan 1','গুলশান ১'] },
      { id: 3, nameEn: 'Mohakhali',                 nameBn: 'মহাখালী',                    aliases: ['mohakhali','মহাখালী'] },
      { id: 4, nameEn: 'Agargaon',                  nameBn: 'আগারগাঁও',                   aliases: ['agargaon','আগারগাঁও'] },
      { id: 5, nameEn: 'Shyamoli Ring Road',        nameBn: 'শ্যামলী রিং রোড',               aliases: ['shyamoli ring road','শ্যামলী রিং রোড'] },
      { id: 6, nameEn: 'Mohammadpur Shia Masjid',   nameBn: 'মোহাম্মদপুর শিয়া মসজিদ',         aliases: ['mohammadpur shia masjid','mohammadpur','মোহাম্মদপুর শিয়া মসজিদ','মোহাম্মদপুর'] }
    ],
    fareMatrix: [
      [0,10,21,28,38,45,49],
      [10,0,14,21,31,38,42],
      [21,14,0,10,17,24,28],
      [28,21,10,0,11,18,22],
      [38,31,17,11,0,10,11],
      [45,38,24,18,10,0,10],
      [49,42,28,22,11,10,0]
    ]
  },

  // ══════════════════════════════════════════════
  // ROUTE PEERJONGI_NOTUN_1: Peerjongi Mazar → Notun Bazar (via Farmgate)
  // Total: 16.7 km | 14 stops
  // ══════════════════════════════════════════════
  {
    id: 'PEERJONGI_NOTUN_1',
    routeNo: 'পীরজঙ্গী-নতুনবাজার (ফার্মগেট)',
    nameBn: 'পীরজঙ্গী মাজার → নতুন বাজার (ফার্মগেট হয়ে)',
    nameEn: 'Peerjongi Mazar → Notun Bazar (via Farmgate)',
    totalKm: 16.7,
    stops: [
      { id: 0,  nameEn: 'Peerjongi Mazar',   nameBn: 'পীরজঙ্গী মাজার',       aliases: ['peerjongi mazar','পীরজঙ্গী মাজার'] },
      { id: 1,  nameEn: 'Kamalapur Station', nameBn: 'কমলাপুর স্টেশন',       aliases: ['kamalapur station','কমলাপুর স্টেশন'] },
      { id: 2,  nameEn: 'Bangladesh Bank',   nameBn: 'বাংলাদেশ ব্যাংক',        aliases: ['bangladesh bank','বাংলাদেশ ব্যাংক'] },
      { id: 3,  nameEn: 'Stadium',           nameBn: 'স্টেডিয়াম',             aliases: ['stadium','স্টেডিয়াম'] },
      { id: 4,  nameEn: 'Paltan',            nameBn: 'পল্টন',               aliases: ['paltan','পল্টন'] },
      { id: 5,  nameEn: 'Kakrail',           nameBn: 'কাকরাইল',              aliases: ['kakrail','কাকরাইল'] },
      { id: 6,  nameEn: 'Malibagh',          nameBn: 'মালিবাগ',              aliases: ['malibagh','মালিবাগ'] },
      { id: 7,  nameEn: 'Moghbazar',         nameBn: 'মগবাজার',              aliases: ['moghbazar','মগবাজার'] },
      { id: 8,  nameEn: 'Bangla Motor',      nameBn: 'বাংলামটর',             aliases: ['bangla motor','বাংলামটর','banglamotor'] },
      { id: 9,  nameEn: 'Farmgate',          nameBn: 'ফার্মগেট',             aliases: ['farmgate','ফার্মগেট'] },
      { id: 10, nameEn: 'Mohakhali',         nameBn: 'মহাখালী',              aliases: ['mohakhali','মহাখালী'] },
      { id: 11, nameEn: 'Gulshan-1',         nameBn: 'গুলশান-১',             aliases: ['gulshan-1','গুলশান-১','gulshan 1'] },
      { id: 12, nameEn: 'Gulshan-2',         nameBn: 'গুলশান-২',             aliases: ['gulshan-2','গুলশান-২','gulshan 2'] },
      { id: 13, nameEn: 'Notun Bazar',       nameBn: 'নতুন বাজার',            aliases: ['notun bazar','নতুন বাজার'] }
    ],
    fareMatrix: [
      [0,10,10,10,10,14,16,19,22,26,34,39,43,45],
      [10,0,10,10,10,12,15,18,21,25,33,38,42,44],
      [10,10,0,10,10,10,12,15,18,22,30,35,39,41],
      [10,10,10,0,10,10,10,12,15,19,26,32,36,38],
      [10,10,10,10,0,10,10,10,13,17,25,30,34,36],
      [14,12,10,10,10,0,10,10,10,13,21,26,30,32],
      [16,15,12,10,10,10,0,10,10,10,18,23,28,29],
      [19,18,15,12,10,10,10,0,10,10,15,20,24,26],
      [22,21,18,15,13,10,10,10,0,10,12,17,21,23],
      [26,25,22,19,17,13,10,10,10,0,10,13,17,19],
      [34,33,30,26,25,21,18,15,12,10,0,10,10,11],
      [39,38,35,32,30,26,23,20,17,13,10,0,10,10],
      [43,42,39,36,34,30,28,24,21,17,10,10,0,10],
      [45,44,41,38,36,32,29,26,23,19,11,10,10,0]
    ]
  },

  // ══════════════════════════════════════════════
  // ROUTE PEERJONGI_NOTUN_2: Peerjongi Mazar → Notun Bazar (via Satrasta)
  // Total: 15.0 km | 14 stops
  // ══════════════════════════════════════════════
  {
    id: 'PEERJONGI_NOTUN_2',
    routeNo: 'পীরজঙ্গী-নতুনবাজার (সাতরাস্তা) (বিকল্প)',
    nameBn: 'পীরজঙ্গী মাজার → নতুন বাজার (সাতরাস্তা হয়ে) (বিকল্প)',
    nameEn: 'Peerjongi Mazar → Notun Bazar (via Satrasta) (Alternative)',
    totalKm: 15.0,
    stops: [
      { id: 0,  nameEn: 'Peerjongi Mazar',   nameBn: 'পীরজঙ্গী মাজার',       aliases: ['peerjongi mazar','পীরজঙ্গী মাজার'] },
      { id: 1,  nameEn: 'Kamalapur Station', nameBn: 'কমলাপুর স্টেশন',       aliases: ['kamalapur station','কমলাপুর স্টেশন'] },
      { id: 2,  nameEn: 'Bangladesh Bank',   nameBn: 'বাংলাদেশ ব্যাংক',        aliases: ['bangladesh bank','বাংলাদেশ ব্যাংক'] },
      { id: 3,  nameEn: 'Stadium',           nameBn: 'স্টেডিয়াম',             aliases: ['stadium','স্টেডিয়াম'] },
      { id: 4,  nameEn: 'Paltan',            nameBn: 'পল্টন',               aliases: ['paltan','পল্টন'] },
      { id: 5,  nameEn: 'Kakrail',           nameBn: 'কাকরাইল',              aliases: ['kakrail','কাকরাইল'] },
      { id: 6,  nameEn: 'Malibagh',          nameBn: 'মালিবাগ',              aliases: ['malibagh','মালিবাগ'] },
      { id: 7,  nameEn: 'Moghbazar',         nameBn: 'মগবাজার',              aliases: ['moghbazar','মগবাজার'] },
      { id: 8,  nameEn: 'Satrasta',          nameBn: 'সাতরাস্তা',             aliases: ['satrasta','সাতরাস্তা'] },
      { id: 9,  nameEn: 'Nabisco',           nameBn: 'নাবিস্কো',              aliases: ['nabisco','নাবিস্কো'] },
      { id: 10, nameEn: 'Mohakhali',         nameBn: 'মহাখালী',              aliases: ['mohakhali','মহাখালী'] },
      { id: 11, nameEn: 'Titumir College',   nameBn: 'তিতুমীর কলেজ',         aliases: ['titumir college','তিতুমীর কলেজ'] },
      { id: 12, nameEn: 'Gulshan-1',         nameBn: 'গুলশান-১',             aliases: ['gulshan-1','গুলশান-১','gulshan 1'] },
      { id: 13, nameEn: 'Notun Bazar',       nameBn: 'নতুন বাজার',            aliases: ['notun bazar','নতুন বাজার'] }
    ],
    fareMatrix: [
      [0,10,10,10,10,14,16,19,22,26,28,30,33,41],
      [10,0,10,10,10,12,15,18,21,24,26,29,32,39],
      [10,10,0,10,10,10,12,15,18,22,24,26,29,36],
      [10,10,10,0,10,10,10,12,15,18,20,22,25,33],
      [10,10,10,10,0,10,10,10,13,16,18,21,23,31],
      [14,12,10,10,10,0,10,10,10,12,14,16,19,27],
      [16,15,12,10,10,10,0,10,10,10,12,14,17,25],
      [19,18,15,12,10,10,10,0,10,10,10,11,14,21],
      [22,21,18,15,13,10,10,10,0,10,10,10,11,18],
      [26,24,22,18,16,12,10,10,10,0,10,10,10,15],
      [28,26,24,20,18,14,12,10,10,10,0,10,10,13],
      [30,29,26,22,21,16,14,11,10,10,10,0,10,10],
      [33,32,29,25,23,19,17,14,11,10,10,10,0,10],
      [41,39,36,33,31,27,25,21,18,15,13,10,10,0]
    ]
  },

  // ══════════════════════════════════════════════
  // ROUTE SAYEDABAD_BALUGHAT_2: Sayedabad → Balughat (Alternative)
  // Total: 14.6 km | 7 stops
  // ══════════════════════════════════════════════
  {
    id: 'SAYEDABAD_BALUGHAT_2',
    routeNo: 'সায়দাবাদ-বালুঘাট (বিকল্প)',
    nameBn: 'সায়দাবাদ → বালুঘাট (বিকল্প)',
    nameEn: 'Sayedabad → Balughat (Alternative)',
    totalKm: 14.6,
    stops: [
      { id: 0, nameEn: 'Sayedabad',          nameBn: 'সায়দাবাদ',              aliases: ['sayedabad','সায়দাবাদ'] },
      { id: 1, nameEn: 'Bangladesh Bank',    nameBn: 'বাংলাদেশ ব্যাংক',        aliases: ['bangladesh bank','বাংলাদেশ ব্যাংক'] },
      { id: 2, nameEn: 'UBL',                nameBn: 'ইউবিএল',               aliases: ['ubl','ইউবিএল'] },
      { id: 3, nameEn: 'Pressclub',          nameBn: 'প্রেসক্লাব',            aliases: ['pressclub','প্রেসক্লাব'] },
      { id: 4, nameEn: 'Shahbag',            nameBn: 'শাহবাগ',               aliases: ['shahbag','শাহবাগ'] },
      { id: 5, nameEn: 'Farmgate',           nameBn: 'ফার্মগেট',             aliases: ['farmgate','ফার্মগেট'] },
      { id: 6, nameEn: 'Balughat',           nameBn: 'বালুঘাট',              aliases: ['balughat','বালুঘাট'] }
    ],
    fareMatrix: [
      [0,10,10,10,14,20,39],
      [10,0,10,10,10,14,33],
      [10,10,0,10,10,11,30],
      [10,10,10,0,10,10,29],
      [14,10,10,10,0,10,25],
      [20,14,11,10,10,0,19],
      [39,33,30,29,25,19,0]
    ]
  },

  // ══════════════════════════════════════════════
  // ROUTE UTTARA_VICTORIA_2: Uttara (Raniganj) → Victoria Park (Alternative)
  // Total: 23.3 km | 7 stops
  // ══════════════════════════════════════════════
  {
    id: 'UTTARA_VICTORIA_2',
    routeNo: 'উত্তরা-ভিক্টোরিয়া (বিকল্প)',
    nameBn: 'উত্তরা (রাণীগঞ্জ) → ভিক্টোরিয়া পার্ক (বিকল্প)',
    nameEn: 'Uttara (Raniganj) → Victoria Park (Alternative)',
    totalKm: 23.3,
    stops: [
      { id: 0, nameEn: 'Uttara (Raniganj)',  nameBn: 'উত্তরা (রাণীগঞ্জ)',      aliases: ['uttara (raniganj)','uttara','উত্তরা (রাণীগঞ্জ)','উত্তরা'] },
      { id: 1, nameEn: 'Notun Bazar',        nameBn: 'নতুন বাজার',            aliases: ['notun bazar','নতুন বাজার'] },
      { id: 2, nameEn: 'Rampura TV Center',  nameBn: 'রামপুরা টিভি সেন্টার',      aliases: ['rampura tv center','রামপুরা টিভি সেন্টার'] },
      { id: 3, nameEn: 'Malibagh',           nameBn: 'মালিবাগ',              aliases: ['malibagh','মালিবাগ'] },
      { id: 4, nameEn: 'Kakrail',            nameBn: 'কাকরাইল',              aliases: ['kakrail','কাকরাইল'] },
      { id: 5, nameEn: 'Bangabandhu Avenue', nameBn: 'বঙ্গবন্ধু এভিনিউ',         aliases: ['bangabandhu avenue','বঙ্গবন্ধু এভিনিউ'] },
      { id: 6, nameEn: 'Victoria Park',      nameBn: 'ভিক্টোরিয়া পার্ক',        aliases: ['victoria park','ভিক্টোরিয়া পার্ক'] }
    ],
    fareMatrix: [
      [0,32,41,50,52,57,63],
      [32,0,10,18,20,25,31],
      [41,10,0,10,11,16,22],
      [50,18,10,0,10,10,13],
      [52,20,11,10,0,10,10],
      [57,25,16,10,10,0,10],
      [63,31,22,13,10,10,0]
    ]
  },

  // ══════════════════════════════════════════════
  // ROUTE BANASREE_SHIA_2: Banasree → Mohammadpur Shia Masjid (Alternative)
  // Total: 18.2 km | 7 stops
  // ══════════════════════════════════════════════
  {
    id: 'BANASREE_SHIA_2',
    routeNo: 'বনশ্রী-শিয়া (বিকল্প)',
    nameBn: 'বনশ্রী → মোহাম্মদপুর শিয়া মসজিদ (বিকল্প)',
    nameEn: 'Banasree → Mohammadpur Shia Masjid (Alternative)',
    totalKm: 18.2,
    stops: [
      { id: 0, nameEn: 'Banasree',                  nameBn: 'বনশ্রী',                     aliases: ['banasree','বনশ্রী'] },
      { id: 1, nameEn: 'Rampura',                   nameBn: 'রামপুরা',                    aliases: ['rampura','রামপুরা'] },
      { id: 2, nameEn: 'Gulshan-1',                 nameBn: 'গুলশান-১',                   aliases: ['gulshan-1','গুলশান-১','gulshan 1','গুলশান ১'] },
      { id: 3, nameEn: 'Mohakhali',                 nameBn: 'মহাখালী',                    aliases: ['mohakhali','মহাখালী'] },
      { id: 4, nameEn: 'Agargaon',                  nameBn: 'আগারগাঁও',                   aliases: ['agargaon','আগারগাঁও'] },
      { id: 5, nameEn: 'Shyamoli Ring Road',        nameBn: 'শ্যামলী রিং রোড',               aliases: ['shyamoli ring road','শ্যামলী রিং রোড'] },
      { id: 6, nameEn: 'Mohammadpur Shia Masjid',   nameBn: 'মোহাম্মদপুর শিয়া মসজিদ',         aliases: ['mohammadpur shia masjid','mohammadpur','মোহাম্মদপুর শিয়া মসজিদ','মোহাম্মদপুর'] }
    ],
    fareMatrix: [
      [0,10,21,28,38,45,49],
      [10,0,14,21,31,38,42],
      [21,14,0,10,17,24,28],
      [28,21,10,0,11,18,22],
      [38,31,17,11,0,10,11],
      [45,38,24,18,10,0,10],
      [49,42,28,22,11,10,0]
    ]
  },

  // ══════════════════════════════════════════════
  // ROUTE BANASREE_MOHAMMADPUR_ASAD: Banasree → Mohammadpur (Asad Avenue)
  // Total: 14.0 km | 7 stops
  // ══════════════════════════════════════════════
  {
    id: 'BANASREE_MOHAMMADPUR_ASAD',
    routeNo: 'বনশ্রী-মোহাম্মদপুর (বিকল্প)',
    nameBn: 'বনশ্রী → মোহাম্মদপুর (আসাদ এভিনিউ) (বিকল্প)',
    nameEn: 'Banasree → Mohammadpur (Asad Avenue) (Alternative)',
    totalKm: 14.0,
    stops: [
      { id: 0, nameEn: 'Banasree',                  nameBn: 'বনশ্রী',                     aliases: ['banasree','বনশ্রী'] },
      { id: 1, nameEn: 'Mouchak',                   nameBn: 'মৌচাক',                      aliases: ['mouchak','মৌচাক'] },
      { id: 2, nameEn: 'Kakrail',                   nameBn: 'কাকরাইল',                    aliases: ['kakrail','কাকরাইল'] },
      { id: 3, nameEn: 'Shahbag',                   nameBn: 'শাহবাগ',                     aliases: ['shahbag','শাহবাগ'] },
      { id: 4, nameEn: 'Science Lab',               nameBn: 'সাইন্সল্যাব',                  aliases: ['science lab','সাইন্সল্যাব'] },
      { id: 5, nameEn: 'Jigatola',                  nameBn: 'জিগাতলা',                    aliases: ['jigatola','জিগাতলা'] },
      { id: 6, nameEn: 'Mohammadpur (Asad Avenue)', nameBn: 'মোহাম্মদপুর (আসাদ এভিনিউ)',         aliases: ['mohammadpur asad avenue','mohammadpur','মোহাম্মদপুর (আসাদ এভিনিউ)','মোহাম্মদপুর'] }
    ],
    fareMatrix: [
      [0,16,18,24,27,30,38],
      [16,0,10,10,11,14,22],
      [18,10,0,10,10,12,20],
      [24,10,10,0,10,10,14],
      [27,11,10,10,0,10,10],
      [30,14,12,10,10,0,10],
      [38,22,20,14,10,10,0]
    ]
  },

  // ══════════════════════════════════════════════
  // ROUTE MOHAMMADPUR_POSTOGOLA: Mohammadpur (Japan Garden City) → Postogola
  // Total: 16.2 km | 10 stops
  // ══════════════════════════════════════════════
  {
    id: 'MOHAMMADPUR_POSTOGOLA',
    routeNo: 'মোহাম্মদপুর-পোস্তগোলা (বিকল্প)',
    nameBn: 'মোহাম্মদপুর (জাপান গার্ডেন সিটি) → পোস্তগোলা (বিকল্প)',
    nameEn: 'Mohammadpur (Japan Garden City) → Postogola (Alternative)',
    totalKm: 16.2,
    stops: [
      { id: 0, nameEn: 'Mohammadpur (Japan Garden City)', nameBn: 'মোংপুর (জাপান গার্ডেন সিটি)',    aliases: ['mohammadpur japan garden city','mohammadpur','মোংপুর (জাপান গার্ডেন সিটি)','মোহাম্মদপুর'] },
      { id: 1, nameEn: 'Shyamoli',                        nameBn: 'শ্যামলী',                     aliases: ['shyamoli','শ্যামলী'] },
      { id: 2, nameEn: 'Asad Gate',                       nameBn: 'আসাদগেট',                    aliases: ['asad gate','আসাদগেট'] },
      { id: 3, nameEn: 'Science Lab',                     nameBn: 'সাইন্সল্যাবঃ',                 aliases: ['science lab','সাইন্সল্যাব','সাইন্সল্যাবঃ'] },
      { id: 4, nameEn: 'Shahbag',                         nameBn: 'শাহবাগ',                     aliases: ['shahbag','শাহবাগ'] },
      { id: 5, nameEn: 'Kakrail',                         nameBn: 'কাকরাইল',                    aliases: ['kakrail','কাকরাইল'] },
      { id: 6, nameEn: 'Fakirapool',                      nameBn: 'ফকিরাপুল',                    aliases: ['fakirapool','ফকিরাপুল'] },
      { id: 7, nameEn: 'Bangladesh Bank',                 nameBn: 'বাংলাদেশ ব্যাংক',              aliases: ['bangladesh bank','বাংলাদেশ ব্যাংক'] },
      { id: 8, nameEn: 'Doyaganj Road',                   nameBn: 'দয়াগঞ্জ রোড',                 aliases: ['doyaganj road','দয়াগঞ্জ রোড'] },
      { id: 9, nameEn: 'Postogola',                       nameBn: 'পোস্তগোলা',                   aliases: ['postogola','পোস্তগোলা'] }
    ],
    fareMatrix: [
      [0,10,12,19,23,27,31,33,38,44],
      [10,0,10,12,16,20,23,26,30,36],
      [12,10,0,10,11,15,19,22,26,32],
      [19,12,10,0,10,10,11,14,18,25],
      [23,16,11,10,0,10,10,10,14,21],
      [27,20,15,10,10,0,10,10,10,16],
      [31,23,19,11,10,10,0,10,10,13],
      [33,26,22,14,10,10,10,0,10,10],
      [38,30,26,18,14,10,10,10,0,10],
      [44,36,32,25,21,16,13,10,10,0]
    ]
  }


  // ══════════════════════════════════════════════
  // ROUTE A-190: EPZ → Link Road
  // Total: 46.2 km | 8 stops
  // ══════════════════════════════════════════════
  {
    id: 'A190',
    routeNo: 'এ-১৯০',
    nameBn: 'ইপিজেড → লিংক রোড',
    nameEn: 'EPZ → Link Road',
    totalKm: 46.2,
    stops: [
      { id: 0, nameEn: 'EPZ',              nameBn: 'ইপিজেড',            aliases: ['epz', 'ইপিজেড'] },
      { id: 1, nameEn: 'Gabtoli',          nameBn: 'গাবতলি',            aliases: ['gabtoli', 'গাবতলি'] },
      { id: 2, nameEn: 'Kalyanpur',        nameBn: 'কল্যাণপুর',          aliases: ['kalyanpur', 'কল্যাণপুর'] },
      { id: 3, nameEn: 'College Gate',     nameBn: 'কলেজগেট',           aliases: ['college gate', 'কলেজগেট'] },
      { id: 4, nameEn: 'Farmgate',         nameBn: 'ফার্মগেট',           aliases: ['farmgate', 'ফার্মগেট'] },
      { id: 5, nameEn: 'Bangladesh Bank',  nameBn: 'বাংলাদেশ ব্যাংক',     aliases: ['bangladesh bank', 'বাংলাদেশ ব্যাংক'] },
      { id: 6, nameEn: 'Sayedabad',        nameBn: 'সায়েদাবাদ',          aliases: ['sayedabad', 'সায়েদাবাদ'] },
      { id: 7, nameEn: 'Link Road',        nameBn: 'লিংক রোড',          aliases: ['link road', 'লিংক রোড'] }
    ],
    fareMatrix: [[0,70,76,80,87,103,108,125],[70,null,10,10,18,33,38,55],[76,10,null,10,11,26,32,48],[80,10,10,null,10,23,28,45],[87,18,11,10,null,15,21,37],[103,33,26,23,15,null,10,22],[108,38,32,28,21,10,null,17],[125,55,48,45,37,22,17,null]]
  },

  // ══════════════════════════════════════════════
  // ROUTE A-192: Eidgah → Chittagong Road
  // Total: 47.5 km | 13 stops
  // ══════════════════════════════════════════════
  {
    id: 'A192',
    routeNo: 'এ-১৯২',
    nameBn: 'ঈদগাহ → চিটাগাং রোড',
    nameEn: 'Eidgah → Chittagong Road',
    totalKm: 47.5,
    stops: [
      { id: 0,  nameEn: 'Eidgah',          nameBn: 'ঈদগাহ',           aliases: ['eidgah', 'ঈদগাহ'] },
      { id: 1,  nameEn: 'Savar',           nameBn: 'সাভার',           aliases: ['savar', 'সাভার'] },
      { id: 2,  nameEn: 'Gabtoli',         nameBn: 'গাবতলি',          aliases: ['gabtoli', 'গাবতলি'] },
      { id: 3,  nameEn: 'Kalyanpur',       nameBn: 'কল্যাণপুর',        aliases: ['kalyanpur', 'কল্যাণপুর'] },
      { id: 4,  nameEn: 'College Gate',    nameBn: 'কলেজগেট',         aliases: ['college gate', 'কলেজগেট'] },
      { id: 5,  nameEn: 'Farmgate',        nameBn: 'ফার্মগেট',         aliases: ['farmgate', 'ফার্মগেট'] },
      { id: 6,  nameEn: 'Mohakhali',       nameBn: 'মহাখালী',         aliases: ['mohakhali', 'মহাখালী'] },
      { id: 7,  nameEn: 'Gulshan',         nameBn: 'গুলশান',          aliases: ['gulshan', 'গুলশান'] },
      { id: 8,  nameEn: 'Badda',           nameBn: 'বাড্ডা',           aliases: ['badda', 'বাড্ডা'] },
      { id: 9,  nameEn: 'Malibagh',        nameBn: 'মালিবাগ',         aliases: ['malibagh', 'মালিবাগ'] },
      { id: 10, nameEn: 'Tikatuli',        nameBn: 'টিকাটুলি',         aliases: ['tikatuli', 'টিকাটুলি'] },
      { id: 11, nameEn: 'Sayedabad',       nameBn: 'সায়েদাবাদ',        aliases: ['sayedabad', 'সায়েদাবাদ'] },
      { id: 12, nameEn: 'Chittagong Road', nameBn: 'চিটাগাং রোড',     aliases: ['chittagong road', 'চিটাগাং রোড'] }
    ],
    fareMatrix: [[0,35,70,76,80,87,92,95,98,104,113,114,128],[35,null,35,42,45,53,57,60,63,70,78,80,94],[70,35,null,10,10,18,22,25,28,35,43,44,58],[76,42,10,null,10,11,15,18,22,28,36,38,52],[80,45,10,10,null,10,12,15,18,25,33,34,48],[87,53,18,11,10,null,10,10,11,17,25,27,41],[92,57,22,15,12,10,null,10,10,13,21,22,36],[95,60,25,18,15,10,10,null,10,10,18,20,34],[98,63,28,22,18,11,10,10,null,10,15,16,30],[104,70,35,28,25,17,13,10,10,null,10,10,24],[113,78,43,36,33,25,21,18,15,10,null,10,16],[114,80,44,38,34,27,22,20,16,10,10,null,14],[128,94,58,52,48,41,36,34,30,24,16,14,null]]
  },

  // ══════════════════════════════════════════════
  // ROUTE A-202: Savar → Victoria Park
  // Total: 43.0 km | 10 stops
  // ══════════════════════════════════════════════
  {
    id: 'A202',
    routeNo: 'এ-২০২',
    nameBn: 'সাভার → ভিক্টোরিয়া পার্ক',
    nameEn: 'Savar → Victoria Park',
    totalKm: 43.0,
    stops: [
      { id: 0, nameEn: 'Savar',           nameBn: 'সাভার',           aliases: ['savar', 'সাভার'] },
      { id: 1, nameEn: 'Gabtoli',         nameBn: 'গাবতলি',          aliases: ['gabtoli', 'গাবতলি'] },
      { id: 2, nameEn: 'Mirpur-1',        nameBn: 'মিরপুর-১',        aliases: ['mirpur-1', 'মিরপুর-১'] },
      { id: 3, nameEn: 'Mirpur-10',       nameBn: 'মিরপুর-১০',       aliases: ['mirpur-10', 'মিরপুর-১০'] },
      { id: 4, nameEn: 'Kakoli',          nameBn: 'কাকলী',           aliases: ['kakoli', 'কাকলী'] },
      { id: 5, nameEn: 'Notun Bazar',     nameBn: 'নতুন বাজার',      aliases: ['notun bazar', 'নতুন বাজার'] },
      { id: 6, nameEn: 'Rampura',         nameBn: 'রামপুরা',         aliases: ['rampura', 'রামপুরা'] },
      { id: 7, nameEn: 'Malibagh',        nameBn: 'মালিবাগ',         aliases: ['malibagh', 'মালিবাগ'] },
      { id: 8, nameEn: 'Gulistan',        nameBn: 'গুলিস্তান',        aliases: ['gulistan', 'গুলিস্তান'] },
      { id: 9, nameEn: 'Victoria Park',   nameBn: 'ভিক্টোরিয়া পার্ক', aliases: ['victoria park', 'ভিক্টোরিয়া পার্ক'] }
    ],
    fareMatrix: [[0,37,46,51,71,78,92,98,106,116],[37,null,10,14,34,40,55,61,69,79],[46,10,null,10,25,32,46,53,61,70],[51,14,10,null,20,27,41,48,56,65],[71,34,25,20,null,10,21,27,35,45],[78,40,32,27,10,null,14,21,29,39],[92,55,46,41,21,14,null,10,15,24],[98,61,53,48,27,21,10,null,10,18],[106,69,61,56,35,29,15,10,null,10],[116,79,70,65,45,39,24,18,10,null]]
  },

  // ══════════════════════════════════════════════
  // ROUTE A-207: Tongi → Dhakeshwari
  // Total: 28.0 km | 8 stops
  // ══════════════════════════════════════════════
  {
    id: 'A207',
    routeNo: 'এ-২০৭',
    nameBn: 'টঙ্গী → ঢাকেশ্বরী',
    nameEn: 'Tongi → Dhakeshwari',
    totalKm: 28.0,
    stops: [
      { id: 0, nameEn: 'Tongi',           nameBn: 'টঙ্গী',           aliases: ['tongi', 'টঙ্গী'] },
      { id: 1, nameEn: 'Azampur',         nameBn: 'আজমপুর',         aliases: ['azampur', 'আজমপুর'] },
      { id: 2, nameEn: 'Mohakhali',       nameBn: 'মহাখালী',         aliases: ['mohakhali', 'মহাখালী'] },
      { id: 3, nameEn: 'Farmgate',        nameBn: 'ফার্মগেট',         aliases: ['farmgate', 'ফার্মগেট'] },
      { id: 4, nameEn: 'Manik Mia',       nameBn: 'মানিক মিয়া',       aliases: ['manik mia', 'মানিক মিয়া', 'manik mia avenue'] },
      { id: 5, nameEn: 'City College',    nameBn: 'সিটি কলেজ',        aliases: ['city college', 'সিটি কলেজ'] },
      { id: 6, nameEn: 'Nilkhet',         nameBn: 'নীলক্ষেত',        aliases: ['nilkhet', 'নীলক্ষেত'] },
      { id: 7, nameEn: 'Dhakeshwari',     nameBn: 'ঢাকেশ্বরী',        aliases: ['dhakeshwari', 'ঢাকেশ্বরী', 'ঢাকেশ্বরী এতিমখানা'] }
    ],
    fareMatrix: [[0,20,51,58,63,69,72,76],[20,null,31,38,43,49,52,56],[51,31,null,10,12,17,20,24],[58,38,10,null,10,11,14,18],[63,43,12,10,null,10,10,13],[69,49,17,11,10,null,10,10],[72,52,20,14,10,10,null,10],[76,56,24,18,13,10,10,null]]
  },

  // ══════════════════════════════════════════════
  // ROUTE A-219: Fulbaria → Kapasia
  // Total: 66.0 km | 12 stops
  // ══════════════════════════════════════════════
  {
    id: 'A219',
    routeNo: 'এ-২১৯',
    nameBn: 'ফুলবাড়ীয়া → কাপাসিয়া',
    nameEn: 'Fulbaria → Kapasia',
    totalKm: 66.0,
    stops: [
      { id: 0,  nameEn: 'Fulbaria',          nameBn: 'ফুলবাড়ীয়া',         aliases: ['fulbaria', 'ফুলবাড়ীয়া'] },
      { id: 1,  nameEn: 'Malibagh',          nameBn: 'মালিবাগ',           aliases: ['malibagh', 'মালিবাগ'] },
      { id: 2,  nameEn: 'Nabisco',           nameBn: 'নাবিস্কো',           aliases: ['nabisco', 'নাবিস্কো'] },
      { id: 3,  nameEn: 'Mohakhali',         nameBn: 'মহাখালী',           aliases: ['mohakhali', 'মহাখালী'] },
      { id: 4,  nameEn: 'Banani',            nameBn: 'বনানী',             aliases: ['banani', 'বনানী'] },
      { id: 5,  nameEn: 'Airport',           nameBn: 'এয়ারপোর্ট',          aliases: ['airport', 'এয়ারপোর্ট'] },
      { id: 6,  nameEn: 'Tongi',             nameBn: 'টঙ্গী',             aliases: ['tongi', 'টঙ্গী'] },
      { id: 7,  nameEn: 'Gazipur Chowrasta', nameBn: 'গাজীপুর চৌঃ',        aliases: ['gazipur chowrasta', 'গাজীপুর চৌঃ', 'গাজীপুর'] },
      { id: 8,  nameEn: 'Rajendrapur',       nameBn: 'রাজেন্দ্রপুর',         aliases: ['rajendrapur', 'রাজেন্দ্রপুর'] },
      { id: 9,  nameEn: 'Rajabari',          nameBn: 'রাজাবাড়ী',           aliases: ['rajabari', 'রাজাবাড়ী'] },
      { id: 10, nameEn: 'Pabur',             nameBn: 'পাবুর',             aliases: ['pabur', 'পাবুর'] },
      { id: 11, nameEn: 'Kapasia',           nameBn: 'কাপাসিয়া',           aliases: ['kapasia', 'কাপাসিয়া'] }
    ],
    fareMatrix: [[0,11,23,25,30,53,68,99,131,146,159,178],[11,null,11,14,19,42,56,87,120,134,147,167],[23,11,null,10,10,31,45,76,109,123,136,156],[25,14,10,null,10,28,42,73,106,120,133,153],[30,19,10,10,null,23,38,69,101,116,129,149],[53,42,31,28,23,null,14,45,78,92,105,125],[68,56,45,42,38,14,null,31,64,78,91,111],[99,87,76,73,69,45,31,null,33,47,60,80],[131,120,109,106,101,78,64,33,null,15,28,47],[146,134,123,120,116,92,78,47,15,null,13,32],[159,147,136,133,129,105,91,60,28,13,null,19],[178,167,156,153,149,125,111,80,47,32,19,null]]
  }

];

module.exports = { routes };
