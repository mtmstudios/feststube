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
      "Stuttgart feiert gerne – und wir liefern das absolute Highlight dafür! Da wir nur einen Katzensprung entfernt in Esslingen sitzen, sind wir bei jedem Event in Stuttgart blitzschnell vor Ort. Keine anonyme Spedition, sondern persönlicher Auf- und Abbau durch unser Team. Miete deine Fotobox für unvergessliche Momente in Stuttgart-Mitte, Bad Cannstatt, Vaihingen und Umgebung.",
    testimonialText:
      "Genialer Service für unser Corporate Event in Stuttgart. Die Box sah super edel aus!",
    testimonialAuthor: "Corporate Event GmbH, Stuttgart",
    metaTitle: "Fotobox mieten in Stuttgart | Feststube Esslingen",
    metaDescription:
      "Premium Fotobox für Hochzeit, Firmenfeier & Party in Stuttgart mieten. DSLR-Qualität, Sofortdruck & stressfreier Aufbau aus Esslingen. Jetzt anfragen!",
  },
  ulm: {
    slug: "ulm",
    name: "Ulm",
    heroH1: "Premium Fotobox mieten in Ulm & Neu-Ulm.",
    heroSubtext:
      "Modernes Design trifft auf grenzenlosen Spaß. Sichere dir das Highlight für deine Hochzeit oder Party an der Donau.",
    seoHeadline: "Fotobox-Spaß rund um das Ulmer Münster",
    seoBody:
      "Du planst ein Event in Ulm, Neu-Ulm oder im Alb-Donau-Kreis? Die Feststube macht deine Feier unvergesslich. Über die B10/A8 sind wir aus Esslingen schnell bei euch und kümmern uns um den kompletten, stressfreien Aufbau direkt an eurer Location. Studio-Qualität, Sofortdruck und Requisiten – alles aus einer Hand für eure Ulmer Party.",
    testimonialText:
      "Haben die Box für unsere Hochzeit in Ulm gebucht. Top Qualität und der Drucker ist irre schnell!",
    testimonialAuthor: "Julia & Tom, Ulm",
    metaTitle: "Fotobox mieten in Ulm | Feststube Esslingen",
    metaDescription:
      "Premium Fotobox für Events in Ulm & Neu-Ulm mieten. DSLR-Kamera, Sofortdruck & professioneller Aufbau. Jetzt unverbindlich anfragen!",
  },
  goeppingen: {
    slug: "goeppingen",
    name: "Göppingen",
    heroH1: "Deine Fotobox für unvergessliche Events in Göppingen.",
    heroSubtext:
      "Stressfreie Lieferung, Studio-Qualität und 100% Spaß für deine Feier im Filstal.",
    seoHeadline: "Das Party-Highlight für Göppingen und das Filstal",
    seoBody:
      "Mache deine Hochzeit, deinen Geburtstag oder deine Firmenfeier in Göppingen zu einem echten Erlebnis. Als euer regionaler Partner aus dem benachbarten Esslingen garantieren wir eine reibungslose Lieferung und professionelle Betreuung im gesamten Kreis Göppingen. Lehne dich zurück, während wir die Technik aufbauen – und dann heißt es: Lächeln und feiern!",
    testimonialText:
      "Der Hit auf meinem 30. Geburtstag in Göppingen! Die Lieferung war auf die Minute pünktlich.",
    testimonialAuthor: "Sarah M., Göppingen",
    metaTitle: "Fotobox mieten in Göppingen | Feststube Esslingen",
    metaDescription:
      "Fotobox für Hochzeit, Geburtstag & Firmenfeier in Göppingen mieten. Premium-Qualität aus Esslingen mit stressfreiem Aufbau. Jetzt anfragen!",
  },
};
