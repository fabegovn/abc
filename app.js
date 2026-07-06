const lessons = [
  { group: "Con vật", emoji: "🐱", answer: "MEO", prompt: "Ghép tên con vật", hint: "Con mèo kêu meo meo." },
  { group: "Con vật", emoji: "🐶", answer: "CHO", prompt: "Ghép tên con vật", hint: "Bạn nhỏ canh nhà rất giỏi." },
  { group: "Con vật", emoji: "🐟", answer: "CA", prompt: "Ghép tên con vật", hint: "Con vật bơi trong nước." },
  { group: "Con vật", emoji: "🐓", answer: "GA", prompt: "Ghép tên con vật", hint: "Con vật gáy ò ó o." },
  { group: "Hoa quả", emoji: "🍊", answer: "CAM", prompt: "Ghép tên trái cây", hint: "Quả tròn, màu cam, nhiều vitamin." },
  { group: "Hoa quả", emoji: "🍌", answer: "CHUOI", prompt: "Ghép tên trái cây", hint: "Quả dài, vỏ vàng, khỉ rất thích." },
  { group: "Hoa quả", emoji: "🍇", answer: "NHO", prompt: "Ghép tên trái cây", hint: "Nhiều quả nhỏ mọc thành chùm." },
  { group: "Cây cối", emoji: "🌳", answer: "CAY", prompt: "Ghép tên cây cối", hint: "Có thân, cành, lá và bóng mát." },
  { group: "Cây cối", emoji: "🌸", answer: "HOA", prompt: "Ghép tên cây cối", hint: "Nở đẹp và có hương thơm." },
  { group: "Cây cối", emoji: "🍃", answer: "LA", prompt: "Ghép tên cây cối", hint: "Màu xanh, mọc trên cành." },
  { group: "Số đếm", emoji: "1️⃣", answer: "MOT", prompt: "Ghép tên số đếm", hint: "Số đầu tiên là số một." },
  { group: "Số đếm", emoji: "2️⃣", answer: "HAI", prompt: "Ghép tên số đếm", hint: "Sau số một là số hai." },
  { group: "Số đếm", emoji: "3️⃣", answer: "BA", prompt: "Ghép tên số đếm", hint: "Một, hai, rồi đến số ba." },
  { group: "Số đếm", emoji: "5️⃣", answer: "NAM", prompt: "Ghép tên số đếm", hint: "Bàn tay có năm ngón." }
  ,
  { group: "Con vật", emoji: "🐘", answer: "VOI", prompt: "Ghép tên con vật", hint: "Con vật to lớn, có vòi dài." },
  { group: "Con vật", emoji: "🐄", answer: "BO", prompt: "Ghép tên con vật", hint: "Con vật cho sữa." },
  { group: "Con vật", emoji: "🐃", answer: "TRAU", prompt: "Ghép tên con vật", hint: "Con vật khỏe, hay kéo cày." },
  { group: "Con vật", emoji: "🐐", answer: "DE", prompt: "Ghép tên con vật", hint: "Con vật có râu nhỏ dưới cằm." },
  { group: "Con vật", emoji: "🐑", answer: "CUU", prompt: "Ghép tên con vật", hint: "Con vật có bộ lông mềm." },
  { group: "Con vật", emoji: "🐴", answer: "NGUA", prompt: "Ghép tên con vật", hint: "Con vật chạy rất nhanh." },
  { group: "Con vật", emoji: "🦆", answer: "VIT", prompt: "Ghép tên con vật", hint: "Con vật bơi dưới ao và kêu cạp cạp." },
  { group: "Con vật", emoji: "🪿", answer: "NGAN", prompt: "Ghép tên con vật", hint: "Con vật giống vịt nhưng to hơn." },
  { group: "Con vật", emoji: "🐦", answer: "CHIM", prompt: "Ghép tên con vật", hint: "Con vật có cánh và biết bay." },
  { group: "Con vật", emoji: "🦢", answer: "CO", prompt: "Ghép tên con vật", hint: "Con vật cổ dài, thường đứng bên ao." },
  { group: "Con vật", emoji: "🐒", answer: "KHI", prompt: "Ghép tên con vật", hint: "Con vật leo trèo rất giỏi." },
  { group: "Con vật", emoji: "🐯", answer: "HO", prompt: "Ghép tên con vật", hint: "Con vật có vằn và rất mạnh." },
  { group: "Con vật", emoji: "🦁", answer: "SUTU", prompt: "Ghép tên con vật", hint: "Vua của rừng xanh." },
  { group: "Con vật", emoji: "🐻", answer: "GAU", prompt: "Ghép tên con vật", hint: "Con vật to, thích mật ong." },
  { group: "Con vật", emoji: "🐷", answer: "HEO", prompt: "Ghép tên con vật", hint: "Con vật kêu ụt ịt." },
  { group: "Con vật", emoji: "🐰", answer: "THO", prompt: "Ghép tên con vật", hint: "Con vật tai dài, thích cà rốt." },
  { group: "Con vật", emoji: "🐢", answer: "RUA", prompt: "Ghép tên con vật", hint: "Con vật đi chậm và có mai." },
  { group: "Con vật", emoji: "🐍", answer: "RAN", prompt: "Ghép tên con vật", hint: "Con vật bò dài trên đất." },
  { group: "Con vật", emoji: "🐸", answer: "ECH", prompt: "Ghép tên con vật", hint: "Con vật nhảy trên lá sen." },
  { group: "Con vật", emoji: "🐝", answer: "ONG", prompt: "Ghép tên con vật", hint: "Con vật nhỏ làm mật." },
  { group: "Con vật", emoji: "🦋", answer: "BUOM", prompt: "Ghép tên con vật", hint: "Con vật có cánh nhiều màu." },
  { group: "Con vật", emoji: "🐜", answer: "KIEN", prompt: "Ghép tên con vật", hint: "Con vật nhỏ sống theo đàn." },
  { group: "Con vật", emoji: "🪰", answer: "RUOI", prompt: "Ghép tên con vật", hint: "Con vật nhỏ bay vo ve." },
  { group: "Con vật", emoji: "🦐", answer: "TOM", prompt: "Ghép tên con vật", hint: "Con vật sống dưới nước, có râu dài." },
  { group: "Con vật", emoji: "🦀", answer: "CUA", prompt: "Ghép tên con vật", hint: "Con vật bò ngang, có hai càng." },
  { group: "Hoa quả", emoji: "🍎", answer: "TAO", prompt: "Ghép tên trái cây", hint: "Quả tròn, thường có màu đỏ." },
  { group: "Hoa quả", emoji: "🍐", answer: "LE", prompt: "Ghép tên trái cây", hint: "Quả ngọt, dáng giống chiếc chuông." },
  { group: "Hoa quả", emoji: "🍑", answer: "DAO", prompt: "Ghép tên trái cây", hint: "Quả mềm, có lông mịn bên ngoài." },
  { group: "Hoa quả", emoji: "🟣", answer: "MAN", prompt: "Ghép tên trái cây", hint: "Quả nhỏ, vị chua ngọt." },
  { group: "Hoa quả", emoji: "🟠", answer: "MO", prompt: "Ghép tên trái cây", hint: "Quả nhỏ màu vàng cam." },
  { group: "Hoa quả", emoji: "🍈", answer: "OI", prompt: "Ghép tên trái cây", hint: "Quả xanh, ruột trắng hoặc hồng." },
  { group: "Hoa quả", emoji: "🥥", answer: "DUA", prompt: "Ghép tên trái cây", hint: "Quả có nước ngọt bên trong." },
  { group: "Hoa quả", emoji: "🥭", answer: "XOAI", prompt: "Ghép tên trái cây", hint: "Quả chín màu vàng, thơm ngọt." },
  { group: "Hoa quả", emoji: "🟡", answer: "MIT", prompt: "Ghép tên trái cây", hint: "Quả to, có nhiều múi vàng." },
  { group: "Hoa quả", emoji: "🍈", answer: "NA", prompt: "Ghép tên trái cây", hint: "Quả có nhiều mắt nhỏ bên ngoài." },
  { group: "Hoa quả", emoji: "🔴", answer: "VAI", prompt: "Ghép tên trái cây", hint: "Quả nhỏ, vỏ đỏ, cùi trắng." },
  { group: "Hoa quả", emoji: "🟤", answer: "NHAN", prompt: "Ghép tên trái cây", hint: "Quả tròn nhỏ, mọc thành chùm." },
  { group: "Hoa quả", emoji: "🔴", answer: "CHOM", prompt: "Ghép tên trái cây", hint: "Quả có nhiều sợi mềm bên ngoài." },
  { group: "Hoa quả", emoji: "🟤", answer: "SAPO", prompt: "Ghép tên trái cây", hint: "Quả nâu, ruột ngọt và mềm." },
  { group: "Hoa quả", emoji: "🍋", answer: "BUOI", prompt: "Ghép tên trái cây", hint: "Quả to, có nhiều múi." },
  { group: "Hoa quả", emoji: "🍊", answer: "QUYT", prompt: "Ghép tên trái cây", hint: "Quả nhỏ hơn cam, dễ bóc vỏ." },
  { group: "Hoa quả", emoji: "🍉", answer: "DUAHAU", prompt: "Ghép tên trái cây", hint: "Quả xanh bên ngoài, đỏ bên trong." },
  { group: "Hoa quả", emoji: "🟠", answer: "DUDU", prompt: "Ghép tên trái cây", hint: "Quả chín màu cam, mềm và ngọt." },
  { group: "Hoa quả", emoji: "🍍", answer: "KHOM", prompt: "Ghép tên trái cây", hint: "Quả có mắt gai và vị chua ngọt." },
  { group: "Hoa quả", emoji: "🍋", answer: "CHANH", prompt: "Ghép tên trái cây", hint: "Quả nhỏ, vị chua." },
  { group: "Hoa quả", emoji: "🍓", answer: "DAU", prompt: "Ghép tên trái cây", hint: "Quả đỏ nhỏ, có hạt li ti." },
  { group: "Hoa quả", emoji: "🟤", answer: "ME", prompt: "Ghép tên trái cây", hint: "Quả có vị chua, nằm trong vỏ dài." },
  { group: "Hoa quả", emoji: "🟢", answer: "SUNG", prompt: "Ghép tên trái cây", hint: "Quả nhỏ, mọc thành chùm trên thân cây." },
  { group: "Hoa quả", emoji: "🔴", answer: "LUU", prompt: "Ghép tên trái cây", hint: "Quả có nhiều hạt đỏ mọng." },
  { group: "Hoa quả", emoji: "⭐", answer: "KHE", prompt: "Ghép tên trái cây", hint: "Quả cắt ra giống hình ngôi sao." },
  { group: "Cây cối", emoji: "🪷", answer: "SEN", prompt: "Ghép tên cây cối", hint: "Hoa mọc trên mặt nước." },
  { group: "Cây cối", emoji: "🌹", answer: "HONG", prompt: "Ghép tên cây cối", hint: "Loài hoa có mùi thơm và gai." },
  { group: "Cây cối", emoji: "🌼", answer: "CUC", prompt: "Ghép tên cây cối", hint: "Loài hoa nhiều cánh nhỏ." },
  { group: "Cây cối", emoji: "🌺", answer: "LAN", prompt: "Ghép tên cây cối", hint: "Loài hoa đẹp, thường treo trong chậu." },
  { group: "Cây cối", emoji: "🌼", answer: "MAI", prompt: "Ghép tên cây cối", hint: "Hoa vàng thường nở ngày Tết." },
  { group: "Cây cối", emoji: "🎋", answer: "TRUC", prompt: "Ghép tên cây cối", hint: "Cây thân đốt, giống tre nhỏ." },
  { group: "Cây cối", emoji: "🎋", answer: "TRE", prompt: "Ghép tên cây cối", hint: "Cây thân cao, có nhiều đốt." },
  { group: "Cây cối", emoji: "🌾", answer: "LUA", prompt: "Ghép tên cây cối", hint: "Cây cho hạt gạo." },
  { group: "Cây cối", emoji: "🌽", answer: "NGO", prompt: "Ghép tên cây cối", hint: "Cây có bắp vàng nhiều hạt." },
  { group: "Cây cối", emoji: "🍠", answer: "KHOAI", prompt: "Ghép tên cây cối", hint: "Củ mọc dưới đất, ăn bùi." },
  { group: "Cây cối", emoji: "🥔", answer: "SAN", prompt: "Ghép tên cây cối", hint: "Cây có củ dài dưới đất." },
  { group: "Cây cối", emoji: "🥜", answer: "LAC", prompt: "Ghép tên cây cối", hint: "Cây có hạt nằm trong vỏ." },
  { group: "Cây cối", emoji: "🥬", answer: "CAI", prompt: "Ghép tên cây cối", hint: "Loại rau xanh thường nấu canh." },
  { group: "Cây cối", emoji: "🥬", answer: "RAU", prompt: "Ghép tên cây cối", hint: "Thực vật xanh dùng trong bữa ăn." },
  { group: "Cây cối", emoji: "🌳", answer: "BANG", prompt: "Ghép tên cây cối", hint: "Cây có lá to, thường ở sân trường." },
  { group: "Cây cối", emoji: "🌺", answer: "PHUONG", prompt: "Ghép tên cây cối", hint: "Cây hoa đỏ báo hiệu mùa hè." },
  { group: "Cây cối", emoji: "🌲", answer: "THONG", prompt: "Ghép tên cây cối", hint: "Cây lá kim, thường thấy ở vùng lạnh." },
  { group: "Cây cối", emoji: "🌴", answer: "CAU", prompt: "Ghép tên cây cối", hint: "Cây thân thẳng, quả mọc thành buồng." },
  { group: "Cây cối", emoji: "🌳", answer: "DA", prompt: "Ghép tên cây cối", hint: "Cây to, có rễ dài buông xuống." },
  { group: "Cây cối", emoji: "🌿", answer: "SI", prompt: "Ghép tên cây cối", hint: "Cây có nhiều rễ phụ và tán rộng." },
  { group: "Số đếm", emoji: "0️⃣", answer: "KHONG", prompt: "Ghép tên số đếm", hint: "Số không có gì là số này." },
  { group: "Số đếm", emoji: "4️⃣", answer: "BON", prompt: "Ghép tên số đếm", hint: "Sau số ba là số bốn." },
  { group: "Số đếm", emoji: "6️⃣", answer: "SAU", prompt: "Ghép tên số đếm", hint: "Sau số năm là số sáu." },
  { group: "Số đếm", emoji: "7️⃣", answer: "BAY", prompt: "Ghép tên số đếm", hint: "Sau số sáu là số bảy." },
  { group: "Số đếm", emoji: "8️⃣", answer: "TAM", prompt: "Ghép tên số đếm", hint: "Sau số bảy là số tám." },
  { group: "Số đếm", emoji: "9️⃣", answer: "CHIN", prompt: "Ghép tên số đếm", hint: "Sau số tám là số chín." },
  { group: "Số đếm", emoji: "🔟", answer: "MUOI", prompt: "Ghép tên số đếm", hint: "Sau số chín là số mười." },
  { group: "Số đếm", emoji: "🔢", answer: "CHUC", prompt: "Ghép tên số đếm", hint: "Mười đơn vị tạo thành một chục." },
  { group: "Số đếm", emoji: "💯", answer: "TRAM", prompt: "Ghép tên số đếm", hint: "Mười chục tạo thành một trăm." },
  { group: "Số đếm", emoji: "🔢", answer: "NGHIN", prompt: "Ghép tên số đếm", hint: "Mười trăm tạo thành một nghìn." },
  { group: "Số đếm", emoji: "➕", answer: "CONG", prompt: "Ghép từ toán học", hint: "Dấu này dùng để thêm vào." },
  { group: "Số đếm", emoji: "➖", answer: "TRU", prompt: "Ghép từ toán học", hint: "Dấu này dùng để bớt đi." },
  { group: "Số đếm", emoji: "🟰", answer: "BANG", prompt: "Ghép từ toán học", hint: "Dấu này cho biết hai bên bằng nhau." },
  { group: "Số đếm", emoji: "🔢", answer: "SO", prompt: "Ghép từ toán học", hint: "Ký hiệu dùng để đếm." },
  { group: "Số đếm", emoji: "🧮", answer: "DEM", prompt: "Ghép từ toán học", hint: "Việc nói số theo thứ tự." },
  { group: "Số đếm", emoji: "🔢", answer: "LE", prompt: "Ghép từ toán học", hint: "Số không chia hết cho hai." },
  { group: "Số đếm", emoji: "🔢", answer: "CHAN", prompt: "Ghép từ toán học", hint: "Số chia hết cho hai." },
  { group: "Số đếm", emoji: "🧩", answer: "DONVI", prompt: "Ghép từ toán học", hint: "Hàng nhỏ nhất trong số đếm." },
  { group: "Số đếm", emoji: "👥", answer: "NHOM", prompt: "Ghép từ toán học", hint: "Nhiều đồ vật được xếp chung." },
  { group: "Số đếm", emoji: "📏", answer: "DO", prompt: "Ghép từ toán học", hint: "Việc so chiều dài hoặc số lượng." },
  { group: "Màu sắc", emoji: "🔴", answer: "DO", prompt: "Ghép tên màu sắc", hint: "Màu của quả táo chín." },
  { group: "Màu sắc", emoji: "🟡", answer: "VANG", prompt: "Ghép tên màu sắc", hint: "Màu của nắng và hoa mai." },
  { group: "Màu sắc", emoji: "🟢", answer: "XANH", prompt: "Ghép tên màu sắc", hint: "Màu của lá cây." },
  { group: "Màu sắc", emoji: "🟣", answer: "TIM", prompt: "Ghép tên màu sắc", hint: "Màu của quả cà tím." },
  { group: "Màu sắc", emoji: "⚫", answer: "DEN", prompt: "Ghép tên màu sắc", hint: "Màu của màn đêm." },
  { group: "Màu sắc", emoji: "⚪", answer: "TRANG", prompt: "Ghép tên màu sắc", hint: "Màu của đám mây." },
  { group: "Màu sắc", emoji: "🟤", answer: "NAU", prompt: "Ghép tên màu sắc", hint: "Màu của thân cây." },
  { group: "Hình dạng", emoji: "⭕", answer: "TRON", prompt: "Ghép tên hình dạng", hint: "Hình giống quả bóng." },
  { group: "Hình dạng", emoji: "◻️", answer: "VUONG", prompt: "Ghép tên hình dạng", hint: "Hình có bốn cạnh bằng nhau." },
  { group: "Hình dạng", emoji: "⭐", answer: "SAO", prompt: "Ghép tên hình dạng", hint: "Hình lấp lánh trên bầu trời." }
];

