(function () {
  const imageMap = {
    "Portada_x1.jpg": "WhatsApp Image 2026-08-03 at 7.11.26 PM.jpeg"
  };

  const copy = {
    en: {
      chapter: "A new chapter begins in my story…",
      milestone: "My Sweet Sixteen",
      invitation: "You are invited to celebrate Amanda Marie's Sweet Sixteen.",
      date: "Friday, September 4, 2026",
      reception: "Reception",
      presentation: "Presentation",
      dinner: "Dinner",
      dance: "Dance",
      farewell: "Farewell",
      location: "View location",
      giftTop: "Monetary",
      giftBottom: "Gifts",
      giftIntro: "Your presence is the greatest gift. Should you wish to honor Amanda with another gesture, a monetary gift would be warmly appreciated.",
      envelope: "A card box will be available at the celebration.",
      dressTop: "Dress",
      dressBottom: "Code",
      formal: "Formal",
      formalInfo: "Formal attire requested",
      colors: "Kindly reserve dusty blue and white for Amanda.",
      rsvp: "RSVP details coming soon. Please check back once the family confirms the RSVP contact.",
      gallery: "Photo Gallery"
    },
    es: {
      chapter: "Comienza un nuevo capítulo en mi historia…",
      milestone: "Mis Dulces Dieciséis",
      invitation: "Estás invitado a celebrar los Dulces Dieciséis de Amanda Marie.",
      date: "Viernes 4 de septiembre de 2026",
      reception: "Recepción",
      presentation: "Presentación",
      dinner: "Cena",
      dance: "Baile",
      farewell: "Despedida",
      location: "Ver ubicación",
      giftTop: "Regalos",
      giftBottom: "Monetarios",
      giftIntro: "Tu presencia es el mejor regalo. Si deseas obsequiarle algo más a Amanda, un regalo monetario será recibido con mucho cariño.",
      envelope: "Habrá una caja para tarjetas disponible durante la celebración.",
      dressTop: "Código de",
      dressBottom: "Vestimenta",
      formal: "Formal",
      formalInfo: "Se solicita vestimenta formal",
      colors: "Por favor reserva los colores azul empolvado y blanco para Amanda.",
      rsvp: "Los detalles para confirmar asistencia estarán disponibles pronto.",
      gallery: "Galería de Fotos"
    }
  };

  function language() {
    return window.XV_I18N && window.XV_I18N.getLanguage
      ? window.XV_I18N.getLanguage()
      : "en";
  }

  function text(element, value) {
    if (element && element.textContent !== value) element.textContent = value;
  }

  function replaceImages() {
    document.querySelectorAll("img").forEach((image) => {
      const source = (image.getAttribute("src") || "") + " " + (image.getAttribute("srcset") || "");
      Object.entries(imageMap).forEach(([oldName, newName]) => {
        if (source.includes(oldName)) {
          image.src = "assets/images/" + newName;
          image.removeAttribute("srcset");
        }
      });
    });
  }

  function updateCover(c) {
    const headings = document.querySelectorAll("#Inicio h1");
    text(headings[0], "Sweet Sixteen - Amanda Marie");
    text(headings[1], "09.04.2026");
  }

  function updateChapter(c) {
    const heading = Array.from(document.querySelectorAll("h4")).find((element) => {
      const value = (element.textContent || "").toLowerCase();
      return value.includes("capitulo") || value.includes("capítulo") || value.includes("chapter");
    });
    if (!heading) return;
    const expected = c.chapter + c.milestone;
    if ((heading.textContent || "").replace(/\s+/g, " ").trim() !== expected.replace(/\s+/g, " ").trim()) {
      heading.innerHTML = c.chapter + "<br><span class=\"font-handwriting13 text-4xl\">" + c.milestone + "</span>";
    }
  }

  function updateInvitation(c) {
    const heading = Array.from(document.querySelectorAll("h2")).find((element) => {
      const value = (element.textContent || "").toLowerCase();
      return value.includes("amanda marie");
    });
    text(heading, c.invitation);

    document.querySelectorAll("padres_1_minimalista h3, r_elegance").forEach((element) => {
      element.style.display = "none";
    });
  }

  function updateCountdown(c) {
    const date = Array.from(document.querySelectorAll("h4")).find((element) => {
      const value = (element.textContent || "").toLowerCase();
      return value.includes("september 4, 2026") || value.includes("septiembre de 2026");
    });
    text(date, c.date);
  }

  function updateItinerary(c) {
    const section = document.getElementById("Itinerario");
    if (!section) return;
    const headings = Array.from(section.querySelectorAll("h3"));
    const values = [
      [c.reception, "7:00 p.m."],
      [c.presentation, "8:00 p.m."],
      [c.dinner, "9:00 p.m."],
      [c.dance, "9:30 p.m."],
      [c.farewell, "1:00 a.m."]
    ];
    values.forEach((pair, index) => {
      text(headings[index * 2], pair[0]);
      text(headings[index * 2 + 1], pair[1]);
    });
  }

  function updateVenue(c) {
    const section = document.getElementById("Ubicaciones");
    if (!section) return;
    text(section.querySelector("h2"), c.reception);
    const venue = section.querySelector("h3");
    if (venue && !(venue.textContent || "").includes("5904 West Dr")) {
      venue.innerHTML = "Salón Chapa Dos<br><small class=\"amanda-address\">5904 West Dr · Laredo, TX 78041</small>";
    }
    const link = section.querySelector("a");
    if (link) {
      link.href = "https://www.google.com/maps/search/?api=1&query=Salon+Chapa+Dos+5904+West+Dr+Laredo+TX+78041";
      const label = link.querySelector("h6");
      if (label && !(label.textContent || "").includes(c.location)) {
        const icon = label.querySelector("i");
        label.textContent = c.location + " ";
        if (icon) label.prepend(icon);
      }
    }
  }

  function updateGifts(c) {
    const section = document.getElementById("MesaDeRegalos");
    if (!section) return;
    text(section.querySelector("h1"), c.giftTop);
    text(section.querySelector("h4"), c.giftBottom);
    const messages = section.querySelectorAll("h5");
    text(messages[0], c.giftIntro);
    text(messages[1], c.envelope);
  }

  function updateDressCode(c) {
    const section = document.getElementById("CodigoDeVestimenta");
    if (!section) return;
    const h2 = section.querySelectorAll("h2");
    const h3 = section.querySelectorAll("h3");
    text(h2[0], c.dressTop);
    text(h3[0], c.dressBottom);
    text(h2[1], c.formal);
    text(h3[1], c.formalInfo);
    text(h3[2], c.colors);
  }

  function updateRsvp(c) {
    document.querySelectorAll("#ConfirmAttendance h3").forEach((heading) => {
      const value = (heading.textContent || "").trim().toLowerCase();
      if (value === "no children" || value === "no niños" || value === "no ninos") heading.remove();
    });
    const reminder = Array.from(document.querySelectorAll("h3")).find((element) => {
      const value = (element.textContent || "").toLowerCase();
      return value.includes("rsvp details coming soon") || value.includes("detalles para confirmar");
    });
    text(reminder, c.rsvp);
    document.querySelectorAll("contacto_elegance, #Contacto").forEach((element) => {
      element.style.display = "none";
    });
  }

  function applyEdits() {
    const c = copy[language()] || copy.en;
    replaceImages();
    updateCover(c);
    updateChapter(c);
    updateInvitation(c);
    updateCountdown(c);
    updateItinerary(c);
    updateVenue(c);
    updateGifts(c);
    updateDressCode(c);
    updateRsvp(c);
    text(document.querySelector("#Galeria h1"), c.gallery);
  }

  const styles = document.createElement("style");
  styles.textContent = `
    .bg-primary-500 { background-color: #789bb3 !important; }
    .bg-primary-600 { background-color: #f4f7f8 !important; }
    .bg-primary-200 { background-color: #4f7188 !important; }
    .text-primary-200 { color: #4f7188 !important; }
    .text-primary-500 { color: #789bb3 !important; }
    .text-primary-600 { color: #f4f7f8 !important; }
    .border-primary-200 { border-color: #4f7188 !important; }
    .border-primary-500, .border-primary-600 { border-color: #789bb3 !important; }
    #Inicio img { object-position: 50% 48% !important; }
    #Inicio > div:last-child { text-align: center; }
    counter_8_elegance > scroller > div:first-child,
    counter_8_elegance [style*="background-image"] {
      background-image: url("assets/images/WhatsApp%20Image%202026-08-03%20at%207.11.36%20PM.jpeg") !important;
      background-position: 50% 45% !important;
      background-size: cover !important;
      background-repeat: no-repeat !important;
    }
    #Itinerario > img { filter: hue-rotate(150deg) saturate(.48) brightness(1.08); }
    #Ubicaciones img[alt="Salón"] { width: 100%; max-height: 340px; object-fit: cover; image-rendering: auto; }
    .amanda-address { display: inline-block; margin-top: .55rem; font-family: Arial, sans-serif; font-size: .9rem; font-weight: 400; letter-spacing: .03em; text-transform: none; }
    #MesaDeRegalos h5 { line-height: 1.5; }
    #CodigoDeVestimenta h3:last-child { max-width: 34rem; margin: .5rem auto 0; }
    sugerenciahospedaje_elegance [style*="background-image"]:not([style*="texture.jpg"]) {
      background-image: url("assets/images/WhatsApp%20Image%202026-08-03%20at%207.11.27%20PM.jpeg") !important;
      background-position: 50% 52% !important;
      background-size: cover !important;
      background-repeat: no-repeat !important;
    }
    #Galeria img { object-position: 50% 35%; }
    .carousel-btn { background-color: rgba(79,113,136,.9) !important; }
  `;
  document.head.appendChild(styles);

  const observer = new MutationObserver(applyEdits);
  observer.observe(document.body, { childList: true, subtree: true });
  window.addEventListener("load", applyEdits);
  window.addEventListener("xv-language-change", () => window.setTimeout(applyEdits, 60));
  window.setTimeout(applyEdits, 300);
  window.setTimeout(applyEdits, 1200);
  window.setTimeout(() => observer.disconnect(), 10000);
})();
