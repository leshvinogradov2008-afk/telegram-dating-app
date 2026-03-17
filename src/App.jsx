import React, { useEffect, useMemo, useState } from "react";

/* =========================
ДАННЫЕ И ПЕРЕВОДЫ
========================= */

const PHOTOS = {
sofia: [
"[https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&w=1200&q=80](https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&w=1200&q=80)",
"[https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=1200&q=80](https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=1200&q=80)",
"[https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=1200&q=80](https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=1200&q=80)",
],
anna: [
"[https://images.unsplash.com/photo-1488426862026-3ee34a7d66df?auto=format&fit=crop&w=1200&q=80](https://images.unsplash.com/photo-1488426862026-3ee34a7d66df?auto=format&fit=crop&w=1200&q=80)",
"[https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=1200&q=80](https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=1200&q=80)",
],
maria: [
"[https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=1200&q=80](https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=1200&q=80)",
"[https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=1200&q=80](https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=1200&q=80)",
"[https://images.unsplash.com/photo-1504593811423-6dd665756598?auto=format&fit=crop&w=1200&q=80](https://images.unsplash.com/photo-1504593811423-6dd665756598?auto=format&fit=crop&w=1200&q=80)",
],
emily: [
"[https://images.unsplash.com/photo-1521119989659-a83eee488004?auto=format&fit=crop&w=1200&q=80](https://images.unsplash.com/photo-1521119989659-a83eee488004?auto=format&fit=crop&w=1200&q=80)",
"[https://images.unsplash.com/photo-1521572267360-ee0c2909d518?auto=format&fit=crop&w=1200&q=80](https://images.unsplash.com/photo-1521572267360-ee0c2909d518?auto=format&fit=crop&w=1200&q=80)",
],
olga: [
"[https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=1200&q=80](https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=1200&q=80)",
"[https://images.unsplash.com/photo-1504593811423-6dd665756598?auto=format&fit=crop&w=1200&q=80](https://images.unsplash.com/photo-1504593811423-6dd665756598?auto=format&fit=crop&w=1200&q=80)",
],
};

const ZODIAC_RU = ["Овен", "Телец", "Близнецы", "Рак", "Лев", "Дева", "Весы", "Скорпион", "Стрелец", "Козерог", "Водолей", "Рыбы"];
const ZODIAC_EN = ["Aries", "Taurus", "Gemini", "Cancer", "Leo", "Virgo", "Libra", "Scorpio", "Sagittarius", "Capricorn", "Aquarius", "Pisces"];

const RELATIONSHIP_RU = ["Серьёзные отношения", "Брак", "Общение", "Дружба", "Свидания", "Пока не знаю"];
const RELATIONSHIP_EN = ["Serious relationship", "Marriage", "Communication", "Friendship", "Dating", "Not sure yet"];

const LOOKING_RU = ["Всех", "Женщин", "Мужчин"];
const LOOKING_EN = ["Everyone", "Women", "Men"];

const CITIES_RU = {
USA: ["Все локации", "Los Angeles", "Miami", "Burbank", "Glendale", "Santa Monica", "New York", "Chicago"],
Canada: ["Все локации", "Toronto", "Vancouver", "Montreal"],
UK: ["Все локации", "London", "Manchester", "Birmingham"],
Germany: ["Все локации", "Berlin", "Munich", "Hamburg"],
France: ["Все локации", "Paris", "Lyon", "Nice"],
Italy: ["Все локации", "Rome", "Milan", "Naples"],
Spain: ["Все локации", "Madrid", "Barcelona", "Valencia"],
Poland: ["Все локации", "Warsaw", "Krakow", "Wroclaw"],
Turkey: ["Все локации", "Istanbul", "Antalya", "Ankara"],
UAE: ["Все локации", "Dubai", "Abu Dhabi", "Sharjah"],
};

const CITIES_EN = {
USA: ["All locations", "Los Angeles", "Miami", "Burbank", "Glendale", "Santa Monica", "New York", "Chicago"],
Canada: ["All locations", "Toronto", "Vancouver", "Montreal"],
UK: ["All locations", "London", "Manchester", "Birmingham"],
Germany: ["All locations", "Berlin", "Munich", "Hamburg"],
France: ["All locations", "Paris", "Lyon", "Nice"],
Italy: ["All locations", "Rome", "Milan", "Naples"],
Spain: ["All locations", "Madrid", "Barcelona", "Valencia"],
Poland: ["All locations", "Warsaw", "Krakow", "Wroclaw"],
Turkey: ["All locations", "Istanbul", "Antalya", "Ankara"],
UAE: ["All locations", "Dubai", "Abu Dhabi", "Sharjah"],
};