const extraLetters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");
const colors = ["#ff8fbc", "#ffe082", "#8ce7c8", "#7dc9ff", "#c8b6ff", "#ffbd8a", "#9ee7a8"];
const letterSpeechNames = {
  A: "ay",
  B: "bee",
  C: "see",
  D: "dee",
  E: "ee",
  F: "eff",
  G: "jee",
  H: "aitch",
  I: "eye",
  J: "jay",
  K: "kay",
  L: "el",
  M: "em",
  N: "en",
  O: "oh",
  P: "pee",
  Q: "cue",
  R: "ar",
  S: "ess",
  T: "tee",
  U: "you",
  V: "vee",
  W: "double you",
  X: "ex",
  Y: "why",
  Z: "zee"
};

const spokenByAnswer = {
  MEO: "cat",
  CHO: "dog",
  CA: "fish",
  GA: "chicken",
  CAM: "orange",
  CHUOI: "banana",
  NHO: "grape",
  CAY: "tree",
  HOA: "flower",
  LA: "leaf",
  MOT: "one",
  HAI: "two",
  BA: "three",
  NAM: "five",
  VOI: "elephant",
  BO: "cow",
  TRAU: "buffalo",
  DE: "goat",
  CUU: "sheep",
  NGUA: "horse",
  VIT: "duck",
  NGAN: "muscovy duck",
  CHIM: "bird",
  CO: "stork",
  KHI: "monkey",
  HO: "tiger",
  SUTU: "lion",
  GAU: "bear",
  HEO: "pig",
  THO: "rabbit",
  RUA: "turtle",
  RAN: "snake",
  ECH: "frog",
  ONG: "bee",
  BUOM: "butterfly",
  KIEN: "ant",
  RUOI: "fly",
  TOM: "shrimp",
  CUA: "crab",
  TAO: "apple",
  LE: "pear",
  DAO: "peach",
  MAN: "plum",
  MO: "apricot",
  OI: "guava",
  DUA: "coconut",
  XOAI: "mango",
  MIT: "jackfruit",
  NA: "custard apple",
  VAI: "lychee",
  NHAN: "longan",
  CHOM: "rambutan",
  SAPO: "sapodilla",
  BUOI: "pomelo",
  QUYT: "tangerine",
  DUAHAU: "watermelon",
  DUDU: "papaya",
  KHOM: "pineapple",
  CHANH: "lime",
  DAU: "strawberry",
  ME: "tamarind",
  SUNG: "fig",
  LUU: "pomegranate",
  KHE: "starfruit",
  SEN: "lotus",
  HONG: "rose",
  CUC: "daisy",
  LAN: "orchid",
  MAI: "apricot blossom",
  TRUC: "bamboo",
  TRE: "bamboo",
  LUA: "rice",
  NGO: "corn",
  KHOAI: "sweet potato",
  SAN: "cassava",
  LAC: "peanut",
  CAI: "mustard greens",
  RAU: "vegetable",
  BANG: "equals",
  PHUONG: "flame tree",
  THONG: "pine tree",
  CAU: "areca palm",
  DA: "banyan tree",
  SI: "fig tree",
  KHONG: "zero",
  BON: "four",
  SAU: "six",
  BAY: "seven",
  TAM: "eight",
  CHIN: "nine",
  MUOI: "ten",
  CHUC: "ten",
  TRAM: "hundred",
  NGHIN: "thousand",
  CONG: "plus",
  TRU: "minus",
  SO: "number",
  DEM: "count",
  CHAN: "even",
  DONVI: "unit",
  NHOM: "group",
  DO: "measure",
  VANG: "yellow",
  XANH: "green",
  TIM: "purple",
  DEN: "black",
  TRANG: "white",
  NAU: "brown",
  TRON: "circle",
  VUONG: "square",
  SAO: "star"
};

