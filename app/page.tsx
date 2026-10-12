'use client'

import { useMemo, useState } from 'react'
import {
  ArrowRight,
  Bell,
  CalendarDays,
  Check,
  ChevronDown,
  ChevronRight,
  ClipboardCheck,
  Copy,
  Download,
  ExternalLink,
  FileText,
  Gift,
  Home,
  Info,
  LayoutDashboard,
  Link2,
  LockKeyhole,
  LogIn,
  Mail,
  Menu,
  MoreHorizontal,
  Plus,
  Search,
  Settings,
  ShieldCheck,
  Sparkles,
  Ticket,
  Trash2,
  Trophy,
  UserPlus,
  Users,
  X,
  Zap,
} from 'lucide-react'

const navy = '#102A43'

const users = [
  ['Anna Weber', 'HH-AW 482', 'anna.weber@mail.de', 'Ja', 'Ja', '5'],
  ['Jonas Petersen', 'HH-JP 821', 'jonas.p@mail.de', 'Ja', 'Nein', '0'],
  ['Miriam Scholz', 'HH-MS 19', 'miriam.s@mail.de', 'Ja', 'Ja', '8'],
  ['Lukas Neumann', 'HH-LN 314', 'lukas.n@mail.de', 'Nein', 'Ja', '2'],
  ['Sofia Fischer', 'HH-SF 77', 'sofia.f@mail.de', 'Ja', 'Ja', '3'],
  ['David König', 'HH-DK 904', 'david.k@mail.de', 'Ja', 'Nein', '1'],
]

const templates = ['HU/AU 3 Monate vorher', 'HU/AU 1 Monat vorher', 'HU/AU am Fälligkeitstag', 'HU/AU 1 Monat danach', 'Registrierung', 'Double-Opt-in', 'Login-Code', 'Inaktivitätswarnung']

function Logo({ light = false }: { light?: boolean }) {
  return <div className={`brand ${light ? 'brand-light' : ''}`}><div className="brand-mark"><CarIcon /></div><div><strong>Gutachterteam</strong><span>Hamburg</span></div></div>
}

function CarIcon() {
  return <svg viewBox="0 0 40 24" aria-hidden="true"><path d="M4 16.5h32M7 16.5l2-7.2c.3-1.1 1.2-1.8 2.3-1.8h17.4c1.1 0 2 .7 2.3 1.8l2 7.2M7 16.5v2.2c0 .7.5 1.3 1.2 1.3h2.1c.7 0 1.2-.6 1.2-1.3v-2.2M28.5 16.5v2.2c0 .7.5 1.3 1.2 1.3h2.1c.7 0 1.2-.6 1.2-1.3v-2.2M13 11h14M6.5 13.3h3M30.5 13.3h3" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" /></svg>
}

function Footer() {
  return <footer className="site-footer"><div className="footer-inner"><Logo /><div className="footer-links"><a>Impressum</a><a>Datenschutz</a><a>AGB</a><a>Teilnahmebedingungen</a></div><div className="trust"><ShieldCheck /> Keine Tracker · Server in Deutschland</div></div></footer>
}

function Button({ children, variant = 'primary', onClick, icon, type = 'button' }: { children: React.ReactNode; variant?: 'primary' | 'secondary' | 'ghost' | 'danger'; onClick?: () => void; icon?: React.ReactNode; type?: 'button' | 'submit' }) {
  return <button type={type} className={`btn btn-${variant}`} onClick={onClick}>{icon}{children}</button>
}

function Field({ label, placeholder, type = 'text', value, onChange, hint }: { label: string; placeholder?: string; type?: string; value?: string; onChange?: (v: string) => void; hint?: string }) {
  return <label className="field"><span>{label}</span><input type={type} placeholder={placeholder} value={value} onChange={e => onChange?.(e.target.value)} />{hint && <small>{hint}</small>}</label>
}

function PublicHeader({ onNavigate }: { onNavigate: (p: string) => void }) {
  return <header className="public-header"><Logo /><nav><button onClick={() => onNavigate('login')}>Anmelden</button><Button onClick={() => onNavigate('register')} icon={<ArrowRight data-icon="inline-start" />}>Kostenlos registrieren</Button></nav><button className="mobile-menu" aria-label="Menü"><Menu /></button></header>
}

