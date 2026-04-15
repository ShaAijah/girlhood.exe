document.addEventListener('DOMContentLoaded', () => {
    /* ============================
     =  SPLASH + BOOT SEQUENCE  =
     ============================ */

  const splash = document.getElementById("splash");
  const enterBtn = document.getElementById("enterSite");
  const bootLines = document.querySelectorAll(".boot-line");
  const splashTitle = document.getElementById("splashTitle");
  const splashSub = document.querySelector(".splash-sub");

  if (splash && enterBtn) {

    if (localStorage.getItem("visited")) {
      splash.style.display = "none";
    } else {
      let delay = 0;

      bootLines.forEach((line) => {
        setTimeout(() => {
          line.style.opacity = 1;
          line.style.animation = "typing 1s steps(20, end)";
        }, delay);
        delay += 700;
      });

      setTimeout(() => {
        splashTitle.style.display = "block";
        splashSub.style.display = "block";
        enterBtn.classList.remove("hidden");
      }, delay + 500);
    }

    enterBtn.addEventListener("click", () => {
      splash.classList.add("fade-out");

      setTimeout(() => {
        splash.style.display = "none";
      }, 800);

      localStorage.setItem("visited", "true");
    });
  }
  const glitchTargets = document.querySelectorAll(
  ".title, .gallery-section h2, .avatar-wrap h3, header p"
);

glitchTargets.forEach(el => el.classList.add("glitch"));
  /* ============================
     =  DEFAULT EMBEDDED POSTS   =
     ============================ */
  const posts = [
    {
      id: 'p-9.20.25',
      title: '9.20.25',
      date: '9.20.25',
      mood: 'wistful 🌙',
      song: 'Self Love (with Ari Lennox & Bas feat. Baby Rose) - Dreamville',
      snippet:'this project is an online space imagined as...',
      content: `
      <p> This project is an online space imagined as a diary, a mixtape, and a scrapbook—an ode to Black girlhood, whimsy, and softness. It brings together fragments of memory, emotion, and digital culture to create an immersive environment that honors femininity, self-definition, and interior life beyond struggle-centered narratives. Rather than focusing on survival alone, this work leans into joy, curiosity, and the quiet, often overlooked moments that shape who we are.</p>
     <p>This space functions as both a personal sanctuary and a speculative archive—one that reclaims intimacy, play, and imagination as essential parts of Black girlhood, and in turn, Black womanhood. It resists the pressure to be legible or palatable, instead allowing room for contradiction, vulnerability, and becoming. Through layered visuals, text, and sound, it mimics the feeling of scrolling through memories—both real and imagined—blurring the line between past and present, public and private.</p>
     <p> It is a place to remember, reflect, and remix the many ways we’ve always existed online and offline: through usernames, playlists, inside jokes, aesthetics, and fleeting posts that still hold meaning. Ultimately, this project is about holding space—for softness without apology, for complexity without explanation, and for the beauty of simply being.</p>
      `,
     audio: 'SpotiDown.App - Self Love _with Ari Lennox _ Bas feat. Baby Rose_ - Dreamville.mp3',
      image: 'ari.png'
    },
    {

      id: 'p-92925',
      title: '9.29.25',
      date: '9.29.25',
      mood: 'reflective 💋',
      song: 'Let Me Be Great [Feat. Angélique Kidjo] - Sampa the Great',
      snippet: 'Growing up online felt like living in two worlds...',
      content: `
       <p>thinking about spaces like the tumblr account Black Girl Problems, it really captures this feeling that black girls have always had to be aware of how we’re being read. like even in moments that are supposed to be light or funny, there’s this underlying knowing—of being watched, misunderstood, or needing to soften certain parts of yourself just to be received a certain way.
        <p>i’d scroll for hours looking for girls who looked like me, or at least felt like me awkward, funny, a little dramatic, still figuring it out.</p>
        <p>a lot of those posts felt like inside jokes, but also tiny confessions. things about code-switching, about being “too much” or “not enough” at the same time, about shrinking yourself in certain spaces and then trying to stretch back out when you’re alone or with people who get it. it wasn’t always said directly, but you could feel it in the tone—in the humor, the sarcasm, the repetition.
        <p>it reflects how palatability isn’t just something external, it kind of seeps into your inner world too. you start to question how you come across, how your emotions are perceived, how your softness or your anger might be read before you even get to fully feel it. and over time, that awareness becomes second nature.
        <p>but at the same time, spaces like that also created a kind of release. like even if you’re adjusting yourself out in the world, you could log on and see someone say the exact thing you were thinking but didn’t have words for. it made room for honesty in a way that felt low-stakes but still really real.
        <p>it’s that mix—of humor and heaviness, of performance and truth—that feels important. because even while navigating being “palatable,” black girls have always been finding ways to be seen by each other, even if it’s just in fragments, posts, and passing thoughts that say more than they seem.
      `,
      audio: 'SpotiDown.App - Let Me Be Great _Feat. Angélique Kidjo_ - Sampa the Great.mp3',
      image: 'sampa.jpg'
    },
    {
      id: 'p-10125',
      title: '10.1.25',
      date: '10.1.25',
      mood: 'nostalgic 🦋',
      song: 'Bossy (feat. Too $hort) – Kelis',
      snippet: 'i was obsessed with bratz dolls...',
      content: `
      <p> i was obsessed with bratz dolls growing up. like, fully. i’d sit on the carpet for hours, matching shoes to purses, re-braiding their hair even when it didn’t need fixing, just because it felt satisfying. there was something about them—the clothes, the makeup, the attitude—that felt more real to me than barbie ever did. barbie lived in this polished dream world; bratz felt closer to something i could actually recognize.</p>
      <p> barbie’s world always felt clean and untouchable, like an ad for a life i wasn’t really meant to step into. bratz, on the other hand, had chunky boots, glitter eyeliner, and baby tees that looked like something you’d see at the beauty supply store or on older girls you wanted to be like. they didn’t look exactly like me, but they felt like me in a way i didn’t really have words for back then.</p>
      <p> i didn’t realize it at the time, but bratz were kind of radical. they were multiracial, stylish, a little messy, a little loud, and completely unapologetic in a world that was constantly telling girls of color to tone themselves down. and still, they were criticized for being “too grown” or “too sexual,” like people couldn’t handle the idea of young girls with confidence, lip gloss, and attitude. looking back, i think that’s part of why i was drawn to them so much—they were bold in a way i didn’t feel allowed to be yet.</p>
      <p>years later, finding old bratz fan pages on tumblr and myspace felt like nostalgia and validation all at once. pixel collages, edits of yasmin, sasha, cloe, and jade, captions like “style is power 💅🏽.” it made me realize that what was once dismissed as “too much” was really just creativity, expression, and culture that had always existed, just not always recognized.</p>
      <p>and in a way, the bratz were never the problem. the world just wasn’t ready for them.</p>
      `,
      audio: 'SpotiDown.App - Bossy _feat. Too _hort_ - Kelis.mp3',
      image: 'kelis.jpg'
    },
    {
      id: 'p-10525',
      title: '10.5.25',
      date: '10.5.25',
      mood: 'sentimental 💫',
      song: 'Don’t Touch My Hair – Solange',
      snippet: 'there’s this quiet memory i always go back to...',
      content: `
      <p>there’s this quiet memory i always go back to sitting between my mom’s knees while <em>that’s so raven</em> played in the background, a towel draped around my shoulders, and her parting my hair with the rat-tail comb. i can still feel the cool touch of gel against my scalp, the smell of blue magic, and that mix of love and lowkey pain that only comes with getting your hair done.</p>
      <p>back then, i thought it was just routine something every little girl went through. but now, i realize it was something deeper. those hours spent twisting and braiding were lessons in patience, in care, in culture. my mom never said it out loud, but she was teaching me that beauty wasn’t about looking like everyone else it was about ritual, history, and self-love in a world that tried to tell us otherwise.</p>
      <p>then youtube happened, and suddenly, i had a new set of teachers. i’d watch Taren Guy, Naptural85, and later Jackie Aina showing how to twist, deep condition, and glow up with what we already had. those videos were community. you’d scroll through the comments and see girls saying, “this changed my life” or “i finally love my curls.” it was never just about hair it was about reclaiming something that had been taken or misunderstood.</p>
      <p>to this day, whenever i oil my scalp or take my braids down, i feel like i’m in conversation with generations of women who did the same thing some in kitchens, some in salons, some in front of webcams teaching the world that our beauty doesn’t need permission.</p>
      `,
      audio: 'SpotiDownloader.com - Don\'t Touch My Hair (feat. Sampha) - Solange.mp3',
      image: 'solange.webp'
    },
    {
      id: 'p-10925',
      title: '10.9.25',
      date: '10.9.25',
      mood: 'introspective 🧩',
      song: 'Video Girl – FKA twigs',
      snippet:'being a girl is… complicated. especially being a black girl...',
      content: `
     <p>being a girl is… complicated. especially being a black girl. the world starts making rules for your body before you even know what your body means. i remember being in middle school, wearing a tank top because it was 90 degrees, and being told it was “too distracting.” i didn’t even understand what that meant distracting to who? from what?</p>
      <p>that was the first time i realized that girlhood wasn’t something you fully owned. the way people looked at me teachers, strangers, even relatives made me aware of my body in a way i never asked for. it’s something i’ve been unlearning ever since.</p>
      <p>when i read Tiffany Jackson’s <em>Grown</em> or even the Planned Parenthood article about how school dress codes perpetuate racism and sexism, i felt that same ache. because it’s true black and brown girls are so often seen as older, more adult, more responsible for the way others perceive them. meanwhile, we’re just trying to exist.</p>
      <p>sometimes i think about how long it took me to be soft again. for years, i tried to disappear under baggy clothes and silence. i thought safety meant shrinking. now i know softness is a kind of rebellion wearing what i want, taking up space, laughing loudly, being complicated and unbothered all at once.</p>
      <p>girlhood doesn’t end when you grow up. it just keeps finding new ways to exist inside you.</p>
      `,
      audio: 'SpotiDown.App - Video Girl - FKA twigs.mp3',
      image: 'fka.jpg'
    },
    {
      id: 'p-101125',
      title: '10.11.25',
      date: '10.11.25',
      mood: 'nostalgic 💭',
      song: 'Electric Lady (feat. Solange) – Janelle Monáe',
      snippet: 'i used to lose entire afternoons to girlsgogames.com...',
      content: `
      <p>i used to lose entire afternoons to girlsgogames.com. i’d sit in front of the family computer, that chunky monitor humming, and click through outfit after outfit, hair after hair, face after face. it was like being a stylist for a world that didn’t exist or maybe one i wished did.</p>
      <p>but even in those fantasy worlds, the same reality crept in: none of the characters ever looked like me. the hair was always straight, or maybe “wavy” if the game was being generous. the skin tones stopped at “tan.” i’d still play for hours, picking the most racially ambiguous avatar and pretending it was me.</p>
      <p>i think that’s why i loved customizing things so much. it was the one place where i could tweak and change and dream about representation that didn’t exist yet. years later, when indie creators started releasing games with dark-skinned avatars, 4c curls, or box braids, it felt like something had come full circle.</p>
      <p>those simple pixelated games taught me design, color, patience but they also taught me imagination as survival. to make space for myself where none was offered. to build a softer world, one outfit at a time.</p>
      `,
      audio: 'SpotiDown.App - Electric Lady _feat. Solange_ - Janelle Monáe.mp3',
      image: 'JanelleMonáe.png'
    },
     {
      id: 'p-102025',
      title: '10.20.25',
      date: '10.20.25',
      mood: 'grateful 💖',
      song: 'Self Love (with Ari Lennox & Bas feat. Baby Rose)',
      snippet:'i’ve been scrolling through these old posts...',
      content: `
        <p>sometimes i wonder how much of me was shaped by the internet how many of my thoughts, insecurities, even my sense of beauty came from trying to find a reflection in pixels and comment sections. and still, i wouldn’t trade it.</p>
        <p>because somewhere between the youtube tutorials, the tumblr reblogs, and the myspace surveys, i found pieces of myself i didn’t even know i was looking for. i think that’s what being a black girl online taught me that we’ve always made space out of nothing. we built whole communities from gifs and usernames.</p>
        <p>we turned “representation” into inside jokes, memes, and care posts. we taught each other how to love our curls, how to speak up, how to be soft without apology.</p>
        <p>now, things look different. the feeds move faster. everything’s curated and polished. but i still miss when the internet felt like a bedroom messy, personal, full of half-thoughts and heart emojis. when people shared because they needed to, not because they had to.</p>
        <p>so maybe this is my way of getting back to that a digital diary that doesn’t need to be perfect, just honest.</p>
        <p>if you’ve read this far, thank you. for real.</p>
        <p>this space started out as me trying to remember who i was — but now, it feels more like a love letter to every black girl who ever felt too awkward, too loud, too soft, or too much.</p>
      
      `,
      audio: 'SpotiDown.App - Self Love _with Ari Lennox _ Bas feat. Baby Rose_ - Dreamville.mp3',
      image: 'ari.png'
    },
    {
      id: 'p-4.5.26',
      title: '4.5.26',
      date: '4.5.26',
      mood: 'poetic 🌸',
      song: 'Garden Lady - Smino',
      snippet: 'sometimes i think about how much representation really shapes the way you see yourself...',
      content: `
      <p> sometimes i think about how much representation really shapes the way you see yourself—not just in a “visibility matters” kind of way, but in a possibility way.</p>
      <p>like, when the only versions of Black people you see are rooted in trauma, hyper-masculinity, or being exceptional just to be valued, it starts to feel like those are the only ways you’re allowed to exist. especially when you’re younger. it quietly limits what you think your life can look like, who you’re allowed to become.</p>
      <p>and i don’t think we talk enough about how important it is to see Black whimsy. not just survival or strength, but softness, weirdness, imagination. the freedom to be awkward, nerdy, artistic, shy, loud, tender—all of it. to exist without having to explain yourself or turn your identity into something digestible.</p.
      <p>because the truth is, Blackness has never been one thing. it’s never been a monolith. we’ve always been expansive, creative, layered. it’s just that not all of those versions get shown or valued the same way.</p>
      <p>and then there’s the other layer of it—how Black culture is so often overlooked until it gets picked up and validated by white institutions. suddenly it’s “new” or “cool,” even though it’s been here, alive and evolving. that cycle of erasure and appropriation is exhausting, but it also makes moments of authentic representation feel even more important.</p>
      <p>i think that’s why spaces that center Black whimsy matter so much. they’re not just aesthetic—they’re a kind of reclamation. a way of saying: we’ve always been here, dreaming, creating, existing beyond what you expected.</p>
      <p>because media doesn’t just reflect reality, it shapes it. it teaches entire generations how to see themselves. and i think we deserve to see ourselves as  limitless.</p>
      `,
      audio: 'SpotiDown.App - Garden Lady - Smino.mp3',
      image: 'smino.jpg'
    }
    
  ];

  /* ================ */
  /* DOM references  */
  /* ================ */
  const postsContainer = document.querySelector('.posts');
  const modal = document.getElementById('modal');
  const sheetContent = document.getElementById('sheetContent');

  const newPostBtn = document.getElementById('newPostBtn');
  const entryModal = document.getElementById('entryModal');
  const closeEntryModal = document.getElementById('closeEntryModal');
  const saveEntry = document.getElementById('saveEntry');

  /* ============================
     =  localStorage handling   =
     ============================ */
  const savedPosts = JSON.parse(localStorage.getItem('userPosts')) || [];
  const allPosts = [...posts, ...savedPosts];

  /* ============================
     =  Helpers                 =
     ============================ */
  function escapeHtml(unsafe) {
    if (!unsafe) return '';
    return unsafe
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;")
      .replace(/'/g, "&#039;");
  }

  function stripHtml(html) {
    if (!html) return '';
    return html.replace(/<\/?[^>]+(>|$)/g, "");
  }

  /* ============================
     =  Render post grid         =
     ============================ */
  function renderPosts() {
    postsContainer.innerHTML = allPosts
      .map(p => `
        <div class='post' data-id='${p.id}' style="--rand:${Math.random()}">
          <span class='sticker'>${p.mood || ''}</span>
          <div class='title'>${escapeHtml(p.title)}</div>
          <div class='snippet'>
            ${p.snippet ? escapeHtml(p.snippet) : (p.content ? stripHtml(p.content).slice(0, 120) + '...' : '')}
          </div>
        </div>
      `)
      .join('');
  }

  renderPosts();

  /* ============================
     =  Open post modal logic   =
     ============================ */
  postsContainer.addEventListener('click', e => {
    const card = e.target.closest('.post');
    if (!card) return;
    const post = allPosts.find(x => x.id == card.dataset.id);
    if (post) openPost(post);
  });

  function openPost(post) {
    const isUserPost = savedPosts.some(sp => sp.id === post.id);

    sheetContent.innerHTML = `
      <div class='post-header'>
        <h2>${escapeHtml(post.title)}</h2>
        <div><em>${post.date} | Mood: ${escapeHtml(post.mood || '')}</em></div>
      </div>

      <div class='song-box'>
        ${post.image ? `<img src="${post.image}" class="album-thumb" alt="album cover">` : ''}
        <div class="song-info">
          <strong>${escapeHtml(post.song || '')}</strong>
          ${post.audio ? `<audio controls src="${post.audio}" class="player"></audio>` : ''}
        </div>
      </div>

      <div class='post-content'>${post.content || ''}</div>

      <div class='modal-actions' style="margin-top:16px; display:flex; gap:12px; justify-content:flex-end;">
        ${isUserPost ? `<button class='btn delete-btn' id='deletePostBtn' data-id='${post.id}'>Delete ✦</button>` : ''}
        <button class='btn muted' id='closeModalBtn'>Close ✦</button>
      </div>
    `;

    modal.classList.add('open');

    // Close button
    const closeBtn = document.getElementById('closeModalBtn');
    if (closeBtn) closeBtn.addEventListener('click', () => modal.classList.remove('open'));

    // Background click closes
    modal.addEventListener('click', function modalBgHandler(e) {
      if (e.target === modal) {
        modal.classList.remove('open');
        modal.removeEventListener('click', modalBgHandler);
      }
    });

    // Delete button
    const deleteBtn = document.getElementById('deletePostBtn');
    if (deleteBtn) {
      deleteBtn.addEventListener('click', () => {
        if (!confirm('Delete this post?')) return;
        const id = deleteBtn.dataset.id;

        const index = savedPosts.findIndex(p => p.id === id);
        if (index !== -1) {
          savedPosts.splice(index, 1);
          localStorage.setItem('userPosts', JSON.stringify(savedPosts));
        }

        const allIndex = allPosts.findIndex(p => p.id === id);
        if (allIndex !== -1) allPosts.splice(allIndex, 1);

        modal.classList.remove('open');
        renderPosts();
      });
    }
  }

  /* ============================
     =  NEW ENTRY / SAVE HANDLER =
     ============================ */
  newPostBtn.addEventListener('click', () => {
    document.getElementById('entryTitle').value = '';
    document.getElementById('entryMood').value = '';
    document.getElementById('entrySong').value = '';
    document.getElementById('entryAudio').value = '';
    document.getElementById('entrySnippet').value = '';
    entryModal.classList.add('open');
  });

  closeEntryModal.addEventListener('click', () => {
    entryModal.classList.remove('open');
  });

  saveEntry.addEventListener('click', () => {
    const title = document.getElementById('entryTitle').value.trim();
    const mood = document.getElementById('entryMood').value.trim();
    const song = document.getElementById('entrySong').value.trim();
    const audio = document.getElementById('entryAudio').value.trim();
    const snippetText = document.getElementById('entrySnippet').value.trim();

    if (!title || !snippetText) {
      alert('Please provide a title and some content for your entry.');
      return;
    }

    const contentHtml = `<p>${escapeHtml(snippetText)}</p>`;

    const newPost = {
      id: `p-${Date.now()}`,
      title,
      date: new Date().toLocaleDateString(),
      mood: mood || '📝',
      song,
      snippet: stripHtml(contentHtml).slice(0, 140),
      content: contentHtml,
      audio,
      image: ''
    };

    savedPosts.push(newPost);
    localStorage.setItem('userPosts', JSON.stringify(savedPosts));

    allPosts.push(newPost);
    renderPosts();
    entryModal.classList.remove('open');
  });

  /* ============================
     =  CHARACTER SLIDER         =
     ============================ */
  const activeCharacter = document.getElementById('activeCharacter');
  const characterName = document.getElementById('characterName');
  const prevChar = document.getElementById('prevChar');
  const nextChar = document.getElementById('nextChar');

  const characterData = [
    { name: '💅🏽', src: '1.png', cursor: '💅🏽', theme: '#eb46b7ff' },
    { name: '🌸', src: '2.png', cursor: '🌸', theme: '#b63488ff' },
    { name: '🖤', src: '3.png', cursor: '🖤', theme: '#4d0e64ff' },
    { name: '✨', src: '5.png', cursor: '✨', theme: '#dab56dff' },
  ];

  let currentChar = 0;

  function updateCharacter() {
    const avatarBox = document.querySelector('.current-avatar');
    avatarBox.classList.add('out');
    setTimeout(() => {
      const char = characterData[currentChar];
      activeCharacter.src = char.src;
      characterName.textContent = char.name;

      const cursorSVG = encodeURIComponent(
        `<svg xmlns='http://www.w3.org/2000/svg' height='32' width='32'><text y='22' font-size='20'>${char.cursor}</text></svg>`
      );
      const cursorData = `url("data:image/svg+xml;utf8,${cursorSVG}") 0 0, auto`;

      document.body.style.cursor = cursorData;
      document.querySelectorAll('*').forEach(el => (el.style.cursor = cursorData));

      document.body.style.backgroundColor = char.theme + '55';
      document.querySelectorAll('.btn').forEach(btn => {
        btn.style.boxShadow = `0 0 15px ${char.theme}, inset 0 0 5px #fff`;
      });
      activeCharacter.style.boxShadow = `0 0 25px ${char.theme}, inset 0 0 6px #fff`;
      activeCharacter.style.borderColor = char.theme;
      characterName.style.textShadow = `0 0 8px ${char.theme}`;

      avatarBox.classList.remove('out');
      avatarBox.classList.add('in');
    }, 200);
  }

  prevChar.addEventListener('click', () => {
    currentChar = (currentChar - 1 + characterData.length) % characterData.length;
    updateCharacter();
  });

  nextChar.addEventListener('click', () => {
    currentChar = (currentChar + 1) % characterData.length;
    updateCharacter();
  });

  updateCharacter();

  /* ============================
     =  GALLERY LIGHTBOX LOGIC   =
     ============================ */
  const galleryImages = document.querySelectorAll('.gallery-item img');
  const mediaModal = document.getElementById('mediaModal');
  const mediaContent = document.getElementById('mediaContent');
  const mediaDesc = document.getElementById('mediaDesc');
  const closeMediaModal = document.getElementById('closeMediaModal');

  galleryImages.forEach(img => {
    img.addEventListener('click', () => {
      mediaContent.innerHTML = `
        <div class="bling-frame">
          <img src="${img.src}" alt="${img.alt}">
        </div>
      `;
      mediaDesc.textContent = img.alt || 'Untitled image';
      mediaModal.classList.add('open');
    });
  });

  if (closeMediaModal) {
    closeMediaModal.addEventListener('click', () => mediaModal.classList.remove('open'));
  }

  mediaModal.addEventListener('click', e => {
    if (e.target === mediaModal) mediaModal.classList.remove('open');
  });
});
document.addEventListener("mousemove", e => {
  const sparkle = document.createElement("div");
  sparkle.className = "sparkle";
  sparkle.style.left = e.pageX + "px";
  sparkle.style.top = e.pageY + "px";
  document.body.appendChild(sparkle);

  setTimeout(() => sparkle.remove(), 600);
});
const heartContainer = document.createElement("div");
heartContainer.className = "heart-layer";
document.body.appendChild(heartContainer);

function spawnHeart() {
  const heart = document.createElement("div");
  heart.className = "heart";
  heart.innerHTML = ["💖","💅🏽","✨","🖤"][Math.floor(Math.random()*4)];

  heart.style.left = Math.random() * 100 + "vw";
  heart.style.fontSize = (12 + Math.random()*20) + "px";
  heart.style.animationDuration = (3 + Math.random()*4) + "s";

  heartContainer.appendChild(heart);

  setTimeout(() => heart.remove(), 7000);
}
setInterval(spawnHeart, 200);
// PLAYLIST FUNCTION
const player = document.getElementById("audioPlayer");
const songs = document.querySelectorAll(".playlist li");
const title = document.getElementById("songTitle");

const playBtn = document.getElementById("playBtn");
const pauseBtn = document.getElementById("pauseBtn");
const stopBtn = document.getElementById("stopBtn");

songs.forEach(song => {
  song.addEventListener("click", () => {

    const src = song.getAttribute("data-src");
    const name = song.textContent;

    player.src = src;
    title.textContent = name;

    player.play();
  });
});

playBtn.onclick = () => player.play();
pauseBtn.onclick = () => player.pause();

stopBtn.onclick = () => {
  player.pause();
  player.currentTime = 0;
};
const cd = document.querySelector(".cd");

player.addEventListener("play", () => {
  document.body.classList.add("music-playing");
});

player.addEventListener("pause", () => {
  document.body.classList.remove("music-playing");
});
const entrySongs = document.querySelectorAll(".entry-song");

entrySongs.forEach(song => {

  song.addEventListener("click", () => {

    const src = song.getAttribute("data-src");
    const titleText = song.textContent.trim();

    player.src = src;
    player.play();

    document.getElementById("songTitle").textContent = titleText;

  });

});
const messages = [
  "💖 you look cute today",
  "✨ drink water pls",
  "💅🏽 main character energy",
  "🖤 soft era activated"
];

function randomPopup() {
  const msg = document.createElement("div");
  msg.className = "popup-msg";
  msg.textContent = messages[Math.floor(Math.random()*messages.length)];

  msg.style.left = Math.random()*80 + "vw";
  msg.style.top = Math.random()*80 + "vh";

  document.body.appendChild(msg);

  setTimeout(() => msg.remove(), 3000);
}

setInterval(randomPopup, 8000);
const hoverSound = new Audio("shimmer.mp3"); // add a soft click / sparkle sound
hoverSound.volume = 0.2;

document.querySelectorAll("button, .post, .gallery-item img").forEach(el => {
  el.addEventListener("mouseenter", () => {
    hoverSound.currentTime = 0;
    hoverSound.play();
  });
});
document.querySelectorAll(".gallery-item").forEach(item => {
  const tilt = (Math.random() * 4 - 2); // -2 to +2 deg
  item.style.transform = `rotate(${tilt}deg)`;
  /* ============================
   =  SPLASH + BOOT SEQUENCE  =
   ============================ */

const splash = document.getElementById("splash");
const enterBtn = document.getElementById("enterSite");
const bootLines = document.querySelectorAll(".boot-line");
const splashTitle = document.getElementById("splashTitle");
const splashSub = document.querySelector(".splash-sub");

// if user already visited → skip splash
if (localStorage.getItem("visited")) {
  splash.style.display = "none";
} else {

  let delay = 0;

  // animate boot lines one by one
  bootLines.forEach((line) => {
    setTimeout(() => {
      line.style.opacity = 1;
      line.style.animation = "typing 1s steps(20, end)";
    }, delay);

    delay += 700;
  });

  // after boot finishes → show title + button
  setTimeout(() => {
    splashTitle.style.display = "block";
    splashSub.style.display = "block";

    enterBtn.classList.remove("hidden");
  }, delay + 500);
}

// enter button → fade out splash
enterBtn.addEventListener("click", () => {
  splash.classList.add("fade-out");

  setTimeout(() => {
    splash.style.display = "none";
  }, 800); // match CSS fade duration

  localStorage.setItem("visited", "true");
});
});

