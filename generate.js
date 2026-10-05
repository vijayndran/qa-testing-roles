#!/usr/bin/env node
/* Generate README.md + index.html (GitHub Pages) from roles.json.
   Single source of truth = roles.json. Run: node generate.js */
const fs = require('fs');
const path = require('path');
const data = JSON.parse(fs.readFileSync(path.join(__dirname, 'roles.json'), 'utf8'));
const { meta, roles, ladders } = data;

// ---- Validation (enforces CONTRIBUTING.md rules) ----
(() => {
  const errs = [];
  const ids = new Set();
  const specs = Object.keys(meta.specialties);
  const tiers = meta.tiers;
  for (const r of roles) {
    if (!r.id || !/^[a-z0-9-]+$/.test(r.id)) errs.push(`bad id: ${r.id}`);
    if (ids.has(r.id)) errs.push(`duplicate id: ${r.id}`);
    ids.add(r.id);
    if (!specs.includes(r.specialty)) errs.push(`${r.id}: unknown specialty ${r.specialty}`);
    if (!tiers.includes(r.tier)) errs.push(`${r.id}: unknown tier ${r.tier}`);
    if (!(r.compMin <= r.compMax)) errs.push(`${r.id}: compMin > compMax`);
    if (!r.summary || !r.summary.trim()) errs.push(`${r.id}: missing summary (JD skeleton)`);
    if ((r.aliases || []).includes(r.positionTitle)) errs.push(`${r.id}: aliases must not repeat the positionTitle`);
  }
  for (const [name, list] of Object.entries(ladders || {}))
    for (const id of list) if (!ids.has(id)) errs.push(`ladder "${name}" references unknown id ${id}`);
  // Keep the prose role-count in meta.description honest against the actual data.
  const descCount = (meta.description.match(/\b(\d+) canonical roles\b/) || [])[1];
  if (descCount && Number(descCount) !== roles.length)
    errs.push(`meta.description says "${descCount} canonical roles" but there are ${roles.length}`);
  if (errs.length) {
    console.error('roles.json validation failed:\n - ' + errs.join('\n - '));
    process.exit(1);
  }
})();

const tierLabel = { ENTRY: 'Entry / Junior', MID: 'Mid (IC)', SENIOR: 'Senior (IC)', LEAD: 'Lead / Principal', MANAGER: 'Manager / Head' };
const byId = Object.fromEntries(roles.map(r => [r.id, r]));
const money = n => 'RM' + n.toLocaleString('en-MY');

// ---- README.md ----
let md = `# ${meta.title}\n\n`;
md += `[![build](https://github.com/vijayndran/qa-testing-roles/actions/workflows/build.yml/badge.svg)](https://github.com/vijayndran/qa-testing-roles/actions/workflows/build.yml)\n\n`;
md += `${meta.description}\n\n`;
md += `> **Source taxonomy:** [eaccmk/ALL_QA_Testing_Roles](${meta.source}) (${meta.license}). `;
md += `This repo goes further: it de-duplicates the ~130 synonymous titles into **${roles.length} canonical roles**, adds skills, JD skeletons, indicative comp bands, career ladders and a reverse alias lookup — and ships it all as machine-readable \`roles.json\` plus a searchable [web page](https://vijayndran.github.io/qa-testing-roles/).\n\n`;

if (meta.promo) {
  md += `---\n\n`;
  md += `### ${meta.promo.heading}\n\n`;
  md += `${meta.promo.body}\n\n`;
  if (Array.isArray(meta.promo.bullets)) md += meta.promo.bullets.map(b => `- ${b}`).join('\n') + '\n\n';
  if (meta.promo.ctaUrl) md += `**[${meta.promo.ctaText || meta.promo.ctaUrl}](${meta.promo.ctaUrl})**\n\n`;
  if (meta.promo.teaser) md += `> 🚀 **${meta.promo.teaser}**\n\n`;
  md += `---\n\n`;
}

