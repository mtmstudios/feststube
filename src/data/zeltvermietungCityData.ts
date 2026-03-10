export interface ZeltCityData {
  slug: string;
  name: string;
  heroH1: string;
  heroSubtext: string;
  seoHeadline: string;
  seoBody: string;
  testimonialText: string;
  testimonialAuthor: string;
  metaTitle: string;
  metaDescription: string;
}

export const zeltvermietungCityData: Record<string, ZeltCityData> = {
  stuttgart: {
    slug: "stuttgart",
    name: "Stuttgart",
    heroH1: "Zelt mieten in Stuttgart – für Gartenfeste und Open-Air-Events.",
    heroSubtext:
      "Von der Schlossgarten-Party bis zur Terrassen-Hochzeit in Bad Cannstatt: Wir liefern euer Partyzelt in alle Stuttgarter Stadtteile – direkt aus Denkendorf.",
    seoHeadline: "Zeltvermietung für Events in der Landeshauptstadt Stuttgart",
    seoBody:
      "Stuttgart feiert – und wir sorgen für das richtige Dach über dem Kopf! Als regionale Zeltvermietung aus Denkendorf bedienen wir Gartenfeste in Degerloch, Firmenfeiern in Weilimdorf und Hochzeiten in Bad Cannstatt. Unsere Pagodenzelte und Partyzelte sind wasserdicht, windstabil und in verschiedenen Größen von 3×3 m bis 6×12 m verfügbar. Lieferung, professioneller Aufbau und Abbau inkl.",
    testimonialText:
      "Zelt für unser Sommerfest in Stuttgart – alles reibungslos und das Zelt war riesig!",
    testimonialAuthor: "Events GmbH, Stuttgart",
    metaTitle: "Zeltvermietung Stuttgart | Partyzelt & Festzelt mieten | Feststube",
    metaDescription:
      "🎪 Zelt mieten in Stuttgart. ✔️ Pagodenzelte & Festzelte ✔️ Aufbau & Abbau inkl. ✔️ Für Hochzeit, Gartenfest & Firmenfeier. Jetzt anfragen!",
  },
  goeppingen: {
    slug: "goeppingen",
    name: "Göppingen",
    heroH1: "Zelt mieten in Göppingen – für Events im Filstal.",
    heroSubtext:
      "Für Gartenfeste, Hochzeiten und Firmenfeiern im Filstal: Unsere Zelte liefern wir pünktlich und zuverlässig nach Göppingen und in den gesamten Landkreis.",
    seoHeadline: "Zeltvermietung für Göppingen und den Landkreis",
    seoBody:
      "Im Landkreis Göppingen und im schönen Filstal liefern wir hochwertige Partyzelte, Pagodenzelte und Festzelte für alle Anlässe. Ob Hochzeitsfeier auf dem Bauernhof, Sommerfest auf dem Firmengelände oder Dorffest – wir bringen euch das Zelt mit vollständigem Service: Lieferung, Aufbau, Abbau und optionalem Inventar.",
    testimonialText:
      "Zelt für unsere Firmenfeier in Göppingen war perfekt. Aufbau-Team sehr professionell!",
    testimonialAuthor: "IT-Firma, Göppingen",
    metaTitle: "Zeltvermietung Göppingen | Festzelt & Partyzelt | Feststube",
    metaDescription:
      "🎪 Zelt für Events in Göppingen mieten. ✔️ Alle Größen ✔️ Wasserdicht & windstabil ✔️ Inkl. Aufbau. Für Hochzeit & Sommerfest im Filstal!",
  },
  denkendorf: {
    slug: "denkendorf",
    name: "Denkendorf",
    heroH1: "Zeltvermietung Denkendorf – direkt vor Ort, unschlagbar nah.",
    heroSubtext:
      "Kein Aufpreis, keine langen Wege: Als euer lokaler Zeltvermieter aus Denkendorf sind wir in Minutenschnelle bei euch und bauen professionell auf.",
    seoHeadline: "Euer lokaler Zeltvermieter in Denkendorf",
    seoBody:
      "In Denkendorf sind wir zuhause – und das spürt ihr beim Service. Egal ob ihr ein Pagodenzelt für eure Gartenparty oder ein großes Festzelt für die Firmenfeier braucht: Aus der Klingenstraße 6 liefern wir euch direkt und ohne Umwege. Professioneller Aufbau, sauberes Inventar und persönliche Beratung inklusive.",
    testimonialText:
      "Perfekt! Das Zelt war in einer Stunde aufgebaut und sehr sauber. Absolut empfehlenswert!",
    testimonialAuthor: "Familie Maier, Denkendorf",
    metaTitle: "Zeltvermietung Denkendorf | Lokaler Zeltvermieter | Feststube",
    metaDescription:
      "🎪 Zelt in Denkendorf mieten – direkt vom lokalen Anbieter. ✔️ Kein Aufpreis ✔️ Schnellster Aufbau ✔️ Alle Größen. Jetzt Termin sichern!",
  },
  ostfildern: {
    slug: "ostfildern",
    name: "Ostfildern",
    heroH1: "Zeltvermietung Ostfildern – für alle Ortsteile.",
    heroSubtext:
      "Ob Ruit, Nellingen, Kemnat oder Scharnhausen: Wir liefern euer Partyzelt direkt in jeden Ostfilderner Ortsteil – zuverlässig und pünktlich.",
    seoHeadline: "Zelte mieten für ganz Ostfildern",
    seoBody:
      "Ostfildern liegt direkt vor unserer Haustür und profitiert von kurzen Lieferzeiten. Für Gartenfeste, Hochzeiten oder Firmenfeiern in allen fünf Ortsteilen bringen wir Pagodenzelte und Partyzelte in verschiedenen Größen. Unser Service umfasst Lieferung, Aufbau, Betreuung und Abbau – ihr lehnt euch zurück und feiert.",
    testimonialText:
      "Zelt für unsere Gartenparty in Nellingen – super Qualität und blitzschneller Aufbau!",
    testimonialAuthor: "Familie Keller, Ostfildern",
    metaTitle: "Zeltvermietung Ostfildern | Partyzelt für alle Ortsteile | Feststube",
    metaDescription:
      "🎪 Zelt in Ostfildern mieten. ✔️ Alle Ortsteile ✔️ Pagodenzelte & Partyzelte ✔️ Inkl. Aufbau & Abbau. Für Hochzeit, Gartenfest & Firmenfeier!",
  },
  plochingen: {
    slug: "plochingen",
    name: "Plochingen",
    heroH1: "Zelt mieten in Plochingen – am Zusammenfluss von Fils und Neckar.",
    heroSubtext:
      "Für Open-Air-Feste in Plochingen: Unsere Partyzelte und Pagodenzelte liefern wir schnell und zuverlässig aus dem nahen Denkendorf.",
    seoHeadline: "Zeltvermietung für Plochingen und die Fils-Neckar-Region",
    seoBody:
      "Plochingen an der Fils bietet tolle Möglichkeiten für Open-Air-Events und Gartenfeste. Als Zeltvermieter aus dem benachbarten Denkendorf sind wir schnell bei euch und bauen euer Zelt fachmännisch auf. Von kleinen Pagodenzelten für 20 Personen bis zu größeren Festzelten für 100+ Gäste – wir haben die passende Lösung.",
    testimonialText:
      "Das Zelt für unsere Gartenparty in Plochingen war perfekt. Aufbau und Service top!",
    testimonialAuthor: "Familie Berger, Plochingen",
    metaTitle: "Zeltvermietung Plochingen | Partyzelt & Pagodenzelt | Feststube",
    metaDescription:
      "🎪 Zelt mieten in Plochingen. ✔️ Schnelle Lieferung ✔️ Alle Größen ✔️ Inkl. Aufbau. Für Hochzeit, Gartenfest & Firmenfeier an der Fils!",
  },
  filderstadt: {
    slug: "filderstadt",
    name: "Filderstadt",
    heroH1: "Zelt mieten in Filderstadt – für Events auf den Fildern.",
    heroSubtext:
      "Von Bonlanden bis Sielmingen: Für eure Gartenfeier oder euer Firmenevent auf den Fildern liefern wir Qualitätszelte direkt zu euch.",
    seoHeadline: "Zeltvermietung für Filderstadt und die Filder",
    seoBody:
      "Die Filderstädter Gärten und Grünflächen sind ideal für Zeltfeste. Als regionaler Zeltvermieter aus dem nahen Denkendorf kennen wir die Region und liefern unsere Pagodenzelte und Partyzelte schnell in alle fünf Stadtteile. Für Gartenhochzeiten, Sommerfeste und Firmenfeiern bieten wir kompletten Service inkl. Inventar.",
    testimonialText:
      "Zelt für unsere Gartenhochzeit in Bernhausen war wunderschön. Alles lief perfekt!",
    testimonialAuthor: "Lea & Marco, Filderstadt",
    metaTitle: "Zeltvermietung Filderstadt | Zelt für Hochzeit & Gartenfest | Feststube",
    metaDescription:
      "🎪 Zelt in Filderstadt mieten. ✔️ Für alle Stadtteile ✔️ Wasserdicht & windstabil ✔️ Inkl. Aufbau & Abbau. Perfekt für Gartenhochzeiten!",
  },
  "leinfelden-echterdingen": {
    slug: "leinfelden-echterdingen",
    name: "Leinfelden-Echterdingen",
    heroH1: "Zeltvermietung Leinfelden-Echterdingen – nahe Messe & Flughafen.",
    heroSubtext:
      "Business-Event, Messenachfeier oder Hochzeit nahe dem Flughafen? Wir liefern euer Zelt zuverlässig nach Leinfelden-Echterdingen.",
    seoHeadline: "Zelte mieten für Events in Leinfelden-Echterdingen",
    seoBody:
      "Leinfelden-Echterdingen ist durch die Nähe zur Messe Stuttgart und zum Flughafen ein Hotspot für Business-Events. Wir liefern unsere Pagodenzelte und Festzelte in alle Ortsteile und sorgen für professionellen Auf- und Abbau. Ideal für Messenachfeiern, Firmenevents und private Hochzeitsfeiern in der Region.",
    testimonialText:
      "Zelt für unser Firmen-Sommerfest in Leinfelden – perfekter Service, pünktlich und zuverlässig!",
    testimonialAuthor: "Eventmanager, Leinfelden-Echterdingen",
    metaTitle: "Zeltvermietung Leinfelden-Echterdingen | Business & Hochzeit | Feststube",
    metaDescription:
      "🎪 Zelt mieten in Leinfelden-Echterdingen. ✔️ Nahe Messe & Flughafen ✔️ Alle Größen ✔️ Inkl. Aufbau. Für Firmenfeiern & Hochzeiten!",
  },
  wendlingen: {
    slug: "wendlingen",
    name: "Wendlingen am Neckar",
    heroH1: "Zelt mieten in Wendlingen am Neckar.",
    heroSubtext:
      "Für Open-Air-Events und Gartenfeste in Wendlingen: Qualitätszelte vom regionalen Anbieter, geliefert aus dem nahen Denkendorf.",
    seoHeadline: "Zeltvermietung für Wendlingen und das Neckartal",
    seoBody:
      "Wendlingen am Neckar mit seinen schönen Gärten und der idyllischen Lage ist ideal für Zeltfeste. Wir liefern unsere Pagodenzelte und Partyzelte pünktlich nach Wendlingen und bauen sie professionell auf. Für Hochzeiten, Geburtstagsfeiern und Firmenfeste im Neckartal sind wir der zuverlässige Partner.",
    testimonialText:
      "Das Pagodenzelt für unsere Gartenfeier in Wendlingen war top. Alles trocken und windstabil!",
    testimonialAuthor: "Familie Hoffmann, Wendlingen",
    metaTitle: "Zeltvermietung Wendlingen am Neckar | Partyzelt & Pagodenzelt | Feststube",
    metaDescription:
      "🎪 Zelt für Wendlingen am Neckar mieten. ✔️ Schnelle Lieferung ✔️ Wasserdicht & windstabil ✔️ Inkl. Aufbau & Abbau. Jetzt anfragen!",
  },
  wernau: {
    slug: "wernau",
    name: "Wernau (Neckar)",
    heroH1: "Zeltvermietung Wernau – für Gartenfeste am Neckar.",
    heroSubtext:
      "Kleine Gemeinde, großes Feierpotenzial: Wir liefern euer Partyzelt direkt nach Wernau und bauen es professionell für euer Event auf.",
    seoHeadline: "Zelte mieten für Events in Wernau am Neckar",
    seoBody:
      "Wernau am Neckar ist ein gemütlicher Ort mit viel Potential für schöne Gartenfeste und Open-Air-Events. Als Zeltvermieter aus dem nahegelegenen Denkendorf sind wir schnell vor Ort und liefern unsere Pagodenzelte und Partyzelte in alle Größen. Stressfrei feiern unter unserem Qualitätszelt!",
    testimonialText:
      "Wer in Wernau feiert und ein Zelt braucht: Feststube ist die Wahl! Top Service.",
    testimonialAuthor: "Verein, Wernau",
    metaTitle: "Zeltvermietung Wernau | Partyzelt & Pagodenzelt | Feststube",
    metaDescription:
      "🎪 Zelt in Wernau am Neckar mieten. ✔️ Regionaler Anbieter ✔️ Inkl. Aufbau & Abbau ✔️ Für Hochzeit, Gartenfest & Vereinsfest!",
  },
  koegen: {
    slug: "koegen",
    name: "Köngen",
    heroH1: "Zeltvermietung Köngen – für Feste an der Fils.",
    heroSubtext:
      "Für Gartenfeste, Hochzeiten und Dorffeste in Köngen: Professionelle Zelte vom lokalen Anbieter, direkt aus Denkendorf geliefert.",
    seoHeadline: "Zelte mieten für Events in Köngen am Filstal",
    seoBody:
      "Köngen an der Fils ist ein idyllisches Städtchen mit Feiertradition. Wir liefern unsere Pagodenzelte und Partyzelte nach Köngen und bieten kompletten Auf- und Abbauservice. Für eure Hochzeit, Geburtstagsfeier oder das nächste Vereinsfest – wir sind euer verlässlicher Partner.",
    testimonialText:
      "Zelt für unser Vereinsfest in Köngen – pünktlich, ordentlich und top Qualität!",
    testimonialAuthor: "Sportverein, Köngen",
    metaTitle: "Zeltvermietung Köngen | Festzelt & Partyzelt mieten | Feststube",
    metaDescription:
      "🎪 Zelt für Köngen mieten. ✔️ Schnelle Lieferung ✔️ Pagodenzelte & Festzelte ✔️ Inkl. Aufbau. Für Hochzeit, Vereinsfest & Gartenfest!",
  },
  nuertingen: {
    slug: "nuertingen",
    name: "Nürtingen",
    heroH1: "Zelt mieten in Nürtingen – für Events an der Neckarstadt.",
    heroSubtext:
      "Für Hochzeiten, Sommerfeste und Firmenfeiern in Nürtingen: Qualitätszelte vom regionalen Anbieter, inklusive Auf- und Abbauservice.",
    seoHeadline: "Zeltvermietung für Nürtingen am Neckar",
    seoBody:
      "Nürtingen ist eine lebhafte Neckarstadt mit vielen schönen Grünanlagen und Eventflächen. Wir liefern unsere Pagodenzelte und Partyzelte direkt nach Nürtingen und alle Stadtteile. Von der intimen Gartenfeier bis zum großen Firmensommerfest – wir haben die passende Zeltgröße und bieten professionellen Vollservice.",
    testimonialText:
      "Tolle Zeltvermietung für unser Sommerfest in Nürtingen. Einfach unkompliziert und super!",
    testimonialAuthor: "Unternehmen, Nürtingen",
    metaTitle: "Zeltvermietung Nürtingen | Partyzelt & Festzelt mieten | Feststube",
    metaDescription:
      "🎪 Zelt in Nürtingen mieten. ✔️ Alle Größen ✔️ Wasserdicht & windstabil ✔️ Inkl. Aufbau & Abbau. Für Events am Neckar – jetzt anfragen!",
  },
  kirchheim: {
    slug: "kirchheim",
    name: "Kirchheim unter Teck",
    heroH1: "Zeltvermietung Kirchheim unter Teck – am Fuß der Teck.",
    heroSubtext:
      "Für Hochzeiten und Open-Air-Events am Fuß der Schwäbischen Alb: Unsere Zelte liefern wir zuverlässig nach Kirchheim und in den gesamten Landkreis.",
    seoHeadline: "Zelte mieten für Events in Kirchheim unter Teck",
    seoBody:
      "Kirchheim unter Teck mit seiner malerischen Umgebung und dem historischen Stadtkern ist ein beliebter Ort für Hochzeiten und Feste. Als Zeltvermieter aus Denkendorf liefern wir Pagodenzelte, Partyzelte und Festzelte nach Kirchheim und alle umliegenden Gemeinden. Kompletter Service von der Beratung bis zum Abbau.",
    testimonialText:
      "Das Zelt für unsere Hochzeit in Kirchheim war wunderschön aufgebaut. Regen kein Problem!",
    testimonialAuthor: "Clara & Tom, Kirchheim unter Teck",
    metaTitle: "Zeltvermietung Kirchheim unter Teck | Hochzeitszelt & Partyzelt | Feststube",
    metaDescription:
      "🎪 Zelt für Kirchheim unter Teck mieten. ✔️ Hochzeitszelte & Partyzelte ✔️ Inkl. Aufbau ✔️ Alle Größen. Am Fuß der Schwäbischen Alb – jetzt anfragen!",
  },
  waiblingen: {
    slug: "waiblingen",
    name: "Waiblingen",
    heroH1: "Zelt mieten in Waiblingen – für Events im Remstal.",
    heroSubtext:
      "Für Feste in der Kreisstadt Waiblingen und dem Remstal: Professionelle Zeltvermietung mit Aufbau, Abbau und optionalem Inventar.",
    seoHeadline: "Zeltvermietung für Waiblingen und das Remstal",
    seoBody:
      "Waiblingen, die Kreisstadt des Rems-Murr-Kreises, ist ein lebendiger Ort mit vielen Festivalitäten. Wir liefern unsere Pagodenzelte und Partyzelte nach Waiblingen und Umgebung. Für Firmensommerfeste, Stadtfeste oder Privatfeiern – wir bieten die passende Zeltgröße und sorgen für professionellen Aufbau.",
    testimonialText:
      "Zeltaufbau in Waiblingen lief reibungslos. Klasse Team und top Qualität!",
    testimonialAuthor: "Eventorganisator, Waiblingen",
    metaTitle: "Zeltvermietung Waiblingen | Partyzelt & Festzelt im Remstal | Feststube",
    metaDescription:
      "🎪 Zelt für Waiblingen mieten. ✔️ Rems-Murr-Gebiet ✔️ Pagodenzelte & Festzelte ✔️ Inkl. Aufbau & Abbau. Für Hochzeit, Sommerfest & Firmenfeier!",
  },
  schorndorf: {
    slug: "schorndorf",
    name: "Schorndorf",
    heroH1: "Zeltvermietung Schorndorf – für Events im Remstal.",
    heroSubtext:
      "In der Geburtsstadt des Automobils feiern wir mit Qualität: Professionelle Zelte für Gartenfeste, Hochzeiten und Firmenevents in Schorndorf.",
    seoHeadline: "Zelte mieten für Events in Schorndorf",
    seoBody:
      "Schorndorf im Remstal bietet schöne Möglichkeiten für Open-Air-Events. Wir liefern unsere Qualitätszelte aus Denkendorf nach Schorndorf und bieten professionellen Auf- und Abbauservice. Pagodenzelte für kleine Gesellschaften bis Festzelte für große Firmenfeiern – wir haben das richtige Zelt für euer Event.",
    testimonialText:
      "Zelt für unsere Betriebsfeier in Schorndorf – alles perfekt organisiert, danke!",
    testimonialAuthor: "HR-Team, Schorndorf",
    metaTitle: "Zeltvermietung Schorndorf | Partyzelt & Pagodenzelt | Feststube",
    metaDescription:
      "🎪 Zelt in Schorndorf mieten. ✔️ Alle Zelttypen ✔️ Inkl. Aufbau & Abbau ✔️ Für Hochzeit, Betriebsfeier & Gartenfest im Remstal!",
  },
  sindelfingen: {
    slug: "sindelfingen",
    name: "Sindelfingen",
    heroH1: "Zeltvermietung Sindelfingen – für Events in der Autostadt.",
    heroSubtext:
      "Für Betriebsfeste, Gartenhochzeiten und Open-Air-Events in Sindelfingen: Qualitätszelte mit professionsiellem Aufbauservice.",
    seoHeadline: "Zelte mieten für Events in Sindelfingen",
    seoBody:
      "Sindelfingen im Landkreis Böblingen ist ein wirtschaftlicher Knotenpunkt und gleichzeitig Heimat schöner Wohngegenden mit Gartenfestpotenzial. Wir liefern unsere Pagodenzelte und Partyzelte nach Sindelfingen und bieten zuverlässigen Aufbau für Betriebsfeiern, Hochzeiten und Privatfeste.",
    testimonialText:
      "Zeltvermietung für unser Betriebsfest in Sindelfingen war top. Schnell und professionell!",
    testimonialAuthor: "Firmenveranstaltung, Sindelfingen",
    metaTitle: "Zeltvermietung Sindelfingen | Festzelt & Partyzelt | Feststube",
    metaDescription:
      "🎪 Zelt für Sindelfingen mieten. ✔️ Pagodenzelte & Festzelte ✔️ Aufbau & Abbau inkl. ✔️ Für Betriebsfeier, Hochzeit & Gartenfest!",
  },
  boeblingen: {
    slug: "boeblingen",
    name: "Böblingen",
    heroH1: "Zelt mieten in Böblingen – für Events an den Seen.",
    heroSubtext:
      "Ob Seeufer-Picknick oder Gartenhochzeit: Für Events in Böblingen liefern wir euer Partyzelt direkt aus Denkendorf – inkl. Aufbau & Abbau.",
    seoHeadline: "Zeltvermietung für Böblingen und den Landkreis",
    seoBody:
      "Böblingen mit seinen idyllischen Seen und grünen Parks ist ideal für Zeltfeste. Als regionaler Zeltvermieter aus Denkendorf liefern wir Pagodenzelte, Partyzelte und Festzelte nach Böblingen und alle Gemeinden des Landkreises. Von kleinen Gartenfeiern bis zu großen Hochzeitsfeiern – wir haben das passende Angebot.",
    testimonialText:
      "Wir hatten das Zelt für unsere Hochzeit am Böblinger See – wunderschön und alles hat gestimmt!",
    testimonialAuthor: "Nadine & Andreas, Böblingen",
    metaTitle: "Zeltvermietung Böblingen | Hochzeitszelt & Partyzelt | Feststube",
    metaDescription:
      "🎪 Zelt in Böblingen mieten. ✔️ Alle Größen ✔️ Wasserdicht & windstabil ✔️ Inkl. Aufbau & Abbau. Für Hochzeit, Gartenfest & Firmenfeier!",
  },
  reutlingen: {
    slug: "reutlingen",
    name: "Reutlingen",
    heroH1: "Zeltvermietung Reutlingen – Tor zur Schwäbischen Alb.",
    heroSubtext:
      "Für Hochzeiten, Gartenfeste und Firmenfeiern in Reutlingen: Unsere Qualitätszelte liefern wir direkt aus Denkendorf – zuverlässig und professionell.",
    seoHeadline: "Zelte mieten für Events in Reutlingen",
    seoBody:
      "Reutlingen am Fuß der Schwäbischen Alb bietet wunderbare Möglichkeiten für Open-Air-Events. Wir liefern unsere Pagodenzelte und Festzelte nach Reutlingen und sorgen für professionellen Auf- und Abbau. Für Hochzeiten, Geburtstagsfeste und Firmensommerfeste sind wir euer zuverlässiger Zeltvermieter.",
    testimonialText:
      "Tolle Zeltvermietung für unsere Gartenfeier in Reutlingen. Das Zelt war perfekt!",
    testimonialAuthor: "Familie Müller, Reutlingen",
    metaTitle: "Zeltvermietung Reutlingen | Festzelt & Partyzelt | Feststube",
    metaDescription:
      "🎪 Zelt in Reutlingen mieten. ✔️ Alle Größen ✔️ Inkl. Aufbau & Abbau ✔️ Für Hochzeit, Gartenfest & Sommerfest. Jetzt anfragen!",
  },
  metzingen: {
    slug: "metzingen",
    name: "Metzingen",
    heroH1: "Zeltvermietung Metzingen – Outlet-City feiert draußen.",
    heroSubtext:
      "Für Open-Air-Events und Gartenfeste in Metzingen: Professionelle Zeltlösungen vom regionalen Anbieter aus Denkendorf.",
    seoHeadline: "Zelte mieten für Events in Metzingen an der Erms",
    seoBody:
      "Metzingen, bekannt als Outlet-City, hat auch eine lebendige Feiertradition. Für Gartenfeste, Hochzeiten und Firmenevents in Metzingen und Umgebung liefern wir unsere Pagodenzelte und Partyzelte mit komplettem Aufbauservice. An der schönen Erms und in den Gärten Metzingens macht Feiern unter Zelt besonders viel Spaß.",
    testimonialText:
      "Wir hatten die Zeltvermietung für unsere Firmenfeier in Metzingen gebucht – alles perfekt!",
    testimonialAuthor: "Event-Team, Metzingen",
    metaTitle: "Zeltvermietung Metzingen | Partyzelt & Pagodenzelt | Feststube",
    metaDescription:
      "🎪 Zelt für Metzingen mieten. ✔️ An der Erms ✔️ Alle Größen ✔️ Inkl. Aufbau & Abbau. Für Events in der Outlet-City!",
  },
  tuebingen: {
    slug: "tuebingen",
    name: "Tübingen",
    heroH1: "Zeltvermietung Tübingen – Feste unterm Zelt in der Unistadt.",
    heroSubtext:
      "Ob Hochzeitsfeier, Absolventenparty oder Firmenevent in Tübingen: Unsere Qualitätszelte liefern wir direkt aus Denkendorf an euren Wunschort.",
    seoHeadline: "Zelte mieten für Events in Tübingen am Neckar",
    seoBody:
      "Tübingen mit seiner traumhaften Altstadt und dem Neckar bietet einzigartige Kulissen für Zeltfeste. Als Zeltvermieter aus Denkendorf liefern wir Pagodenzelte, Partyzelte und Festzelte nach Tübingen. Für Hochzeiten, Campuspartys, Firmenevents und Privatfeiern bieten wir kompletten Aufbau- und Abbauservice.",
    testimonialText:
      "Zelt für unsere Hochzeitsfeier in Tübingen – traumhafte Atmosphäre und alles trocken!",
    testimonialAuthor: "Sophie & Leon, Tübingen",
    metaTitle: "Zeltvermietung Tübingen | Hochzeitszelt & Partyzelt | Feststube",
    metaDescription:
      "🎪 Zelt in Tübingen mieten. ✔️ Alle Zelttypen ✔️ Inkl. Aufbau & Abbau ✔️ Für Hochzeit, Firmenfeier & Studentenfest in der Unistadt!",
  },
  geislingen: {
    slug: "geislingen",
    name: "Geislingen an der Steige",
    heroH1: "Zeltvermietung Geislingen an der Steige – hoch droben feiert's sich gut!",
    heroSubtext:
      "Für Feste im oberen Filstal: Zuverlässige Zeltvermietung aus Denkendorf, inkl. Aufbau und Vollservice.",
    seoHeadline: "Zelte mieten für Events in Geislingen an der Steige",
    seoBody:
      "Geislingen an der Steige liegt idyllisch im oberen Filstal. Wir liefern unsere Pagodenzelte und Partyzelte nach Geislingen und bieten professionellen Auf- und Abbauservice. Für Hochzeiten, Vereinsfeste und Firmenfeiern in der Region sind wir der verlässliche Zeltvermieter.",
    testimonialText:
      "Zelt für unser Vereinsfest in Geislingen – super Service, alles hat geklappt!",
    testimonialAuthor: "Verein, Geislingen an der Steige",
    metaTitle: "Zeltvermietung Geislingen an der Steige | Partyzelt & Festzelt | Feststube",
    metaDescription:
      "🎪 Zelt für Geislingen an der Steige mieten. ✔️ Lieferung ins Filstal ✔️ Alle Größen ✔️ Inkl. Aufbau & Abbau. Für Hochzeit & Vereinsfest!",
  },
  ludwigsburg: {
    slug: "ludwigsburg",
    name: "Ludwigsburg",
    heroH1: "Zeltvermietung Ludwigsburg – Barock-Flair unter freiem Himmel.",
    heroSubtext:
      "In der Residenzstadt Ludwigsburg feiern wir mit Stil: Hochwertige Zelte für Gartenhochzeiten, Sommerfeste und Firmenfeiern.",
    seoHeadline: "Zelte mieten für Events in Ludwigsburg",
    seoBody:
      "Ludwigsburg, die Stadt der Barockschlösser und des Blühenden Barocks, bietet prachtvolle Locations für Zeltfeste. Wir liefern unsere Pagodenzelte und Festzelte nach Ludwigsburg und alle umliegenden Gemeinden. Für Schlossgartenhochzeiten, Firmenjubiläen und Sommerfeste bieten wir professionellen Vollservice.",
    testimonialText:
      "Das Zelt für unsere Gartenhochzeit in Ludwigsburg war wunderschön. Toller Service!",
    testimonialAuthor: "Kerstin & Mark, Ludwigsburg",
    metaTitle: "Zeltvermietung Ludwigsburg | Hochzeitszelt & Festzelt | Feststube",
    metaDescription:
      "🎪 Zelt für Ludwigsburg mieten. ✔️ Hochzeitszelte & Festzelte ✔️ Inkl. Aufbau & Abbau ✔️ Für Events in der Residenzstadt – jetzt anfragen!",
  },
  heilbronn: {
    slug: "heilbronn",
    name: "Heilbronn",
    heroH1: "Zeltvermietung Heilbronn – feiern in der Weinregion.",
    heroSubtext:
      "Für Weinfeste, Hochzeiten und Firmenfeiern in Heilbronn und der Region: Unsere Qualitätszelte liefern wir direkt zu eurer Location am Neckar.",
    seoHeadline: "Zelte mieten für Events in Heilbronn",
    seoBody:
      "Heilbronn ist die Großstadt am Neckar, bekannt für Weinbau und Eventkultur. Wir liefern unsere Pagodenzelte und Festzelte nach Heilbronn und bieten professionellen Auf- und Abbauservice. Für Weinfeste, Hochzeiten, Firmensommerfeste und private Feiern sind wir euer zuverlässiger Zeltvermieter.",
    testimonialText:
      "Zelt für unsere Weinhochzeit in Heilbronn – perfekt aufgebaut und top Qualität!",
    testimonialAuthor: "Weinliebhaber, Heilbronn",
    metaTitle: "Zeltvermietung Heilbronn | Zelt für Hochzeit & Weinfest | Feststube",
    metaDescription:
      "🎪 Zelt in Heilbronn mieten. ✔️ Alle Größen ✔️ Weinregion-Service ✔️ Inkl. Aufbau & Abbau. Für Hochzeit, Weinfest & Firmenfeier!",
  },
  backnang: {
    slug: "backnang",
    name: "Backnang",
    heroH1: "Zeltvermietung Backnang – für Events im Murrtal.",
    heroSubtext:
      "Für Feste in Backnang und dem Murrtal: Professionelle Zeltvermietung mit Lieferung aus Denkendorf, inkl. Aufbau und Abbau.",
    seoHeadline: "Zelte mieten für Events in Backnang",
    seoBody:
      "Backnang liegt im schönen Murrtal und bietet tolle Möglichkeiten für Zeltfeste. Als Zeltvermieter aus Denkendorf liefern wir Pagodenzelte und Partyzelte pünktlich nach Backnang. Für Hochzeiten, Vereinsfeste und Firmenfeiern bieten wir professionellen Vollservice – damit ihr einfach entspannt feiern könnt.",
    testimonialText:
      "Zeltvermietung in Backnang mit super Service! Alles pünktlich und professionell.",
    testimonialAuthor: "Familie Wagner, Backnang",
    metaTitle: "Zeltvermietung Backnang | Partyzelt & Pagodenzelt | Feststube",
    metaDescription:
      "🎪 Zelt für Backnang mieten. ✔️ Murrtal-Service ✔️ Alle Zelttypen ✔️ Inkl. Aufbau & Abbau. Für Hochzeit, Vereinsfest & Firmenfeier!",
  },
  "schwaebisch-gmuend": {
    slug: "schwaebisch-gmuend",
    name: "Schwäbisch Gmünd",
    heroH1: "Zeltvermietung Schwäbisch Gmünd – Stauferstadt feiert draußen.",
    heroSubtext:
      "Für Open-Air-Events und Gartenfeste in Schwäbisch Gmünd: Qualitätszelte vom regionalen Anbieter aus Denkendorf – inkl. Aufbau & Abbau.",
    seoHeadline: "Zelte mieten für Events in Schwäbisch Gmünd",
    seoBody:
      "Schwäbisch Gmünd mit seiner historischen Altstadt und dem Flair der Stauferzeit bietet besondere Möglichkeiten für Zeltfeste. Wir liefern unsere Pagodenzelte und Partyzelte nach Gmünd und bieten professionellen Service für Hochzeiten, Stadtfeste und Firmenfeiern.",
    testimonialText:
      "Tolle Zeltvermietung für unser Stadtfest in Schwäbisch Gmünd. Alles top!",
    testimonialAuthor: "Stadtverein, Schwäbisch Gmünd",
    metaTitle: "Zeltvermietung Schwäbisch Gmünd | Partyzelt & Festzelt | Feststube",
    metaDescription:
      "🎪 Zelt in Schwäbisch Gmünd mieten. ✔️ Alle Größen ✔️ Inkl. Aufbau & Abbau ✔️ Für Hochzeit, Stadtfest & Firmenfeier in der Stauferstadt!",
  },
};