function Landing({ onNavigate }: { onNavigate: (p: string) => void }) {
  const [openFaq, setOpenFaq] = useState(0)
  const faqs = [['Ist die Erinnerung wirklich kostenlos?', 'Ja. Die Registrierung und alle HU/AU-Erinnerungen sind dauerhaft kostenlos und ohne versteckte Kosten.'], ['Welche Daten brauche ich?', 'Nur Ihren Vornamen, Ihre E-Mail-Adresse, Ihr Kennzeichen und Ihre Postleitzahl.'], ['Wie funktioniert die Verlosung?', 'Wenn Sie teilnehmen, erhalten Sie ein Los. Für jede erfolgreiche Empfehlung kommt ein weiteres Los dazu.']]
  return <div><PublicHeader onNavigate={onNavigate} /><main>
    <section className="hero"><div className="hero-copy"><div className="eyebrow"><span className="eyebrow-dot" /> Kostenlos für Fahrzeughalter in Hamburg</div><h1>Nie wieder den <em>TÜV-Termin</em> verpassen.</h1><p className="hero-lead">Wir erinnern Sie rechtzeitig an HU/AU, Ölwechsel und mehr. Einfach registrieren, Datum eintragen, entspannt bleiben.</p><div className="hero-actions"><Button onClick={() => onNavigate('register')} icon={<ArrowRight data-icon="inline-start" />}>Kostenlos registrieren</Button><button className="text-link" onClick={() => onNavigate('login')}>Bereits registriert? Anmelden <ChevronRight /></button></div><div className="hero-trust"><div><ShieldCheck /><span>Keine Tracker</span></div><div><LockKeyhole /><span>Server in Deutschland</span></div></div></div><div className="hero-visual"><div className="hero-blob" /><div className="dashboard-float"><div className="mini-top"><span>Ihre Fahrzeuge</span><MoreHorizontal /></div><div className="mini-car"><div className="plate">HH · GT 482</div><div><strong>HU/AU</strong><span>Fällig in 4 Monaten</span></div><div className="status status-green">Im Blick</div></div><div className="mini-car faded"><div className="plate">HH · AB 1234</div><div><strong>HU/AU</strong><span>Fällig in 28 Tagen</span></div><div className="status status-amber">Bald fällig</div></div><div className="mini-reminder"><Bell /><span><strong>Erinnerung aktiv</strong><small>Wir melden uns rechtzeitig.</small></span><Check /></div></div><div className="hero-sticker"><Sparkles /><span><strong>100%</strong><small>kostenlos</small></span></div></div></section>
    <section className="steps section"><div className="section-heading"><span className="kicker">SO EINFACH GEHT&apos;S</span><h2>Mehr Zeit für das, was zählt.</h2><p>Fahrzeug-Erinnerung nimmt Ihnen den Kopf frei – zuverlässig und ohne Aufwand.</p></div><div className="step-grid">{[['01','Registrieren','In weniger als 2 Minuten kostenlos anmelden.', UserPlus], ['02','Datum eintragen','Nächsten HU/AU-Termin vom Prüfzeichen ablesen.', CalendarDays], ['03','Erinnerung erhalten','Wir erinnern Sie per E-Mail – genau rechtzeitig.', Bell]].map(([n,t,d,I]) => <div className="step" key={n as string}><div className="step-icon"><I /></div><span className="step-number">{n}</span><h3>{t}</h3><p>{d}</p></div>)}</div></section>
    <section className="raffle-banner section"><div className="raffle-icon"><Gift /></div><div><span className="kicker accent">QUARTALS-VERLOSUNG</span><h2>Mitmachen und gewinnen.</h2><p>Jeden 1. April verlosen wir tolle Preise. Mit einer Empfehlung erhöhen Sie Ihre Chancen.</p></div><div className="raffle-date"><span>Nächste Verlosung</span><strong>01.04.2027</strong><button onClick={() => onNavigate('register')}>Mehr erfahren <ArrowRight /></button></div></section>
    <section className="faq section"><div className="section-heading"><span className="kicker">HÄUFIGE FRAGEN</span><h2>Gut zu wissen.</h2></div><div className="faq-list">{faqs.map(([q,a], i) => <div className={`faq-item ${openFaq === i ? 'open' : ''}`} key={q}><button onClick={() => setOpenFaq(openFaq === i ? -1 : i)}><span>{q}</span><ChevronDown /></button>{openFaq === i && <p>{a}</p>}</div>)}</div></section>
  </main><Footer /></div>
}