const spokenByGroupAndAnswer = {
  "Hoa quả:LE": "pear",
  "Số đếm:LE": "odd",
  "Màu sắc:DO": "red",
  "Số đếm:DO": "measure",
  "Cây cối:BANG": "tropical almond tree",
  "Số đếm:BANG": "equals"
};

const displayByAnswer = {
  MEO: "mèo",
  CHO: "chó",
  CA: "cá",
  GA: "gà",
  CAM: "cam",
  CHUOI: "chuối",
  NHO: "nho",
  CAY: "cây",
  HOA: "hoa",
  LA: "lá",
  MOT: "một",
  HAI: "hai",
  BA: "ba",
  NAM: "năm",
  VOI: "voi",
  BO: "bò",
  TRAU: "trâu",
  DE: "dê",
  CUU: "cừu",
  NGUA: "ngựa",
  VIT: "vịt",
  NGAN: "ngan",
  CHIM: "chim",
  CO: "cò",
  KHI: "khỉ",
  HO: "hổ",
  SUTU: "sư tử",
  GAU: "gấu",
  HEO: "heo",
  THO: "thỏ",
  RUA: "rùa",
  RAN: "rắn",
  ECH: "ếch",
  ONG: "ong",
  BUOM: "bướm",
  KIEN: "kiến",
  RUOI: "ruồi",
  TOM: "tôm",
  CUA: "cua",
  TAO: "táo",
  LE: "lê",
  DAO: "đào",
  MAN: "mận",
  MO: "mơ",
  OI: "ổi",
  DUA: "dừa",
  XOAI: "xoài",
  MIT: "mít",
  NA: "na",
  VAI: "vải",
  NHAN: "nhãn",
  CHOM: "chôm chôm",
  SAPO: "sa pô",
  BUOI: "bưởi",
  QUYT: "quýt",
  DUAHAU: "dưa hấu",
  DUDU: "đu đủ",
  KHOM: "khóm",
  CHANH: "chanh",
  DAU: "dâu",
  ME: "me",
  SUNG: "sung",
  LUU: "lựu",
  KHE: "khế",
  SEN: "sen",
  HONG: "hồng",
  CUC: "cúc",
  LAN: "lan",
  MAI: "mai",
  TRUC: "trúc",
  TRE: "tre",
  LUA: "lúa",
  NGO: "ngô",
  KHOAI: "khoai",
  SAN: "sắn",
  LAC: "lạc",
  CAI: "cải",
  RAU: "rau",
  BANG: "bằng",
  PHUONG: "phượng",
  THONG: "thông",
  CAU: "cau",
  DA: "đa",
  SI: "si",
  KHONG: "không",
  BON: "bốn",
  SAU: "sáu",
  BAY: "bảy",
  TAM: "tám",
  CHIN: "chín",
  MUOI: "mười",
  CHUC: "chục",
  TRAM: "trăm",
  NGHIN: "nghìn",
  CONG: "cộng",
  TRU: "trừ",
  SO: "số",
  DEM: "đếm",
  CHAN: "chẵn",
  DONVI: "đơn vị",
  NHOM: "nhóm",
  DO: "đo",
  VANG: "vàng",
  XANH: "xanh",
  TIM: "tím",
  DEN: "đen",
  TRANG: "trắng",
  NAU: "nâu",
  TRON: "tròn",
  VUONG: "vuông",
  SAO: "sao"
};

