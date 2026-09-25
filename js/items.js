/* ============================================================
   ΛΙΣΤΑ ΡΟΦΗΜΑΤΩΝ — Sklavenitis Food to Go
   Κάθε προϊόν έχει barcode (EAN-13) για Take Away και προαιρετικά
   για Καθήμενων (dine-in). Αν sit=null, εμφανίζεται μόνο TA κουμπί.
   ============================================================ */
const ITEMS = [
    {
        name: "Cappuccino",
        ta: { price: "1,70€", code: "2391086000007" },
        sit: { price: "1,90€", code: "2391140000004" }
    },
    { name: "Cappuccino Grande", ta: { price: "2,60€", code: "2391089000004" }, sit: { price: "2,85€", code: "2391143000001" } },
    { name: "Cappuccino Διπλός", ta: { price: "1,90€", code: "2391087000006" }, sit: { price: "2,10€", code: "2391141000003" } },
    { name: "Cappuccino Σαντιγύ", ta: { price: "1,90€", code: "2391088000005" }, sit: { price: "2,10€", code: "2391142000002" } },
    { name: "Espresso", ta: { price: "1,20€", code: "2391079000007" }, sit: { price: "1,30€", code: "2391133000004" } },
    { name: "Espresso Decafeine", ta: { price: "1,20€", code: "2391081000002" }, sit: { price: "1,30€", code: "2391135000002" } },
    { name: "Espresso Decafeine Διπλός", ta: { price: "1,50€", code: "2391082000001" }, sit: { price: "1,65€", code: "2391136000001" } },
    { name: "Espresso Grande", ta: { price: "2,20€", code: "2391083000000" }, sit: { price: "2,40€", code: "2391137000000" } },
    { name: "Espresso Latte", ta: { price: "1,90€", code: "2391084000009" }, sit: { price: "2,10€", code: "2391138000009" } },
    { name: "Espresso Latte Grande", ta: { price: "2,50€", code: "2391085000008" }, sit: { price: "2,75€", code: "2391139000008" } },
    { name: "Espresso Διπλός", ta: { price: "1,50€", code: "2391080000003" }, sit: { price: "1,65€", code: "2391134000003" } },
    { name: "Freddo Cappuccino", ta: { price: "1,90€", code: "2391092000008" }, sit: { price: "2,10€", code: "2391146000008" } },
    { name: "Freddo Cappuccino Grande", ta: { price: "2,50€", code: "2391093000007" }, sit: { price: "2,75€", code: "2391147000007" } },
    { name: "Freddo Espresso", ta: { price: "1,80€", code: "2391090000000" }, sit: { price: "2,00€", code: "2391144000000" } },
    { name: "Freddo Espresso Caramel", ta: { price: "1,90€", code: "2391094000006" }, sit: { price: "2,10€", code: "2391148000006" } },
    { name: "Freddo Espresso Caramel Grande", ta: { price: "2,50€", code: "2391095000005" }, sit: { price: "2,75€", code: "2391149000005" } },
    { name: "Freddo Espresso Grande", ta: { price: "2,30€", code: "2391091000009" }, sit: { price: "2,55€", code: "2391145000009" } },
    { name: "Freddo Espresso με Σαντιγύ", ta: { price: "1,90€", code: "2391096000004" }, sit: { price: "2,10€", code: "2391150000001" } },
    { name: "Freddo Espresso με Σαντιγύ Grande", ta: { price: "2,50€", code: "2391097000003" }, sit: { price: "2,75€", code: "2391151000000" } },
    { name: "Freddo με Φυτική κρέμα", ta: { price: "2,00€", code: "2391098000002" }, sit: { price: "2,20€", code: "2391152000009" } },
    { name: "Freddo με Φυτική κρέμα Grande", ta: { price: "2,60€", code: "2391099000001" }, sit: { price: "2,85€", code: "2391153000008" } },
    { name: "Καφές Ελληνικός", ta: { price: "0,80€", code: "2380908000004" }, sit: { price: "0,90€", code: "2391118000005" } },
    { name: "Καφές Ελληνικός Διπλός", ta: { price: "1,00€", code: "2380909000003" }, sit: { price: "1,10€", code: "2391119000004" } },
    { name: "Νες Καφέ Grande", ta: { price: "1,30€", code: "2381824000000" }, sit: { price: "1,40€", code: "2390478000007" } },
    { name: "Νες Καφέ Medium", ta: { price: "1,10€", code: "2381536000008" }, sit: { price: "1,20€", code: "2390477000008" } },
    { name: "Φραπέ Grande", ta: { price: "1,30€", code: "2381823000001" }, sit: { price: "1,40€", code: "2390476000009" } },
    { name: "Φραπέ Medium", ta: { price: "1,10€", code: "2381822000002" }, sit: { price: "1,20€", code: "2390475000000" } },
    { name: "Καφές Φίλτρου Medium με επιλογή γεύσης σιροπιού", ta: { price: "1,10€", code: "2381820000004" }, sit: { price: "1,20€", code: "2390473000002" } },
    { name: "Καφές Φίλτρου Grande με επιλογή γεύσης σιροπιού", ta: { price: "1,30€", code: "2381821000003" }, sit: { price: "1,40€", code: "2390474000001" } },
    { name: "Hot Dog", ta: { price: "0,90€", code: "2380219000007" }, sit: null },
    { name: "Παγωτό κυπελάκι μηχανής", ta: { price: "0,95€", code: "2391100000006" }, sit: null },
    { name: "Παγωτό χωνάκι μεγάλο", ta: { price: "0,95€", code: "2380705000009" }, sit: null },
    { name: "Παγωτό χωνάκι μηχανής", ta: { price: "0,70€", code: "2380893000003" }, sit: null },
    { name: "Φυσικός χυμός πορτοκάλι Medium", ta: { price: "1,70€", code: "2381835000006" }, sit: { price: "1,85€", code: "2390493000006" } },
    { name: "Ζεστό ρόφημα σοκολάτας (επιλογή γεύσης σιροπιού)", ta: { price: "1,80€", code: "2391073000003" }, sit: { price: "1,95€", code: "2391127000003" } },
    { name: "Κρύο ρόφημα σοκολάτας (επιλογή γεύσης σιροπιού)", ta: { price: "1,80€", code: "2391072000004" }, sit: { price: "1,95€", code: "2391126000004" } },
    { name: "Τσάι με επιλογή γεύσεων", ta: { price: "0,95€", code: "2381833000008" }, sit: { price: "1,00€", code: "2390491000008" } },

    { name: "Smoothie Wild Berry ", ta: { price: null, code: "2391316000005" }, sit: { price: null, code: "2391320000008" } },
    { name: "Smoothie Green Boost ", ta: { price: null, code: "2391317000004" }, sit: { price: null, code: "2391321000007" } },
    { name: "Smoothie Peanut Butter Blast ", ta: { price: null, code: "2391318000003" }, sit: { price: null, code: "2391322000006" } },
    { name: "Smoothie Summer Delight ", ta: { price: null, code: "2391319000002" }, sit: { price: null, code: "2391323000005" } },
    
    { name: "Κύπελλο", ta: { price: "0,05€", code: "5208046089286" }, sit: null },
    { name: "Κουπόνι έκπτωσης πλαστικού μιας χρήσης", ta: { price: "0,05€", code: "9821955270055" }, sit: null },
    { name: "Καπάκι και κύπελλο", ta: { price: "0,10€", code: "5208046089330" }, sit: null }
];
/* ============================================================ */