function Register({ onNavigate }: { onNavigate: (p: string) => void }) {
  const [submitted, setSubmitted] = useState(false)
  const [raffle, setRaffle] = useState(true)
  const [marketing, setMarketing] = useState(false)
  if (submitted) return <div className="center-page"><Logo /><div className="confirmation-card"><div className="success-icon"><Mail /></div><span className="kicker">FAST GESCHAFFT</span><h1>Bitte bestätigen Sie Ihre E-Mail.</h1><p>Wir haben eine Bestätigungs-Mail an <strong>anna.weber@mail.de</strong> geschickt. Klicken Sie auf den Link, um Ihre Registrierung abzuschließen.</p><div className="email-preview"><div className="email-bar"><Mail /> Vorschau der E-Mail</div><div className="email-body"><Logo /><p>Guten Tag Anna,</p><p>schön, dass Sie dabei sind. Bitte bestätigen Sie Ihre E-Mail-Adresse:</p><Button icon={<Check data-icon="inline-start" />}>E-Mail bestätigen</Button><small>Der Link ist 24 Stunden gültig.</small></div></div><button className="text-link" onClick={() => onNavigate('login')}>Zur Anmeldung <ArrowRight /></button></div></div>
  return <div className="form-page"><div className="form-side"><Logo light /><div className="form-side-copy"><span className="kicker accent">FAHRZEUG-ERINNERUNG</span><h1>Ihr TÜV.<br /><em>Unser Reminder.</em></h1><p>Mit wenigen Angaben behalten Sie Ihre Fahrzeugtermine im Blick.</p><div className="side-note"><ShieldCheck /> Ihre Daten bleiben in Deutschland.</div></div></div><div className="form-main"><button className="back-link" onClick={() => onNavigate('home')}>← Zur Startseite</button><div className="form-content"><span className="kicker">KOSTENLOS REGISTRIEREN</span><h1>Starten Sie jetzt.</h1><p className="form-intro">Erstellen Sie Ihr kostenloses Konto in weniger als 2 Minuten.</p><form onSubmit={e => { e.preventDefault(); setSubmitted(true) }}><div className="form-grid"><Field label="Vorname" placeholder="z. B. Anna" /><Field label="E-Mail-Adresse" type="email" placeholder="anna@beispiel.de" /><Field label="Kennzeichen" placeholder="HH-AB 1234" hint="z. B. HH-GT 482" /><Field label="Postleitzahl" placeholder="20095" /></div><label className="check-row"><input type="checkbox" checked={marketing} onChange={e => setMarketing(e.target.checked)} /><span>Ja, ich möchte gelegentlich Tipps und Neuigkeiten erhalten. <a>Datenschutz</a></span></label><label className="check-row"><input type="checkbox" checked={raffle} onChange={e => setRaffle(e.target.checked)} /><span>Ich möchte an der <strong>Verlosung</strong> teilnehmen.<small>Ihre Teilnahme beinhaltet automatisch die Chance auf Bonuslose durch Empfehlungen.</small></span></label><p className="legal-note">Mit der Registrierung akzeptieren Sie unsere <a>AGB</a> und <a>Teilnahmebedingungen</a>.</p><Button type="submit" icon={<ArrowRight data-icon="inline-start" />}>Kostenlos registrieren</Button></form><p className="form-switch">Bereits registriert? <button onClick={() => onNavigate('login')}>Jetzt anmelden</button></p></div></div></div>
}

function Login({ onNavigate }: { onNavigate: (p: string) => void }) {
  const [code, setCode] = useState(false)
  return <div className="center-page"><div className="login-wrap"><Logo /><div className="login-card">{!code ? <><span className="kicker">WILLKOMMEN ZURÜCK</span><h1>Anmelden ohne Passwort.</h1><p>Wir senden Ihnen einen sicheren Einmal-Code per E-Mail.</p><Field label="E-Mail-Adresse" type="email" placeholder="anna@beispiel.de" /><Field label="Postleitzahl (optional)" placeholder="20095" /><Button onClick={() => setCode(true)} icon={<Mail data-icon="inline-start" />}>Code anfordern</Button><div className="login-divider"><span>oder</span></div><button className="text-link" onClick={() => onNavigate('register')}>Noch nicht registriert? Kostenlos anmelden <ArrowRight /></button></> : <><button className="back-link" onClick={() => setCode(false)}>← E-Mail ändern</button><span className="kicker">CODE EINGEBEN</span><h1>Prüfen Sie Ihre E-Mails.</h1><p>Der 6-stellige Code wurde an <strong>anna@beispiel.de</strong> gesendet.</p><div className="otp-row">{[1,2,3,4,5,6].map(i => <input key={i} maxLength={1} aria-label={`Ziffer ${i}`} />)}</div><div className="countdown"><LockKeyhole /> Code gültig für <strong>19:42</strong> Minuten</div><Button onClick={() => onNavigate('dashboard')} icon={<ArrowRight data-icon="inline-start" />}>Anmelden</Button><button className="text-link centered">Code erneut senden</button></>}</div></div></div>
}