const displayByGroupAndAnswer = {
  "Hoa quả:LE": "lê",
  "Số đếm:LE": "lẻ",
  "Màu sắc:DO": "đỏ",
  "Số đếm:DO": "đo",
  "Cây cối:BANG": "bàng",
  "Số đếm:BANG": "bằng"
};

const state = {
  lesson: null,
  sequence: [],
  placed: 0,
  soundOn: true,
  audio: null,
  speechVoice: null,
  activeDrag: null,
  lastLessonIndex: -1
};

const playScreen = document.querySelector("#playScreen");
const slotGrid = document.querySelector("#slotGrid");
const blockTray = document.querySelector("#blockTray");
const progressFill = document.querySelector("#progressFill");
const progressText = document.querySelector("#progressText");
const nextLabel = document.querySelector("#nextLabel");
const categoryLabel = document.querySelector("#categoryLabel");
const lessonType = document.querySelector("#lessonType");
const lessonPrompt = document.querySelector("#lessonPrompt");
const lessonHint = document.querySelector("#lessonHint");
const lessonEmoji = document.querySelector("#lessonEmoji");
// const promptText = document.querySelector("#promptText");
const celebration = document.querySelector("#celebration");
const rewardAnimation = document.querySelector("#rewardAnimation");
const sceneItem = document.querySelector("#sceneItem");
const celebrationWord = document.querySelector("#celebrationWord");
const celebrationTranslation = document.querySelector("#celebrationTranslation");
// const celebrationText = document.querySelector("#celebrationText");
const fireworks = document.querySelector("#fireworks");
const soundButton = document.querySelector("#soundButton");

