export interface CityData {
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

export const cityData: Record<string, CityData> = {
  stuttgart: {
    slug: "stuttgart",
    name: "Stuttgart",
    heroH1: "Die perfekte Fotobox für dein Event in Stuttgart.",
    heroSubtext:
      "Egal ob Firmenfeier im Kessel oder Traumhochzeit auf den Fildern – wir liefern Premium-Qualität direkt aus dem nahen Esslingen zu deiner Stuttgarter Location.",
    seoHeadline: "Eure Fotobox in der Schwabenmetropole",
    seoBody:
      "Stuttgart feiert gerne – und wir liefern das absolute Highlight dafür! Da wir nur einen Katzensprung entfernt in Denkendorf sitzen, sind wir bei jedem Event in Stuttgart blitzschnell vor Ort. Keine anonyme Spedition, sondern persönlicher Auf- und Abbau durch unser Team. Miete deine Fotobox für unvergessliche Momente in Stuttgart-Mitte, Bad Cannstatt, Vaihingen und Umgebung.",
    testimonialText:
      "Genialer Service für unser Corporate Event in Stuttgart. Die Box sah super edel aus!",
    testimonialAuthor: "Corporate Event GmbH, Stuttgart",
    metaTitle: "Fotobox mieten Stuttgart | Das Party-Highlight | Feststube",
    metaDescription:
      "📸 Premium Fotobox für dein Event in Stuttgart mieten. ✔️ Inkl. Requisiten & Sofort-Druck ✔️ Stressfreier Aufbau vor Ort. Sichere dir jetzt dein Highlight!",
  },
  ulm: {
    slug: "ulm",
    name: "Ulm",
    heroH1: "Premium Fotobox mieten in Ulm & Neu-Ulm.",
    heroSubtext:
      "Modernes Design trifft auf grenzenlosen Spaß. Sichere dir das Highlight für deine Hochzeit oder Party an der Donau.",
    seoHeadline: "Fotobox-Spaß rund um das Ulmer Münster",
    seoBody:
      "Du planst ein Event in Ulm, Neu-Ulm oder im Alb-Donau-Kreis? Die Feststube macht deine Feier unvergesslich. Über die B10/A8 sind wir aus Denkendorf schnell bei euch und kümmern uns um den kompletten, stressfreien Aufbau direkt an eurer Location. Studio-Qualität, Sofortdruck und Requisiten – alles aus einer Hand für eure Ulmer Party.",
    testimonialText:
      "Haben die Box für unsere Hochzeit in Ulm gebucht. Top Qualität und der Drucker ist irre schnell!",
    testimonialAuthor: "Julia & Tom, Ulm",
    metaTitle: "Fotobox mieten Ulm & Neu-Ulm | Premium Qualität | Feststube",
    metaDescription:
      "📸 Miete unsere stylische Fotobox für deine Hochzeit oder Feier in Ulm. ✔️ DSLR-Kamera ✔️ Print-Flatrate ✔️ Persönlicher Service. Jetzt anfragen!",
  },
  goeppingen: {
    slug: "goeppingen",
    name: "Göppingen",
    heroH1: "Deine Fotobox für unvergessliche Events in Göppingen.",
    heroSubtext:
      "Stressfreie Lieferung, Studio-Qualität und 100% Spaß für deine Feier im Filstal.",
    seoHeadline: "Das Party-Highlight für Göppingen und das Filstal",
    seoBody:
      "Mache deine Hochzeit, deinen Geburtstag oder deine Firmenfeier in Göppingen zu einem echten Erlebnis. Als euer regionaler Partner aus dem benachbarten Denkendorf garantieren wir eine reibungslose Lieferung und professionelle Betreuung im gesamten Kreis Göppingen. Lehne dich zurück, während wir die Technik aufbauen – und dann heißt es: Lächeln und feiern!",
    testimonialText:
      "Der Hit auf meinem 30. Geburtstag in Göppingen! Die Lieferung war auf die Minute pünktlich.",
    testimonialAuthor: "Sarah M., Göppingen",
    metaTitle: "Fotobox mieten Göppingen | Für Hochzeit & Event | Feststube",
    metaDescription:
      "📸 Die perfekte Fotobox für dein Event im Filstal & Göppingen. ✔️ Top-Qualität ab 249€ ✔️ Inkl. Requisiten & digitaler Galerie. Jetzt Verfügbarkeit checken!",
  },
  denkendorf: {
    slug: "denkendorf",
    name: "Denkendorf",
    heroH1: "Fotobox mieten in Denkendorf – direkt vor Ort.",
    heroSubtext:
      "Unser Heimspiel! Als Feststube aus Denkendorf stehen wir mit unserer Premium-Fotobox in Minutenschnelle bei euch – kein Aufpreis für kurze Wege.",
    seoHeadline: "Euer Fotobox-Experte direkt aus Denkendorf",
    seoBody:
      "Direkt aus der Klingenstraße 6 in Denkendorf bringen wir euch das Party-Highlight. Kein langer Anfahrtsweg, kein Aufpreis – einfach perfekter Service für eure Hochzeit, Geburtstag oder Firmenfeier. Wir kennen alle Locations in Denkendorf und Umgebung und bauen die Box schnell und zuverlässig auf.",
    testimonialText:
      "Wusste gar nicht, dass die von nebenan sind! Schneller Aufbau und die Gäste haben Stunden lang Spaß gehabt.",
    testimonialAuthor: "Familie Weber, Denkendorf",
    metaTitle: "Fotobox mieten Denkendorf | Ihr lokaler Partner | Feststube",
    metaDescription:
      "📸 Fotobox direkt aus Denkendorf mieten. ✔️ Kein Aufpreis für die Region ✔️ Sofortdruck & Requisiten ab 249€. Jetzt anfragen!",
  },
  ostfildern: {
    slug: "ostfildern",
    name: "Ostfildern",
    heroH1: "Fotobox für Ostfildern – Spaßgarantie für alle Ortsteile.",
    heroSubtext:
      "Ob Ruit, Nellingen, Kemnat oder Scharnhausen – wir liefern dein Party-Highlight direkt an deine Location in Ostfildern.",
    seoHeadline: "Das Fotobox-Erlebnis für ganz Ostfildern",
    seoBody:
      "Ostfildern liegt direkt vor unserer Haustür in Denkendorf – ideal für schnelle Lieferung und stressfreien Aufbau. Egal in welchem der fünf Ortsteile ihr feiert: Wir sind pünktlich vor Ort und machen eure Hochzeit, Firmenfeier oder Geburtstagsparty zum unvergesslichen Erlebnis mit professioneller DSLR-Qualität und Sofortdruck.",
    testimonialText:
      "Perfekter Service für unsere Hochzeitsfeier in Ruit. Aufbau und Abbau lief super smooth!",
    testimonialAuthor: "Sandra & Florian, Ostfildern-Ruit",
    metaTitle: "Fotobox mieten Ostfildern | Für alle Ortsteile | Feststube",
    metaDescription:
      "📸 Fotobox für Events in Ostfildern mieten. ✔️ Alle Ortsteile bedient ✔️ DSLR-Qualität ✔️ Sofortdruck ab 249€. Jetzt Verfügbarkeit prüfen!",
  },
  plochingen: {
    slug: "plochingen",
    name: "Plochingen",
    heroH1: "Fotobox mieten in Plochingen – am Zusammenfluss von Spaß und Stil.",
    heroSubtext:
      "Vom farbenfrohen Hundertwasserhaus bis zur perfekten Partybox – Plochingen hat beides! Wir liefern dein Highlight direkt zu dir.",
    seoHeadline: "Fotobox-Fun in Plochingen an der Fils",
    seoBody:
      "Plochingen an Fils und Neckar liegt nur wenige Kilometer von unserem Standort in Denkendorf entfernt. Das bedeutet: kurze Anfahrt, pünktlicher Aufbau und mehr Zeit zum Feiern für euch. Für Feste im Bürgerhaus, private Geburtstagsfeiern oder Firmenfeste liefern wir euch unsere Premium-Fotobox mit allem Drum und Dran.",
    testimonialText:
      "Die Fotobox war auf unserer Firmenfeier in Plochingen das absolute Highlight. Alle haben mitgemacht!",
    testimonialAuthor: "Team Fischer GmbH, Plochingen",
    metaTitle: "Fotobox mieten Plochingen | Firmenfeier & Party | Feststube",
    metaDescription:
      "📸 Fotobox für Plochingen mieten – inkl. Aufbau & Betreuung. ✔️ Hochzeit ✔️ Geburtstag ✔️ Firmenfeier. Ab 249€ – jetzt anfragen!",
  },
  filderstadt: {
    slug: "filderstadt",
    name: "Filderstadt",
    heroH1: "Deine Fotobox in Filderstadt – für Events auf den Fildern.",
    heroSubtext:
      "Von Bonlanden bis Bernhausen, von Plattenhardt bis Sielmingen: Wir bringen dir das Party-Highlight direkt zu deiner Wunsch-Location in Filderstadt.",
    seoHeadline: "Premium-Fotobox für Events in Filderstadt",
    seoBody:
      "Die Filderstädter Locations sind uns bestens bekannt. Als regionaler Anbieter aus dem benachbarten Denkendorf garantieren wir euch schnelle Anfahrt und professionellen Service. Ob Hochzeit in der Stadthalle, Geburtstag in Bernhausen oder Firmenevent nahe dem Flughafen – unsere Fotobox sorgt für unvergessliche Erinnerungen auf den Fildern.",
    testimonialText:
      "Schnelle Lieferung nach Bonlanden und super Qualität. Die Drucke sehen klasse aus!",
    testimonialAuthor: "Michael R., Filderstadt",
    metaTitle: "Fotobox mieten Filderstadt | Hochzeit & Firmenfeier | Feststube",
    metaDescription:
      "📸 Fotobox für Filderstadt mieten. ✔️ Alle Stadtteile ✔️ Inkl. Sofortdruck & Requisiten ab 249€ ✔️ Professionelle Betreuung. Jetzt buchen!",
  },
  "leinfelden-echterdingen": {
    slug: "leinfelden-echterdingen",
    name: "Leinfelden-Echterdingen",
    heroH1: "Fotobox für Events in Leinfelden-Echterdingen.",
    heroSubtext:
      "Nah an der Messe und am Flughafen – perfekt für Business-Events und Hochzeiten. Wir liefern deine Fotobox zuverlässig nach L.-E.",
    seoHeadline: "Das Party-Highlight für Leinfelden-Echterdingen",
    seoBody:
      "Leinfelden-Echterdingen ist ein Hotspot für Firmenevents und Hochzeitsfeiern – kein Wunder bei der Lage nahe Messe Stuttgart und Flughafen. Wir aus Denkendorf bedienen eure Locations in Leinfelden, Echterdingen, Stetten und Musberg zuverlässig und professionell. Unsere Fotobox hebt euer Event auf das nächste Level.",
    testimonialText:
      "Die Fotobox war das Gesprächsthema auf unserer Messe-Afterparty in Leinfelden. Absolut empfehlenswert!",
    testimonialAuthor: "Event-Managerin, Leinfelden-Echterdingen",
    metaTitle: "Fotobox mieten Leinfelden-Echterdingen | Business & Hochzeit | Feststube",
    metaDescription:
      "📸 Fotobox für Leinfelden-Echterdingen mieten. ✔️ Nahe Messe & Flughafen ✔️ Sofortdruck ✔️ Ab 249€. Ideal für Business & Hochzeiten!",
  },
  wendlingen: {
    slug: "wendlingen",
    name: "Wendlingen am Neckar",
    heroH1: "Fotobox mieten in Wendlingen am Neckar.",
    heroSubtext:
      "Euer Event-Highlight für Feiern in Wendlingen – stressfrei geliefert aus dem nahen Denkendorf, direkt an eure Wunsch-Location.",
    seoHeadline: "Fotobox für Wendlingen am Neckar und die Region",
    seoBody:
      "Wendlingen am Neckar liegt in idealer Nähe zu unserem Standort und profitiert von kurzen Lieferzeiten. Für Hochzeiten im schönen Neckartal, Geburtstagsfeiern oder Firmenevents sind wir zuverlässig vor Ort. Unser professioneller Auf- und Abbauservice macht eure Feier in Wendlingen zum sorglosen Vergnügen.",
    testimonialText:
      "Toller Service für unsere Hochzeit in Wendlingen. Die Fotobox war ein voller Erfolg!",
    testimonialAuthor: "Jana & Stefan, Wendlingen",
    metaTitle: "Fotobox mieten Wendlingen am Neckar | Hochzeit & Party | Feststube",
    metaDescription:
      "📸 Fotobox für Wendlingen am Neckar mieten. ✔️ Regionale Lieferung ✔️ Inkl. Requisiten & Druck ✔️ Ab 249€. Jetzt Termin sichern!",
  },
  wernau: {
    slug: "wernau",
    name: "Wernau (Neckar)",
    heroH1: "Fotobox-Spaß für Events in Wernau am Neckar.",
    heroSubtext:
      "Klein aber fein – und mit unserer Fotobox wird eure Party in Wernau zum absoluten Highlight. Blitzschnelle Lieferung aus Denkendorf.",
    seoHeadline: "Fotobox für Wernau am Neckar",
    seoBody:
      "Wernau am Neckar ist eine gemütliche Gemeinde mit großem Feiergeist. Wir aus Denkendorf sind in kurzer Zeit bei euch und kümmern uns um den kompletten Auf- und Abbau. Egal ob ihr in der Gemeindehalle, privat oder im Biergarten feiert – unsere Fotobox mit Sofortdruck und Requisiten macht eure Feier unvergesslich.",
    testimonialText:
      "Schnell, freundlich und super Qualität. Unsere Geburtstagsparty in Wernau war ein Mega-Erfolg!",
    testimonialAuthor: "Familie Schulz, Wernau",
    metaTitle: "Fotobox mieten Wernau | Geburtstag & Hochzeit | Feststube",
    metaDescription:
      "📸 Fotobox für Wernau am Neckar mieten. ✔️ Schnelle Lieferung ✔️ Sofortdruck & Requisiten ✔️ Ab 249€. Für Geburtstag, Hochzeit & mehr!",
  },
  koegen: {
    slug: "koegen",
    name: "Köngen",
    heroH1: "Fotobox für euer Event in Köngen.",
    heroSubtext:
      "Für Feiern an der Fils: Professionelle Fotobox aus Denkendorf, pünktlich geliefert und mit vollem Service vor Ort.",
    seoHeadline: "Das Party-Highlight für Köngen und das Filstal",
    seoBody:
      "Köngen liegt direkt an der Fils, nur wenige Kilometer von Denkendorf entfernt. Für eure Hochzeit, Geburtstagsfeier oder euer Betriebsfest bringen wir die Fotobox zuverlässig und pünktlich zu euch. Unser Service beinhaltet kompletten Aufbau, professionelle Betreuung während der Feier und den Abbau – ihr müsst euch um nichts kümmern.",
    testimonialText:
      "Einfach super! Fotobox für meine Hochzeit in Köngen – alles hat perfekt geklappt.",
    testimonialAuthor: "Mona & Kai, Köngen",
    metaTitle: "Fotobox mieten Köngen | Hochzeit & Firmenfeier | Feststube",
    metaDescription:
      "📸 Fotobox für Köngen (Filstal) mieten. ✔️ Pünktliche Lieferung ✔️ Kompletter Service ✔️ Ab 249€. Unvergessliche Fotos für eure Feier!",
  },
  nuertingen: {
    slug: "nuertingen",
    name: "Nürtingen",
    heroH1: "Premium Fotobox mieten in Nürtingen.",
    heroSubtext:
      "Am Ufer des Neckars wird aus eurer Feier ein Highlight. Wir liefern die perfekte Fotobox nach Nürtingen – pünktlich, professionell, unvergesslich.",
    seoHeadline: "Eure Fotobox in der Neckarstadt Nürtingen",
    seoBody:
      "Nürtingen ist eine lebendige Stadt mit vielen schönen Locations für eure Feier. Als regionaler Partner aus dem nahegelegenen Denkendorf liefern wir unsere Fotoboxen zuverlässig in die gesamte Nürtinger Innenstadt und alle Stadtteile. Von der romantischen Hochzeit am Neckar bis zur großen Firmenfeier – wir sind für euch da.",
    testimonialText:
      "Perfektes Equipment für unseren Betriebsausflug in Nürtingen. Alle Mitarbeiter haben sie geliebt!",
    testimonialAuthor: "HR-Managerin, Nürtingen",
    metaTitle: "Fotobox mieten Nürtingen | Hochzeit & Betriebsfeier | Feststube",
    metaDescription:
      "📸 Fotobox für Nürtingen mieten. ✔️ Pünktliche Lieferung ✔️ DSLR-Qualität ✔️ Ab 249€. Für Hochzeit, Geburtstag & Firmenfeier am Neckar.",
  },
  kirchheim: {
    slug: "kirchheim",
    name: "Kirchheim unter Teck",
    heroH1: "Fotobox mieten in Kirchheim unter Teck.",
    heroSubtext:
      "Am Fuß der Teck und der Schwäbischen Alb feiern? Dann braucht ihr das Highlight: unsere Premium-Fotobox für jede Location in Kirchheim.",
    seoHeadline: "Euer Fotobox-Erlebnis in Kirchheim unter Teck",
    seoBody:
      "Kirchheim unter Teck mit seinem historischen Stadtkern und der malerischen Umgebung der Schwäbischen Alb ist eine tolle Location für Feiern. Aus unserem Standort in Denkendorf erreichen wir Kirchheim problemlos und stellen euch unsere Fotobox für Hochzeiten, Geburtstage und Firmenfeiern bereit. Voll ausgestatteter Service von Auf- bis Abbau.",
    testimonialText:
      "Die Fotobox hat meine Hochzeitsfeier in Kirchheim perfekt abgerundet. Alle Gäste waren begeistert!",
    testimonialAuthor: "Anna & Peter, Kirchheim unter Teck",
    metaTitle: "Fotobox mieten Kirchheim unter Teck | Hochzeit & Party | Feststube",
    metaDescription:
      "📸 Fotobox für Kirchheim unter Teck mieten. ✔️ Premium-Qualität ✔️ Sofortdruck ✔️ Ab 249€. Das Highlight für Hochzeiten am Fuß der Teck.",
  },
  waiblingen: {
    slug: "waiblingen",
    name: "Waiblingen",
    heroH1: "Deine Fotobox für Events in Waiblingen.",
    heroSubtext:
      "Hauptstadt des Rems-Murr-Kreises trifft auf Premium-Fotobox. Wir liefern aus Denkendorf direkt zu eurer Location in Waiblingen.",
    seoHeadline: "Fotobox-Spaß für Waiblingen und das Remstal",
    seoBody:
      "Waiblingen ist die lebendige Kreisstadt des Rems-Murr-Kreises und Gastgeber für viele tolle Events. Für eure Hochzeit, Firmenfeier oder Geburtstagsparty in Waiblingen und Umgebung steht unsere Fotobox bereit. Wir fahren über die A81 zu euch und sorgen für einen reibungslosen, professionellen Service.",
    testimonialText:
      "Fotobox für unsere Weihnachtsfeier in Waiblingen bestellt – der absolute Renner! Danke Feststube!",
    testimonialAuthor: "Marketing-Team, Waiblingen",
    metaTitle: "Fotobox mieten Waiblingen | Remstal & Kreis | Feststube",
    metaDescription:
      "📸 Fotobox für Waiblingen im Rems-Murr-Kreis mieten. ✔️ Zuverlässiger Service ✔️ Requisiten & Sofortdruck ✔️ Ab 249€. Jetzt anfragen!",
  },
  schorndorf: {
    slug: "schorndorf",
    name: "Schorndorf",
    heroH1: "Fotobox mieten in Schorndorf – Geburtsstadt des Automobils feiert!",
    heroSubtext:
      "In Gottlieb Daimlers Heimatstadt sorgen wir für das unvergessliche Photo-Erlebnis eurer Feier. Schnelle Lieferung aus Denkendorf.",
    seoHeadline: "Premium-Fotobox für Events in Schorndorf",
    seoBody:
      "Schorndorf, die Geburtsstadt Gottlieb Daimlers, ist bekannt für Innovationsgeist. Mit derselben Leidenschaft bringen wir euch die modernste Fotobox-Technologie für eure Hochzeit, Firmenfeier oder Geburtstagssause. Aus Denkendorf anreisend, kümmern wir uns um den kompletten Setup und lassen eure Gäste strahlen.",
    testimonialText:
      "Hammer-Service für unsere Firmenfeier in Schorndorf! Moderne Box, super Qualität, toller Support.",
    testimonialAuthor: "Produktionsleiter, Schorndorf",
    metaTitle: "Fotobox mieten Schorndorf | Firmenfeier & Hochzeit | Feststube",
    metaDescription:
      "📸 Fotobox für Schorndorf mieten. ✔️ Modernes Equipment ✔️ Professioneller Service ✔️ Ab 249€. Das Event-Highlight für das Remstal!",
  },
  sindelfingen: {
    slug: "sindelfingen",
    name: "Sindelfingen",
    heroH1: "Fotobox für Events in Sindelfingen.",
    heroSubtext:
      "Wo das Automobil zuhause ist, da feiern wir mit Stil. Premium-Fotobox für Firmenfeste, Hochzeiten und Partys in Sindelfingen.",
    seoHeadline: "Eure Fotobox für Sindelfingen und den Landkreis Böblingen",
    seoBody:
      "Sindelfingen, bekannt für seine internationale Industrie, ist auch eine Stadt der Feierkultur. Für eure Betriebsfeier, Produktpräsentation mit Rahmenprogramm oder Privatfeier bringen wir die Feststube-Fotobox direkt zu euch. Professionell, zuverlässig und mit besonderem Fokus auf Qualität.",
    testimonialText:
      "Die Fotobox war der perfekte Icebreaker auf unserem Betriebsfest in Sindelfingen. Tolles Konzept!",
    testimonialAuthor: "HR-Abteilung, Sindelfingen",
    metaTitle: "Fotobox mieten Sindelfingen | Betriebsfeier & Events | Feststube",
    metaDescription:
      "📸 Fotobox für Sindelfingen mieten. ✔️ Professionell für Betriebsfeiern ✔️ Requisiten & Druck ✔️ Ab 249€. Das Highlight für Events im Kreis Böblingen!",
  },
  boeblingen: {
    slug: "boeblingen",
    name: "Böblingen",
    heroH1: "Deine Fotobox für Böblingen und die Region.",
    heroSubtext:
      "Ob Schlosspark-Picknick oder Festsaal-Gala – in Böblingen sorgen wir mit unserer Fotobox für das unvergessliche Photo-Erlebnis.",
    seoHeadline: "Fotobox-Fun für Böblingen und die Region",
    seoBody:
      "Böblingen mit seinen Seen, Parks und schönen Eventlocations bietet die perfekte Kulisse für unvergessliche Feiern. Als Anbieter aus Denkendorf erreichen wir Böblingen schnell und unkompliziert. Egal ob ihr die Fotobox für eine Hochzeit im Kursaal, eine Firmenfeier oder eine Privatparty braucht – wir sind für euch da.",
    testimonialText:
      "Die Fotobox auf unserer Hochzeit in Böblingen war ein absoluter Knaller. Alle Gäste haben Stunden davor gestanden!",
    testimonialAuthor: "Lena & Marc, Böblingen",
    metaTitle: "Fotobox mieten Böblingen | Hochzeit & Firmenfeier | Feststube",
    metaDescription:
      "📸 Fotobox für Böblingen mieten. ✔️ Für alle Locations ✔️ Inkl. Sofortdruck & Requisiten ✔️ Ab 249€. Jetzt Verfügbarkeit prüfen!",
  },
  reutlingen: {
    slug: "reutlingen",
    name: "Reutlingen",
    heroH1: "Premium Fotobox mieten in Reutlingen.",
    heroSubtext:
      "Tor zur Schwäbischen Alb – und wir liefern dir das Party-Highlight! Professionelle Fotobox für Events in Reutlingen und der Achalm-Region.",
    seoHeadline: "Das Fotobox-Erlebnis für Reutlingen und die Alb",
    seoBody:
      "Reutlingen, die Großstadt am Fuß der Schwäbischen Alb, hat viele wunderschöne Locations für eure Hochzeit oder Party. Von der Achalm bis zur Stadthalle: Wir liefern unsere Fotobox pünktlich und professionell nach Reutlingen. Mit DSLR-Qualität, Sofortdruck und hunderten Requisiten machen wir eure Feier unvergesslich.",
    testimonialText:
      "Top Service für unsere Hochzeit in Reutlingen. Fotobox lief ohne eine einzige Panne – klasse!",
    testimonialAuthor: "Bianca & Thomas, Reutlingen",
    metaTitle: "Fotobox mieten Reutlingen | Hochzeit & Party | Feststube",
    metaDescription:
      "📸 Fotobox für Reutlingen mieten. ✔️ DSLR-Qualität ✔️ Sofortdruck ✔️ Ab 249€. Das Highlight für Hochzeiten und Events in Reutlingen!",
  },
  metzingen: {
    slug: "metzingen",
    name: "Metzingen",
    heroH1: "Fotobox für Events in Metzingen.",
    heroSubtext:
      "Outlet-City mit Premium-Fotobox-Service! Für Hochzeiten und Feiern in Metzingen und am Erms liefern wir aus Denkendorf.",
    seoHeadline: "Eure Fotobox in Metzingen – der Stadt der Schnäppchen & Feiern",
    seoBody:
      "Metzingen kennt jeder als Outlet-City – aber auch als Stadt mit großartigen Feiermöglichkeiten. Wir bringen euch die Premium-Fotobox nach Metzingen und sorgen für strahlendes Publikum auf eurer Hochzeit, Geburtstagsfeier oder Firmenveranstaltung. Aus Denkendorf anreisend sind wir in ca. 30 Minuten bei euch.",
    testimonialText:
      "Wir haben die Fotobox für unsere Firmenfeier in Metzingen gemietet und waren absolut begeistert!",
    testimonialAuthor: "Outlet-Unternehmen, Metzingen",
    metaTitle: "Fotobox mieten Metzingen | Party & Hochzeit | Feststube",
    metaDescription:
      "📸 Fotobox für Metzingen mieten. ✔️ Professioneller Service ✔️ Sofortdruck & Requisiten ✔️ Ab 249€. Für Events in der Outlet-City!",
  },
  tuebingen: {
    slug: "tuebingen",
    name: "Tübingen",
    heroH1: "Fotobox mieten in Tübingen – für Events im Unistadt-Flair.",
    heroSubtext:
      "Akademisches Flair trifft auf Party-Spaß: Für Hochzeiten, Studentenfeiern und Firmenfeste in Tübingen liefern wir die perfekte Fotobox.",
    seoHeadline: "Euer Fotobox-Experte für Tübingen am Neckar",
    seoBody:
      "Tübingen mit seiner traumhaften Altstadt, dem Neckar und dem akademischen Charme ist eine der schönsten Feierstädte Baden-Württembergs. Als zuverlässiger Partner aus Denkendorf bringen wir euch unsere Fotobox zu jeder Location – von der historischen Schlosskantine bis zum Französischen Viertel. Professionell, pünktlich und mit vollem Service.",
    testimonialText:
      "Fotobox für unsere Hochzeitsfeier in Tübingen bestellt – absolut traumhaft. Das Team war super!",
    testimonialAuthor: "Melissa & Jan, Tübingen",
    metaTitle: "Fotobox mieten Tübingen | Hochzeit & Studentenfete | Feststube",
    metaDescription:
      "📸 Fotobox für Tübingen mieten. ✔️ Premium-Qualität ✔️ Alle Locations ✔️ Ab 249€. Das Event-Highlight für Hochzeiten und Feiern in der Unistadt!",
  },
  geislingen: {
    slug: "geislingen",
    name: "Geislingen an der Steige",
    heroH1: "Deine Fotobox für Events in Geislingen an der Steige.",
    heroSubtext:
      "Hoch oben in der Steige – wir kommen zu euch! Professionelle Fotobox für Feiern in Geislingen und dem oberen Filstal.",
    seoHeadline: "Fotobox für Geislingen an der Steige",
    seoBody:
      "Geislingen an der Steige liegt idyllisch im oberen Filstal – perfekt für romantische Feiern und gemütliche Feste. Wir liefern unsere Fotobox aus Denkendorf nach Geislingen und sorgen für das gewisse Etwas auf eurer Hochzeit, Firmenfeier oder Geburtstagssause. Premium-Service, DSLR-Qualität und Sofortdruck – alles inklusive.",
    testimonialText:
      "Super Service bis nach Geislingen! Die Fotobox lief reibungslos und die Gäste liebten sie.",
    testimonialAuthor: "Hochzeitspaar, Geislingen an der Steige",
    metaTitle: "Fotobox mieten Geislingen an der Steige | Events | Feststube",
    metaDescription:
      "📸 Fotobox für Geislingen an der Steige mieten. ✔️ Lieferung ins obere Filstal ✔️ Sofortdruck ✔️ Ab 249€. Für Hochzeit & Firmenfeier!",
  },
  ludwigsburg: {
    slug: "ludwigsburg",
    name: "Ludwigsburg",
    heroH1: "Fotobox mieten in Ludwigsburg – Residenzstadt feiert!",
    heroSubtext:
      "In der Barockresidenz-Stadt muss auch die Feststube glänzen! Premium-Fotobox für Hochzeiten und Events im Großraum Ludwigsburg.",
    seoHeadline: "Das Fotobox-Highlight für Ludwigsburg und das Blühende Barock",
    seoBody:
      "Ludwigsburg, die Stadt der Barockschlösser und des Blühenden Barocks, ist ein beliebtes Ziel für Hochzeiten und Gala-Events. Wir aus Denkendorf bringen euch das Fotobox-Erlebnis in diese wunderschöne Stadt – von der Eventlocation im Schlossgarten bis zur modernen Veranstaltungshalle. Zuverlässig und voller Begeisterung für eure Feier.",
    testimonialText:
      "Perfekte Fotobox für unsere Gartenhochzeit in Ludwigsburg. Das Team war pünktlich und supernett!",
    testimonialAuthor: "Eva & Robert, Ludwigsburg",
    metaTitle: "Fotobox mieten Ludwigsburg | Hochzeit & Gala | Feststube",
    metaDescription:
      "📸 Fotobox für Ludwigsburg mieten. ✔️ Für Schloss-Locations ✔️ Sofortdruck & Requisiten ✔️ Ab 249€. Das Highlight für eure Residenzstadt-Feier!",
  },
  heilbronn: {
    slug: "heilbronn",
    name: "Heilbronn",
    heroH1: "Premium Fotobox mieten in Heilbronn.",
    heroSubtext:
      "An der Weinstraße Württembergs: Wir liefern eure Fotobox nach Heilbronn – für Hochzeiten, Firmenfeiern und Parties in der Großstadt am Neckar.",
    seoHeadline: "Eure Fotobox für Heilbronn und die Weinregion",
    seoBody:
      "Heilbronn ist die Großstadt am Neckar, bekannt für Wein, Gastronomie und Eventkultur. Für euer Event in Heilbronn – ob in der Experimenta, modernen Eventlocations oder im historischen Zentrum – bringen wir euch die Feststube-Fotobox. Die etwas längere Anfahrt aus Denkendorf ist für uns kein Problem.",
    testimonialText:
      "Tolle Fotobox für unsere Weinbergshochzeit in Heilbronn. Alles hat geklappt – super schön!",
    testimonialAuthor: "Bettina & Klaus, Heilbronn",
    metaTitle: "Fotobox mieten Heilbronn | Hochzeit & Firmenfeier | Feststube",
    metaDescription:
      "📸 Fotobox für Heilbronn mieten. ✔️ Für alle Locations ✔️ DSLR-Qualität ✔️ Ab 249€. Das Party-Highlight für Events in der Neckarstadt Heilbronn!",
  },
  backnang: {
    slug: "backnang",
    name: "Backnang",
    heroH1: "Fotobox mieten in Backnang – im Herzen des Murrtals.",
    heroSubtext:
      "Für Events in Backnang und dem Murrtal: Professionelle Fotobox mit Sofortdruck, geliefert direkt aus Denkendorf zu eurer Location.",
    seoHeadline: "Eure Fotobox für Backnang und das Rems-Murr-Gebiet",
    seoBody:
      "Backnang, die lebendige Stadt im Murrtal, ist ein beliebter Treffpunkt für Events und Feiern. Als Partner aus dem nahegelegenen Denkendorf liefern wir euch unsere Fotobox pünktlich nach Backnang. Egal ob Hochzeit, Jubiläum oder Firmenfeier im Rems-Murr-Kreis – professioneller Service mit vollem Auf- und Abbau ist dabei.",
    testimonialText:
      "Super Fotobox für unsere Firmenweihnachtsfeier in Backnang! Alle Kollegen waren begeistert.",
    testimonialAuthor: "Betriebsrat, Backnang",
    metaTitle: "Fotobox mieten Backnang | Murrtal & Rems-Murr | Feststube",
    metaDescription:
      "📸 Fotobox für Backnang mieten. ✔️ Murrtal-Service ✔️ Sofortdruck & Requisiten ✔️ Ab 249€. Für Hochzeit, Firmenfeier & Geburtstag!",
  },
  "schwaebisch-gmuend": {
    slug: "schwaebisch-gmuend",
    name: "Schwäbisch Gmünd",
    heroH1: "Fotobox mieten in Schwäbisch Gmünd – Stauferstadt feiert!",
    heroSubtext:
      "In der historischen Stauferstadt sorgen wir mit unserer Fotobox für das unvergessliche Highlight eurer Feier – geliefert aus Denkendorf.",
    seoHeadline: "Das Fotobox-Erlebnis für Schwäbisch Gmünd und die Region",
    seoBody:
      "Schwäbisch Gmünd mit seiner historischen Altstadt und dem internationalen Flair der Landesgartenschau ist ein toller Ort für Feiern. Wir bringen unsere Fotobox aus Denkendorf nach Gmünd und bieten professionellen Service für eure Hochzeit, Firmenevent oder Geburtstagsparty. Studio-Qualität und Sofortdruck für eure Stauferstadt-Feier.",
    testimonialText:
      "Wunderbare Fotobox für unsere Hochzeit in Schwäbisch Gmünd. Einfach klasse!",
    testimonialAuthor: "Hochzeitspaar, Schwäbisch Gmünd",
    metaTitle: "Fotobox mieten Schwäbisch Gmünd | Hochzeit & Events | Feststube",
    metaDescription:
      "📸 Fotobox für Schwäbisch Gmünd mieten. ✔️ DSLR-Qualität ✔️ Sofortdruck ✔️ Ab 249€. Das Highlight für Events in der Stauferstadt!",
  },
};