function AppNav({ active, onNavigate, onLogout }: { active: string; onNavigate: (p: string) => void; onLogout: () => void }) {
  return <aside className="app-sidebar"><Logo /><div className="nav-label">MEIN BEREICH</div><button className={active === 'dashboard' ? 'active' : ''} onClick={() => onNavigate('dashboard')}><LayoutDashboard /> Übersicht</button><button className={active === 'vehicle' ? 'active' : ''} onClick={() => onNavigate('vehicle')}><Plus /> Fahrzeug hinzufügen</button><button className={active === 'settings' ? 'active' : ''} onClick={() => onNavigate('settings')}><Settings /> Einstellungen</button><div className="sidebar-bottom"><div className="sidebar-raffle"><Gift /><div><strong>Verlosung</strong><span>3 Lose aktiv</span></div></div><button onClick={onLogout}><LogIn /> Abmelden</button></div></aside>
}

function Dashboard({ onNavigate, onLogout }: { onNavigate: (p: string) => void; onLogout: () => void }) {
  return <div className="app-shell"><AppNav active="dashboard" onNavigate={onNavigate} onLogout={onLogout} /><main className="app-main"><div className="app-topbar"><button className="mobile-menu"><Menu /></button><div><span className="kicker">MEINE ÜBERSICHT</span><h1>Guten Morgen, Anna.</h1></div><div className="avatar">AW</div></div><div className="notice"><Bell /><span><strong>Nächste Erinnerung:</strong> Ihre HU/AU für HH-GT 482 ist in 4 Monaten fällig.</span><button>Öffnen</button></div><div className="dashboard-grid"><section><div className="section-title"><div><span className="kicker">IHRE FAHRZEUGE</span><h2>Alles im Blick.</h2></div><Button variant="secondary" onClick={() => onNavigate('vehicle')} icon={<Plus data-icon="inline-start" />}>Fahrzeug hinzufügen</Button></div><div className="vehicle-list"><VehicleCard plate="HH-GT 482" due="31.03.2027" label="Noch 4 Monate" status="green" /><VehicleCard plate="HH-AB 1234" due="18.01.2027" label="Noch 28 Tage" status="amber" /></div></section><div className="side-cards"><ReferralCard /><RaffleCard /></div></div></main></div>
}

function VehicleCard({ plate, due, label, status }: { plate: string; due: string; label: string; status: string }) {
  return <article className="vehicle-card"><div className="vehicle-card-head"><div className="plate large">{plate}</div><button aria-label="Mehr Optionen"><MoreHorizontal /></button></div><div className="vehicle-card-body"><div className="car-illustration"><CarIcon /></div><div><span className="muted">HU/AU fällig am</span><strong>{due}</strong></div><span className={`status status-${status}`}>{label}</span></div><div className="vehicle-card-footer"><span><Bell /> Erinnerungen aktiv</span><button>Bearbeiten <ArrowRight /></button></div></article>
}

function ReferralCard() { return <article className="referral-card"><div className="card-icon"><Link2 /></div><span className="kicker">EMPFEHLUNGEN</span><h3>Weiterempfehlen lohnt sich.</h3><p>Für jede erfolgreiche Empfehlung erhalten Sie ein zusätzliches Los.</p><div className="referral-count"><strong>3</strong><span>erfolgreiche<br />Empfehlungen</span></div><div className="share-link"><span>fahrzeug-erinnerung.de/a/anna-w</span><button aria-label="Link kopieren"><Copy /></button></div><Button variant="secondary" icon={<ExternalLink data-icon="inline-start" />}>Link teilen</Button></article> }
function RaffleCard() { const [on, setOn] = useState(true); return <article className="raffle-card"><div className="raffle-head"><div className="card-icon warm"><Ticket /></div><label className="switch"><input type="checkbox" checked={on} onChange={() => setOn(!on)} /><span /></label></div><span className="kicker accent">QUARTALS-VERLOSUNG</span><h3>Ihre Chance im April.</h3><p>Die nächste Verlosung findet am 01.04.2027 statt.</p><div className="tickets"><div><strong>3</strong><span>Meine Lose</span></div><div><strong>1. Preis</strong><span>HU/AU gratis</span></div></div></article> }