document.querySelector("#replayTopButton").addEventListener("click", () => startLesson(state.lesson));
// document.querySelector("#replayButton").addEventListener("click", () => startLesson(state.lesson));
document.querySelector("#nextButton").addEventListener("click", startRandomLesson);
document.querySelector("#listenButton").addEventListener("click", () => speakLessonWord(state.lesson));
soundButton.addEventListener("click", toggleSound);
if ("speechSynthesis" in window) {
  window.speechSynthesis.addEventListener("voiceschanged", cacheEnglishVoice);
  cacheEnglishVoice();
}

startRandomLesson();

function startRandomLesson() {
  let index = Math.floor(Math.random() * lessons.length);
  if (lessons.length > 1 && index === state.lastLessonIndex) {
    index = (index + 1) % lessons.length;
  }
  state.lastLessonIndex = index;
  startLesson(lessons[index]);
}

function startLesson(lesson) {
  state.lesson = lesson;
  state.sequence = getLessonBuildText(lesson).split("");
  state.placed = 0;
  playScreen.classList.remove("complete");
  celebration.classList.add("is-hidden");
  fireworks.innerHTML = "";
  categoryLabel.textContent = "";
  lessonType.textContent = `Bài học: ${lesson.group}`;
  lessonPrompt.textContent = lesson.prompt;
  lessonHint.textContent = lesson.hint;
  lessonEmoji.textContent = lesson.emoji;
  rewardAnimation.dataset.scene = getLessonScene(lesson);
  sceneItem.textContent = getSceneIcon(lesson);
  celebrationWord.textContent = getLessonDisplayText(lesson).toLocaleUpperCase("vi-VN");
  celebrationTranslation.textContent = getLessonSpeechText(lesson).toLocaleUpperCase("en-US");
  // celebrationText.textContent = `Bé đã ghép đúng: ${lesson.answer}`;
  buildSlots();
  buildBlocks();
  markNextSlot();
  // updateProgress();
}

