/* ===== EDIT THESE ===== */
const CFG={email:'aaveshlabs@gmail.com',
  /* Get a free key at https://web3forms.com and paste it here */
  formKey:'946d01da-5a34-4f00-bd97-64e7f2f9d166',
  links:{
  kps:'https://kerala-public-school.netlify.app/',
  nexionix:'https://nexionix-premium-hotel.vercel.app/',
  github:'https://github.com/aaveshsinga',
  linkedin:'https://www.linkedin.com/in/aaveshsinga/',
  contra:'https://contra.com/aaveshsinga/work?r=aaveshsinga',
  instagram:'https://www.instagram.com/aaveshsinga/',
  devto:'https://dev.to/aaveshsinga',
  youtube:'https://www.youtube.com/@aaveshSinga',
  x:'https://x.com/aaveshsinga'}};
/* ====================== */
(()=>{
const $=(s,c=document)=>c.querySelector(s),$$=(s,c=document)=>[...c.querySelectorAll(s)];
/* basic UI: works even if the 3D library cannot load */
const basic=()=>{
$('#mail').textContent=CFG.email;
$$('[data-link]').forEach(a=>{a.href=CFG.links[a.dataset.link]||'#';if(a.getAttribute('href')==='#'){a.removeAttribute('href');a.classList.add('off');a.textContent='Link coming soon'}});
let tt;$('#copy').onclick=async()=>{try{await navigator.clipboard.writeText(CFG.email)}catch(e){}const t=$('#toast');t.classList.add('show');clearTimeout(tt);tt=setTimeout(()=>t.classList.remove('show'),2200)};
const io=new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting){e.target.classList.add('in');io.unobserve(e.target)}}),{threshold:.12});
$$('[data-rv]').forEach(el=>io.observe(el));
$$('.card').forEach(c=>{c.addEventListener('pointermove',e=>{if(e.pointerType!=='mouse')return;const r=c.getBoundingClientRect(),x=(e.clientX-r.left)/r.width,y=(e.clientY-r.top)/r.height;
  c.style.setProperty('--mx',x*100+'%');c.style.setProperty('--my',y*100+'%');c.style.transform=`perspective(900px) rotateY(${(x-.5)*12}deg) rotateX(${(.5-y)*12}deg)`});
  c.addEventListener('pointerleave',()=>c.style.transform='')});
const LG=[['pr','whoami'],['ok','aavesh singa: frontend developer'],['mu','training: Projection Placement Institute'],['pr','ls projects/'],['ok','kerala-public-school/'],['ok','nexionix-premium-hotel/'],['pr','cat stack.txt'],['mu','html5 css3 bootstrap5'],['mu','python (learning)'],['ok','status: open to work']];
const lg=$('#log');let lgi=0;const lgPush=()=>{const [c,t]=LG[lgi++%LG.length];const d=document.createElement('div');d.className='tl '+c;d.textContent=t;lg.append(d);while(lg.children.length>9)lg.firstChild.remove()};
for(let i=0;i<5;i++)lgPush();setInterval(lgPush,1100);
/* contact form: messages arrive in your Gmail through Web3Forms */
const form=$('#form'),st=$('#status'),sbtn=$('#send');
const say=(t,c)=>{st.textContent=t;st.className=c||''};
form.addEventListener('submit',async e=>{
  e.preventDefault();
  const f=form.elements;
  if(f['name'].value.trim().length<2){say('Please enter your name.','err');f['name'].focus();return}
  if(!/^[^@\s]+@[^@\s]+\.[a-zA-Z]{2,}$/.test(f['email'].value.trim())){say('Please enter a valid email, like name@gmail.com.','err');f['email'].focus();return}
  if(f['message'].value.trim().length<5){say('Please write your message.','err');f['message'].focus();return}
  sbtn.disabled=true;say('Sending...');
  try{
    const data=Object.fromEntries(new FormData(form));
    data.access_key=CFG.formKey;data.subject='New message from your portfolio';
    const r=await fetch('https://api.web3forms.com/submit',{method:'POST',headers:{'Content-Type':'application/json',Accept:'application/json'},body:JSON.stringify(data)});
    const d=await r.json();
    if(d.success){form.reset();say('Message sent. I will reply to your email soon.','ok')}
    else say('The message could not be sent. Please email me directly instead.','err');
  }catch(err){say('No connection. Please check your internet and try again.','err')}
  finally{sbtn.disabled=false}
});
};
basic();
if(typeof THREE==='undefined'){const l=$('#loader');if(l)l.classList.add('done');return}
const T=THREE,V=(x,y,z)=>new T.Vector3(x,y,z),clamp=(v,a,b)=>Math.min(b,Math.max(a,v));
const panels=[],N=9;
const COL=['#06b6d4','#8b5cf6','#22d3ee','#d4a63a','#c084fc','#22d3ee','#06b6d4','#8b5cf6','#06b6d4'].map(c=>new T.Color(c));

