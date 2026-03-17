import React, { useEffect, useMemo, useRef, useState } from "react";

const profiles = [
  {
    id: 1,
    name: "Алина",
    age: 24,
    country: "Франция",
    city: "Лион",
    zodiac: "Весы",
    lookingFor: "Серьёзное знакомство",
    interests: ["путешествия", "йога", "кофейни", "фотография", "вечерние прогулки"],
    about:
      "Люблю красивую архитектуру, тёплые разговоры и людей с хорошим чувством юмора. Мне нравятся спонтанные поездки, уютные завтраки и всё, что выглядит эстетично. Ищу лёгкое, приятное общение, которое может перерасти во что-то настоящее.",
    photos: [
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1488426862026-3ee34a7d66df?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&w=1200&q=80",
    ],
  },
  {
    id: 2,
    name: "София",
    age: 26,
    country: "Италия",
    city: "Милан",
    zodiac: "Телец",
    lookingFor: "Общение и встречи",
    interests: ["мода", "рестораны", "спорт", "сериалы", "городские прогулки"],
    about:
      "Ценю стиль, уверенность и комфорт рядом с человеком. Люблю активный ритм жизни, но умею останавливаться ради красивого момента. Нравятся искренние люди, с которыми легко смеяться и интересно обсуждать всё на свете.",
    photos: [
      "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=1200&q=80",
    ],
  },
  {
    id: 3,
    name: "Ева",
    age: 25,
    country: "Испания",
    city: "Барселона",
    zodiac: "Близнецы",
    lookingFor: "Мэтч и реальное общение",
    interests: ["пляж", "танцы", "музыка", "маркетинг", "пикники"],
    about:
      "Мне близка лёгкость, энергия и люди, которые умеют вдохновлять. Часто выбираю море, музыку и живые эмоции вместо скучных сценариев. Люблю ухоженный внешний вид, хорошую подачу и искренний интерес друг к другу.",
    photos: [
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1521119989659-a83eee488004?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1517365830460-955ce3ccd263?auto=format&fit=crop&w=1200&q=80",
    ],
  },
  {
    id: 4,
    name: "Мария",
    age: 27,
    country: "Польша",
    city: "Варшава",
    zodiac: "Козерог",
    lookingFor: "Серьёзные отношения",
    interests: ["книги", "дизайн", "психология", "кошка", "поездки на выходные"],
    about:
      "Спокойная, но с характером. Люблю умных, внимательных людей, которые умеют держать слово и не боятся настоящей близости. Для меня важны уважение, стабильность и ощущение, что с человеком можно быть собой.",
    photos: [
      "https://images.unsplash.com/photo-1512316609839-ce289d3eba0a?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1521572267360-ee0c2909d518?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=1200&q=80",
    ],
  },
  {
    id: 5,
    name: "Николь",
    age: 23,
    country: "США",
    city: "Сан-Диего",
    zodiac: "Лев",
    lookingFor: "Яркое знакомство",
    interests: ["фитнес", "смузи", "авто-поездки", "TikTok", "закаты"],
    about:
      "Люблю драйв, лёгкость и людей, с которыми всё идёт естественно. Мне нравится ухоженность, вкус и энергия. Обожаю солнце, красивые места и момент, когда первое общение сразу feels right.",
    photos: [
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=1200&q=80",
    ],
  },
  {
    id: 6,
    name: "Максим",
    age: 28,
    country: "Германия",
    city: "Берлин",
    zodiac: "Скорпион",
    lookingFor: "Реальное общение",
    interests: ["спортзал", "урбанистика", "кофе", "бизнес", "вечерние выезды"],
    about:
      "Люблю движение, цели и людей, у которых есть внутренний стержень. В свободное время выбираю спорт, хороший кофе и поездки по городу без лишнего плана. Интересно знакомиться с теми, у кого есть вкус к жизни.",
    photos: [
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1504593811423-6dd665756598?auto=format&fit=crop&w=1200&q=80",
    ],
  },
  {
    id: 7,
    name: "Даниэль",
    age: 29,
    country: "Испания",
    city: "Мадрид",
    zodiac: "Овен",
    lookingFor: "Мэтч и встречи",
    interests: ["футбол", "путешествия", "барбершопы", "кино", "город ночью"],
    about:
      "Мне нравится уверенное, взрослое общение без лишней игры. Ценю харизму, лёгкость и когда между людьми есть искра с первых минут. Люблю ухоженный стиль, живой юмор и женщин, которые знают себе цену.",
    photos: [
      "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1504593811423-6dd665756598?auto=format&fit=crop&w=1200&q=80",
    ],
  },
  {
    id: 8,
    name: "Илья",
    age: 27,
    country: "Канада",
    city: "Ванкувер",
    zodiac: "Рак",
    lookingFor: "Серьёзные отношения",
    interests: ["походы", "велосипед", "музыка", "технологии", "кулинария"],
    about:
      "Спокойный, собранный и без лишнего шума. Люблю хорошую музыку, прогулки у воды и ощущение уюта рядом с правильным человеком. Для меня важны уважение, тепло и ощущение, что мы действительно смотрим в одну сторону.",
    photos: [
      "https://images.unsplash.com/photo-1504593811423-6dd665756598?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=1200&q=80",
    ],
  },
  {
    id: 9,
    name: "Лукас",
    age: 30,
    country: "Аргентина",
    city: "Буэнос-Айрес",
    zodiac: "Стрелец",
    lookingFor: "Яркие знакомства",
    interests: ["танцы", "фотография", "бокс", "кофе", "путешествия"],
    about:
      "Люблю энергию, стиль и людей, которые не боятся быть живыми. Мне близки красивые места, спонтанные идеи и чувство, когда общение идёт легко, без напряжения. Химия, юмор и взаимный интерес — лучшее начало.",
    photos: [
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1504593811423-6dd665756598?auto=format&fit=crop&w=1200&q=80",
    ],
  },
  {
    id: 10,
    name: "Артём",
    age: 26,
    country: "Чехия",
    city: "Прага",
    zodiac: "Дева",
    lookingFor: "Общение и симпатия",
    interests: ["дизайн", "автомобили", "спорт", "музыка", "вечерний город"],
    about:
      "Мне нравится, когда у человека есть стиль, интеллект и живая энергия. Работаю, развиваюсь, люблю красивые детали и атмосферные места. Ищу приятное знакомство, в котором всё выглядит естественно и по-настоящему интересно.",
    photos: [
      "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1504593811423-6dd665756598?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=1200&q=80",
    ],
  },
];