function buildSlots() {
  slotGrid.innerHTML = "";
  state.sequence.forEach((value, index) => {
    const slot = document.createElement("div");
    slot.className = "slot";
    slot.dataset.index = String(index);
    slot.textContent = index + 1;
    slot.addEventListener("dragover", (event) => event.preventDefault());
    slot.addEventListener("drop", onDrop);
    slotGrid.append(slot);
  });
  slotGrid.style.setProperty("--word-length", String(Math.max(state.sequence.length, 2)));
}

function buildBlocks() {
  blockTray.innerHTML = "";
  const choices = makeChoices(state.sequence);
  shuffle(choices).forEach((value, index) => {
    const block = document.createElement("button");
    block.className = "block";
    block.type = "button";
    block.draggable = true;
    block.textContent = value;
    block.dataset.value = value;
    block.style.setProperty("--block-color", colors[index % colors.length]);
    block.addEventListener("dragstart", onDragStart);
    block.addEventListener("dragend", () => block.classList.remove("dragging"));
    block.addEventListener("pointerdown", startPointerDrag);
    block.addEventListener("keydown", (event) => {
      if (event.key === "Enter" || event.key === " ") {
        event.preventDefault();
        attemptPlace(block);
      }
    });
    blockTray.append(block);
  });
}

function makeChoices(answerLetters) {
  const choices = [...answerLetters];
  const answerSet = new Set(answerLetters);
  const needed = Math.min(10, Math.max(answerLetters.length + 3, 6));
  for (const letter of shuffle([...extraLetters])) {
    if (choices.length >= needed) break;
    if (!answerSet.has(letter)) {
      choices.push(letter);
    }
  }
  return choices;
}

function onDragStart(event) {
  event.currentTarget.classList.add("dragging");
  event.dataTransfer.setData("text/plain", event.currentTarget.dataset.value);
}

function onDrop(event) {
  event.preventDefault();
  const value = event.dataTransfer.getData("text/plain");
  const block = [...blockTray.children].find((child) => child.dataset.value === value);
  if (block) {
    attemptPlace(block);
  }
}

function startPointerDrag(event) {
  if (event.pointerType === "mouse" && event.button !== 0) return;
  const block = event.currentTarget;
  const rect = block.getBoundingClientRect();
  state.activeDrag = {
    block,
    startX: event.clientX,
    startY: event.clientY,
    width: rect.width,
    height: rect.height,
    moved: false
  };
  block.setPointerCapture(event.pointerId);
  block.classList.add("dragging");
  block.style.position = "fixed";
  block.style.left = `${rect.left}px`;
  block.style.top = `${rect.top}px`;
  block.style.width = `${rect.width}px`;
  block.style.height = `${rect.height}px`;
  block.style.zIndex = "40";
  block.addEventListener("pointermove", movePointerDrag);
  block.addEventListener("pointerup", endPointerDrag);
  block.addEventListener("pointercancel", cancelPointerDrag);
  event.preventDefault();
}

function movePointerDrag(event) {
  const drag = state.activeDrag;
  if (!drag) return;
  const distance = Math.hypot(event.clientX - drag.startX, event.clientY - drag.startY);
  drag.moved = drag.moved || distance > 8;
  drag.block.style.left = `${event.clientX - drag.width / 2}px`;
  drag.block.style.top = `${event.clientY - drag.height / 2}px`;
}

function endPointerDrag(event) {
  const drag = state.activeDrag;
  if (!drag) return;
  const target = document.elementFromPoint(event.clientX, event.clientY);
  const droppedOnSlot = target?.closest?.(".slot");
  resetPointerDrag(event.pointerId);
  if (!drag.moved || droppedOnSlot) {
    attemptPlace(drag.block);
    return;
  }
  // promptText.textContent = "Thả vào ô đang sáng nhé!";
}

