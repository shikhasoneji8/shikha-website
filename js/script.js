// Smooth scrolling for navigation links
document.querySelectorAll('header nav a').forEach(link => {
    link.addEventListener('click', e => {
      const href = link.getAttribute('href');
      if (href && href.startsWith('#')) {
        e.preventDefault();
        document.querySelector(href).scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    });
  });
  
  // Active link and section reveal on scroll
  const sections = Array.from(document.querySelectorAll('main section'));
  const navLinks = Array.from(document.querySelectorAll('header nav a'));
  
  const inView = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        // highlight current link
        const id = '#' + entry.target.id;
        navLinks.forEach(a => a.classList.toggle('active', a.getAttribute('href') === id));
      }
    });
  }, { threshold: 0.55 });
  
  sections.forEach(s => {
    s.classList.add('reveal');
    inView.observe(s);
  });
  
  // One-time reveal animation
  const revealObs = new IntersectionObserver((ents) => {
    ents.forEach(ent => {
      if (ent.isIntersecting) {
        ent.target.classList.add('in');
        revealObs.unobserve(ent.target);
      }
    });
  }, { threshold: 0.2 });
  document.querySelectorAll('.reveal').forEach(el => revealObs.observe(el));
  
  // ----------------------
  // Dynamic Content (edit)
  // ----------------------
  const news = [
    { date: 'Aug 2025', title: 'Talk at TEMSCON Global — “Emissions Impossible: Five AI What-If Scenarios”', url: '#' },
    { date: 'Jul 2025', title: 'VLHCC paper reviews received — iterating on human evaluation & policy overlap', url: '#' },
    { date: 'Jun 2025', title: 'Released: GPT-powered Brief Generation pipeline for ADP Help & Support', url: '#' }
  ];
  
  const writing = [
    { title: 'Bridging Text and Context: Ontology for Policy Document Analysis', meta: 'EMNLP 2025 (in prep) • Privacy & NLP', url: '#' },
    { title: 'Did I Really Agree to That? NLP for Legal Policy Overlap', meta: 'VLHCC 2025 — revision', url: '#' },
    { title: 'Emissions Impossible: AI “What-Ifs” for Emission Reduction', meta: 'Position paper • AI for Social Impact', url: '#' }
  ];
  
  // Inject cards
  function makeNewsCard(n) {
    const el = document.createElement('article');
    el.className = 'card';
    el.innerHTML = `
      <div class="meta">${n.date}</div>
      <h3>${n.title}</h3>
      <a href="${n.url}" target="_blank" rel="noopener">Read more</a>
    `;
    return el;
  }
  function makeWritingCard(w) {
    const el = document.createElement('article');
    el.className = 'card';
    el.innerHTML = `
      <h3>${w.title}</h3>
      <div class="meta">${w.meta}</div>
      <a href="${w.url}" target="_blank" rel="noopener">Open</a>
    `;
    return el;
  }
  
  const newsGrid = document.getElementById('newsGrid');
  news.forEach(item => newsGrid.appendChild(makeNewsCard(item)));
  
  const writingGrid = document.getElementById('writingGrid');
  writing.forEach(item => writingGrid.appendChild(makeWritingCard(item)));