/* content wiring */


/* split headings into letters so each letter flies at its own speed */
const wrap=(node,arr)=>{[...node.childNodes].forEach(n=>{if(n.nodeType===3){const f=document.createDocumentFragment();
  n.textContent.split(/(\s+)/).forEach(w=>{if(!w)return;if(/^\s+$/.test(w)){f.append(' ');return}
    const s=document.createElement('span');s.className='w';s.setAttribute('aria-hidden','true');
    [...w].forEach(ch=>{const c=document.createElement('span');c.className='c';c.textContent=ch;s.append(c);arr.push(c)});f.append(s)});n.replaceWith(f)}
  else if(n.nodeType===1&&n.tagName!=='BR')wrap(n,arr)})};
panels.forEach(p=>{p.ch=[];$$('h1,h2',p).forEach(h=>{h.setAttribute('aria-label',h.textContent.replace(/\s+/g,' ').trim());wrap(h,p.ch)});p.ch.forEach((c,i)=>c._k=.5+(i%7)*.15)});

/* loader */
const L=$('#loader'),pc=$('#pct');let ln=0;setTimeout(()=>L.classList.add('done'),10000);
const liv=setInterval(()=>{ln=Math.min(100,ln+Math.ceil((100-ln)/12));pc.textContent=ln;if(ln>=100){clearInterval(liv);const go=()=>setTimeout(()=>L.classList.add('done'),250);document.readyState==='complete'?go():addEventListener('load',go)}},40);

/* cursor */
const dotE=$('.dot'),ringE=$('.ring');let px=-100,py=-100,rx=-100,ry=-100;
if(matchMedia('(hover:hover) and (pointer:fine)').matches){document.documentElement.classList.add('has-cur');
  addEventListener('pointermove',e=>{px=e.clientX;py=e.clientY},{passive:true});
  document.addEventListener('pointerover',e=>ringE.classList.toggle('on',!!e.target.closest('a,button')))}


/* renderer */
const cv=$('#gl'),R=new T.WebGLRenderer({canvas:cv,antialias:true,powerPreference:'high-performance'});
R.setPixelRatio(Math.min(devicePixelRatio,2));
const scene=new T.Scene();scene.fog=new T.FogExp2(0x030712,.007);
const cam=new T.PerspectiveCamera(60,1,.1,600);scene.add(cam);
const amb=new T.AmbientLight(0xffffff,.35),pl=new T.PointLight(0x06b6d4,2.2,60);scene.add(amb);cam.add(pl);

/* flight path */
const pts=[];for(let i=0;i<8;i++)pts.push(V(Math.sin(i*1.4)*9,Math.cos(i*1.1)*5,-i*50));
const path=new T.CatmullRomCurve3(pts);
const UP=V(0,1,0),side=t=>new T.Vector3().crossVectors(path.getTangent(clamp(t,0,1)),UP).normalize();
const at=(t,off=0,y=0)=>path.getPoint(clamp(t,0,1)).addScaledVector(side(t),off).add(V(0,y,0));

/* floating debris: wireframe shapes scattered around the path */
const geos=[new T.IcosahedronGeometry(1),new T.OctahedronGeometry(1),new T.TorusGeometry(1,.35,8,24),new T.BoxGeometry(1.5,1.5,1.5),new T.TorusKnotGeometry(.8,.25,64,8),new T.TetrahedronGeometry(1.2)];
const debris=[];
for(let i=0;i<90;i++){
  const t=Math.random(),a=Math.random()*Math.PI*2,r=5+Math.random()*13;
  const m=new T.Mesh(geos[i%geos.length],new T.MeshBasicMaterial({color:COL[i%COL.length],wireframe:true,transparent:true,opacity:.55}));
  m.position.copy(path.getPoint(t)).add(V(Math.cos(a)*r,Math.sin(a)*r,0));
  m.scale.setScalar(.5+Math.random()*2);
  m.userData={s:V(Math.random()-.5,Math.random()-.5,Math.random()-.5).multiplyScalar(.8),p:Math.random()*6,y:m.position.y};
  scene.add(m);debris.push(m);
}