const TEXT = {
ru: {
brand: "Telegram Dating",
tabs: ["Главная", "Поиск", "Симпатии", "Сообщения", "Профиль", "Настройки", "Помощь"],
heroTitle: "Найди новые знакомства в Telegram",
heroText: "Смотри анкеты, листай фото, получай взаимные симпатии и начинай общение в удобном чате.",
heroSearch: "Перейти к поиску",
heroMessages: "Открыть сообщения",
cards: [
["Быстрый старт", "Открываешь сайт и сразу смотришь анкеты рядом."],
["Удобный поиск", "Фильтры по стране, городу, дистанции и типу отношений."],
["Чат после мэтча", "После взаимной симпатии появляется личный диалог."],
["Проверенные профили", "Проверка личности повышает доверие к анкете."],
],
search: "Поиск",
mode: "Режим поиска",
country: "Страна",
city: "Город",
units: "Единицы",
show: "Кого показывать",
relation: "Какие отношения ищет человек",
distance: "Дистанция",
apply: "Применить",
reset: "Сбросить",
noProfiles: "Анкеты закончились",
noProfilesSub: "Измени поиск или начни просмотр заново.",
restart: "Начать заново",
online: "Онлайн",
recent: "Недавно был(а)",
mutual: "Взаимная симпатия!",
mutualText: "Теперь можно перейти в сообщения.",
later: "Позже",
great: "Отлично",
yourTurn: "Твой ход",
likedMe: "Кто меня лайкнул",
write: "Напиши сообщение...",
send: "Отправить",
about: "О себе",
favorites: "Избранное",
mutualLikes: "Взаимные симпатии",
lookingFor: "Ищу",
goal: "Цель",
zodiac: "Знак зодиака",
verificationStatus: "Статус проверки",
verified: "Профиль верифицирован",
notVerified: "Без верификации",
confirmed: "Подтверждён",
pending: "На проверке",
unconfirmed: "Не подтверждён",
allPhotos: "Все фото",
accountProfile: "Аккаунт и профиль",
security: "Безопасность и уведомления",
name: "Имя",
age: "Возраст",
bio: "О себе",
changePassword: "Изменить пароль",
newPassword: "Новый пароль",
repeatPassword: "Повторите пароль",
notifLikes: "Уведомления о новых лайках",
notifMessages: "Уведомления о сообщениях",
notifMatches: "Уведомления о взаимных симпатиях",
showOnline: "Показывать онлайн-статус",
privateProfile: "Приватный профиль",
verificationTitle: "Верификация аккаунта",
verificationText: "Подтверди личность с помощью селфи и фото документа, чтобы получить отметку проверки.",
startVerification: "Начать верификацию",
saveSettings: "Сохранить настройки",
help: "Помощь",
chooseChat: "Выберите диалог",
offline: "Не в сети",
years: "лет",
allOptions: "Все варианты",
modeNearby: "Люди рядом",
modeCountry: "По стране",
modeCity: "По городу",
miles: "мили",
km: "км",
},
en: {
brand: "Telegram Dating",
tabs: ["Home", "Search", "Likes", "Messages", "Profile", "Settings", "Help"],
heroTitle: "Find new connections on Telegram",
heroText: "Browse profiles, swipe through photos, get mutual likes and start chatting in a clean messenger.",
heroSearch: "Go to search",
heroMessages: "Open messages",
cards: [
["Quick start", "Open the site and instantly see nearby profiles."],
["Smart search", "Filters by country, city, distance, and relationship type."],
["Chat after match", "Once the like is mutual, a private chat becomes available."],
["Trusted profiles", "Identity checks help profiles look more trustworthy."],
],
search: "Search",
mode: "Search mode",
country: "Country",
city: "City",
units: "Units",
show: "Show",
relation: "What kind of relationship they want",
distance: "Distance",
apply: "Apply",
reset: "Reset",
noProfiles: "No more profiles",
noProfilesSub: "Change your filters or start browsing again.",
restart: "Start over",
online: "Online",
recent: "Recently active",
mutual: "It’s a match!",
mutualText: "You can now go to messages.",
later: "Later",
great: "Great",
yourTurn: "Your turn",
likedMe: "Liked me",
write: "Write a message...",
send: "Send",
about: "About me",
favorites: "Favorites",
mutualLikes: "Mutual likes",
lookingFor: "Looking for",
goal: "Goal",
zodiac: "Zodiac sign",
verificationStatus: "Verification status",
verified: "Profile verified",
notVerified: "Not verified",
confirmed: "Confirmed",
pending: "Pending",
unconfirmed: "Unconfirmed",
allPhotos: "All photos",
accountProfile: "Account and profile",
security: "Security and notifications",
name: "Name",
age: "Age",
bio: "About me",
changePassword: "Change password",
newPassword: "New password",
repeatPassword: "Repeat password",
notifLikes: "New likes notifications",
notifMessages: "Message notifications",
notifMatches: "Mutual like notifications",
showOnline: "Show online status",
privateProfile: "Private profile",
verificationTitle: "Account verification",
verificationText: "Verify your identity with a selfie and document photo to get the badge.",
startVerification: "Start verification",
saveSettings: "Save settings",
help: "Help",
chooseChat: "Choose a chat",
offline: "Offline",
years: "years",
allOptions: "All options",
modeNearby: "People nearby",
modeCountry: "By country",
modeCity: "By city",
miles: "miles",
km: "km",
},
};

const HELP = {
ru: [
{ q: "Как работает взаимная симпатия?", a: "Когда вы и другой человек лайкнули друг друга, открывается чат и появляется отметка о взаимной симпатии." },
{ q: "Можно ли менять фото профиля?", a: "Да. В разделе настроек профиля можно обновить фото, имя, возраст, знак зодиака и описание." },
{ q: "Что даёт верификация?", a: "После прохождения проверки профиль получает специальную отметку. Это отдельный процесс подтверждения личности." },
{ q: "Как изменить пароль?", a: "Откройте Настройки → Безопасность → Изменить пароль и сохраните новый пароль." },
{ q: "Как управлять уведомлениями?", a: "В настройках можно включить или выключить push-уведомления, звуки сообщений и уведомления о новых лайках." },
],
en: [
{ q: "How do mutual likes work?", a: "When you and another person like each other, a chat opens and a mutual like badge appears." },
{ q: "Can I change profile photos?", a: "Yes. In profile settings you can update photos, name, age, zodiac sign, and description." },
{ q: "What does verification give me?", a: "After passing the check, your profile gets a special badge. It is a separate identity verification flow." },
{ q: "How do I change my password?", a: "Open Settings → Security → Change password and save the new password." },
{ q: "How do I manage notifications?", a: "In settings you can enable or disable push notifications, message sounds, and new like alerts." },
],
};

