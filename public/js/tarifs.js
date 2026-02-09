console.log('🔧 Tarifs.js loaded');

document.addEventListener('DOMContentLoaded', function () {
    console.log('🔧 DOMContentLoaded event fired');

    /**
     * NOUVELLE FONCTION SIMPLIFIÉE POUR LES CARROUSELS
     */
    const initializeSlider = (containerSelector) => {
        const container = document.querySelector(containerSelector);
        if (!container) return;

        const slidesContainer = container.querySelector('.slides, .benefits-grid, .promo-grid');
        const prevBtn = container.querySelector('.slider-arrow.prev');
        const nextBtn = container.querySelector('.slider-arrow.next');

        let currentIndex = 0;
        let slides = [];
        let autoPlayInterval = null;

        const setup = () => {
            const isBanner = container.classList.contains('banner-container');
            const isMobileView = window.innerWidth <= 600;
            const isResponsiveSlider = container.matches('#benefits') || container.matches('#promotions');

            if (isResponsiveSlider && window.innerWidth > 768) {
                if (slidesContainer.style.transform !== '') slidesContainer.style.transform = '';
                if(prevBtn) prevBtn.style.display = 'none';
                if(nextBtn) nextBtn.style.display = 'none';
                return;
            }

            if (isBanner) {
                Array.from(container.querySelectorAll('.slide')).forEach(s => s.style.display = 'none');
                const selector = isMobileView ? '.slide-mobile' : '.slide-desktop';
                slides = Array.from(slidesContainer.children).filter(child => child.matches(selector));
                slides.forEach(s => s.style.display = 'flex');
            } else {
                slides = Array.from(slidesContainer.children);
            }

            if (slides.length <= 1) {
                if(prevBtn) prevBtn.style.display = 'none';
                if(nextBtn) nextBtn.style.display = 'none';
            } else {
                if(prevBtn) prevBtn.style.display = 'block';
                if(nextBtn) nextBtn.style.display = 'block';
            }

            goToSlide(currentIndex, 'instant');
            startAutoPlay();
        };

        const goToSlide = (index, mode = 'animate') => {
            if (!slides || slides.length === 0) return;
            currentIndex = (index + slides.length) % slides.length;

            slidesContainer.style.transition = mode === 'instant' ? 'none' : 'transform 0.5s ease-in-out';
            slidesContainer.style.transform = `translateX(-${currentIndex * 100}%)`;
        };

        const startAutoPlay = () => {
            const intervalTime = container.dataset.interval || 0;
            clearInterval(autoPlayInterval);
            if (intervalTime > 0) {
                autoPlayInterval = setInterval(() => goToSlide(currentIndex + 1), intervalTime);
            }
        };

        if(prevBtn && nextBtn) {
            prevBtn.addEventListener('click', () => {
                goToSlide(currentIndex - 1);
                startAutoPlay();
            });

            nextBtn.addEventListener('click', () => {
                goToSlide(currentIndex + 1);
                startAutoPlay();
            });
        }

        let resizeTimeout;
        window.addEventListener('resize', () => {
            clearTimeout(resizeTimeout);
            resizeTimeout = setTimeout(setup, 200);
        });

        if (container.classList.contains('banner-container')) {
            container.dataset.interval = 5000;
        }

        setup();
    };

    initializeSlider('.banner-container');
    initializeSlider('#benefits');
    initializeSlider('#promotions');

    /**
     * SCRIPT POUR L'ACCORDÉON FAQ (SIMPLIFIÉ)
     */
    document.querySelectorAll('.accordion-item').forEach(item => {
        const header = item.querySelector('.accordion-header');
        if (header) {
            header.addEventListener('click', () => {
                const content = item.querySelector('.accordion-content');
                const isOpen = item.classList.toggle('open');
                header.querySelector('span').textContent = isOpen ? '-' : '+';
                content.style.maxHeight = isOpen ? content.scrollHeight + 'px' : null;
            });
        }
    });

    /**
     * SCRIPT POUR LE TABLEAU DE PRIX (RESTAURÉ ET FONCTIONNEL)
     */
    (function() {
        const individualZonesData = { "Femme": { "Visage": { "Lèvre supérieure": { unit: 34 }, "Menton": { unit: 34 }, "Favoris": { unit: 34 }, "Nez + Narines": { unit: 45 }, "Nuque": { unit: 45 }, "Cou": { unit: 45 }, "Ovale visage": { unit: 56 }, "Visage complet": { unit: 89 }, "Visage + cou": { unit:123 } }, "Haut du corps": { "Aisselles": { unit: 45 }, "Haut des bras": { unit: 56 }, "Avant-bras + mains offertes": { unit: 78 }, "Mains": { unit: 34 }, "Doigts": { unit: 28 }, "Bras complet + mains offertes": { unit:123 }, "Épaules": { unit: 78 }, "Seins": { unit: 56 }, "Mamelons": { unit: 34 }, "Ligne abdominale": { unit: 34 }, "Ventre": { unit: 89 }, "Haut du dos": { unit: 78 }, "Bas du dos": { unit:112 }, "Dos complet": { unit:189 } }, "Maillot": { "Maillot classique": { unit: 56 }, "Maillot échancré": { unit: 78 }, "Maillot complet": { unit: 95 }, "SIF (sillon interfessier)":{ unit: 50 }, "Fesses": { unit: 89 } }, "Jambes": { "Demi-jambes": { unit:145 }, "Pieds": { unit: 45 }, "Orteils": { unit: 28 }, "Jambes complètes": { unit:278 }, "Cuisses": { unit:156 }, "Carré cuisse": { unit:100 } } }, "Homme": { "Visage": { "Contour barbe cou": { unit: 45 }, "Contour barbe joues": { unit: 45 }, "Contour barbe cou + joues":{ unit: 80 }, "Barbe complète": { unit:100 }, "Moustache": { unit: 45 }, "Col de chemise": { unit: 45 }, "Cou": { unit: 45 }, "Nuque": { unit: 45 }, "Oreilles": { unit: 45 }, "Nez + Narines": { unit: 45 }, "Visage complet": { unit:120 } }, "Haut du corps": { "Aisselles": { unit: 67 }, "Haut des bras": { unit: 84 }, "Avant-bras + mains offertes": { unit:112 }, "Mains": { unit: 45 }, "Doigts": { unit: 28 }, "Bras complet + mains offertes": { unit:167 }, "Épaules": { unit: 89 }, "Torse": { unit:123 }, "Ventre": { unit:112 }, "Bas du dos": { unit:112 }, "Haut du dos": { unit:112 }, "Dos complet": { unit:200 } }, "Maillot": { "Maillot complet": { unit:112 }, "Parties génitales": { unit: 89 }, "SIF (sillon interfessier)":{ unit: 56 }, "Fesses": { unit:112 } }, "Jambes": { "Orteils": { unit: 28 }, "Demi-jambes": { unit:223 }, "Jambes complètes": { unit:334 }, "Pieds": { unit: 45 }, "Cuisses": { unit:223 } } } };
        const forfaitsData = { "Femme": { "__header_Forfaits Maillot": {}, "Maillot classique + Aisselles": { unit: 91 }, "Maillot échancré + Aisselles": { unit: 111 }, "Maillot complet + Aisselles": { unit: 126 }, "Maillot classique + SIF": { unit: 95 }, "Maillot échancré + SIF": { unit: 115 }, "Maillot complet + SIF": { unit: 131 }, "Fesses + SIF": { unit: 125 }, "Maillot classique + SIF + Aisselles": { unit: 128 }, "Maillot échancré + SIF + Aisselles": { unit: 147 }, "Maillot complet + SIF + Aisselles": { unit: 162 }, "__header_Forfaits 1/2 Jambes": {}, "1/2 jambes + Aisselles": { unit: 171 }, "1/2 jambes + Maillot classique": { unit: 181 }, "1/2 jambes + Maillot échancré": { unit: 201 }, "1/2 jambes + Maillot complet": { unit: 216 }, "1/2 jambes + Maillot classique + Aisselles": { unit: 218 }, "1/2 jambes + Maillot échancré + Aisselles": { unit: 236 }, "1/2 jambes + Maillot complet + Aisselles": { unit: 242 }, "__header_Forfaits Jambes Entières": {}, "Jambes complètes + Maillot classique": { unit: 301 }, "Jambes complètes + Maillot échancré": { unit: 320 }, "Jambes complètes + Maillot complet": { unit: 336 }, "Jambes complètes + Maillot classique + Aisselles": { unit: 322 }, "Jambes complètes + Maillot échancré + Aisselles": { unit: 341 }, "Jambes complètes + Maillot complet + Aisselles": { unit: 355 } }, "Homme": { "__header_Forfaits Visage": {}, "Visage complet (barbe+moustache+cou+nez)": { unit: 220 }, "Contour barbe cou + joues": { unit: 81 }, "__header_Forfaits Corps": {}, "Torse + Ventre": { unit: 212 }, "Épaules + Nuque": { unit: 121 }, "Haut du dos + Nuque": { unit: 141 }, "Haut du dos + Épaules": { unit: 181 }, "Dos complet + Épaules": { unit: 260 }, "Dos complet + Torse + Ventre": { unit: 455 }, "Dos complet + Épaules + Nuque": { unit: 284 }, "Dos complet + Épaules + Nuque + Haut du bras": { unit: 355 }, "Fesses + SIF": { unit: 151 }, "Maillot complet + SIF": { unit: 151 }, "Avant-bras + Mains": { unit: 141 }, "Bras entiers + Mains": { unit: 191 }, "Dos complet + Épaules + Torse + Ventre": { unit: 520 } } };
        Object.values(individualZonesData).forEach(gender => { Object.values(gender).forEach(category => { Object.values(category).forEach(item => { if(item.unit) { item.total5 = item.unit * 5; item.total5disc = item.total5 * 0.75; item.per5 = item.total5disc / 5; item.total8 = item.unit * 8; item.total8disc = item.total8 * 0.65; item.per8 = item.total8disc / 8; } }); }); });
        const sessionsAndForfait = ['À la séance', '5 séances (-25%)','8 séances (-35%)', 'Forfaits'];
        const genders = ['Femme','Homme'];
        let selOption = sessionsAndForfait[0], selGender = genders[0], selZone;
        const sessEl = document.getElementById('sgz-sessions'), genEl = document.getElementById('sgz-genders'), zoneEl = document.getElementById('sgz-zones'), zoneLabel = document.getElementById('sgz-zones-label'), instEl = document.getElementById('sgz-installments'), tblEl = document.getElementById('sgz-table');
        console.log('🔧 Elements found:', { sessEl: !!sessEl, genEl: !!genEl, zoneEl: !!zoneEl, tblEl: !!tblEl });
        function makeBtns(container, items, selected, onSelect){ if (!container) return; container.innerHTML = ''; items.forEach(item => { const b = document.createElement('button'); b.innerText = item; b.className = 'sgz-btn'; if(item === selected) b.classList.add('selected'); b.onclick = () => { onSelect(item); }; container.appendChild(b); }); }
        function makeZones(){ if (!zoneEl || !individualZonesData[selGender]) return; zoneEl.innerHTML = ''; const currentGenderZones = Object.keys(individualZonesData[selGender]); if (!selZone || !currentGenderZones.includes(selZone)) { selZone = currentGenderZones[0]; } currentGenderZones.forEach(z => { const b = document.createElement('button'); b.innerText = z; b.className = 'sgz-btn sgz-zone-btn'; if(z === selZone) b.classList.add('selected'); b.onclick = () => { selZone = z; update(); }; zoneEl.appendChild(b); }); }
        function makeTable(){ let isForfaitMode = selOption === 'Forfaits', catData, tableTitle = 'Zones du corps'; if (isForfaitMode) { catData = forfaitsData[selGender] || {}; tableTitle = 'Forfaits Disponibles'; } else { catData = individualZonesData[selGender]?.[selZone] || {}; } if (!tblEl) return; tblEl.innerHTML = ''; const tHead = tblEl.createTHead(), headRow = tHead.insertRow(), thZone = document.createElement('th'); thZone.textContent = tableTitle; headRow.appendChild(thZone); const priceHeaderCell = document.createElement('th'); headRow.appendChild(priceHeaderCell); const tBody = tblEl.createTBody(); Object.entries(catData).forEach(([zoneName, vals]) => { if (zoneName.startsWith('__header_')) { const title = zoneName.replace('__header_', '').replace(/_/g, ' '), headerRow = tBody.insertRow(); headerRow.className = 'sgz-subheader'; const th = document.createElement('th'); th.colSpan = 2; th.textContent = title; headerRow.appendChild(th); return; } const tr = tBody.insertRow(); tr.insertCell().textContent = zoneName; const priceCell = tr.insertCell(); if (isForfaitMode) { priceHeaderCell.textContent = 'Prix à la séance'; priceCell.innerHTML = `<span class="price-small">${vals.unit !== undefined ? vals.unit : 'N/A'} €</span>`; } else { if (selOption === sessionsAndForfait[0]) { priceHeaderCell.textContent = 'Prix à la séance'; priceCell.innerHTML = `<span class="price-small">${vals.unit !== undefined ? vals.unit : 'N/A'} €</span>`; } else if (selOption === sessionsAndForfait[1]) { priceHeaderCell.textContent = 'Pack 5 séances (-25%)'; const perSessionText5 = vals.per5 !== undefined ? vals.per5.toFixed(2).replace('.',',') : 'N/A'; priceCell.innerHTML = `<span class="strike">${vals.total5 !== undefined ? vals.total5 : 'N/A'} €</span> <span class="price-large">${vals.total5disc !== undefined ? vals.total5disc.toFixed(2).replace('.', ',') : 'N/A'} €</span><small>(${perSessionText5} €/séance)</small>`; } else if (selOption === sessionsAndForfait[2]) { priceHeaderCell.textContent = 'Pack 8 séances (-35%)'; const perSessionText8 = vals.per8 !== undefined ? vals.per8.toFixed(2).replace('.',',') : 'N/A'; priceCell.innerHTML = `<span class="strike">${vals.total8 !== undefined ? vals.total8 : 'N/A'} €</span> <span class="price-large">${vals.total8disc !== undefined ? vals.total8disc.toFixed(2).replace('.', ',') : 'N/A'} €</span><small>(${perSessionText8} €/séance)</small>`; } } }); }
        function update(){ makeBtns(sessEl, sessionsAndForfait, selOption, v => { selOption = v; if (v !== 'Forfaits' && !selZone) { selZone = Object.keys(individualZonesData[selGender])[0]; } update(); }); if (selOption === 'Forfaits') { if(zoneEl) zoneEl.style.display = 'none'; if(zoneLabel) zoneLabel.style.display = 'none'; if(instEl) instEl.textContent = ''; } else { if(zoneEl) zoneEl.style.display = 'flex'; if(zoneLabel) zoneLabel.style.display = 'block'; makeZones(); if(instEl) { if (selOption === sessionsAndForfait[1] || selOption === sessionsAndForfait[2]) { instEl.textContent = '💳 Paiement possible en 2 ou 3 fois sans frais.'; } else { instEl.textContent = ' '; } } } makeBtns(genEl, genders, selGender, v => { selGender = v; selZone = Object.keys(individualZonesData[selGender])[0]; update(); }); makeTable(); }
        if (sessEl) {
            console.log('🔧 Calling update() to populate pricing table');
            update();
        } else {
            console.error('❌ Element #sgz-sessions not found! Pricing table will not work.');
        }
    })();

});