/* stars */
const sp=new Float32Array(3*3000);for(let i=0;i<sp.length;i+=3){sp[i]=(Math.random()-.5)*110;sp[i+1]=(Math.random()-.5)*80;sp[i+2]=20-Math.random()*400}
const sg=new T.BufferGeometry();sg.setAttribute('position',new T.BufferAttribute(sp,3));
const gc=document.createElement('canvas');gc.width=gc.height=64;const gx=gc.getContext('2d'),gr=gx.createRadialGradient(32,32,0,32,32,32);
gr.addColorStop(0,'rgba(255,255,255,1)');gr.addColorStop(.25,'rgba(255,255,255,.5)');gr.addColorStop(1,'rgba(255,255,255,0)');gx.fillStyle=gr;gx.fillRect(0,0,64,64);
scene.add(new T.Points(sg,new T.PointsMaterial({size:.6,map:new T.CanvasTexture(gc),color:0x9be7ff,transparent:true,opacity:.9,depthWrite:false,blending:T.AdditiveBlending})));

/* speed streaks: fly past the camera, stretch with scroll speed */
const SN=500,sa=new Float32Array(SN*6),sz=new Float32Array(SN);
for(let i=0;i<SN;i++){const x=(Math.random()-.5)*60,y=(Math.random()-.5)*40;sz[i]=-Math.random()*80;sa[i*6]=sa[i*6+3]=x;sa[i*6+1]=sa[i*6+4]=y}
const sgeo=new T.BufferGeometry();sgeo.setAttribute('position',new T.BufferAttribute(sa,3));
const streaks=new T.LineSegments(sgeo,new T.LineBasicMaterial({color:0x67e8f9,transparent:true,opacity:0,blending:T.AdditiveBlending,depthWrite:false,fog:false}));
streaks.frustumCulled=false;cam.add(streaks);

/* ===== WORLDS: galaxy -> black hole -> neon grid -> aurora ===== */
const worldE=$('#world')||{},WN=['Spiral galaxy','Spiral galaxy','Deep space','Deep space','Event horizon','Event horizon','Neon grid','Neon grid','Aurora sky'];
const mkTex=(w,h,fn)=>{const c=document.createElement('canvas');c.width=w;c.height=h;fn(c.getContext('2d'),w,h);return new T.CanvasTexture(c)};
const glowT=mkTex(64,64,x=>{const g=x.createRadialGradient(32,32,0,32,32,32);g.addColorStop(0,'rgba(255,255,255,1)');g.addColorStop(.25,'rgba(255,255,255,.5)');g.addColorStop(1,'rgba(255,255,255,0)');x.fillStyle=g;x.fillRect(0,0,64,64)});

/* 1. spiral galaxy (hero): 14,000 coloured stars in three arms */
const GN=14000,galP=new Float32Array(GN*3),galC=new Float32Array(GN*3),cA=new T.Color('#ffd9a8'),cB=new T.Color('#7c5cff'),cC=new T.Color('#06b6d4'),tc=new T.Color();
for(let i=0;i<GN;i++){const r=Math.pow(Math.random(),.65)*62,a=(i%3)*2.094+r*.12+(Math.random()-.5)*.55,m=r/62;
  galP.set([Math.cos(a)*r+(Math.random()-.5)*2,(Math.random()-.5)*(2+r*.06),Math.sin(a)*r+(Math.random()-.5)*2],i*3);
  tc.copy(cA).lerp(m<.5?cB:cC,m<.5?m*2:(m-.5)*2).multiplyScalar(.55+Math.random()*.7);galC.set([tc.r,tc.g,tc.b],i*3)}
const galG=new T.BufferGeometry();galG.setAttribute('position',new T.BufferAttribute(galP,3));galG.setAttribute('color',new T.BufferAttribute(galC,3));
const gal=new T.Points(galG,new T.PointsMaterial({size:1.1,map:glowT,vertexColors:true,transparent:true,depthWrite:false,blending:T.AdditiveBlending}));
gal.position.copy(path.getPoint(.1));gal.rotation.set(.9,0,.2);scene.add(gal);
const core=new T.Sprite(new T.SpriteMaterial({map:glowT,color:0xffd9a8,transparent:true,blending:T.AdditiveBlending,depthWrite:false,opacity:.9}));core.scale.setScalar(26);core.position.copy(gal.position);scene.add(core);