function cancelPointerDrag(event) {
  resetPointerDrag(event.pointerId);
}

function resetPointerDrag(pointerId) {
  const drag = state.activeDrag;
  if (!drag) return;
  const { block } = drag;
  if (block.hasPointerCapture?.(pointerId)) {
    block.releasePointerCapture(pointerId);
  }
  block.classList.remove("dragging");
  block.style.position = "";
  block.style.left = "";
  block.style.top = "";
  block.style.width = "";
  block.style.height = "";
  block.style.zIndex = "";
  block.removeEventListener("pointermove", movePointerDrag);
  block.removeEventListener("pointerup", endPointerDrag);
  block.removeEventListener("pointercancel", cancelPointerDrag);
  state.activeDrag = null;
}

function attemptPlace(block) {
  const expected = state.sequence[state.placed];
  if (block.dataset.value === expected) {
    placeCorrectBlock(block);
    return;
  }
  speakLetterName(block.dataset.value);
  block.classList.remove("shake");
  void block.offsetWidth;
  block.classList.add("shake");
  // promptText.textContent = "Thử lại nhé!";
  playTryAgainSound();
}

function placeCorrectBlock(block) {
  const slot = slotGrid.children[state.placed];
  slot.textContent = block.dataset.value;
  slot.className = "slot filled sparkle";
  slot.style.setProperty("--slot-color", block.style.getPropertyValue("--block-color"));
  block.remove();
  state.placed += 1;
  // promptText.textContent = state.placed === state.sequence.length ? "Ghép đúng tên rồi!" : "Tốt lắm!";
  playHappySound(block.dataset.value);
  // updateProgress();
  markNextSlot();
  if (state.placed === state.sequence.length) {
    completeCastle();
  }
}

function markNextSlot() {
  [...slotGrid.children].forEach((slot, index) => {
    slot.classList.toggle("next", index === state.placed);
  });
  const next = state.sequence[state.placed];
  renderNextLabel(next);
  // promptText.textContent = next ? `Tìm chữ ${next}` : "Hoàn thành!";
}

function renderNextLabel(next) {
  nextLabel.textContent = "";
  if (!next) {
    nextLabel.textContent = "Hoàn thành";
    return;
  }
  const letterBlock = [...blockTray.children].find((block) => block.dataset.value === next);
  const letterColor = letterBlock?.style.getPropertyValue("--block-color") || colors[0];
  const textNode = document.createTextNode("Tìm chữ ");
  const letterNode = document.createElement("span");
  letterNode.className = "target-letter";
  letterNode.textContent = next;
  letterNode.style.setProperty("--target-color", letterColor);
  nextLabel.append(textNode, letterNode);
}

// function updateProgress() {
//   const percent = Math.round((state.placed / state.sequence.length) * 100);
//   progressFill.style.width = `${percent}%`;
//   progressText.textContent = `${percent}%`;
// }

function completeCastle() {
  playScreen.classList.add("complete");
  celebration.classList.remove("is-hidden");
  launchFireworks();
  playVictoryMusic();
  window.setTimeout(() => speakLessonWord(state.lesson), 700);
}

function getLessonSpeechText(lesson) {
  if (!lesson) return "";
  return spokenByGroupAndAnswer[`${lesson.group}:${lesson.answer}`] || spokenByAnswer[lesson.answer] || lesson.answer;
}

function getLessonBuildText(lesson) {
  const word = getLessonSpeechText(lesson)
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/[^A-Za-z0-9]/g, "")
    .toUpperCase();
  return word || lesson.answer;
}

function getLessonDisplayText(lesson) {
  if (!lesson) return "";
  return displayByGroupAndAnswer[`${lesson.group}:${lesson.answer}`] || displayByAnswer[lesson.answer] || lesson.answer;
}

function cacheEnglishVoice() {
  if (!("speechSynthesis" in window)) return null;
  const voices = window.speechSynthesis.getVoices();
  const femaleVoicePattern = /female|zira|jenny|aria|samantha|susan|karen|moira|tessa|victoria|serena|ava|emma|joanna|salli/i;
  const femaleEnglishVoice =
    voices.find((voice) => voice.lang.toLowerCase() === "en-us" && femaleVoicePattern.test(voice.name)) ||
    voices.find((voice) => voice.lang.toLowerCase().startsWith("en") && femaleVoicePattern.test(voice.name));
  state.speechVoice =
    femaleEnglishVoice ||
    voices.find((voice) => voice.lang.toLowerCase() === "en-us") ||
    voices.find((voice) => voice.lang.toLowerCase() === "en-gb") ||
    voices.find((voice) => voice.lang.toLowerCase().startsWith("en")) ||
    voices.find((voice) => /english|google us|microsoft/i.test(voice.name)) ||
    null;
  return state.speechVoice;
}