const SAMPLE_PROFILES = [
{ id: 1, name: "Sofia", age: 24, zodiac: "Весы", zodiacEn: "Libra", city: "Miami", country: "USA", distance: 4, online: true, verified: true, about: "Люблю прогулки у океана, кофе и тёплые разговоры.", aboutEn: "I love walks by the ocean, coffee, and warm conversations.", lookingFor: "Серьёзные отношения", lookingForEn: "Serious relationship", gender: "Женщин", genderEn: "Women", images: PHOTOS.sofia },
{ id: 2, name: "Anna", age: 26, zodiac: "Лев", zodiacEn: "Leo", city: "Los Angeles", country: "USA", distance: 5, online: true, verified: true, about: "Ценю юмор, спонтанные поездки и уютные вечера.", aboutEn: "I value humor, spontaneous trips, and cozy evenings.", lookingFor: "Свидания", lookingForEn: "Dating", gender: "Женщин", genderEn: "Women", images: PHOTOS.anna },
{ id: 3, name: "Maria", age: 28, zodiac: "Телец", zodiacEn: "Taurus", city: "Glendale", country: "USA", distance: 8, online: false, verified: false, about: "Хочу встретить близкого по духу человека для серьёзных отношений.", aboutEn: "I want to meet someone close in spirit for a serious relationship.", lookingFor: "Серьёзные отношения", lookingForEn: "Serious relationship", gender: "Мужчин", genderEn: "Men", images: PHOTOS.maria },
{ id: 4, name: "Emily", age: 23, zodiac: "Близнецы", zodiacEn: "Gemini", city: "Burbank", country: "USA", distance: 12, online: true, verified: true, about: "Люблю музыку, фильмы и лёгких на подъём людей.", aboutEn: "I love music, films, and easygoing people.", lookingFor: "Общение", lookingForEn: "Communication", gender: "Мужчин", genderEn: "Men", images: PHOTOS.emily },
{ id: 5, name: "Olga", age: 29, zodiac: "Скорпион", zodiacEn: "Scorpio", city: "Santa Monica", country: "USA", distance: 17, online: false, verified: true, about: "Ищу взрослые отношения, честность и взаимную симпатию.", aboutEn: "Looking for mature relationships, honesty, and mutual attraction.", lookingFor: "Брак", lookingForEn: "Marriage", gender: "Мужчин", genderEn: "Men", images: PHOTOS.olga },
];

const DEFAULT_PROFILE = {
name: "Алекс",
nameEn: "Alex",
age: 27,
zodiac: "Лев",
zodiacEn: "Leo",
bio: "Люблю живое общение, красивые места, музыку и интересные знакомства.",
bioEn: "I love real conversations, beautiful places, music, and interesting connections.",
verified: true,
verificationStatus: "confirmed",
relationshipGoal: "Серьёзные отношения",
relationshipGoalEn: "Serious relationship",
lookingFor: "Женщин",
lookingForEn: "Women",
notificationsLikes: true,
notificationsMessages: true,
notificationsMatches: true,
showOnlineStatus: true,
privateAccount: false,
photos: PHOTOS.maria,
};

const DEFAULT_FILTERS = {
country: "USA",
city: "Все локации",
units: "мили",
distance: 5,
lookingFor: "Всех",
relationshipGoal: "Серьёзные отношения",
};

const DEFAULT_CHATS = [
{
id: 1,
personId: 2,
name: "Anna",
city: "Los Angeles",
avatar: PHOTOS.anna[0],
online: true,
read: true,
yourTurn: true,
likedYou: true,
messages: [
{ id: 1, from: "them", text: "Привет 😊 Рада взаимной симпатии.", textEn: "Hi 😊 Glad we matched.", time: "21:04" },
{ id: 2, from: "them", text: "Как проходит твой день?", textEn: "How is your day going?", time: "21:06" },
{ id: 3, from: "me", text: "Привет! День хорошо, а у тебя?", textEn: "Hi! My day is going well, and yours?", time: "21:08", status: "Прочитано", statusEn: "Read" },
],
},
{
id: 2,
personId: 4,
name: "Emily",
city: "Burbank",
avatar: PHOTOS.emily[0],
online: true,
read: false,
yourTurn: false,
likedYou: false,
messages: [
{ id: 1, from: "them", text: "Ты любишь вечерние прогулки?", textEn: "Do you like evening walks?", time: "18:42" },
{ id: 2, from: "me", text: "Да, особенно у океана.", textEn: "Yes, especially by the ocean.", time: "18:49", status: "Доставлено", statusEn: "Delivered" },
],
},
];

/* =========================
МЕЛКИЕ UI-КОМПОНЕНТЫ
========================= */

function Card({ children, className = "" }) {
return <div className={`rounded-[30px] bg-white/90 shadow-[0_10px_40px_rgba(244,114,182,0.08)] ${className}`}>{children}</div>;
}

function Field({ label, children }) {
return ( <label className="block"> <div className="mb-2 text-sm font-bold text-slate-600">{label}</div>
{children} </label>
);
}

function Toggle({ label, checked, onChange }) {
return ( <div className="flex items-center justify-between rounded-2xl bg-slate-50 px-4 py-4"> <div className="font-semibold text-slate-700">{label}</div>
<button onClick={() => onChange(!checked)} className={`relative h-8 w-14 rounded-full transition active:scale-95 ${checked ? "bg-pink-500" : "bg-slate-300"}`}>
<span className={`absolute top-1 h-6 w-6 rounded-full bg-white transition ${checked ? "left-7" : "left-1"}`} /> </button> </div>
);
}

function Stat({ value, label }) {
return ( <div className="rounded-[24px] bg-slate-50 p-6 text-center"> <div className="text-5xl font-extrabold">{value}</div> <div className="mt-2 text-lg text-slate-600">{label}</div> </div>
);
}

function Info({ title, value }) {
return ( <div className="rounded-[24px] bg-slate-50 p-5"> <div className="text-sm font-bold uppercase tracking-wide text-slate-400">{title}</div> <div className="mt-2 text-xl font-bold text-slate-800">{value}</div> </div>
);
}

function HeartBurst({ visible }) {
if (!visible) return null;
return ( <div className="pointer-events-none absolute inset-0 z-30 flex items-center justify-center overflow-hidden"> <div className="absolute h-36 w-36 rounded-full bg-pink-300/40 animate-[ping_800ms_ease-out_1]" /> <div className="text-7xl drop-shadow-lg animate-[bounce_600ms_ease-out_1]">💖</div> </div>
);
}

function MatchOverlay({ visible, personName, text, lang, onClose }) {
if (!visible) return null;
return ( <div className="absolute inset-0 z-40 flex items-center justify-center bg-black/55 p-4"> <div className="w-full max-w-md rounded-[28px] bg-white p-6 text-center shadow-2xl animate-[scaleIn_300ms_ease-out_1]"> <div className="text-5xl">✨💘✨</div> <div className="mt-4 text-3xl font-extrabold text-slate-900">{text.mutual}</div> <p className="mt-2 text-slate-600">
{lang === "ru" ? `У тебя и ${personName} взаимный лайк. ${text.mutualText}` : `You and ${personName} liked each other. ${text.mutualText}`} </p> <div className="mt-5 flex gap-3"> <button onClick={onClose} className="flex-1 rounded-2xl bg-slate-100 py-3 font-semibold text-slate-700 transition active:scale-95">{text.later}</button> <button onClick={onClose} className="flex-1 rounded-2xl bg-gradient-to-r from-pink-500 to-orange-400 py-3 font-semibold text-white shadow-lg transition active:scale-95">{text.great}</button> </div> </div> </div>
);
}