md += `## What's different from a plain list\n\n`;
md += `| The source list | This report |\n|---|---|\n`;
md += `| ~130 raw titles, flat | ${roles.length} canonical roles in a 7×5 matrix |\n`;
md += `| Title only | + required/preferred skills, JD skeleton, comp band |\n`;
md += `| No structure | Career ladders + specialty tracks |\n`;
md += `| "What *is* a Quality Advocate?" unanswered | Reverse alias lookup resolves every raw title |\n`;
md += `| Markdown only | \`roles.json\` (machine-readable) + interactive HTML |\n\n`;

// Matrix
md += `## Seniority × Specialty matrix\n\n`;
const specs = Object.entries(meta.specialties);
const tiers = meta.tiers;
md += `| Specialty ↓ / Seniority → | ${tiers.map(t => tierLabel[t]).join(' | ')} |\n`;
md += `|---|${tiers.map(() => '---').join('|')}|\n`;
for (const [key, label] of specs) {
  const row = tiers.map(t => {
    const hits = roles.filter(r => r.specialty === key && r.tier === t).map(r => r.positionTitle);
    return hits.length ? hits.join('<br>') : '—';
  });
  md += `| **${label}** | ${row.join(' | ')} |\n`;
}
md += `\n`;

// Ladders
md += `## Career ladders\n\n`;
for (const [name, ids] of Object.entries(ladders)) {
  md += `- **${name}:** ${ids.map(id => byId[id] ? byId[id].positionTitle : id).join(' → ')}\n`;
}
md += `\n`;

// Role detail
md += `## Canonical roles\n\n`;
for (const r of roles) {
  md += `### ${r.positionTitle}\n\n`;
  md += `\`${r.id}\` · ${meta.specialties[r.specialty]} · ${tierLabel[r.tier]} · **${money(r.compMin)}–${money(r.compMax)}**/mo (indicative)\n\n`;
  md += `${r.summary}\n\n`;
  md += `- **Required:** ${r.requiredSkills.join(', ')}\n`;
  md += `- **Preferred:** ${r.preferredSkills.join(', ')}\n`;
  md += `- **Also seen as:** ${r.aliases.join(', ')}\n\n`;
}

// Reverse alias index
md += `## Reverse alias lookup\n\nEvery raw title from the source list → the canonical role it maps to.\n\n`;
md += `| Raw title | Canonical role |\n|---|---|\n`;
const aliasRows = [];
for (const r of roles) for (const a of r.aliases) aliasRows.push([a, r.positionTitle]);
aliasRows.sort((x, y) => x[0].localeCompare(y[0]));
for (const [a, t] of aliasRows) md += `| ${a} | ${t} |\n`;
md += `\n---\n\n`;
md += `*${meta.compNote} ${meta.compCurrency}.*\n\n`;
md += `*Generated from \`roles.json\` by \`generate.js\`. Contributions: edit \`roles.json\` and re-run \`node generate.js\`.*\n`;
md += `\n*See [CONTRIBUTING.md](./CONTRIBUTING.md) for the full workflow (the generator validates \`roles.json\` on every run).*\n`;

fs.writeFileSync(path.join(__dirname, 'README.md'), md);