function getLessonScene(lesson) {
  if (!lesson) return "magic";
  if (lesson.answer === "CHIM") return "bird";
  if (lesson.answer === "LE") return lesson.group.includes("Hoa") ? "fruit" : "number";
  if (lesson.answer === "BANG") return lesson.group.includes("C") ? "plant" : "number";
  if (lesson.answer === "DO") return lesson.group.includes("M") ? "color" : "number";
  if (["CA", "TOM", "CUA"].includes(lesson.answer)) return "swim";
  if (["THO", "ECH", "KHI"].includes(lesson.answer)) return "hop";
  if (["ONG", "BUOM", "RUOI", "CO"].includes(lesson.answer)) return "fly";
  if (["MEO", "CHO", "GA", "VOI", "BO", "TRAU", "DE", "CUU", "NGUA", "VIT", "NGAN", "HO", "SUTU", "GAU", "HEO", "RUA", "RAN", "KIEN"].includes(lesson.answer)) return "walk";
  if (["CAM", "CHUOI", "NHO", "TAO", "LE", "DAO", "MAN", "MO", "OI", "DUA", "XOAI", "MIT", "NA", "VAI", "NHAN", "CHOM", "SAPO", "BUOI", "QUYT", "DUAHAU", "DUDU", "KHOM", "CHANH", "DAU", "ME", "SUNG", "LUU", "KHE"].includes(lesson.answer)) return "fruit";
  if (["CAY", "HOA", "LA", "SEN", "HONG", "CUC", "LAN", "MAI", "TRUC", "TRE", "LUA", "NGO", "KHOAI", "SAN", "LAC", "CAI", "RAU", "BANG", "PHUONG", "THONG", "CAU", "DA", "SI"].includes(lesson.answer)) return "plant";
  if (["VANG", "XANH", "TIM", "DEN", "TRANG", "NAU"].includes(lesson.answer) && lesson.group.includes("M")) return "color";
  if (["TRON", "VUONG", "SAO"].includes(lesson.answer)) return "shape";
  if (["KHONG", "MOT", "HAI", "BA", "BON", "NAM", "SAU", "BAY", "TAM", "CHIN", "MUOI", "CHUC", "TRAM", "NGHIN", "CONG", "TRU", "BANG", "SO", "DEM", "LE", "CHAN", "DONVI", "NHOM", "DO"].includes(lesson.answer)) return "number";
  return "magic";
}

function getSceneIcon(lesson) {
  if (!lesson) return "⭐";
  if (lesson.answer === "SO") return "🔢";
  if (lesson.answer === "DEM") return "🧮";
  if (lesson.answer === "DONVI") return "1";
  if (lesson.answer === "NHOM") return "👥";
  if (lesson.answer === "DO" && getLessonScene(lesson) === "number") return "📏";
  return lesson.emoji || "⭐";
}

function speakLessonWord(lesson) {
  if (!state.soundOn || !("speechSynthesis" in window) || !lesson) return;
  window.speechSynthesis.cancel();
  const word = getLessonSpeechText(lesson);
  const syllables = word.split(/\s+/).filter(Boolean);
  const queue = [
    { text: word, rate: 0.66, pitch: 1.06 },
    { text: syllables.length > 1 ? syllables.join(". ") : word, rate: 0.58, pitch: 1.08 }
  ];
  speakQueue(queue);
}

function speakLetterName(letter) {
  if (!state.soundOn || !("speechSynthesis" in window) || !letter) return;
  const spokenLetter = letterSpeechNames[letter.toUpperCase()] || letter.toUpperCase();
  window.speechSynthesis.cancel();
  speakQueue([{ text: spokenLetter, rate: 0.72, pitch: 1.08 }]);
}

function speakQueue(items) {
  const [current, ...rest] = items;
  if (!current || !state.soundOn) return;
  const utterance = new SpeechSynthesisUtterance(current.text);
  utterance.voice = state.speechVoice || cacheEnglishVoice();
  utterance.lang = "en-US";
  utterance.volume = 1;
  utterance.rate = current.rate;
  utterance.pitch = current.pitch;
  utterance.onend = () => speakQueue(rest);
  window.speechSynthesis.speak(utterance);
}

function launchFireworks() {
  fireworks.innerHTML = "";
  for (let index = 0; index < 16; index += 1) {
    const firework = document.createElement("span");
    firework.className = "firework";
    firework.style.left = `${12 + Math.random() * 76}%`;
    firework.style.top = `${8 + Math.random() * 56}%`;
    firework.style.animationDelay = `${index * 90}ms`;
    fireworks.append(firework);
  }
}

function toggleSound() {
  state.soundOn = !state.soundOn;
  if (!state.soundOn && "speechSynthesis" in window) {
    window.speechSynthesis.cancel();
  }
  soundButton.textContent = state.soundOn ? "♪" : "×";
  soundButton.setAttribute("aria-label", state.soundOn ? "Bật âm thanh" : "Tắt âm thanh");
}

function getAudioContext() {
  if (!state.audio) {
    state.audio = new (window.AudioContext || window.webkitAudioContext)();
  }
  return state.audio;
}

function tone(frequency, start, duration, type = "sine", gainValue = 0.08) {
  if (!state.soundOn) return;
  const audio = getAudioContext();
  const oscillator = audio.createOscillator();
  const gain = audio.createGain();
  oscillator.type = type;
  oscillator.frequency.setValueAtTime(frequency, audio.currentTime + start);
  gain.gain.setValueAtTime(gainValue, audio.currentTime + start);
  gain.gain.exponentialRampToValueAtTime(0.001, audio.currentTime + start + duration);
  oscillator.connect(gain).connect(audio.destination);
  oscillator.start(audio.currentTime + start);
  oscillator.stop(audio.currentTime + start + duration);
}

function playHappySound(letter) {
  speakLetterName(letter);
}

function playTryAgainSound() {
  tone(260, 0, 0.13, "triangle", 0.04);
  tone(220, 0.12, 0.16, "triangle", 0.035);
}

function playVictoryMusic() {
  [523, 659, 784, 1046, 784, 1046].forEach((note, index) => {
    tone(note, index * 0.13, 0.16, "sine", 0.07);
  });
}

function shuffle(items) {
  return items
    .map((value) => ({ value, sort: Math.random() }))
    .sort((left, right) => left.sort - right.sort)
    .map((item) => item.value);
}