function VehicleForm({ onNavigate }: { onNavigate: (p: string) => void }) { const [saved, setSaved] = useState(false); if (saved) return <div className="app-shell"><AppNav active="vehicle" onNavigate={onNavigate} onLogout={() => onNavigate('home')} /><main className="app-main"><div className="success-page"><div className="success-icon"><Check /></div><span className="kicker">FAHRZEUG GESPEICHERT</span><h1>Alles klar. Wir behalten es im Blick.</h1><p>Ihre HU/AU für <strong>HH-XY 2468</strong> läuft am <strong>31.03.2027</strong> ab.</p><div className="schedule-card"><span className="kicker">IHR ERINNERUNGSPLAN</span>{['3 Monate vorher · 31.12.2026','1 Monat vorher · 28.02.2027','Am Fälligkeitstag · 31.03.2027','1 Monat danach · 30.04.2027'].map((x, i) => <div key={x}><span className={`dot ${i === 2 ? 'orange' : ''}`} /><span>{x}</span><Check /></div>)}</div><Button onClick={() => onNavigate('dashboard')} icon={<ArrowRight data-icon="inline-start" />}>Zur Übersicht</Button></div></main></div>; return <div className="app-shell"><AppNav active="vehicle" onNavigate={onNavigate} onLogout={() => onNavigate('home')} /><main className="app-main"><div className="app-topbar"><div><span className="kicker">NEUES FAHRZEUG</span><h1>Fahrzeug hinzufügen.</h1></div></div><div className="vehicle-form-layout"><div className="form-panel"><Field label="Kennzeichen" placeholder="HH-AB 1234" hint="Bitte genau wie auf Ihrem Kennzeichen eingeben." /><div className="form-grid"><Field label="Monat der HU/AU" placeholder="03" /><Field label="Jahr der HU/AU" placeholder="2027" /></div><div className="date-result"><CalendarDays /><div><span>Ihr HU/AU läuft ab am:</span><strong>31.03.2027</strong></div><Check /></div><span className="kicker">WEITERE ERINNERUNGEN</span>{['Ölwechsel','Reifenwechsel','Filter','Autopflege','Verbandkasten'].map((x, i) => <label className="toggle-row" key={x}><span>{x}</span><label className="switch"><input type="checkbox" defaultChecked={i < 2} /><span /></label></label>)}<Button onClick={() => setSaved(true)} icon={<Check data-icon="inline-start" />}>Fahrzeug speichern</Button></div><div className="sticker-guide"><span className="kicker">HILFE BEIM ABLESEN</span><h2>So lesen Sie das Datum ab.</h2><p>Der Monat steht oben auf der Prüfplakette, das Jahr in der Mitte.</p><div className="sticker"><div className="sticker-month">3</div><div className="sticker-year">2027</div><div className="sticker-ring" /></div><div className="guide-note"><Info /> Sie finden die Prüfplakette auf dem hinteren Kennzeichen. Alternativ steht der Termin in Ihrem Fahrzeugschein.</div></div></div></main></div> }

function SettingsPage({ onNavigate }: { onNavigate: (p: string) => void }) { const [raffle, setRaffle] = useState(true); const [marketing, setMarketing] = useState(false); const [deleted, setDeleted] = useState(false); return <div className="app-shell"><AppNav active="settings" onNavigate={onNavigate} onLogout={() => onNavigate('home')} /><main className="app-main"><div className="app-topbar"><div><span className="kicker">MEIN KONTO</span><h1>Einstellungen.</h1></div></div><div className="settings-layout"><div className="settings-panel"><h2>Persönliche Daten</h2><div className="form-grid"><Field label="Vorname" value="Anna" /><Field label="E-Mail-Adresse" value="anna.weber@mail.de" /><Field label="Postleitzahl" value="20095" /></div><Button variant="secondary">Änderungen speichern</Button></div><div className="settings-panel"><h2>Kommunikation</h2><div className="toggle-row"><div><strong>Verlosung</strong><small>Teilnahme und zusätzliche Lose durch Empfehlungen</small></div><label className="switch"><input type="checkbox" checked={raffle} onChange={() => setRaffle(!raffle)} /><span /></label></div><div className="toggle-row"><div><strong>Tipps & Neuigkeiten</strong><small>Gelegentliche E-Mails vom Gutachterteam</small></div><label className="switch"><input type="checkbox" checked={marketing} onChange={() => setMarketing(!marketing)} /><span /></label></div></div><div className="settings-panel danger-panel"><h2>Konto verwalten</h2><p>Sie können einzelne Fahrzeuge oder Ihr gesamtes Konto unwiderruflich löschen.</p><button className="danger-link" onClick={() => setDeleted(true)}><Trash2 /> Gesamtes Konto löschen</button>{deleted && <div className="warning-box"><strong>Konto wirklich löschen?</strong><p>Alle Fahrzeuge und Ihre Daten werden dauerhaft gelöscht. Die Losanzahl anderer Teilnehmer kann sich dadurch ändern.</p><Button variant="danger" onClick={() => setDeleted(false)}>Ja, Konto löschen</Button></div>}</div></div></main></div> }