/* =========================
ОСНОВНОЙ APP
========================= */

export default function App() {
const [lang, setLang] = useState("ru");
const text = TEXT[lang];
const cities = lang === "ru" ? CITIES_RU : CITIES_EN;
const zodiac = lang === "ru" ? ZODIAC_RU : ZODIAC_EN;
const lookingOptions = lang === "ru" ? LOOKING_RU : LOOKING_EN;
const relationOptions = lang === "ru" ? RELATIONSHIP_RU : RELATIONSHIP_EN;

const [tab, setTab] = useState("home");
const [profile, setProfile] = useState(() => JSON.parse(localStorage.getItem("datingProfile") || "null") || DEFAULT_PROFILE);
const [filters, setFilters] = useState(() => JSON.parse(localStorage.getItem("datingFilters") || "null") || DEFAULT_FILTERS);
const [draftFilters, setDraftFilters] = useState(filters);
const [liked, setLiked] = useState(() => JSON.parse(localStorage.getItem("likedProfiles") || "[]"));
const [passed, setPassed] = useState([]);
const [matches, setMatches] = useState(() => JSON.parse(localStorage.getItem("matches") || "[2]"));
const [chats, setChats] = useState(() => JSON.parse(localStorage.getItem("datingChats") || "null") || DEFAULT_CHATS);
const [selectedChatId, setSelectedChatId] = useState(1);
const [mobileOpenChat, setMobileOpenChat] = useState(false);
const [messageInput, setMessageInput] = useState("");
const [photoIndexes, setPhotoIndexes] = useState({});
const [profilePhotoIndex, setProfilePhotoIndex] = useState(0);
const [heartVisible, setHeartVisible] = useState(false);
const [matchVisible, setMatchVisible] = useState(false);
const [matchName, setMatchName] = useState("");
const [openHelp, setOpenHelp] = useState(0);
const [resetTick, setResetTick] = useState(0);

useEffect(() => localStorage.setItem("datingProfile", JSON.stringify(profile)), [profile]);
useEffect(() => localStorage.setItem("datingFilters", JSON.stringify(filters)), [filters]);
useEffect(() => localStorage.setItem("likedProfiles", JSON.stringify(liked)), [liked]);
useEffect(() => localStorage.setItem("matches", JSON.stringify(matches)), [matches]);
useEffect(() => localStorage.setItem("datingChats", JSON.stringify(chats)), [chats]);

const cityOptions = cities[draftFilters.country] || (lang === "ru" ? ["Все локации"] : ["All locations"]);
const selectedChat = chats.find((chat) => chat.id === selectedChatId) || chats[0];
const likedYouProfiles = SAMPLE_PROFILES.filter((p) => chats.some((chat) => chat.personId === p.id && chat.likedYou));

const availableProfiles = useMemo(() => {
return SAMPLE_PROFILES.filter((item) => {
if (liked.includes(item.id) || passed.includes(item.id)) return false;
if (item.country !== filters.country) return false;
if (item.distance > filters.distance) return false;
if (!["Все локации", "All locations"].includes(filters.city) && item.city !== filters.city) return false;
if (!["Всех", "Everyone"].includes(filters.lookingFor) && ![item.gender, item.genderEn].includes(filters.lookingFor)) return false;
if (![text.allOptions].includes(filters.relationshipGoal) && ![item.lookingFor, item.lookingForEn].includes(filters.relationshipGoal)) return false;
return true;
});
}, [liked, passed, filters, resetTick, text.allOptions]);

const currentProfile = availableProfiles[0] || null;
const currentCardPhotoIndex = currentProfile ? photoIndexes[currentProfile.id] || 0 : 0;

const setNextPhoto = (profileId, total) => setPhotoIndexes((prev) => ({ ...prev, [profileId]: ((prev[profileId] || 0) + 1) % total }));
const setPrevPhoto = (profileId, total) => setPhotoIndexes((prev) => ({ ...prev, [profileId]: (prev[profileId] || 0) === 0 ? total - 1 : (prev[profileId] || 0) - 1 }));

const handleLike = () => {
if (!currentProfile) return;
setHeartVisible(true);
setTimeout(() => setHeartVisible(false), 750);
setLiked((prev) => [...prev, currentProfile.id]);

```
const becameMatch = [2, 5].includes(currentProfile.id);
if (!becameMatch) return;

if (!matches.includes(currentProfile.id)) setMatches((prev) => [...prev, currentProfile.id]);

if (!chats.some((chat) => chat.personId === currentProfile.id)) {
  const newChat = {
    id: Date.now(),
    personId: currentProfile.id,
    name: currentProfile.name,
    city: currentProfile.city,
    avatar: currentProfile.images[0],
    online: currentProfile.online,
    read: false,
    yourTurn: false,
    likedYou: true,
    messages: [
      { id: 1, from: "them", text: "Привет! У нас взаимная симпатия 💫", textEn: "Hi! We matched 💫", time: lang === "ru" ? "сейчас" : "now" },
    ],
  };
  setChats((prev) => [newChat, ...prev]);
  setSelectedChatId(newChat.id);
}

setMatchName(currentProfile.name);
setMatchVisible(true);
```

};

const handlePass = () => currentProfile && setPassed((prev) => [...prev, currentProfile.id]);
const resetSearch = () => {
setLiked([]);
setPassed([]);
setResetTick((v) => v + 1);
};

const applyFilters = () => setFilters(draftFilters);
const resetFilters = () => {
const reset = lang === "ru"
? DEFAULT_FILTERS
: { country: "USA", city: "All locations", units: "miles", distance: 5, lookingFor: "Everyone", relationshipGoal: "Serious relationship" };
setDraftFilters(reset);
setFilters(reset);
};

const sendMessage = () => {
if (!messageInput.trim() || !selectedChat) return;
setChats((prev) => prev.map((chat) => chat.id !== selectedChat.id ? chat : {
...chat,
messages: [
...chat.messages,
{
id: Date.now(),
from: "me",
text: messageInput.trim(),
textEn: messageInput.trim(),
time: lang === "ru" ? "сейчас" : "now",
status: lang === "ru" ? "Доставлено" : "Delivered",
statusEn: "Delivered",
},
],
}));
setMessageInput("");
};

const profileName = lang === "ru" ? profile.name : profile.nameEn;
const profileBio = lang === "ru" ? profile.bio : profile.bioEn;
const profileZodiac = lang === "ru" ? profile.zodiac : profile.zodiacEn;
const profileLooking = lang === "ru" ? profile.lookingFor : profile.lookingForEn;
const profileGoal = lang === "ru" ? profile.relationshipGoal : profile.relationshipGoalEn;

return ( <div className="min-h-screen bg-[linear-gradient(180deg,#ffeef5_0%,#f8f4fb_50%,#f7f6fb_100%)] p-3 sm:p-5 text-slate-900"> <style>{`         @keyframes scaleIn { 0% { transform: scale(.85); opacity: 0; } 100% { transform: scale(1); opacity: 1; } }
        .hide-scrollbar::-webkit-scrollbar { display: none; }
        .hide-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }
      `}</style>

```
  <div className="mx-auto max-w-[1380px] rounded-[34px] bg-white/35 p-3 sm:p-5 shadow-[0_20px_70px_rgba(230,136,177,0.15)] backdrop-blur-sm">
    <Card className="p-4 sm:p-5">
      <div className="flex flex-col gap-4 xl:flex-row xl:items-center xl:justify-between">
        <div className="flex items-center gap-3 sm:gap-4">
          <div className="text-3xl font-extrabold tracking-tight text-pink-500 sm:text-4xl">{text.brand}</div>
          <div className="flex rounded-full bg-slate-100 p-1 text-sm font-bold text-slate-600">
            <button onClick={() => setLang("ru")} className={`rounded-full px-4 py-2 transition active:scale-95 ${lang === "ru" ? "bg-gradient-to-r from-pink-500 to-orange-400 text-white shadow" : ""}`}>RU</button>
            <button onClick={() => setLang("en")} className={`rounded-full px-4 py-2 transition active:scale-95 ${lang === "en" ? "bg-gradient-to-r from-pink-500 to-orange-400 text-white shadow" : ""}`}>EN</button>
          </div>
        </div>

        <div className="hide-scrollbar flex gap-2 overflow-x-auto pb-1 sm:gap-3">
          {text.tabs.map((label, index) => {
            const key = ["home", "search", "likes", "messages", "profile", "settings", "help"][index];
            return (
              <button
                key={label}
                onClick={() => {
                  setTab(key);
                  if (key === "messages") setMobileOpenChat(false);
                }}
                className={`whitespace-nowrap rounded-full px-4 py-3 text-[13px] font-bold transition sm:px-6 sm:text-[15px] active:scale-95 ${tab === key ? "bg-gradient-to-r from-pink-500 to-orange-400 text-white shadow-[0_10px_30px_rgba(244,114,182,0.35)]" : "bg-slate-100 text-slate-800"}`}
              >
                {label}
              </button>
            );
          })}
        </div>
      </div>
    </Card>

    <div className="mt-5">
      {tab === "home" && (
        <div className="grid gap-5 lg:grid-cols-[1.1fr_.9fr]">
          <Card className="overflow-hidden p-6 sm:p-8">
            <div className="max-w-xl">
              <div className="text-4xl font-extrabold leading-tight sm:text-6xl">{text.heroTitle}</div>
              <p className="mt-4 text-lg text-slate-600">{text.heroText}</p>
              <div className="mt-6 flex flex-wrap gap-3">
                <button onClick={() => setTab("search")} className="rounded-2xl bg-gradient-to-r from-pink-500 to-orange-400 px-6 py-4 font-bold text-white shadow-lg transition active:scale-95">{text.heroSearch}</button>
                <button onClick={() => setTab("messages")} className="rounded-2xl bg-slate-100 px-6 py-4 font-bold text-slate-800 transition active:scale-95">{text.heroMessages}</button>
              </div>
            </div>
          </Card>

          <Card className="p-6">
            <div className="grid gap-4 sm:grid-cols-2">
              {text.cards.map(([title, body]) => (
                <div key={title} className="rounded-[26px] bg-slate-50 p-5">
                  <div className="text-lg font-bold">{title}</div>
                  <div className="mt-2 text-slate-600">{body}</div>
                </div>
              ))}
            </div>
          </Card>
        </div>
      )}

      {(tab === "search" || tab === "likes") && (
        <div className="grid gap-5 xl:grid-cols-[420px_1fr]">
          <Card className="p-5 sm:p-7">
            <div className="text-2xl font-extrabold">{text.search}</div>
            <div className="mt-5 space-y-4">
              <Field label={text.mode}>
                <select className="w-full rounded-xl border border-slate-200 bg-white px-4 py-3 outline-none">
                  <option>{text.modeNearby}</option>
                  <option>{text.modeCountry}</option>
                  <option>{text.modeCity}</option>
                </select>
              </Field>

              <Field label={text.country}>
                <select value={draftFilters.country} onChange={(e) => setDraftFilters({ ...draftFilters, country: e.target.value, city: cities[e.target.value][0] })} className="w-full rounded-xl border border-slate-200 bg-white px-4 py-3 outline-none">
                  {Object.keys(cities).map((country) => <option key={country}>{country}</option>)}
                </select>
              </Field>

              <Field label={text.city}>
                <select value={draftFilters.city} onChange={(e) => setDraftFilters({ ...draftFilters, city: e.target.value })} className="w-full rounded-xl border border-slate-200 bg-white px-4 py-3 outline-none">
                  {cityOptions.map((city) => <option key={city}>{city}</option>)}
                </select>
              </Field>

              <Field label={text.units}>
                <select value={draftFilters.units} onChange={(e) => setDraftFilters({ ...draftFilters, units: e.target.value })} className="w-full rounded-xl border border-slate-200 bg-white px-4 py-3 outline-none">
                  <option>{text.miles}</option>
                  <option>{text.km}</option>
                </select>
              </Field>

              <Field label={text.show}>
                <select value={draftFilters.lookingFor} onChange={(e) => setDraftFilters({ ...draftFilters, lookingFor: e.target.value })} className="w-full rounded-xl border border-slate-200 bg-white px-4 py-3 outline-none">
                  {lookingOptions.map((option) => <option key={option}>{option}</option>)}
                </select>
              </Field>

              <Field label={text.relation}>
                <select value={draftFilters.relationshipGoal} onChange={(e) => setDraftFilters({ ...draftFilters, relationshipGoal: e.target.value })} className="w-full rounded-xl border border-slate-200 bg-white px-4 py-3 outline-none">
                  <option>{text.allOptions}</option>
                  {relationOptions.map((option) => <option key={option}>{option}</option>)}
                </select>
              </Field>

              <div>
                <div className="text-sm font-bold text-slate-600">{text.distance}</div>
                <div className="mt-1 text-3xl font-extrabold">{draftFilters.distance} {draftFilters.units}</div>
                <input type="range" min="5" max="5000" value={draftFilters.distance} onChange={(e) => setDraftFilters({ ...draftFilters, distance: Number(e.target.value) })} className="mt-4 w-full" />
              </div>

              <div className="grid gap-3 pt-2 sm:grid-cols-2">
                <button onClick={applyFilters} className="rounded-2xl bg-gradient-to-r from-pink-500 to-orange-400 px-6 py-4 font-bold text-white shadow-lg transition active:scale-95">{text.apply}</button>
                <button onClick={resetFilters} className="rounded-2xl bg-slate-100 px-6 py-4 font-bold text-slate-800 transition active:scale-95">{text.reset}</button>
              </div>
            </div>
          </Card>

          <Card className="relative overflow-hidden p-4 sm:p-7">
            {currentProfile ? (
              <div className="mx-auto max-w-[560px]">
                <div className="relative overflow-hidden rounded-[34px] bg-slate-200 shadow-2xl">
                  <HeartBurst visible={heartVisible} />
                  <MatchOverlay visible={matchVisible} personName={matchName} text={text} lang={lang} onClose={() => setMatchVisible(false)} />

                  <div className="absolute inset-x-0 top-0 z-10 flex gap-1 p-3">
                    {currentProfile.images.map((_, idx) => (
                      <div key={idx} className="h-1.5 flex-1 rounded-full bg-white/35">
                        <div className={`h-full rounded-full bg-white transition-all ${idx <= currentCardPhotoIndex ? "w-full" : "w-0"}`} />
                      </div>
                    ))}
                  </div>

                  <div className="relative aspect-[3/4]">
                    <img src={currentProfile.images[currentCardPhotoIndex]} alt={currentProfile.name} className="h-full w-full object-cover" />
                    <button onClick={() => setPrevPhoto(currentProfile.id, currentProfile.images.length)} className="absolute inset-y-0 left-0 w-1/2" aria-label="prev" />
                    <button onClick={() => setNextPhoto(currentProfile.id, currentProfile.images.length)} className="absolute inset-y-0 right-0 w-1/2" aria-label="next" />

                    <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/80 via-black/25 to-transparent p-6 text-white">
                      <div className="flex items-center gap-2 text-5xl font-extrabold">
                        <span>{currentProfile.name}, {currentProfile.age}</span>
                        {currentProfile.verified && <span className="text-2xl">✔️</span>}
                      </div>
                      <div className="mt-2 text-lg font-semibold">{currentProfile.city}, {currentProfile.country} • {currentProfile.online ? text.online : text.recent}</div>
                      <div className="mt-1 text-sm font-semibold text-white/90">{lang === "ru" ? currentProfile.zodiac : currentProfile.zodiacEn} • {lang === "ru" ? currentProfile.lookingFor : currentProfile.lookingForEn}</div>
                      <div className="mt-3 max-w-lg text-xl">{lang === "ru" ? currentProfile.about : currentProfile.aboutEn}</div>
                    </div>
                  </div>

                  <div className="absolute inset-x-0 bottom-6 z-20 flex items-center justify-center gap-4">
                    <button onClick={handlePass} className="h-20 w-20 rounded-full bg-white text-4xl shadow-xl transition active:scale-90">✕</button>
                    <button onClick={() => setNextPhoto(currentProfile.id, currentProfile.images.length)} className="h-20 w-20 rounded-full bg-yellow-400 text-4xl shadow-xl transition active:scale-90">★</button>
                    <button onClick={handleLike} className="h-20 w-20 rounded-full bg-gradient-to-r from-pink-500 to-orange-400 text-4xl shadow-xl transition active:scale-90">♡</button>
                  </div>
                </div>
              </div>
            ) : (
              <div className="flex min-h-[620px] flex-col items-center justify-center rounded-[30px] bg-slate-50 text-center">
                <div className="text-4xl font-extrabold text-slate-700">{text.noProfiles}</div>
                <div className="mt-3 text-xl text-slate-500">{text.noProfilesSub}</div>
                <button onClick={resetSearch} className="mt-8 rounded-2xl bg-gradient-to-r from-pink-500 to-orange-400 px-8 py-4 font-bold text-white shadow-lg transition active:scale-95">{text.restart}</button>
              </div>
            )}
          </Card>
        </div>
      )}

      {tab === "messages" && (
        <div className="space-y-4">
          <div className="rounded-[26px] bg-white/90 p-3 sm:p-4 shadow-[0_10px_35px_rgba(244,114,182,0.08)]">
            <div className="flex flex-wrap items-center gap-2 sm:gap-3">
              <span className="rounded-full bg-pink-50 px-3 py-2 text-sm font-bold text-pink-600">{text.yourTurn}</span>
              {chats.filter((c) => c.yourTurn).map((chat) => (
                <button key={chat.id} onClick={() => { setSelectedChatId(chat.id); setMobileOpenChat(true); }} className="flex items-center gap-2 rounded-full bg-slate-100 px-3 py-2 text-sm font-semibold transition active:scale-95">
                  <img src={chat.avatar} alt={chat.name} className="h-8 w-8 rounded-full object-cover" />
                  {chat.name}
                </button>
              ))}

              <span className="rounded-full bg-orange-50 px-3 py-2 text-sm font-bold text-orange-500">{text.likedMe}</span>
              {likedYouProfiles.map((person) => (
                <button key={person.id} onClick={() => setTab("search")} className="flex items-center gap-2 rounded-full bg-slate-100 px-3 py-2 text-sm font-semibold transition active:scale-95">
                  <img src={person.images[0]} alt={person.name} className="h-8 w-8 rounded-full object-cover" />
                  {person.name}
                </button>
              ))}
            </div>
          </div>

          <div className="grid gap-5 lg:grid-cols-[300px_1fr] xl:grid-cols-[280px_1fr]">
            <Card className={`${mobileOpenChat ? "hidden lg:block" : "block"} p-3 sm:p-4`}>
              <div className="space-y-3">
                {chats.map((chat) => (
                  <button
                    key={chat.id}
                    onClick={() => { setSelectedChatId(chat.id); setMobileOpenChat(true); }}
                    className={`w-full rounded-[24px] border p-3 text-left transition active:scale-[0.98] ${selectedChatId === chat.id ? "border-pink-200 bg-pink-50" : "border-transparent bg-white hover:bg-slate-50"}`}
                  >
                    <div className="flex items-start gap-3">
                      <img src={chat.avatar} alt={chat.name} className="h-12 w-12 rounded-full object-cover" />
                      <div className="min-w-0 flex-1">
                        <div className="flex items-center justify-between gap-2">
                          <div className="truncate text-xl font-bold">{chat.name}</div>
                          {!chat.read && <span className="h-2.5 w-2.5 rounded-full bg-pink-500" />}
                        </div>
                        <div className="text-sm text-slate-500">{chat.online ? text.online : chat.city}</div>
                        <div className="mt-1 truncate text-sm text-slate-500">{lang === "ru" ? chat.messages.at(-1)?.text : chat.messages.at(-1)?.textEn}</div>
                      </div>
                    </div>
                  </button>
                ))}
              </div>
            </Card>

            <Card className={`${!mobileOpenChat ? "hidden lg:block" : "block"} p-4 sm:p-6`}>
              {selectedChat ? (
                <div className="flex h-[68vh] flex-col">
                  <div className="flex items-center gap-3 border-b border-slate-100 pb-4">
                    <button onClick={() => setMobileOpenChat(false)} className="rounded-full bg-slate-100 p-2 text-sm font-bold lg:hidden">←</button>
                    <img src={selectedChat.avatar} alt={selectedChat.name} className="h-14 w-14 rounded-full object-cover" />
                    <div>
                      <div className="text-2xl font-bold">{selectedChat.name}</div>
                      <div className="text-slate-500">{selectedChat.online ? text.online : text.offline} • {selectedChat.city}</div>
                    </div>
                  </div>

                  <div className="hide-scrollbar flex-1 space-y-4 overflow-y-auto py-5">
                    {selectedChat.messages.map((msg) => (
                      <div key={msg.id} className={`flex ${msg.from === "me" ? "justify-end" : "justify-start"}`}>
                        <div className="max-w-[78%]">
                          <div className={`rounded-[22px] px-4 py-3 text-lg ${msg.from === "me" ? "bg-gradient-to-r from-pink-500 to-orange-400 text-white" : "bg-slate-100 text-slate-800"}`}>
                            {lang === "ru" ? msg.text : msg.textEn}
                          </div>
                          <div className={`mt-1 text-[11px] text-slate-400 ${msg.from === "me" ? "text-right" : "text-left"}`}>
                            {msg.time}{msg.from === "me" && (lang === "ru" ? msg.status : msg.statusEn) ? ` • ${lang === "ru" ? msg.status : msg.statusEn}` : ""}
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>

                  <div className="flex items-center gap-3 border-t border-slate-100 pt-4">
                    <input value={messageInput} onChange={(e) => setMessageInput(e.target.value)} placeholder={text.write} className="flex-1 rounded-2xl border border-slate-200 px-4 py-3 outline-none" />
                    <button onClick={sendMessage} className="rounded-2xl bg-gradient-to-r from-pink-500 to-orange-400 px-5 py-3 font-bold text-white shadow-lg transition active:scale-95">{text.send}</button>
                  </div>
                </div>
              ) : (
                <div className="flex min-h-[500px] items-center justify-center text-slate-500">{text.chooseChat}</div>
              )}
            </Card>
          </div>
        </div>
      )}

      {tab === "profile" && (
        <div className="grid gap-5">
          <Card className="p-6">
            <div className="grid gap-6 lg:grid-cols-[260px_1fr] lg:items-start">
              <div className="rounded-[28px] bg-slate-50 p-5 text-center">
                <div className="mx-auto overflow-hidden rounded-[24px] bg-slate-200 shadow-lg" style={{ maxWidth: 220 }}>
                  <img src={profile.photos[profilePhotoIndex % profile.photos.length]} alt={profileName} className="h-[260px] w-full object-cover" />
                </div>
                <div className="mt-4 flex items-center justify-center gap-2">
                  {profile.photos.map((src, idx) => (
                    <button key={src} onClick={() => setProfilePhotoIndex(idx)} className={`h-2.5 rounded-full transition ${profilePhotoIndex === idx ? "w-8 bg-pink-500" : "w-2.5 bg-slate-300"}`} />
                  ))}
                </div>
                <button className="mt-4 rounded-2xl bg-slate-100 px-4 py-3 font-semibold text-slate-700 transition active:scale-95">{text.allPhotos}</button>
              </div>

              <div>
                <div className="text-4xl font-extrabold">{profileName}</div>
                <div className="mt-2 text-lg text-slate-600">{profile.age} {text.years} • {profileZodiac}</div>
                <div className="mt-2 text-sm font-semibold text-pink-500">{profile.verified ? text.verified : text.notVerified}</div>
                <p className="mt-4 text-lg text-slate-600">{profileBio}</p>
                <div className="mt-6 grid gap-4 md:grid-cols-2">
                  <Info title={text.lookingFor} value={profileLooking} />
                  <Info title={text.goal} value={profileGoal} />
                  <Info title={text.zodiac} value={profileZodiac} />
                  <Info title={text.verificationStatus} value={profile.verificationStatus === "confirmed" ? text.confirmed : profile.verificationStatus === "pending" ? text.pending : text.unconfirmed} />
                </div>
              </div>
            </div>
          </Card>

          <Card className="p-6">
            <div className="text-2xl font-extrabold">{text.about}</div>
            <div className="mt-5 grid gap-4 md:grid-cols-2">
              <Stat value={liked.length} label={text.favorites} />
              <Stat value={matches.length} label={text.mutualLikes} />
            </div>
          </Card>
        </div>
      )}

      {tab === "settings" && (
        <div className="grid gap-5 xl:grid-cols-[1fr_1fr]">
          <Card className="p-6">
            <div className="text-2xl font-extrabold">{text.accountProfile}</div>
            <div className="mt-5 space-y-4">
              <Field label={text.name}>
                <input value={lang === "ru" ? profile.name : profile.nameEn} onChange={(e) => lang === "ru" ? setProfile({ ...profile, name: e.target.value }) : setProfile({ ...profile, nameEn: e.target.value })} className="w-full rounded-xl border border-slate-200 px-4 py-3 outline-none" />
              </Field>
              <Field label={text.age}>
                <input type="number" value={profile.age} onChange={(e) => setProfile({ ...profile, age: Number(e.target.value) })} className="w-full rounded-xl border border-slate-200 px-4 py-3 outline-none" />
              </Field>
              <Field label={text.bio}>
                <textarea rows={4} value={lang === "ru" ? profile.bio : profile.bioEn} onChange={(e) => lang === "ru" ? setProfile({ ...profile, bio: e.target.value }) : setProfile({ ...profile, bioEn: e.target.value })} className="w-full rounded-xl border border-slate-200 px-4 py-3 outline-none" />
              </Field>
              <Field label={text.zodiac}>
                <select value={lang === "ru" ? profile.zodiac : profile.zodiacEn} onChange={(e) => lang === "ru" ? setProfile({ ...profile, zodiac: e.target.value }) : setProfile({ ...profile, zodiacEn: e.target.value })} className="w-full rounded-xl border border-slate-200 px-4 py-3 outline-none">
                  {zodiac.map((item) => <option key={item}>{item}</option>)}
                </select>
              </Field>
              <Field label={text.lookingFor}>
                <select value={lang === "ru" ? profile.lookingFor : profile.lookingForEn} onChange={(e) => lang === "ru" ? setProfile({ ...profile, lookingFor: e.target.value }) : setProfile({ ...profile, lookingForEn: e.target.value })} className="w-full rounded-xl border border-slate-200 px-4 py-3 outline-none">
                  {lookingOptions.filter((v) => ![LOOKING_RU[0], LOOKING_EN[0]].includes(v)).map((item) => <option key={item}>{item}</option>)}
                </select>
              </Field>
              <Field label={text.goal}>
                <select value={lang === "ru" ? profile.relationshipGoal : profile.relationshipGoalEn} onChange={(e) => lang === "ru" ? setProfile({ ...profile, relationshipGoal: e.target.value }) : setProfile({ ...profile, relationshipGoalEn: e.target.value })} className="w-full rounded-xl border border-slate-200 px-4 py-3 outline-none">
                  {relationOptions.map((item) => <option key={item}>{item}</option>)}
                </select>
              </Field>
            </div>
          </Card>

          <Card className="p-6">
            <div className="text-2xl font-extrabold">{text.security}</div>
            <div className="mt-5 space-y-5">
              <Field label={text.changePassword}>
                <div className="grid gap-3 sm:grid-cols-2">
                  <input placeholder={text.newPassword} className="rounded-xl border border-slate-200 px-4 py-3 outline-none" />
                  <input placeholder={text.repeatPassword} className="rounded-xl border border-slate-200 px-4 py-3 outline-none" />
                </div>
              </Field>

              <Toggle label={text.notifLikes} checked={profile.notificationsLikes} onChange={(value) => setProfile({ ...profile, notificationsLikes: value })} />
              <Toggle label={text.notifMessages} checked={profile.notificationsMessages} onChange={(value) => setProfile({ ...profile, notificationsMessages: value })} />
              <Toggle label={text.notifMatches} checked={profile.notificationsMatches} onChange={(value) => setProfile({ ...profile, notificationsMatches: value })} />
              <Toggle label={text.showOnline} checked={profile.showOnlineStatus} onChange={(value) => setProfile({ ...profile, showOnlineStatus: value })} />
              <Toggle label={text.privateProfile} checked={profile.privateAccount} onChange={(value) => setProfile({ ...profile, privateAccount: value })} />

              <div className="rounded-[24px] bg-slate-50 p-5">
                <div className="text-lg font-bold text-slate-800">{text.verificationTitle}</div>
                <div className="mt-2 text-slate-600">{text.verificationText}</div>
                <div className="mt-4 flex flex-wrap gap-3">
                  <button className="rounded-2xl bg-gradient-to-r from-pink-500 to-orange-400 px-5 py-3 font-bold text-white transition active:scale-95">{text.startVerification}</button>
                  <div className="rounded-2xl bg-white px-4 py-3 font-semibold text-slate-700">{text.verificationStatus}: {profile.verificationStatus === "confirmed" ? text.confirmed : profile.verificationStatus === "pending" ? text.pending : text.unconfirmed}</div>
                </div>
              </div>

              <div className="pt-2">
                <button className="rounded-2xl bg-gradient-to-r from-pink-500 to-orange-400 px-6 py-4 font-bold text-white shadow-lg transition active:scale-95">{text.saveSettings}</button>
              </div>
            </div>
          </Card>
        </div>
      )}

      {tab === "help" && (
        <Card className="p-6 sm:p-7">
          <div className="text-3xl font-extrabold">{text.help}</div>
          <div className="mt-6 space-y-3">
            {HELP[lang].map((item, index) => {
              const open = openHelp === index;
              return (
                <div key={item.q} className="overflow-hidden rounded-[24px] border border-slate-100 bg-slate-50">
                  <button onClick={() => setOpenHelp(open ? -1 : index)} className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left transition active:scale-[0.99]">
                    <span className="text-lg font-bold">{item.q}</span>
                    <span className="text-2xl text-slate-400">{open ? "−" : "+"}</span>
                  </button>
                  {open && <div className="px-5 pb-5 text-slate-600">{item.a}</div>}
                </div>
              );
            })}
          </div>
        </Card>
      )}
    </div>
  </div>
</div>
```

);
}