const clamp = (value, min, max) => Math.max(min, Math.min(max, value));

export default function App() {
  const [profileIndex, setProfileIndex] = useState(0);
  const [photoIndex, setPhotoIndex] = useState(0);
  const [infoOffset, setInfoOffset] = useState(0);
  const [reaction, setReaction] = useState(null);
  const [cardPulse, setCardPulse] = useState("");
  const [isDesktop, setIsDesktop] = useState(false);

  const profile = profiles[profileIndex];
  const infoContentRef = useRef(null);
  const touchRef = useRef(null);
  const reactionTimeoutRef = useRef(null);

  useEffect(() => {
    const onResize = () => setIsDesktop(window.innerWidth >= 900);
    onResize();
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  useEffect(() => {
    setPhotoIndex(0);
    setInfoOffset(0);
    if (infoContentRef.current) {
      infoContentRef.current.scrollTop = 0;
    }
  }, [profileIndex]);

  useEffect(() => {
    const onKeyDown = (e) => {
      if (e.key === "ArrowLeft") prevPhoto();
      if (e.key === "ArrowRight") nextPhoto();
      if (e.key === "ArrowUp") prevProfile();
      if (e.key === "ArrowDown") nextProfile();
    };

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [profileIndex, photoIndex]);

  const showReaction = (type) => {
    setReaction(type);
    setCardPulse(type === "like" ? "pulse-like" : "pulse-dislike");

    if (reactionTimeoutRef.current) {
      clearTimeout(reactionTimeoutRef.current);
    }

    reactionTimeoutRef.current = setTimeout(() => {
      setReaction(null);
      setCardPulse("");
    }, 600);
  };

  const nextProfile = () => {
    setProfileIndex((prev) => (prev + 1) % profiles.length);
  };

  const prevProfile = () => {
    setProfileIndex((prev) => (prev - 1 + profiles.length) % profiles.length);
  };

  const nextPhoto = () => {
    setPhotoIndex((prev) => (prev + 1) % profile.photos.length);
  };

  const prevPhoto = () => {
    setPhotoIndex((prev) => (prev - 1 + profile.photos.length) % profile.photos.length);
  };

  const handleLike = () => {
    showReaction("like");
  };

  const handleDislike = () => {
    showReaction("dislike");
  };

  const scrollInfoByStep = (direction) => {
    const el = infoContentRef.current;
    if (!el) return;
    el.scrollBy({ top: direction * 90, behavior: "smooth" });
  };

  const handleWheel = (e) => {
    const target = e.target.closest("[data-info-scroll='true']");
    if (target) {
      const el = infoContentRef.current;
      if (!el) return;

      const atTop = el.scrollTop <= 0;
      const atBottom = el.scrollTop + el.clientHeight >= el.scrollHeight - 1;

      if (Math.abs(e.deltaY) < 45) return;

      if (e.deltaY > 0 && !atBottom) {
        e.preventDefault();
        el.scrollBy({ top: 90, behavior: "smooth" });
        return;
      }

      if (e.deltaY < 0 && !atTop) {
        e.preventDefault();
        el.scrollBy({ top: -90, behavior: "smooth" });
        return;
      }

      if (e.deltaY > 70 && atBottom) {
        e.preventDefault();
        nextProfile();
        return;
      }

      if (e.deltaY < -70 && atTop) {
        e.preventDefault();
        prevProfile();
      }
    }
  };

  const onTouchStart = (e, area) => {
    const touch = e.touches[0];
    touchRef.current = {
      area,
      startX: touch.clientX,
      startY: touch.clientY,
      lastY: touch.clientY,
      moved: false,
      scrolledInfo: false,
    };
  };

  const onTouchMove = (e) => {
    const t = touchRef.current;
    if (!t) return;

    const touch = e.touches[0];
    const dx = touch.clientX - t.startX;
    const dy = touch.clientY - t.startY;
    t.moved = true;

    if (t.area === "info") {
      const el = infoContentRef.current;
      if (!el) return;

      const absX = Math.abs(dx);
      const absY = Math.abs(dy);

      if (absY > absX && absY > 10) {
        const diff = t.lastY - touch.clientY;
        const atTop = el.scrollTop <= 0;
        const atBottom = el.scrollTop + el.clientHeight >= el.scrollHeight - 1;

        if ((diff > 0 && !atBottom) || (diff < 0 && !atTop)) {
          e.preventDefault();
          el.scrollTop += diff;
          t.scrolledInfo = true;
        }
      }
    }

    t.lastY = touch.clientY;
  };

  const onTouchEnd = () => {
    const t = touchRef.current;
    if (!t) return;

    const dx = t.lastY !== undefined ? 0 : 0;
    const totalX = (t.endX ?? t.startX) - t.startX;
    const totalY = (t.lastY ?? t.startY) - t.startY;

    const absX = Math.abs(totalX);
    const absY = Math.abs(totalY);

    if (t.area === "media") {
      if (absX > 45 && absX > absY) {
        if (totalX < 0) nextPhoto();
        else prevPhoto();
      } else if (absY > 80 && absY > absX) {
        if (totalY < 0) nextProfile();
        else prevProfile();
      }
    }

    if (t.area === "info") {
      const el = infoContentRef.current;
      if (el) {
        const atTop = el.scrollTop <= 1;
        const atBottom = el.scrollTop + el.clientHeight >= el.scrollHeight - 1;

        if (absY > 100 && absY > absX) {
          if (totalY < 0 && atBottom) nextProfile();
          if (totalY > 0 && atTop) prevProfile();
        }
      }
    }

    touchRef.current = null;
  };

  const onMouseDragStart = (e, area) => {
    const startX = e.clientX;
    const startY = e.clientY;

    const onMove = (moveEvent) => {
      const totalX = moveEvent.clientX - startX;
      const totalY = moveEvent.clientY - startY;

      if (area === "info") {
        const el = infoContentRef.current;
        if (el && Math.abs(totalY) > Math.abs(totalX) && Math.abs(totalY) > 8) {
          el.scrollTop -= moveEvent.movementY;
        }
      }
    };

    const onUp = (upEvent) => {
      const totalX = upEvent.clientX - startX;
      const totalY = upEvent.clientY - startY;
      const absX = Math.abs(totalX);
      const absY = Math.abs(totalY);

      if (area === "media") {
        if (absX > 50 && absX > absY) {
          if (totalX < 0) nextPhoto();
          else prevPhoto();
        } else if (absY > 90 && absY > absX) {
          if (totalY < 0) nextProfile();
          else prevProfile();
        }
      }

      if (area === "info") {
        const el = infoContentRef.current;
        if (el) {
          const atTop = el.scrollTop <= 1;
          const atBottom = el.scrollTop + el.clientHeight >= el.scrollHeight - 1;
          if (absY > 110 && absY > absX) {
            if (totalY < 0 && atBottom) nextProfile();
            if (totalY > 0 && atTop) prevProfile();
          }
        }
      }

      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("mouseup", onUp);
    };

    window.addEventListener("mousemove", onMove);
    window.addEventListener("mouseup", onUp);
  };

  const progress = useMemo(
    () =>
      profile.photos.map((_, i) => (
        <div
          key={i}
          className={`photo-progress ${i === photoIndex ? "active" : ""}`}
        />
      )),
    [profile.photos, photoIndex]
  );

  return (
    <>
      <style>{`
        * {
          box-sizing: border-box;
          -webkit-tap-highlight-color: transparent;
        }

        html, body, #root {
          margin: 0;
          width: 100%;
          height: 100%;
          overflow: hidden;
          font-family: Inter, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
          background:
            radial-gradient(circle at top, rgba(88, 99, 255, 0.22), transparent 32%),
            radial-gradient(circle at bottom, rgba(255, 60, 120, 0.16), transparent 28%),
            linear-gradient(180deg, #0b1020 0%, #111827 40%, #0b1220 100%);
          color: #fff;
        }

        body {
          overflow: hidden;
        }

        .app-shell {
          width: 100%;
          height: 100%;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 10px;
        }

        .phone-frame {
          position: relative;
          width: min(100%, 430px);
          height: min(100vh - 20px, 920px);
          max-height: 100%;
          border-radius: 32px;
          overflow: hidden;
          background: rgba(17, 24, 39, 0.82);
          border: 1px solid rgba(255,255,255,0.08);
          box-shadow:
            0 30px 80px rgba(0,0,0,0.45),
            inset 0 1px 0 rgba(255,255,255,0.06);
          backdrop-filter: blur(16px);
        }

        .desktop-wrap {
          width: min(100%, 1120px);
          display: grid;
          grid-template-columns: 1fr;
          gap: 20px;
          align-items: center;
          justify-items: center;
        }

        .desktop-layout {
          width: 100%;
          display: grid;
          grid-template-columns: 280px minmax(320px, 430px) 280px;
          gap: 22px;
          align-items: center;
          justify-content: center;
        }

        .side-panel {
          border-radius: 28px;
          background: rgba(255,255,255,0.06);
          border: 1px solid rgba(255,255,255,0.08);
          padding: 20px;
          color: #e5e7eb;
          box-shadow: inset 0 1px 0 rgba(255,255,255,0.04);
        }

        .side-title {
          font-size: 18px;
          font-weight: 800;
          margin: 0 0 12px;
        }

        .side-text {
          margin: 0;
          font-size: 14px;
          line-height: 1.55;
          color: rgba(255,255,255,0.75);
        }

        .tip-list {
          display: grid;
          gap: 10px;
          margin-top: 14px;
        }

        .tip-item {
          padding: 12px 14px;
          border-radius: 18px;
          background: rgba(255,255,255,0.05);
          border: 1px solid rgba(255,255,255,0.06);
          font-size: 13px;
          line-height: 1.4;
        }

        .top-bar {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          z-index: 12;
          padding: 16px 16px 0;
          pointer-events: none;
        }

        .progress-row {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 6px;
          margin-bottom: 12px;
        }

        .photo-progress {
          height: 4px;
          border-radius: 999px;
          background: rgba(255,255,255,0.24);
          overflow: hidden;
          transition: 0.25s ease;
        }

        .photo-progress.active {
          background: linear-gradient(90deg, #ffffff, #c7d2fe);
          box-shadow: 0 0 16px rgba(255,255,255,0.45);
        }

        .floating-name {
          display: inline-flex;
          flex-direction: column;
          gap: 4px;
          max-width: calc(100% - 8px);
          padding: 14px 16px;
          border-radius: 22px;
          background: rgba(10, 15, 28, 0.5);
          border: 1px solid rgba(255,255,255,0.12);
          backdrop-filter: blur(16px);
          box-shadow: 0 10px 35px rgba(0,0,0,0.25);
        }

        .floating-name strong {
          font-size: 28px;
          line-height: 1;
          font-weight: 900;
          letter-spacing: -0.03em;
          display: flex;
          align-items: center;
          gap: 10px;
          flex-wrap: wrap;
        }

        .floating-sub {
          font-size: 13px;
          color: rgba(255,255,255,0.82);
        }

        .premium-badge {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          padding: 6px 10px;
          border-radius: 999px;
          font-size: 11px;
          font-weight: 800;
          background: linear-gradient(135deg, rgba(255,255,255,0.22), rgba(255,255,255,0.08));
          border: 1px solid rgba(255,255,255,0.2);
        }

        .card {
          position: relative;
          width: 100%;
          height: 100%;
          overflow: hidden;
          border-radius: 32px;
          user-select: none;
        }

        .card.pulse-like {
          animation: likePulse 0.55s ease;
        }

        .card.pulse-dislike {
          animation: dislikePulse 0.55s ease;
        }

        @keyframes likePulse {
          0% { transform: scale(1); }
          50% { transform: scale(1.018); box-shadow: inset 0 0 0 2px rgba(34,197,94,0.35); }
          100% { transform: scale(1); }
        }

        @keyframes dislikePulse {
          0% { transform: scale(1); }
          50% { transform: scale(1.018); box-shadow: inset 0 0 0 2px rgba(244,63,94,0.35); }
          100% { transform: scale(1); }
        }

        .media-zone {
          position: absolute;
          inset: 0;
          cursor: grab;
          background: #0f172a;
        }

        .media-zone:active {
          cursor: grabbing;
        }

        .media-image {
          position: absolute;
          inset: 0;
          width: 100%;
          height: 100%;
          object-fit: cover;
          transform: scale(1.02);
        }

        .overlay-top {
          position: absolute;
          inset: 0;
          background:
            linear-gradient(180deg, rgba(3,7,18,0.82) 0%, rgba(3,7,18,0.36) 16%, rgba(3,7,18,0) 32%),
            linear-gradient(0deg, rgba(3,7,18,0.9) 0%, rgba(3,7,18,0.55) 24%, rgba(3,7,18,0.15) 44%, rgba(3,7,18,0) 62%);
          pointer-events: none;
        }

        .reaction-badge {
          position: absolute;
          top: 118px;
          left: 50%;
          transform: translateX(-50%) scale(0.9);
          z-index: 13;
          padding: 14px 18px;
          border-radius: 18px;
          font-size: 18px;
          font-weight: 900;
          letter-spacing: 0.04em;
          opacity: 0;
          animation: reactionIn 0.45s ease forwards;
          backdrop-filter: blur(14px);
          border: 1px solid rgba(255,255,255,0.2);
        }

        .reaction-badge.like {
          background: rgba(34, 197, 94, 0.18);
          box-shadow: 0 10px 40px rgba(34,197,94,0.24);
        }

        .reaction-badge.dislike {
          background: rgba(244, 63, 94, 0.18);
          box-shadow: 0 10px 40px rgba(244,63,94,0.22);
        }

        @keyframes reactionIn {
          0% {
            opacity: 0;
            transform: translateX(-50%) translateY(10px) scale(0.9);
          }
          100% {
            opacity: 1;
            transform: translateX(-50%) translateY(0) scale(1);
          }
        }

        .bottom-panel {
          position: absolute;
          left: 0;
          right: 0;
          bottom: 0;
          z-index: 11;
          padding: 0 16px 18px;
        }

        .info-card {
          position: relative;
          border-radius: 28px;
          background: rgba(7, 12, 24, 0.52);
          border: 1px solid rgba(255,255,255,0.12);
          backdrop-filter: blur(16px);
          box-shadow: 0 20px 50px rgba(0,0,0,0.3);
          overflow: hidden;
        }

        .info-header {
          position: sticky;
          top: 0;
          z-index: 3;
          padding: 16px 16px 10px;
          background: linear-gradient(180deg, rgba(12,18,35,0.92), rgba(12,18,35,0.8));
          border-bottom: 1px solid rgba(255,255,255,0.08);
        }

        .info-header-name {
          display: flex;
          align-items: center;
          gap: 10px;
          flex-wrap: wrap;
          font-weight: 900;
          font-size: 22px;
          line-height: 1.05;
        }

        .info-header-meta {
          margin-top: 6px;
          font-size: 13px;
          color: rgba(255,255,255,0.74);
        }

        .info-scroll {
          max-height: 220px;
          overflow-y: auto;
          overscroll-behavior: contain;
          padding: 12px 16px 118px;
          scrollbar-width: none;
          cursor: grab;
        }

        .info-scroll::-webkit-scrollbar {
          display: none;
        }

        .info-scroll:active {
          cursor: grabbing;
        }

        .chips {
          display: flex;
          flex-wrap: wrap;
          gap: 8px;
          margin-bottom: 12px;
        }

        .chip {
          padding: 9px 12px;
          border-radius: 999px;
          background: rgba(255,255,255,0.08);
          border: 1px solid rgba(255,255,255,0.08);
          color: #f3f4f6;
          font-size: 12px;
          line-height: 1;
          white-space: nowrap;
        }

        .about-title {
          font-size: 12px;
          font-weight: 800;
          color: rgba(255,255,255,0.62);
          letter-spacing: 0.08em;
          text-transform: uppercase;
          margin-bottom: 10px;
        }

        .about-text {
          margin: 0;
          font-size: 15px;
          line-height: 1.55;
          color: rgba(255,255,255,0.92);
        }

        .scroll-hint {
          margin-top: 14px;
          font-size: 12px;
          color: rgba(255,255,255,0.56);
        }

        .action-bar {
          position: absolute;
          left: 16px;
          right: 16px;
          bottom: 16px;
          z-index: 20;
          display: flex;
          justify-content: center;
          gap: 16px;
          pointer-events: none;
        }

        .action-bar-inner {
          display: inline-flex;
          align-items: center;
          gap: 16px;
          padding: 10px 12px;
          border-radius: 999px;
          background: rgba(8, 12, 22, 0.72);
          border: 1px solid rgba(255,255,255,0.12);
          backdrop-filter: blur(18px);
          box-shadow: 0 16px 40px rgba(0,0,0,0.3);
          pointer-events: auto;
        }

        .action-btn {
          width: 68px;
          height: 68px;
          border-radius: 999px;
          border: none;
          outline: none;
          cursor: pointer;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          font-size: 28px;
          font-weight: 900;
          color: white;
          transform: translateY(0) scale(1);
          transition: transform 0.18s ease, box-shadow 0.18s ease, filter 0.18s ease;
          box-shadow: 0 14px 28px rgba(0,0,0,0.25);
        }

        .action-btn:hover {
          transform: translateY(-2px) scale(1.03);
        }

        .action-btn:active {
          transform: translateY(0) scale(0.94);
        }

        .action-btn.like {
          background: radial-gradient(circle at 30% 30%, #ff7ac3, #ff2e7a 62%, #c7004e 100%);
          box-shadow:
            0 14px 30px rgba(255, 46, 122, 0.38),
            inset 0 1px 0 rgba(255,255,255,0.3);
        }

        .action-btn.dislike {
          background: radial-gradient(circle at 30% 30%, #7a94ff, #4462ff 62%, #2337a8 100%);
          box-shadow:
            0 14px 30px rgba(68, 98, 255, 0.38),
            inset 0 1px 0 rgba(255,255,255,0.3);
        }

        .action-labels {
          display: none;
        }

        .tap-zones {
          position: absolute;
          inset: 0;
          z-index: 2;
          display: grid;
          grid-template-columns: 1fr 1fr;
          pointer-events: none;
        }

        .nav-hint {
          position: absolute;
          z-index: 12;
          left: 50%;
          transform: translateX(-50%);
          bottom: 108px;
          padding: 8px 12px;
          border-radius: 999px;
          background: rgba(9, 14, 28, 0.62);
          border: 1px solid rgba(255,255,255,0.1);
          backdrop-filter: blur(12px);
          font-size: 12px;
          color: rgba(255,255,255,0.75);
        }

        .counter-badge {
          position: absolute;
          top: 18px;
          right: 16px;
          z-index: 13;
          padding: 10px 12px;
          border-radius: 999px;
          font-size: 12px;
          font-weight: 800;
          background: rgba(255,255,255,0.1);
          border: 1px solid rgba(255,255,255,0.12);
          backdrop-filter: blur(12px);
        }

        .desktop-actions {
          display: grid;
          gap: 12px;
          margin-top: 18px;
        }

        .secondary-btn {
          width: 100%;
          border: none;
          border-radius: 16px;
          padding: 14px 16px;
          font-weight: 800;
          font-size: 14px;
          color: white;
          cursor: pointer;
          background: rgba(255,255,255,0.08);
          border: 1px solid rgba(255,255,255,0.08);
          transition: transform 0.18s ease, background 0.18s ease;
        }

        .secondary-btn:hover {
          transform: translateY(-1px);
          background: rgba(255,255,255,0.12);
        }

        .legend {
          display: flex;
          flex-wrap: wrap;
          gap: 8px;
          margin-top: 14px;
        }

        .legend-item {
          padding: 8px 10px;
          border-radius: 14px;
          background: rgba(255,255,255,0.05);
          border: 1px solid rgba(255,255,255,0.06);
          font-size: 12px;
          color: rgba(255,255,255,0.72);
        }

        @media (max-width: 899px) {
          .desktop-layout {
            display: block;
          }

          .side-panel {
            display: none;
          }

          .phone-frame {
            width: min(100%, 430px);
            height: min(100vh - 12px, 900px);
            border-radius: 28px;
          }

          .floating-name strong {
            font-size: 25px;
          }

          .action-btn {
            width: 64px;
            height: 64px;
          }

          .info-scroll {
            max-height: 250px;
          }
        }

        @media (max-width: 480px) {
          .app-shell {
            padding: 6px;
          }

          .phone-frame {
            width: 100%;
            height: calc(100vh - 12px);
            border-radius: 24px;
          }

          .top-bar {
            padding: 12px 12px 0;
          }

          .bottom-panel {
            padding: 0 12px 12px;
          }

          .floating-name {
            padding: 12px 14px;
            border-radius: 20px;
          }

          .floating-name strong {
            font-size: 23px;
          }

          .info-header-name {
            font-size: 20px;
          }

          .info-scroll {
            max-height: 230px;
            padding: 12px 14px 116px;
          }

          .action-bar {
            left: 12px;
            right: 12px;
            bottom: 12px;
          }

          .action-bar-inner {
            gap: 14px;
            padding: 10px 12px;
          }

          .action-btn {
            width: 60px;
            height: 60px;
            font-size: 24px;
          }

          .nav-hint {
            bottom: 100px;
            font-size: 11px;
          }
        }
      `}</style>

      <div className="app-shell" onWheel={handleWheel}>
        {isDesktop ? (
          <div className="desktop-wrap">
            <div className="desktop-layout">
              <div className="side-panel">
                <h3 className="side-title">Навигация</h3>
                <p className="side-text">
                  Влево / вправо — фото в анкете.
                  <br />
                  Вверх / вниз — следующий или предыдущий профиль.
                  <br />
                  Внутри анкеты можно отдельно прокручивать информацию.
                </p>

                <div className="tip-list">
                  <div className="tip-item">← → фотографии человека</div>
                  <div className="tip-item">↑ ↓ переключение анкет</div>
                  <div className="tip-item">Колесо мыши по описанию — мягкий скролл</div>
                  <div className="tip-item">Имя и кнопки всегда остаются на месте</div>
                </div>
              </div>

              <div className="phone-frame">
                <div className={`card ${cardPulse}`}>
                  <div
                    className="media-zone"
                    onTouchStart={(e) => onTouchStart(e, "media")}
                    onTouchMove={onTouchMove}
                    onTouchEnd={onTouchEnd}
                    onMouseDown={(e) => onMouseDragStart(e, "media")}
                  >
                    <img
                      className="media-image"
                      src={profile.photos[photoIndex]}
                      alt={`${profile.name} ${photoIndex + 1}`}
                      draggable={false}
                    />
                    <div className="overlay-top" />
                  </div>

                  <div className="top-bar">
                    <div className="progress-row">{progress}</div>

                    <div className="floating-name">
                      <strong>
                        {profile.name}, {profile.age}
                        <span className="premium-badge">PREMIUM</span>
                      </strong>
                      <div className="floating-sub">
                        {profile.city}, {profile.country} · {profile.zodiac}
                      </div>
                    </div>
                  </div>

                  <div className="counter-badge">
                    {profileIndex + 1} / {profiles.length}
                  </div>

                  {reaction && (
                    <div className={`reaction-badge ${reaction}`}>
                      {reaction === "like" ? "ЛАЙК" : "ПРОПУСТИТЬ"}
                    </div>
                  )}

                  <div className="bottom-panel">
                    <div className="info-card">
                      <div className="info-header">
                        <div className="info-header-name">
                          {profile.name}, {profile.age}
                        </div>
                        <div className="info-header-meta">
                          {profile.lookingFor} · {profile.city}, {profile.country}
                        </div>
                      </div>

                      <div
                        ref={infoContentRef}
                        className="info-scroll"
                        data-info-scroll="true"
                        onTouchStart={(e) => onTouchStart(e, "info")}
                        onTouchMove={onTouchMove}
                        onTouchEnd={onTouchEnd}
                        onMouseDown={(e) => onMouseDragStart(e, "info")}
                      >
                        <div className="chips">
                          <span className="chip">Знак: {profile.zodiac}</span>
                          {profile.interests.map((item) => (
                            <span key={item} className="chip">
                              {item}
                            </span>
                          ))}
                        </div>

                        <div className="about-title">О человеке</div>
                        <p className="about-text">{profile.about}</p>

                        <div className="scroll-hint">
                          Небольшой свайп внутри текста — прокрутка информации. Сильный свайп вверх или вниз — следующая или предыдущая анкета.
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="nav-hint">
                    Фото: ← → · Профили: ↑ ↓
                  </div>

                  <div className="action-bar">
                    <div className="action-bar-inner">
                      <button
                        className="action-btn dislike"
                        onClick={handleDislike}
                        aria-label="Пропустить"
                        title="Пропустить"
                      >
                        ✕
                      </button>

                      <button
                        className="action-btn like"
                        onClick={handleLike}
                        aria-label="Лайк"
                        title="Лайк"
                      >
                        ♥
                      </button>
                    </div>
                  </div>
                </div>
              </div>

              <div className="side-panel">
                <h3 className="side-title">Текущая анкета</h3>
                <p className="side-text">
                  <strong>{profile.name}, {profile.age}</strong>
                  <br />
                  {profile.city}, {profile.country}
                  <br />
                  Знак зодиака: {profile.zodiac}
                </p>

                <div className="desktop-actions">
                  <button className="secondary-btn" onClick={prevPhoto}>
                    Предыдущее фото
                  </button>
                  <button className="secondary-btn" onClick={nextPhoto}>
                    Следующее фото
                  </button>
                  <button className="secondary-btn" onClick={prevProfile}>
                    Предыдущий профиль
                  </button>
                  <button className="secondary-btn" onClick={nextProfile}>
                    Следующий профиль
                  </button>
                  <button className="secondary-btn" onClick={() => scrollInfoByStep(-1)}>
                    Прокрутить текст вверх
                  </button>
                  <button className="secondary-btn" onClick={() => scrollInfoByStep(1)}>
                    Прокрутить текст вниз
                  </button>
                </div>

                <div className="legend">
                  {profile.interests.slice(0, 5).map((item) => (
                    <div key={item} className="legend-item">
                      {item}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        ) : (
          <div className="phone-frame">
            <div className={`card ${cardPulse}`}>
              <div
                className="media-zone"
                onTouchStart={(e) => onTouchStart(e, "media")}
                onTouchMove={onTouchMove}
                onTouchEnd={onTouchEnd}
              >
                <img
                  className="media-image"
                  src={profile.photos[photoIndex]}
                  alt={`${profile.name} ${photoIndex + 1}`}
                  draggable={false}
                />
                <div className="overlay-top" />
              </div>

              <div className="top-bar">
                <div className="progress-row">{progress}</div>

                <div className="floating-name">
                  <strong>
                    {profile.name}, {profile.age}
                    <span className="premium-badge">PREMIUM</span>
                  </strong>
                  <div className="floating-sub">
                    {profile.city}, {profile.country} · {profile.zodiac}
                  </div>
                </div>
              </div>

              <div className="counter-badge">
                {profileIndex + 1} / {profiles.length}
              </div>

              {reaction && (
                <div className={`reaction-badge ${reaction}`}>
                  {reaction === "like" ? "ЛАЙК" : "ПРОПУСТИТЬ"}
                </div>
              )}

              <div className="bottom-panel">
                <div className="info-card">
                  <div className="info-header">
                    <div className="info-header-name">
                      {profile.name}, {profile.age}
                    </div>
                    <div className="info-header-meta">
                      {profile.lookingFor} · {profile.city}, {profile.country}
                    </div>
                  </div>

                  <div
                    ref={infoContentRef}
                    className="info-scroll"
                    data-info-scroll="true"
                    onTouchStart={(e) => onTouchStart(e, "info")}
                    onTouchMove={onTouchMove}
                    onTouchEnd={onTouchEnd}
                  >
                    <div className="chips">
                      <span className="chip">Знак: {profile.zodiac}</span>
                      {profile.interests.map((item) => (
                        <span key={item} className="chip">
                          {item}
                        </span>
                      ))}
                    </div>

                    <div className="about-title">О человеке</div>
                    <p className="about-text">{profile.about}</p>

                    <div className="scroll-hint">
                      Небольшой свайп по описанию — скролл текста. Полный свайп вверх/вниз — смена анкеты.
                    </div>
                  </div>
                </div>
              </div>

              <div className="nav-hint">
                Фото: ← → · Профили: ↑ ↓
              </div>

              <div className="action-bar">
                <div className="action-bar-inner">
                  <button
                    className="action-btn dislike"
                    onClick={handleDislike}
                    aria-label="Пропустить"
                    title="Пропустить"
                  >
                    ✕
                  </button>

                  <button
                    className="action-btn like"
                    onClick={handleLike}
                    aria-label="Лайк"
                    title="Лайк"
                  >
                    ♥
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
}