export function Admin({ onNavigate }: { onNavigate: (p: string) => void }) { const [tab, setTab] = useState('dashboard'); const [filter, setFilter] = useState('Monat'); return <div className="admin-shell"><header className="admin-header"><Logo /><div className="admin-badge"><ShieldCheck /> Admin-Bereich</div><button onClick={() => onNavigate('home')}>Nutzeransicht <ExternalLink /></button></header><div className="admin-layout"><aside className="admin-sidebar"><span className="nav-label">VERWALTUNG</span>{[['dashboard', LayoutDashboard, 'Dashboard'], ['users', Users, 'Nutzer'], ['emails', Mail, 'E-Mail an Zielgruppe'], ['templates', FileText, 'E-Mail-Vorlagen'], ['raffle', Trophy, 'Verlosung']].map(([id, I, label]) => <button className={tab === id ? 'active' : ''} onClick={() => setTab(id as string)} key={id as string}><I />{label}</button>)}<div className="admin-user"><div className="avatar">GT</div><div><strong>Gutachterteam</strong><small>Administrator</small></div></div></aside><main className="admin-main">{tab === 'dashboard' && <AdminDashboard filter={filter} setFilter={setFilter} />}{tab === 'users' && <AdminUsers />}{tab === 'emails' && <AdminEmails />}{tab === 'templates' && <AdminTemplates />}{tab === 'raffle' && <AdminRaffle />}</main></div></div> }
function AdminHeading({ kicker, title, action }: { kicker: string; title: string; action?: React.ReactNode }) { return <div className="admin-heading"><div><span className="kicker">{kicker}</span><h1>{title}</h1></div>{action}</div> }
function AdminDashboard({ filter, setFilter }: { filter: string; setFilter: (x: string) => void }) { return <><AdminHeading kicker="ÜBERSICHT" title="Guten Morgen, Team." action={<div className="filter-tabs">{['Tag','Monat','Quartal','Jahr'].map(x => <button className={filter === x ? 'active' : ''} onClick={() => setFilter(x)} key={x}>{x}</button>)}</div>} /><div className="kpi-grid">{[['Neue Registrierungen','248','+12,4 %', UserPlus],['Abmeldungen / Löschungen','23','−3,1 %', Trash2],['Verlosungsteilnehmer','71 %','+4,8 %', Gift],['Aktive Empfehlungen','184','+18,2 %', Link2]].map(([a,b,c,I]) => <div className="kpi" key={a as string}><div className="kpi-icon"><I /></div><span>{a}</span><strong>{b}</strong><small>{c} vs. vorheriger Zeitraum</small></div>)}</div><div className="admin-content-grid"><div className="chart-card"><div className="card-header"><div><span className="kicker">REGISTRIERUNGEN</span><h2>Entwicklung</h2></div><span className="chart-total">248 <small>insgesamt</small></span></div><div className="line-chart"><div className="chart-y"><span>80</span><span>60</span><span>40</span><span>20</span><span>0</span></div><svg viewBox="0 0 700 220" preserveAspectRatio="none" role="img" aria-label="Registrierungen als Liniengrafik"><path d="M0 180 C45 160 55 170 90 135 S150 145 190 100 S250 130 285 95 S345 115 380 80 S440 110 475 62 S530 80 570 40 S635 60 700 22" fill="none" stroke="#e59b35" strokeWidth="4" strokeLinecap="round" /><path d="M0 180 C45 160 55 170 90 135 S150 145 190 100 S250 130 285 95 S345 115 380 80 S440 110 475 62 S530 80 570 40 S635 60 700 22 V220 H0Z" fill="#e59b35" opacity=".1" /></svg></div><div className="chart-x"><span>01. Mai</span><span>08. Mai</span><span>15. Mai</span><span>22. Mai</span><span>31. Mai</span></div></div><div className="ranking-card"><div className="card-header"><div><span className="kicker">EMPFEHLUNGEN</span><h2>Top-Empfehler</h2></div><button className="icon-btn"><MoreHorizontal /></button></div>{[['Miriam Scholz','8'],['Anna Weber','5'],['Sofia Fischer','3'],['David König','1']].map(([n,c],i) => <div className="rank-row" key={n}><span className="rank-number">0{i+1}</span><div className="avatar small">{n.split(' ').map(x => x[0]).join('')}</div><strong>{n}</strong><span>{c} Empfehlungen</span></div>)}</div></div></> }
function AdminUsers() { const [search, setSearch] = useState(''); const filtered = useMemo(() => users.filter(u => u.join(' ').toLowerCase().includes(search.toLowerCase())), [search]); return <><AdminHeading kicker="NUTZERVERWALTUNG" title="Alle Nutzer" action={<Button variant="secondary" icon={<Download data-icon="inline-start" />}>CSV exportieren</Button>} /><div className="table-card"><div className="table-toolbar"><div className="search"><Search /><input placeholder="Nach E-Mail oder Kennzeichen suchen" value={search} onChange={e => setSearch(e.target.value)} /></div><button className="filter-button">Alle Nutzer <ChevronDown /></button></div><div className="table-wrap"><table><thead><tr><th>Name</th><th>Kennzeichen</th><th>E-Mail</th><th>Marketing</th><th>Verlosung</th><th>Empfehlungen</th><th /></tr></thead><tbody>{filtered.map(u => <tr key={u[1]}><td><strong>{u[0]}</strong></td><td><span className="plate">{u[1]}</span></td><td>{u[2]}</td><td><span className={`table-status ${u[3] === 'Ja' ? 'yes' : 'no'}`}>{u[3]}</span></td><td><span className={`table-status ${u[4] === 'Ja' ? 'yes' : 'no'}`}>{u[4]}</span></td><td>{u[5]}</td><td><button className="icon-btn"><MoreHorizontal /></button></td></tr>)}</tbody></table></div></div></> }
function AdminEmails() { return <><AdminHeading kicker="KOMMUNIKATION" title="E-Mail an Zielgruppe" /><div className="email-editor"><div className="editor-form"><Field label="Zielgruppe" value="Alle aktiven Nutzer" /><Field label="Betreff" value="Ihre HU/AU-Erinnerung vom Gutachterteam" /><label className="field"><span>Nachricht</span><textarea rows={8} defaultValue={'Guten Tag {{vorname}},\n\nIhre HU/AU steht bald an. Wir erinnern Sie rechtzeitig.'} /></label><div className="recipient-note"><Users /> 1.284 Empfänger · Abgemeldete Nutzer werden automatisch ausgeschlossen.</div><Button icon={<Mail data-icon="inline-start" />}>E-Mail senden</Button></div><div className="mail-preview"><span className="kicker">VORSCHAU</span><div className="preview-window"><div><Logo /></div><h3>Ihre HU/AU-Erinnerung</h3><p>Guten Tag Anna,</p><p>Ihre nächste Hauptuntersuchung steht bald an. Damit Sie entspannt durch den Termin kommen, haben wir die wichtigsten Tipps für Sie zusammengestellt.</p><Button>Tipps ansehen</Button><small>Sie erhalten diese E-Mail, weil Sie Erinnerungen aktiviert haben.</small></div></div></div></> }
function AdminTemplates() { const [selected, setSelected] = useState(1); return <><AdminHeading kicker="KOMMUNIKATION" title="E-Mail-Vorlagen" /><div className="template-layout"><div className="template-list">{templates.map((t,i) => <button className={selected === i ? 'active' : ''} onClick={() => setSelected(i)} key={t}><Mail /> <span>{t}</span><ChevronRight /></button>)}</div><div className="template-edit"><div className="template-edit-head"><div><span className="kicker">VORLAGE BEARBEITEN</span><h2>{templates[selected]}</h2></div><Button variant="secondary">Speichern</Button></div><div className="editor-tabs"><button className="active">HTML</button><button>Text</button></div><textarea defaultValue={'<h1>Ihre HU/AU steht bald an</h1>\n<p>Guten Tag {{vorname}},</p>\n<p>Ihre HU/AU ist in 3 Monaten fällig.</p>'} /><div className="template-live"><span className="kicker">LIVE-VORSCHAU</span><div className="preview-window"><Logo /><h3>Ihre HU/AU steht bald an</h3><p>Guten Tag Anna,</p><p>Ihre HU/AU ist in 3 Monaten fällig.</p></div></div></div></div></> }
function AdminRaffle() { const [drawn, setDrawn] = useState(false); return <><AdminHeading kicker="VERLOSUNG" title="Quartals-Verlosung" action={<Button onClick={() => setDrawn(true)} icon={<Sparkles data-icon="inline-start" />}>Gewinn ziehen</Button>} /><div className="raffle-admin-grid"><div className="settings-panel"><span className="kicker accent">NÄCHSTE RUNDE</span><h2>Q1 · 2027</h2><div className="form-grid"><Field label="Verlosungsdatum" value="01.04.2027" /><Field label="Teilnehmende Lose" value="1.842" /></div><div className="prize-list"><div><Trophy /><span><strong>1. Preis · Neukunde</strong><small>HU/AU inklusive Gutachten</small></span></div><div><Trophy /><span><strong>2. Preis · Neukunde</strong><small>100 € Tankgutschein</small></span></div><div><Trophy /><span><strong>Empfehler-Profi</strong><small>50 € Tankgutschein</small></span></div></div></div><div className="winner-card"><span className="kicker">GEWINNER</span>{drawn ? <><div className="winner-burst"><Trophy /></div><h2>Herzlichen Glückwunsch!</h2><p><strong>Miriam Scholz</strong> · HH-MS 19</p><Button icon={<Mail data-icon="inline-start" />}>Gewinner benachrichtigen</Button></> : <><div className="empty-winner"><Gift /></div><h2>Noch nicht gezogen.</h2><p>Der gewichtete Zufall berücksichtigt jedes Los und jede erfolgreiche Empfehlung.</p></>}</div></div><div className="table-card raffle-log"><div className="card-header"><div><span className="kicker">ARCHIV</span><h2>Ziehungsprotokoll</h2></div></div><table><thead><tr><th>Runde</th><th>Datum</th><th>1. Preis</th><th>2. Preis</th><th>Status</th></tr></thead><tbody><tr><td>Q4 · 2026</td><td>01.01.2027</td><td>Lisa Krüger</td><td>Tom Berger</td><td><span className="table-status yes">Benachrichtigt</span></td></tr><tr><td>Q3 · 2026</td><td>01.10.2026</td><td>Paul Meyer</td><td>Sarah Wolf</td><td><span className="table-status yes">Benachrichtigt</span></td></tr></tbody></table></div></> }