/* 3. black hole: event horizon, spinning accretion disc, lensed ring */
const bh=new T.Group();bh.add(new T.Mesh(new T.SphereGeometry(7,48,32),new T.MeshBasicMaterial({color:0x000000})));
const discT=mkTex(512,512,x=>{const g=x.createRadialGradient(256,256,0,256,256,256);g.addColorStop(.3,'rgba(255,140,40,0)');g.addColorStop(.34,'rgba(255,255,230,1)');g.addColorStop(.5,'rgba(255,150,50,.85)');g.addColorStop(.75,'rgba(150,60,255,.35)');g.addColorStop(1,'rgba(80,20,200,0)');x.fillStyle=g;x.fillRect(0,0,512,512)});
const dm=new T.MeshBasicMaterial({map:discT,transparent:true,side:T.DoubleSide,blending:T.AdditiveBlending,depthWrite:false});
const disc=new T.Mesh(new T.PlaneGeometry(56,56),dm);disc.rotation.x=-1.25;bh.add(disc);
const lens=new T.Mesh(new T.PlaneGeometry(30,30),dm);lens.rotation.x=-.15;bh.add(lens);
bh.position.copy(at(.56,-22,6));scene.add(bh);

/* 4. neon grid city: glowing outlined towers on an endless grid */
const city=new T.Group(),cp=path.getPoint(.78),fy=cp.y-11;
const grid=new T.GridHelper(260,65,0x06b6d4,0x1a2a55);grid.position.set(cp.x,fy,cp.z);grid.material.transparent=true;grid.material.opacity=.55;city.add(grid);
const eMat=[new T.LineBasicMaterial({color:0x06b6d4}),new T.LineBasicMaterial({color:0x8b5cf6})],bMat=new T.MeshBasicMaterial({color:0x050a1a});
for(let i=0;i<130;i++){const pp=path.getPoint(.68+Math.random()*.22),w=2+Math.random()*5,h=4+Math.random()*34,g=new T.BoxGeometry(w,h,w),b=new T.Mesh(g,bMat);
  b.add(new T.LineSegments(new T.EdgesGeometry(g),eMat[i%2]));b.position.set(pp.x+(Math.random()<.5?-1:1)*(11+Math.random()*50),fy+h/2,pp.z+(Math.random()-.5)*10);city.add(b)}
scene.add(city);

/* 5. aurora: four shader ribbons waving over the finish */
const aur=[];for(let i=0;i<4;i++){const m=new T.ShaderMaterial({transparent:true,side:T.DoubleSide,blending:T.AdditiveBlending,depthWrite:false,uniforms:{uT:{value:0},uH:{value:i*.18}},
  vertexShader:'varying vec2 v;uniform float uT;void main(){v=uv;vec3 p=position;p.y+=sin(p.x*.12+uT)*3.5*uv.y;p.z+=sin(p.x*.08+uT*.7)*4.;gl_Position=projectionMatrix*modelViewMatrix*vec4(p,1.);}',
  fragmentShader:'varying vec2 v;uniform float uH;void main(){float a=pow(1.-abs(v.y-.35),2.)*smoothstep(0.,.2,v.y)*(1.-smoothstep(.6,1.,v.y));vec3 c=mix(vec3(.1,1.,.6),vec3(.55,.3,1.),clamp(v.y+uH,0.,1.));gl_FragColor=vec4(c,a*.7);}'});
  const rib=new T.Mesh(new T.PlaneGeometry(120,34,80,2),m);rib.position.set(-4,10+i*2,-370-i*20);aur.push(m);scene.add(rib)}

/* showpieces: solid core + wire shell, placed opposite the text side */
const hero=[];
const piece=(g,i,off,y,sc)=>{
  const c=COL[i],grp=new T.Group();
  grp.add(new T.Mesh(g,new T.MeshStandardMaterial({color:c,metalness:.85,roughness:.25,emissive:c,emissiveIntensity:.25})));
  const shell=new T.Mesh(g,new T.MeshBasicMaterial({color:0xffffff,wireframe:true,transparent:true,opacity:.18}));
  shell.scale.setScalar(1.08);grp.add(shell);
  const t=i/(N-1);grp.position.copy(at(t+.022,off,y));grp.scale.setScalar(sc);scene.add(grp);hero.push(grp);
};