// ---- index.html (interactive) ----
const html = `<!DOCTYPE html>
<html lang="en"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width, initial-scale=1">
<title>${meta.title}</title>
<style>
:root{--bg:#0f172a;--card:#1e293b;--fg:#e5e7eb;--muted:#94a3b8;--border:#334155;--accent:#38bdf8;}
*{box-sizing:border-box}body{margin:0;font-family:system-ui,sans-serif;background:var(--bg);color:var(--fg);line-height:1.5}
.wrap{max-width:1100px;margin:0 auto;padding:24px}
h1{font-size:24px;margin:0 0 4px}.sub{color:var(--muted);margin-bottom:20px}
a{color:var(--accent)}
.controls{display:flex;gap:10px;flex-wrap:wrap;margin-bottom:18px;position:sticky;top:0;background:var(--bg);padding:10px 0;z-index:5}
input,select{background:var(--card);color:var(--fg);border:1px solid var(--border);border-radius:8px;padding:8px 10px;font-size:14px}
input{flex:1;min-width:200px}
.grid{display:grid;grid-template-columns:repeat(auto-fill,minmax(320px,1fr));gap:14px}
.role{background:var(--card);border:1px solid var(--border);border-radius:10px;padding:14px}
.role h3{margin:0 0 6px;font-size:16px}
.badges{display:flex;gap:6px;flex-wrap:wrap;margin-bottom:8px}
.badge{font-size:11px;padding:2px 8px;border-radius:999px;background:#0b1220;border:1px solid var(--border);color:var(--muted)}
.comp{color:var(--accent);font-weight:600}
.summary{font-size:13px;color:var(--fg);margin:8px 0}
.sk{font-size:13px;margin:4px 0}.sk b{color:var(--muted);font-weight:600}
.alias{font-size:12px;color:var(--muted);margin-top:6px}
.count{color:var(--muted);font-size:13px;margin-bottom:10px}
.hint{color:var(--muted);font-size:12px;margin:-8px 0 14px}
.resolved{font-size:12px;color:var(--accent);background:#0b1220;border:1px solid var(--accent);border-radius:6px;padding:4px 8px;margin-bottom:8px}
.actions{margin-top:10px}
.copyjd{background:transparent;color:var(--accent);border:1px solid var(--accent);border-radius:8px;padding:6px 12px;font-size:12px;font-weight:600;cursor:pointer}
.copyjd:hover{background:var(--accent);color:#061018}
.copyjd.ok{background:#16a34a;border-color:#16a34a;color:#fff}
.promo{background:linear-gradient(135deg,#0b1220,#15213b);border:1px solid var(--accent);border-radius:12px;padding:16px 18px;margin:4px 0 20px}
.promo h2{margin:0 0 6px;font-size:16px;color:var(--fg)}
.promo p{margin:0 0 10px;font-size:13px;color:var(--muted)}
.promo .cta{display:inline-block;background:var(--accent);color:#061018;font-weight:700;text-decoration:none;padding:7px 14px;border-radius:8px;font-size:13px}
.promo .teaser{display:inline-block;margin-left:10px;font-size:12px;color:var(--accent);font-weight:600}
footer{color:var(--muted);font-size:12px;margin-top:28px;border-top:1px solid var(--border);padding-top:14px}
</style></head><body><div class="wrap">
<h1>${meta.title}</h1>
<div class="sub">${roles.length} canonical roles · normalised from <a href="${meta.source}">${roles.reduce((n,r)=>n+r.aliases.length,0)}+ raw titles</a> · comp in ${meta.compCurrency}/mo (indicative)</div>
${meta.promo ? `<div class="promo">
<h2>${meta.promo.heading}</h2>
<p>${meta.promo.body}</p>
<a class="cta" href="${meta.promo.ctaUrl}" target="_blank" rel="noopener">${meta.promo.ctaText || meta.promo.ctaUrl}</a>${meta.promo.teaser ? `<span class="teaser">🚀 ${meta.promo.teaser}</span>` : ''}
</div>` : ''}
<div class="controls">
<input id="q" placeholder="Type any job title — e.g. 'Quality Advocate', 'SDET', 'Test Analyst' — to resolve it…" oninput="render()">
<select id="spec" onchange="render()"><option value="">All specialties</option>${specs.map(([k,v])=>`<option value="${k}">${v}</option>`).join('')}</select>
<select id="tier" onchange="render()"><option value="">All tiers</option>${tiers.map(t=>`<option value="${t}">${tierLabel[t]}</option>`).join('')}</select>
</div>
<div class="hint">Search resolves any raw/alias title to its canonical role. Hit <b>Copy JD</b> on a card for a paste-ready job description.</div>
<div class="count" id="count"></div>
<div class="grid" id="grid"></div>
<footer>Source: <a href="${meta.source}">eaccmk/ALL_QA_Testing_Roles</a> (${meta.license}). Enriched taxonomy + <a href="roles.json">roles.json</a>. ${meta.compNote}</footer>
</div>
<script>
const ROLES=${JSON.stringify(roles)};
const SPECS=${JSON.stringify(meta.specialties)};
const TIERL=${JSON.stringify(tierLabel)};
function money(n){return 'RM'+n.toLocaleString('en-MY')}
function esc(s){return String(s).replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]))}
function buildJD(r){
  return [
    r.positionTitle,
    '',
    'Specialty: '+SPECS[r.specialty]+'  |  Level: '+TIERL[r.tier],
    'Indicative comp: '+money(r.compMin)+'–'+money(r.compMax)+'/mo',
    '',
    'Summary',
    r.summary,
    '',
    'Required skills',
    ...r.requiredSkills.map(s=>'- '+s),
    '',
    'Preferred skills',
    ...r.preferredSkills.map(s=>'- '+s),
    '',
    'Also known as: '+r.aliases.join(', ')
  ].join('\\n');
}
function copyJD(id,btn){
  const r=ROLES.find(x=>x.id===id); if(!r)return;
  const text=buildJD(r);
  const done=()=>{const o=btn.textContent;btn.textContent='Copied ✓';btn.classList.add('ok');setTimeout(()=>{btn.textContent=o;btn.classList.remove('ok')},1500)};
  if(navigator.clipboard&&navigator.clipboard.writeText){navigator.clipboard.writeText(text).then(done).catch(()=>fallbackCopy(text,done))}
  else fallbackCopy(text,done);
}
function fallbackCopy(text,done){const ta=document.createElement('textarea');ta.value=text;ta.style.position='fixed';ta.style.opacity='0';document.body.appendChild(ta);ta.select();try{document.execCommand('copy');done()}catch(e){}document.body.removeChild(ta)}
function render(){
  const q=document.getElementById('q').value.toLowerCase().trim();
  const sp=document.getElementById('spec').value, ti=document.getElementById('tier').value;
  const out=ROLES.filter(r=>{
    if(sp&&r.specialty!==sp)return false;
    if(ti&&r.tier!==ti)return false;
    if(!q)return true;
    const hay=(r.positionTitle+' '+r.requiredSkills.join(' ')+' '+r.preferredSkills.join(' ')+' '+r.aliases.join(' ')).toLowerCase();
    return hay.includes(q);
  });
  document.getElementById('count').textContent=out.length+' role'+(out.length===1?'':'s')+(q?' matching "'+q+'"':'');
  document.getElementById('grid').innerHTML=out.map(r=>{
    const matchAlias=q?r.aliases.find(a=>a.toLowerCase().includes(q)&&!r.positionTitle.toLowerCase().includes(q)):null;
    const resolved=matchAlias?\`<div class="resolved">"\${esc(matchAlias)}" → <b>\${esc(r.positionTitle)}</b></div>\`:'';
    return \`
    <div class="role" id="\${r.id}">
      \${resolved}
      <h3>\${esc(r.positionTitle)}</h3>
      <div class="badges"><span class="badge">\${esc(SPECS[r.specialty])}</span><span class="badge">\${esc(TIERL[r.tier])}</span></div>
      <div class="comp">\${money(r.compMin)}–\${money(r.compMax)}/mo</div>
      <p class="summary">\${esc(r.summary)}</p>
      <div class="sk"><b>Required:</b> \${esc(r.requiredSkills.join(', '))}</div>
      <div class="sk"><b>Preferred:</b> \${esc(r.preferredSkills.join(', '))}</div>
      <div class="alias">Also seen as: \${esc(r.aliases.join(', '))}</div>
      <div class="actions"><button class="copyjd" onclick="copyJD('\${r.id}',this)">Copy JD</button></div>
    </div>\`;
  }).join('');
}
render();
</script></body></html>`;
fs.writeFileSync(path.join(__dirname, 'index.html'), html);
console.log('Generated README.md + index.html from roles.json (' + roles.length + ' roles)');