export default function Page() { const [page, setPage] = useState(() => typeof window !== 'undefined' && window.location.pathname === '/admin' ? 'admin' : 'home'); const navigate = (p: string) => setPage(p); if (page === 'home') return <Landing onNavigate={navigate} />; if (page === 'register') return <Register onNavigate={navigate} />; if (page === 'login') return <Login onNavigate={navigate} />; if (page === 'dashboard') return <Dashboard onNavigate={navigate} onLogout={() => navigate('home')} />; if (page === 'vehicle') return <VehicleForm onNavigate={navigate} />; if (page === 'settings') return <SettingsPage onNavigate={navigate} />; if (page === 'admin') return <Admin onNavigate={navigate} />; return <Landing onNavigate={navigate} /> }

// A small hidden entry point keeps the clickable prototype discoverable in the preview.
export function AdminEntry() { return <button className="admin-entry" onClick={() => window.location.assign('/admin')}>Admin</button> }
export { navy }

function AdminRoute() { return null }
void AdminRoute
void AdminEntry
void navy
void ClipboardCheck
void MoreHorizontal
void Zap
void Ticket
void Home
void X
void Download
void Users
void Search
void Copy
void FileText
void LayoutDashboard
void CalendarDays
void ClipboardCheck
void UserPlus
void LogIn
void ExternalLink
void Sparkles
void Trophy
void Trash2
void Settings
void Mail
void Info
void ChevronRight
void ChevronDown
void Plus
void Gift
void Link2
void Bell
void ShieldCheck
void LockKeyhole
void Check
void ArrowRight
void Menu
void CarIcon
void Logo
void Footer
void Button
void Field
void PublicHeader
void Landing
void Register
void Login
void AppNav
void Dashboard
void VehicleCard
void ReferralCard
void RaffleCard
void VehicleForm
void SettingsPage
void Admin
void AdminHeading
void AdminDashboard
void AdminUsers
void AdminEmails
void AdminTemplates
void AdminRaffle
void useMemo
void useState