/* scroll state */
const lenis=typeof Lenis!=='undefined'?new Lenis({lerp:.08}):null;
let target=0,p=0,mx=0,my=0;
const upd=()=>{const m=document.documentElement.scrollHeight-innerHeight;target=m>0?scrollY/m:0};
addEventListener('scroll',upd,{passive:true});upd();
addEventListener('pointermove',e=>{mx=e.clientX/innerWidth-.5;my=e.clientY/innerHeight-.5},{passive:true});
$$('[data-go]').forEach(a=>a.onclick=e=>{e.preventDefault();const y=(+a.dataset.go/(N-1))*(document.documentElement.scrollHeight-innerHeight);lenis?lenis.scrollTo(y,{duration:2.2}):scrollTo({top:y,behavior:'smooth'})});
$$('a[href^="#"]').forEach(a=>a.onclick=e=>{const id=a.getAttribute('href');if(id.length<2)return;const t=document.querySelector(id);if(!t)return;e.preventDefault();lenis?lenis.scrollTo(t,{offset:-70,duration:1.8}):t.scrollIntoView({behavior:'smooth'})});
const resize=()=>{R.setSize(innerWidth,innerHeight,false);cam.aspect=innerWidth/innerHeight;cam.updateProjectionMatrix()};
addEventListener('resize',resize);resize();

/* portfolio UI: scroll reveal, card tilt, terminal */





/* frame loop */
const tmp=new T.Color(),idx=$('#idx'),bar=$('#bar'),root=document.documentElement;let last=-1;
const loop=time=>{
  lenis&&lenis.raf(time);
  const k=time*.001,vel=target-p;p+=vel*.07;
  const f=p*(N-1),i0=clamp(Math.floor(f),0,N-2);tmp.copy(COL[i0]).lerp(COL[i0+1],f-i0);
  const t=clamp(p*.985,0,1);
  cam.position.copy(path.getPoint(t));
  cam.lookAt(path.getPoint(clamp(t+.012,0,1)));
  cam.position.x+=mx*2;cam.position.y-=my*1.4;cam.rotateZ(clamp(vel*-9,-.35,.35)-mx*.05);
  cam.fov=60+clamp(Math.abs(vel)*900,0,22);cam.updateProjectionMatrix();
  pl.color.copy(tmp);scene.fog.color.setRGB(.012+tmp.r*.025,.03+tmp.g*.02,.07+tmp.b*.04);
  R.setClearColor(scene.fog.color);
  root.style.setProperty('--acc','#'+tmp.getHexString());
  for(const d of debris){const u=d.userData;d.rotation.x+=u.s.x*.01;d.rotation.y+=u.s.y*.01;d.rotation.z+=u.s.z*.01;d.position.y=u.y+Math.sin(k+u.p)*.8}
  hero.forEach((h,j)=>{h.rotation.y=k*.35+j;h.rotation.x=k*.2;h.children[0].material.emissive.copy(tmp)});
  gal.rotation.y=k*.015;
  disc.rotation.z=k*.35;lens.rotation.z=-k*.25;aur.forEach(m=>m.uniforms.uT.value=k);
  const sps=Math.abs(vel);streaks.material.opacity=clamp(sps*40,0,.55);
  for(let i=0;i<SN;i++){sz[i]+=.3+sps*900;if(sz[i]>-1)sz[i]-=80;sa[i*6+2]=sz[i];sa[i*6+5]=sz[i]-clamp(sps*1400,.2,14)}
  sgeo.attributes.position.needsUpdate=true;
  rx+=(px-rx)*.16;ry+=(py-ry)*.16;dotE.style.transform=`translate3d(${px}px,${py}px,0)`;ringE.style.transform=`translate3d(${rx}px,${ry}px,0)`;
  /* text panels fly in from the distance, pass the camera and vanish */
  panels.forEach((el,j)=>{
    const d=f-j,v=clamp(1-Math.abs(d)*1.7,0,1),rt=el.classList.contains('r')?1:-1;
    el.style.opacity=v;if(v>.01)el.ch.forEach(c=>c.style.transform=`translateY(${d*c._k*80}px) rotate(${d*c._k*-4}deg)`);
    el.style.transform=`perspective(900px) translate3d(${d*rt*-160}px,0,${d*700}px) rotateY(${d*rt*-28}deg)`;
    el.classList.toggle('on',v>.5);
  });
  const n=Math.round(f);if(n!==last){last=n;idx.textContent=String(n+1).padStart(2,'0');worldE.textContent='◉ '+WN[n]}
  bar.style.transform=`scaleY(${p})`;
  R.render(scene,cam);requestAnimationFrame(loop);
};
requestAnimationFrame(loop);
})();